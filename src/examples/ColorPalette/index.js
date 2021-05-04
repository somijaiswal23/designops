import React from 'react';
import '../../lib/designops.css';
import './index.css'
const basicColors = ['transparent', 'black', 'white', 'primary']
const colors=['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']
const getbasicsColors = (colors) =>{
    return colors.map(item=><tr>
            <td>{`.bg-${item}`}</td>
            
            <td>{`.text-${item}`}</td>
            <td>
                <div class={`text-${item}`}>Aa</div>
            </td>
            <td>
                <div class={`box bg-${item}`}></div>
            </td>
        </tr>)
}
const GetColors = ({color}) =>{
    const weights=[50,100, 200,300,400,500,600,700,800, 900]
    return weights.map(item=><tr>
            <td>{`.bg-${color}-${item}`}</td>
            <td>{`.text-${color}-${item}`}</td>
            <td>
                <div class={`text-${color}-${item}`}>Aa</div>
            </td>
            <td>
                <div class={`box bg-${color}-${item}`}></div>
            </td>
        </tr>)
}
const ColorPalette = () => {
    return <div className="colorPalette ">
        {/* <div className="box bg-black"></div>
        <div>bg-black</div> */}
        <table>
            <thead>
            <tr>
                <th className="bg-primary text-white">Background classes</th>
                <th className="bg-primary text-white">Text Classes</th>
                <th className="bg-primary text-white">Text Output</th>
                <th className="bg-primary text-white">Background output</th>
                </tr>
            </thead>
            <tbody>
                {getbasicsColors(basicColors)}
                {colors.map(item=><GetColors color={item}/>)}
            </tbody>
        </table>
    </div>
}

export default ColorPalette