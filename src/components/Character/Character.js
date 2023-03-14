import './Character.css';
import React, { useContext } from "react";
import { AppContext } from '../App/App'

const Character = ({ character }) => {
  const { setCurrentCharacter, setIsCharacterModalOpen } = useContext(AppContext)

  const handleCharacterChosen = () => {
    setCurrentCharacter(character)
    setIsCharacterModalOpen(false)
  }

  return (
    <div className='character-cont' onClick={() => { handleCharacterChosen() }}>
      <img className='character-avatar' src={character.avatar} alt="character-avatar"></img>
      <p>{character.first_name} {character.last_name}</p>
    </div>
  );
};

export default Character;