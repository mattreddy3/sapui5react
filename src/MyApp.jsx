import React from "react";
import { ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";
import { useHistory } from "react-router-dom";

import "@ui5/webcomponents/dist/icons/add.js";

export function MyApp() {
  const history = useHistory();
  const handleLogoClick = () => {
    history.push("./");
  };
  return (
    <div>
      <ShellBar
        logo={"https://github.com/SAPDocuments/Tutorials/raw/master/tutorials/ui5-webcomponents-react-dashboard/reactLogo.png"}
        profile={"https://github.com/SAPDocuments/Tutorials/raw/master/tutorials/ui5-webcomponents-react-dashboard/profilePictureExample.png"}
        primaryTitle={"My App"} onLogoClick={handleLogoClick}>
        <ShellBarItem src="sap-icon://add" text="Add" />
      </ShellBar>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/detail" component={Detail} />
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
}