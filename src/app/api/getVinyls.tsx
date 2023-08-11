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

