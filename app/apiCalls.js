async function getDestinations() {
  const res = await fetch('http://localhost:3000/api/destinations', {
    next: { revalidate: 600 },
  });
  // const res = await fetch('http://localhost:3000/api/destinations',
  // {
  //   cache: 'no-store',
  // });
  if (!res.ok) {
    throw new Error('An error ocurred fetching planet destinations');
  }

  return res.json();
}

async function getCrew() {
  const res = await fetch('http://localhost:3000/api/crew', {
    next: { revalidate: 600 },
  });
  // const res = await fetch('http://localhost:3000/api/crew',
  // {
  //   cache: 'no-store',
  // });
  if (!res.ok) {
    throw new Error('An error ocurred fetching planet destinations');
  }

  return res.json();
}

export { getDestinations, getCrew };
