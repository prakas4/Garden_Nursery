import "./App.css";
import { ProductProvider } from "./Components/Home/Home";
import AppRoutes from "./Components/AppRoutes";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <ProductProvider>
          <AppRoutes />
        </ProductProvider>
      </HashRouter>
    </>
  );
}

export default App;
