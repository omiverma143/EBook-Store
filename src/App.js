import { AllRoutes } from "./Routes/AllRoutes";
import { Header, } from "./Components/Layouts/Header";
import { Footer, } from "./Components/Layouts/Footer";
import { ScrollToTop } from "./Components";

function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <ScrollToTop/>
        <AllRoutes />
        <Footer/>
      </div>
    </>
  );
}

export default App;
