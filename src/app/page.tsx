import Catalog from './home/Catalog';
import Header from './home/Header';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between my-16 lg:my-20">
      <Header/>
      <Catalog/>
    </main>
  )
}
