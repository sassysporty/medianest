export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  icon?: string;
  features?: string[];
  price?: string;
}

export interface Testimonial {
  name: string;
  business: string;
  quote: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface Value {
  title: string;
  description: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  business?: string;
  service?: string;
  message: string;
}

export interface SubService {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceProcess {
  step: string;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  heroSubtitle: string;
  overview: string;
  overviewPoints: string[];
  subServices: SubService[];
  process: ServiceProcess[];
  whyUs: string[];
  faqs: ServiceFAQ[];
  ctaTitle: string;
  ctaSubtitle: string;
}
