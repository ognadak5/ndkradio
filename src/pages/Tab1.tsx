import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonProgressBar, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

import { musicalNotesOutline } from 'ionicons/icons';

const Tab1: React.FC = () => {

  var audio = new Audio('https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3?1611009242');

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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <div className="main">
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

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
