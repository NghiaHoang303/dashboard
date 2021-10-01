import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
import {userData} from '../../DummyData.js'
import WidgetSm from '../../components/widget/widgetSm/WidgetSm'
import WidgetLg from '../../components/widget/widgetLg/WidgetLg'
export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart className='chart' 
                data={userData} title="User Analytics" 
                grid dataKey2="Active User" dataKey1="Active Sales"
            />

            <div className="widget">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
