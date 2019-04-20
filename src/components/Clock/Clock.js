import React, {Component} from 'react';
import {connect} from "react-redux";
import * as ClockActions from '../../store/actions/clock';

class Clock extends Component {

    tick = () => {
        var date = new Date();
        this.props.updateClock(date);
    };

    /**
     * Lifecycle Methods
     */
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    /**
     * Lifecycle Methods
     */
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        let {date} = this.props;
        return (
            <h1>{date.toString()}</h1>
        );
    }
}


const mapStateToProps = state => ({
    date: state.date.date,
});

const mapDispatchToProps = dispatch => ({
    updateClock: (date) => dispatch(ClockActions.updateClock(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clock);