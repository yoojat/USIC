import { gql } from '@apollo/client';
import Link from 'next/link';
import styled from 'styled-components';
import { client } from '../../apollo';
import ColumnLayout from '../../components/ColumnLayout';
import { getFormatDate } from '../../utils/getFormatDate';

const maxColumnsPerPage = 7;

interface IProps {
  posts: {
    __typename: string;
    node: {
      id: string;
      title: string;
      summary: string;
      createdAt: string;
    };
  }[];
  postsConnection: any;
  pageInfo: any;
}

const ColumBoxesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
const ColumnBox = styled.div`
  padding: 50px;
  background-color: white;
  border: 1px solid rgb(215, 215, 215);
  margin-bottom: 35px;
  &:hover {
    border-color: ${(props) => props.theme.color.aBlue};
  }
  cursor: pointer;
  transition: all 0.3s;
`;
const ColumnTitle = styled.div`
  font-size: 20px;
  line-height: 1;
  font-weight: normal;
  padding-bottom: 25px;
  border-bottom: 1px solid rgb(215, 215, 215);
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const TextTitle = styled.div`
  font-weight: normal;
`;
const DateTitle = styled.div`
  font-weight: 300;
`;

const ColumnContentSummary = styled.div`
  line-height: 30px;
  font-size: 17px;
`;

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    font-size: 14px;
    font-weight: 300;
    color: rgb(110, 110, 110);
    li {
      padding: 1rem;
    }
  }
`;

const Columns = ({ posts, postsConnection, pageInfo }: IProps) => {
  const pageCounts = Math.ceil(
    postsConnection.aggregate.count / maxColumnsPerPage
  );

  return (
    <ColumnLayout>
      <ColumBoxesContainer>
        <ul>
          {posts &&
            posts?.map(({ node: { id, title, createdAt, summary } }) => (
              <li key={id}>
                <ColumnBox>
                  <ColumnTitle>
                    <TextTitle>{title}</TextTitle>
                    <DateTitle>{getFormatDate(new Date(createdAt))}</DateTitle>
                  </ColumnTitle>
                  <ColumnContentSummary>{summary}...</ColumnContentSummary>
                </ColumnBox>
              </li>
            ))}
        </ul>
      </ColumBoxesContainer>
      <PageContainer>
        <ul>
          {[...Array(pageCounts)].map((_, index) => (
            <li>
              <Link
                href={{
                  pathname: `/columns`,
                  query: {
                    page: index + 1,
                  },
                }}
                as='/columns'
              >
                <a>{index + 1}</a>
              </Link>
            </li>
          ))}
        </ul>
      </PageContainer>
    </ColumnLayout>
  );
};

export async function getServerSideProps({ query: { page } }: any) {
  const query = gql`
    query {
      posts: postsConnection(first: ${maxColumnsPerPage} skip:${
    maxColumnsPerPage * (Number(page) - 1)
  }) {
        edges {
          node {
            id
            title
            summary
            createdAt
          }
        }
        pageInfo {
          hasNextPage
          startCursor
          endCursor
        }
      }
      postsConnection {
        aggregate {
          count
        }
      }
    }
  `;
  const data = await client.query({
    query,
  });

  return {
    props: {
      posts: data.data.posts.edges,
      pageInfo: data.data.posts.pageInfo,
      postsConnection: data.data.postsConnection,
    },
  };
}

export default Columns;
