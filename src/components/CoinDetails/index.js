
import {TableList,TableHead,TrowAligh2,Asending,Trow,TrowAligh} from "./styles";
import {Link} from  "react-router-dom";



function CoinDetails(props){

return( 
 <div className="container details1">

       
        {props.list.map((item)=>{
        return  <div   >

         
                        <Trow  className="links">

                                <TrowAligh  href="#" > {item.rank}</TrowAligh >  
                                <Link className="logo-name" href={`/coinsdetail.html?coin=${item.id}`} >
                                        <img  className="logo" src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`} />
                                        <span>
                                        {item.name}
                                        <p>{item.symbol}</p>     
                                        </span>
                                </Link>
                                <TrowAligh  href="#">{item.priceUsd} </TrowAligh>
                                <TrowAligh  href="#">{item.marketCapUsd} </TrowAligh>
                                <TrowAligh  href="#">{item.vwap24Hr} </TrowAligh>
                                <TrowAligh  href="#">{item.supply} </TrowAligh>
                                <TrowAligh  href="#">{item.volumeUsd24Hr} </TrowAligh>
                                <TrowAligh  href="#">{item.changePercent24Hr} </TrowAligh>

                        </Trow>
                </div>  




               

})}



</div> 
)}




export default CoinDetails;