import React from 'react';
import Card from './../../components/Card';
import BarChart from './../../components/Charts/BarChart';
import './index.scss';

class Dashboard extends React.Component {
    render() {
        return(<div>
                <div className="chart-container">
                    <Card>
                        <BarChart />
                    </Card>
                </div>
                
        </div>)
    }
}

export default Dashboard;