import styled from 'styled-components';
import HeadSection from '../components/HeadSection';

const ContentWrapper = styled.div`
  /* position: absolute; */
  padding-top: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

interface IProps {
  title: string;
  isMain?: boolean;
  bannerImgUrl?: string;
  headTitle?: string;
  subMenus?: { title: string; path: string }[];
  children: React.ReactNode;
}

const ContentLayout = ({
  title,
  isMain,
  bannerImgUrl,
  headTitle,
  subMenus,
  children,
}: IProps) => {
  return (
    <div>
      <HeadSection
        title={title}
        isMain={isMain}
        bannerImgUrl={bannerImgUrl}
        headTitle={headTitle}
        subMenus={subMenus}
      />
      <ContentWrapper>{children}</ContentWrapper>
    </div>
  );
};

export default ContentLayout;
