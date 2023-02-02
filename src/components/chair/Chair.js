import React from 'react'
import Nav from '../nav/Nav'
import { Row, Col } from 'antd';
import chairimg from '../../assets/image/chair.jpg'
import './chair.css'
export default function Bed() {
    return (
        <>
            <Nav />
            <div className='chairContent fontre bedContent' >

                <img src={chairimg} className='img' alt="" />
                <div className="beditems">
                    <ul className='beditems1'>
                        <li>实时坐姿</li>
                        <li>近视监测</li>
                        <li>驼背提醒</li>
                        <li>侧弯监测</li>
                    </ul>

                    <ul className='beditems2'>
                        <li>智能升降</li>
                        <li>坐姿识别</li>
                        <li>坐姿提醒</li>
                        <li>久坐提醒</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
