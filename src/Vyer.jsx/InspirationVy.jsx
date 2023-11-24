import React from 'react';
import {Image, Container} from 'react-bootstrap';
import Artiklar from '../Artiklar'
import ResTips from '../Components/ResTips'
import Socialamedier from '../Components/Socialamedier'
const InspirationVy = () => (
  <div>
       <div className="d-flex justify-content-center">
        <Image className=""
          style={{ 
            width: '100%',
            margin: '-0.5rem',
      

         }}
          src="https://img.freepik.com/premium-photo/woman-beach-summer_64030-9.jpg?w=1800"
          fluid
        />
        
      </div>
      <h1 className="text-center p-3 fs-1 " style={{ 
      marginTop: '-3.1rem',
      position:'relative', 
      backgroundColor:'#FFFFFF',
      borderRadius:'60px',
      height:'7rem',
      color:'#0E4778',
      }} >Inspireras</h1>
      <div>
      <Artiklar/>
      <div className="m-2">
      <ResTips/>
      </div>
      <Socialamedier/>
      </div>
  </div>
);

export default InspirationVy;
