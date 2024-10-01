import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Hola mundo! Tab 3
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Esta es la tab 3 para el proyecto Hola Mundo" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
