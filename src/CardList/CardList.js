import React from 'react';
import MediaCard from './MediaCard';
import NoMarginCard from './NoMarginCard';
import './CardList.css';
import axios from 'axios';


class CardList extends React.Component {
    state = {
        fetching: false,
        data: [
            {title: null, image: null},
            {title: null, image: null},
            {title: null, image: null},
            {title: null, image: null}
        ]
    };
    randomFunc = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    getRandomInfo = async () => {
        this.setState({
            fetching: true
        });
        var queryString = "";
        for(let i=0; i<4; i++){
            let randomId = this.randomFunc(1, 16461);  //order가 1~860 까지
            queryString = queryString + `order=${randomId}&`;
        }
        const information = await axios.get("/load?" + queryString.slice(0, -1));

        this.setState({
            fetching: false,
            data: information.data
        })

        console.log(this.state);
        const {data} = this.state
    }
    componentDidMount() {
        this.getRandomInfo();
    }
    render() {
        const {fetching, data} = this.state;
        //fetching 나중에 활용하기

        return (
            <div className="CardWrapper">
                <NoMarginCard 
                    title={data[0].title}
                    image={data[0].image}/>
                <MediaCard
                    title={data[1].title}
                    image={data[1].image}/>
                <MediaCard
                    title={data[2].title}
                    image={data[2].image}/>
                <MediaCard
                    title={data[3].title}
                    image={data[3].image}/>
            </div>
        );
    }
}

export default CardList;