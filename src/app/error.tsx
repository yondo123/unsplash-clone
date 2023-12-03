'use client';

import { Button, Heading } from '@layouts/components';
import { ErrorContainer } from './_styles/errorPageStyle';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  const errorMessage = error.message ?? '알 수 없는 오류가 발생하였습니다.';

  return (
    <ErrorContainer>
      <Heading color="#000000" size="xl">
        오류가 발생했어요.
      </Heading>
      <Heading color="#d53d2d" size="lg">
        {errorMessage}
      </Heading>
      <Button
        onClick={() => {
          reset();
        }}
      >
        다시시도
      </Button>
    </ErrorContainer>
  );
};

export default Error;
