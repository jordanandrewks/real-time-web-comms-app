'use client';

import React, { useState } from 'react';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { LuSunDim } from 'react-icons/lu';
import { IoMoonOutline } from 'react-icons/io5';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const [colorMode, setColorMode] = useState('dark');

  const sety = (colorScheme: string) => {
    console.log(`${colorScheme}`);

    if (colorScheme === 'dark') {
      setColorMode('light');
      setColorScheme('light');
    } else {
      setColorMode('dark');
      setColorScheme('dark');
    }
  };

  return (
    <ActionIcon
      onClick={() => sety(colorMode)}
      variant="default"
      size="xl"
      radius="md"
      aria-label="Settings"
    >
      {colorMode === 'dark' ? (
        <LuSunDim style={{ width: '60%', height: '60%' }} />
      ) : (
        <IoMoonOutline style={{ width: '60%', height: '60%' }} />
      )}
    </ActionIcon>
  );
}
