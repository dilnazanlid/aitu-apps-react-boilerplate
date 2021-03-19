import React, { useEffect, useRef, useState } from "react";
import aituBridge from "@btsd/aitu-bridge";
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
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

  return (
    <IonApp>
      <IonContent>
        <div className = "container">
          <h2 color="primary" className="welcome">
            Приветствуем Вас!
          </h2>
        <Router> <Link to = "/register"><IonButton class="button">
        Начать
        </IonButton></Link>
        <Route path="/" exact component={App}/>
                <Route path="/register" component={AboutUser1}></Route>  
                <Route path="/register/second" component={AboutUser1}></Route>        
        </Router>
        </div>
      
      </IonContent>
    </IonApp>
  );
};

export default App;
