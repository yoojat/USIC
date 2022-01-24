import Head from 'next/head';
import styled from 'styled-components';
import { media } from '../styles/theme';

const BannerContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 600px;
  overflow: hidden;
`;

const BannerImageContainer = styled.div<{
  bannerImgUrl?: string;
  isMain?: boolean;
}>`
  ${(props) =>
    !props.isMain
      ? `  @keyframes background_move {
    0% {
      background-position: center;
    }
    50% {
      background-position: top;
    }
    100% {
      background-position: center;
    }
  }
  animation-duration: 60s;
  animation-name: background_move;
  animation-iteration-count: infinite;`
      : ``};

  position: relative;
  width: 100%;
  /* min-width: 900px; */
  ${(props) => (props.isMain ? `height: 600px;` : `height: 310px;`)}
  img {
    ${media.tablet} {
      transform: translateX(-10%);
    }
  }
  ${(props) =>
    props.bannerImgUrl
      ? `background-image: url(${props.bannerImgUrl})`
      : `background-image: url(/banner.jpg)`};
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
`;

const HeadTitle = styled.h3`
  font-size: 28px;
  color: white;
  text-shadow: 2px 2px 5px black;
  padding-top: 20px;
  @keyframes TitleAppear {
    0% {
      opacity: 0;
      transform: translateY(-40px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  animation-duration: 2s;
  animation-name: TitleAppear;
`;

const SubMenuContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 280px;
`;
const SubMenu = styled.div`
  text-align: center;
`;

const SubMenuItem = styled.div`
  background-color: white;
  display: inline-block;
  width: 150px;
  padding: 20px;
  font-size: 17px;
  font-weight: 600;
  box-shadow: 3px 3px 5px #dedede;
  &:hover {
    color: ${(props) => props.theme.color.purple};
  }
  cursor: pointer;
`;

interface IProps {
  title: string;
  isMain?: boolean;
  bannerImgUrl?: string;
  headTitle?: string;
  subMenus?: [{ title: string; path: string }];
}

export default function HeadSection({
  title,
  bannerImgUrl,
  isMain = false,
  headTitle,
  subMenus,
}: IProps) {
  return (
    <>
      <Head>
        <title>{title} | 무인공간통합센터</title>
      </Head>
      <BannerContainer>
        <BannerImageContainer bannerImgUrl={bannerImgUrl} isMain={isMain}>
          {headTitle && <HeadTitle>{headTitle}</HeadTitle>}
        </BannerImageContainer>
        {subMenus && (
          <SubMenuContainer>
            {subMenus.map((subMenu) => (
              <SubMenu>
                <SubMenuItem>{subMenu.title}</SubMenuItem>
              </SubMenu>
            ))}
          </SubMenuContainer>
        )}
      </BannerContainer>
    </>
  );
}
