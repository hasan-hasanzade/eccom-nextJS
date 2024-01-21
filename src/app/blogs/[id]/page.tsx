
import FullBlogLeave from './FullBlogLeave';
import { Metadata, ResolvingMetadata } from 'next'
import axios from 'axios';

 
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id
 
  const product = await axios.get(`https://server-tisf.onrender.com/blogs/${id}`).then((res) => res.data);

 
  return {
    title: product.title,
  }
}


export default function Page({ params: { id } }: Props) {
  return(
    <FullBlogLeave params={{ id: id as string }}/>
  )
}