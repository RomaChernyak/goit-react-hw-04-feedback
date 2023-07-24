import React, { Component } from 'react';
import { Section, FeedbackOptions, Statistics, Notification } from 'components';
import interfaceInfo from "../../backend/interfaceInfo.json";

const { headerBtn, headerStat, buttons, message } = interfaceInfo;

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const sum = good + neutral + bad;
    
    if (sum === 0) {
      return 0;
    }

    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const result = Math.round((good / this.countTotalFeedback()) * 100);
    
    if (!result) {
      return 0;
    }

    return result;
  };

  handleUpdate = (event) => {
    const { target: { textContent } } = event;
    const propNameLowercased = textContent.toLowerCase();

    this.setState(prevState => ({
        // console.dir(prevState)
        [propNameLowercased]: prevState[propNameLowercased] + 1,
    }));
  };
  
  render() {
    return(
      <>
        <Section title={headerBtn}>
          <FeedbackOptions
            options={buttons}
            onLeaveFeedback={this.handleUpdate}
          />
        </Section>
        <Section title={headerStat}>
          {
            this.countTotalFeedback()
                ?
                (<Statistics
                    state={this.state}
                    buttons={buttons}
                    total={this.countTotalFeedback}
                    positivePercentage={this.countPositiveFeedbackPercentage}
                />)
                :
                (<Notification message={message} />)
          }
        </Section>
      </>
    );
  }
};