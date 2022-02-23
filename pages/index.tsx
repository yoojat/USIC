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
  /* margin-bottom: 400px; */
  margin-bottom: 150px;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
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
      <ContentLayout
        isMain={true}
        headTitle={`이제 스터디카페, 독서실의 거품이 빠질 때가 되었습니다.`}
      ></ContentLayout>
    </>
  );
};

export default Home;
