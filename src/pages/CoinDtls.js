import { useEffect,useState } from "react";
import Nav from "../components/Nav"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {get_coin} from "../helpers/server"
import ChartEx from "../components/ChartEx"


function CoinDtls(){
let [ data,setData]=useState([])
useEffect(()=>{
    get_coin().then((respons)=>{
        setData(respons);
    });
},[]);

    return <div > 
                <Nav />
                <Header />
                <ChartEx  list={data}/>
                <Footer />
            </div>


}
export default CoinDtls;