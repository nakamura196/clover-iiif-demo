"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

// Viewerコンポーネントを動的にインポート（SSRを無効化）
const Viewer = dynamic(
  () => import("@samvera/clover-iiif/viewer"),
  { ssr: false }
);

const WorkContent = () => {
  const searchParams = useSearchParams();
  const manifestId = searchParams.get('manifest') || "https://dl.ndl.go.jp/api/iiif/3437686/manifest.json";

  return (
    <article>
      <Viewer iiifContent={manifestId} />
    </article>
  );
};

const Work = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WorkContent />
    </Suspense>
  );
};

export default Work;