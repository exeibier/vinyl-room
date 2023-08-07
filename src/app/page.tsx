import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Catalog from './home/Catalog';
import Header from './home/Header';
import { Vinyl } from './types/vinyl';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between my-16 lg:my-20">
      <Header/>
      <Catalog/>
    </main>
  )
}




