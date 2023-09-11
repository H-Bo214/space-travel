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
    next: { revalidate: 10 },
  });
  // const res = await fetch('http://localhost:3000/api/crew',
  // {
  //   cache: 'no-store',
  // });
  if (!res.ok) {
    throw new Error('An error ocurred fetching crew details');
  }

  return res.json();
}

async function getTechnologies() {
  const res = await fetch('http://localhost:3000/api/technology', {
    next: { revalidate: 10 },
  });
  // const res = await fetch('http://localhost:3000/api/technology',
  // {
  //   cache: 'no-store',
  // });
  if (!res.ok) {
    throw new Error('An error ocurred fetching technology details');
  }

  return res.json();
}

export { getDestinations, getCrew, getTechnologies };
