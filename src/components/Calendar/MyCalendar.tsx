import * as React from 'react';
import * as moment from 'moment-timezone';
import './MyCalendar.css';

const asOfDateArr: string[] =['2019-07-05', '2019-07-15', '2019-07-19'];
export default class MyCalendar extends React.Component {
    public state = {
        dateContext: moment(),
        yearEditVisible: false
    }
    public yearInput: any;

    private weekDays = moment.weekdaysShort().map((d, k) => {
        return (
            <td key={d}>{d}</td>
        )
    });

    constructor(props: any) {
        super(props);
    }
   
    public allowToEditYear = () => {
        this.setState({
            yearEditVisible: true
        });
    }
    public onKeyUpYear = (e:any) => {
        if (e.which === 13 || e.which === 27) {
            this.setYear(e.target.value);
            this.setState({
                yearEditVisible: false
            })
        }
    }
    public onBlurYear = (e:any) => {
        this.setYear(e.target.value);
            this.setState({
                yearEditVisible: false
            })
    }

    public onChangeYear = (e:any) => {
        this.setYear(e.target.value);
        // this.props.onChangeYear && this.props.onChangeYear(e, e.target.value);
    }
    public prevMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month");
        this.setState({dateContext });
        // this.props.onPrevMonth && this.props.onPrevMonth();
    }

    public nextMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).add(1, "month");
        this.setState({dateContext });
        // this.props.onNextMonth && this.props.onNextMonth();
    }
    public currentMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment();
        this.setState({dateContext });
        // this.props.currentMonth && this.props.currentMonth();
    }

    public render() {
        return (
            <div className='mycalendar-container'>
                {this.state.dateContext.daysInMonth()}
                <table>
                    <thead>
                        <tr>
                            <td colSpan={5}>
                            {this.state.dateContext.format("MMMM")}{' '}{this.navYear()}
                            </td>
                            <td colSpan={2}>
                                 <button onClick={(e)=> {this.prevMonth()}}>P</button>
                                 <button onClick={(e)=> {this.currentMonth()}}>C</button>
                                 <button onClick={(e)=> {this.nextMonth()}}>N</button>
                                <i className="prev fa fa-fw fa-chevron-left" onClick={(e)=> {this.prevMonth()}}/>
                                <i className="prev fa fa-fw fa-chevron-right" onClick={(e)=> {this.nextMonth()}}/>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {this.weekDays}
                        </tr>
                        {this.getAllCells()}
                    </tbody>
                </table>
                <br /><hr/><br />
                &emsp;&emsp;<div className='tag-tooltip'>
                    Hover Tool Tip Sample
  <div className='tag-tooltip-text resizable'>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        Parent:
                </td>
                                    <td>
                                        [root]
                </td>
                                </tr>
                                <tr>
                                    <td>
                                        Owners:
                </td>
                                    <td>
                                        [People], [ITEC]
                </td>
                                </tr>
                                <tr>
                                    <td>
                                        Rule:
                </td>
                                    <td>
                                        Rule:xyx@jdjkd.com, jdkd@jkd.com
                </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    private getBlankDays = () => {
        const blankdays = [];
        const startDay: any = moment(this.state.dateContext).startOf('month').format('d');
        for (let i = 0; i < startDay; i++) {
            blankdays.push(<td key={i * 80}>
                {"  "}
            </td>
            );
        }
        return blankdays;
    }

    private hasData=(d: any) =>{
        return (asOfDateArr.indexOf(d)> -1);
    }

    private getCellCSS = (d:any) =>{
        console.log('getCellCSS =', d, moment().format('YYYY-MM-DD'));
        let css: string = 'mycalendar-cell-regular';
        if(d === moment().format('YYYY-MM-DD')){
            css='mycalendar-cell-today';
        } else if (this.hasData(d)){
            css='mycalendar-cell-data';
        }
        return css;
    }

    private processData = (d: any) =>{
        if (!this.hasData(d)){
           return;
        }
        alert('process data for '+ d );
    }

    private getDays = () => {
        const days=[];
        for (let d = 1; d <= this.state.dateContext.daysInMonth(); d++) {
            const dt=('0' + this.state.dateContext.year()).slice(-4)+ '-' +  
                ('0' + (this.state.dateContext.month()+1)).slice(-2) + '-'+ 
                ('0' +d).slice(-2);
            days.push(
                <td key={d}>
                    <span className={this.getCellCSS(dt)} onClick={()=>{this.processData(dt);}}>{d}</span>
                </td>
            );
        }
        return days;
    }

    private getAllCells = () => {
        const totalCells = [...this.getBlankDays(), ...this.getDays()];
        const rows:any = [];
        let cells:any = [];
        totalCells.forEach((cell, i)=>{
            if ((i % 7) !== 0) {
                cells.push(cell);
            }else{
                const newRow = cells.slice();
                rows.push(newRow);
                cells = [];
                cells.push(cell);
            }
            if (i === totalCells.length - 1) {
                const newRow = cells.slice();
                rows.push(newRow);
            }
        })

        const rowEliments = rows.map((r:any, i:any)=>{
            return (
                <tr key={i*100}>
                    {r}
                </tr>
            );
        });

        return rowEliments;
    }

    private navYear = () => {
        return (
            this.state.yearEditVisible ?
            <input
                defaultValue = {this.state.dateContext.format("Y")}
                className="mycalendar-header-year"
                ref={(yearInput) => { this.yearInput = yearInput}}
                onKeyUp= {(e) => this.onKeyUpYear(e)}
                onChange = {(e) => this.onChangeYear(e)}
                onBlur={(e) => this.onBlurYear(e)}
                type="number"
                placeholder="year"/>
            :
            <span
                className="mycalendar-header-year"
                onClick={(e)=> { this.allowToEditYear()}}>
                {this.state.dateContext.format("Y")}
            </span>
        );
    }

    private setYear = (year:any) => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("year", year);
        this.setState({dateContext});
    }

}