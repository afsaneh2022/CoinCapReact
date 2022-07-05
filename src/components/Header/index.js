
import {HeaderHead,HeaderColumn} from "./styles";

function Header(){
         
    return    <HeaderHead >
                <div className="container details2">  
                    <HeaderColumn > 
                        <div className="lable">MARKET CAP</div>
                        <div className="value"> $1.65T  </div>
                    </HeaderColumn>
                    <HeaderColumn > 
                        <div className="lable">EXCHANGE VOL</div>
                        <div className="value"> $72.80B </div>
                    </HeaderColumn>
                    <HeaderColumn > 
                        <div className="lable">ASSETSL</div>
                        <div className="value"> 2,295 </div>
                    </HeaderColumn>
                    <HeaderColumn > 
                        <div className="lable">EXCHANGES</div>
                        <div className="value"> 73 </div>
                    </HeaderColumn>
                    <HeaderColumn > 
                        <div className="lable">MARKETS</div>
                        <div className="value"> 15,132 </div>
                    </HeaderColumn>
                    <HeaderColumn > 
                        <div className="lable">BTC DOM INDEX</div>
                        <div className="value"> 35.2% </div>
                    </HeaderColumn>
                </div>

            </HeaderHead> 


}
export default Header;