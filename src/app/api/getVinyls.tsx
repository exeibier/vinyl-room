// const Airtable = require('airtable');
// Airtable.configure({
//   endpointUrl: 'https://api.airtable.com',
//   apiKey: process.env.AIRTABLE_API_KEY,
// });
// import { cache } from 'react'

// export const revalidate = 0;


// const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

// function getRecords(): Promise<any> {
//   const totalRecords: { id: any; artist: any; album: any; price: any; img: any; tags: any; priceDiscount: any; discount: any }[] = [];

//   return new Promise((resolve, rejected) => {
//     base('vinyls').select({
//       view: "Grid view"
//     }).eachPage(function page(records: any, fetchNextPage: any) {
//       records.forEach((record: any) => {
//         const id = record.getId();
//         const artist = record.get("artist");
//         const album = record.get("album");
//         const price = record.get("price");
//         const img = record.get("img");
//         const tags = record.get("tags");
//         const priceDiscount = record.get("price discount");
//         const discount = record.get("discount");

//         const coverImg = img?.map((el: any) => {
//           return el.url
//         })

//         if (!artist || !album || !price) return;

//         totalRecords.push({
//           id,
//           artist,
//           album,
//           price,
//           img: coverImg,
//           tags,
//           priceDiscount,
//           discount,
//         });
//       });

//       fetchNextPage();
//     }, function done(err: any) {
//       if (err) { console.error(err); return rejected(err); }
//       resolve(totalRecords)
//     });
//   })

// }

async function getVinyls(){

  const res = await fetch('https://eo7ch0p2g192lhn.m.pipedream.net', {
    cache:'no-cache',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json();

}

export default getVinyls;

