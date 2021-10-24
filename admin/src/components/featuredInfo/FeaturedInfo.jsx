import React, {useState, useEffect} from 'react'
import './featuredInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { userReq } from '../../request';
function FeaturedInfo() {
    const [income,setIncome] = useState([]);
    const [percent,setPercent] = useState(0);
    useEffect(() => {
        const getIncome = async () =>{
            try{
                const res = await userReq.get('orders/income');
                setIncome(res.data);
                setPercent(((res.data[0].total*100) / (res.data[1].total-100)));
            }catch{}
        }
        getIncome();
    },[])
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Doanh thu</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{income[0]?.total.toLocaleString()} VND</span>
                    <span className="featuredMoneyRate">
                    {Math.floor(percent)}%
                    {percent<0 ?
                    <ArrowDownwardIcon className="featuredIcon negative"></ArrowDownwardIcon>
                    : <ArrowUpwardIcon className="featuredIcon"></ArrowUpwardIcon>
                    }
                    </span>
                </div>
                <span className="featuredSub">So với tháng trước</span>
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
