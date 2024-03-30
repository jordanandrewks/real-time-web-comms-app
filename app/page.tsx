'use client';
import React from 'react';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { AppShell, Button, Burger, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function HomePage() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <Welcome></Welcome>
    </>
  );
}
