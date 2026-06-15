import React from "react";
import { Clock } from "lucide-react";
import { Match, TeamStats } from "../types";
import { isWinner, resolveTeamName } from "../utils/helpers";
import { TeamFlag } from "./TeamFlag";

interface BracketMatchCardProps {
  matchNum: number;
  match?: Match;
  allMatches: Match[];
  standings: Record<string, TeamStats[]>;
}

export const BracketMatchCard = ({
  matchNum,
  match,
  allMatches,
  standings,
}: BracketMatchCardProps) => {
  if (!match) return <div className="p-3 border border-dashed border-white/10 rounded-xl bg-white/[0.01] text-xs text-center text-zinc-500">Match {matchNum} Pending</div>;

  const hasPlayed = !!match.score;
  const score1 = hasPlayed ? match.score?.ft[0] : "-";
  const score2 = hasPlayed ? match.score?.ft[1] : "-";

  const displayTeam1 = resolveTeamName(match.team1, allMatches, standings);
  const displayTeam2 = resolveTeamName(match.team2, allMatches, standings);

  return (
    <div className="w-[210px] rounded-xl border transition-all duration-300 shadow-md bg-linear-to-b from-[#150e3d]/50 to-[#0c0824]/60 border-white/10 hover:border-white/20 hover:from-[#150e3d]/70 hover:to-[#0c0824]/80">
      {/* Match Header */}
      <div className="flex items-center justify-between border-b border-white/5 px-3 py-1.5 bg-white/[0.02] text-[9px] font-bold text-zinc-400">
        <span className="uppercase">Match {match.num}</span>
        <span className="truncate max-w-[100px]">{match.ground.split(" (")[0]}</span>
      </div>

      {/* Teams List */}
      <div className="p-2.5 space-y-2">
        {/* Team 1 */}
        <div className="flex items-center justify-between text-xs">
          <div className={`flex items-center gap-2 font-bold ${hasPlayed && !isWinner(match, 1) ? "text-zinc-500" : "text-white"}`}>
            <TeamFlag teamName={displayTeam1} className="w-5 h-3.5 flex-shrink-0" />
            <span className="truncate max-w-[120px]">{displayTeam1}</span>
          </div>
          <span className={`font-black px-1.5 py-0.5 rounded-sm bg-white/[0.04] ${hasPlayed && isWinner(match, 1) ? "text-emerald-400" : "text-zinc-300"}`}>
            {score1}
          </span>
        </div>

        {/* Team 2 */}
        <div className="flex items-center justify-between text-xs">
          <div className={`flex items-center gap-2 font-bold ${hasPlayed && !isWinner(match, 2) ? "text-zinc-500" : "text-white"}`}>
            <TeamFlag teamName={displayTeam2} className="w-5 h-3.5 flex-shrink-0" />
            <span className="truncate max-w-[120px]">{displayTeam2}</span>
          </div>
          <span className={`font-black px-1.5 py-0.5 rounded-sm bg-white/[0.04] ${hasPlayed && isWinner(match, 2) ? "text-emerald-400" : "text-zinc-300"}`}>
            {score2}
          </span>
        </div>
      </div>

      {/* Match DateTime */}
      <div className="flex items-center gap-1 border-t border-white/5 px-3 py-1.5 bg-white/[0.02] text-[8px] font-semibold text-zinc-300">
        <Clock size={8} className="text-zinc-400 flex-shrink-0" />
        <span className="truncate">
          {match.formattedDateTime
            ? match.formattedDateTime.replace(/^[A-Za-z]+, /, "").replace(/ \d{4} at/, ",")
            : `${match.date} ${match.time}`}
        </span>
      </div>
    </div>
  );
};
