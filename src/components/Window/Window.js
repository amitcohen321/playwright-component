import './Window.css';
import { useContext } from 'react'
import { AppContext } from '../App/App'

function Window() {
  const { currentImg } = useContext(AppContext);
  const { setIsCharacterModalOpen } = useContext(AppContext);

  const content = currentImg ? (<img className="visitor-img" src={currentImg} alt="visitor"></img>) : (<h2> Choose your Character </h2>)
  const handleOpenCharacterModal = () => {
    setIsCharacterModalOpen(true)
  }

  return (
    <div className="window">
      <div className="visitor-container" onClick={() =>  handleOpenCharacterModal()}>
        {content}
      </div>
    </div>
  );
}

export default Window;
