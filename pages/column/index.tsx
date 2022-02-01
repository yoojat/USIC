import { NextPage } from 'next';
import styled from 'styled-components';
import ColumnLayout from '../../components/ColumnLayout';
import ContentLayout from '../../components/ContentLayout';

const ContentWrapper = styled.div`
  /* position: absolute; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 400px;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const MenuContainer = styled.div`
  border-bottom: 1px solid rgb(215, 215, 215);
`;
const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const MenuItem = styled.div`
  font-size: 22px;
  color: rgb(110, 110, 110);
  padding: 20px;
  cursor: pointer;
  box-sizing: content-box;
  position: relative;
  transition: all 0.3s;
  &::after {
    content: '';
    position: absolute;
    left: 0px;
    right: 0px;
    height: 3px;
    bottom: -1px;
    transition: all 0.5s ease 0s;
  }
  &:hover {
    color: ${(props) => props.theme.color.aBlue};
    &::after {
      content: '';
      position: absolute;
      left: 0px;
      right: 0px;
      height: 3px;
      bottom: -1px;
      transition: all 0.5s ease 0s;
      background-color: ${(props) => props.theme.color.aBlue};
    }
  }
`;

const ColumnContainer = styled.div``;
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
