import  { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScore, Score } from '../redux/leaderboardSlice';
import '../Components/styles/AddScorePopup.css';

interface Props {
  onClose: (newScore: Score | null) => void;
}

const AddScorePopup: FC<Props> = ({ onClose }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [amount, setAmount] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    if (username && amount && time) {
      const newScore = { username, amount, time };
      dispatch(addScore(newScore));
      onClose(newScore);
    } else {
      onClose(null);
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Add Score</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="MM:SS::MSS"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={() => onClose(null)}>Close</button>
      </div>
    </div>
  );
};

export default AddScorePopup;
