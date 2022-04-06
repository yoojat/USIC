import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import { media } from 'styles/theme';
import ContentLayout from '../components/ContentLayout';

const KakaoDisplay = styled.div`
  text-align: center;
  margin-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  margin-bottom: 50px;
  max-width: 800px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  line-height: 1.5;
`;

const ProudOfMyselfContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 100px;
`;
const ProudOfMyselfItem = styled.div`
  width: 250px;
  ${media.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const ProudOfMyselfIcon = styled.div`
  ${media.mobile} {
    width: 60px;
  }
`;
const ProudOfMyselfTitle = styled.div`
  font-size: 14px;
  padding-top: 10px;
`;

const KakaoDisplayTitle = styled.h1`
  font-size: 45px;
  font-weight: 600;
  margin-bottom: 80px;
  ${media.mobile} {
    font-size: 32px;
  }
`;
const KakaoDisplayTitle2 = styled.h2`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 100px;
  ${media.mobile} {
    font-size: 26px;
  }
`;
const KakaoDisplayTitle3 = styled.h3`
  font-size: 16px;
  line-height: 1.3;
  margin-bottom: 50px;
`;

const Home: NextPage = () => {
  return (
    <>
      <ContentLayout
        isMain={true}
        headTitles={[
          '고가의 스터디카페 창업 비용이 고민이신가요?',
          '기존에 볼 수 없었던 무인공간통합센터만의 비법을 전수해드립니다.',
        ]}
      ></ContentLayout>
      <KakaoDisplay>
        <ProudOfMyselfContainer>
          <ProudOfMyselfItem>
            <ProudOfMyselfIcon>
              <Image
                src='/best_logo.png'
                alt='고객상담 부문 1위'
                width={100}
                height={100}
                objectFit={'contain'}
              />
              <ProudOfMyselfTitle>고객 상담 부문 1위</ProudOfMyselfTitle>
            </ProudOfMyselfIcon>
          </ProudOfMyselfItem>
          <ProudOfMyselfItem>
            <ProudOfMyselfIcon>
              <Image
                src='/best_logo.png'
                alt='신뢰도 부문 1위'
                width={100}
                height={100}
                objectFit={'contain'}
              />
              <ProudOfMyselfTitle>신뢰도 부문 1위</ProudOfMyselfTitle>
            </ProudOfMyselfIcon>
          </ProudOfMyselfItem>
          <ProudOfMyselfItem>
            <ProudOfMyselfIcon>
              <Image
                src='/best_logo.png'
                alt='만족도 부문 1위'
                width={100}
                height={100}
                objectFit={'contain'}
              />
              <ProudOfMyselfTitle>만족도 부문 1위</ProudOfMyselfTitle>
            </ProudOfMyselfIcon>
          </ProudOfMyselfItem>
        </ProudOfMyselfContainer>
        <KakaoDisplayTitle>
          클라이언트가 말하는 무인공간통합센터
        </KakaoDisplayTitle>
        <KakaoDisplayTitle2>
          좋은 스터디카페 솔루션 업체를 찾는 단 한가지 방법은 리뷰를 보는
          것입니다.
        </KakaoDisplayTitle2>
        <KakaoDisplayTitle3>
          좋은 업체를 찾으실 때 업체에 가서 "여기가 괜찮은 곳인가요?"라고
          물어본다면
          <br />
          모든 업체들이 괜찮은 곳이라고 말할 것입니다.
          <br />
          하지만 그런 방식으로는 좋은 업체를 찾을 수 없습니다.
          <br />
          좋은 업체를 찾으실 때는 후기를 보는게 정석입니다.
        </KakaoDisplayTitle3>

        <Image
          src='/comments.png'
          alt='카카오후기'
          width={800}
          height={1500}
          objectFit='contain'
        />
      </KakaoDisplay>
    </>
  );
};

export default Home;
