import { Route, Switch } from "react-router";
import Coffee from "./pages/coffee";
import House from "./pages/house";
import Item from "./pages/item";
import PLeasure from "./pages/pleasure";

function App() {
  return (
    <>
        <Switch>
            <Route path='/' component={House} exact/>
            <Route path='/our-coffee/:id' component={Item}/>
            <Route path='/our-coffee' component={Coffee} />
            <Route path='/for-your-pleasure' component={PLeasure} exact/>
        </Switch>
    </>
  );
}

export default App;
