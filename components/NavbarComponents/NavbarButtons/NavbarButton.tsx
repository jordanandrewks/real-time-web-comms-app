import React from 'react';
import { Button } from '@mantine/core';

export default function NavbarButton({
  title,
  icon,
}: {
  title: string;
  icon: React.JSX.Element | undefined;
}) {
  return (
    <Button
      component="a"
      href=""
      justify="left"
      fullWidth
      leftSection={icon}
      variant="default"
      mt="md"
    >
      {title}
    </Button>
  );
}
