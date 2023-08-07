"use-client";

import { VinylInterface } from '@/app/types/vinyl';
import Image from 'next/image';
import React from 'react'

export default function Vinyl({ img, title, artist, discount, price, tags, priceDiscount }: VinylInterface) {
    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <Image src={img} alt="Vinyl image" width={500} height={200} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base mb-2">{artist}</p>
                {!discount ?
                    <div>
                        <p className="text-gray-700 text-base">$ {price}</p>
                    </div> : <div className='flex'>
                        <p className="flex-initial line-through">$ {price}</p>
                        <p className="flex-initial text-red-600 text-base px-2">$ {priceDiscount}</p>
                    </div>}
            </div>
            <div className="px-6 pt-2 pb-2">
                {tags.map((tag, i) => (
                    <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                ))}
            </div>
        </div>
    )

}

