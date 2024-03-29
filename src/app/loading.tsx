
import SkeletonCard from "@/components/SkeletonCard";
import React from "react";

const Loading = () => {
  return <div className="grid grid-cols-3 gap-8">
    {"abcdefghi".split('').map(i => (
        <SkeletonCard key={i}></SkeletonCard>
    ))}
  </div>;
};

export default Loading;
