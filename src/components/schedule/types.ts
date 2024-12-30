import { LucideIcon } from 'lucide-react';

export interface ScheduleItem {
  time: string;
  activity: string;
  type: string;
  icon: LucideIcon;
  variation?: boolean;
  energyLevel?: number;
}

export interface BreakActivity {
  title: string;
  duration: string;
  description: string;
  icon: LucideIcon;
}

export interface DailyNutrition {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  water: number;
}

export interface DayScheduleProps {
  selectedDay: string | null;
  schedule: Record<string, ScheduleItem[]>;
  breakActivities: BreakActivity[];
}
