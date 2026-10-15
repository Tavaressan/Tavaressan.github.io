import type { Metadata } from "next";
import { Horizon } from "@/components/horizon/horizon";
import { Workbench } from "@/components/workbench/workbench";

export const metadata: Metadata = { title: "Workbench" };

export default function LabPage() {
  return (
    <>
      <main id="main" className="page-main">
        <Workbench />
      </main>
      <Horizon />
    </>
  );
}
