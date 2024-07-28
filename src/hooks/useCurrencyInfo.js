import {useState, useEffect} from 'react'

function useCurrencyInfo(currency) {
    const [data,setData] =useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data)
    }, [currency])
    console.log(data)
  return data
}

export default useCurrencyInfo;

//https://github.com/fawazahmed0/currency-api?tab=readme-ov-file
// https://github.com/fawazahmed0/exchange-api/blob/main/MIGRATION.md

//https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json