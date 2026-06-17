import {
  Layers,
  Newspaper,
  Image as ImageIcon,
  Users,
  LayoutDashboard,
  Settings
} from 'lucide-react';

import {
  StatItem,
  RecentActivityItem,
  SchoolSection,
  NewsArticle,
  MediaFile,
  UserAccount,
  MenuItem
} from './index';

export const DASHBOARD_STATS: StatItem[] = [
  { name: 'Total Sections', value: '8', change: '+2 new this week', icon: Layers, color: 'text-blue-400' },
  { name: 'Published News', value: '42', change: '+5 new since yesterday', icon: Newspaper, color: 'text-indigo-400' },
  { name: 'Media Files', value: '184', change: '8.4 GB used', icon: ImageIcon, color: 'text-emerald-400' },
  { name: 'Active Users', value: '6', change: '2 online now', icon: Users, color: 'text-violet-400' },
];

export const RECENT_ACTIVITIES: RecentActivityItem[] = [
  { title: 'New article published', detail: '"Admission Schedule 2026-2027" by Admin John', time: '10 minutes ago', type: 'news' },
  { title: 'Hero Section updated', detail: 'Changed background image and title text', time: '2 hours ago', type: 'section' },
  { title: 'New admin registered', detail: 'Jane Cooper joined the team', time: '5 hours ago', type: 'user' },
  { title: 'Media asset uploaded', detail: 'school_building_front.png (1.2MB)', time: '1 day ago', type: 'media' },
];

export const MOCK_SECTIONS: SchoolSection[] = [
  { id: 1, name: 'Hero Banner', description: 'Main intro section with video background and primary CTA.', status: 'Active', updated: '2 hours ago' },
  { id: 2, name: 'About School', description: 'Short history, message from the Principal, and school credentials.', status: 'Active', updated: '1 day ago' },
  { id: 3, name: 'Core Values', description: 'A 3-column feature display showing Integrity, Excellence, and Respect.', status: 'Active', updated: '3 days ago' },
  { id: 4, name: 'Academic Programs', description: 'Interactive cards linking to Elementary, Middle, and High School pages.', status: 'Active', updated: '1 week ago' },
  { id: 5, name: 'Latest Announcements Banner', description: 'Emergency announcement ticker shown at the very top of the page.', status: 'Draft', updated: '2 weeks ago' },
  { id: 6, name: 'Virtual Tour Section', description: 'Embed code for the 360 virtual tour of the school campus.', status: 'Draft', updated: '1 month ago' },
];

export const MOCK_ARTICLES: NewsArticle[] = [
  { id: 1, title: 'Annual School Sports Day 2026', category: 'Events', excerpt: 'Join us for a day of athletic excellence and school spirit this Saturday at the main stadium.', status: 'Published', author: 'Principal Miller', date: 'June 15, 2026' },
  { id: 2, title: 'High School Graduation Ceremony Details', category: 'Announcements', excerpt: 'Important instructions for graduates, parents, and guests attending the commencement next week.', status: 'Published', author: 'Vice Principal Sarah', date: 'June 12, 2026' },
  { id: 3, title: 'Science Fair Winners Announced', category: 'Academics', excerpt: 'Congratulations to our junior high students for winning the regional STEM cup with their solar panel design.', status: 'Published', author: 'Mr. Henderson', date: 'June 10, 2026' },
  { id: 4, title: 'Summer Camp Registration Now Open', category: 'Programs', excerpt: 'Enrichment courses, coding camps, and outdoor sports programs are available for ages 6-15.', status: 'Draft', author: 'Mrs. Davis', date: 'June 08, 2026' },
  { id: 5, title: 'Renovations for School Library', category: 'Infrastructure', excerpt: 'The school library will be closed for modernization from July 1st to August 15th.', status: 'Draft', author: 'Admin John', date: 'June 01, 2026' },
];

export const MOCK_MEDIA: MediaFile[] = [
  { id: 1, name: 'school_building_front.png', type: 'image', size: '1.2 MB', date: 'June 15, 2026', url: '/images/school_building_front.png' },
  { id: 2, name: 'academic_calendar_2026.pdf', type: 'document', size: '450 KB', date: 'June 12, 2026', url: '/docs/academic_calendar_2026.pdf' },
  { id: 3, name: 'sports_day_highlights.mp4', type: 'video', size: '18.4 MB', date: 'June 10, 2026', url: '/videos/sports_day_highlights.mp4' },
  { id: 4, name: 'admission_form_template.docx', type: 'document', size: '120 KB', date: 'June 08, 2026', url: '/docs/admission_form_template.docx' },
  { id: 5, name: 'budget_report_q2.xlsx', type: 'spreadsheet', size: '85 KB', date: 'June 05, 2026', url: '/docs/budget_report_q2.xlsx' },
  { id: 6, name: 'student_handbook.pdf', type: 'document', size: '2.4 MB', date: 'June 01, 2026', url: '/docs/student_handbook.pdf' },
];

export const MOCK_USERS: UserAccount[] = [
  { id: 1, name: 'John Doe', email: 'john.doe@school.edu', role: 'Owner', status: 'Active', lastActive: 'Online now' },
  { id: 2, name: 'Sarah Jenkins', email: 's.jenkins@school.edu', role: 'Super Admin', status: 'Active', lastActive: '10 minutes ago' },
  { id: 3, name: 'Robert Chen', email: 'r.chen@school.edu', role: 'Editor', status: 'Active', lastActive: '3 hours ago' },
  { id: 4, name: 'Emily Davis', email: 'e.davis@school.edu', role: 'Editor', status: 'Active', lastActive: '2 days ago' },
  { id: 5, name: 'Marcus Stone', email: 'm.stone@school.edu', role: 'Viewer', status: 'Suspended', lastActive: '2 weeks ago' },
];

export const MOCK_MENU_ITEMS: MenuItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Section', href: '/dashboard/section', icon: Layers },
  { name: 'News', href: '/dashboard/news', icon: Newspaper },
  { name: 'Media Library', href: '/dashboard/media', icon: ImageIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  { name: 'Users', href: '/dashboard/users', icon: Users },
];
