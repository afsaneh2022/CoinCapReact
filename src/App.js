
import { BrowserRouter,Routes,Route } from "react-router-dom";
import  HomePage from "./pages/Home";
import  ExchangesP from "./pages/ExchangesPage";
import  SwapPage from "./pages/SwapPage";
import  CoinDtlsPage from "./pages/CoinDtls";
import "./styles.css";

function App() {
  return (
    <div className="App">
   

        <BrowserRouter>
            <Routes>
                <Route   path="/"  element={<HomePage /> }></Route>
                <Route   path="/ExchangesPage"  element={<ExchangesP /> }></Route>
                <Route   path="/SwapPage"  element={<SwapPage /> }></Route>
                <Route path="/CoinDtls/:name" element={<CoinDtlsPage />} />
            </Routes>

        </BrowserRouter>

        </div>     
   
      
   
  );
}

export default App;
