import React,{ useState, useEffect } from 'react'
import './widgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { userReq } from '../../request'
function WidgetSm() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getUsers = async () =>{
            try{
                const res = await userReq.get('users/?new=true');
                setUsers(res.data);
            }catch(err){}
        }
        getUsers();
    },[])
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Tài khoản mới</span>
            <ul className="widgetSmList">
            { users.map(user => (
                <li className="widgetSmListItem" key={user._id}>
                    <img src={user.img || "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/148512914/original/e0deceb1d1a0acd36fa5e285193d58cbea5655ac/draw-a-cute-chibi-character-for-you.png"} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">{user.name}</span>
                        <span className="widgetSmUserTitle">{user.isAdmin === true ? 'Quản trị viên' : 'Khách hàng'}</span>
                    </div>
                        <button className="widgetSmButton">
                            <VisibilityIcon className="widgetSmIcon"></VisibilityIcon>
                            Xem
                        </button>
                </li>
            ))

            }
            </ul>
        </div>
    )
}

export default WidgetSm
