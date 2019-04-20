import React, {Component} from 'react';
import * as ClockActions from "../../store/actions/clock";
import {connect} from "react-redux";

class Date extends Component {
    render() {
        let {date} = this.props;
        return (
            <h3>A data: {date.toString()}</h3>
        )
    }
}

const mapStateToProps = state => ({
    date: state.date.date,
});

const mapDispatchToProps = dispatch => ({
    updateClock: (date) => dispatch(ClockActions.updateClock(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Date);