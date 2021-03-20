import React, { useEffect, useRef, useState } from "react";
import aituBridge from "@btsd/aitu-bridge";
import {BrowserRouter as Router, Route, Link, Switch, BrowserRouter } from 'react-router-dom';
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
import Welcome from "./Welcome";
import AboutUser2 from "./AboutUser2";
const App: React.FC = () => {
  return (
    <BrowserRouter>
            <Switch>             
                <Route path="/" exact component={Welcome}/>
                <Route path="/register" component={AboutUser1}/>  
                <Route path="/registersecond" component={AboutUser2}/>        
            </Switch>
        </BrowserRouter>   
  );
};

export default App;