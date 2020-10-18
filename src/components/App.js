import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';


export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    options = [
        "good", "neutral", "bad"
    ]

    handleFeedBack = (id) => {
        this.setState(prevState => {
            return {
                [id]: prevState[id] + 1
            }
        })
    }

    countTotalFeedback() {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage() {
        const total = this.countTotalFeedback();
        return total === 0 ? 0 : (this.state.good / total * 100).toFixed(1);
    }

    render() {
        const isFeedBack = this.countTotalFeedback();

        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={this.options} onLeaveFeedback={this.handleFeedBack} />
                </Section>

                <Section title="Statistics">
                    {isFeedBack ?
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}>
                        </Statistics> :
                        <Notification message="No feedback given"></Notification>}
                </Section>
            </div>
        )
    }
}