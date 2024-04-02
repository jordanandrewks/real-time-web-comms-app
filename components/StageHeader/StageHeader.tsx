import React from 'react';

export default function StageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-5">
      <p className="text-3xl font-semibold pb-5">{title}</p>
      <p className="text-l border-solid border-b-2 border-b-neutral-600 pb-5">{description}</p>
    </div>
  );
}
