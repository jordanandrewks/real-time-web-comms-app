'use client';

import { useState } from 'react';
import { Textarea, Divider, Button, Badge, Flex, JsonInput, CopyButton } from '@mantine/core';
import ContextCollapse from '@/components/ContextCollapse/ContextCollapse';

const statusPlaceHolder = 'STATUS: ';

interface ApiResponse {
  _id: {
    $oid: string;
  };
  message: string;
  __v: number;
}

export default function SimpleApiFetch() {
  const [value, setValue] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [dbMessage, setDbMessage] = useState('');

  const fetchFromDb = async () => {
    try {
      setStatusMessage('Fetching...');
      const response = await fetch('/api-stage/api');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = (await response.json()) as ApiResponse;
      setDbMessage(JSON.stringify(data.message));
      setStatusMessage('Fetched successfully!');
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.error('Error:', error);

      // Check if error is an instance of Error
      if (error instanceof Error) {
        setStatusMessage(`Error: ${error.message}`);
      } else {
        setStatusMessage('An unexpected error occurred.');
      }
    }
  };

  const sendToDb = async () => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000); // 10 seconds timeout

    try {
      setStatusMessage('Sending...');
      const response = await fetch('/api-stage/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: value }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setStatusMessage('Sent successfully!');
    } catch (error: unknown) {
      clearTimeout(timeoutId);

      if (error instanceof Error) {
        setStatusMessage(`Error: ${error.message}`);
      } else {
        setStatusMessage('An unexpected error occurred.');
      }
    }
  };

  return (
    <>
      <ContextCollapse
        appletTitle="Simple message to DB"
        contextTitle="Click for info"
        contextDescription="Sends to database, awaits get requests, then retrieves & presents data."
      />
      <div>
        <Textarea
          placeholder="Message..."
          label="Enter message to send database"
          autosize
          minRows={2}
          onBlur={(event: any) => setValue(event.currentTarget.value)}
        />
      </div>
      <div className="my-6">
        <Flex gap="xl" align="center">
          <Button
            variant="default"
            onClick={() => {
              sendToDb();
            }}
          >
            SEND
          </Button>
          <Divider orientation="vertical"></Divider>
          <Badge>
            {statusPlaceHolder}
            {`${statusMessage}`}
          </Badge>
          <Divider orientation="vertical"></Divider>
          <Button
            variant="default"
            onClick={() => {
              fetchFromDb();
            }}
          >
            FETCH
          </Button>
        </Flex>
      </div>
      <div>
        <Textarea
          placeholder="Awaiting to get request..."
          label="Message from database"
          autosize
          minRows={2}
          disabled
          value={dbMessage}
        />
      </div>
      <Flex className="mt-5" gap="sm" direction="column">
        <JsonInput
          className="flex-1"
          label="Debug Area [ json output ]"
          placeholder="Textarea will autosize to fit the content"
          validationError="Invalid JSON"
          formatOnBlur
          autosize
          disabled
        />
        <CopyButton value="https://mantine.dev">
          {({ copied, copy }) => (
            <Button variant="default" size="xs" color={copied ? 'teal' : 'blue'} onClick={copy}>
              {copied ? 'Copied Json Output' : 'Copy Json Output'}
            </Button>
          )}
        </CopyButton>
      </Flex>
    </>
  );
}
