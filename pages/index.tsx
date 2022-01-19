import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import Seo from '../components/Seo';
import { media } from '../styles/theme';

const BannerContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 600px;
  overflow: hidden;
`;

const BannerImageContainer = styled.div`
  position: relative;
  width: 100%;
  min-width: 900px;
  height: 600px;
  img {
    ${media.tablet} {
      transform: translateX(-10%);
    }
  }
  background-image: url('/banner.jpg');
  background-size: cover;
`;

const ContentWrapper = styled.div`
  position: absolute;
  margin-top: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1100px;
`;

const TitleContainer = styled.div``;
const Title = styled.h1`
  font-size: 46px;
  font-weight: 700;
  color: white;
  padding: 50px;
`;
const SubTitle = styled.h2`
  font-size: 17px;
  font-weight: 400;
  word-wrap: break-word;
  margin-top: 17px;
`;

const CountContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  color: white;
  font-size: 20px;
`;
const CountItem = styled.div`
  padding: 50px;
`;
const CountTitle = styled.div`
  background-color: #80868a;
  padding: 10px;
  border-radius: 5px;
`;
const CountContent = styled.div`
  text-align: center;
  color: #594be4;
  font-weight: 700;
  font-size: 60px;
  padding: 10px;
`;
const TryExperienceButtonContainer = styled.div`
  text-align: center;
`;
const TryExperienceButton = styled.button`
  background-color: #594be4;
  color: white;
  padding: 15px 30px;
  font-size: 20px;
  border-radius: 30px;
`;

const Home: NextPage = () => {
  return (
    <>
      <Seo title='홈' />
      <BannerContainer>
        <BannerImageContainer></BannerImageContainer>
      </BannerContainer>
      <ContentWrapper>
        <ContentContainer>
          <TitleContainer>
            <Title>
              관리도 얼마든지
              <br />
              자유로워질 수 있습니다.
            </Title>
            <SubTitle></SubTitle>
          </TitleContainer>
          <CountContainer>
            <CountItem>
              <CountTitle>누적 채널 응대 건수</CountTitle>
              <CountContent>300</CountContent>
            </CountItem>
            <CountItem>
              <CountTitle>누적 전화 건수</CountTitle>
              <CountContent>300</CountContent>
            </CountItem>
            <CountItem>
              <CountTitle>누적 시스템 결제 건수</CountTitle>
              <CountContent>300</CountContent>
            </CountItem>
          </CountContainer>
          <TryExperienceButtonContainer>
            <TryExperienceButton>15일 무료 체험</TryExperienceButton>
          </TryExperienceButtonContainer>
        </ContentContainer>
      </ContentWrapper>
    </>
  );
};

export default Home;
