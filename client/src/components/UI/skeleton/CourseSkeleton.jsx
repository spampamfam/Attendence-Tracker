import React from "react";
import Skeleton from "./Skeleton";

export default function CourseSkeleton() {
  return (
    <div className="p-4 rounded-lg bg-white shadow-sm">
      <div className="mb-3">
        <Skeleton className="w-3/4 h-6" />
      </div>
      <div className="mb-2">
        <Skeleton className="w-1/2 h-4" />
      </div>
      <div className="mb-3">
        <Skeleton className="w-2/3 h-4" />
      </div>
      <div className="flex justify-end">
        <Skeleton className="w-20 h-8 rounded-md" />
      </div>
    </div>
  );
}
