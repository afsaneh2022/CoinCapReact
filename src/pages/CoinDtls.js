import { useEffect,useState } from "react";
import Nav from "../components/Nav"
import HeaderCoin from "../components/HeaderCoin"
import CoinDetails  from "../components/CoinDetails";
import Footer from "../components/Footer"
import {get_coin_chart,get_coin_dtl} from "../helpers/server"
import ChartEx from "../components/ChartEx"
import Header from "../components/HeaderCoin";


function CoinDtls(){
let [ datachart,setDatachart]=useState([])
let [ datadtl,setDatadtl]=useState([])
useEffect(()=>{
    get_coin_chart().then((respons)=>{
        setDatachart(respons);
    });
    get_coin_dtl().then((respons1)=>{
        setDatadtl(respons1);
    });


},[]);

    return <div > 
                <Nav />
                < HeaderCoin list={datadtl} />
                {/* < CoinDetails list={datadtl}/> 
                <ChartEx  list={datachart}/> */}
                <Footer />
            </div>


}
export default CoinDtls;