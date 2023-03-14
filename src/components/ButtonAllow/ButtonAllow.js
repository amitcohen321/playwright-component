import './ButtonAllow.css';
import { useContext } from 'react'
import { AppContext } from '../App/App'

function ButtonAllow(props) {
  const { shuffleImage } = useContext(AppContext);
  const { score, setScore } = useContext(AppContext);

  const handleAllowClick = () => {
    if (props.currentImg.includes('bot')) {
      props.setIsGameRunning(false);
      window.alert('You Lose!')
    } else {
      setScore(score + 1);
      shuffleImage();
    }
  }

  const buttonAllow = props.isGameRunning ?
    (<button className='button-allow' onClick={handleAllowClick}> Allow </button>) :
    (<button className='button-allow' onClick={handleAllowClick} disabled> Allow </button>)

  return (
    <>
      {buttonAllow}
    </>
  );
}

export default ButtonAllow;
