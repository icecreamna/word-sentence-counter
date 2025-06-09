import { useEffect, useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'

interface Props {
  result: {
    word: number;
    character: number;
    sentence: number;
    paragraph: number;
    pronouns: number;
  }
}

const App = () => {


  const [text, setText] = useState<string>("");
  const [count, setCount] = useState<Props>({
    result: {
      character: 0,
      word: 0,
      sentence: 0,
      paragraph: 0,
      pronouns: 0,
    }
  });

  const calculateCount = () => {
    const character = text.length
    const words = text.split(" ").filter(Boolean).length
    const sentences = (text.match(/[.!?]+/g) || []).length;
    const paragraphs = text.split(/\n{2,}/).filter(Boolean).length;
    const pronouns = (text.match(/\b(I|you|he|she|it|we|they|me|him|her|us|them|my|your|his|her|its|our|their)\b/gi) || []).length;

    setCount(prev => ({ ...prev, result: { ...prev, character: character, word: words, sentence: sentences, paragraph: paragraphs, pronouns: pronouns } }))
  }

  useEffect(() => {
    calculateCount();
  }, [text])

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox
            result={count.result}
          />
          <TextArea
            value={text}
            onChange={event => setText(event.target.value)}
          />
          <BottomResultBox />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
