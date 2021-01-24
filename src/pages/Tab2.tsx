import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardHeader,
  IonCardTitle, IonCardSubtitle, IonImg, IonCardContent } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {

  const image = 'https://pbs.twimg.com/profile_banners/1351170543203004420/1610981953/600x200'

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonCardHeader className='title'>
            <IonCardTitle>The Oasis</IonCardTitle>
            <IonCardSubtitle>Nadak Oasis</IonCardSubtitle>
        </IonCardHeader>

        <IonImg className='image' src={image} />

        <IonCardContent className='quote'>
          “If I was feeling depressed or frustrated about my lot in life,
          all I had to do was tap the Player One button, and my worries would
          instantly slip away as my mind focused itself on the relentless
          pixelated onslaught on the screen in front of me. There, inside the
          game’s two-dimensional universe, life was simple: It’s just you
          against the machine. Move with your left hand, shoot with your
          right, and try to stay alive as long as possible.”
       </IonCardContent>

        <IonCardContent className='intro'>
        In Virtual Reality, one can accomplish anything they desire.
        Combine that with a couple other tools like a radio for some tunes,
        Chat system to meet new people and a full booming economy filled
        with adventure quests and there you have it … An Oasis
        <br/>
        <br/>
        Hie I’m Nadak, a 17 year old on the verge to create an internet
        hangout, one where dreams come true.
        <br/>
        <br/>
        Let’s walk the Path together ツ
        <br/>
        <br/>
        -->  <a href='https://ognadak5.github.io/txt/'>Portal</a>
       </IonCardContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
