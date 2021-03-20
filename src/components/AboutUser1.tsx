import { useEffect, useRef, useState } from "react";
import aituBridge from "@btsd/aitu-bridge";
import {Link } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import {
  IonApp,
  IonContent,
  IonButton,
  IonText,
} from "@ionic/react";

import "./App.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const AboutUser1: React.FC = () => {
  async function getMe() {
    try {
      const data = await aituBridge.getMe();
      setName(data.name);
    } catch (e) {
      // handle error
      console.log(e);
    }
  }

  useEffect(() => {
    if (aituBridge.isSupported()) {
      getMe();
    }
  }, []);

  const [name, setName] = useState("<username>");
  const [value, onChange1] = useState(new Date());
  return (
    <IonApp>
      <IonContent>
      <h2 color="primary" className="question">
          Расскажите о себе, ${name}
          </h2>
          <h3 className="inputs" >
            Дата рождения (дд-мм-гггг)
          </h3>
          <DatePicker format="dd-mm-y" className="birthday" value={value} onChange={data => data && onChange1} />
          <Link to = "/registersecond" className="buttonLink">
        Дальше
        </Link>
      </IonContent>
    </IonApp>
  );
};

export default AboutUser1;
