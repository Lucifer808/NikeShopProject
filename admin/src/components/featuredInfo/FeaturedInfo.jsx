import React from 'react'
import './featuredInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,123</span>
                    <span className="featuredMoneyRate">
                    -12,13
                    <ArrowDownwardIcon className="featuredIcon negative"></ArrowDownwardIcon>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,123</span>
                    <span className="featuredMoneyRate">
                    -10,13
                    <ArrowDownwardIcon className="featuredIcon negative"></ArrowDownwardIcon>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,123</span>
                    <span className="featuredMoneyRate">
                    12,13
                    <ArrowUpwardIcon className="featuredIcon"></ArrowUpwardIcon>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
