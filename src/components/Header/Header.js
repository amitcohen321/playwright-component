import './Header.css';
import { useContext } from 'react'
import { AppContext } from '../App/App'
import { Button } from '@clickcease/cc-client-components-lib'

function Header() {
  const { isGameRunning, setIsGameRunning,
    setScore, shuffleImage,
    currentCharacter, setCurrentCharacter,
    setCurrentImg, setIsSuccessToasterOpen,
    setIsFailureToasterOpen
  } = useContext(AppContext);

  const handleStartClick = () => {
    setIsGameRunning(true)
    setIsSuccessToasterOpen(false)
    setIsFailureToasterOpen(false)
    shuffleImage()
  }

  const handleStopClick = () => {
    setIsGameRunning(false)
    setIsSuccessToasterOpen(false)
    setIsFailureToasterOpen(false)
    setScore(0)
    setCurrentImg(null)
    setCurrentCharacter(null)
  }

  let buttonStartStop = null;
  if (!isGameRunning && !currentCharacter) {
    buttonStartStop = <Button onClick={() => handleStartClick()} disabled> Start Game </Button>
  } else if (!isGameRunning && currentCharacter) {
    buttonStartStop = <Button onClick={() => handleStartClick()}> Start Game </Button>
  } else if (isGameRunning && currentCharacter) {
    buttonStartStop = <Button onClick={() => handleStopClick()}> Stop Game </Button>
  }

  return (
    <header className="App-header">
      <h3 className="headline"> Cheqbot </h3>
      {buttonStartStop}
    </header>
  );
}


export default Header;