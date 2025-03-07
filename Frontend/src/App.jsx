import "./App.css";
import { HashRouter } from "react-router-dom";
import { ProductProvider } from "@context/Context";
import AppRoutes from "./routes/AppRoutes";

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
