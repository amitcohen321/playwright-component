import './App.css';
import Header from '../Header/Header'
import Window from '../Window/Window'
import Footer from '../Footer/Footer'
import { useState, createContext, useEffect } from 'react'
import CharacterModal from '../CharacterModal/CharacterModal'
import { Button } from '@clickcease/cc-client-components-lib'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

// import images
import bot from '../../images/bot.png';
import human1 from '../../images/human1.jpeg';
import human2 from '../../images/human2.jpeg';
import human3 from '../../images/human3.png';
import human4 from '../../images/human4.png';
import human5 from '../../images/human5.png';
import { Toaster } from '@clickcease/cc-client-components-lib';
import Form from '../Form/Form';

// define context
export const AppContext = createContext(null);

export function App() {
  // state
  const [score, setScore] = useState(0)
  const [currentImg, setCurrentImg] = useState('')
  const [isGameRunning, setIsGameRunning] = useState(false)
  const [isCharacterModalOpen, setIsCharacterModalOpen] = useState(false)
  const [currentCharacter, setCurrentCharacter] = useState(null)
  const [isSuccessToasterOpen, setIsSuccessToasterOpen] = useState(false)
  const [isFailureToasterOpen, setIsFailureToasterOpen] = useState(false)

  // methods
  const shuffleImage = () => {
    const images = [bot, human1, human2, human3, human4, human5];
    const randomIndex = Math.floor(Math.random() * images.length);

    setCurrentImg(images[randomIndex]);
  }

  const handleRestartGame = () => {
    setIsGameRunning(false)
    setIsSuccessToasterOpen(false)
    setIsFailureToasterOpen(false)
    setScore(0)
    setCurrentImg(null)
    setCurrentCharacter(null)
  }

  // state
  const stateValue = {
    score, setScore,
    currentImg, setCurrentImg,
    isGameRunning, setIsGameRunning,
    isCharacterModalOpen, setIsCharacterModalOpen,
    currentCharacter, setCurrentCharacter,
    setIsSuccessToasterOpen,
    setIsFailureToasterOpen,
    shuffleImage
  }

  // effect
  useEffect(() => {
    if (score === 5) {
      setIsGameRunning(false)
      setIsSuccessToasterOpen(true)
      setScore(0)
      setCurrentImg('')
      setCurrentCharacter(null)
    }
  }, [score])

  return (
    <QueryClientProvider client={new QueryClient()}>
      <AppContext.Provider value={stateValue}>
        <div className="App">
          <div className="container">
            <Button onClick={() => handleRestartGame()} className="btn-restart-game"> Restart Game </Button>
            <Toaster text={'You Win!'} isOpen={isSuccessToasterOpen} type={'success'} />
            <Toaster text={'You Lose!'} isOpen={isFailureToasterOpen} type={'failure'} />
            {currentCharacter ? (<div className='avatar-icon'><img src={currentCharacter.avatar} alt="current-character-avatar"></img></div>) : (<></>)}
            <Header />
            <Form></Form>
            <Window />
            {isCharacterModalOpen && <CharacterModal />}
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/> 
    </QueryClientProvider>
  );
}

export default App;