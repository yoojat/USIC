import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import ContentLayout from '../components/ContentLayout';
import HeadSection from '../components/HeadSection';
import {
  PaperIcon,
  PhoneIcon,
  ProcessingIcon,
  ReportIcon,
  SolutionIcon,
} from '../components/Svg';
import { media } from '../styles/theme';

const ContentWrapper = styled.div`
  /* position: absolute; */
  margin-top: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  padding-bottom: 60px;
  padding-top: 30px;
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

const IntroducingContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const IntroducingContentItem = styled.div`
  width: 250px;
  text-align: center;
  margin-top: 30px;
  ${media.mobile} {
    width: 300px;
  }
`;
const IntroudcingIconContainer = styled.div`
  max-width: 120px;

  margin-left: auto;
  margin-right: auto;
  img {
    width: 100%;
    margin-bottom: 10px;
  }
`;
const ContentTitle = styled.div`
  font-size: 38px;
  text-align: center;
  margin-bottom: 35px;
`;
const IntroducingItemContent = styled.div`
  padding-top: 10px;
`;

const IntroducingItemTitle = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.color.mainBlue};
  font-weight: 700;
  margin-bottom: 30px;
`;
const IntroducingItemSubtitle = styled.div`
  font-size: 17px;
`;
const MiddleBanner = styled.div`
  margin-top: 50px;
  background-image: url('/middle_banner.jpg');
  background-size: cover;
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  ${media.tablet} {
    align-items: center;
  }
  flex-direction: column;
  text-shadow: 2px 2px 5px black;
`;
const MiddleBannerTitle = styled.div`
  font-size: 35px;
  text-align: center;
  color: white;
  font-weight: 300;
  line-height: 1.2;
  margin-right: 50px;

  ${media.tablet} {
    margin-right: inherit;
  }
  span {
    font-weight: 900;
  }
`;

const MiddleBannerSubTitle = styled.div`
  font-size: 20px;
  text-align: center;
  color: white;
  margin-top: 20px;
  margin-right: 50px;
  ${media.tablet} {
    margin-right: inherit;
  }
  span {
    font-weight: 900;
  }
  line-height: 1.2;
`;
const ContractTitle = styled.div`
  font-size: 24px;
  span {
    color: ${(props) => props.theme.color.mainBlue};
  }
  padding: 20px;
`;
const ContractContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap;
`;
const ContractItem = styled.div`
  padding: 10px;
`;
const ContractItemCircle = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  border: 2px solid #e7e7e7;
  text-align: center;
`;
const ContractItemIndex = styled.div`
  margin-top: 30px;
  font-size: 15px;
  font-weight: 600;
  color: ${(props) => props.theme.color.mainBlue};
`;
const ContractItemIcon = styled.div`
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  svg {
    width: 100%;
    fill: #3a8bc2;
  }
`;
const ContractItemTitle = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 16px;
  font-weight: 600;
`;
const Home: NextPage = () => {
  return (
    <>
      {/* <HeadSection title='홈' isMain={true} /> */}
      <ContentLayout
        title='홈'
        isMain={true}
        headTitle={`관리도 얼마든지 자유로워질 수 있습니다.`}
      >
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
          <ContentContainer>
            <ContentTitle>
              독서실, 스터디카페
              <span style={{ color: '#3A8BC2' }}> 관리대행</span>이
              필요하신가요?
            </ContentTitle>
            <IntroducingContentContainer>
              <IntroducingContentItem>
                <IntroudcingIconContainer>
                  <img src='/time.svg' />
                </IntroudcingIconContainer>
                <IntroducingItemContent>
                  <IntroducingItemTitle>시간적자유</IntroducingItemTitle>
                  <IntroducingItemSubtitle>
                    독서실/스터디카페 전문 상담원을 통해, 관리 부담 최소화 기능
                  </IntroducingItemSubtitle>
                </IntroducingItemContent>
              </IntroducingContentItem>
              <IntroducingContentItem>
                <IntroudcingIconContainer>
                  <img src='/man.svg' />
                </IntroudcingIconContainer>
                <IntroducingItemContent>
                  <IntroducingItemTitle>
                    퀄리티 높은 전문 상담원
                  </IntroducingItemTitle>
                  <IntroducingItemSubtitle>
                    독서실/스터디카페 전문 상담원을 통해, 관리 부담 최소화 기능
                  </IntroducingItemSubtitle>
                </IntroducingItemContent>
              </IntroducingContentItem>
              <IntroducingContentItem>
                <IntroudcingIconContainer>
                  <img src='/money.svg' />
                </IntroudcingIconContainer>
                <IntroducingItemContent>
                  <IntroducingItemTitle>합리적인 가격</IntroducingItemTitle>
                  <IntroducingItemSubtitle>
                    서비스 발생 건수에 따른 합리적 인가격 제시
                  </IntroducingItemSubtitle>
                </IntroducingItemContent>
              </IntroducingContentItem>
              <IntroducingContentItem>
                <IntroudcingIconContainer>
                  <img src='/maintain.svg' />
                </IntroudcingIconContainer>
                <IntroducingItemContent>
                  <IntroducingItemTitle>
                    지속적인 서비스 개발
                  </IntroducingItemTitle>
                  <IntroducingItemSubtitle>
                    동종 업계 최고의 관리/응대 전문가를 통한 현장 서비스 및
                    독서실/스터디카페 시스템 전문 개발자를 통한 자체 시스템 보유
                  </IntroducingItemSubtitle>
                </IntroducingItemContent>
              </IntroducingContentItem>
            </IntroducingContentContainer>
          </ContentContainer>
          <MiddleBanner>
            <MiddleBannerTitle>
              무인공간통합센터의 <span>전 직원</span>은<br />
              <span>다양한 관리 솔루션 활용</span>이 가능합니다.
            </MiddleBannerTitle>
            <MiddleBannerSubTitle>
              응대/관리, 회원관리, 매출관리, 좌석관리, 출입/통제 시스템,
              <br /> 키오스크 , 온라인 서비스
            </MiddleBannerSubTitle>
          </MiddleBanner>
          <ContentContainer>
            <ContentContainer>
              <ContractTitle>
                <span>계약</span> 프로세스
              </ContractTitle>
              <ContractContent>
                <ContractItem>
                  <ContractItemCircle>
                    <ContractItemIndex>step01</ContractItemIndex>
                    <ContractItemIcon>
                      <PhoneIcon />
                    </ContractItemIcon>
                  </ContractItemCircle>
                  <ContractItemTitle>
                    전화 상담 & 고객정보확인
                  </ContractItemTitle>
                </ContractItem>
                <ContractItem>
                  <ContractItemCircle>
                    <ContractItemIndex>step02</ContractItemIndex>
                    <ContractItemIcon>
                      <PaperIcon />
                    </ContractItemIcon>
                  </ContractItemCircle>
                  <ContractItemTitle>기초 컨설팅</ContractItemTitle>
                </ContractItem>
                <ContractItem>
                  <ContractItemCircle>
                    <ContractItemIndex>step03</ContractItemIndex>
                    <ContractItemIcon>
                      <SolutionIcon />
                    </ContractItemIcon>
                  </ContractItemCircle>
                  <ContractItemTitle>솔루션 제시</ContractItemTitle>
                </ContractItem>
                <ContractItem>
                  <ContractItemCircle>
                    <ContractItemIndex>step04</ContractItemIndex>
                    <ContractItemIcon>
                      <ProcessingIcon />
                    </ContractItemIcon>
                  </ContractItemCircle>
                  <ContractItemTitle>계약 진행</ContractItemTitle>
                </ContractItem>
                <ContractItem>
                  <ContractItemCircle>
                    <ContractItemIndex>step05</ContractItemIndex>
                    <ContractItemIcon>
                      <ReportIcon />
                    </ContractItemIcon>
                  </ContractItemCircle>
                  <ContractItemTitle>
                    업무시작 & 일간 리포트 제출
                  </ContractItemTitle>
                </ContractItem>
              </ContractContent>
            </ContentContainer>
          </ContentContainer>
        </ContentWrapper>
      </ContentLayout>
    </>
  );
};

export default Home;
