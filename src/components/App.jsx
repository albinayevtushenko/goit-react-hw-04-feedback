import { useState } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Section } from './Feedback/Section';
import { Statistics } from './Feedback/Statistics/Statistics';
import { Container } from './Container.styled';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const leaveFeedback = options => {
    setState(prevState => {
      return {
        ...prevState,
        [options]: prevState[options] + 1,
      };
    });
  };

  const { good, bad, neutral } = state;
  const total = good + bad + neutral;

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    return total ? Number((good * 100) / total).toFixed(0) : '';
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <Feedback onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics
          total={total}
          percentage={countPositiveFeedbackPercentage()}
          good={good}
          bad={bad}
          neutral={neutral}
        />
      </Section>
    </Container>
  );
};

export default App;
