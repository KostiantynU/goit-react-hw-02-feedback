import React, { Component } from 'react';
import { MainSection, NotificationMessage } from './AppStyled';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = evt => {
    const { name: typeOfMood } = evt.target;
    this.setState(prevState => {
      return {
        [typeOfMood]: prevState[typeOfMood] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return ((good / (neutral + bad)) * 100).toFixed() + '%';
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <MainSection>
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        {good === 0 && neutral === 0 && bad === 0 ? (
          <NotificationMessage>There is no feedback</NotificationMessage>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            avarage={this.countPositiveFeedbackPercentage}
          />
        )}
      </MainSection>
    );
  }
}
