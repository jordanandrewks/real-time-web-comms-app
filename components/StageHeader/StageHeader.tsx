import React from 'react';
import { Divider } from '@mantine/core';

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
      <p className="text-l border-solid ">{description}</p>
      <Divider my="md" />
    </div>
  );
}
