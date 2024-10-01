import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Hola mundo! Tab 1
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Esta es la tab 1 para el proyecto Hola Mundo" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
