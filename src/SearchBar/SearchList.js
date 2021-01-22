import React from 'react';
import List from '@material-ui/core/List';
import './SearchList.css'

function SearchList ({searchList}){
    const renderingList = searchList.map((list) => (
        <List children={list.title}/>
    ));

    return (
        <div className="ListContainer">
            {renderingList}    
        </div>
    );
}

export default SearchList;
