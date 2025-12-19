
export type ViewType = 'Dashboard' | 'Schedule' | 'Clients' | 'Inventory' | 'Services' | 'Settings';

export interface Pet {
  id: string;
  name: string;
  breed: string;
  age: string;
  weight: string;
  gender: 'Male' | 'Female';
  image: string;
  alerts: Alert[];
  history: ServiceRecord[];
}

export interface Alert {
  type: 'Vaccine' | 'Surgery' | 'Other';
  title: string;
  message: string;
}

export interface ServiceRecord {
  date: string;
  serviceName: string;
  provider: string;
  status: 'Completed' | 'Pending' | 'Ongoing';
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'Active' | 'Frequent' | 'Inactive' | 'Due Payment';
  image: string;
  pets: Pet[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  icon: string;
  category: string;
  isPopular?: boolean;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discountTag: string;
  features: string[];
  themeColor: string;
  isBestSeller?: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  lowStockThreshold: number;
}
