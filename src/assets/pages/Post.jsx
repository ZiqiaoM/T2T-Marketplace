import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
// import CommonSection from '../components/UI/common-section/CommonSection'
import productImg from "../images/product_01_image_01.jpg";
import "./Post.css";

const Post = () => {
  return (
    <Helmet>
      <section>
        <Container>
          <body>
            <header class="uploadProduct">
              <h1 class="uploadProduct">Upload Product</h1>
            </header>
            <form class="inToCenter">
              <div class="tabs d-flex align-items-center gap-5 py-3">
                <h6 class="tab_active">Product Category</h6>
              </div>

              <input
                type="radio"
                id="huey"
                name="drone"
                value="huey"
                checked
              ></input>
              <label for="huey">Cloth</label>
              <br></br>
              <input type="radio" id="dewey" name="drone" value="dewey"></input>
              <label for="dewey">Kitchenware</label>
              <br></br>
              <input type="radio" id="louie" name="drone" value="louie"></input>
              <label for="louie">Funiture</label>
              <br></br>
              <input type="radio" id="louie" name="drone" value="louie"></input>
              <label for="louie">Other</label>
            </form>

            <form class="inToCenter">
              <div class="tabs d-flex align-items-center gap-5 py-3">
                <h6 class="tab_active">Post Title</h6>
              </div>
              <div>
                <input
                  type="text"
                  minlength="1"
                  maxlength="20"
                  class="input-title"
                  placeholder="Input: Title"
                />
              </div>

              <div class="tabs d-flex align-items-center gap-5 py-3">
                <h6 class="tab_active">Upload Picture</h6>
              </div>
              <div>
                <button class="addToWl_btn">Upload from local</button>
              </div>

              <div class="tabs d-flex align-items-center gap-5 py-3">
                <h6 class="tab_active">Product details</h6>
              </div>

              <div>
                <label for="Name">Price:</label>
                <input
                  type="text"
                  class="input-price"
                  placeholder="Price"
                  required
                />
                <p>Free item should enter 0</p>
              </div>
            </form>
            <form class="inToCenter">
              <div>
                <label for="Name">Condition:</label>
                <input
                  type="radio"
                  id="huey"
                  name="drone"
                  value="huey"
                  checked
                ></input>
                <label for="huey">New</label>
                <input
                  type="radio"
                  id="huey"
                  name="drone"
                  value="huey"
                  checked
                ></input>
                <label for="huey">Used</label>
              </div>
            </form>

            <form class="inToCenter">
              <div>
                <label for="Name">Location:</label>
                <input
                  type="radio"
                  id="huey"
                  name="drone"
                  value="huey"
                  checked
                ></input>
                <label for="huey">On Campus</label>
                <input
                  type="radio"
                  id="huey"
                  name="drone"
                  value="huey"
                  checked
                ></input>
                <label for="huey">Off Campus</label>
              </div>
            </form>

            <form class="inToCenter">
              <div>
                <label for="Name">Original Link:</label>

                <div>
                  <textarea
                    class="textBorder"
                    id="freeform"
                    name="freeform"
                    rows="3"
                    cols="70"
                    placeholder="Original Link"
                  ></textarea>
                </div>
              </div>

              <div>
                <label for="freeform">Brief Description:</label>
              </div>
              <div>
                <textarea
                  class="textBorder"
                  id="freeform"
                  name="freeform"
                  rows="6"
                  cols="70"
                  placeholder="Enter text here..."
                ></textarea>
              </div>
              <div>
                <label for="Name">Contact:</label>
                <div>
                  <textarea
                    class="textBorder"
                    id="freeform"
                    name="freeform"
                    rows="3"
                    cols="70"
                    placeholder="Phone/Email..."
                  ></textarea>
                </div>
              </div>
              <div>
                <button class="addToWl_btn">Publish</button>
              </div>
            </form>
          </body>
        </Container>
      </section>
    </Helmet>
  );
};

export default Post;
