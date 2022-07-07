import mainLogo from "./logo/black.svg";
import searchLogo from "./logo/search.png";
import settingLogo from "./logo/setting.png";
import {Link} from  "react-router-dom";
import {NavLinks ,NavRight,NavCenter} from "./styles";
import {Button} from "../Button/styles";

 function Nav(){


    return           <NavLinks >
                    
                        <div className="container details2">
                    
                                <div className="links">
                                        <Link to="/"> Coins</Link>
                                        <Link to="/ExchangesPage">Exchanges</Link>
                                        <Link to="/SwapPage">Swap</Link>
                                </div>
                                <NavCenter  >
                                    <a  href="#" >
                                        <img src={mainLogo} /> 
                                    </a> 
                                </NavCenter>
                                <NavRight >
                                {/* <!-- <input type="text" /> --> */}
                                    <span><i > <img src={searchLogo} className="icon "/>  </i></span> 
                                    <span>  <a href="#"><img src={settingLogo}   className="icon "/> </a></span>
                                    <span> <Button href="#" >Connect Wallet  </Button> </span>
                                </NavRight>
                        </div>
                    
                    </NavLinks>      



 }
 export default Nav;