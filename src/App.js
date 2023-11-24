import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './style.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HotelPuff from './HotelPuff';
import LoginPopup from './Components/LoginPopup';
import CookieBanner from './Components/CookieBanner';
import OmOssVy from './Vyer.jsx/OmOssVy';
import InspirationVy from './Vyer.jsx/InspirationVy';
import SearchVy from './Vyer.jsx/SearchVy';
import HotelCard from './Components/HotelCard';
import TavernaGusto from './Components/TavernaGusto';
import Sorry from './Components/Sorry'
import Hotels from './Components/Hotels';
import StartBetalaVy from './Vyer.jsx/StartBetalaVy';

function App() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  // Funktion för att visa eller dölja inloggningspopupen
  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  // Funktion för att stänga inloggningspopupen
  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };


  return (
    <div className="App">
      <CookieBanner />
      <Header onLoginButtonClick={toggleLoginPopup} />
      {showLoginPopup && <LoginPopup />}
      <Switch>
        <Route path="/HotelPuff/:category/:searchPhrase?"component={HotelPuff}></Route>
        <Route path="/HotelCard/:hotelID/" component={HotelCard}></Route>
        <Route path="/TavernaGusto/" component={TavernaGusto}></Route>
        <Route path="/Hotels/" component={Hotels}></Route>
        <Route path="/StartBetalaVy/" component={StartBetalaVy}></Route>
        <Route path="/Vyer/OmOssVy" component={OmOssVy}></Route>
        <Route path="/Components/Sorry" component={Sorry}></Route>
        <Route path="/Vyer/SearchVy" component={SearchVy}></Route>
        <Route path="/Vyer/InspirationVy" component={InspirationVy}></Route>
        <Redirect to="/Vyer/SearchVy"></Redirect>
      </Switch>
      <Footer />
      {showLoginPopup && <LoginPopup show={showLoginPopup} onClose={closeLoginPopup} />}
    </div>
  );
}

export default App;
