'use client';

import React from 'react';
import { AppShell, Burger, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import NavbarButtons from '../NavbarComponents/NavbarButtons/NavbarButtons';

export default function AppShellParent({ children }: { children: any }) {
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
          <Flex className="pt-1" justify="space-between" align="center">
            <Flex
              className="ml-4"
              mih={50}
              justify="flex-start"
              align="center"
              direction="row"
              wrap="wrap"
            >
              <Burger
                className="mr-3.5"
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
              />
              <div className="text-2xl font-bold font-questrial">COMMS PLAYGROUND</div>
            </Flex>
            <Flex className="pr-3">
              <ColorSchemeToggle />
            </Flex>
          </Flex>
        </AppShell.Header>

        <AppShell.Navbar p="md">
          <NavbarButtons />
        </AppShell.Navbar>
        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </>
  );
}
