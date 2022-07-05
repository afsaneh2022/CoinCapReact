import twitterLogo from "./logo/twitter.svg";
import facebookLogo from "./logo/facebook.svg";
import googlePlay from "./logo/download.jpg";
import appleStoreLogo from "./logo/appleStore.svg";

import {FooterMain,FooterColumn,FooterIcon} from "./styles";

function Footer(){
   
return     <FooterMain >
                <div className="container details1 ">  
                    <FooterColumn >
                        <h4> COINCAP.IO</h4>
                        <a href="#"> Methodology</a>
                        <a href="#"> Support</a>
                        <a href="#"> Our API</a>
                        <a href="#"> Rate Comparison</a>
                        <a href="#"> Careers</a>
                    </FooterColumn>

                    <FooterColumn   >
                        <h4> LEGALS</h4>
                        <a href="#"> Terms of Service</a>
                        <a href="#"> Privacy Policy</a>
                        <h4> DISCLAIMER</h4>
                        <h5>Neither ShapeShift AG nor CoinCap are in <br />any way associated with CoinMarketCap,<br /> LLC or any of its goods and services.</h5>
                    </FooterColumn>
                
                    <FooterColumn >
                        <h4> FOLLOW US</h4>
                        <FooterIcon > 
                            <a href="#"> <img src={twitterLogo} className="logo"/></a>
                            <a href="#"> <img src={facebookLogo}  className="logo"/></a>  
                        </FooterIcon>
                        
                    </FooterColumn>
                    <FooterColumn >
                        <h4> COINCAP APP AVAILABLE ON US</h4>
                        <a href="#"><img src={googlePlay} /></a>
                        <a href="#"><img src={appleStoreLogo} /></a>
                    </FooterColumn>
                </div>
            </FooterMain>


}
export default Footer;