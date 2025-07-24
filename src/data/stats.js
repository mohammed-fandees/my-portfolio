import { Users, Award, Clock7, Code as CodeStat } from 'lucide-react';
import getWakaTime from "../utils/wakatime";
import { projects } from './projects';

import clientsList from './clients';

export const stats = [
  {
    count: clientsList.length,
    title: 'Clients',
    icon: Users
  },
  {
    count: projects.length,
    title: 'Projects',
    icon: CodeStat
  },
  {
    count: 24,
    title: 'Certificates',
    icon: Award
  },
  {
    count: getWakaTime(),
    title: 'Coding Hours',
    icon: Clock7
  }
];
