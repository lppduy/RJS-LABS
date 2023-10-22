import React from 'react';
import { useParams } from 'react-router-dom';

const QuoteDetail = () => {
  const { quoteId } = useParams();
  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>{quoteId}</p>
    </>
  );
};

export default QuoteDetail;
