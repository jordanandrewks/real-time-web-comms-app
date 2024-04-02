import React from 'react';
import { Divider } from '@mantine/core';
import StageHeader from '@/components/StageHeader/StageHeader';
import SimpleApiFetch from '@/components/ApiStage/SimpleApiFetch';

export default function HomePage() {
  return (
    <>
      <StageHeader title="API STAGE" description="API testing and development" />
      <SimpleApiFetch />
      <Divider className="my-10" />
    </>
  );
}
// press button send
// press button to read out of db
