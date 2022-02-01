import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ContentLayout from '../../components/ContentLayout';
const QuillWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const WriteColumn: NextPage = () => {
  return (
    <ContentLayout title='컬럼 쓰기'>
      <QuillWrapper theme='snow' />
    </ContentLayout>
  );
};

export default WriteColumn;
