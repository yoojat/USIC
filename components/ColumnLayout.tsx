import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import ContentLayout from './ContentLayout';

const ContentWrapper = styled.div`
  /* position: absolute; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 400px;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const MenuContainer = styled.div`
  border-bottom: 1px solid rgb(215, 215, 215);
`;
const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const MenuItem = styled.div`
  font-size: 22px;
  color: rgb(110, 110, 110);
  padding: 20px;
  cursor: pointer;
  box-sizing: content-box;
  position: relative;
  transition: all 0.3s;
  &::after {
    content: '';
    position: absolute;
    left: 0px;
    right: 0px;
    height: 3px;
    bottom: -1px;
    transition: all 0.5s ease 0s;
  }
  &:hover {
    color: ${(props) => props.theme.color.aBlue};
    &::after {
      content: '';
      position: absolute;
      left: 0px;
      right: 0px;
      height: 3px;
      bottom: -1px;
      transition: all 0.5s ease 0s;
      background-color: ${(props) => props.theme.color.aBlue};
    }
  }
`;

const ColumnContainer = styled.div``;

interface IProps {
  children: React.ReactNode;
}

const ColumnLayout = ({ children }: IProps) => {
  return (
    <>
      <ContentLayout
        title='칼럼'
        isMain={false}
        headTitle={'칼럼'}
        bannerImgUrl={'/banner4.jpg'}
      >
        <ContentWrapper>
          <ContentContainer>
            <MenuContainer>
              <Menu>
                <Link href='/column'>
                  <a>
                    <MenuItem>처음 오신 분을 위한 칼럼</MenuItem>
                  </a>
                </Link>
                <Link href='/column/columns'>
                  <MenuItem>재회 칼럼</MenuItem>
                </Link>
                <MenuItem>내담자 전용 칼럼</MenuItem>
              </Menu>
            </MenuContainer>
            <ColumnContainer>{children}</ColumnContainer>
          </ContentContainer>
        </ContentWrapper>
      </ContentLayout>
    </>
  );
};

export default ColumnLayout;
