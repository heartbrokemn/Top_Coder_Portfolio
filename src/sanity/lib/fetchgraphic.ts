import { client } from "./client";

export const FetchGraphicService = async () => {
  const query = `*[_type == "graphic"]{
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
