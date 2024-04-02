'use client';

import { useState } from 'react';
import { Textarea, Divider, Button, Badge, Flex } from '@mantine/core';
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
    // await new Promise((resolve) => setTimeout(resolve, 2000));

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
    </>
  );
}
