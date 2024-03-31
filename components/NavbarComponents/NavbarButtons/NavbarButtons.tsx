import React from 'react';
import { Flex } from '@mantine/core';
import { AiOutlineApi } from 'react-icons/ai';
import NavbarButton from './NavbarButton';

interface ButtonRouteConfig {
  icon?: React.JSX.Element;
  title: string;
  route: string;
}

const buttonRoutes: ButtonRouteConfig[] = [
  {
    icon: <AiOutlineApi size={20} />,
    title: 'API',
    route: '',
  },
  {
    icon: <AiOutlineApi size={20} />,
    title: 'Other',
    route: '',
  },
];

export default function NavbarButtons() {
  return (
    <Flex gap="xs" justify="flex-start" align="flex-start" direction="column" wrap="wrap">
      {buttonRoutes.map((button) => (
        <NavbarButton key={button.title} title={button.title} icon={button.icon} />
      ))}
    </Flex>
  );
}
