import Image from 'next/image';
import styled from 'styled-components';
import HeadSection from '../../components/HeadSection';
import { media } from '../../styles/theme';

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
  margin-top: 100px;
`;

const OperatorListContainer = styled.div`
  flex: 1;
  margin-right: 4vw;
`;
const OperatorList = styled.div`
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

  span {
    font-size: 24px;
    margin-right: 8px;
  }
`;
const OperatorContent = styled.div`
  flex: 4;
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

export default function Operators() {
  return (
    <div>
      <HeadSection
        title='운영자 소개'
        bannerImgUrl='/banner2.jpg'
        headTitle='운영자 소개'
        subMenus={[
          { title: '무인공간통합센터 소개', path: '/about/usic' },
          { title: '운영자 소개', path: '/about/operators' },
        ]}
      />
      <ContentWrapper>
        <MainContentContainer>
          <OperatorListContainer>
            <OperatorList>
              <span>송병근</span> 운영자
            </OperatorList>
            <OperatorList>
              <span>김진완</span> 운영자
            </OperatorList>
            <OperatorList>
              <span>천홍범</span> 운영자
            </OperatorList>
            <OperatorList>
              <span>김태영</span> 운영자
            </OperatorList>
          </OperatorListContainer>
          <OperatorContent>
            <OperatorTitle>
              <span>송병근</span> 운영자
            </OperatorTitle>
            <OperatorSubtitle>
              생각을 실행으로 행하는 공간창업가
            </OperatorSubtitle>
            <OperatorContext>
              <p>
                수차례 창업을 통해 겪게된 경험들은, 송병근 운영자만의 특별함을
                느낄수 있는 가치가 되었습니다. 20개가 넘는 공간을 성공적으로
                창업하며, 그에 쌓인 노하우는 많은 이들에게 큰 도움이 되었습니다.
              </p>
              <p>
                경험을 통해 쌓인 안목과 직관은, 매번 놓인 문제에 대한 최선의
                해결책을 제시해 줍니다.
              </p>
              <p>
                머릿속 고민과 상상력을 행동으로 실천하는 능력이 탁월합니다.
                또한, 언제나 문제 해결에 초점을 맞춰 본질을 흐트리지 않습니다.
              </p>
            </OperatorContext>
          </OperatorContent>
        </MainContentContainer>
      </ContentWrapper>
    </div>
  );
}
