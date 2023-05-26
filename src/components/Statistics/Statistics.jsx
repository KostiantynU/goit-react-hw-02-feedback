import React, { Component } from 'react';
import { StatisticSection, Paragraph } from './StatisticsStyled';
export { Statistics };

class Statistics extends Component {
  render() {
    // console.log(this.props);
    const {
      data: { good, neutral, bad },
    } = this.props;
    // console.log(good, neutral, bad);
    return (
      <StatisticSection>
        <h3>Statistics</h3>
        <Paragraph>Good: {good}</Paragraph>
        <Paragraph>Neutral: {neutral}</Paragraph>
        <Paragraph>Bad: {bad}</Paragraph>
      </StatisticSection>
    );
  }
}
