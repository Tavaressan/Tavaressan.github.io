import { AcademicTrack } from "@/components/academic-track/academic-track";
import { Capabilities } from "@/components/capabilities/capabilities";
import { Hero } from "@/components/hero/hero";
import { Horizon } from "@/components/horizon/horizon";
import { Manifesto } from "@/components/manifesto/manifesto";
import { SelectedWork } from "@/components/selected-work/selected-work";
import { TrackTeaser } from "@/components/track-record/track-teaser";

// Home curada: cinema → papel → máquina → acadêmico → humano → horizonte
export default function Home() {
  return (
    <>
      <Hero />
      <main id="main" className="page-main">
        <Manifesto />
        <Capabilities />
        <SelectedWork />
        <AcademicTrack />
        <TrackTeaser />
      </main>
      <Horizon />
    </>
  );
}

