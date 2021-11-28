import styled from "styled-components";
import style from '../../assets/Global-style';

export const ListWrapper = styled.div`
    max-width: 100%;
    .title {
        font-weight: 700;
        padding-left: 6px;
        font-size: 14px;
        line-height: 60px;
    }
`;

export const List = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const ListItem = styled.div`
    position: relative;
    width: 32%;

    .img_wrapper {
        .decorate {
            position: absolute;
            top: 0;
            width: 100%;
            height: 35px;
            border-radius: 3px;
            background: linear-gradient (hsla (0,0%,43%,.4),hsla (0,0%,100%,0));
        }
    }
`