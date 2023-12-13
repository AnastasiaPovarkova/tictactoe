"use client";

import Head from 'next/head';
import Image from 'next/image'
import { useState } from 'react'

const WIN_COMBO = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

export default function Home() {

  const [xTurn, setXTurn] = useState(true);

  const [data, setData] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: ""
  });

  const updateData = (num: number) => {
    if (!data[num]) {
      let value = xTurn === true ? 
        <Image
          className="game__image"
          src="/Cross.svg"
          alt="cross"
          width={55}
          height={55}
          priority
        /> : 
        <Image
          className="game__image"
          src="/Round.svg"
          alt="round"
          width={60}
          height={60}
          priority
        />
      setData({...data, [num]: value})
      setXTurn(!xTurn)
    }
  }

  return (
    <main className="game">
      <title>Tic Tac Toe</title>
      <h1 className='game__title'>Tic Tac Toe</h1>
      <div className='game__turn'>
        <p>{xTurn === true ? 'X Turn' : '0 Turn'}</p>
      </div>
      <div className='game__board'>
        {[...Array(9)].map((v, num: number) => {
          return (
            <div 
              className="boxes" 
              onClick={() => {
              updateData(num)
            }}
              key={num}>
              {data[num]}
            </div>
          );
        })}
      </div>
      
      <h1 className="game__winner"></h1>

      <button className="game__reset">Reset</button>

    </main>
  )
}
