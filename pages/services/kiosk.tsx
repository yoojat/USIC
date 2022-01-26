import Image from 'next/image';
import styled from 'styled-components';
import ContentLayout from '../../components/ContentLayout';
import ContentItem from './ContentItem';

const TopSmallTitle = styled.div`
  font-size: 20px;
  font-weight: 800;
  padding: 3px;
`;
const TopBigTitle = styled.div`
  font-size: 30px;
  font-weight: 800;
  padding: 20px;
`;

const MainImageContainer = styled.div``;
const MainImageItem = styled.div``;

export default function Kiosk() {
  return (
    <div>
      <ContentLayout
        title='제공서비스'
        bannerImgUrl='/banner3.jpg'
        headTitle='제공서비스'
        subMenus={[
          { title: '통합운영관리프로그램', path: '/services/program' },
          { title: '키오스크', path: '/services/kiosk' },
        ]}
      >
        <TopSmallTitle>무인공간통합센터</TopSmallTitle>
        <TopBigTitle>키오스크 언제까지 비싸게 사실겁니까?</TopBigTitle>
        <MainImageContainer>
          <MainImageItem>
            <Image
              src={'/kiosk.jpg'}
              width={900}
              height={530}
              objectFit={'contain'}
            />
          </MainImageItem>
        </MainImageContainer>
        <ContentItem
          title='얼마라고 하던가요?'
          subTitle='키오스크는 편리함을 주었지만 가격의 편안함을 주진 않았습니다.'
          imageSrc='/angry.jpg'
        />
        <ContentItem
          title='키오스크, 선택지는 많지만 큰 차이는 없습니다.'
          subTitle=''
          imageSrc='/kiosks.png'
        />
      </ContentLayout>
    </div>
  );
}
