import React from 'react';
import { Welcome } from '../components/Welcome/Welcome';
import StageHeader from '@/components/StageHeader/StageHeader';

export default function HomePage() {
  return (
    <>
      <StageHeader title="API STAGE" description="API testing and development" />
      <Welcome></Welcome>
    </>
  );
}
