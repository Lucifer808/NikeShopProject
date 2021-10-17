import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { userReq } from "../request";
import { useDispatch } from 'react-redux';
import { refeshProduct } from '../redux/reduxCart';


const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = useSelector(state => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userReq.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item.quantity,
            size: item.size,
            color: item.color
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);
  const handleClick = () => {
    dispatch(
      refeshProduct()
    )
  }
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Đặt hàng thành công, mã đơn hàng ${orderId}. Đơn hàng sẽ được xử lý trong thời gian sớm nhất`
        : `Thành công. Đơn hàng của bạn đang được xử lý ...`}
      <Link to='/'><button style={{ padding: 10, marginTop: 20 }} onClick={handleClick}>Về trang chủ</button></Link>
    </div>
  );
};

export default Success;
