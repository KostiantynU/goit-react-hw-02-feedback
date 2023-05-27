import React, { Component } from 'react';
import {
  FeedbackOptionsStyled,
  Htwo,
  FeedbackBtnGood,
  FeedbackBtnNeutral,
  FeedbackBtnBad,
} from './FeedbackOptionsStyled';
export { FeedbackOptions };
class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;

    return (
      <FeedbackOptionsStyled>
        <Htwo>Please leave feedback</Htwo>
        <FeedbackBtnGood type="button" name="good" onClick={onLeaveFeedback}>
          Good
        </FeedbackBtnGood>
        <FeedbackBtnNeutral type="button" name="neutral" onClick={onLeaveFeedback}>
          Neutral
        </FeedbackBtnNeutral>
        <FeedbackBtnBad type="button" name="bad" onClick={onLeaveFeedback}>
          Bad
        </FeedbackBtnBad>
      </FeedbackOptionsStyled>
    );
  }
}
