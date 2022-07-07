import settingLogo from "./logo/setting.png";
import {MainBox,SwapBox,SwapBoxRow} from "./styles";


function CoinsList(props){
  
 return( <div className="container details1">
        <MainBox>
             <SwapBoxRow>
                  <h2 > Swap </h2>
                  <span > 
                    <a href="#">
                      <img src={settingLogo}  />
                    </a>
                  </span>
             </SwapBoxRow>



           



        </MainBox>
           
        


       </div>     

          
         
 )}
 
 
 
 
 export default CoinsList;