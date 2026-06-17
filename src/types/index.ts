import { LucideIcon } from 'lucide-react';

export interface StatItem {
  name: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: string;
}

export interface RecentActivityItem {
  title: string;
  detail: string;
  time: string;
  type: 'news' | 'section' | 'user' | 'media';
}

export interface SchoolSection {
  id: number;
  name: string;
  description: string;
  status: 'Active' | 'Draft';
  updated: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  status: 'Published' | 'Draft';
  author: string;
  date: string;
}

export interface MediaFile {
  id: number;
  name: string;
  type: 'image' | 'document' | 'video' | 'spreadsheet';
  size: string;
  date: string;
  url: string;
}

export interface UserAccount {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Suspended';
  lastActive: string;
}

export interface MenuItem {
  name: string;
  href: string;
  icon: LucideIcon;
}
