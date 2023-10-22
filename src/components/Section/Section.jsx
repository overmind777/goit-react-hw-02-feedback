import { StyledSection } from './StyledSection';

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <h1>{title}</h1>
      {children}
    </StyledSection>
  );
};

export default Section;
