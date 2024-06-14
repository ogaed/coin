import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import DSTCComponent from "./Pages/About";
import PublishStoryComponent from "./Pages/Share"
import BlogCardsComponent from "./Pages/Barazas";

import ArticleComponent from "./Pages/Baraza";
import WalletPopup from "./components/Wallet";
//import PurchasePopup from "./components/PurchaseBaraza";
import WhitePaper from "./Pages/Whitepaper";
import Roadmap from "./Pages/Roadmap";
import HowItWorks from "./Pages/Technical";
export const App = () => {

const [principal, setPrincipal]=useState("")
 const [showPopup, setShowPopup] = useState(false);
  const [_, setshowPurchasePopUp] = useState(false);


   const handleConnectWallet = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handlePurchasePopup = () => {
    setshowPurchasePopUp(true);
  };

  // const closePurchasePopup = () => {
  //   setshowPurchasePopUp(false);
  // };

  return (
    <BrowserRouter>


       {showPopup && (
          <WalletPopup
          principal={principal}
          setPrincipal={setPrincipal}
            onClose={handleClosePopup}
            handlePurchasePopup={handlePurchasePopup}
          />
        )}
          {/* {showPurchasePopUp && (
        //  <PurchasePopup onClose={closePurchasePopup} />
        )} */}

      <Routes>
        <Route path="/" element={<Home handleConnectWallet={handleConnectWallet} />}>
          <Route index element={<DSTCComponent />}></Route>
          <Route path="/Share" element={<PublishStoryComponent principal={principal} setPrincipal={setPrincipal} />}></Route>
          <Route path="/Barazas" element={<BlogCardsComponent />}></Route>
          <Route path="/Whitepaper" element={<WhitePaper />}></Route>
           <Route path="/Roadmap" element={<Roadmap />}></Route>
              <Route path="/How it works" element={<HowItWorks />}></Route>
          <Route path="/Barazas/:barazaId" element={<ArticleComponent />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;