import { StyledFeedback, StyledButton } from './StyledFeedbackOptions';

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
