import { NextResponse } from 'next/server';

export async function GET(request) {
  //Handle GET request for /api/crew
  //Retrieve crew from the database or any data source
  // route http://localhost:3000/api/crew
  const crew = [
    {
      name: 'Douglas Hurley',
      images: {
        png: '/images/crew/image-douglas-hurley.png',
        webp: '/images/crew/image-douglas-hurley.webp',
        width:446,
        height: 559,
      },
      role: 'Commander',
      bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    },
    {
      name: 'Mark Shuttleworth',
      images: {
        png: '/images/crew/image-mark-shuttleworth.png',
        webp: '/images/crew/image-mark-shuttleworth.webp',
        width:416,
        height: 600,
      },
      role: 'Mission Specialist',
      bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    },
    {
      name: 'Victor Glover',
      images: {
        png: '/images/crew/image-victor-glover.png',
        webp: '/images/crew/image-victor-glover.webp',
        width:451,
        height: 554,
      },
      role: 'Pilot',
      bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    },
    {
      name: 'Anousheh Ansari',
      images: {
        png: '/images/crew/image-anousheh-ansari.png',
        webp: '/images/crew/image-anousheh-ansari.webp',
        width:503,
        height: 496,
      },
      role: 'Flight Engineer',
      bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    },
  ];

  return NextResponse.json(crew);
}
