import { PlusOutlined } from "@ant-design/icons";
import { color } from "@mui/system";
import { Button, Form, Input, InputNumber, Radio, Col, Upload } from "antd";
import { useState } from "react";

const { TextArea } = Input;
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const App = () => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    // <div className="post">
    <Col type="flex" align="middle">
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 26,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <header class="uploadProduct">
          <h1>Upload Product</h1>
        </header>

        <Form.Item
          label="Category"
          rules={[
            {
              required: true,
              message: "Please choose your catagory!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="cloth"> Cloth </Radio>
            <Radio value="kitchenware"> Kitchenware </Radio>
            <Radio value="funiture"> Funiture </Radio>
            <Radio value="book"> Book </Radio>
            <Radio value="other"> Other </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Post title"
          rules={[
            {
              required: true,
              message: "Please input your Post title!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price(Enter 0 if free)"
          rules={[
            {
              required: true,
              message: "Please input your price!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Condition"
          name="condition"
          rules={[
            {
              required: true,
              message: "Please choose your condition!",
            },
          ]}
        >
          <Radio.Group>
            <Radio.Button value="new">New</Radio.Button>
            <Radio.Button value="used">Used</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Location"
          name="location"
          rules={[
            {
              required: true,
              message: "Please choose your location!",
            },
          ]}
        >
          <Radio.Group>
            <Radio.Button value="on_campus">On campus</Radio.Button>
            <Radio.Button value="off_campus">Off campus</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Product details">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Reference links">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Contact information"
          rules={[
            {
              required: true,
              message: "Please provide your contact information!",
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload Pictures
              </div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};
export default App;
