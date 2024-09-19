import React, { useState } from 'react'
import '../css/currency.css'
import { HiArrowNarrowRight } from "react-icons/hi";
import axios from 'axios'

function Currency() {
    const [amount,setAmount] = useState(0);
    const [fromCurrency,setfromCurrency]= useState('USD');
    const [toCurrency,setToCurrency] = useState('TRY');
    const [result,setResult]= useState(0);

    const base_url ='https://api.freecurrencyapi.com/v1/latest';
    const api_key= 'fca_live_sIsilPxLQWClEfr9AYOAxD7Zu9DINMKUP0N5RABM';

    const exchange= async ()=>{
        const response = await axios.get(
            `${base_url}?apikey=${api_key}&base_currency=${fromCurrency}`
        );
        const bir=response.data.data[fromCurrency]
        const iki=response.data.data[toCurrency]
        
         calculate(bir,iki)

    }
     const calculate = async (bir,iki)=>{
         const sonuc = amount*iki
         yazdir(sonuc.toFixed(3))
     }
     const yazdir = async (sonuc)=>{
        setResult(sonuc)
     }


  return (
    <div className='currency-div'>
        <div className="baslik">
        <h1>Döviz Kuru Uygulaması</h1>

        </div>
        <div>
<input type="number" className='amout' value={amount} onChange={(e) =>setAmount(e.target.value)} />
    <select className='from-currency-option' value={fromCurrency}onChange={(e)=>setfromCurrency(e.target.value)}>
        <option >USD</option>
        <option >EUR</option>
        <option >TL</option>
    </select>
    <HiArrowNarrowRight />

    <select className='to-currency-option' value={toCurrency}onChange={(e)=>setToCurrency(e.target.value)}>
        <option >TL</option>
        <option >USD</option>
        <option >EUR</option>
    </select>
<input type="number" className='result' value={result} onChange={(e)=> setResult(e.target.value)}  />
</div>
<div className='button-wrapper'><button className='button' onClick={exchange}>Çevir</button></div>
    </div>
  )
}



export default Currency

