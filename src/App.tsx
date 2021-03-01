import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

const App = () => (
  <div>
    <div style={{ width: "50%", margin: "auto" }}>
      <AmplifySignOut />
    </div>
    My App
  </div>
);

export default withAuthenticator(App);
