import type { NavItem, Post, Project, SocialLink } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' }
];

export const HERO_DATA = {
  name: 'Roberto Aleydonn',
  title: 'Aleydon',
  bio: 'A dedicated Full Stack Developer focused on building functional and responsive web applications. I enjoy tackling new challenges and transforming ideas into clean, working code while constantly expanding my technical toolkit.',
  resumeUrl: '/resume.pdf',
  avatarUrl: '/images/avatar.jpeg',
  avatarAlt: 'Roberto Aleydon profile photo'
} as const;

export const POSTS: Post[] = [
  {
    id: 'post-1',
    title: 'Making a design system from scratch',
    date: '12 Feb 2020',
    categories: ['Design', 'Pattern'],
    excerpt:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    slug: 'making-a-design-system-from-scratch'
  },
  {
    id: 'post-2',
    title: 'Creating pixel perfect icons in Figma',
    date: '12 Feb 2020',
    categories: ['Figma', 'Icon Design'],
    excerpt:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    slug: 'creating-pixel-perfect-icons-in-figma'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Designing Dashboards',
    year: '2020',
    tag: 'Dashboard',
    excerpt:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    imageUrl: '/images/dashboard-preview.svg',
    imageAlt: 'Dashboard design preview'
  },
  {
    id: 'proj-2',
    title: 'Vibrant Portraits of 2020',
    year: '2018',
    tag: 'Illustration',
    excerpt:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    imageUrl: '/images/portrait-preview.svg',
    imageAlt: 'Vibrant portrait illustration'
  },
  {
    id: 'proj-3',
    title: '36 Days of Malayalam type',
    year: '2018',
    tag: 'Typography',
    excerpt:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    imageUrl: '/images/typography-preview.svg',
    imageAlt: 'Malayalam typography project'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'fb',
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: 'facebook'
  },
  {
    id: 'ig',
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: 'instagram'
  },
  { id: 'tw', label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  {
    id: 'li',
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: 'linkedin'
  }
];
