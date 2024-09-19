import React, { useEffect } from 'react'

function Exchange() {
    
  const LatestExchange = async ()=>{ 
    const url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_sIsilPxLQWClEfr9AYOAxD7Zu9DINMKUP0N5RABM"
    const data= await  axios.get(url)
    console.log(data)
}
useEffect(()=>{
    LatestExchange();
},[])

  
    return (
    <div>
        


    </div>
  )
}

export default Exchange