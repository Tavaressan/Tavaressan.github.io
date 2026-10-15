import type { Metadata } from "next";
import { Horizon } from "@/components/horizon/horizon";

export const metadata: Metadata = { title: "Contact" };

// Horizon: o fim calmo da jornada é a própria página
export default function ContactPage() {
  return (
    <main id="main" className="contact-page env-night horizon-sky" data-env="night">
      <Horizon standalone />
    </main>
  );
}
