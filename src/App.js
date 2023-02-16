import { useEffect, useState } from 'react';
import './App.css';

// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const colorsArr = ['4FC1FF', "E8B9AB", 'CB769E', '69995D', 'D2D7DF', '3AA7A3', 'ECA400', '006992', 'AFECE7', '81F499', '890620', 'B6465F', '8ACDEA',
"green", "red", "rgba(133,122,200)", "rgb(0, 255, 0)","rgb(0, 128, 128)","rgba(100, 149, 237)","rgb(128, 0, 128)","rga(255, 195, 0 )"]

const randomArrVal = (arr) => {
  console.log(arr)
  let randomNum = Math.floor(Math.random() * arr.length)
  console.log(arr[randomNum])
  return arr[randomNum]
}

function App() {

  const [accentColor, setAccentColor] = useState('#4FC1FF');
  const [quoteInfo, setQuoteInfo] = useState({});

  useEffect(()=> {
    getQuote();
  },[]);

  const getQuote = () =>{
    fetch('https://api.quotable.io/random')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setQuoteInfo({
        text: data.content,
        author:data.author,
      });
    });
    setAccentColor(`#${randomArrVal(colorsArr)}`)
  };
 
  return (
    <div className="App"  style={{ backgroundColor: `${accentColor}`, color: `${accentColor}`}}>
      <div id='quote-box'>
        <p id='text'> <span> "</span> {quoteInfo.text}</p>
        <p id='author'>{quoteInfo.author}</p>
        <button id='new-quote' className='button' onClick={ getQuote}> New Quote</button>
        <a id='tweet-quote' className='button' href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text' + quoteInfo.text}>
          <i class="fa-brands fa-twitter"></i>
          </a>    
      </div>
      <footer>
      <p class="copyright">Handcrafted by me copyright &copy; <span id="date">2023</span></p>
    </footer>
     
    </div>
  );
}

export default App;
