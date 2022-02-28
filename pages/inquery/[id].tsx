import ContentLayout from '@components/ContentLayout';
import client from '@libs/server/client';
import styled from 'styled-components';
import getInquery from '@libs/client/getInquery';
import moment from 'moment';
import showdown from 'showdown';
import { media } from 'styles/theme';

const MainContentsWrapper = styled.div`
  font-weight: 300;
  width: 100%;
  span {
    font-weight: 600;
  }
  margin-bottom: 20px;
  margin-top: 30px;
`;

const PostContainer = styled.div`
  border: 1px solid #dedede;
  padding: 50px;
  margin-bottom: 100px;
  width: 100%;
  box-sizing: border-box;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;
const PostTitle = styled.div`
  border-bottom: 1px solid #dedede;
  padding-bottom: 15px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 28px;
    font-weight: 400;
  }
  ${media.mobile} {
    flex-direction: column;
    align-items: flex-start;
    h1 {
      line-height: 1.2;
      padding-bottom: 15px;
    }
  }
`;

const PostTitleRightSide = styled.div`
  span {
    font-size: 18px;
    font-weight: 300;
  }
`;
const PostDescription = styled.div`
  min-height: 500px;
  font-size: 18px;
  line-height: 1.6;
  p {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

const InqueryDetail = ({ inquery }: any) => {
  const converter = new showdown.Converter();

  return (
    <ContentLayout>
      <MainContentsWrapper>
        <PostContainer>
          <PostTitle>
            <h1>{inquery.inquery.title}</h1>
            <PostTitleRightSide>
              <span style={{ paddingRight: '20px' }}>
                {inquery.inquery.author}
              </span>
              <span>
                {moment(inquery.inquery.writtenTime)
                  .locale('ko')
                  .format('YYYY-MM-DD HH:MM')}
              </span>
            </PostTitleRightSide>
          </PostTitle>
          <PostDescription
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(inquery.inquery.content),
            }}
          ></PostDescription>
        </PostContainer>
      </MainContentsWrapper>
    </ContentLayout>
  );
};

export default InqueryDetail;

export async function getServerSideProps(context: any) {
  // console.log(context.params.id);
  const inquery = await getInquery(context.params.id);
  return {
    props: { inquery },
  };
}
