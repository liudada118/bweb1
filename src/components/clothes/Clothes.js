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
                        <li>睡眠周期</li>
                        <li>呼吸监测</li>
                        <li>离床提醒</li>
                        <li>睡姿监测</li>
                    </ul>

                    <ul className='beditems2'>
                        <li>就寝时长</li>
                        <li>睡眠效率</li>
                        <li>打鼾监测</li>
                        <li>睡眠监测</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
