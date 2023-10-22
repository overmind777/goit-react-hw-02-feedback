import Notification from '../Notificat/Notification';
import { StyledStatistics } from './StyledStatistics';

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
