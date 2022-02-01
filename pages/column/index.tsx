import { NextPage } from 'next';
import styled from 'styled-components';
import ColumnLayout from '../../components/ColumnLayout';

const Column = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-top: 30px;
  border: 1px solid rgb(215, 215, 215);
`;
const ColumnTitle = styled.div`
  h1 {
    font-size: 28px;
  }
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(215, 215, 215);
`;
const ColumnContent = styled.div`
  font-size: 17px;
  line-height: 28px;
  color: rgb(80, 80, 80);
`;

const Index: NextPage = () => {
  return (
    <ColumnLayout>
      <Column>
        <ColumnTitle>
          <h1>이 글을 먼저 봐 주세요</h1>
        </ColumnTitle>
        <ColumnContent>
          2010년부터 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Corrupti et voluptatum nesciunt error quo beatae, quia ducimus
          mollitia officia vero odio quidem quae sed voluptatem fuga quasi
          recusandae facilis. Laudantium sint, animi cumque harum adipisci esse?
          Ipsum quidem id, blanditiis a quasi provident cum, nam obcaecati quae
          ratione laboriosam ipsa quod perspiciatis iure placeat, quisquam
          expedita aperiam illo in soluta pariatur velit tempore incidunt
          voluptas. Distinctio commodi nesciunt at laborum veniam explicabo
          suscipit, quibusdam voluptas, alias similique recusandae asperiores,
          ratione ab deleniti cupiditate itaque iure deserunt quaerat
          reprehenderit fugit provident nostrum nihil. Cum necessitatibus,
          officia possimus quaerat vitae et voluptates.
        </ColumnContent>
      </Column>
    </ColumnLayout>
  );
};

export default Index;
