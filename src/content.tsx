import { Coffee, Heart, Music, Waves, Warehouse, PenTool, Trophy, LucideIcon } from 'lucide-react';
import contentData from './data.json';

// Icon mapping to allow JSON to specify icons by name
const ICON_MAP: Record<string, LucideIcon> = {
  Coffee,
  Heart,
  Music,
  Waves,
  Warehouse,
  PenTool,
  Trophy
};

export const personalInfo = contentData.personalInfo;
export const education = contentData.education;
export const skills = contentData.skills;
export const writingSamples = contentData.writingSamples;

export const experience = contentData.experience.map(exp => ({
  ...exp,
  icon: ICON_MAP[exp.iconName] || Heart // Default to Heart if icon name not found
}));

export const creativeProjects = contentData.creativeProjects.map(project => ({
  ...project,
  icon: ICON_MAP[project.iconName] || Music
}));
