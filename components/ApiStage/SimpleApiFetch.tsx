'use client';

import { useState } from 'react';
import { Textarea, Divider, Button, Badge, Flex, JsonInput, CopyButton } from '@mantine/core';
import ContextCollapse from '@/components/ContextCollapse/ContextCollapse';

const statusPlaceHolder = 'STATUS: ';
const defaultStatusMessage = 'null';

export default function SimpleApiFetch() {
  const [value, setValue] = useState('');
  const [dbMessage, setDbMessage] = useState('');

  const fetchFromDb = async () => {
    try {
      // setStatusMessage('Fetching...');
      const response = await fetch('/api-stage/api');
      console.log(response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setDbMessage(JSON.stringify(data));
      // setStatusMessage('Fetched successfully!');
    } catch (error: any) {
      // setStatusMessage(`Error: ${error.message}`);
      setDbMessage(`Error: ${error.message}`);
    }
  };

  /* Mongo is Default */
  const sendToDb = async () => {
    console.log(value);
  };

  // const fetchFromDb = async () => {
  //   /* eslint-disable no-promise-executor-return */
  //   const x = useSimpleApi();
  //   setDbMessage(JSON.stringify(x));
  //   console.log(JSON.stringify(x));
  //   return value;
  // };

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
