import React, { useState, useEffect, useMemo } from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import {userData} from '../../dummyData.js'
import './home.css'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import { userReq } from '../../request'
function Home() {
    const [usersStats, setUsersStats] = useState([]);
    const MONTHS = useMemo(
        ()=>[
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12",
    ],[])
    useEffect(()=>{
        const getStats = async () =>{
            try{
                const res = await userReq.get('users/stats')
                const list = res.data.sort((a,b) => {
                    return a._id - b._id
                })
                list.map((item) =>{
                    setUsersStats((prev) =>[
                        ...prev,
                        { name: MONTHS[item._id - 1], "Tài khoản mới": item.total }
                    ])
                })
            }catch{}
        }
        getStats();
    },[MONTHS]);
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={usersStats} title="Thống kê tài khoản mới" grid dataKey="Tài khoản mới"/>
            <div className="homeWidget">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home
