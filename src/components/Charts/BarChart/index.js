import React from 'react';
import './index.scss';

class BarChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [10, 20, 30, 40, 50, 60, 70],
            labels: ['January', 'February', 'March', 'Arpil', 'May', 'June', 'July']
        };
        this.height = 250;
        this.width = 420;
        this.maxWidth = Math.max.apply(null, this.state.data);
        console.log(' this.maxWidth ',  this.maxWidth );
        
    }

    getPostionX() {
        return 9.5;
    }

    getPositionY = (i) => {
        return 45 + (i) * 30;
    }

    getHeight = (index) => {
        return ((this.height - (this.state.data.length * 10)) / this.state.data.length);
    }

    getYPosition = (index) => {
        return !index ? 0 : ( index == 1 ? this.getHeight() + 10 : this.getYPosition(index-1) + this.getHeight() + 10 );
    }
    getWidth = (elem) => {
        return elem / this.maxWidth * this.width;
    }
    render() {
        const { data } = this.state;
        return(<svg className="chart" width={this.width} height={this.height} aria-labelledby="title desc" role="img">
                    <title id="title">A bar chart showing information</title>
                    <desc id="desc">4 apples; 8 bananas; 15 kiwis; 16 oranges; 23 lemons</desc>
                   {
                        data.map( (elem, index)=> {
                            return(<g key={index} className="bar bar-space" stroke="red" strokeWidth="0.5">
                                    <rect 
                                        width={this.getWidth(elem)}
                                        height={this.getHeight()}
                                        y={this.getYPosition(index)}>
                                    </rect>
                                    {/* <text x={this.getPositionY(index)} y={this.getPostionX()} dy=".35em">4 apples</text> */}
                                </g>) 
                        })
                    }
            </svg>)
    }
}

export default BarChart;