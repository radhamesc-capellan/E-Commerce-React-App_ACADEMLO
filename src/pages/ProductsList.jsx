import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProductCategorieThunk,
  filterProductTitleThunk,
  getProductsThunk,
} from "../store/slices/productsList.slice";
import {
  Accordion,
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";
import { ImCart } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BiSearchAlt } from "react-icons/bi";

const ProductsList = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const navigate = useNavigate();
  const [productsCategories, setProductsCategories] = useState([]);
  const [productSearch, setProductSearch] = useState("");

  useEffect(() => {
    dispatch(getProductsThunk());

    axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1/categories`)
      .then((res) => setProductsCategories(res.data));
  }, []);
  //console.log(productsCategories);

  return (
    <>
      {/* category sidebar */}
      <Row>
        <Col lg={3}>
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Categories</Accordion.Header>
              <Accordion.Body>
                <ListGroup>
                  {productsCategories.map((productsCategories) => (
                    <ListGroup.Item
                      key={productsCategories.id}
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch(
                          filterProductCategorieThunk(productsCategories.id)
                        )
                      }
                    >
                      {productsCategories.name}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <div></div>
        </Col>

        {/* products List */}
        <Col lg={9}>
          {/*Input search  */}
          <div className="mt-5">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="What are you looking for?"
                aria-label="What are you looking for?"
                aria-describedby="basic-addon2"
                value={productSearch}
                onChange={(e) => setProductSearch(e.target.value)}
              />
              <Button
                onClick={() => dispatch(filterProductTitleThunk(productSearch))}
                variant="outline-secondary"
                id="button-addon2"
              >
                Search{" "}
                <span>
                  <BiSearchAlt />
                </span>
              </Button>
            </InputGroup>
          </div>

          {/* Products Cards */}

          <Row xs={1} md={2} lg={3} className="g-4">
            {productsList.map((productsList) => (
              <Col key={productsList.id}>
                <Card className="container"
                  onClick={() => navigate(`/product/${productsList.id}`)}
                  style={{ width: "18rem", cursor: "pointer" }}
                >
                  <Card.Img
                    variant="top"
                    src={productsList.images[0].url}
                    style={{ height: 200, objectFit: "contain" }}
                    alt="productsImages"
                  />
                  <Card.Body>
                    <small className="text-muted">{productsList.brand}</small>
                    <Card.Title>{productsList.title}</Card.Title>
                    
                    <Row>
                      <Col>
                      <small className="text-muted">Price</small>
                        <Card.Text> $ {productsList.price}</Card.Text>
                      </Col>
                      <Col className="col align-self-end">
                        <Button variant="primary" >
                          <ImCart />
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ProductsList;
