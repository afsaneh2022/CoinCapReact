import { useEffect,useState } from "react";
import Nav from "../components/Nav"
import Header from "../components/Header"
import Exchanges from "../components/ExchangeList"
import Footer from "../components/Footer"
import {get_Exchanges} from "../helpers/server"


function ExchangesPage(){
let [ data,setData]=useState([])
useEffect(()=>{
    get_Exchanges().then((respons)=>{
        setData(respons);
    });
},[]);

    return <div > 
                <Nav />
                <Header />
                <Exchanges  list={data}/>
                <Footer />
            </div>


}
export default ExchangesPage;