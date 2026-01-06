
import { Project, Experience, PricingPlan, ArchiveItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Horizon OS',
    category: 'Product Design',
    description: 'A revolutionary spatial computing interface.',
    longDescription: 'Horizon OS was developed to bridge the gap between human intuition and complex spatial computing. By utilizing advanced Metal shaders and SwiftUI gestures, we created a system that feels like it disappears, leaving only the user and their tasks.',
    imageUrl: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200',
    tags: ['SwiftUI', 'VisionPro', 'Metal'],
    link: '#',
    date: 'Sept 2024',
    team: ['QwertyDeveloper (Lead)', 'Sarah Chen (Graphics)', 'Marcus V. (Product)']
  },
  {
    id: '2',
    title: 'Aura Health',
    category: 'Mobile App',
    description: 'Personal wellness reimagined.',
    longDescription: 'Aura Health is more than a meditation app. It leverages biometric sensors on modern wearables to detect stress levels before the user does, suggesting Micro-Actions that realign focus and calm the nervous system.',
    imageUrl: 'https://images.unsplash.com/photo-1551632891-073c88365265?auto=format&fit=crop&q=80&w=1200',
    tags: ['React Native', 'TypeScript', 'HealthKit'],
    link: '#',
    date: 'June 2024',
    team: ['QwertyDeveloper (Dev)', 'Elena R. (Design)']
  },
  {
    id: '3',
    title: 'Nebula Engine',
    category: 'Engineering',
    description: 'High-performance rendering engine.',
    longDescription: 'Built from the ground up in Rust, the Nebula Engine provides sub-millisecond raytracing in the browser via WebGPU. It is currently being utilized by architectural firms for real-time collaborative VR walkthroughs.',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200',
    tags: ['WebGPU', 'Rust', 'Wasm'],
    link: '#',
    date: 'March 2024',
    team: ['QwertyDeveloper (Architect)']
  },
  {
    id: '4',
    title: 'Stellar CRM',
    category: 'Web Application',
    description: 'Ultra-fast client management.',
    longDescription: 'Traditional CRMs are cluttered. Stellar is the opposite. It uses a command-palette first approach, allowing agency owners to manage hundreds of high-value relationships without ever lifting their hands from the keyboard.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind'],
    link: '#',
    date: 'Jan 2024',
    team: ['QwertyDeveloper (Full-stack)']
  }
];

export const ARCHIVE_PHOTOS: ArchiveItem[] = [
  { id: 'a1', title: 'Aesthetic Interface v1', date: 'Oct 2024', imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { id: 'a2', title: 'Branding Guidelines', date: 'Sept 2024', imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-2' },
  { id: 'a3', title: 'Mobile Prototype', date: 'Aug 2024', imageUrl: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { id: 'a4', title: 'Design System Typography', date: 'July 2024', imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-8', rowSpan: 'md:row-span-1' },
  { id: 'a5', title: 'Product Photography', date: 'June 2024', imageUrl: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { id: 'a6', title: 'Studio Session', date: 'May 2024', imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { id: 'a7', title: '3D Render Test', date: 'April 2024', imageUrl: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-2' },
  { id: 'a8', title: 'Minimal Workspace', date: 'March 2024', imageUrl: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { id: 'a9', title: 'Hardware Concept', date: 'Feb 2024', imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-12', rowSpan: 'md:row-span-1' },
  { id: 'a10', title: 'UX Flow Mapping', date: 'Jan 2024', imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-6', rowSpan: 'md:row-span-1' },
  { id: 'a11', title: 'Code Architecture', date: 'Dec 2023', imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-6', rowSpan: 'md:row-span-1' },
  { id: 'a12', title: 'Macro Details', date: 'Nov 2023', imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-2' },
  { id: 'a13', title: 'Color Theory Study', date: 'Oct 2023', imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-8', rowSpan: 'md:row-span-1' },
  { id: 'a14', title: 'Icon Library', date: 'Sept 2023', imageUrl: 'https://images.unsplash.com/photo-1614850715649-1d0106293bd1?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-8', rowSpan: 'md:row-span-1' },
  { id: 'a15', title: 'Web App Frame', date: 'Aug 2023', imageUrl: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { id: 'a16', title: 'Dark Mode Exploration', date: 'July 2023', imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { id: 'a17', title: 'Neural Topology', date: 'June 2023', imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { id: 'a18', title: 'Sleek Watch Face', date: 'May 2023', imageUrl: 'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-12', rowSpan: 'md:row-span-2' },
  { id: 'a19', title: 'Interface Skeuomorphism', date: 'April 2023', imageUrl: 'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-6', rowSpan: 'md:row-span-1' },
  { id: 'a20', title: 'Gradient Mesh Study', date: 'March 2023', imageUrl: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-6', rowSpan: 'md:row-span-1' },
  { id: 'a21', title: 'Spatial Concept', date: 'Feb 2023', imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { id: 'a22', title: 'Monolith Design', date: 'Jan 2023', imageUrl: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { id: 'a23', title: 'Glass Architecture', date: 'Dec 2022', imageUrl: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { id: 'a24', title: 'Organic Flows', date: 'Nov 2022', imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-8', rowSpan: 'md:row-span-1' },
  { id: 'a25', title: 'Cyber UI Test', date: 'Oct 2022', imageUrl: 'https://images.unsplash.com/photo-1614850715649-1d0106293bd1?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { id: 'a26', title: 'Minimalist Poster', date: 'Sept 2022', imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { id: 'a27', title: 'Hardware Shell', date: 'Aug 2022', imageUrl: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { id: 'a28', title: 'Typography Detail', date: 'July 2022', imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1' },
  { id: 'a29', title: 'Studio Session', date: 'June 2022', imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-12', rowSpan: 'md:row-span-1' },
  { id: 'a30', title: 'Finished Product', date: 'May 2022', imageUrl: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=800', colSpan: 'md:col-span-6', rowSpan: 'md:row-span-1' },
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Neural Design Labs',
    role: 'Principal Product Engineer',
    period: '2022 - Present',
    description: 'Leading the design-engineering bridge for next-gen AI interfaces.',
    skills: ['AI/ML Integration', 'Architecture', 'Team Lead']
  },
  {
    id: '2',
    company: 'Aether Systems',
    role: 'Senior UI/UX Architect',
    period: '2020 - 2022',
    description: 'Architected design systems used by millions of developers globally.',
    skills: ['Design Systems', 'React', 'User Research']
  },
  {
    id: '3',
    company: 'Luminous Creative',
    role: 'Interactive Developer',
    period: '2018 - 2020',
    description: 'Crafted award-winning web experiences for Fortune 500 brands.',
    skills: ['Animation', 'WebGL', 'Frontend']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Discovery',
    price: '$2,500',
    description: 'High-impact landing experiences.',
    features: ['High-fidelity Prototypes', 'Single Page Application', 'Custom Animations', '3 Revisions']
  },
  {
    id: 'pro',
    name: 'Identity',
    price: '$6,000',
    description: 'Complete digital presence.',
    isPopular: true,
    features: ['Full Design System', 'Multi-page Web App', 'SEO Strategy', 'Ongoing Support']
  },
  {
    id: 'enterprise',
    name: 'Eclipse',
    price: 'Custom',
    description: 'The future of your industry.',
    features: ['Custom Engine Development', 'Hardware Integration', 'White-glove Service', 'Priority Queue']
  }
];
