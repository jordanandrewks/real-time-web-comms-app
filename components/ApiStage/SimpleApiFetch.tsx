'use client';

import { useState } from 'react';
import { Textarea, Divider, Button, Badge, Flex, JsonInput, CopyButton } from '@mantine/core';
import ContextCollapse from '@/components/ContextCollapse/ContextCollapse';

const statusPlaceHolder = 'STATUS: ';
const defaultStatusMessage = 'null';

export default function SimpleApiFetch() {
  const [value, setValue] = useState('');
  const [dbMessage, setDbMessage] = useState('');

  /* Mongo is Default */
  const sendToDb = () => {
    console.log(value);
  };

  const fetchFromDb = async () => {
    /* eslint-disable no-promise-executor-return */
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Mock delay

    setDbMessage(value);
    console.log(value);
    return value;
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
            {defaultStatusMessage}
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

/*

States:
sending
sent

fetching
fetched.

Error

Maybe a debug terminal at the bottom in json format or something??
*/
