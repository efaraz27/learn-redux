import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Using redux</h1>
        <CakeContainer />
        <h1>Using react-redux (hooks)</h1>
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
