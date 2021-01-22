import React from "react";
import PostComtainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import CardList from '../CardList/CardList';
import Subtitle from '../Subtitle/Subtitle';

export default function Home ({history}) {
    return (
        <PostComtainer>
            <SearchBar history={history}/>
            <Subtitle/>
            <CardList/>
        </PostComtainer>
    )
}

