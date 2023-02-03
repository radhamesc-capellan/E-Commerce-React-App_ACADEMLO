import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  {
  getPurchasesThunk,
} from "../store/slices/purchases.slice";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './purchases.css'

const Purchases = () => {
  const purchases = useSelector((state) => state.purchases);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);

  return (
    <>
      <h3 className="mb-5">My Purchases</h3>

      <div className="container">
        <ul>
          {purchases.map((purchase) => (
            <li key={purchase.id} className="mb-2">
              <Link to={`/product/${purchase.product.id}`} className="text-link">
                <Row>
                  <Col>
                    <img
                      src={purchase.product.images[0].url}
                      alt=""
                      style={{width: 80 }}
                      
                    />
                  </Col>
                  <Col className="my-5">
                    <span>{purchase.product.title}</span>{" "}
                  </Col>
                  <Col className="my-5 text-center">
                    <span>{purchase.quantity}</span>
                  </Col>
                  <Col className="my-5 ">
                    <span>
                      <b>$ {purchase.product.price}</b>
                    </span>
                  </Col>
                </Row>
              </Link>
              {/* <Card key={purchase.id}> */}
              {/* <Card.Header as="h5">{purchase.product.brand}</Card.Header> */}
              {/* <Card.Body>
              <Row>
                <Col>
                  <img src={purchase.product.images[0].url} alt="" className="img-thumbnail"/>
                </Col>
                <Col>
                  <Card.Title>{purchase.product.title}</Card.Title>
                  <Card.Text>{purchase.quantity}</Card.Text>

                  <Card.Text><b>$ {purchase.product.price}</b></Card.Text>

                  <Card.Text>{purchase.product.quantity}</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          </li> */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Purchases;
