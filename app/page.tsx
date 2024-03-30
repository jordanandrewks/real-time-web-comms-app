'use client';
import React from 'react';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { FaSun, FaMoon } from 'react-icons/fa';
import { AppShell, Burger, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function HomePage() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Flex mih={50} justify="flex-start" align="center" direction="row" wrap="wrap">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <div className="ml-20" >This Logo</div>
          </Flex >
        </AppShell.Header>

        <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

        <AppShell.Main>Main</AppShell.Main>
      </AppShell>
    </>
  );
}

// Header
