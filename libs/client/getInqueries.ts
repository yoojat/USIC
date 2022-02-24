import client from '@libs/server/client';
const UNITS_PER_PAGE = 5;
export default async function (page: number) {
  return await client.request(`
  {
    inqueriesConnection(first:${UNITS_PER_PAGE}, skip:${
    (page - 1) * UNITS_PER_PAGE
  }){
      edges {
        cursor
        node {
          id
          title
          content
          author
          phone
          email
          address
          categories{
            id
            service
          }
          state
          createdAt
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
}
