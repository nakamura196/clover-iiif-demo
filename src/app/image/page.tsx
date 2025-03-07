"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

// Viewerコンポーネントを動的にインポート（SSRを無効化）
const CloverImage = dynamic(() => import("@samvera/clover-iiif/image"), {
  ssr: false,
});

const WorkContent = () => {
  const searchParams = useSearchParams();
  const imageId =
    searchParams.get("image") ||
    "https://dl.ndl.go.jp/api/iiif/3437686/R0000001";

  return (
    <div style={{ height: "100vh" }}>
      <CloverImage src={imageId} isTiledImage={true} />
    </div>
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
