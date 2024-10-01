import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Hola mundo! Tab 2
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Esta es la tab 2 para el proyecto Hola Mundo" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
