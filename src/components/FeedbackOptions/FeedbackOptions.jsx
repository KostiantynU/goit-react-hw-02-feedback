import React from 'react';
import { FeedbackOptionsStyled, Title, FeedbackBtn } from './FeedbackOptionsStyled';
import PropTypes from 'prop-types';
export function FeedbackOptions(props) {
  const { array, onLeaveFeedback } = props;
  return (
    <FeedbackOptionsStyled>
      <Title>Please leave feedback</Title>
      {array.map(el => {
        return (
          <FeedbackBtn type="button" key={el} onClick={() => onLeaveFeedback(el)}>
            {el}
          </FeedbackBtn>
        );
      })}
      {/* <FeedbackBtnGood type="button" name="good" onClick={onLeaveFeedback}>
        Good
      </FeedbackBtnGood>
      <FeedbackBtnNeutral type="button" name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </FeedbackBtnNeutral>
      <FeedbackBtnBad type="button" name="bad" onClick={onLeaveFeedback}>
        Bad
      </FeedbackBtnBad> */}
    </FeedbackOptionsStyled>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  array: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
