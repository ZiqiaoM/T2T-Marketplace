import { PlusOutlined } from "@ant-design/icons";
import { color } from "@mui/system";
import { Button, Form, Input, InputNumber, Radio, Upload } from "antd";
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
        color:red,
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
    // <style jsx>{`
    // background-color:red;
    // `}</style>
    // </div>
    
  );
};
export default App;

// import React from "react";
// import { Container, Row, Col } from "reactstrap";
// import "../styles/post.module.css";

// const Post = () => {
//   return (
//     <section>
//       <Container>
//         <body>
//           <header class="uploadProduct">
//             <h1 class="uploadProduct">Upload Product</h1>
//           </header>
//           <form class="inToCenter">
//             <div class="tabs d-flex align-items-center gap-5 py-3">
//               <h6 class="tab_active">Product Category</h6>
//             </div>

//             <input
//               type="radio"
//               id="huey"
//               name="drone"
//               value="huey"
//               checked
//             ></input>
//             <label for="huey">Cloth</label>
//             <br></br>
//             <input type="radio" id="dewey" name="drone" value="dewey"></input>
//             <label for="dewey">Kitchenware</label>
//             <br></br>
//             <input type="radio" id="louie" name="drone" value="louie"></input>
//             <label for="louie">Funiture</label>
//             <br></br>
//             <input type="radio" id="louie" name="drone" value="louie"></input>
//             <label for="louie">Other</label>
//           </form>

//           <form class="inToCenter">
//             <div class="tabs d-flex align-items-center gap-5 py-3">
//               <h6 class="tab_active">Post Title</h6>
//             </div>
//             <div>
//               <input
//                 type="text"
//                 minlength="1"
//                 maxlength="20"
//                 class="input-title"
//                 placeholder="Input: Title"
//               />
//             </div>

//             <div class="tabs d-flex align-items-center gap-5 py-3">
//               <h6 class="tab_active">Upload Picture</h6>
//             </div>
//             <div>
//               <button class="addToWl_btn">Upload from local</button>
//             </div>

//             <div class="tabs d-flex align-items-center gap-5 py-3">
//               <h6 class="tab_active">Product details</h6>
//             </div>

//             <div>
//               <label for="Name">Price:</label>
//               <input
//                 type="text"
//                 class="input-price"
//                 placeholder="Price"
//                 required
//               />
//               <p>Free item should enter 0</p>
//             </div>
//           </form>
//           <form class="inToCenter">
//             <div>
//               <label for="Name">Condition:</label>
//               <input
//                 type="radio"
//                 id="huey"
//                 name="drone"
//                 value="huey"
//                 checked
//               ></input>
//               <label for="huey">New</label>
//               <input
//                 type="radio"
//                 id="huey"
//                 name="drone"
//                 value="huey"
//                 checked
//               ></input>
//               <label for="huey">Used</label>
//             </div>
//           </form>

//           <form class="inToCenter">
//             <div>
//               <label for="Name">Location:</label>
//               <input
//                 type="radio"
//                 id="huey"
//                 name="drone"
//                 value="huey"
//                 checked
//               ></input>
//               <label for="huey">On Campus</label>
//               <input
//                 type="radio"
//                 id="huey"
//                 name="drone"
//                 value="huey"
//                 checked
//               ></input>
//               <label for="huey">Off Campus</label>
//             </div>
//           </form>

//           <form class="inToCenter">
//             <div>
//               <label for="Name">Original Link:</label>

//               <div>
//                 <textarea
//                   class="textBorder"
//                   id="freeform"
//                   name="freeform"
//                   rows="3"
//                   cols="70"
//                   placeholder="Original Link"
//                 ></textarea>
//               </div>
//             </div>

//             <div>
//               <label for="freeform">Brief Description:</label>
//             </div>
//             <div>
//               <textarea
//                 class="textBorder"
//                 id="freeform"
//                 name="freeform"
//                 rows="6"
//                 cols="70"
//                 placeholder="Enter text here..."
//               ></textarea>
//             </div>
//             <div>
//               <label for="Name">Contact:</label>
//               <div>
//                 <textarea
//                   class="textBorder"
//                   id="freeform"
//                   name="freeform"
//                   rows="3"
//                   cols="70"
//                   placeholder="Phone/Email..."
//                 ></textarea>
//               </div>
//             </div>
//             <div>
//               <button class="addToWl_btn">Publish</button>
//             </div>
//           </form>
//         </body>
//       </Container>
//     </section>
//   );
// };

// export default Post;
