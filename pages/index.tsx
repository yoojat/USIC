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
  margin-bottom: 400px;
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
  color: ${(props) => props.theme.color.aBlue};
  font-weight: 700;
  font-size: 60px;
  padding: 10px;
`;
const TryExperienceButtonContainer = styled.div`
  text-align: center;
`;
const TryExperienceButton = styled.button`
  background-color: ${(props) => props.theme.color.aBlue};
  color: white;
  padding: 15px 30px;
  font-size: 20px;
  border-radius: 30px;
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
                <CountTitle>컨설팅 상담건수</CountTitle>
                <CountContent>300</CountContent>
              </CountItem>
              <CountItem>
                <CountTitle>누적 응대 건수</CountTitle>
                <CountContent>300</CountContent>
              </CountItem>
              <CountItem>
                <CountTitle>누적 시스템 결제 건수</CountTitle>
                <CountContent>300</CountContent>
              </CountItem>
            </CountContainer>
            <TryExperienceButtonContainer>
              <TryExperienceButton>USIC 컬럼 바로가기</TryExperienceButton>
            </TryExperienceButtonContainer>
          </ContentContainer>
        </ContentWrapper>
      </ContentLayout>
    </>
  );
};

export default Home;
