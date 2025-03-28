import { 
  Code, 
  Terminal, 
  LayoutGrid, 
  ShoppingBag, 
  Clock, 
  BookOpen 
} from 'lucide-react';

export const projects = [
  {
    title: 'E-commerce Website',
    description: 'A modern e-commerce platform with advanced filtering and cart functionality.',
    image: '',
    icon: ShoppingBag,
    category: 'Web App',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/username/repo'
  },
  {
    title: 'Portfolio Template',
    description: 'A customizable portfolio template for creative professionals.',
    image: '',
    icon: LayoutGrid,
    category: 'Frontend',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/username/repo'
  },
  {
    title: 'Task Manager',
    description: 'A productivity app to help you manage your daily tasks and projects.',
    image: '',
    icon: Clock,
    category: 'Web App',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/username/repo'
  },
  {
    title: 'Blog Platform',
    description: 'A content management system for bloggers with markdown support.',
    image: '',
    icon: BookOpen,
    category: 'Web App',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/username/repo'
  },
  {
    title: 'Code Editor',
    description: 'A browser-based code editor with syntax highlighting and live preview.',
    image: '',
    icon: Code,
    category: 'Tool',
    tech: ['React', 'Monaco Editor', 'WebSockets'],
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/username/repo'
  },
  {
    title: 'CLI Tool',
    description: 'A command-line tool for automating web development workflows.',
    image: '',
    icon: Terminal,
    category: 'Tool',
    tech: ['Node.js', 'Commander.js', 'Inquirer'],
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/username/repo'
  }
];