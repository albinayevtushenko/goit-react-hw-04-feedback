import { Notification } from './Notification';
import PropTypes from 'prop-types';

export const Statistics = ({ good, bad, neutral, total, percentage }) => {
  return total ? (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {percentage} %</li>
    </ul>
  ) : (
    <Notification message="There is no feedback" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.string.isRequired,
};
