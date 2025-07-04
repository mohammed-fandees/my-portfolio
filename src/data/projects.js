import { 
  Flame, 
  Send, 
  LayoutGrid, 
  ShoppingCart, 
  // ListTodo, 
  BookOpen 
} from 'lucide-react';

export const projects = [
  {
    title: 'E-commerce Website',
    description: 'A modern e-commerce platform with advanced features and cart functionality.',
    icon: ShoppingCart,
    category: 'Web App',
    tech: ['React', 'Node.js', 'Supabase', 'Shadcn UI', 'Tailwind CSS'],
    liveUrl: 'https://exclusive-xi.vercel.app',
    codeUrl: 'https://github.com/mohammed-fandees/e-commerce'
  },
  {
    title: 'AI Chatbot',
    description: 'A customizable AI chatbot for various applications.',
    icon: LayoutGrid,
    category: 'AI Tool',
    tech: ['React.js', 'Tailwind CSS', 'OpenRouter AI', 'Shadcn UI'],
    liveUrl: 'https://fanbotai.vercel.app',
    codeUrl: 'https://github.com/mohammed-fandees/fanbot'
  },
  // {
  //   title: 'Task Manager',
  //   description: 'A productivity app to help you manage your daily tasks and projects.',
  //   icon: ListTodo,
  //   category: 'Web App',
  //   tech: ['React', 'Firebase', 'Tailwind CSS'],
  //   liveUrl: 'https://example.com',
  //   codeUrl: 'https://github.com/username/repo'
  // },
  {
    title: 'Blog Platform',
    description: 'A content management system for bloggers with markdown support.',
    icon: BookOpen,
    category: 'Web App',
    tech: ['Next.js', 'Supabase', 'Shadcn UI', 'Tailwind CSS'],
    liveUrl: 'https://i3jaz.vercel.app',
    codeUrl: 'https://github.com/mohammed-fandees/ijaz-blog'
  },
  {
    title: 'CalorieZen',
    description: 'A browser-based calorie tracker with a user-friendly interface.',
    icon: Flame,
    category: 'Web App',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://caloriezen.vercel.app/',
    codeUrl: 'https://github.com/mohammed-fandees/caloriezen'
  },
  {
    title: 'Ephemeral Chat',
    description: 'A temporary chat application with self-destructing messages.',
    icon: Send,
    category: 'Web App',
    tech: ['React', 'Supabase', 'Realtime', 'Tailwind CSS'],
    liveUrl: 'https://ephemral-chat.vercel.app/',
    codeUrl: 'https://github.com/mohammed-fandees/ephemeral-chat'
  }
];