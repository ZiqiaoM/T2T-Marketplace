import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
  } from '@ant-design/icons';

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import "antd/dist/antd.css";
import './Layer1.css';
import logo from "../../images/T2T.png";
import { Slider } from 'antd';
import { Divider } from 'antd';
import { Avatar, Card, Col, Row } from 'antd';
import { Pagination } from 'antd';
// import Header1 from '../../common/Header';
// import Footer from '../../common/Footer';


const { Header,  Sider, Content } = Layout;
const { Meta } = Card;
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));


  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const marks = {
    // 0: '$0',
    10: '$100',
    50: '$500',
    100: {
      style: {
        color: '#f50',
      },
      label: <strong>$1000+</strong>,
    },
  };

  const items2 = [
    getItem('Options', '1', <PieChartOutlined />),
    getItem('Filter', '2', <UserOutlined />, [
      getItem('C1', '3'),
      getItem('C2', '4'),
      getItem('C3', '5'),
    ]),

  ];
  const slider_formatter = (value) => `$${value}0`;

const LayerOne = () => {
  return(
    <Layout>
    {/* <Header1 /> */}
    <Header>
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
    </Header>
    <Layout >
      <Sider width={200} className="site-layout-background">
    
            <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            // height: '50%',
            borderRight: 0,
          }}
          items={items2}
        />
        <Divider />
        {/* <div className="cut_line"> </div> */}
        <h4 style={{padding:"auto" ,textAlign: "center" ,color: 'Grey',}}>Price Range</h4>
        {/* <div  style = {{width:"200px", display: "inline-block"}}   > */}
            <Slider mode="inline" range marks={marks} defaultValue={[10,50]} tipFormatter={slider_formatter}
                    style={{

                        width:"82%",
                    }}
            />  
        {/* </div> */}

      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Furniture</Breadcrumb.Item>
          <Breadcrumb.Item>Best Seller</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
                <Row gutter={16} align="bottom">
                <Col span={6}>
                    <Card className = "show_goods"
                    hoverable 
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                      ]}
                    cover={
                    // <img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvcD6QbClkb3KKwNO2902jV-FzJsXjtS6RQ&usqp=CAU" />
                    <img 
                    className='goods' 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvcD6QbClkb3KKwNO2902jV-FzJsXjtS6RQ&usqp=CAU" 
                     />
                }
                    bordered={false}>

                    <Meta title="Mac" description="Testing conducted by Apple in October 2020 using preproduction 13-inch MacBook Pro systems with Apple M1 chip" />
                    </Card>
                </Col>
                <Col span={6}>
                <Card className = "show_goods"
                    hoverable 
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                      ]}
                    cover={
                    <img alt="example" src="https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80" />
                }
                    bordered={false}>
                    <Meta title= "Kitten For Adoption" description="6 month old." />
                    </Card>
                </Col>
                <Col span={6}>
                <Card className = "show_goods"
                hoverable 
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                    cover={<img alt="example" src="https://m.media-amazon.com/images/I/71XHJ4ZcyYL._SL1500_.jpg" />}
                    bordered={false}>
                    <Meta title="Lipstick" description="Burt's Bees Lip Gloss and Glow Glossy Balm, 100% Natural Makeup, Wine Wednesday (Pack of 2 Tubes)" />
                    </Card>
                </Col>
                <Col span={6}>
                <Card className = "show_goods"
                hoverable 
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    bordered={false}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                </Row>

                <Row gutter={16} align="bottom">
                <Col span={6}>
                <Card className = "show_goods"
                hoverable 
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    bordered={false}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={6}>
                <Card className = "show_goods"
                hoverable 
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                    cover={<img alt="example" src="https://m.media-amazon.com/images/I/71XHJ4ZcyYL._SL1500_.jpg" />}
                    bordered={false}>
                    <Meta title="Lipstick" description="Burt's Bees Lip Gloss and Glow Glossy Balm, 100% Natural Makeup, Wine Wednesday (Pack of 2 Tubes)" />
                    </Card>
                </Col>
                <Col span={6}>
                <Card className = "show_goods"
                    hoverable 
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                      ]}
                    cover={
                    <img alt="example" src="https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80" />
                }
                    bordered={false}>
                    <Meta title= "Kitten For Adoption" description="6 month old. " />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className = "show_goods"
                    hoverable 
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                      ]}
                    cover={
                    // <img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvcD6QbClkb3KKwNO2902jV-FzJsXjtS6RQ&usqp=CAU" />
                    <img 
                    className='goods' 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvcD6QbClkb3KKwNO2902jV-FzJsXjtS6RQ&usqp=CAU" 
                     />
                }
                    bordered={false}>

                    <Meta title="Mac" description="Testing conducted by Apple in October 2020 using preproduction 13-inch MacBook Pro systems with Apple M1 chip" />
                    </Card>
                </Col>
                </Row>
        </Content>
        <Divider />
        <Pagination 
            style ={{    
                width: "100%",
            textAlign: "center",
            verticalAlign: "center", 
            margin:"auto",
                    }} 
            defaultCurrent={1} 
            total={500}
            defaultPageSize = {16}
            pageSize = {16}
            pageSizeOptions = {[16,32]}
            />

      </Layout>
    </Layout>
    {/* <Footer /> */}
  </Layout>
  );
  }

function Layer1() {
    return (
      <div className="Layer1">
        <LayerOne />
      </div>
    );
  }

export default Layer1;