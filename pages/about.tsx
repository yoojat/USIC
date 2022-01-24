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
`;

const SubMenu = styled.div`
  text-align: center;
`;

const SubMenuItem = styled.div`
  background-color: white;
  display: inline-block;
  padding: 20px;
  font-size: 17px;
  font-weight: 600;
  box-shadow: 3px 3px 5px #dedede;
`;

const MainContentContainer = styled.div`
  padding: 30px;
  box-sizing: border-box;
  width: 100%;
  max-width: 900px;
`;

const ContentTitle = styled.div`
  font-size: 34px;
  line-height: 1.4;
  font-weight: 400;
  margin-top: 10px;
`;

const HistoryTag = styled.div`
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;
`;

const HistoryContent = styled.div`
  margin-top: 50px;
`;
const YearSection = styled.div`
  border-left: 1px dashed #e1e1e1;
`;
const YearItem = styled.div`
  margin-top: 10px;
  border-bottom: 1px dashed #e1e1e1;
  padding: 30px;
`;
const YearTitle = styled.div`
  font-size: 17px;
  font-weight: 800;
  line-height: 20px;
`;
const YearContent = styled.div`
  margin-top: 10px;
  font-size: 17px;
  li {
    line-height: 1.6;
  }
  li:before {
    content: '- ';
  }
`;

export default function About() {
  return (
    <div>
      <HeadSection
        title='회사소개'
        bannerImgUrl='/banner2.jpg'
        headTitle='회사 주요 연혁'
        subMenus={[{ title: '회사 주요 연혁', path: '/about' }]}
      />
      <ContentWrapper>
        <MainContentContainer>
          <HistoryTag>History</HistoryTag>
          <ContentTitle>
            <p>
              <span style={{ color: '#6262F5', fontWeight: 900 }}>
                무인공간통합센터
              </span>
              가 꿈꾸는 미래
            </p>
            <p>
              <span style={{ fontWeight: 900 }}>
                대한민국 독서실, 스터디카페 사업자들의 최고의 파트너
              </span>
              <span style={{ color: '#777' }}>로 함께 하겠습니다!</span>
            </p>
          </ContentTitle>
          <HistoryContent>
            <YearSection>
              <YearItem>
                <YearTitle>2017년</YearTitle>
                <YearContent>
                  <ul>
                    <li>독서실 운영 프로그램 개발 및 배포</li>
                    <li>블루닷라운지 독서실 1호점 부산 북구 화명동 오픈</li>
                    <li>블루닷라운지 독서실 2호점 부산 북구 화명동 오픈</li>
                    <li>운영 프로그램 버전 2 개발 및 배포</li>
                  </ul>
                </YearContent>
              </YearItem>
              <YearItem>
                <YearTitle>2018년</YearTitle>
                <YearContent>
                  <ul>
                    <li>블루닷라운지 3호점 부산 동래구 안락동 오픈 운영</li>
                    <li>
                      프로그램에 온라인 결제 기능 추가, 온라인 결제 운영 시작
                    </li>
                  </ul>
                </YearContent>
              </YearItem>
              <YearItem>
                <YearTitle>2019년</YearTitle>
                <YearContent>
                  <ul>
                    <li>블루닷라운지 독서실 4호점 부산 해운대구 반여동 오픈</li>
                    <li>블루닷라운지 독서실 5호점 부산 동래구 명륜동 오픈</li>
                    <li>가맹 위탁 운영 시작</li>
                  </ul>
                </YearContent>
              </YearItem>
              <YearItem>
                <YearTitle>2020년</YearTitle>
                <YearContent>
                  <ul>
                    <li>블루닷라운지 독서실 9호점 부사 북구 화명동 오픈</li>
                    <li>블루닷라운지 독서실 10호점 부산 금정구 구서동 오픈</li>
                    <li>블루닷라운지 독서실 11호점 양산 물금동 오픈</li>
                  </ul>
                </YearContent>
              </YearItem>

              <YearItem>
                <YearTitle>2021년</YearTitle>
                <YearContent>
                  <ul>
                    <li>키오스크 개발 완료 및 키오스크 기반 운영 시작</li>
                    <li>블루닷라운지 독서실 12호점 울산 삼산동 오픈</li>
                    <li>블루닷라운지 독서실 13호점 부산 정관 오픈</li>
                    <li>블루닷라운지 독서실 14호점 부산 사직 오픈</li>
                    <li>무인공간통합센터 개시 및 시범 운영</li>
                    <li>원격 통합 운영 관리 서비스 진행</li>
                  </ul>
                </YearContent>
              </YearItem>
            </YearSection>
          </HistoryContent>
        </MainContentContainer>
      </ContentWrapper>
    </div>
  );
}
