import React from 'react';
import { Button } from '@mantine/core';
import Link from 'next/link';

export default function NavbarButton({
  title,
  icon,
  route,
}: {
  title: string;
  icon: React.JSX.Element | undefined;
  route: string;
}) {
  return (
    <Link href={route} className="w-full" passHref>
      <Button justify="left" fullWidth leftSection={icon} variant="default" mt="md">
        {title}
      </Button>
    </Link>
  );
}
