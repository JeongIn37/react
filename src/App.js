import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import './App.css';

function App() {
  const name='react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, //기본 단위 px
    padding: '1rem' //다른 단위 사용시 문자열로 설정
  }

  return ( 
    <>
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true}/>
      <Hello color="pink"/>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </Wrapper>
    <Counter/>
    </>
  )
}

export default App;
