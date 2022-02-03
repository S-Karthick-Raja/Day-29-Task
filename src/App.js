import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import { Topbar } from "./Components/Topbar";
import Fetchusers from "./Fetch & Delete Components/Users";
import { Editusers } from "./Edit Component/Edituser";
import { Addusers } from "./Add Component/Addusers";


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
        </Switch>
      </BrowserRouter>
    </div>
  );
}