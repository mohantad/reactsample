import * as React from 'react';
import '../App.css';
import Header from './header';
import MyCalendar from './Calendar/MyCalendar';


export default class CalendarSample extends React.Component{
    // public componentDidMount(){
    // }
    public render(){
        
        return(
            <div>
                <Header/>
                <MyCalendar/>
            </div>
        );
    }
}