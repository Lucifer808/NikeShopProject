import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Annountcement from '../components/Annountcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { userReq } from '../request';
import { format } from 'timeago.js';
const Container = styled.div `
`
const Wrapper = styled.div `
    height: 100vh;
`
const Title = styled.h2 `
    text-align: center;
    margin: 20px 0 10px 0;
`
const Underline = styled.div `
    padding: 0.5px 60px;
    width: 0px;
    margin-top: 10px;
    margin-left: 613px;
    border: 1px solid #cab182;
    background-color: #cab182;
    margin-bottom: 5px;
`
const TableWrap = styled.div `
    margin-top: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Table = styled.table `
    display: inline-block;
    border: 1px solid #cab182;
    width: 1200px;
    height: 500px;
    overflow: auto;
`
const Tr = styled.tr `
    display: flex;
    justify-content: space-around;
    margin: 0 10px;
`
const Th = styled.th `
    margin: 10px 0;
`
const Td = styled.td `
    margin-left: -100px;
    margin-right: 60px;
    margin-bottom: 20px;
`
const History = () => {
    const location = useLocation();
    const userId = location.pathname.split('/')[2];
    const [orders, setOrders]= useState([]);
    useEffect(() =>{
        const order = async () => {
            try{
                const res = await userReq.get(`/orders/find/user/${userId}`)
                setOrders(res.data)
            }catch(err){}
        }
        order();
    },[userId])
    return (
        <Container>
            <Annountcement/>
            <Navbar/>
            <Wrapper>
                <Title>LỊCH SỬ MUA HÀNG</Title>
                <Underline/>
                <TableWrap>
                <Table>
                    <Tr>
                        <Th>Mã đơn hàng</Th>
                        <Th>Ngày đặt hàng</Th>
                        <Th>Giá trị đơn hàng</Th>
                        <Th>Trạng thái đơn hàng</Th>
                    </Tr>
                   {orders?.map(order => 
                    <Tr key={order?._id}>
                        <Td>{order?._id}</Td>
                        <Td styled={{marginRight: "100px"}}>{format(order?.createdAt)}</Td>
                        <Td>{order?.amount.toLocaleString()} VND</Td>
                        <Td>{order?.status}</Td>
                    </Tr>
                   )}
                </Table>
                </TableWrap>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default History
