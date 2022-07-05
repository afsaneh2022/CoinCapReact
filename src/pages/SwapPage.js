import { useEffect,useState } from "react";
import Nav from "../components/Nav"
import Header from "../components/Header"
import Swap from "../components/Swap"
import Footer from "../components/Footer"
import {get_coins} from "../helpers/server"

function SwapPage(){
    let [ data,setData]=useState([])
    useEffect(()=>{
        get_coins().then((respons)=>{
            setData(respons);
        });
    },[]);
    
        return <div > 
                    <Nav />
                    <Header />
                    <Swap list={data}/> 
                    <Footer />
                </div>
    
    
    }
    export default SwapPage;