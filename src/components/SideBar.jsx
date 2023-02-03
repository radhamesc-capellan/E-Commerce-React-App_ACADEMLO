import React, { useEffect, useState } from "react";
import { Button, Col, Offcanvas, Row } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getProductsCartThunk } from "../store/slices/productCart.slice";
import { purchaseCartThunk } from "../store/slices/cart.slice";
import { BsTrash } from "react-icons/bs";

const SideBar = ({ show, handleClose }) => {
  const purchases = useSelector((state) => state.purchases);
  const dispatch = useDispatch();

  const productsCart = useSelector((state) => state.productsCart);

  useEffect(() => {
    dispatch(getProductsCartThunk());
  }, []);

  console.log(productsCart);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <FaShoppingCart /> <span> Cart </span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            {purchases.map((purchase) => (
              <li key={purchase.id} className="mb-2">
                <Row>
                  <Col>
                    <img
                      src={purchase.product.images[0].url}
                      alt=""
                      style={{ width: 50 }}
                    />
                  </Col>
                  <Col className="text-center">{purchase.product.title}
                  <div className="text-center">{purchase.quantity}</div>
                  </Col>
                  <Col className="mb-5">
                   <Button variant="light" className="text-danger "> <BsTrash /></Button>
                   
                  </Col>
                </Row>
                
                <Row>
                  <Col className="text-end">
                  <h7 className="text-muted">Price:</h7> <b>$ {purchase.product.price}</b>
                  </Col>
                
                </Row>

                
              </li>
            ))}
          </ul>
          <Button className="" onClick={() => dispatch(purchaseCartThunk())}>
            Check Out
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SideBar;
