
import {TableList,TableHead,TrowAligh2,Asending,Trow,TrowAligh} from "./styles";
import {separate,separate_symbol} from "../../Utils";



function ExchangeList(props){
 
return( 
 <div className="container details1">

       
<TableList  >

        <TableHead className="links">
            <TrowAligh href="#" > Rank          </TrowAligh >
            <TrowAligh2 href="#" >Name          </TrowAligh2>
            <TrowAligh href="#" >Trading Pairs  </TrowAligh>
            <TrowAligh href="#"> Top Pair	</TrowAligh>
            <TrowAligh href="#" >  Volume (24Hr) </TrowAligh>	
            <TrowAligh href="#" >  Total (%)	</TrowAligh>
            <TrowAligh href="#" >Status	</TrowAligh>
           
         
        </TableHead>
        {props.list.map((item)=>{
                let socket = item.socket !== null ? "🟢" : "🔴";
               
        return  <div   >

         
                        <Trow  className="links">

                                <TrowAligh  href="#" > {item.rank}</TrowAligh >  
                                <TrowAligh2 className="logo-name" href="#" >    {item.name}   </TrowAligh2>                         
                                <TrowAligh  href="#">{separate(item.tradingPairs)} </TrowAligh>
                                <TrowAligh  href="#">BTC/USTD </TrowAligh>
                                <TrowAligh  href="#">{separate_symbol(item.volumeUsd)} </TrowAligh>
                                <TrowAligh  href="#">{separate(item.percentTotalVolume)} </TrowAligh>
                                <TrowAligh  href="#">{socket} </TrowAligh>

                                
                              

                        </Trow>
                </div>  




               

})}


</TableList>
</div> 
)}




export default ExchangeList;