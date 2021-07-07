import React from 'react'
import product1 from '../../assets/video/foot.mp4'
import './product.css'
import Nav from '../nav/Nav'
export default function Product() {
    return (
        <>
            <Nav />
            <div className='product1'>
                <video controls="controls" className='video1' autoplay="autoplay" controls controlsList='nofullscreen nodownload noremote footbar' loop muted="true" >
                    <source src={product1}
                        type="video/webm" />
                    <source src={product1}
                        type="video/mp4" />
                </video>
                <div className="product1Content">
                    <p className='product1Content1 fontme'>纤维压力传感器矩阵</p>
                    <p className='product1Content2 fontre'>bodyta纤维压力传感器是以尼龙为基材的新型纺织品纤维，由压力纤维纵横纺织成的纤维压力矩阵
                        在具有纺织品贴身无感、任意弯曲、可洗涤等特性的同时，完成睡姿监测、坐姿监测、足底压力监测
                        等信号的感知、传导、计算和控制。</p>
                </div>
            </div>
        </>
    )
}
