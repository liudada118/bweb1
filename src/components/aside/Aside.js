import React, { useState } from 'react'
import './aside.css'
import wx from '../../assets/image/wx.png'
export default function Aside() {
    const [value, setValue] = useState(0)
    return (
        <>
            <div className='aside '>
                <i className='iconfont asideItem' onMouseOver={() => { setValue(1) }} onMouseOut={() => { setValue(0); console.log(2222) }}>&#xe605;</i>
                <i className='iconfont asideItem' onMouseOver={() => { setValue(2) }} onMouseOut={() => { setValue(0) }}>&#xe68a;</i>
                <i className='iconfont asideItem' onMouseOver={() => { setValue(3) }} onMouseOut={() => { setValue(0) }}>&#xe672;
</i>
            </div>
            <div>
                {
                    value == 1 ?<div className="asideContent fontb"><div><p>北京：010-65575821</p><p>深圳：0755-26926698</p></div></div>  : value == 2 ?<div className="asideContent"><img src={wx} alt="" /></div >  : value == 3 ? <div className="asideContent fontb"><div> info@bodyta.com</div></div> : null
                }
            </div>
        </>
    )
}
