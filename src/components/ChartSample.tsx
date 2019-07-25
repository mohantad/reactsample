import * as React from 'react';
import {Pie} from 'react-chartjs-2';
import Header from './header';


export default class ChartSample extends React.Component {
    public render() {
        const data = {
            datasets: [{
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                    ],
                data: [300, 50, 100],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }],
            labels: [
                'Red',
                'Green',
                'Yellow'
            ]
        };
        
        return (<div className="App">
            <Header/>
            <h2>Pie Example</h2>
        <Pie data={data} height={100} width={100} options={{
		maintainAspectRatio: false
	}} />
            </div>
        )
    };
}