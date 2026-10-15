import type { Metadata, Viewport } from "next";
import { SiteNav } from "@/components/navigation/site-nav";
import { RouteSettled } from "@/components/project-transition/route-settled";
import { MotionController } from "@/components/section-transition/motion-controller";
import { site } from "@/content/site";
import "@/styles/tokens.css";
import "@/styles/themes.css";
import "@/styles/globals.css";
import "@/styles/motion.css";

export const metadata: Metadata = {
  title: { default: `${site.name} — ${site.role}`, template: `%s — ${site.name}` },
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#1c1f25",
};

// Liga as revelações antes da pintura, só com movimento permitido; sem JS o conteúdo já nasce visível
const motionScript = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window)document.documentElement.setAttribute('data-motion','on')}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>
        <div className="vt">
          <a className="skip t-label" href="#main">
            Skip to content
          </a>
          <SiteNav />
          {children}
          <MotionController />
          <RouteSettled />
        </div>
      </body>
    </html>
  );
}
