import * as React from 'react';
import { RGBcolor } from '../model/color';

interface Props{
    color: RGBcolor;
    size: number
}

export const ColorBrowser:React.FC<Props> = ({color:{red,green,blue},size}) => {
    const divStyle:React.CSSProperties = {
        width: "11rem",
        height: "7rem",
        backgroundColor: `rgb(${red},${green},${blue})`
    }   
    return (
        <div style={divStyle}></div>
    )
}