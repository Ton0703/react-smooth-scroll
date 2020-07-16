import React, {useRef, useEffect} from 'react';
import './App.css';

function App() {
  const app = useRef()
  const scroll = useRef()

  const scrollConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  }

  useEffect(() => {
      requestAnimationFrame(() => scrolling())
  }, [])


  //body总长度为scroll的长度
  useEffect(() => {
      document.body.style.height = `${scroll.current.getBoundingClientRect().height}px`
  }, [])

  const scrolling = () => {
     scrollConfigs.current = window.scrollY;
     scrollConfigs.previous += (scrollConfigs.current - scrollConfigs.previous) * scrollConfigs.ease;
     scrollConfigs.rounded = Math.round(scrollConfigs.previous * 100) / 100

     scroll.current.style.transform = `translateY(-${scrollConfigs.rounded}px)`

     requestAnimationFrame(() => scrolling())
  }

  return (
    <div ref={app} className="App">
       <div ref={scroll} className='scroll'>
         <div className='wrap'>Smooth Scroll</div>
         <div className='wrap'>Smooth Scroll</div>
         <div className='wrap'>Smooth Scroll</div>
         <div className='wrap'>Smooth Scroll</div>
       </div>
    </div>
  );
}

export default App;
