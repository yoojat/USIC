import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import ContentLayout from '../components/ContentLayout';

const KakaoDisplay = styled.div`
  text-align: center;
  margin-top: 50px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 50px;
`;

const KakaoDisplayTitle = styled.h1`
  font-size: 45px;
  font-weight: 600;
  margin-bottom: 40px;
`;
const KakaoDisplayTitle2 = styled.h2`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 20px;
`;
const KakaoDisplayTitle3 = styled.h3`
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 30px;
`;

const Home: NextPage = () => {
  return (
    <>
      <ContentLayout
        isMain={true}
        headTitle={`이제 스터디카페, 독서실의 거품이 빠질 때가 되었습니다.`}
      ></ContentLayout>
      <KakaoDisplay>
        <KakaoDisplayTitle>
          클라이언트가 말하는 무인공간통합센터
        </KakaoDisplayTitle>
        <KakaoDisplayTitle2>
          좋은 스터디카페 솔루션 업체를 찾는 단 한가지 방법은 리뷰를 보는
          것입니다.
        </KakaoDisplayTitle2>
        <KakaoDisplayTitle3>
          좋은 업체를 찾으실 때 업체에 가서 "여기가 괜찮은 곳인가요?"라고
          물어본다면 모든 업체들이 괜찮은 곳이라고 말할 것입니다.
          <br />
          하지만 그런 방식으로는 좋은 업체를 찾을 수 없습니다.
          <br />
          좋은 업체를 찾으실 때는 후기를 보는게 정석입니다.
        </KakaoDisplayTitle3>

        <Image src='/comments.png' alt='카카오후기' width={800} height={800} />
      </KakaoDisplay>
    </>
  );
};

export default Home;
