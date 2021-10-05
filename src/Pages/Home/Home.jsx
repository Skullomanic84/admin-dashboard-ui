import React from 'react'
import './Home.css';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import Chart from '../../components/Chart/Chart';
import { data } from '../../dummyData'
import Widgetsmall from '../../components/Widgetsm/Widgetsmall';
import WidgetLarge from '../../components/Widgetlg/WidgetLarge';

function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={data} grid title="Sales Analytic" dataKey= "sales revenue cost"/>
            <div className="userWidgets">
                <Widgetsmall />
                <WidgetLarge />
            </div>
        </div>
    )
}

export default Home
