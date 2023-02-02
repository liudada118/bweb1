import React from 'react'
import product1 from '../../assets/image/product1.jpg'
import product1pho from '../../assets/image/productpho.jpg'
import './product.css'
import Nav from '../nav/Nav'
export default function Product() {
    return (
        <>
        <Nav />
        <div className='product1 '>
            <img className='imgpro' src={product1} alt="" />
            <div className="imgpho">
                <img src={product1pho} alt="" />
            </div>
            <div className="product1Content">
                <p className='product1Content1 fontme'>弹性电极纤维传感器</p>
                <p className='product1Content2 fontre'>bodyta弹性电极纤维是棉捷公司独家研发生产的一种柔性纤维传感器，在具有纺织品贴身无感、任意弯曲、
可洗涤等特性的同时，完成心电、脑电、肌肉电等信号的感知、传导、计算和控制。 是可传导生物电的织
物纤维，可水洗、真无感。</p>
            </div>
        </div>
        </>
    )
}
