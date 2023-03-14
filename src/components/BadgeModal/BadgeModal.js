import './BadgeModal.css';
import badge from '../../images/cheq-logo.png';

function BadgeModal() {
  return (
    <div className="modal-container">
      <div className="badge">
        <img className="badge-img" src={badge} alt="badge"></img>
      </div>
    </div>
  );
}

export default BadgeModal;
