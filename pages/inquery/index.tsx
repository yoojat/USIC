import ContentLayout from '@components/ContentLayout';
import getInqueries from '@libs/client/getInqueries';
import pageMaker from '@libs/client/pageMaker';
import client from '@libs/server/client';
import moment from 'moment';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { media } from 'styles/theme';

const UNITS_PER_PAGE = 5;

const MainContentsWrapper = styled.div`
  font-weight: 300;
  width: 100%;
  span {
    font-weight: 600;
  }
  margin-bottom: 20px;
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

const ListSection = styled.section`
  padding-left: 5%;
  padding-right: 5%;
`;

const ListContainer = styled.div``;
const ListItem = styled.div`
  background-color: #eeeeee;
  &:hover {
    background-color: ${(props) => props.theme.color.mainBlue};
    color: white;
    div {
      color: white;
    }
  }
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dedede;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 30px;
  padding-right: 30px;
  align-items: center;
`;
const ListDescription = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const ListTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-right: 10px;
`;
const ListContent = styled.div`
  font-size: 16px;
  color: #666;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
`;

const ListState = styled.div<{ state: string }>`
  background-color: ${(props) =>
    props.state === 'WAITING'
      ? props.theme.color.aBlue
      : props.state === 'PROCESSING'
      ? props.theme.color.secondBlue
      : props.state === 'COMPLETED'
      ? props.theme.color.thirdBlue
      : 'inherit'};
  padding: 10px 20px;
  color: white;
  border-radius: 15px;
  font-weight: 600;
`;

const ListLeftSideContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListRightSideContent = styled.div`
  display: flex;
  margin-right: 30px;
  justify-content: center;
  align-items: center;
  ${media.mobile} {
    display: none;
  }
`;
const ListContentAuthor = styled.div`
  padding-right: 10px;
`;
const ListContentDatetime = styled.div``;

const PageSection = styled.div``;

const PageContainer = styled.div`
  display: flex;
  font-size: 17px;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const PageItem = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.color.mainBlue};
  }
  font-weight: 300;
`;

const Inquery = ({ inqueries }: any) => {
  const [nowInqueries, setNowInqueries] = useState(inqueries);
  const onPageClick = async (page: number) => {
    const inqueries = await getInqueries(page);
    setNowInqueries(inqueries);
  };
  return (
    <ContentLayout
      title='이용 후기'
      bannerImgUrl='/banner3.jpg'
      headTitle='이용 후기'
    >
      <MainContentsWrapper>
        <ServiceDisplay>이용 후기</ServiceDisplay>
        <VerticalLineContainer>
          <VerticalLine />
        </VerticalLineContainer>
        <ContentSection>
          <TopTitle>
            <span>
              많은 분들이 만족해왔습니다.<div className=''></div>
            </span>
          </TopTitle>
          <SubTitle>실제로 많은 분들이 후기를 남겨주셨습니다.</SubTitle>
        </ContentSection>
        <ListSection>
          <ListContainer>
            {nowInqueries.inqueriesConnection.edges.map((inquery: any) => (
              <Link key={inquery.node.id} href={`/inquery/${inquery.node.id}`}>
                <ListItem>
                  <ListDescription>
                    <ListLeftSideContent>
                      <ListTitle>{inquery.node.title}</ListTitle>
                    </ListLeftSideContent>

                    <ListContent>
                      <ListRightSideContent>
                        <ListContentAuthor>
                          {inquery.node.author}
                        </ListContentAuthor>
                        <ListContentDatetime>
                          {moment(inquery.node.createdAt)
                            .locale('ko')
                            .format('YYYY-MM-DD HH:MM')}
                        </ListContentDatetime>
                      </ListRightSideContent>
                    </ListContent>
                  </ListDescription>
                  <svg
                    width='24'
                    height='24'
                    xmlns='http://www.w3.org/2000/svg'
                    fillRule='evenodd'
                    clipRule='evenodd'
                  >
                    <path d='M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z' />
                  </svg>
                </ListItem>
              </Link>
            ))}
          </ListContainer>
        </ListSection>

        <PageSection>
          <PageContainer>
            {pageMaker(
              inqueries.inqueriesConnection.aggregate.count,
              UNITS_PER_PAGE
            ).map((page, index) => (
              <PageItem key={index} onClick={() => onPageClick(page)}>
                {page}
              </PageItem>
            ))}
          </PageContainer>
        </PageSection>
      </MainContentsWrapper>
    </ContentLayout>
  );
};

export default Inquery;

export async function getStaticProps() {
  const inqueries = await client.request(`
  {
    inqueriesConnection(first:${UNITS_PER_PAGE}){
      edges {
        cursor
        node {
          id
          title
          author
          state
          updatedAt
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
        pageSize
      }
      aggregate{
        count
      }
    }
  }
  `);

  return {
    props: {
      inqueries,
    },
  };
}
