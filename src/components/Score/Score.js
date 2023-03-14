import './Score.css';
import { useContext } from 'react'
import { AppContext } from '../App/App'

function Score() {
  const { score } = useContext(AppContext);

  return (
    <div>
      <b><span>{score}</span> / <span>5</span></b>
    </div>
  );
}

export default Score;
