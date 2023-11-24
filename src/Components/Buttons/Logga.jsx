  /* Logotyp skapad som en återanvändningsbar komponent*/

import React from 'react';

const Logotype = () => {
  return (
    <nav className="navbar navbar-light ">
      <a className="" href="#">
        <img
          src="https://res.cloudinary.com/dmfvjevbr/image/upload/v1696406961/logotype_h5ywpm.png"
          width="150px"
          height="auto"
          alt=""
        />
      </a>
    </nav>
  );
};

export default Logotype;
