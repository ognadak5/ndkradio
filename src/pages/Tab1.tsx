import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonProgressBar, IonIcon } from '@ionic/react';
import Player from '../components/Player';
import './Tab1.css';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Player/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
