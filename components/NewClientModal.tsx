
import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';

interface NewClientModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

const initialFormData = {
    name: '',
    email: '',
    phone: '',
    petName: '',
    petBreed: '',
    petAge: '',
    petWeight: '',
    petGender: 'Male' as 'Male' | 'Female',
};

const NewClientModal: React.FC<NewClientModalProps> = ({ isOpen, onClose, onSuccess }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [avatarFile, setAvatarFile] = useState<File | null>(null);
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (!isOpen) {
            setFormData(initialFormData);
            setAvatarFile(null);
            setAvatarPreview(null);
        }
    }, [isOpen]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAvatarFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            let imageUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=random`;

            // 1. Upload Avatar if selected
            if (avatarFile) {
                const fileExt = avatarFile.name.split('.').pop();
                const fileName = `${Math.random()}.${fileExt}`;
                const filePath = `${fileName}`;

                const { error: uploadError } = await supabase.storage
                    .from('avatars')
                    .upload(filePath, avatarFile);

                if (uploadError) throw uploadError;

                const { data: { publicUrl } } = supabase.storage
                    .from('avatars')
                    .getPublicUrl(filePath);

                imageUrl = publicUrl;
            }

            // 2. Insert Client
            const { data: clientData, error: clientError } = await supabase
                .from('clients')
                .insert([{
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    status: 'Active',
                    image: imageUrl
                }])
                .select()
                .single();

            if (clientError) throw clientError;

            // 3. Insert Pet
            const { error: petError } = await supabase
                .from('pets')
                .insert([{
                    client_id: clientData.id,
                    name: formData.petName,
                    breed: formData.petBreed,
                    age: formData.petAge,
                    weight: formData.petWeight,
                    gender: formData.petGender,
                    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=200&h=200'
                }]);

            if (petError) throw petError;

            onSuccess();
            onClose();
        } catch (err: any) {
            alert(err.message || 'Error adding client');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-surface-light dark:bg-surface-dark w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="px-8 py-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-white dark:bg-surface-dark">
                    <div>
                        <h2 className="text-xl font-black font-display text-text-primary dark:text-white">Add New Client</h2>
                        <p className="text-text-secondary text-sm">Fill in the details for both owner and pet.</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-8 overflow-y-auto max-h-[70vh] no-scrollbar">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Owner Section */}
                        <div className="space-y-5">
                            <h3 className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">person</span> Owner Information
                            </h3>

                            <div className="flex flex-col items-center gap-4 mb-4">
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className="size-24 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center cursor-pointer border-2 border-dashed border-gray-300 dark:border-gray-600 overflow-hidden group hover:border-primary transition-all shadow-inner"
                                >
                                    {avatarPreview ? (
                                        <img src={avatarPreview} alt="Preview" className="size-full object-cover" />
                                    ) : (
                                        <div className="text-center">
                                            <span className="material-symbols-outlined text-gray-400 group-hover:text-primary mb-1">add_a_photo</span>
                                            <p className="text-[9px] font-bold text-text-secondary uppercase">Avatar</p>
                                        </div>
                                    )}
                                </div>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    className="text-[10px] font-bold text-primary uppercase hover:underline"
                                >
                                    Select Image
                                </button>
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold text-text-secondary uppercase mb-1 ml-1">Full Name</label>
                                <input
                                    required
                                    className="w-full px-4 py-3 bg-[#f0f3f4] dark:bg-gray-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none text-text-primary dark:text-white"
                                    placeholder="e.g. John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold text-text-secondary uppercase mb-1 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 bg-[#f0f3f4] dark:bg-gray-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none text-text-primary dark:text-white"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold text-text-secondary uppercase mb-1 ml-1">Phone Number</label>
                                <input
                                    className="w-full px-4 py-3 bg-[#f0f3f4] dark:bg-gray-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none text-text-primary dark:text-white"
                                    placeholder="(11) 98765-4321"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Pet Section */}
                        <div className="space-y-5">
                            <h3 className="text-xs font-bold text-secondary uppercase tracking-widest flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">pets</span> Pet Information
                            </h3>

                            <div>
                                <label className="block text-[10px] font-bold text-text-secondary uppercase mb-1 ml-1">Pet Name</label>
                                <input
                                    required
                                    className="w-full px-4 py-3 bg-[#f0f3f4] dark:bg-gray-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-secondary/50 transition-all outline-none text-text-primary dark:text-white"
                                    placeholder="e.g. Buddy"
                                    value={formData.petName}
                                    onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold text-text-secondary uppercase mb-1 ml-1">Breed</label>
                                <input
                                    className="w-full px-4 py-3 bg-[#f0f3f4] dark:bg-gray-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-secondary/50 transition-all outline-none text-text-primary dark:text-white"
                                    placeholder="e.g. Beagle"
                                    value={formData.petBreed}
                                    onChange={(e) => setFormData({ ...formData, petBreed: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-bold text-text-secondary uppercase mb-1 ml-1">Age</label>
                                    <input
                                        className="w-full px-4 py-3 bg-[#f0f3f4] dark:bg-gray-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-secondary/50 transition-all outline-none text-text-primary dark:text-white"
                                        placeholder="2 Years"
                                        value={formData.petAge}
                                        onChange={(e) => setFormData({ ...formData, petAge: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-text-secondary uppercase mb-1 ml-1">Gender</label>
                                    <select
                                        className="w-full px-4 py-3 bg-[#f0f3f4] dark:bg-gray-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-secondary/50 transition-all outline-none text-text-primary dark:text-white appearance-none"
                                        value={formData.petGender}
                                        onChange={(e) => setFormData({ ...formData, petGender: e.target.value as 'Male' | 'Female' })}
                                    >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 flex gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-3 px-4 border border-gray-200 dark:border-gray-700 text-text-secondary font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-[2] bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <span className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            ) : (
                                <>
                                    <span className="material-symbols-outlined">save</span>
                                    Save Client & Pet
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewClientModal;
