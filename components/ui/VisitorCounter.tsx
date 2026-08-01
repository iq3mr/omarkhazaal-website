"use client";

import { useEffect, useState } from "react";
import { Eye, TrendingUp } from "lucide-react";

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    // Unique key for storage & API tracking
    const API_KEY = "omarkhazaal_academy_visitors_2026";
    const BASE_START_COUNT = 1480; // Starting baseline count for real visits

    const trackVisitor = async () => {
      try {
        // Track local session to avoid double counting on quick page refreshes
        const hasVisitedSession = sessionStorage.getItem("ok_visited_session");
        
        // Fetch real count from public Counter API
        const response = await fetch(`https://api.counterapi.dev/v1/${API_KEY}/visits/${hasVisitedSession ? "" : "up"}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          const data = await response.json();
          if (data && typeof data.count === "number") {
            const totalVisits = BASE_START_COUNT + data.count;
            setVisitorCount(totalVisits);
            setIsLive(true);
            localStorage.setItem("ok_cached_visits", totalVisits.toString());
            sessionStorage.setItem("ok_visited_session", "true");
            return;
          }
        }
      } catch (err) {
        console.warn("Counter API offline, using local fallback counter:", err);
      }

      // Fallback local storage visitor counter calculation
      const cached = localStorage.getItem("ok_cached_visits");
      let localCount = cached ? parseInt(cached, 10) : BASE_START_COUNT + 1;
      
      if (!sessionStorage.getItem("ok_visited_session")) {
        localCount += 1;
        sessionStorage.setItem("ok_visited_session", "true");
        localStorage.setItem("ok_cached_visits", localCount.toString());
      }
      
      setVisitorCount(localCount);
      setIsLive(false);
    };

    trackVisitor();
  }, []);

  return (
    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full museum-plaque border border-[#C5A059]/40 text-xs font-bold text-[#E5DDD0] shadow-xl hover:border-[#C5A059] transition-all duration-300 select-none">
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isLive ? "bg-[#22C55E]" : "bg-[#C5A059]"} opacity-75`} />
        <span className={`relative inline-flex rounded-full h-2 w-2 ${isLive ? "bg-[#22C55E]" : "bg-[#C5A059]"}`} />
      </span>

      <Eye className="w-3.5 h-3.5 text-[#C5A059]" />

      <span>عدد الزوار:</span>

      <span className="font-serif text-sm font-black text-white">
        {visitorCount !== null ? visitorCount.toLocaleString("ar-EG") : "..."}
      </span>

      <TrendingUp className="w-3 h-3 text-[#22C55E]" />
    </div>
  );
}
