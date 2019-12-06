import * as React from 'react';
import { Pagination, PaginationItem, PaginationLink, Row, Col} from 'reactstrap';
import '../App.css';

export interface ICustomPaginationProps {
    totalItems: number;
    pgSize: number;
    pgGroupSize: number;
    onChangePage: (pgCurrent: number) => void;
}
export interface ICustomPaginationState {
    pages: number[];
    pgCurrent: number;
    pgGroupCurrent: number;
    pgGroupStart: number;
    pgGroupEnd: number;
}
export class CustomPagination extends React.Component<ICustomPaginationProps, ICustomPaginationState>{
    constructor(props: ICustomPaginationProps) { // ️⚡️ does not compile in strict mode
        super(props);
        this.state = {
            pages: [],
            pgCurrent: 1,
            pgGroupCurrent: 1,
            pgGroupStart: 0,
            pgGroupEnd: 0 + this.props.pgGroupSize
        }
    }
     public componentWillMount(){
        const pages = [];
        const pgTotal = Math.ceil(this.props.totalItems / this.props.pgSize);
        for (let i = 1; i <= pgTotal; i++) {
            pages.push(i);
        }
        this.setState({pages});
    }

    public componentWillReceiveProps(nextProps: ICustomPaginationProps){
        if(this.props.totalItems !== nextProps.totalItems){
            const pages = [];
            const pgTotal = Math.ceil(nextProps.totalItems / this.props.pgSize);
            for (let i = 1; i <= pgTotal; i++) {
                pages.push(i);
            }
            this.setState({pages});
        }
    }
    

    public onChangePage = (dir: string) => {
        const pgTotal = Math.ceil(this.props.totalItems / this.props.pgSize);
        switch (dir) {
            case 'first': {
                this.setState({ pgCurrent: 1 }, ()=>{
                    this.rearrangePageGroup();
                });
            }
                break;
            case 'prev': {
                if (this.state.pgCurrent > 1) {
                    this.setState({ pgCurrent: this.state.pgCurrent - 1}, ()=>{
                        this.rearrangePageGroup();
                    });
                }
            }
                break;
            case 'next': {
                if (this.state.pgCurrent < pgTotal) {
                    this.setState({ pgCurrent: this.state.pgCurrent + 1}, ()=>{
                        this.rearrangePageGroup();
                    });
                }
            }
                break;
            case 'last': {
                this.setState({ pgCurrent: pgTotal }, ()=>{
                    this.rearrangePageGroup();
                });
            }
                break;
            default: {
                this.setState({ pgCurrent: +dir }, ()=>{
                    this.rearrangePageGroup();
                });
            }
                break;
        }
    }

    public rearrangePageGroup = () =>{
        const pgGroupCurrent = Math.ceil(this.state.pgCurrent / this.props.pgGroupSize)
        const pgGroupStart = (pgGroupCurrent-1) * this.props.pgGroupSize;
        const pgGroupEnd = pgGroupCurrent * this.props.pgGroupSize;
        this.setState({pgGroupStart, pgGroupEnd, pgGroupCurrent});
        this.props.onChangePage(this.state.pgCurrent);
    }

    public render() {
        return (
            <>
                <Row>
                    <Col xs='auto'  sm='auto'  md='auto'  lg='auto'  xl='auto'>
                        <PaginationLink disabled={true} className={'pagination-item form-inline'}>Pages : {this.state.pgCurrent} / {this.state.pages.length} (Total records: {this.props.totalItems})</PaginationLink>
                    </Col>
                    <Col>
                        <Pagination aria-label="Page navigation">
                            <PaginationItem>
                                <PaginationLink  disabled={this.state.pgCurrent === 1}  first={true} onClick={() => { this.onChangePage('first'); }} />
                            </PaginationItem>
                            <PaginationItem >
                                <PaginationLink disabled={this.state.pgCurrent === 1} previous={true} onClick={() => { this.onChangePage('prev'); }} />
                            </PaginationItem>
                            {
                                this.state.pages.slice( this.state.pgGroupStart, this.state.pgGroupEnd).map((pgNo, key) => {
                                    return (
                                        <PaginationItem active={pgNo === this.state.pgCurrent} key={key}>
                                            <PaginationLink onClick={() => { this.onChangePage(pgNo.toString()); }} >
                                                {pgNo}
                                            </PaginationLink>
                                        </PaginationItem>
                                    )
                                })
                            }
                            <PaginationItem>
                                <PaginationLink disabled={this.state.pgCurrent === this.state.pages.length} next={true} onClick={() => { this.onChangePage('next'); }} />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink  disabled={this.state.pgCurrent === this.state.pages.length}  last={true} onClick={() => { this.onChangePage('last'); }} />
                            </PaginationItem>
                        </Pagination>
                    </Col>
                </Row>
            </>
        );
    }
}