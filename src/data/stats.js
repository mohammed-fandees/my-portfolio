import { Users, Award, Clock7, Code as CodeStat } from 'lucide-react';
import getWakaTime from "../utils/wakatime";

export const stats = [
  {
    count: 2,
    title: 'Clients',
    icon: Users
  },
  {
    count: 25,
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
