import React from 'react'
import styled from 'styled-components'
const Container = styled.div `
    height: 30px;
    background-color: #000;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div `
    font-weight: 300;
    margin-right: 10px;
    cursor: pointer;
    opacity: 0.8;
    font-size: 12px;
`
const Annountcement = () => {
    return (
        <Container>
            <MenuItem>Đăng nhập</MenuItem>
            <MenuItem>|</MenuItem>
            <MenuItem>Đăng kí</MenuItem>
            <MenuItem>|</MenuItem>
            <MenuItem>Hỗ trợ</MenuItem>
        </Container>
    )
}

export default Annountcement
