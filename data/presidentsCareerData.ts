import { presidents1to15 } from './presidents1to15';
import { presidents16to30 } from './presidents16to30';
import { presidents31to46 } from './presidents31to46';
import { CareerCategory, PresidentCareerProfile } from '../types';

export const presidentsCareerData: Record<number, PresidentCareerProfile> = {
  ...presidents1to15,
  ...presidents16to30,
  ...presidents31to46
};

export const getPresidentCareer = (id: number): PresidentCareerProfile | undefined => {
  return presidentsCareerData[id];
};

export interface CareerCategoryMetadata {
  label: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  iconName: 'GraduationCap' | 'Briefcase' | 'Shield' | 'Building2' | 'Landmark' | 'Crown' | 'Award';
}

export const careerCategoryConfig: Record<CareerCategory, CareerCategoryMetadata> = {
  education: {
    label: 'Education',
    badgeBg: 'bg-blue-50 dark:bg-blue-950/40',
    badgeText: 'text-blue-700 dark:text-blue-300',
    badgeBorder: 'border-blue-200 dark:border-blue-800',
    iconName: 'GraduationCap'
  },
  early_career: {
    label: 'Early Career & Private Practice',
    badgeBg: 'bg-amber-50 dark:bg-amber-950/40',
    badgeText: 'text-amber-800 dark:text-amber-300',
    badgeBorder: 'border-amber-200 dark:border-amber-800',
    iconName: 'Briefcase'
  },
  military: {
    label: 'Military Service',
    badgeBg: 'bg-rose-50 dark:bg-rose-950/40',
    badgeText: 'text-rose-700 dark:text-rose-300',
    badgeBorder: 'border-rose-200 dark:border-rose-800',
    iconName: 'Shield'
  },
  state_local: {
    label: 'State & Local Governance',
    badgeBg: 'bg-emerald-50 dark:bg-emerald-950/40',
    badgeText: 'text-emerald-700 dark:text-emerald-300',
    badgeBorder: 'border-emerald-200 dark:border-emerald-800',
    iconName: 'Building2'
  },
  federal_diplomatic: {
    label: 'Federal & Diplomatic Office',
    badgeBg: 'bg-indigo-50 dark:bg-indigo-950/40',
    badgeText: 'text-indigo-700 dark:text-indigo-300',
    badgeBorder: 'border-indigo-200 dark:border-indigo-800',
    iconName: 'Landmark'
  },
  presidency: {
    label: 'The Presidency',
    badgeBg: 'bg-amber-100 dark:bg-amber-900/60',
    badgeText: 'text-amber-900 dark:text-amber-200 font-bold',
    badgeBorder: 'border-amber-400 dark:border-amber-600',
    iconName: 'Crown'
  },
  post_presidency: {
    label: 'Post-Presidency & Legacy',
    badgeBg: 'bg-teal-50 dark:bg-teal-950/40',
    badgeText: 'text-teal-700 dark:text-teal-300',
    badgeBorder: 'border-teal-200 dark:border-teal-800',
    iconName: 'Award'
  }
};
