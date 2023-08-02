import Vinyl from "@/app/components/Vinyl/Vinyl";

export default function Catalog() {
    return (
        <section className="md:container my-16 lg:my-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Vinyl 
                    img={'Mockup_3.jpg'}
                    title={'Call Me If You Get Lost'} 
                    artist={'Tyler, The Creator'} 
                    price={'850'} 
                    tags={["2LP's", '180 gr', 'Gatefold', 'Poster']} 
                    discount={true}
                    discountPrice="530"/>
            </div>
        </section>
    )
}
