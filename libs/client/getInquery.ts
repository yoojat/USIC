import client from '@libs/server/client';
export default async function (id: string) {
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
      writtenTime
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
