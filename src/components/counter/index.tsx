import { FC, memo } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import {counterAtom, counterSelector } from '../../atoms/count/'

export const Counter: FC = memo(() => {
  const countValue = useRecoilValue(counterAtom) //グローバル変数を直接取得
  const [count, setCount] = useRecoilState(counterAtom) // グローバル変数を他の変数に代入し取得
  const [counter, setCounter] = useRecoilState(counterSelector) // グローバル変数のSelector経由で取得

  const handleClickCount = (count: number) => {
    setCount(count)
  }

  return (
    <>
      <h1>カウンターアプリ(Recoilで状態管理)</h1>
      <div className="div">
        <h2>カウント値</h2>
        <span>{countValue}</span>
      </div>
      <div className="div">
        <div>
          <h2>グローバル変数を直接変更！！！</h2>
        </div>
        <div>
          <button onClick={() => handleClickCount(count - 1)}>-</button>
          <span>{count}</span>
          <button onClick={() => handleClickCount(count + 1)}>+</button>
        </div>
      </div>
      <div className="div">
        <h2>グローバル変数のSelector経由で取得！！！</h2>
        <div>
          <button onClick={() => setCounter(counter - 2)}>-</button>
          <span>{counter}</span>
          <button onClick={() => setCounter(counter + 2)}>+</button>
        </div>
      </div>
    </>
  )
})