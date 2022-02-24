import Head from 'next/head';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import { media } from '../styles/theme';

const BannerContainer = styled.div<{ isMain?: boolean }>`
  position: absolute;
  width: 100%;
  height: ${(props) => (props.isMain ? '70vh' : '430px')};
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
  ${(props) => (props.isMain ? `height: 70vh;` : `height: 310px;`)}
  img {
    ${media.tablet} {
      transform: translateX(-10%);
    }
  }
  ${(props) =>
    props.bannerImgUrl
      ? `background-image: url(${props.bannerImgUrl})`
      : `background: rgba(0,0,0,0.5) url(/main_banner.png)`};
  background-size: cover;
  background-blend-mode: darken;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  background-position: 72% 75%;

  ${(props) => props.isMain && `height: 70vh;`}
`;

const HeadTitle = styled.h3`
  font-size: 28px;
  color: white;
  text-shadow: 2px 2px 5px black;
  padding-top: 90px;
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
  /* margin-left: 30px; */
  ${media.pc} {
    left: 10%;
  }
  ${media.mobile} {
    top: 15%;
    left: 5%;
  }
  position: absolute;
  left: 25%;
  top: 30%;
`;

const TopDescription = styled.div`
  color: white;
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

const FreeConsultingButton = styled.button`
  background-color: ${(props) => props.theme.color.mainBlue};
  color: white;
  padding: 15px 20px;
  margin-top: 35px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  &:hover {
    background-color: ${(props) => props.theme.color.aBlue};
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
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);
  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} | 무인공간통합센터`
            : '무인공간통합센터 - 개인스터디카페 컨설팅 및 솔루션'}
        </title>
        <meta
          property='og:title'
          content={
            title
              ? `${title} | 무인공간통합센터`
              : '무인공간통합센터 - 개인스터디카페 컨설팅 및 솔루션'
          }
        />
        <meta
          name='description'
          content='국내 최초 개인스터디카페 창업 및 운영 업체입니다. 업계 최고 전문가들이 모여 만들어낸 서비스를 제공합니다.'
        />
        <meta
          property='og:description'
          content='국내 최초 개인스터디카페 창업 및 운영 업체입니다. 업계 최고 전문가들이 모여 만들어낸 서비스를 제공합니다.'
        />
        <meta
          name='keywords'
          content='개인스터디카페, 중고키오스크, 키오스크구매, 스터디카페창업, 독서실창업, 무인스터디카페, 키오스크추천,
스터디카페운영, 스터디카페인테리어'
        />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='무인공간통합센터' />
        <meta property='og:url' content='https://www.muinspace.co.kr' />
        <meta property='og:image' content='/logo.png' />
        <meta property='al:ios:url' content='applinks://docs' />
        <meta property='al:ios:app_store_id' content='12345' />
        <meta property='al:ios:app_name' content='App Links' />
        <meta property='al:android:url' content='applinks://docs' />
        <meta property='al:android:app_name' content='App Links' />
        <meta property='al:android:package' content='org.applinks' />
        <link rel='canonical' href='https://www.muinspace.co.kr/' />
        <meta
          property='al:web:url'
          content='http://applinks.org/documentation'
        ></meta>
        <meta
          name='naver-site-verification'
          content='da70c5ec3424c052c157a2c3b957c9a5a337c074'
        />
      </Head>
      <BannerContainer isMain={isMain}>
        <BannerImageContainer bannerImgUrl={bannerImgUrl} isMain={isMain}>
          {headTitle &&
            (isMain ? (
              <>
                <MainTitleContainer>
                  <TopDescription>
                    개인스터디카페, 독서실 창업/운영 솔루션 업체
                  </TopDescription>
                  <BigHeadTitle>{headTitle}</BigHeadTitle>
                  <BottomDescription>
                    <p>불만족시 100% 환불 정책</p>
                  </BottomDescription>
                  <Link href='https://forms.gle/mS2THJcdm1ciJNtR9'>
                    <a target='_blank'>
                      <FreeConsultingButton>무료 상담하기</FreeConsultingButton>
                    </a>
                  </Link>
                </MainTitleContainer>
              </>
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
