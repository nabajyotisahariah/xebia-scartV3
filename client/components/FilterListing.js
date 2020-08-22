import React from 'react';

const FilterListing = (props) => {

    console.log("FilterListing props ",props)
    return (
        <div>
            {
            props.data.length > 0 ? 
                props.data.map( filter => {

                    return (<div key={filter.type}>
                                <h2 >{filter.type}</h2>
                                
                    { filter.type == 'BRAND' ?
                        filter.values.length > 0 ?  filter.values.slice(0,5).map(
                             f => (<p key={f.title.toString()}><input type="checkbox" value={f.value}/> {f.title}</p>)
                        ) : null
                       : filter.type == 'COLOUR' ?
                        filter.values.length > 0 ?  filter.values.slice(0,5).map(
                                f => (<p key={f.title.toString()}><input type="checkbox" value={f.color}/> {f.title}</p>)
                        ) : null    
                       :  filter.type == 'PRICE' ?
                            filter.values.length > 0 ?  filter.values.slice(0,5).map(
                               f => (<p key={f.displayValue.toString()}><input type="checkbox" value={f.key}/> {f.displayValue}</p>)
                            ) : null    
                        :null    

                    }  
                            
                            </div>)
                })
                : null 
            
            }
        </div>
    );
};

export default FilterListing;