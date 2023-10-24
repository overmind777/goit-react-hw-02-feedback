import Notification from '../Notificat/Notification';
import { StyledStatistics } from './StyledStatistics';
import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback = 0,
  countPositiveFeedbackPercentage = 0,
}) => {
  return countTotalFeedback ? (
    <>
      <StyledStatistics>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>total: {countTotalFeedback}</li>
        <li>Positive feedback: {countPositiveFeedbackPercentage} %</li>
      </StyledStatistics>
    </>
  ) : (
    <Notification msg="There is no feedback" />
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number,
  countPositiveFeedbackPercentage: PropTypes.number,
};
