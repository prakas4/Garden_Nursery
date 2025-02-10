import "./App.css";
import { ProductProvider } from "./Components/Home/Home";
import AppRoutes from "./Components/AppRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <AppRoutes />
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
