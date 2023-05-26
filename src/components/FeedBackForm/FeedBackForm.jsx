import React, { Component } from 'react';
import {
  FeedBackFormStyled,
  FeedbackBtnGood,
  FeedbackBtnNeutral,
  FeedbackBtnBad,
} from './FeedBackFormStyled';
export { FeedBackForm };
class FeedBackForm extends Component {
  render() {
    const { changeValue } = this.props;
    return (
      <FeedBackFormStyled>
        <h2>Please leave feedback</h2>
        <FeedbackBtnGood type="button" name="good" onClick={evt => changeValue(evt)}>
          Good
        </FeedbackBtnGood>
        <FeedbackBtnNeutral type="button" name="neutral" onClick={changeValue}>
          Neutral
        </FeedbackBtnNeutral>
        <FeedbackBtnBad type="button" name="bad" onClick={changeValue}>
          Bad
        </FeedbackBtnBad>
      </FeedBackFormStyled>
    );
  }
}
