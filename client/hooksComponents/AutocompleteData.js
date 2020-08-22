import React from 'react';
import {connect} from 'react-redux';
import Autocomplete from 'react-autocomplete';
import { searchRequestAction } from "./../redux";
//import "./Autocomplete.css";


class AutocompleteData extends React.Component {

    constructor(props, context) {
        super(props, context);

        // Set initial State
        this.state = {
            // Current value of the select field
            value: "Select Products",
            // Data that will be rendered in the autocomplete
            // As it is asynchronous, it is initially empty
            autocompleteData: []
        };

        // Bind `this` context to functions of the class
        this.onChange = this.onChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.getItemValue = this.getItemValue.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.retrieveDataAsynchronously = this.retrieveDataAsynchronously.bind(this);
    }


    /**
     * Updates the state of the autocomplete data with the remote data obtained via AJAX.
     * 
     * @param {String} searchText content of the input that will filter the autocomplete data.
     * @return {Nothing} The state is updated but no value is returned
     */
    retrieveDataAsynchronously(searchText){
        let _this = this;

        this.props.searchRequestAction(searchText).then ( r => {
            _this.setState({
                autocompleteData: this.props.products.searchList
            });
        }) 
    }
    
    /**
     * Callback triggered when the user types in the autocomplete field
     * 
     * @param {Event} e JavaScript Event
     * @return {Event} Event of JavaScript can be used as usual.
     */
    onChange(e){
        this.setState({
            value: e.target.value
        });

        this.retrieveDataAsynchronously(e.target.value);
    }

    /**
     * Callback triggered when the autocomplete input changes.
     * 
     * @param {Object} val Value returned by the getItemValue function.
     * @return {Nothing} No value is returned
     */
    onSelect(val){
        this.setState({
            value: val
        });
    }

    /**
     * Define the markup of every rendered item of the autocomplete.
     * 
     * @param {Object} item Single object from the data that can be shown inside the autocomplete
     * @param {Boolean} isHighlighted declares wheter the item has been highlighted or not.
     * @return {Markup} Component
     */
    renderItem(item, isHighlighted){
        return (
            <div key={item.id.toString()} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.title}
            </div>   
        ); 
    }

    /**
     * Define which property of the autocomplete source will be show to the user.
     * 
     * @param {Object} item Single object from the data that can be shown inside the autocomplete
     * @return {String} val
     */
    getItemValue(item){
        return `${item.title}`;
    }

    render() {
        return (
            <div>
                <Autocomplete
                    getItemValue={this.getItemValue}
                    items={this.state.autocompleteData}
                    renderItem={this.renderItem}
                    value={this.state.value}
                    onChange={this.onChange}
                    onSelect={this.onSelect}
                />
            </div>
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
        searchRequestAction: (key) => dispatch(searchRequestAction(key)),
    };
  };
  

export default connect(mapsStateToProps, mapsDispatchToProps) (AutocompleteData);