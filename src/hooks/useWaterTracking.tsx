// hooks/useWaterTracking.tsx
import { useState, useEffect } from "react";
import { useBodyStats } from "@/contexts/BodyStatsContext";

export interface WaterEntry {
	time: string;
	amount: number;
}

export interface WaterSummary {
	total: number;
	remaining: number;
	percentage: number;
}

export const useWaterTracking = () => {
	const { requirements } = useBodyStats();
	const [waterLog, setWaterLog] = useState<WaterEntry[]>(() => {
		if (typeof window !== "undefined") {
			const saved = localStorage.getItem("waterLog");
			if (saved) {
				return JSON.parse(saved);
			}
		}
		return [];
	});

	const [summary, setSummary] = useState<WaterSummary>(() => {
		if (typeof window !== "undefined") {
			const saved = localStorage.getItem("waterSummary");
			if (saved) {
				return JSON.parse(saved);
			}
		}
		return {
			total: 0,
			remaining: requirements.water,
			percentage: 0,
		};
	});

	// Speichern der Werte im localStorage
	useEffect(() => {
		localStorage.setItem("waterLog", JSON.stringify(waterLog));
		localStorage.setItem("waterSummary", JSON.stringify(summary));
	}, [waterLog, summary]);

	// Tägliches Reset um Mitternacht
	useEffect(() => {
		const checkTime = () => {
			const now = new Date();
			if (now.getHours() === 0 && now.getMinutes() === 0) {
				resetDaily();
			}
		};

		const interval = setInterval(checkTime, 60000); // Prüfe jede Minute
		return () => clearInterval(interval);
	}, []);

	const calculateSummary = (entries: WaterEntry[]): WaterSummary => {
		const total = entries.reduce((sum, entry) => sum + entry.amount, 0);
		return {
			total,
			remaining: Math.max(0, requirements.water - total),
			percentage: Math.min(100, (total / requirements.water) * 100),
		};
	};

	const addWater = (amount: number) => {
		const now = new Date();
		const time = now.toLocaleTimeString("de-DE", {
			hour: "2-digit",
			minute: "2-digit",
		});

		const newEntry: WaterEntry = { time, amount };
		const updatedLog = [...waterLog, newEntry];
		setWaterLog(updatedLog);
		setSummary(calculateSummary(updatedLog));
	};

	const removeEntry = (index: number) => {
		const updatedLog = waterLog.filter((_, i) => i !== index);
		setWaterLog(updatedLog);
		setSummary(calculateSummary(updatedLog));
	};

	const resetDaily = () => {
		setWaterLog([]);
		setSummary({
			total: 0,
			remaining: requirements.water,
			percentage: 0,
		});
	};

	const getNextRecommendation = (): number => {
		const remainingTime = 20 - new Date().getHours();
		if (remainingTime <= 0) return 0;

		return Math.min(
			300, // Maximale empfohlene Einzelmenge
			Math.round(summary.remaining / remainingTime)
		);
	};

	return {
		waterLog,
		summary,
		addWater,
		removeEntry,
		resetDaily,
		getNextRecommendation,
		target: requirements.water,
	};
};
