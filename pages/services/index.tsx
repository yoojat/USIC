import { useState } from 'react';
import styled from 'styled-components';
import ContentLayout from '../../components/ContentLayout';
import ServiceItem from '../../components/ServiceItem';
import { media } from '../../styles/theme';

const CONSULTING = 'CONSULTING';
const SOLUTION = 'SOLUTION';

const MainContentsWrapper = styled.div`
  margin-top: 60px;
  font-weight: 300;
  width: 100%;
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

const SubTitle = styled.h2`
  font-size: 16px;
  text-align: center;
`;

const PlanSection = styled.div``;
const PlanWrapper = styled.div``;

const PlanContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function Services() {
  const [nowSubPage, setNowSubPage] = useState(CONSULTING);

  return (
    <ContentLayout
      title='제공서비스'
      bannerImgUrl='/banner2.jpg'
      headTitle='제공서비스'
      subMenus={[
        {
          title: '컨설팅',
          value: CONSULTING,
        },
        {
          title: '솔루션',
          value: SOLUTION,
        },
      ]}
      nowSubPage={nowSubPage}
      setNowSubPage={setNowSubPage}
    >
      <MainContentsWrapper>
        <ServiceDisplay>SERVICE</ServiceDisplay>
        <VerticalLineContainer>
          <VerticalLine />
        </VerticalLineContainer>
        <ContentSection>
          <TopTitle>
            <span>스터디카페 창업,</span> 막막하신가요?
          </TopTitle>
          <SubTitle>맞춤형 스터디카페 전략을 제안해드립니다.</SubTitle>
        </ContentSection>
        <ContentSection>
          <PlanSection>
            <PlanWrapper>
              {nowSubPage === CONSULTING && (
                <PlanContainer>
                  <ServiceItem
                    category={'COUNSULTING'}
                    planTitle={'기초 컨설팅'}
                    planSubtitle={
                      '성공으로 가는 스터디카페, 가이드를 잡아드립니다.'
                    }
                    contents={[
                      {
                        title: '대상',
                        descriptions: [
                          '- 개인 스터디카페를 창업에 관심이 있는 분',
                          '- 스터디카페 창업 절차에 대해서 기초부터 알고 싶으신 분',
                        ],
                      },
                      {
                        title: '가이드 라인 제공',
                        descriptions: [
                          '스터디카페 창업 과정의 전반적인 흐름과 이해를 돕는 "기초 가이드라인" 제공',
                        ],
                      },
                      {
                        title: '비대면 컨설팅',
                        descriptions: [
                          '1대1 컨설팅 담당자와의 zoom을 통한 화상 통화',
                        ],
                      },
                      {
                        title: '컨설팅 시간',
                        descriptions: ['30분 간 진행'],
                      },
                      {
                        title: '컨설팅 PDF자료 제공',
                        descriptions: ['메모할 필요없는 가이드라인 pdf 제공'],
                      },
                    ]}
                  />
                  <ServiceItem
                    themeColor='#8661de'
                    category={'COUNSULTING'}
                    planTitle={'Q&A 컨설팅'}
                    planSubtitle={'성공에 가까워지고 싶나요?'}
                    contents={[
                      {
                        title: '대상',
                        descriptions: [
                          '- 개인 스터디카페 창업의 준비가 원할하지 않는 분',
                          '현재 스터디카페를 운영하고 있는데 고충을 겪는 분',
                        ],
                      },
                      {
                        title: 'Q&A 접수',
                        descriptions: [
                          '스터디카페 창업, 독서실 창업, 매장 운영, 고객 응대 관련해서 최대 3개 질문 접수',
                        ],
                      },
                      {
                        title: '질문 답변',
                        descriptions: [
                          'E-Mail을 통한 비대면 질의응답 지원',
                          '질문에 대한 답변 & 솔루션 PDF 제공',
                        ],
                      },
                    ]}
                  />
                </PlanContainer>
              )}

              {nowSubPage === SOLUTION && (
                <PlanContainer>
                  <ServiceItem
                    category={'SOLUTION'}
                    planTitle={'시스템'}
                    planSubtitle={'스터디카페 효율의 극치를 보여드립니다.'}
                    contents={[
                      {
                        title: '대상',
                        descriptions: [
                          '키오스크에 대해서 더 이상 고민하고 싶지 않으신 분',
                          '키오스크 잘 골랐다 소리 듣고 싶으신 분',
                          '합리적인 키오스크를 찾고 계신 분',
                        ],
                      },
                      {
                        title: '합리적 키오스크',
                        descriptions: [
                          '비싼 비용의 키오스크를 아직도 사용하고 계신가요?',
                        ],
                      },
                      {
                        title: '온라인 결제 플랫폼 제공',
                        descriptions: [
                          '키오스크를 통한 결제는 물론! 모바일, PC로도 결제가 가능한 스터디카페가 됩니다.',
                        ],
                      },
                      {
                        title: '모바일 운영',
                        descriptions: [
                          '모든 관리 및 운영은 모바일로 가능합니다.',
                        ],
                      },
                      {
                        title: '무인 운영',
                        descriptions: [
                          '회원이 스스로 결제, 좌석 배정까지 원활하게 할 수 있도록 설계되었습니다.',
                        ],
                      },

                      {
                        title: '출입문',
                        descriptions: [
                          '회원 관리 시스템을 통해 출입문이 제어됩니다.',
                        ],
                      },
                    ]}
                  />
                  <ServiceItem
                    themeColor='#8661de'
                    category={'SOLUTION'}
                    planTitle={'응대 대행'}
                    planSubtitle={'고객이 늘어나는 응대가 중요합니다.'}
                    contents={[
                      {
                        title: '대상',
                        descriptions: [
                          '고객 응대를 직접하실 수 없는 상황에 계신 분',
                        ],
                      },
                      {
                        title: '멀티 채널 지원 제공',
                        descriptions: [
                          '웹, 전화, 문자 및 SNS를 통한 응대를 지원합니다.',
                        ],
                      },
                      {
                        title: '시간 및 비용 절약',
                        descriptions: [
                          '고객 응대에 소모되는 시간을 줄여, 스터디카페 성공을 가속화 하세요.',
                        ],
                      },
                      {
                        title: '업무 생산성 향상',
                        descriptions: [
                          '고객 문의 건수가 반이상 줄어듭니다.',
                          '클레임에 대한 스트레스를 줄이고 업무 효율을 높이세요.',
                        ],
                      },
                      {
                        title: '고객 만족도 향상',
                        descriptions: [
                          '고객의 불만사항을 최저로 낮추고, 고객만족도는 최고로 높여 드립니다.',
                        ],
                      },
                    ]}
                  />
                  <ServiceItem
                    themeColor='#6262F5'
                    category={'SOLUTION'}
                    planTitle={'브랜딩'}
                    planSubtitle={'고객의 마음까지 사로잡으세요.'}
                    contents={[
                      {
                        title: '대상',
                        descriptions: [
                          '스터디카페를 나타낼 수 있는 상표, 표지 등이 필요하신 분',
                        ],
                      },
                      {
                        title: '시장 조사 및 분석',
                        descriptions: [
                          '스터디카페 시장에서 경쟁업체 대비하여 경쟁력을 나타낼 수 있는 부분을 파악합니다.',
                        ],
                      },
                      {
                        title: '브랜드 진단',
                        descriptions: [
                          '현 상태를 진단하여 정체성을 확인합니다.',
                        ],
                      },
                      {
                        title: '전략 수립',
                        descriptions: [
                          '파악한 정보와 자료를 기반으로 브랜드 컨셉을 도출합니다.',
                          '시안 중에 선택하여 진행합니다.',
                        ],
                      },
                      {
                        title: '브랜드 컨셉 정립',
                        descriptions: [
                          '스토리텔링, 이미지, 성격을 정립하여 소비자에게 가치를 알릴 수 있도록 합니다.',
                        ],
                      },

                      {
                        title: '커뮤니케이션 솔루션',
                        descriptions: [
                          '지속적으로 소비자와 소통할 수 있도록 가이드를 해드립니다.',
                        ],
                      },
                    ]}
                  />
                  <ServiceItem
                    themeColor='#07b495'
                    category={'SOLUTION'}
                    planTitle={'인테리어'}
                    planSubtitle={'스터디카페의 경쟁력은 인테리어 입니다.'}
                    contents={[
                      {
                        title: '대상',
                        descriptions: [
                          '스터디카페에 맞는 인테리어를 진행하고 싶으신 분',
                        ],
                      },
                      {
                        title: '차별하여 경쟁력 강화',
                        descriptions: [
                          '일반적인 인테리어 공사와 차별점을 두어 고객의 만족도를 올릴 수 있습니다.',
                        ],
                      },
                      {
                        title: '학습에 맞는 조명과 벽지 인테리어',
                        descriptions: [
                          '같은 공간이어도 색, 느낌에 따라 학습자의 집중도가 달라집니다.',
                        ],
                      },
                      {
                        title: '돈 버는 인테리어',
                        descriptions: [
                          '냉난방 기구, 가구 등의 적절한 배치를 통해 경제적인 효과를 올립니다.',
                        ],
                      },
                      {
                        title: '편의성이 올라가는 인테리어',
                        descriptions: [
                          '이용자들의 편리함을 결정하는 인테리어를 진행합니다.',
                        ],
                      },
                    ]}
                  />
                  <ServiceItem
                    themeColor='#99ecdd'
                    category={'SOLUTION'}
                    planTitle={'마케팅'}
                    planSubtitle={'마케팅이 성공의 시작입니다.'}
                    contents={[
                      {
                        title: '대상',
                        descriptions: ['홍보, 마케팅이 필요하신 분'],
                      },
                      {
                        title: '타겟에 맞는 광고 집행합니다.',
                        descriptions: [
                          '다양한 매체를 통하여 고객 맞춤 광고를 전달합니다.',
                        ],
                      },
                      {
                        title: '답답한 마케팅은 가라.',
                        descriptions: [
                          '마케팅에 대해서 몰라서 답답했던 적 있죠? 이해합니다.',
                          '알아서 마케팅을 진행해드립니다.',
                        ],
                      },
                      {
                        title: '비용대비 수익 증가',
                        descriptions: [
                          '마케팅에 소요되는 비용을 아까워하지 마세요.',
                          '더 큰 수익을 안겨드립니다.',
                        ],
                      },
                    ]}
                  />
                </PlanContainer>
              )}
            </PlanWrapper>
          </PlanSection>
        </ContentSection>
      </MainContentsWrapper>
    </ContentLayout>
  );
}
