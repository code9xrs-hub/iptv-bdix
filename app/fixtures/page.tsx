import type { Metadata } from "next";
import FixturesClient from "./FixturesClient";

export const metadata: Metadata = {
  title: "FIFA World Cup 2026 Fixtures & Interactive Bracket",
  description:
    "View full match schedules, live scores, results, and the interactive tournament tree for the FIFA World Cup 2026. Converted to Bangladesh Standard Time (BST).",
  keywords: [
    "FIFA World Cup 2026",
    "fixtures",
    "bracket",
    "world cup schedule",
    "Bangladesh Standard Time",
    "BST",
    "live scores",
  ],
};

export default function FixturesPage() {
  return <FixturesClient />;
}
