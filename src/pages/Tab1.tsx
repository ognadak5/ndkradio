import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Player from '../components/Player';
import './Tab1.css';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Player/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
