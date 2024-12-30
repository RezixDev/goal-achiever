import { Brain, Code, Dumbbell, Music, Coffee, Apple, UtensilsCrossed, Target, Eye, Footprints, BookOpen } from 'lucide-react';
import type { WeeklySchedule, Project, Meal, Goal, WorkoutSession, BreakActivity, WeeklyHistory } from '../data/types';

// Schedule Data
export const schedule: WeeklySchedule = {
  'Montag': [
    { time: '08:00', activity: 'Aufwachen & Wasser (500ml)', type: 'hydration', icon: Coffee },
    { time: '08:30', activity: 'Protein Shake mit Banane', type: 'nutrition', icon: Coffee },
    { time: '09:00-10:30', activity: 'Programmierung (Guitar-App)', type: 'coding', icon: Code },
    { time: '10:30-10:50', activity: 'Social Media Check', type: 'social', icon: Brain },
    { time: '12:00-13:30', activity: 'Gym: Brust', type: 'workout', icon: Dumbbell },
    { time: '13:30-14:00', activity: 'Power-Nap', type: 'rest', icon: Brain },
    { time: '14:00', activity: 'Wasser (500ml)', type: 'hydration', icon: Coffee },
    { time: '14:30-14:50', activity: 'Social Media Zeit', type: 'social', icon: Brain },
    { time: '15:00-16:30', activity: 'Gitarrenkurs Content', type: 'music', icon: Music },
    { time: '16:30-16:50', activity: 'Social Media Check', type: 'social', icon: Brain },
    { time: '19:00-20:00', activity: 'LLM Kurs', type: 'study', icon: Brain }
  ],
  'Dienstag': [
    { time: '08:00', activity: 'Aufwachen & Wasser (500ml)', type: 'hydration', icon: Coffee },
    { time: '08:30', activity: 'Protein Shake mit Banane', type: 'nutrition', icon: Coffee },
    { time: '09:00-10:30', activity: 'Programmierung (Guitar-App)', type: 'coding', icon: Code },
    { time: '10:30-10:50', activity: 'Social Media Check', type: 'social', icon: Brain },
    { time: '12:00-13:30', activity: 'Gym: Beine', type: 'workout', icon: Dumbbell },
    { time: '13:30-14:00', activity: 'Power-Nap', type: 'rest', icon: Brain },
    { time: '14:00', activity: 'Wasser (500ml)', type: 'hydration', icon: Coffee },
    { time: '14:30-14:50', activity: 'Social Media Zeit', type: 'social', icon: Brain },
    { time: '15:00-16:30', activity: 'Gitarrenkurs Content', type: 'music', icon: Music },
    { time: '16:30-16:50', activity: 'Social Media Check', type: 'social', icon: Brain },
    { time: '19:00-20:00', activity: 'LLM Kurs', type: 'study', icon: Brain }
  ],
  'Mittwoch': [
    { time: '08:00', activity: 'Aufwachen & Wasser (500ml)', type: 'hydration', icon: Coffee },
    { time: '08:30', activity: 'Protein Shake mit Banane', type: 'nutrition', icon: Coffee },
    { time: '09:00-10:30', activity: 'Programmierung (Guitar-App)', type: 'coding', icon: Code },
    { time: '10:30-10:50', activity: 'Social Media Check', type: 'social', icon: Brain },
    { time: '12:00-13:30', activity: 'Gym: Rücken', type: 'workout', icon: Dumbbell },
    { time: '13:30-14:00', activity: 'Power-Nap', type: 'rest', icon: Brain },
    { time: '14:00', activity: 'Wasser (500ml)', type: 'hydration', icon: Coffee },
    { time: '14:30-14:50', activity: 'Social Media Zeit', type: 'social', icon: Brain },
    { time: '15:00-16:30', activity: 'Gitarrenkurs Content', type: 'music', icon: Music },
    { time: '16:30-16:50', activity: 'Social Media Check', type: 'social', icon: Brain },
    { time: '19:00-20:00', activity: 'LLM Kurs', type: 'study', icon: Brain }
  ],
  'Donnerstag': [
    { time: '08:00', activity: 'Aufgewacht', type: 'rest', icon: Brain },
    { time: '08:30', activity: 'Protein Shake mit Banane', type: 'nutrition', icon: Coffee },
    { time: '08:35', activity: 'Wasser (500ml)', type: 'hydration', icon: Coffee },
    { time: '08:40-09:30', activity: 'Programmierung (Weekly Planner App)', type: 'coding', icon: Code },
    { time: '09:30', activity: 'Duschen & Körperpflege', type: 'hygiene', icon: Brain },
    { time: '09:45', activity: 'Müsli', type: 'nutrition', icon: Coffee },
    { time: '10:00', activity: 'Kaffee', type: 'nutrition', icon: Coffee },
    { time: '10:00-10:20', activity: 'Social Media Check', type: 'social', icon: Brain },
    { time: '12:00', activity: 'Mittagessen: Hähnchenbrust überbacken mit Käse und Salat', type: 'nutrition', icon: UtensilsCrossed },
    { time: '12:30-13:30', activity: 'Power-Nap', type: 'rest', icon: Brain },
    { time: '12:30-12:50', activity: 'Social Media Zeit', type: 'social', icon: Brain },
    { time: '13:30-16:30', activity: 'Feiertag - Freie Zeit', type: 'rest', icon: Brain },
    { time: '15:00', activity: 'Wasser (500ml)', type: 'hydration', icon: Coffee },
    { time: '16:30-16:50', activity: 'Social Media Check', type: 'social', icon: Brain },
    { time: '19:00-20:00', activity: 'LLM Kurs', type: 'study', icon: Brain }
  ],
  'Freitag': [
    { time: '08:00', activity: 'Aufwachen & Wasser (500ml)', type: 'hydration', icon: Coffee },
    { time: '08:30', activity: 'Protein Shake mit Banane', type: 'nutrition', icon: Coffee },
    { time: '09:00-10:30', activity: 'Programmierung (Guitar-App)', type: 'coding', icon: Code },
    { time: '10:30-10:50', activity: 'Social Media Check', type: 'social', icon: Brain },
    { time: '12:00-13:30', activity: 'Gym: Arme', type: 'workout', icon: Dumbbell },
    { time: '13:30-14:00', activity: 'Power-Nap', type: 'rest', icon: Brain },
    { time: '14:00', activity: 'Wasser (500ml)', type: 'hydration', icon: Coffee },
    { time: '14:30-14:50', activity: 'Social Media Zeit', type: 'social', icon: Brain },
    { time: '15:00-16:30', activity: 'Gitarrenkurs Content', type: 'music', icon: Music },
    { time: '16:30-16:50', activity: 'Social Media Check', type: 'social', icon: Brain },
    { time: '19:00-20:00', activity: 'LLM Kurs', type: 'study', icon: Brain }
  ],
  'Samstag': [
    { time: '09:00', activity: 'Aufwachen & Wasser (500ml)', type: 'hydration', icon: Coffee },
    { time: '09:30', activity: 'Protein Shake mit Banane', type: 'nutrition', icon: Coffee },
    { time: '10:00-11:30', activity: 'Leichtes Training', type: 'workout', icon: Dumbbell },
    { time: '11:30-11:50', activity: 'Social Media Check', type: 'social', icon: Brain },
    { time: '14:00-16:00', activity: 'Freie Projektarbeit', type: 'coding', icon: Code },
    { time: '16:00-16:20', activity: 'Social Media Zeit', type: 'social', icon: Brain }
  ],
  'Sonntag': [
    { time: '09:00', activity: 'Aufwachen & Wasser (500ml)', type: 'hydration', icon: Coffee },
    { time: '09:30', activity: 'Protein Shake mit Banane', type: 'nutrition', icon: Coffee },
    { time: 'Ganztägig', activity: 'Erholungstag', type: 'rest', icon: Brain },
    { time: '11:00-11:20', activity: 'Social Media Check', type: 'social', icon: Brain },
    { time: '15:00-15:20', activity: 'Social Media Zeit', type: 'social', icon: Brain }
  ]
};

export const days = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];

// Projects Data
export const sampleProjects: Project[] = [
  {
    id: 'guitar-app',
    name: 'Guitar Learning App',
    type: 'coding',
    priority: 'high',
    deadline: '2025-01-06',
    icon: Code,
    milestones: [
      { name: 'UI Design', completed: true, dueDate: '2024-12-28' },
      { name: 'Core Features', completed: false, dueDate: '2025-01-03' }
    ]
  },
  {
    id: 'guitar-course',
    name: 'Gitarrenkurs Content',
    type: 'content',
    priority: 'medium',
    deadline: '2025-01-06',
    icon: Music,
    milestones: [
      { name: 'Grundlagen Lektionen', completed: false, dueDate: '2024-12-30' }
    ]
  },
  {
    id: 'llm-course',
    name: 'LLM Udacity Kurs',
    type: 'learning',
    priority: 'medium',
    deadline: '2025-01-06',
    icon: BookOpen,
    milestones: [
      { name: 'Modul 1 abschließen', completed: false, dueDate: '2024-12-29' }
    ]
  }
];

// Meals Data
export const sampleMeals: Meal[] = [
  {
    time: '08:30',
    type: 'breakfast',
    name: 'Protein Shake mit Banane',
    calories: 250,
    protein: 25,
    carbs: 30,
    fats: 5,
    prepared: true,
    icon: Coffee
  },
  {
    time: '09:45',
    type: 'breakfast',
    name: 'Müsli',
    calories: 350,
    protein: 15,
    carbs: 55,
    fats: 8,
    prepared: false,
    icon: Coffee
  },
  {
    time: '13:00',
    type: 'lunch',
    name: 'Hähnchenbrust mit Reis und Gemüse',
    calories: 650,
    protein: 45,
    carbs: 75,
    fats: 15,
    prepared: false,
    icon: UtensilsCrossed
  },
  {
    time: '16:00',
    type: 'snack',
    name: 'Protein Shake & Apfel',
    calories: 250,
    protein: 25,
    carbs: 30,
    fats: 5,
    prepared: true,
    icon: Apple
  }
];

// Goals Data
export const goals: Goal[] = [
  {
    title: 'Muskelaufbau',
    deadline: '06.01.2025',
    progress: 20,
    type: 'fitness',
    icon: Target
  },
  {
    title: 'Guitar-Learning App MVP',
    deadline: '06.01.2025',
    progress: 35,
    type: 'coding',
    icon: Target
  }
];

// Workout Data
export const sampleWorkout: WorkoutSession = {
  type: 'strength',
  exercises: [
    {
      name: 'Bankdrücken',
      sets: 4,
      reps: 8,
      weight: 80,
      notes: 'Fokus auf saubere Form'
    },
    {
      name: 'Klimmzüge',
      sets: 3,
      reps: 12,
      notes: 'Wide grip'
    }
  ],
  duration: 60,
  energyLevel: 8,
  progress: [
    {
      category: 'Kraft',
      metric: 80,
      unit: 'kg'
    }
  ],
  icon: Dumbbell
};

// Break Activities Data
export const breakActivities: BreakActivity[] = [
  {
    title: 'Augenentspannung',
    duration: '2 min',
    description: 'In die Ferne schauen, Augen rollen, blinzeln',
    icon: Eye
  },
  {
    title: 'Kurzer Spaziergang',
    duration: '5 min',
    description: 'Aufstehen und umhergehen',
    icon: Footprints
  },
  {
    title: 'Dehnübungen',
    duration: '3-5 min',
    description: 'Nacken, Schultern und Rücken dehnen',
    icon: Brain
  },
  {
    title: 'Wasser trinken',
    duration: '1 min',
    description: 'Ein Glas Wasser trinken',
    icon: Coffee
  }
];

// History Data Storage
export const weeklyHistory: WeeklyHistory = {
  weeks: [
    {
      metadata: {
        weekNumber: 51,
        year: 2024,
        startDate: '2024-12-16',
        endDate: '2024-12-22',
        productivity: {
          focusHours: 35,
          completedTasks: 18,
          socialMediaUsage: {
            plannedSessions: 14,
            actualSessions: 16,
            totalMinutes: 320
          }
        },
        health: {
          workoutsDone: 5,
          sleepQuality: 8,
          stressLevel: 4,
          waterIntake: 21 // Liters per week
        },
        learnings: {
          successfulPatterns: [
            'Morning protein shake routine',
            'Coding sessions before lunch',
            'Regular water intake'
          ],
          improvement_areas: [
            'More consistent sleep schedule',
            'Better social media discipline'
          ]
        }
      },
      schedule: {
        // Previous week's schedule data
      },
      goals: [
        {
          title: 'Muskelaufbau',
          deadline: '06.01.2025',
          progress: 15,
          type: 'fitness',
          icon: Target
        },
        {
          title: 'Guitar-Learning App MVP',
          deadline: '06.01.2025',
          progress: 25,
          type: 'coding',
          icon: Target
        }
      ],
      projects: [
        {
          id: 'guitar-app',
          name: 'Guitar Learning App',
          type: 'coding',
          priority: 'high',
          deadline: '2025-01-06',
          icon: Code,
          milestones: [
            { name: 'Requirements Analysis', completed: true, dueDate: '2024-12-20' },
            { name: 'UI Design', completed: false, dueDate: '2024-12-28' }
          ]
        }
      ]
    }
  ],
  patterns: {
    mostProductiveTime: '08:00-11:00',
    bestWorkoutDays: ['Montag', 'Mittwoch', 'Freitag'],
    optimalSocialMediaTimes: ['10:30', '14:30', '16:30'],
    consistentHabits: [
      'Morgen-Protein-Shake',
      'Wasser nach dem Aufwachen',
      'Programmieren am Vormittag',
      'Social Media Checks zu festen Zeiten',
      'Power-Nap nach dem Training'
    ]
  }
};