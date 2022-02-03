import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import HeadSection from '../../components/HeadSection';
import { media } from '../../styles/theme';
import ArrowIcon from './ArrowIcon';
import operators from '../../utils/consts';

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
  margin-top: 100px;
  ${media.tablet} {
    flex-direction: column;
    margin-top: 70px;
  }
  align-items: flex-start;
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

export default function Operators() {
  const [nowOperator, setNowOperator] = useState('송병근');
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
        </MainContentContainer>
      </ContentWrapper>
    </div>
  );
}
