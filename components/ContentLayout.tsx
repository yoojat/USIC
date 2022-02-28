import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { media } from 'styles/theme';
import HeadSection from '../components/HeadSection';

const HeadSectionContainer = styled.div<{ isMain?: boolean }>`
  height: ${(props) => (props.isMain ? '70vh' : 'inherit')};
  ${media.mobile} {
    height: ${(props) => (props.isMain ? '80vh' : 'inherit')};
  }
  background-color: rgb(250, 250, 250);
`;

const ContentWrapper = styled.div<{ isMain?: boolean }>`
  /* position: absolute; */
  padding-top: ${(props) => (props.isMain ? '200px' : '400px')};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

interface IProps {
  title?: string;
  isMain?: boolean;
  bannerImgUrl?: string;
  headTitle?: string;
  headTitles?: string[];
  subMenus?: { title: string; value: string }[];
  children?: React.ReactNode;
  nowSubPage?: string;
  setNowSubPage?: Dispatch<SetStateAction<string>>;
}

const ContentLayout = ({
  title,
  isMain,
  bannerImgUrl,
  headTitle,
  headTitles,
  subMenus,
  children,
  nowSubPage,
  setNowSubPage,
}: IProps) => {
  return (
    <HeadSectionContainer isMain={isMain}>
      <HeadSection
        title={title}
        isMain={isMain}
        bannerImgUrl={bannerImgUrl}
        headTitles={headTitles}
        headTitle={headTitle}
        subMenus={subMenus}
        nowSubPage={nowSubPage}
        setNowSubPage={setNowSubPage}
      />
      <ContentWrapper isMain={isMain}>{children}</ContentWrapper>
    </HeadSectionContainer>
  );
};

export default ContentLayout;
