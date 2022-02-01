import { gql } from '@apollo/client';
import { client } from '../../apollo';
import ColumnLayout from '../../components/ColumnLayout';

interface IProps {
  data: {
    data: {
      posts: {
        __typename: string;
        id: string;
        title: string;
      }[];
    };
  };
}

const Columns = ({ data }: IProps) => {
  return (
    <ColumnLayout>
      <ul>
        {data &&
          data.data.posts?.map(({ id, title }: any) => (
            <li key={id}>{title}</li>
          ))}
      </ul>
    </ColumnLayout>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API

  const query = gql`
    query {
      posts(first: 7, skip: 0) {
        id
        title
      }
    }
  `;
  const data = await client.query({
    query,
  });

  return { props: { data } };
}

export default Columns;
