
import FullProductLeave from './FullProductLeave';
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
 
  const product = await axios.get(`http://localhost:3333/shop/${id}`).then((res) => res.data);
 
 
  return {
    title: product.title,
  }
}


export default function Page({ params: { id } }: Props) {
  return(
    <FullProductLeave params={{ id: id as string }}/>
  )
}