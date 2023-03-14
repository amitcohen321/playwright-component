import "./CharacterModal.css";
import Character from "../Character/Character";
import { useFetchCharactersData } from "../../hooks/useFetchCharactersData";

const CharacterModal = () => {
  const onSuccess = (data) => {
    console.log('query success', data);
  }

  const onError = (error) => {
    console.log('query fail', error);
  }

  const { isLoading, data: characters, isError, error, refetch } = useFetchCharactersData(onSuccess, onError);

  return (
    <div className="character-modal">
      {isLoading ? (<div>Loading...</div>) :
        (
          <div>
            <h1> Choose Your Character </h1>
            {isError ? (<div> {error.message} </div>) : (<div className="characters-list">
              {characters.map((character) => (<Character key={character.id} character={character} />))}
            </div>)}
            <button onClick={refetch}> Refetch Characters </button>
          </div>
        )}
    </div>
  );
};

export default CharacterModal;
