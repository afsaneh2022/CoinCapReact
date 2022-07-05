
import {TableList,TableHead,TrowAligh2,Asending,Trow,TrowAligh} from "./styles";
import {separate,separate_symbol} from "../../Utils";



function CoinsList(props){
        
 let greenStyle=  { color: 'green' };        
 let  redStyle = { color: 'red' };
return( 
 <div className="container details1">

       
<TableList  >

        <TableHead className="links">
            <TrowAligh href="#" > Rank          </TrowAligh >
            <TrowAligh2 href="#" >Name          </TrowAligh2>
            <TrowAligh href="#" >Price	        </TrowAligh>
            <TrowAligh href="#"> Market Cap	</TrowAligh>
            <TrowAligh href="#" > VWAP (24Hr)	</TrowAligh>	
            <TrowAligh href="#" >  Supply	</TrowAligh>
            <TrowAligh href="#" >Volume (24Hr)	</TrowAligh>
            <TrowAligh href="#" > Change (24Hr) </TrowAligh>
         
        </TableHead>
        {props.list.map((item)=>{

                let hStyle = item.changePercent24Hr >0  ? greenStyle : redStyle;
        return  <div   >

         
                        <Trow  className="links">

                                <TrowAligh  href="#" > {item.rank}</TrowAligh >  
                                <TrowAligh2 className="logo-name" href={`/coinsdetail.html?coin=${item.id}`} >
                                        <img  className="logo" src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`} />
                                        <span>
                                        {item.name}
                                        <p>{item.symbol}</p>     
                                        </span>
                                </TrowAligh2>
                                <TrowAligh  href="#">{separate(item.priceUsd)} </TrowAligh>
                                <TrowAligh  href="#">{separate_symbol(item.marketCapUsd)} </TrowAligh>
                                <TrowAligh  href="#">{separate_symbol(item.vwap24Hr)} </TrowAligh>
                                <TrowAligh  href="#">{separate_symbol(item.supply)} </TrowAligh>
                                <TrowAligh  href="#">{separate_symbol(item.volumeUsd24Hr)} </TrowAligh>

                                
                                <TrowAligh  href="#" style={hStyle}>{separate(item.changePercent24Hr)} </TrowAligh>

                        </Trow>
                </div>  




               

})}


</TableList>
</div> 
)}




export default CoinsList;