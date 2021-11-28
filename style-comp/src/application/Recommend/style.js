import styled from 'styled-components';

// styled-component  css in js
// 样式组件 替代 stylus css变量等
// 解决了 css 重名问题
export const Content = styled.div `
  position: fixed;
  top: 90px;
  bottom: ${props => props.play > 0 ? "60px" : 0};
  width: 100%;
`