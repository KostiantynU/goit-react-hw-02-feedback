import React, { Component } from 'react';
import { StatisticSection, Paragraph, Hthree } from './StatisticsStyled';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    const { avarage, total, good, neutral, bad } = this.props;
    return (
      <StatisticSection>
        <Hthree>Statistics</Hthree>
        <Paragraph>Good: {good}</Paragraph>
        <Paragraph>Neutral: {neutral}</Paragraph>
        <Paragraph>Bad: {bad}</Paragraph>
        <Paragraph>Total: {total()}</Paragraph>
        <Paragraph>Positive feedback: {avarage()}</Paragraph>
      </StatisticSection>
    );
  }
}
Statistics.propTypes = {
  avarage: PropTypes.func,
  total: PropTypes.func,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
