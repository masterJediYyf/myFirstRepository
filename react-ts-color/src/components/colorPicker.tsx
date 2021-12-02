import * as React from 'react';
import { RGBcolor } from '../model/color';

// 因为每个组件都要定制自己的参数类型接口, 没有共享的必要
interface Props {
    color: RGBcolor;
    onColorUpdated: (color:RGBcolor) => void
}

export const ColorPicker:React.FC<Props> = (props) => {
    const { color } = props;
    const { onColorUpdated } = props;
    return (
        <div>
            <input 
                type="range"
                min="0"
                max="255"
                value={color.red}
                onChange={ (event) => {
                    onColorUpdated({
                        ...color,
                        red: +event.target.value
                    });
                }} 
            />
            {color.red}
            <br/>
            <input 
                type="range"
                min="0"
                max="255"
                value={color.green}
                onChange={ (event) => {
                    onColorUpdated({
                        ...color,
                        green: +event.target.value
                    });
                }} 
            />
            {color.green}
            <br/>
            <input 
                type="range"
                min="0"
                max="255"
                value={color.blue}
                onChange={ (event) => {
                    onColorUpdated({
                        ...color,
                        blue: parseInt(event.target.value)
                    });
                }} 
            />
            {color.blue}
            <br/>
        </div>
    )
}
