import { FC, useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { FaTrophy } from 'react-icons/fa';
import AddScorePopup from './AddScorePopup';
import './styles/Leaderboard.css';  

interface Score {
  username: string;
  amount: string;
  time: string;
}

const Leaderboard: FC = () => {
  const scores = useSelector((state: RootState) => state.leaderboard.scores);
  const [showPopup, setShowPopup] = useState(false);
  const [newEntryIndex, setNewEntryIndex] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const handleAddScore = () => {
    setShowPopup(true);
  };

  const handleClosePopup = (newScore: Score | null) => {
    setShowPopup(false);
    if (newScore) {
      const newIndex = scores.findIndex(
        (score: Score) => score.username === newScore.username && score.time === newScore.time
      );
      if (newIndex !== -1) {
        setNewEntryIndex(newIndex);
      }
    }
  };

  useEffect(() => {
    if (newEntryIndex !== null && listRef.current) {
      const listItem = listRef.current.children[newEntryIndex];
      listItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setNewEntryIndex(null);
    }
  }, [newEntryIndex]);

  return (
    <div className="leaderboard">
      <h1>FASTEST OF TODAY <FaTrophy /></h1>
      <button className="add-score-button" onClick={handleAddScore}>Add Score</button>
      <div className="leaderboard-header">
        <span>Name</span>
        <span>Amount</span>
        <span>Time</span>
      </div>
      <ul ref={listRef}>
        {scores.map((score: Score, index: number) => (
          <li key={index} className={`rank-${index + 1}`}>
            <span>{index + 1}. {score.username}</span>
            <span>{score.amount}</span>
            <span>{score.time}</span>
          </li>
        ))}
      </ul>
      {showPopup && <AddScorePopup onClose={handleClosePopup} />}
      
      <div className="footer-container">
        <div className="footer-content"> 
            <p>Get your name on leader board win exicting prizes.</p>
            </div>
      </div>
    </div>
  );
};

export default Leaderboard;
