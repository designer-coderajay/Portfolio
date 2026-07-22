import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader, Space_Mono } from "next/font/google";
import NeuralField from "@/components/NeuralField";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans"
});

const serif = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif"
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono"
});

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (theme === "dark") document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://designer-coderajay.github.io"),
  title: "Ajay Pravin Mahale | AI Researcher & Engineer",
  description:
    "Ajay Pravin Mahale. AI researcher and engineer, founder of Glassbox AI. Mechanistic interpretability, LLM safety and evaluation, Azure ML and MLOps. Trier, Germany.",
  openGraph: {
    type: "website",
    title: "Ajay Pravin Mahale | AI Researcher & Engineer",
    description:
      "Founder of Glassbox AI. Mechanistic interpretability, LLM safety, faithfulness evaluation. glassbox on PyPI, preprint on arXiv.",
    url: "/",
    images: ["/og-image.jpg"]
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='%23141410'/%3E%3Ccircle cx='32' cy='32' r='6' fill='%23FBBF24'/%3E%3Ccircle cx='14' cy='18' r='3' fill='%23F3F3EE'/%3E%3Ccircle cx='50' cy='18' r='3' fill='%23F3F3EE'/%3E%3Ccircle cx='14' cy='46' r='3' fill='%23F3F3EE'/%3E%3Ccircle cx='50' cy='46' r='3' fill='%23F3F3EE'/%3E%3Cline x1='32' y1='32' x2='14' y2='18' stroke='%23F3F3EE' stroke-width='2'/%3E%3Cline x1='32' y1='32' x2='50' y2='18' stroke='%23F3F3EE' stroke-width='2'/%3E%3Cline x1='32' y1='32' x2='14' y2='46' stroke='%23F3F3EE' stroke-width='2'/%3E%3Cline x1='32' y1='32' x2='50' y2='46' stroke='%23F3F3EE' stroke-width='2'/%3E%3C/svg%3E"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-bg font-sans text-base leading-relaxed text-ink antialiased">
        <NeuralField />
        {children}
      </body>
    </html>
  );
}
