'use client';

import React from 'react';
import { Button, Group, Text, Collapse, Box, Flex, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function ContextCollapse({
  appletTitle,
  contextTitle,
  contextDescription,
}: {
  appletTitle: string;
  contextTitle: string;
  contextDescription: string;
}) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div>
      <Flex
        mih={50}
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction="column"
        wrap="wrap"
      >
        <Title order={2}>{appletTitle}</Title>
        <Group justify="left" className="mb-4">
          <Box maw={400} mx="auto">
            <Group justify="left" mb={5}>
              <Button size="xs" onClick={toggle}>
                {contextTitle}
              </Button>
            </Group>
            <Collapse in={opened}>
              <Text>{contextDescription}</Text>
            </Collapse>
          </Box>
        </Group>
      </Flex>
    </div>
  );
}
