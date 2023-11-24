import React, { useState } from 'react';
import MultiStepProgressBar from '../Components/MultiStepProgressBar';
import BetalaVy from './BetalaVy';
import BekraftaVy from './BekraftaVy';
import Kvitto from './Kvitto';


function Betala() {
  const [page, setPage] = useState('pageone');


  const nextPage = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="App">
      <MultiStepProgressBar page={page} onPageNumberClick={nextPage} />
      {
        {
          pageone: <BetalaVy onButtonClick={nextPage} />,
          pagetwo: <BekraftaVy onButtonClick={nextPage} />,
          pagethree: <Kvitto />,
        }[page]
      }
    </div>
  );
}

export default Betala;
