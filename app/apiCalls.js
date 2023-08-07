export default async function getDestinations() {
  const res = await fetch("http://localhost:3000/api/destinations");
  if (!res.ok) {
    throw new Error("An error ocurred fetching planet destinations");
  }

  return res.json();
}
