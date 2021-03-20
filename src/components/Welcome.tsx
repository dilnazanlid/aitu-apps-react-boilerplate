import React, { useEffect, useRef, useState } from "react";
import aituBridge from "@btsd/aitu-bridge";
import {Link, Router } from 'react-router-dom';
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
import AboutUser1 from "./AboutUser1";
const App: React.FC = () => {
  return (
    <IonApp>
      <IonContent>
        <div className = "container">
          <h2 color="primary" className="welcome">
            Приветствуем Вас!
          </h2>
          <Link to = "/register" className="buttonLink">
        Начать
        </Link>
        </div>
      
      </IonContent>
    </IonApp>
  );
};

export default App;
