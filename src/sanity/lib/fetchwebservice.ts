import { client } from "./client";

export const FetchWebService = async () => {
  const query = `*[_type == "webservice"]{
    _id,
    title,
    description,
    image {
      asset->{
        url
      }
    },
    link
  }`;

  return await client.fetch(query);
};
