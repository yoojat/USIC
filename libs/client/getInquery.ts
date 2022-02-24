import client from '@libs/server/client';
export default async function (id: string) {
  console.log({ id });
  return await client.request(`
  {
    inquery(where:{
      id:"${id}"
    }){
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
  `);
}
