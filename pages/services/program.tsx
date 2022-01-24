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
  padding: 10px;
`;
const TopMiddleTitle = styled.div`
  font-size: 16px;
  padding-bottom: 20px;
`;
const MainImageContainer = styled.div``;
const MainImageItem = styled.div``;

export default function Program() {
  return (
    <div>
      <ContentLayout
        title='제공서비스'
        bannerImgUrl='/banner3.jpg'
        headTitle='제공서비스'
        subMenus={[
          { title: '통합운영관리프로그램', path: '/' },
          { title: '키오스크', path: '/' },
        ]}
      >
        <TopSmallTitle>독서실·스터디카페 사업자를 위한</TopSmallTitle>
        <TopBigTitle>통합운영관리시스템</TopBigTitle>
        <TopMiddleTitle>
          모바일로도 손쉽게 독서실 · 스터디카페를 운영하고 관리하세요!
        </TopMiddleTitle>
        <MainImageContainer>
          <MainImageItem>
            <Image
              src={'/mobile2.jpg'}
              width={900}
              height={530}
              objectFit={'contain'}
            />
          </MainImageItem>
        </MainImageContainer>
        <ContentItem
          title='어디서든 접속 가능'
          subTitle='모바일, 태블릿, PC 어느기기로든 접속해서 관리 및 운영하실 수
            있습니다.'
          imageSrc='/mobile2.jpg'
        />
        <ContentItem
          title='실시간으로 등록정보를 확인하세요!'
          subTitle='회원이 등록한 정보를 바로 모바일에서 확인하실 수 있습니다. 회원의 정보를 통해 상권 파악도 가능합니다.'
          imageSrc='/mobile2.jpg'
        />
        <ContentItem
          title='관리자의 편의성과 자율성을 생각하는 프로그램'
          subTitle='복잡한 관리에서 벗어나 딱 할 것만 하세요! 기본적으로 다 세팅되어 있습니다.'
          imageSrc='/mobile2.jpg'
        />
        <ContentItem
          title='직관적인 프로그램'
          subTitle='보기만해도 어지러움을 느낄 수 있는 관리 프로그램과는 다릅니다. 보기만 해도 바로 이해가 가는 프로그램입니다!'
          imageSrc='/mobile2.jpg'
        />
        <ContentItem
          title='이용자 로그를 통한 확실한 관리'
          subTitle='고객의 클레임에도 확실하게 대처할수 있는 로그 기능을 제공합니다. 결제, 로그인, 입실, 배정, 외출, 퇴실까지 완벽하게 관리하세요.'
          imageSrc='/mobile2.jpg'
        />
      </ContentLayout>
    </div>
  );
}
