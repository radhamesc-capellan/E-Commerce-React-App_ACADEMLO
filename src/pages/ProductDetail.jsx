import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { filterProductCategorieThunk } from "../store/slices/productsList.slice";
import {
  Button,
  Card,
  Carousel,
  Col,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { ImCart } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { BsDashSquare, BsPlusSquare } from "react-icons/bs";
import { purchaseCartThunk } from "../store/slices/cart.slice";
const ProductDetail = () => {
  const { id } = useParams();

  const [productDetail, setProductDetail] = useState({});

  const productsSuggested = useSelector((state) => state.productsList);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
      .then((res) => {
        setProductDetail(res.data);
        dispatch(filterProductCategorieThunk(res.data.category.id));
      });
  }, [id]);

  const [quantity, setQuantity] = useState("");
  
  const addToCart = (id) => {
    const cart = {
      productDetail: productDetail.id,
      quantity: 1,
    }
    dispatch(purchaseCartThunk(productDetail));
  };

  const dashToCart = () => {
   
  }

  console.log(productDetail);

  return (
    <>
      <div className="container">
        <Row xs={1} md={2}>
          {/* Product Image */}

          <Col lg={6}>
            <Carousel>
              <Carousel.Item >
                <img
                  src={productDetail.images?.[0].url}
                  alt="productImage"
                  className="img-fluid"
                  
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src={productDetail.images?.[1].url}
                  alt="productImage"
                  className="img-fluid"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src={productDetail.images?.[2].url}
                  alt="productImage"
                  className="img-fluid"
                />
              </Carousel.Item>
            </Carousel>
          </Col>

          {/* Product Description */}
          <Col lg={6}>
            <p className="my-2 text-muted">{productDetail.brand}</p>

            <h1 className="mb-4">{productDetail.title}</h1>
            <p>{productDetail.description}</p>
            <Row>
              <Col>
                <p className="text-muted">Price</p>
                <p>$ {productDetail.price}</p>
              </Col>
              <Col>
                <p className="text-muted">Quantity</p>
                <InputGroup className="mb-3">
                  <Button
                  onClick={dashToCart} 
                  variant="outline-secondary" 
                  id="button-addon1">
                    <BsDashSquare />
                  </Button>
                  <Form.Control
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    size="sm"
                  />
                  <Button
                  onClick={addToCart} 
                  variant="outline-secondary" id="button-addon1">
                    <BsPlusSquare />
                  </Button>
                </InputGroup>
              </Col>
            </Row>

            <div className="d-grid gap-2">
              <Button variant="primary" size="lg">
                Add to Cart <FaShoppingCart />
              </Button>
            </div>
          </Col>
        </Row>
      </div>

      <div className="my-5">
        <Row xs={1} md={2} lg={3} className="g-4">
          {productsSuggested.map((productItem) => (
            <Col key={productItem.id}>
              <Card
                onClick={() => navigate(`/product/${productItem.id}`)}
                style={{ width: "18rem", cursor: "pointer" }}
              >
                <Card.Img
                  variant="top"
                  src={productItem.images[0].url}
                  style={{ height: 200, objectFit: "contain" }}
                  alt="productsImages"
                />
                <Card.Body>
                  <small className="text-muted">{productItem.brand}</small>
                  <Card.Title>{productItem.title}</Card.Title>
                  <small className="text-muted">Price</small>
                  <Card.Text> $ {productItem.price}</Card.Text>
                  <Button variant="primary">
                    <ImCart />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default ProductDetail;
