import React, {Component} from "react";
import MediaCardResult from './MediaCardResult';
import { Grid } from 'semantic-ui-react';
import SearchBar from '../SearchBar/SearchBar';
import './SearchPage.css';

export default class SearchPage extends Component {
    state = {
        data:[]
    }
    componentWillUnmount(){
        // localStorage.removeItem('data');  
    }

    // static getDerivedStateFromProps(nextProps, prevState){
    //     if(nextProps.props.location.state != undefined && nextProps.props.location.state.detail !== prevState.data){
    //         return {data: nextProps.props.location.state.detail};
    //     }
    //     console.log("getDerived");
    //     console.log(nextProps);
    //     console.log(prevState);

    //     return null;
    // }
    
    shouldComponentUpdate(nextProps, nextState){
        console.log("update checking...");
        if(nextProps.props.location !== this.props.props.location ||
            JSON.stringify(this.state.data) !== JSON.stringify(nextState.data)){
        
            
            // nextProps.props.location.state !== undefined || 
            //     JSON.stringify(this.state.data) !== JSON.stringify(nextState.data))
            console.log("this props :");
            console.log(this.props);
            console.log("nextProps :");
            console.log(nextProps);

            console.log("this state :");
            console.log(this.state);
            console.log("nextState :");
            console.log(nextState)
            // console.log(this.props === nextProps && this.state === nextState);
            console.log(true);
            return true;
        }
        console.log("this props :");
        console.log(this.props);
        console.log("nextprops");
        console.log(nextProps);
        // console.log("nextProps.location :");
        // console.log(nextProps.props.location);

        console.log("this state :");
        console.log(this.state);
        console.log("nextState :");
        console.log(nextState);
        // console.log(JSON.stringify(this.state.data) ===JSON.stringify(nextState.data));
        // console.log(this.state.data[0] === nextState.data[0]);
        console.log(false);
        return false;
    }

    componentDidUpdate(){
        const { location } = this.props.props;
        console.log("DidUpdate");
        console.log(location);
           
        if(location.state !== undefined){
            //처음 들어왔을때 or 뒤로가기 후 재검색
            console.log("first-visit");
            const searchData = location.state.detail;
            console.log(searchData);
            this.setState({
                data: searchData
            });
            localStorage.setItem('data', JSON.stringify(searchData));
        } else {
            //새로 고침
            console.log("refresh");
            const searchData =JSON.parse(localStorage.getItem('data'));
            console.log(searchData);
            this.setState({
                data: searchData
            });
        }

    }
    

    componentDidMount(){
        const { location } = this.props.props;
        console.log("Didmount")
        console.log(location);
           
        if(location.state !== undefined){
            //처음 들어왔을때 or 뒤로가기 후 재검색
            console.log("first-visit");
            const searchData = location.state.detail;
            console.log(searchData);
            this.setState({
                data: searchData
            });
            localStorage.setItem('data', JSON.stringify(searchData));
        } else {
            //새로 고침
            console.log("refresh");
            const searchData =JSON.parse(localStorage.getItem('data'));
            console.log(searchData);
            this.setState({
                data: searchData
            });
        }
    }         


    render (){
        console.log("render...")
        const {history} = this.props.props;
        const searchData = this.state.data; 
        const rendering = searchData.map((data) => (
            <MediaCardResult
                title={data.title}
                image={data.image}/>
        ));
        return (
            <div className="ResultContainer">
                <SearchBar
                    history={history}/>
                {rendering}
            </div>          
        )   
    }
}   