import React from 'react';
import { IonButton, IonProgressBar, IonIcon, IonCardContent } from '@ionic/react';
import './Player.css';

import { musicalNotesOutline } from 'ionicons/icons';

interface ContainerProps {
  name: string;
}

const Player: React.FC = () => {

  // var audio = new Audio('https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3?1611009242');
  var audio = new Audio('https://demo.azuracast.com/radio/8000/radio.mp3?1611240819');

  function player(){
    if( audio.paused ){
      audio.play();
      console.log('Playing');
    }else{
      audio.pause();
      console.log('Paused');
    }
  }

  return (
     <IonCardContent className='mainFrame'>
      <div className="cont">
        <strong>Nadak Radio</strong>
        <br/>
        <br/>

        <div className='progressbar'>
          <p>Streaming...</p>
          <IonProgressBar buffer={0.1} ></IonProgressBar><br />
        </div>

        <IonButton size="large" fill='clear' onClick={() =>{ player() }}>
          <IonIcon icon={musicalNotesOutline}></IonIcon>
        </IonButton>
      </div>
     </IonCardContent>
  );
};

export default Player;
