import { useState } from 'react';
import { Section, FeedbackOptions, Statistics, Notification } from 'components';
import interfaceInfo from "../../backend/interfaceInfo.json";

const { headerBtn, headerStat, buttons, message } = interfaceInfo;

export const App = () => {
  const [good, setDood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleUpdate = (event) => {
    const { target: { textContent } } = event;
    const normalizedItem = textContent.toLowerCase();

    switch (normalizedItem) {
      case 'good':
        return setDood(prevState => prevState + 1);
      case 'neutral':
        return setNeutral(prevState => prevState + 1);
      case 'bad':
        return setBad(prevState => prevState + 1);
      default:
        throw new Error('Unknown action');
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return(
    <>
      <Section title={headerBtn}>
        <FeedbackOptions
          options={buttons}
          onLeaveFeedback={handleUpdate}
        />
      </Section>
      <Section title={headerStat}>
        {
          countTotalFeedback()
              ?
              (<Statistics
                  good = {good}
                  neutral = {neutral}
                  bad = {bad}
                  buttons={buttons}
                  total={countTotalFeedback}
                  positivePercentage={countPositiveFeedbackPercentage}
              />)
              :
              (<Notification message={message} />)
        }
      </Section>
    </>
  );
};