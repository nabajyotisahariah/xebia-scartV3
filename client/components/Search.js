import React from "react";
import { connect } from "react-redux";
import { searchRequestAction } from "./../redux";
import AutocompleteData from "./common/AutocompleteData";

class Search extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    const { products } = this.props;
    console.log(" products ", products);

    return (
      <div> <AutocompleteData/></div>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    products : state.products
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    searchRequestAction: (t) => dispatch(searchRequestAction(t)),
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(Search);
