import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardHeader,
  IonCardTitle, IonButton, IonCardContent} from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonCardHeader className='title'>
            <IonCardTitle>Settings</IonCardTitle>
        </IonCardHeader>

        <IonButton expand="block" fill="clear" onClick={ () => { window.location.reload(false) }} href='/'>Refresh Page</IonButton>

        <IonCardContent className='moto'>
          Music is the art which is most nigh to tears and memory.
          <br/>
          <br/>
          <strong>ndkradio</strong>, providing never ending tunes to the nadak oasis.

          <br/>
          <br/>
          <IonButton expand="block" fill="clear" href='https://twitter.com/ognadak5' target='_blank'>Twitter</IonButton>
          <IonButton expand="block" fill="clear" href='https://ognadak5.github.io/txt/' target='_blank'>Oasis Drafts</IonButton>
        </IonCardContent>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
