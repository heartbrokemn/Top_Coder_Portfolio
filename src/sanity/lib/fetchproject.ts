
import { client } from './client'

export  const FetchProject = async () => {
  const qurey = `*[_type == "project"]{
  _id,
  title,
  description,
  technologies,
  github,
  live,
  image {
    asset->{
      url
    }
  }
}`

  return  await client.fetch(qurey)
}

