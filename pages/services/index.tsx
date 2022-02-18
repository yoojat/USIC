import Link from 'next/link';
import styled from 'styled-components';
import ContentLayout from '../../components/ContentLayout';
import { media } from '../../styles/theme';
const SubSubMenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    width: 90%;
  }
  grid-gap: 0;
`;
const SubMenuItem = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  width: 250px;
  height: 60px;
  border: 1px solid #dedede;
  text-align: center;
  box-sizing: border-box;
  width: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.tablet} {
    width: 100%;
  }
  &:hover {
    background-color: ${(props) => props.theme.color.mainBlue};
    color: white;
  }
`;

const MainContentsWrapper = styled.div`
  margin-top: 60px;
  font-weight: 300;
  span {
    font-weight: 600;
  }
`;
const ServiceDisplay = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const VerticalLineContainer = styled.div`
  text-align: center;
  width: 100%;
`;
const VerticalLine = styled.div`
  display: inline-block;
  border-left: 1px solid #ccc;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const ContentSection = styled.section`
  margin-bottom: 50px;
`;
const TopTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 30px;
  text-align: center;

  br {
    display: none;
  }
  ${media.mobile} {
    br {
      display: inherit;
    }
  }
`;
const ProcessContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
const ProcessItem = styled.div`
  width: 200px;
  height: 200px;
  text-align: center;
  border: 1px solid #dedede;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  ${media.tablet} {
    width: 100px;
    height: 100px;
  }
`;
const ProcessItemDesTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  ${media.tablet} {
    font-size: 12px;
  }
`;

const ProcessItemTitle = styled.div`
  color: ${(props) => props.theme.color.mainBlue};
  font-weight: 700;
  margin-top: 5px;
  font-size: 22px;
  ${media.tablet} {
    font-size: 16px;
  }
`;
const ProcessLine = styled.div`
  border-top: 2px solid ${(props) => props.theme.color.secondBlue};
  width: 20px;
  height: 0;
  position: relative;
  &::after {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    background: #fff;
    border: 2px solid ${(props) => props.theme.color.fifthBlue};
    border-radius: 10px;
    position: absolute;
    top: -5px;
    left: 16px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  padding-bottom: 50px;
  border-bottom: 1px solid #dedede;
  margin-bottom: 40px;
  span {
    font-weight: 600;
    color: ${(props) => props.theme.color.mainBlue};
  }
`;
const StrengthItem = styled.div``;
const StrengthItemTitle = styled.h3`
  span {
    background-color: ${(props) => props.theme.color.mainBlue};
    padding-left: 8px;
    padding-right: 8px;
    text-align: center;
    color: white;
  }
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 600;
  vertical-align: baseline;
`;
const StrengthContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StrengthImgContainer = styled.div`
  flex: 1;
`;
const StrengthCotentContainer = styled.div`
  flex: 1;
`;

const PostersContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;
const PosterItem = styled.div`
  max-width: 700px;
  margin: 5px;
`;
const PosterTopBox = styled.div`
  background-color: ${(props) => props.theme.color.mainBlue};
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 15px;
  color: white;
  font-size: 20px;
  padding-left: 15px;
  padding-right: 15px;
`;
const PosterTitle = styled.div`
  border-bottom: 1px solid white;
  padding-bottom: 10px;
  margin-bottom: 10px;
  font-weight: 600;
`;
const PosterSubTitle = styled.div``;
const PosterBottomBox = styled.div``;
const PosterDescription = styled.div``;
const PosterImgContainer = styled.div``;
const PosterSubDescription = styled.div``;

export default function Services() {
  return (
    <ContentLayout
      title='제공서비스'
      bannerImgUrl='/banner2.jpg'
      headTitle='제공서비스'
      subMenus={[
        {
          title: '콜센터대행',
          path: '/',
        },
        {
          title: '쇼핑몰 운영대행',
          path: '/',
        },
      ]}
    >
      <SubSubMenuContainer>
        <Link href='/'>
          <a>
            <SubMenuItem>콜센터 대행</SubMenuItem>
          </a>
        </Link>
        <Link href='/'>
          <a>
            <SubMenuItem>CS, A/S대행</SubMenuItem>
          </a>
        </Link>
        <Link href='/'>
          <a>
            <SubMenuItem>텔레마케팅/설문조사/RSVP</SubMenuItem>
          </a>
        </Link>
        <Link href='/'>
          <a>
            <SubMenuItem>콜센터 구축 컨설팅</SubMenuItem>
          </a>
        </Link>
      </SubSubMenuContainer>
      <MainContentsWrapper>
        <ServiceDisplay>SERVICE</ServiceDisplay>
        <VerticalLineContainer>
          <VerticalLine />
        </VerticalLineContainer>
        <ContentSection>
          <TopTitle>
            <span>콜센터 대행,</span>
            <br />
            전문가에게 맡겨보세요.
          </TopTitle>
          <ProcessContainer>
            <ProcessItem>
              <ProcessItemDesTitle>전문적인</ProcessItemDesTitle>
              <ProcessItemTitle>CS 대행</ProcessItemTitle>
            </ProcessItem>
            <ProcessLine />
            <ProcessItem>
              <ProcessItemDesTitle>능숙하고 정확한</ProcessItemDesTitle>
              <ProcessItemTitle>A/S센터 대행</ProcessItemTitle>
            </ProcessItem>
            <ProcessLine />
            <ProcessItem>
              <ProcessItemDesTitle>효율적인</ProcessItemDesTitle>
              <ProcessItemTitle>텔레마케팅</ProcessItemTitle>
            </ProcessItem>
            <ProcessLine />
            <ProcessItem>
              <ProcessItemDesTitle>정확한 분석</ProcessItemDesTitle>
              <ProcessItemTitle>
                설문조사
                <br />
                RSVP
              </ProcessItemTitle>
            </ProcessItem>
            <ProcessLine />
            <ProcessItem>
              <ProcessItemDesTitle>믿음이 가는</ProcessItemDesTitle>
              <ProcessItemTitle>콜센터 구축 컨설팅</ProcessItemTitle>
            </ProcessItem>
          </ProcessContainer>
        </ContentSection>
        <ContentSection>
          <SectionTitle>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              stroke='#3A8BC2'
              fill='#3A8BC2'
            >
              <path d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z' />
            </svg>{' '}
            <span>콜센터 대행</span>전문 한국기업콜센터만의 4가지{' '}
            <span>강점</span>
          </SectionTitle>
          <StrengthItem>
            <StrengthItemTitle>
              <span>1</span> 퀄리티 높은 전문 상담원 배치
            </StrengthItemTitle>
            <StrengthContentBox>
              <StrengthImgContainer>이미지</StrengthImgContainer>
              <StrengthCotentContainer>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                quaerat? Nulla laborum, officia ducimus mollitia in delectus
                voluptatibus, earum odio nesciunt quasi quo eveniet voluptates
                exercitationem magnam! Perferendis, aspernatur ad.
              </StrengthCotentContainer>
            </StrengthContentBox>
          </StrengthItem>
          <StrengthItem>
            <StrengthItemTitle>
              <span>1</span> 퀄리티 높은 전문 상담원 배치
            </StrengthItemTitle>
            <StrengthContentBox>
              <StrengthImgContainer>이미지</StrengthImgContainer>
              <StrengthCotentContainer>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                quaerat? Nulla laborum, officia ducimus mollitia in delectus
                voluptatibus, earum odio nesciunt quasi quo eveniet voluptates
                exercitationem magnam! Perferendis, aspernatur ad.
              </StrengthCotentContainer>
            </StrengthContentBox>
          </StrengthItem>
          <StrengthItem>
            <StrengthItemTitle>
              <span>1</span> 퀄리티 높은 전문 상담원 배치
            </StrengthItemTitle>
            <StrengthContentBox>
              <StrengthImgContainer>이미지</StrengthImgContainer>
              <StrengthCotentContainer>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                quaerat? Nulla laborum, officia ducimus mollitia in delectus
                voluptatibus, earum odio nesciunt quasi quo eveniet voluptates
                exercitationem magnam! Perferendis, aspernatur ad.
              </StrengthCotentContainer>
            </StrengthContentBox>
          </StrengthItem>
          <StrengthItem>
            <StrengthItemTitle>
              <span>1</span> 퀄리티 높은 전문 상담원 배치
            </StrengthItemTitle>
            <StrengthContentBox>
              <StrengthImgContainer>이미지</StrengthImgContainer>
              <StrengthCotentContainer>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                quaerat? Nulla laborum, officia ducimus mollitia in delectus
                voluptatibus, earum odio nesciunt quasi quo eveniet voluptates
                exercitationem magnam! Perferendis, aspernatur ad.
              </StrengthCotentContainer>
            </StrengthContentBox>
          </StrengthItem>
        </ContentSection>
      </MainContentsWrapper>
      <SubSubMenuContainer>
        <Link href='/'>
          <a>
            <SubMenuItem>콜센터 대행</SubMenuItem>
          </a>
        </Link>
        <Link href='/'>
          <a>
            <SubMenuItem>CS, A/S대행</SubMenuItem>
          </a>
        </Link>
        <Link href='/'>
          <a>
            <SubMenuItem>텔레마케팅/설문조사/RSVP</SubMenuItem>
          </a>
        </Link>
        <Link href='/'>
          <a>
            <SubMenuItem>콜센터 구축 컨설팅</SubMenuItem>
          </a>
        </Link>
      </SubSubMenuContainer>
      <MainContentsWrapper>
        <PostersContainer>
          <PosterItem>
            <PosterTopBox>
              <PosterTitle>CS대행</PosterTitle>
              <PosterSubTitle>
                "전문적 퀄리티"의
                <br />
                고객 상담을 원한다면?
              </PosterSubTitle>
            </PosterTopBox>
            <PosterBottomBox>
              <PosterDescription>
                고객의 니즈를 파악하여
                <br />
                전문적인 퀄리티로 응대 진행 후<br />
                정확한 리포팅과 피드백을 드립니다.
              </PosterDescription>
              <PosterImgContainer>이미지</PosterImgContainer>
              <PosterSubDescription>
                24시간 콜센터 대행 / 불만처리 C/S
                <br />
                예약접수 대행 / 주문/배송 조회
                <br />
                발주/주문관리 / 교환/반품 A/S 접수 / 취소/환불 게시판 처리 / 1:1
                채팅 상담
              </PosterSubDescription>
            </PosterBottomBox>
          </PosterItem>
          <PosterItem>
            <PosterTopBox>
              <PosterTitle>CS대행</PosterTitle>
              <PosterSubTitle>
                "전문적 퀄리티"의
                <br />
                고객 상담을 원한다면?
              </PosterSubTitle>
            </PosterTopBox>
            <PosterBottomBox>
              <PosterDescription>
                고객의 니즈를 파악하여
                <br />
                전문적인 퀄리티로 응대 진행 후<br />
                정확한 리포팅과 피드백을 드립니다.
              </PosterDescription>
              <PosterImgContainer>이미지</PosterImgContainer>
              <PosterSubDescription>
                24시간 콜센터 대행 / 불만처리 C/S
                <br />
                예약접수 대행 / 주문/배송 조회
                <br />
                발주/주문관리 / 교환/반품 A/S 접수 / 취소/환불 게시판 처리 / 1:1
                채팅 상담
              </PosterSubDescription>
            </PosterBottomBox>
          </PosterItem>
        </PostersContainer>
      </MainContentsWrapper>
    </ContentLayout>
  );
}
