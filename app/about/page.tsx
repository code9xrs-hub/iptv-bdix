import type { Metadata } from "next";
import AboutView from "../components/AboutView";

export const metadata: Metadata = {
  title: "About the Developer — S. SHAJON | IPTV Player",
  description:
    "Learn more about S. SHAJON, the self-learned developer and reverse engineer behind this premium open-source IPTV web player. Get contact options and official GitHub links.",
  keywords: [
    "S. SHAJON",
    "developer",
    "creator",
    "IPTV creator",
    "IPTV Web Player support",
    "Telegram SHAJON",
    "open source IPTV",
    "SHAJON-404",
    "shajon-dev",
    "shajon github"
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile",
    username: "SHAJON-404",
    firstName: "Shah",
    lastName: "Makhdum Shajon",
    url: "/about",
    title: "About the Developer — S. SHAJON",
    description:
      "Self-learned developer and reverse engineer behind the premium open-source IPTV web streaming player.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About S. SHAJON - IPTV Player Developer",
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutView />;
}
