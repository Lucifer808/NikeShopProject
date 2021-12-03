import React,{ useState, useEffect } from 'react';
import './widgetSm.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { userReq } from '../../request';
import { Link } from 'react-router-dom';
function WidgetSm() {
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState();
    useEffect(() => {
        const getUsers = async () =>{
            try{
                const res = await userReq.get('users/?new=true');
                setUsers(res.data);
            }catch(err){}
        }
        getUsers();
    },[])
    const handleClick = (e) => {
    }
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Tài khoản mới</span>
            <ul className="widgetSmList">
            { users.map(user => (
                <li className="widgetSmListItem" key={user._id}>
                    <img src={user.img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC_tppPW4UZQi9mLejagtZ5UXvhnKdUKmbxA&usqp=CAU"} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">{user.name}</span>
                        <span className="widgetSmUserTitle">{user.isAdmin === true ? 'Quản trị viên' : 'Khách hàng'}</span>
                    </div>
                        <Link to={"/user/" + user._id} style={{textDecoration: 'none'}}>
                        <button className="widgetSmButton">
                            <VisibilityIcon className="widgetSmIcon"></VisibilityIcon>
                            Chi tiết
                        </button>
                        </Link>
                </li>
            ))

            }
            </ul>
        </div>
    )
}

export default WidgetSm
