// hooks/useScheduleColors.ts
export const useScheduleColors = () => {
    const getActivityColor = (type: string) => {
      switch (type) {
        case "coding":
          return "bg-blue-100 border-blue-300";
        case "workout":
          return "bg-red-100 border-red-300";
        case "rest":
          return "bg-green-100 border-green-300";
        case "music":
          return "bg-purple-100 border-purple-300";
        case "study":
          return "bg-yellow-100 border-yellow-300";
        case "nutrition":
          return "bg-orange-100 border-orange-300";
        case "hygiene":
          return "bg-cyan-100 border-cyan-300";
        case "hydration":
          return "bg-blue-50 border-blue-200";
        case "social":
          return "bg-pink-100 border-pink-300";
        default:
          return "bg-gray-100 border-gray-300";
      }
    };
  
    return { getActivityColor };
  };
  
  // hooks/useWaterTracking.ts
  import { useState } from 'react';
  import { useBodyStats } from '@/contexts/BodyStatsContext';
  
  export const useWaterTracking = () => {
    const { requirements } = useBodyStats();
    const [waterIntake, setWaterIntake] = useState<number>(0);
    const [waterLog, setWaterLog] = useState<Array<{ time: string; amount: number }>>([]);
  
    const addWater = (amount: number) => {
      const now = new Date();
      const time = now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
      
      setWaterIntake(prev => prev + amount);
      setWaterLog(prev => [...prev, { time, amount }]);
    };
  
    const getProgress = () => {
      return (waterIntake / requirements.water) * 100;
    };
  
    const getRemainingWater = () => {
      return Math.max(0, requirements.water - waterIntake);
    };
  
    const resetDaily = () => {
      setWaterIntake(0);
      setWaterLog([]);
    };
  
    return {
      waterIntake,
      waterLog,
      addWater,
      getProgress,
      getRemainingWater,
      resetDaily,
      target: requirements.water
    };
  };