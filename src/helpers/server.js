
 
 
 let params = new URLSearchParams(document.location.search);

 let coin_name = params.get("coin");

 console.log(coin_name);
function coin_url(name) {
  return `https://api.coincap.io/v2/assets/${name}/history?interval=d1`;
}
console.log(coin_url(coin_name));

function coin_dtl(name) {
  return `https://api.coincap.io/v2/assets/${name}`;
}
console.log(coin_dtl(coin_name));
 
//  get coins list for Homepage
 export async function get_coins(){
    let respons=await fetch("https://api.coincap.io/v2/assets");
    let json = await respons.json();
    let data=json.data;
    return data;

    }
    
 
//    get coin history for Chart 
     export async function get_coin_chart() {
      let url = coin_url(coin_name);
      let respons = await fetch(url);
      let json = await respons.json();
    
      let data = json.data;
    return data;
      // let yValues = [];
      // let xValues = [];
    
      // data.forEach((item) => {
      //   yValues.push(item.priceUsd);
      //   xValues.push(item.time);
      // });
    
      // return {
      //   x: xValues,
      //   y: yValues,
      // };
    }
   
// get coin detalis for onclick on each coin 
   export async function get_coin_dtl(){
      let dtl=coin_dtl(coin_name);
      let respons=await fetch(dtl);
      let json=await respons.json();
    
      let data = json.data;
      return data;
    }
    

//    get exchanges for exchanges Page
   export async function get_Exchanges(){
      let respons=await fetch("https://api.coincap.io/v2/exchanges");
      let json = await respons.json();
      let data=json.data;
      return data;
   
      }
      
