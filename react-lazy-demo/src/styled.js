import styled, { keyframes } from 'styled-components';

const animationBg = keyframes`
    0% {
        background-position: 50% 0;
    }
    100% {
        background-position: -150% 0;
    }
`

export const Main = styled.main`
    height: 100vh;
    background: steelblue;
    display: flex;
    justify-content: center;// 主轴方向
    align-items: center; // 交叉轴方向
`

export const Loading = styled.div`
    width: 350px;
    height: 400px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
    background-image: linear-gradient(
        to right,
        #f6f7f8 0%,
        #edeef1 10%,
        #f6f7f8 20%,
        #f6f7f8 100%
    );
    background-size: 200% 100%;
    animation: ${animationBg} 1s linear infinite;
`