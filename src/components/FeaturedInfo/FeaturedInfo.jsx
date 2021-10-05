import React from 'react';
import './FeaturedInfo.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,398.60</span>
                    <span className="featuredMoneyRate negativeRate">-11.4 <ArrowDownward /></span>   
                </div>
                <span className="featureSub">Compared to last month</span>
            </div>
            
            {/* second card section */}
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$398.48</span>
                    <span className="featuredMoneyRate negativeRate">-24.69 <ArrowDownward /></span>
                </div>
                <span className="featureSub">Compared to last month</span>
            </div>
           
            {/* third card section */}
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$5,908.60</span>
                    <span className="featuredMoneyRate positiveRate">+56.70 <ArrowUpward /></span>
                </div>
                <span className="featureSub">Compared to last month</span>
            </div>
           
        </div>

        
    )
}

export default FeaturedInfo
