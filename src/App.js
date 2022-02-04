import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import { Topbar } from "./Components/Topbar";
import Fetchusers from "./Fetch & Delete Components/Users";
import { Editusers } from "./Edit Component/Edituser";
import { Addusers } from "./Add Component/Addusers";
import { Fetchprofile } from "./Fetch Profile/Profile"
import { Editprofile } from "./Edit Component/Editprofile";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Fetchusers} />
          <Route path="/edit-user/:id"> <Editusers /> </Route>
          <Route path="/create-user"> <Addusers /> </Route>
          <Route exact path="/profile" component={Fetchprofile} />
          <Route path="/edit-profile/:id"> <Editprofile /> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}