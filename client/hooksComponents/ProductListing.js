import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {productRequestAction,filterRequestAction, addToCart, addToCartFromStorage} from "./../redux";
import Header from './Header';
import FilterListing from './FilterListing';

function ProductListing(props) {

    const [count, setCount] =  useState(0);
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    
    console.log("products ",products)

    useEffect( () => {

        dispatch(productRequestAction());
        dispatch(filterRequestAction());

        console.log("ProductListing.componentDidMount ",localStorage.getItem("userInfo"));
        if (localStorage.getItem("userInfo") == null || localStorage.getItem("userInfo") == "null") {
          props.history.push("/");
        }
        else {
          console.log("=== ",JSON.parse(localStorage.getItem("itemInfo")))
          if (localStorage.getItem("itemInfo") != null && localStorage.getItem("itemInfo") != "null") {
            dispatch(addToCartFromStorage( JSON.parse(localStorage.getItem("itemInfo")) ))        
          }
        }
    }, [])

    const addProduct = (_product) => {
      console.log("addProduct ", _product," ", products.addToCart);      
      if(_product) {
        dispatch(addToCart(_product));
        localStorage.setItem("itemInfo", JSON.stringify(products.addToCart) );
      }
    };

    return (
        <div className="prodctlisting">
        <Header {...props} />
        <div className="contentarea">
          <div className="filterbox">
            <FilterListing {...props} data={products.filterList}/>
          </div>
          <div className="productlist">
            <h2>Product page</h2>
            {products.productList.map((p) => {
              return (
                <div key={p.id} className="products">
                  <div className="productimg">
                    <img src={p.image} height="50" width="50" />
                  </div>

                  <div className="productdetails">
                    <div>Discount {p.discount} %</div>
                    <div>
                      {p.title} color {p.colour.color}
                    </div>
                    <div>
                      Brand {p.brand}{" "}
                      <span onClick={() => addProduct(p)}> Add </span>{" "}
                    </div>
                    <div>Price {p.price.final_price}$</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default ProductListing;