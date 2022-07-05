
 export async function get_coins(){
    let respons=await fetch("https://api.coincap.io/v2/assets");
    let json = await respons.json();
    let data=json.data;
    return data;

    }
    
 

    
 export async function get_coin(){
   let respons=await fetch("https://api.coincap.io/v2/assets");
   let json = await respons.json();
   let data=json.data;
   return data;

   }
   
  
   export async function get_Exchanges(){
      let respons=await fetch("https://api.coincap.io/v2/exchanges");
      let json = await respons.json();
      let data=json.data;
      return data;
   
      }
      