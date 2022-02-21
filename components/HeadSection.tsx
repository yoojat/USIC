import Head from 'next/head';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { media } from '../styles/theme';

const BannerContainer = styled.div<{ isMain?: boolean }>`
  position: absolute;
  width: 100%;
  height: ${(props) => (props.isMain ? '800px' : '430px')};
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
  ${(props) => (props.isMain ? `height: 100vh;` : `height: 310px;`)}
  img {
    ${media.tablet} {
      transform: translateX(-10%);
    }
  }
  ${(props) =>
    props.bannerImgUrl
      ? `background-image: url(${props.bannerImgUrl})`
      : `background: rgba(0,0,0,0.5) url(/main_banner.jpeg)`};
  background-size: cover;
  background-blend-mode: darken;
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

const MainTitleContainer = styled.div`
  padding: 30px;
  width: 100%;
  max-width: 1200px;
  text-shadow: 2px 2px 2px gray;
  ${media.tablet} {
    width: 80%;
  }
  ${media.pc} {
    /* margin-left: 30px; */
    position: absolute;
    left: 5%;
    top: 20%;
  }
`;

const TopDescription = styled.div`
  color: ${(props) => props.theme.color.aBlue};
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 10px;
`;

const BottomDescription = styled.div`
  font-size: 20px;
  line-height: 1.5;
  margin-top: 20px;
  color: white;
  p {
    padding-top: 10px;
  }
`;

const BigHeadTitle = styled.h1`
  ${media.pc} {
    width: 400px;
  }
  ${media.tablet} {
    width: inherit;
  }
  font-size: 34px;
  font-weight: 400;
  color: white;
  line-height: 1.3;
  width: 100%;
`;

const SubMenuContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const SubMenu = styled.div`
  text-align: center;
  display: inline-block;
`;

const SubMenuItem = styled.div<{ isNowPage?: boolean }>`
  background-color: white;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 3px 3px 5px #dedede;
  display: inline-block;
  color: ${(props) => (props.isNowPage ? props.theme.color.aBlue : 'inheirt')};
  &:hover {
    color: ${(props) => props.theme.color.aBlue};
  }
  cursor: pointer;
  /* padding: 10px; */
  width: 200px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 10px;
`;
const VideoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    transform: translate(-50%, -50%);
    pointer-events: none;

    @media (min-aspect-ratio: 16/9) {
      /* height = 100 * (9 / 16) = 56.25 */
      height: 56.25vw;
    }
    @media (max-aspect-ratio: 16/9) {
      /* width = 100 / (9 / 16) = 177.777777 */
      width: 177.78vh;
    }
  }
`;

interface IProps {
  title?: string;
  isMain?: boolean;
  bannerImgUrl?: string;
  headTitle?: string;
  subMenus?: { title: string; value: string }[];
  topDescription?: string;
  nowSubPage?: string;
  setNowSubPage?: Dispatch<SetStateAction<string>>;
}

export default function HeadSection({
  title,
  bannerImgUrl,
  isMain = false,
  headTitle,
  subMenus,
  topDescription,
  nowSubPage,
  setNowSubPage,
}: IProps) {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} | 무인공간통합센터` : '무인공간통합센터'}
        </title>
      </Head>
      <BannerContainer isMain={isMain}>
        <BannerImageContainer bannerImgUrl={bannerImgUrl} isMain={isMain}>
          {headTitle &&
            (isMain ? (
              <VideoContainer>
                <iframe
                  src='https://www.youtube.com/embed/HP_ZnEkbC7Y?start=50&controls=0&autoplay=1&mute=1&loop=1&playlist=HP_ZnEkbC7Y'
                  title='YouTube video player'
                ></iframe>

                <MainTitleContainer>
                  <TopDescription>
                    스터디카페, 독서실 창업 / 운영 / 관리 상담
                  </TopDescription>
                  <BigHeadTitle>{headTitle}</BigHeadTitle>
                  <BottomDescription>
                    <p>
                      저희가 제공하는 칼럼을 읽어보시지도 않고, <br />
                      상담을 신청하는 분들은 거절 합니다.
                    </p>
                    <p>
                      이곳을 찾는 많은 분들이
                      <br />
                      후기와 무료 칼럼만으로 성공하실 수 있습니다.
                    </p>
                  </BottomDescription>
                </MainTitleContainer>
              </VideoContainer>
            ) : (
              <HeadTitle>{headTitle}</HeadTitle>
            ))}
        </BannerImageContainer>
        {subMenus && (
          <SubMenuContainer>
            {subMenus.map((subMenu, index) => (
              <SubMenu
                key={index}
                onClick={() => setNowSubPage && setNowSubPage(subMenu.value)}
              >
                <SubMenuItem isNowPage={subMenu.value === nowSubPage}>
                  {subMenu.title}
                </SubMenuItem>
              </SubMenu>
            ))}
          </SubMenuContainer>
        )}
      </BannerContainer>
    </>
  );
}
