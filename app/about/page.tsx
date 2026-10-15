import type { Metadata } from "next";
import { Horizon } from "@/components/horizon/horizon";
import { TrackRecord } from "@/components/track-record/track-record";

export const metadata: Metadata = { title: "Track record" };

export default function AboutPage() {
  return (
    <>
      <main id="main" className="page-main">
        <TrackRecord />
      </main>
      <Horizon />
    </>
  );
}
