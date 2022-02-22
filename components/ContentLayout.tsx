import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import HeadSection from '../components/HeadSection';

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
  subMenus?: { title: string; value: string }[];
  children: React.ReactNode;
  nowSubPage?: string;
  setNowSubPage?: Dispatch<SetStateAction<string>>;
}

const ContentLayout = ({
  title,
  isMain,
  bannerImgUrl,
  headTitle,
  subMenus,
  children,
  nowSubPage,
  setNowSubPage,
}: IProps) => {
  return (
    <div
      style={{
        backgroundColor: 'rgb(250, 250, 250)',
        height: isMain ? '100vh' : 'inherit',
      }}
    >
      <HeadSection
        title={title}
        isMain={isMain}
        bannerImgUrl={bannerImgUrl}
        headTitle={headTitle}
        subMenus={subMenus}
        nowSubPage={nowSubPage}
        setNowSubPage={setNowSubPage}
      />
      <ContentWrapper isMain={isMain}>{children}</ContentWrapper>
    </div>
  );
};

export default ContentLayout;
