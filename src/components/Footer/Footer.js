// import ButtonAllow from '../ButtonAllow/ButtonAllow'
// import ButtonBlock from '../ButtonBlock/ButtonBlock'
import Score from '../Score/Score'
import './Footer.css';
import { useContext } from 'react'
import { AppContext } from '../App/App'
import { Button } from '@clickcease/cc-client-components-lib'

function Footer() {
  const { isGameRunning, setIsGameRunning, score, setScore, currentImg, shuffleImage, setIsFailureToasterOpen, setCurrentImg, setCurrentCharacter } = useContext(AppContext);

  const handleAllowClick = () => {
    if (currentImg.includes('bot')) {
      setIsFailureToasterOpen(true)
      setIsGameRunning(false);
      setScore(0)
      setCurrentImg('')
      setCurrentCharacter(null)
    } else {
      setScore(score + 1);
      shuffleImage();
    }
  }

  const handleBlockClick = () => {
    if (currentImg.includes('bot')) {
      setScore(score + 1);
      shuffleImage();
    } else {
      setIsFailureToasterOpen(true)
      setIsGameRunning(false);
      setScore(0)
      setCurrentImg('')
      setCurrentCharacter(null)
    }
  }

  return (
    <footer>
      <div className="controls">
        <div className='score-board'>
          {isGameRunning ?
            (
              <>
                <Button onClick={() => handleAllowClick()} text={'Allow'}></Button>
                <Score score={score} />
                <Button onClick={() => handleBlockClick()} text={'Block'}></Button>
              </>
            )
            :
            (
              <>
                <Button onClick={() => handleAllowClick()} text={'Allow'} disabled></Button>
                <Score score={score} />
                <Button onClick={() => handleBlockClick()} text={'Block'} disabled></Button>
              </>
            )
          }
        </div>
      </div>
    </footer>
  );
}

export default Footer;
