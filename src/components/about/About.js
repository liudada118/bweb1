import React, { useState,useEffect } from 'react'
import Nav from '../nav/Nav'
import about from '../../assets/image/about.jpg'
import './about.css'
export default function About() {
    const [fs , setFs] = useState()
    useEffect(() => {
        setFs(window.innerWidth * 22.5 / 1920)
    },[])
    return (
        <>
            <Nav />
            <div className='about'>
                <div className="aboutContent fontsc">
                    <img src={about} alt="" />
                    <div className="aboutText">
                        <p className='aboutLogo iconText'>bodyta</p>
                        <p style={{fontSize : fs}}>棉捷（北京）网络科技有限公司是一家专注于纺织品传感器（Textile Sensor）的技术研发、生产以及多领域产品的解决方案的科技公
                            司。旗下产品bodyta纤维传感器（bodyta Fiber Sensor）是棉捷公司独家研发生产的一种柔性纤维传感器，在具有纺织品贴身无感、任
                            意弯曲、可洗涤等特性的同时，完成心电、脑电、压力、张力等信号的感知、传导、计算和控制。 目前拥有弹性纤维电极、纤维压力传感矩阵、
                            纤维拉力传感器等核心技术成果。bodyta不仅在宇航
                            、军事、医疗等方面广泛应用，更被小米等AIoT公司应用于心电衣、床、人体工学椅等身体数据智能设备。</p>
                        <p style={{fontSize : fs}}>bodyta纤维传感器（bodyta Fiber Sensor）广泛应用于智能家居、智能
                            穿戴、运动健身、医疗健康等领域。棉捷公司专注于纺织品传感器（Textile Sensor）及其他柔性传感器的技术研发、生产以及多领域产品的解决方案。
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
