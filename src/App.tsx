import {
  IonApp,
  IonButton,
  IonContent,
  setupIonicReact
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import { useEffect, useState } from 'react';
import { db } from './db';

setupIonicReact();

const App: React.FC = () => {
  const [refresh, setRefresh] = useState(Date.now());
  const [length, setLength] = useState(-1);
  useEffect(() => {
    db.time.add({ timestamp: Date.now() }).then(() => {
      db.time.count().then((count) => {
        setLength(count);
      });
    });
  }, [refresh]);

  return <IonApp>
    <IonContent>
      <center>
        <div style={{"height": "64px"}}></div>
        <p>Items in IndexedDB: {length}</p>
        <IonButton onClick={() => setRefresh(Date.now())}>Add Another</IonButton>
      </center>
    </IonContent>
  </IonApp>
};

export default App;
