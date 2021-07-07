// import { Menu } from 'antd'; 
import { Menu, Dropdown, Button } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import './App.css'
import Aside from '../aside/Aside'
import PhoneNav from './PhoneNav'
import './nav.css'
const { SubMenu } = Menu;




class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
            phone : false
        }
    }


    componentDidMount(){
        let slef = this
        if(window.innerWidth<900){
            this.setState({
                phone : true
            })
        }
        
        window.addEventListener('resize',function() {
            if(window.innerWidth<900){
                slef.setState({
                    phone : true
                })
            }else{
                slef.setState({
                    phone : false
                })
            }
        })
    
    }

    // static getDerivedStateFromProps(){
    //     let slef = this
    //     if(window.innerWidth<900){
    //         this.setState({
    //             phone : true
    //         })
    //     }
        
    //     window.addEventListener('resize',function() {
    //         if(window.innerWidth<900){
    //             slef.setState({
    //                 phone : true
    //             })
    //         }
    //     })
    // }

    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <>
                <Aside />
                <div className='title fontb'>
                    <div className='icon iconText'> <Link to='/home'>bodyta  </Link></div>
                    {this.state.phone ? <PhoneNav /> : <div className='titleItem'>
                        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">


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
                    </div>}
                </div>
            </>

            //</div>
        )
    }
}

export default App;
