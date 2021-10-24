import React, {useState, useEffect} from 'react';
import { userReq } from '../../request';
import { format } from 'timeago.js';
import './widgetLg.css'
function WidgetLg() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const getOrders = async () =>{
            try{
                const res = await userReq.get('orders');
                setOrders(res.data);
            }catch(err){}
        }
        getOrders();
    },[])
    const Button = ({type}) =>{
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Danh sách đơn hàng</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Mã khách hàng</th>
                    <th className="widgetLgTh">Ngày</th>
                    <th className="widgetLgTh">Giá trị đơn hàng</th>
                    <th className="widgetLgTh">Trạng thái</th>
                </tr>
                {orders.map(order => (
                    <tr className="widgetLgTr" key={order._id}>
                        <td className="widgetLgUser">
                            <span className="widgetLgName">{order.userId}</span>
                        </td>
                        <td className="widgetLgDate">{format(order.createdAt)}</td>
                        <td className="widgetLgAmount">{order.amount.toLocaleString()} VND</td>
                        <td className="widgetLgDate">
                            <Button type={order.status}/>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default WidgetLg
