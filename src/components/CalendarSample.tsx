import * as React from 'react';
import { Button, Popover, 
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    PopoverBody, 
    Row, Col} from "reactstrap";
import '../App.css';
import Header from './header';
import MyCalendar from './Calendar/MyCalendar';
import CustomPagination from './CustomPagination';


export interface ICalendarSampleProps
{
  isOk?: boolean;
}
export interface ICalendarSampleState
{
    isOPen: boolean;  
    selectedDate: string;
    pgCurrent: number;
    isDropdownOpen: boolean;
    isSubDropdownOpen: boolean;
}
export default class CalendarSample extends React.Component<ICalendarSampleProps, ICalendarSampleState>{
    private pgSize = 5;
    private pgGroupSize = 5;
    constructor(props: ICalendarSampleProps) { // ️⚡️ does not compile in strict mode
        super(props);
        this.state ={
            isOPen : false,
            selectedDate: '',
            pgCurrent: 1,
            isDropdownOpen: false,
            isSubDropdownOpen: false
        }
      }
    public componentDidMount(){
        console.log('isOpen = ', this.state.isOPen);
    }

    public toggle = () =>{
        this.setState(old=>({isOPen: !old.isOPen}), ()=>{
            console.log('dropdownOpen = ', this.state.isOPen);
        });
    }

    public selectDate = (dtSelected: string) =>{
        this.setState({selectedDate: dtSelected});
        this.toggle();
    }
    public removeSelection = () => {
        this.setState({selectedDate: ''})
    }

    public changePage = (pgCurrent: number) => {
        this.setState({pgCurrent});
    }

    public toggleDropdown = () =>{
        this.setState(old=>({isDropdownOpen: !old.isDropdownOpen}));
    }
    public toggleSubDropdown = () =>{
        this.setState(old=>({isSubDropdownOpen: !old.isSubDropdownOpen}), ()=>{
            if(this.state.isSubDropdownOpen === false){
                this.toggleDropdown();
            }
        });
    }
    public render(){
        const items = [];
        for (let i = 101; i <= 203; i++) {
            items.push(i);
        }
        return(
            <div>
                <Header/>
                <span>
                    <Button
                        className="mr-1"
                        color="secondary"
                        id={"Popover-"}
                        type="button"
                    >
                        {'Select Date'}
                    </Button>
                    &emsp; <Button onClick={this.removeSelection}><div>{this.state.selectedDate}&nbsp;X</div></Button>
                    <Popover
                        placement={'bottom'}
                        isOpen={this.state.isOPen}
                        target={"Popover-"}
                        toggle={this.toggle}
                    >
                        <PopoverBody>
                            <MyCalendar SelectDate={this.selectDate}/>
                        </PopoverBody>
                    </Popover>
                    
                </span>
                <hr/>
                <div>
                    --Pagination example --
                    <p><br/></p>
                    <>
                        <Row>
                            <Col>
                                {
                                    items.slice( (this.state.pgCurrent-1) * this.pgSize, this.state.pgCurrent * this.pgSize).map((item, key) => {
                                        return (
                                            <li key={key} className='list-group-item'> &emsp;&emsp;&emsp;item : {item}</li>
                                        )
                                    })
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                &emsp;
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CustomPagination  totalItems = {items.length}  pgSize = {this.pgSize} pgGroupSize={this.pgGroupSize} onChangePage = {this.changePage} />
                            </Col>
                        </Row>
                    </>
                    <p><br/></p>
                </div>
                <hr/>
                <div>
                --Multilevel dropdown --
                    <p><br/></p>
                    <div className='form-inline'>
                                &emsp;&emsp;
                        <UncontrolledDropdown isOpen={this.state.isDropdownOpen} className='custom-dropdown'>
                            <DropdownToggle caret = {true} onClick={this.toggleDropdown} className='custom-dropdown'>
                                All
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={this.toggleDropdown} className='custom-subdropdown custom-dropdown-item'>All</DropdownItem>
                                <DropdownItem onClick={this.toggleDropdown} className='custom-subdropdown custom-dropdown-item'>Name</DropdownItem>
                                <DropdownItem onClick={this.toggleDropdown} className='custom-subdropdown custom-dropdown-item'>Tag</DropdownItem>
                                <DropdownItem onClick={this.toggleSubDropdown} className='custom-subdropdown custom-dropdown-item'>
                                    <UncontrolledDropdown direction='right' isOpen={this.state.isSubDropdownOpen}  className='custom-subdropdown'>
                                        <DropdownToggle caret = {true} className='custom-subdropdown'>
                                            Label
                                        </DropdownToggle>
                                        <DropdownMenu onClick={this.toggleSubDropdown}>
                                            <DropdownItem header ={true} className='custom-subdropdown-item'>
                                                <div > 
                                                    all labels here 
                                                    <p><br/></p>
                                                    <Button onClick={this.toggleSubDropdown}> OK </Button>
                                                </div>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                    
                    <p><br/></p>
                </div>
            </div>
        );
    }
}