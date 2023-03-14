import './ButtonBlock.css';
import { useContext } from 'react'
import { AppContext } from '../App/App'

function ButtonBlock(props) {
  const { shuffleImage } = useContext(AppContext);
  const { score, setScore } = useContext(AppContext);

  const handleBlockClick = () => {  
    if (props.currentImg.includes('bot')) {
      setScore(score + 1);
      shuffleImage();
    } else {
      props.setIsGameRunning(false);
      window.alert('You Lose!')
    }
  }

  const buttonBlock = props.isGameRunning ?
    (<button className='button-block' onClick={() => handleBlockClick()}> Block </button>) :
    (<button className='button-block' onClick={() => handleBlockClick()} disabled> Block </button>)
    
  return (
    <>
      {buttonBlock}
    </>
  );
}

export default ButtonBlock;
