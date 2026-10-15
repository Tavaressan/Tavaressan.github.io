import type { Metadata } from "next";
import { Suspense } from "react";
import { Horizon } from "@/components/horizon/horizon";
import { Archive, ArchiveView } from "@/components/project-archive/archive";

export const metadata: Metadata = { title: "Project archive" };

export default function ProjectsPage() {
  return (
    <>
      <main id="main" className="page-main">
        {/* Sem JS (ou antes de hidratar) o arquivo aparece inteiro, sem filtros */}
        <Suspense fallback={<ArchiveView kind={null} q="" />}>
          <Archive />
        </Suspense>
      </main>
      <Horizon />
    </>
  );
}
