import React from 'react'
import Nav from '../nav/Nav'
import { Row, Col } from 'antd';
import clothes from '../../assets/image/clothes.jpg'
import './Clothes.css'
export default function Bed() {
    return (
        <>
            <Nav />
            <div className='clothesContent fontre bedContent'>

                <img src={clothes} className='img' alt="" />
                <div className="beditems">
                    <ul className='beditems1'>
                        <li>60秒心电监测</li>
                        <li>零触感</li>
                        <li>实时心率</li>
                        <li>卡路里</li>
                    </ul>

                    <ul className='beditems2'>
                        <li>实时心电图</li>
                        <li>可洗涤</li>
                        <li>运动区间监测</li>
                        <li>精准算法</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
