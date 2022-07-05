
import {TableList,TableHead,TrowAligh2,Asending,Trow,TrowAligh} from "./styles";




function CoinDetails(props){

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
                                <TrowAligh  href="#">{item.priceUsd} </TrowAligh>
                                <TrowAligh  href="#">{item.marketCapUsd} </TrowAligh>
                                <TrowAligh  href="#">{item.vwap24Hr} </TrowAligh>
                                <TrowAligh  href="#">{item.supply} </TrowAligh>
                                <TrowAligh  href="#">{item.volumeUsd24Hr} </TrowAligh>
                                <TrowAligh  href="#">{item.changePercent24Hr} </TrowAligh>

                        </Trow>
                </div>  




               

})}


</TableList>
</div> 
)}




export default CoinDetails;