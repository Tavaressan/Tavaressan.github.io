import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Vitor Tavares — Software Developer",
    template: "%s — Vitor Tavares",
  },
  description:
    "Portfolio of Vitor Tavares: software projects in TypeScript, Java, Kotlin and Rust.",
  openGraph: {
    type: "website",
    siteName: "Vitor Tavares",
    title: "Vitor Tavares — Software Developer",
    description:
      "Portfolio of Vitor Tavares: software projects in TypeScript, Java, Kotlin and Rust.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
