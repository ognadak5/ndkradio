import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
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

          <audio id='music' controls>
            <source src="https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3?1611009242" type="audio/mpeg"></source>
            Your browser does not support the audio element.
          </audio>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
