'use client';
import React from 'react';
import { Welcome } from '../components/Welcome/Welcome';
import { useDisclosure } from '@mantine/hooks';

export default function HomePage() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <Welcome></Welcome>
    </>
  );
}
