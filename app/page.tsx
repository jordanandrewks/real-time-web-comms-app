import React from 'react';
import { Divider } from '@mantine/core';
import StageHeader from '@/components/StageHeader/StageHeader';
import SimpleApiFetch from '@/components/ApiStage/SimpleApiFetch';
import connectToDb from '@/utils/mongo/connectToMongoDb';

export default function HomePage() {
  connectToDb();
  return (
    <>
      <StageHeader title="API STAGE" description="API testing and development" />
      <SimpleApiFetch />
      <Divider className="my-10" />
    </>
  );
}
