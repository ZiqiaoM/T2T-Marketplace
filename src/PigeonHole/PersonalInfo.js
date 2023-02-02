import React from 'react';
// import 'antd/dist/antd.css';
import { Descriptions } from 'antd';
import { Col, Row } from 'antd';
import { Card } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Typography } from 'antd';
import { Button } from 'antd';

const { Title } = Typography;
const { Meta } = Card;


const GridPersonalInfo = () =>{

  return (
    <Layout style={{
      padding: 20,
      minHeight: 360,
    }}>
      <Row justify="space-around" align="bottom" >
      <Col flex="200px">
        <PersonalCard />
      </Col>
      <Col flex="auto">
        <Title      style={{
        textAlign:"center",
        verticalAlign: "middle",
      }}>
        WELCOME TO YOUR ACCOUNT, HAO
        </Title>
      
        <PersonalDesp />
      </Col>
    </Row>
  </Layout>
    )
}

const PersonalCard = () => {
return(
  <Card
  hoverable
  style={{
    // width: 240,
  }}
  cover={<img alt="example" src="https://s1.ax1x.com/2022/07/30/viO6zV.jpg" />}
>
  <Meta title="Alvin Hao" description="重庆" />
</Card>
    )
}


const PersonalDesp = () => {
  return (
    
    <Descriptions
      // title="Responsive Descriptions"
      bordered
      size= "default"
      style={{
        // height:"fit-content",
        // margin: "0 auto",
        // width:"fit-content",
      }}
      extra={<Button type="primary">Edit</Button>}
      column={{
        xxl: 4,
        xl: 3,
        lg: 3,
        md: 3,
        sm: 2,
        xs: 1,
      }}
    >
      <Descriptions.Item label="Name">Alvin Hao</Descriptions.Item>
      <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
      <Descriptions.Item label="Registration Time">2022-5-25</Descriptions.Item>
      <Descriptions.Item label="Total Buy">25</Descriptions.Item>
      <Descriptions.Item label="Total Sell">2</Descriptions.Item>
      <Descriptions.Item label="Shopping Carts">$237.00</Descriptions.Item>
      <Descriptions.Item label="Other Information">
        Charlie Brown, You're a good man.
      </Descriptions.Item>
    </Descriptions>
);
}

function PersonalInfo() {
  return (
    <div className="PersonalInfo">
      <GridPersonalInfo/>
    </div>
  );
}

export default PersonalInfo;