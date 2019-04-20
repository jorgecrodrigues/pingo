import React, {Component} from 'react';
import Date from '../components/Date/Date';
import Clock from '../components/Clock/Clock';

export default class Home extends Component {
    render() {
        return (
            <main>
                <Date/>
                <hr/>
                <Clock/>
            </main>
        )
    }
}