import React from 'react';
import { Flex, ScrollArea } from '@mantine/core';
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
    route: '/',
  },
  {
    icon: <AiOutlineApi size={20} />,
    title: 'Other',
    route: '/rmq',
  },
];

export default function NavbarButtons() {
  return (
    <ScrollArea type="auto" scrollbarSize={10}>
      <Flex gap="xs" justify="flex-start" align="flex-start" direction="column" wrap="wrap">
        {buttonRoutes.map((button) => (
          <NavbarButton
            key={button.title}
            title={button.title}
            icon={button.icon}
            route={button.route}
          />
        ))}
      </Flex>
    </ScrollArea>
  );
}
