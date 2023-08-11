import React from 'react';
import Image from 'next/image';
import under_construction_gif from '../gifs/under_construction_1.gif'

function Home() {
  return (
    <div>
      <h1>Under Construction</h1>
      <Image src={under_construction_gif} alt="Loading..." />
    </div>
  );
}

export default Home;
