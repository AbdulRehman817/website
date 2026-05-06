// Shared types for the application

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  features: string[];
}

export interface Review {
  name: string;
  initials: string;
  rating: number;
  date: string;
  text: string;
  color: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  message: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
}