import type { LucideIcon } from 'lucide-react';

// Schedule Types
export interface ScheduleItem {
  time: string;
  activity: string;
  type: 'coding' | 'workout' | 'rest' | 'music' | 'study' | 'nutrition' | 'hygiene' | 'hydration' | 'social';
  icon: LucideIcon;
  energyLevel?: number;
}

export interface WeeklySchedule {
  [key: string]: ScheduleItem[];
}

// Project Types
export interface Project {
  id: string;
  name: string;
  type: 'coding' | 'music' | 'content' | 'learning';
  priority: 'high' | 'medium' | 'low';
  deadline: string;
  milestones: {
    name: string;
    completed: boolean;
    dueDate: string;
  }[];
  notionLink?: string;
  icon: LucideIcon;
}

export interface ProductivityBlock {
  time: string;
  duration: number;
  project: Project;
  focusScore?: number;
  completedTasks: string[];
}

// Nutrition Types
export interface Meal {
  time: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  prepared: boolean;
  icon: LucideIcon;
}

export interface NutritionDay {
  date: string;
  meals: Meal[];
  waterIntake: number;
  totalCalories: number;
  targetCalories: number;
}

// Goals Types
export interface Goal {
  title: string;
  deadline: string;
  progress: number;
  type: 'fitness' | 'coding';
  icon: LucideIcon;
}

// Fitness Types
export interface Exercise {
  name: string;
  sets: number;
  reps: number;
  weight?: number;
  notes?: string;
}

export interface WorkoutSession {
  type: 'strength' | 'cardio' | 'mobility';
  exercises: Exercise[];
  duration: number;
  energyLevel: number;
  progress: {
    category: string;
    metric: number;
    unit: string;
  }[];
  icon?: LucideIcon;
}

// History Types
export interface WeekMetadata {
  weekNumber: number;
  year: number;
  startDate: string;
  endDate: string;
  productivity: {
    focusHours: number;
    completedTasks: number;
    socialMediaUsage: {
      plannedSessions: number;
      actualSessions: number;
      totalMinutes: number;
    };
  };
  health: {
    workoutsDone: number;
    sleepQuality: number; // 1-10
    stressLevel: number; // 1-10
    waterIntake: number; // Liters
  };
  learnings: {
    successfulPatterns: string[];
    improvement_areas: string[];
  };
}

export interface HistoricalWeek {
  metadata: WeekMetadata;
  schedule: WeeklySchedule;
  goals: Goal[];
  projects: Project[];
}

export interface WeeklyHistory {
  weeks: HistoricalWeek[];
  patterns: {
    mostProductiveTime: string;
    bestWorkoutDays: string[];
    optimalSocialMediaTimes: string[];
    consistentHabits: string[];
  };
}

export interface FitnessDay {
  date: string;
  planned: WorkoutSession[];
  completed: WorkoutSession[];
  recovery: {
    sleepHours: number;
    sleepQuality: number;
    stressLevel: number;
  };
}

// Break Types
export interface BreakActivity {
  title: string;
  duration: string;
  description: string;
  icon: LucideIcon;
}

// types.ts
export interface BodyStats {
    weight: number;
    height: number;
    age: number;
    gender: 'male' | 'female';
    activityLevel: 'sedentary' | 'light' | 'moderate' | 'very' | 'extra';
    goal: 'maintain' | 'loss' | 'gain';
  }
  
  export interface NutritionRequirements {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
    water: number;
  }
  
  // data.ts
  export const bodyStats: BodyStats = {
    weight: 84,
    height: 182,
    age: 25, // Beispielwert
    gender: 'male',
    activityLevel: 'moderate',
    goal: 'gain'
  };
  
  export const calculateRequirements = (stats: BodyStats): NutritionRequirements => {
    // Harris-Benedict BMR Formula
    const bmr = stats.gender === 'male' 
      ? (10 * stats.weight) + (6.25 * stats.height) - (5 * stats.age) + 5
      : (10 * stats.weight) + (6.25 * stats.height) - (5 * stats.age) - 161;
  
    // Activity Multipliers
    const multipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      very: 1.725,
      extra: 1.9
    };
  
    const tdee = bmr * multipliers[stats.activityLevel];
    
    // Goal adjustments
    const goalMultipliers = {
      maintain: 1,
      loss: 0.8,
      gain: 1.1
    };
  
    const targetCalories = tdee * goalMultipliers[stats.goal];
  
    return {
      calories: Math.round(targetCalories),
      protein: Math.round(stats.weight * 2), // 2g per kg for muscle gain
      carbs: Math.round((targetCalories * 0.4) / 4), // 40% of calories from carbs
      fats: Math.round((targetCalories * 0.25) / 9), // 25% of calories from fats
      water: Math.round(stats.weight * 35) // 35ml per kg
    };
  };