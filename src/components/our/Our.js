import React from 'react'
import Nav from '../nav/Nav'
import './our.css'
import wx from '../../assets/image/wx.png'
export default function Our() {
    return (
        <>
            <Nav />
            <div className="ourContent">
                <div className='company fontb'>
                    棉捷（北京）网络科技有限公司
                </div>
                <div className='contentItems fontb'>

                    <div className='contentItem'>
                        <div className="iconInfo">
                            <i className='iconfont'>&#xe60c;</i>
                            <p>地址</p>
                        </div>
                        <p>
                            北京：北京市朝阳区八里庄
                            住邦2000-2栋-1205</p>
                        <p>
                            深圳：深圳市南山区前海深港
                            青年梦工场7-118</p>                            </div>
                    <div className='contentItem'>
                        <div className="iconInfo">
                            <i className='iconfont'>&#xe605;</i>
                            <p>电话</p>
                        </div>
                        <div className="phones">
                            <div>
                                <p className='phone'>北京：010-65575821 </p>
                                <p className='phone'>深圳：0755-26926698</p>
                            </div>
                        </div>

                    </div>
                    <div className='contentItem'>
                        <div className="iconInfo">
                            <i className='iconfont'>&#xe672;
                            </i>
                            <p>邮箱</p>
                        </div>
                        <p className='email'>info@bodyta.com</p>

                    </div>
                    <div className='contentItem'>
                        <div className="iconInfo">
                            <i className='iconfont'>&#xe68a;</i>
                            <p >公众号</p>
                            
                        </div>
                        <div className='contentItemImg'>
                                <img src={wx} alt="" />
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
