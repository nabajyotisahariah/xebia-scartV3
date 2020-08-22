import React from "react";
import { connect } from "react-redux";
import {productRequestAction,searchRequestAction,filterRequestAction, addToCart, addToCartFromStorage} from "./../redux";
import FilterListing from "./FilterListing";
import Header from "./Header";

class ProductListing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  addProduct = (_product) => {
    console.log("addProduct ", _product," ", this.props.products.addToCart);      
    if(_product) {
      this.props.addToCartTrigger(_product);
      localStorage.setItem("itemInfo", JSON.stringify(this.props.products.addToCart) );
    }
  };

  componentDidMount = () => {

    this.props.productInfoTrigger();
    this.props.filterTrigger();

    console.log("ProductListing.componentDidMount ",localStorage.getItem("userInfo"));
    if (localStorage.getItem("userInfo") == null || localStorage.getItem("userInfo") == "null") {
      this.props.history.push("/");
    }
    else {
      console.log("=== ",JSON.parse(localStorage.getItem("itemInfo")))
      if (localStorage.getItem("itemInfo") != null && localStorage.getItem("itemInfo") != "null") {
        this.props.addToCartFromStorage( JSON.parse(localStorage.getItem("itemInfo")) )        
      }
    }
    
  }

  render() {

    const { products } = this.props;
    console.log("render products ", products);

    return (
      <div className="prodctlisting">
        <Header {...this.props} />
        <div className="contentarea">
          <div className="filterbox">
            <FilterListing {...this.props} data={this.props.products.filterList}/>
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
                      <span onClick={() => this.addProduct(p)}> Add </span>{" "}
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
}

const mapsStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    productInfoTrigger: () => dispatch(productRequestAction()),
    searchTrigger: () => dispatch(searchRequestAction("anc")),
    filterTrigger: () => dispatch(filterRequestAction()),
    addToCartTrigger : (item) => dispatch(addToCart(item)),
    addToCartFromStorage : (item) => dispatch(addToCartFromStorage(item)),
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(ProductListing);
