import React, { useState, useEffect, useCallback, } from 'react';
import { Slide, Gallery } from './images';
import { render } from '@testing-library/react';

const Content: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const handleIncrement = useCallback(() => {
    if(count < Slide.length - 1) {
      setCount(prev => prev + 1)
    }else{
      setCount(prev => 0)
    }
    },
    [count],
  )
  const handleDecrement = useCallback(
    () => {
      if(count > 0) {
        setCount(prev => prev - 1)
      }else{
        setCount(prev => 0)
      }
    },
    [count],
  )
  //const galleryList =  Gallery[count].map((url, index) => <img src={Gallery[count][index]} alt={Gallery[count][index]} key={Gallery[count][index]}/>);
  const galleryFunc  = () => {
    return(
      render(
        <p>
          {Gallery[count].map((url, index) => <img src={Gallery[count][index]} alt={Gallery[count][index]} key={Gallery[count][index]}/>)}
        </p>
      )
    )
  }



  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <section>
      <p>You clicked {count} times</p>
      <p>
        <button onClick={handleIncrement}>+1</button>
        <img src={Slide[count]} alt="" key={Slide[count]} onClick={galleryFunc}/>
        <button onClick={handleDecrement}>-1</button>
        {/* <p>{galleryList}</p> */}
      </p>
      <p>
        <button onClick={() => setCount(0)}>
          Reset button
        </button>
      </p>
    </section>
  )
}

export default Content;