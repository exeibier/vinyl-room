import Vinyl from "../components/Vinyl/Vinyl";
import getVinyls from '../api/getVinyls';

export default async function Catalog() {
  const vinyls = await getVinyls();

  return (
    <section className="md:container my-16 lg:my-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {vinyls?.map((vinyl: any, i: number) => (
          <Vinyl
            id={vinyl.id}
            key={i}
            img={vinyl.img ? vinyl.img[0] : '/Mockup_3.jpg'}
            title={vinyl.album}
            artist={vinyl.artist}
            price={vinyl.price}
            tags={vinyl.tags ? vinyl.tags : []}
            discount={vinyl.discount ? true : false}
            priceDiscount={vinyl.priceDiscount} />
        ))}

      </div>
    </section>
  )
}

