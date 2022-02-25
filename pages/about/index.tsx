import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import ArrowIcon from '../../components/ArrowIcon';
import HeadSection from '../../components/HeadSection';
import { media } from '../../styles/theme';
import operators from '../../utils/consts';

const COMPANY = 'COMPANY';
const OPERATORS = 'OPERATORS';

const ContentWrapper = styled.div`
  /* position: absolute; */
  padding-top: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 500px;
`;

const MainContentContainer = styled.div`
  padding: 30px;
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 100px;
`;

const OperatorMainContentContaner = styled(MainContentContainer)`
  ${media.tablet} {
    flex-direction: column;
  }
  flex-direction: row;
`;

const PhotoContainer = styled.div`
  ${media.tablet} {
    display: none;
  }
  text-align: center;
  margin-bottom: 100px;
  margin-right: 30px;
  min-width: 400px;
`;
const TextContainer = styled.div`
  h2 {
    font-size: 28px;
    margin-bottom: 60px;
  }
  p {
    font-size: 17px;
    line-height: 1.55;
    font-weight: 400;
    padding-top: 10px;
    padding-bottom: 80px;
    color: rgb(80, 80, 80);
  }
  padding-bottom: 30px;
  ${media.mobile} {
    margin-top: 30px;
  }
`;

const Divder = styled.div`
  border-bottom: 1px solid gray;
  padding-top: 50px;
  margin-bottom: 50px;
`;

const OperatorListContainer = styled.div`
  flex: 1;
  margin-right: 4vw;
  ${media.tablet} {
    margin-right: inherit;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
const OperatorList = styled.div<{ isNowOperator: boolean }>`
  text-align: center;
  width: 240px;
  padding: 30px 10px;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.aBlue};
    color: white;
  }
  border: 1px solid rgb(225, 225, 225);

  background-color: ${(props) =>
    props.isNowOperator ? props.theme.color.aBlue : 'inherit'};
  color: ${(props) => (props.isNowOperator ? 'white' : 'inherit')};
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 10px;
  }
  ${media.tablet} {
    display: inline-block;
    width: inherit;
    padding: 10px 10px;
    font-size: 12px;
    background-color: ${(props) =>
      props.isNowOperator ? props.theme.color.aBlue : '#d7d7d7'};
    color: ${(props) => (props.isNowOperator ? 'white' : 'inherit')};
    svg {
      display: none;
    }
  }

  span {
    font-size: 24px;
    margin-right: 8px;
    ${media.tablet} {
      font-size: 12px;
    }
  }
`;
const OperatorContent = styled.div`
  flex: 4;
  ${media.tablet} {
    flex: inherit;
    margin-top: 30px;
  }
`;

const OperatorTitle = styled.h2`
  font-size: 20px;
  color: rgb(107, 107, 107);
  font-weight: 400;
  span {
    font-size: 28px;
    color: rgb(34, 34, 34);
  }
`;
const OperatorSubtitle = styled.div`
  color: ${(props) => props.theme.color.aBlue};
  font-size: 20px;
  margin-top: 12px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.color.aBlue};
  font-weight: 400;
  line-height: 1.4;
`;

const OperatorContext = styled.div`
  color: rgb(80, 80, 80);
  font-size: 17px;
  font-weight: 300;
  line-height: 30px;
  margin-top: 28px;
  margin-bottom: 60px;
  p {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export default function Usic() {
  const [nowSubPage, setNowSubPage] = useState(COMPANY);
  const [nowOperator, setNowOperator] = useState('송병근');
  return (
    <div>
      <HeadSection
        title='소개 | 무인공간통합센터'
        bannerImgUrl='/banner2.jpg'
        headTitle='무인공간통합센터 소개'
        subMenus={[
          { title: '무인공간통합센터 소개', value: COMPANY },
          { title: '운영자 소개', value: OPERATORS },
        ]}
        nowSubPage={nowSubPage}
        setNowSubPage={setNowSubPage}
      />
      {nowSubPage === COMPANY && (
        <ContentWrapper>
          <MainContentContainer>
            <PhotoContainer>
              <Image
                src='/professional.jpg'
                objectFit='contain'
                width='500'
                height='300'
              />
            </PhotoContainer>
            <TextContainer>
              <h2>무인공간통합센터 소개</h2>
              <p>
                2017년 3월 15일. 6개월간의 노력으로 첫번째 공간을
                완성시켰습니다. 머릿속 가득한 생각들을 현실 공간으로 바뀐
                순간이었습니다.
              </p>
              <p>
                보증금 3천만원을 포함한 총 5천만원. 그리고 매장에서 벌어들인
                수익만으로, 하나 둘 학습공간을 확장해 나가게 되었습니다.
              </p>
              <p>
                그리고 어느덧 5년의 시간이 흘러갔습니다. 변화하는 학습공간의
                트렌드 속에서, 20대 꿈많던 청년들이, 이제는 30대 중반의 사회인이
                되었습니다.
              </p>
              <Divder />
              <p>안녕하세요. 무인공간통합센터 운영자 송병근 입니다.</p>
              <p>
                20대 시절, 열정 만큼은 누구에게도 뒤쳐지기 싫어, 다양한 창업을
                시도해 나갔습니다. 그리고 제가 할 수 있는 일들이 하나둘 생겨나기
                시작했습니다.
              </p>
              <p>
                학습공간의 트렌드는 정말 빠르게 진화해 갑니다. 거듭 변화하는
                트렌드 속에서도, 살아남을 수 있는 새로운 방향을 모색하며,
                학습공간을 운영해 나가며, 컨설팅을 함께 진행해 왔습니다. 특히,
                인건비 상승으로 인해, 무인 시스템이 빠르게 발전하였으며, 코로나
                시대의 빈점포들은, 이러한 무인 시스템을 통한 무인공간으로 빠르게
                탈바꿈하였습니다.
              </p>
              <p>
                그런데 여전히 많은 학습공간 컨설턴트들은 경험보다는 영업을 위해,
                (예비)운영자들에게 도움을 주는 척 합니다. 자신의 이해관계를
                버린듯 하지만, 결국 영업의 일환이었습니다. 저는 많은 분들의
                경험과 고민을 들여다보면서, 부디 알려주고 싶었던 부분들이
                생겼습니다.
              </p>
              <p>
                (예비)운영자의 입장이되어, 현실성있는 창업, 운영, 관리를 상담해
                줄 필요가 있다고 생각했습니다. 투자금액은 얼마나 적당할까, 항상
                잘될 것이라는 착각이 얼마나 무서운지, 전문 개발자의 관점에서의
                무인시스템의 허와 실, 공간관리의 최적화된 방향은 무엇인지, 창업
                실패의 리스크를 어떻게 대처하면 좋을지, 지속적으로 변화하는
                트렌드 속에서, 어떠한 방향으로 나아갈지 등의 현실적인 가이드
                라인들 제공하고 싶었습니다.
              </p>
              <p>
                세상은 너무 빠르게 급변화해 가고있습니다. 예비운영자와 운영자들
                모두가 배움이 필요하고, 함께 공유해 나가야 합니다.
              </p>
              <p>
                항상 말씀 드리지만, 무인공간통합센터에서 상담을 받을 필요는
                없습니다. 처음 무인공간통합센터를 알게 되었는데, 곧바로 상담을
                원하신다면, 저는 말리고 싶습니다.
              </p>
              <p>
                실제로, 아무 글도 읽지 않고 문의 메일을 주신 분은 상담을
                거부합니다. 많은 글을 읽으며 본인이 스스로 크게 변화될 것입니다.
                또한, 스터디카페와 독서실 뿐만이 아닌, 다른 창업도 자신감있게
                도전할 수 있을것입니다.
              </p>
              <p>
                무인공간통합센터의 블로그에는 좋은 칼럼들이 있습니다. 이것을
                통해 '성공하는 스터디카페 및 독서실 창업, 운영, 관리 방법'에
                대한 힌트를 얻어가셨으면 좋겠습니다.
              </p>
              <p>긴 글 읽어주셔서 감사합니다.</p>
            </TextContainer>
          </MainContentContainer>
        </ContentWrapper>
      )}
      {nowSubPage === OPERATORS && (
        <ContentWrapper>
          <OperatorMainContentContaner>
            <OperatorListContainer>
              <OperatorList
                isNowOperator={nowOperator === '송병근'}
                onClick={() => setNowOperator('송병근')}
              >
                <ArrowIcon
                  color={nowOperator === '송병근' ? '#fff' : '#00acc7'}
                />
                <span>송병근</span> 운영자
              </OperatorList>
              <OperatorList
                isNowOperator={nowOperator === '김진완'}
                onClick={() => setNowOperator('김진완')}
              >
                <ArrowIcon
                  color={nowOperator === '김진완' ? '#fff' : '#00acc7'}
                />
                <span>김진완</span> 운영자
              </OperatorList>
              <OperatorList
                isNowOperator={nowOperator === '천홍범'}
                onClick={() => setNowOperator('천홍범')}
              >
                <ArrowIcon
                  color={nowOperator === '천홍범' ? '#fff' : '#00acc7'}
                />
                <span>천홍범</span> 운영자
              </OperatorList>
              <OperatorList
                isNowOperator={nowOperator === '김태영'}
                onClick={() => setNowOperator('김태영')}
              >
                <ArrowIcon
                  color={nowOperator === '김태영' ? '#fff' : '#00acc7'}
                />
                <span>김태영</span> 운영자
              </OperatorList>
            </OperatorListContainer>
            <OperatorContent>
              <OperatorTitle>
                <span>{operators.get(nowOperator).name}</span> 운영자
              </OperatorTitle>
              <OperatorSubtitle>
                {operators.get(nowOperator).subtitle}
              </OperatorSubtitle>
              <OperatorContext
                dangerouslySetInnerHTML={{
                  __html: operators.get(nowOperator).context,
                }}
              ></OperatorContext>
            </OperatorContent>
          </OperatorMainContentContaner>
        </ContentWrapper>
      )}
    </div>
  );
}
