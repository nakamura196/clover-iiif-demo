"use client";

import React from "react";
import Viewer from "@samvera/clover-iiif/viewer";
import { useSearchParams } from "next/navigation";
 
const Work = () => {

  const searchParams = useSearchParams();
  const manifestId = searchParams.get('manifest') || "https://dl.ndl.go.jp/api/iiif/3437686/manifest.json";


 
  return (
    <article>
      <Viewer iiifContent={manifestId} />
      
    </article>
  );
};
 
export default Work;