import { StyledFeedback, StyledButton } from './StyledFeedbackOptions';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <StyledFeedback>
        {options.map(option => {
          return (
            <li key={option}>
              <StyledButton onClick={() => onLeaveFeedback(option)}>
                {option}
              </StyledButton>
            </li>
          );
        })}
      </StyledFeedback>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
