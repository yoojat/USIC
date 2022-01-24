import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import NavBar from './NavBar';

const AbsolutedComponent = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
`;

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <>
      <NavBar />
      <AbsolutedComponent>
        {children}
        <Footer />
      </AbsolutedComponent>
    </>
  );
}
