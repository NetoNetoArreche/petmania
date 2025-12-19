
import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';

const AuthView: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);

        try {
            if (isSignUp) {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                });
                if (error) throw error;
                setMessage('Check your email for the confirmation link!');
            } else {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (error) throw error;
            }
        } catch (err: any) {
            setError(err.message || 'An error occurred during authentication.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark p-4">
            <div className="w-full max-w-md bg-surface-light dark:bg-surface-dark rounded-2xl shadow-card border border-transparent dark:border-gray-700 overflow-hidden">
                <div className="p-8">
                    <div className="flex flex-col items-center mb-8">
                        <div className="size-16 bg-pastel-blue dark:bg-primary/20 text-primary rounded-2xl flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-4xl">pets</span>
                        </div>
                        <h1 className="text-2xl font-black font-display text-text-primary dark:text-white">PetControl</h1>
                        <p className="text-text-secondary text-sm mt-1">Management Portal Access</p>
                    </div>

                    <form onSubmit={handleAuth} className="space-y-5">
                        <div>
                            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Email Address</label>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-primary transition-colors">mail</span>
                                <input
                                    type="email"
                                    required
                                    placeholder="doctor@petcontrol.com"
                                    className="block w-full pl-10 pr-4 py-3 bg-[#f0f3f4] dark:bg-gray-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none text-text-primary dark:text-white"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Password</label>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-primary transition-colors">lock</span>
                                <input
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    className="block w-full pl-10 pr-4 py-3 bg-[#f0f3f4] dark:bg-gray-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none text-text-primary dark:text-white"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="bg-pastel-red dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs p-3 rounded-lg border border-red-100 dark:border-red-900/30 flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">error</span>
                                {error}
                            </div>
                        )}

                        {message && (
                            <div className="bg-pastel-green dark:bg-green-900/20 text-secondary dark:text-green-400 text-xs p-3 rounded-lg border border-green-100 dark:border-green-900/30 flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">check_circle</span>
                                {message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <span className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            ) : (
                                <>
                                    <span className="material-symbols-outlined text-lg">login</span>
                                    {isSignUp ? 'Create Account' : 'Sign In'}
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 text-center">
                        <p className="text-sm text-text-secondary">
                            {isSignUp ? 'Already have an account?' : "Don't have an account yet?"}
                            <button
                                onClick={() => setIsSignUp(!isSignUp)}
                                className="ml-2 text-primary font-bold hover:underline"
                            >
                                {isSignUp ? 'Sign In' : 'Create one now'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthView;
