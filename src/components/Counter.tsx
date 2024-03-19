import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks'
import { decrement, increment } from '../store/counterSlice'

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      {count}
      
      <button onClick={() => dispatch(increment())}></button>
    </div>
  );
}

export default Counter;