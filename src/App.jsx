import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useGlobalStates } from "./Components/utils/global.context";
import {routes} from "./routes"
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";


function App() {
  const { state } = useGlobalStates()
  return (
      <div className={"App " + state.theme }>
          <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.dentistsWithId} element={<Detail />} />
            <Route path={routes.contact} element={<Contact />}/>
            <Route path={routes.favs} element={<Favs />}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
