export interface Post {
  id: string;
  title: string;
  date: string;
  categories: string[];
  excerpt: string;
  slug: string;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  tag: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: 'facebook' | 'instagram' | 'twitter' | 'linkedin';
}

export interface NavItem {
  label: string;
  href: string;
}
