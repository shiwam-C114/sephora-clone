import React, { useEffect, useState } from "react";
import "./ProdInfo.css";
import { Icon } from "@chakra-ui/react";

import { Button, ButtonGroup } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";

function ProdInfo({ price, brandName, displayName, rating, reviews }) {
  const [prevData, setprevData] = useState([]);
  const [curData, setCurData] = useState([])
  function addToBasket() {
    fetch(`http://localhost:8080/userData/2`)
      .then((res) => res.json())
      .then((daTa) => {
        // setprevData([])
        console.log(daTa.cart, "cart");
        // console.log(...data.cart);
        setprevData(daTa.cart);
        console.log(prevData, "updatd prevData");
      });
      setCurData([{ price, brandName, displayName, rating, reviews }])
  }
  useEffect(() => {
    fetch("http://localhost:8080/userData/2", {
      method: "PATCH",
      body: JSON.stringify({
        cart: [...prevData, ...curData],
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json, "cart updated", json.cart.length));
  }, [prevData]);

  const [value, setValue] = React.useState("1");
  return (
    <div className="ProdInfodiv">
      <h1 className="prodTitle"> {brandName} </h1>
      <h2 className="prodDetail">{displayName} </h2>
      <div className="prodDetailFlex">
        <div className="Rating">
          <ReactStars
            count={5}
            value={+rating}
            isHalf
            size={20}
            activeColor="black"
            edit={false}
          />
          <p style={{ marginTop: "3px", fontSize: "13px" }}>{reviews}</p>

          {/* <p className="ratingText">  549 </p> */}
          {/* <h1> | </h1> */}
        </div>
        {/* <div className ="prodDetailFlex">
                <p className="ratingText">  Ask a question</p>
                <h1> | </h1>
                </div>
                <div className ="prodDetailFlex">
                <Icon as={CheckCircleIcon} w={3} h={3} />
                <p className="ratingText"> 37.8 K </p>
                </div> */}
      </div>

      <h1 className="offerText">
        <b>{price}</b> get it for <b className="offer">{price} </b>with
        Auto-Replenish{" "}
      </h1>
      <img
        className="offerImage"
        src="https://www.sephora.com/contentimages/ppagebanners/072221/2022-02-17-july-cleanplanetpositive-site-desktop-product-page-middle-banner-us-can-handoff.jpg?imwidth=585"
      />
      <h1 className="sizeAv">Size: 1.0 oz / 30 mL</h1>
      <h1 className="sizeAv">Standard size</h1>
      <div className="btn1">
        <Button colorScheme="black" variant="outline">
          1.0 oz / 30 ml
        </Button>
      </div>
      <div className="ShippingType">
        <div className="ShippingTypeText">
          <h4 className="ShippingTypeText1"> Get It Shipped</h4>
          <h4 className="ShippingTypeText2"> Shipping & Returns </h4>
        </div>
        <div className="radioButtonInfo">
          <RadioGroup onChange={setValue} value={value}>
            <div className="radioButtonInfo1">
              <Radio value="1">
                {" "}
                <b>Standard Delivery. </b> Enjoy free shipping with code{" "}
                <b className="offer">FREE</b>
              </Radio>
            </div>
            <br />
            <div className="radioButtonInfo2">
              <Radio value="2">
                {" "}
                <b> Same-Day Delivery </b>{" "}
              </Radio>
            </div>
          </RadioGroup>
          <Button onClick={addToBasket} colorScheme="teal" size="md">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProdInfo;
