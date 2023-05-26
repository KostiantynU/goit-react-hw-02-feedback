import React, { Component } from 'react';
import styled from 'styled-components';
import { FeedBackForm } from './FeedBackForm';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  changeValue = evt => {
    const { name: typeOfMood } = evt.target;
    this.setState((prevState, props) => {
      return {
        [typeOfMood]: prevState[typeOfMood] + 1,
      };
    });
  };
  render() {
    return (
      <MainSection>
        <FeedBackForm changeValue={this.changeValue} />
        <Statistics data={this.state} />
      </MainSection>
    );
  }
}

const MainSection = styled.section`
  padding: 20px;
  height: 90vh;
`;
