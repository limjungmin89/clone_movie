import React, { useEffect, useState } from 'react'

type coinInfo = {
  id: string
  name: string
  symbol: string
  quotes: {
    USD: {
      price: number
    }
  }
}

const CoinTracker = () => {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState<Array<coinInfo>>([])
  const [dollers, setDallers] = useState(0)
  const [myCoinCnt, setMyCoinCnt] = useState(0)
  const changeMyDoller = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDallers(parseInt(event.target.value))
  }
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const price = event.target.value.split('$')
    setMyCoinCnt(dollers / parseInt(price[1]))
  }
  useEffect(() => {
    fetch('http://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json)
        setLoading(false)
      })
  }, [])
  return (
    <div>
      <h1>The coins {coins.length}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select onChange={onChange}>
        {coins.map((item) => (
          <option key={item.id}>
            {item.name} ({item.symbol}): ${Math.round(item.quotes.USD.price)}
          </option>
        ))}
      </select>
      <input type="number" value={dollers} onChange={changeMyDoller}></input>
      <h1>Coins you can buy : {myCoinCnt}</h1>
    </div>
  )
}

export default CoinTracker
