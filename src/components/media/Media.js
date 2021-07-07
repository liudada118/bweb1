import React from 'react'
import Nav from '../nav/Nav'
import './media.css'
import video from '../../assets/video/video.mp4'
export default function Media() {
    return (
        <>
            <Nav />
            <div className="mediaContent fontb">
                {/* <video className='video' src={video}></video> */}
                <video controls className='video'>
                    <source src={video}
                        type="video/webm"/>
                        <source src={video}
                            type="video/mp4"/>
                    </video>

                        <div className='mediaInfo'>纤维传感器领跑全球可穿戴设备创新升级,
                            小米生态链里的黑科技。
                            <p className='mediaInfo2'>经济的发展，技术的创新不断改变人类生活方式，提升人们生活质量，
                                人类借助新材料不断地认知世界。作为有近5000年历史的纺织业和新
                                的学科交叉会产生什么样的新物种？会为人们生活带来什么样的改变？
                                新材料如何助力智能生活？中国的纺织业在世界处于什么位置？容众财
                                经本期邀请棉捷公司CEO黑勇先生和大家分享新材料对生活带来的改变？</p>
                        </div>
            </div>
        </>
                )
}
