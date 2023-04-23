import "./Alert.css";
import data from './data';

const Alert = ({ message, onClose, type }) => {
  const alertData = data.find(item => item.type === type);
  console.log(alertData);
  const Icon = alertData.icon;

  return (
    <div className={`alert ${type}-alert`}>
      <div>
        <Icon />
        <h4>{message}</h4>
      </div>
      <span onClick={onClose} className="close">&times;</span>
    </div>
  );
};

export default Alert;
