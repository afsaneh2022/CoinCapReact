
import {  Baner,MainPage,LeftBaner,DivRank,GreenBox} from "./styles";

function HeaderCoin(props){
         
    return    < Baner >
                <div className="container details2">  
                    <MainPage>
                    <LeftBaner>
                        <DivRank>
                         <h1 >{props.rank}</h1>
                        <p >{}</p> 
                  

                        </DivRank>

                    </LeftBaner>
                    
                    
                    
                    
                    </MainPage> 
                </div>

            </ Baner> 


}
export default HeaderCoin;