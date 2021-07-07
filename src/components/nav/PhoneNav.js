import React, { useState } from 'react'
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import {Link} from 'react-router-dom';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
export default function PhoneNav() {
    const [nav, setNav] = useState(false)
    return (
        <div>
            <MenuUnfoldOutlined onClick={() => { setNav(!nav) }} style={{ fontSize: '20px' }} />

            {nav ? <Sider /> : null}
        </div>
    )
}




const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const Sider = () => {
    const [openKeys, setOpenKeys] = React.useState(['sub1']);

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <Menu className='phoneNav' mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} >
            {/* <Menu.Item key="1">首页</Menu.Item>
            <SubMenu key="sub1" title="产品">
                <Menu.Item key="1">弹性电极纤维</Menu.Item>
                <Menu.Item key="2">纤维压力传感器矩阵</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="解决方案">
                <Menu.Item key="5">床</Menu.Item>
                <Menu.Item key="6">椅子</Menu.Item>
                <Menu.Item key="6">心电衣</Menu.Item>
            </SubMenu>
            <Menu.Item key="6">媒体报道</Menu.Item>
            <SubMenu key="sub4" title="关于我们">
                <Menu.Item key="9">联系方式</Menu.Item>
                <Menu.Item key="10">关于bodyta</Menu.Item>
            </SubMenu> */}


            <Menu.Item key="home" >
                <Link to='/home'>
                    首页
                </Link>
            </Menu.Item>

            <SubMenu key="product" title="产品">
                <Menu.Item key="setting:1"><Link to='/product'>弹性电极纤维</Link></Menu.Item>
                <Menu.Item key="setting:2"><Link to='/product1'>纤维压力传感器矩阵</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="solution" title="解决方案">
                <Menu.Item key="setting:3"><Link to='/bed'> 床</Link></Menu.Item>
                <Menu.Item key="setting:4"><Link to='/chair'>椅子</Link></Menu.Item>
                <Menu.Item key="setting:5"><Link to='/clothes'>心电衣</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="media" >
                <Link to='/media'>媒体报道</Link>
            </Menu.Item>
            {/* <Menu.Item key="our" >
                            <Link  to='/our'>联系我们</Link>
                            </Menu.Item> */}
            <SubMenu key="our" title="关于我们">
                <Menu.Item key="setting:6"><Link to='/our'> 联系方式</Link></Menu.Item>
                <Menu.Item key="setting:7"><Link to='/about'>关于bodyta</Link></Menu.Item>
            </SubMenu>
        </Menu>
    );
};