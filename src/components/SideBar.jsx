import React, { useEffect, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getProductsCartThunk } from "../store/slices/productCart.slice";

const SideBar = ({ show, handleClose }) => {
  const productsCart = useSelector((state) => state.productsCart);
  const dispatch = useDispatch();

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
          {productsCart.map((productCart) => (
            <div key={productCart.id}>
              <img src={productCart.product.images[0].url} />

              {productCart.product.title}
              {productCart.product.quantity}
            </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SideBar;
