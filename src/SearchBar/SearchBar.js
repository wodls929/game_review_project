import axios from 'axios';
import _ from 'lodash';
import React, { Component } from 'react';
import { Search, Grid,} from 'semantic-ui-react';


const initialState = { isLoading: false, results: [], value: '' }

export default class SearchBar extends Component {
  state = initialState;

  handleSubmit =(e) => {//enter 눌렀을때
    const input = this.state.value;
    e.preventDefault();
    console.log(input);

    setTimeout(async() => {
      if (input.length < 1) return this.setState(initialState)

      const results = (await axios.get("/search?title=" + input)).data;
      console.log(results);
      console.log("DB search complete");
      this.props.history.push({
        pathname: "/search",
        search: `?title=${input}`,
        state: {detail: results}  //배열 전달
      });
    }, 300)
  }

  handleResultSelect = (e, { result }) => {//검색 결과 클릭했을때
    this.setState({ 
      value: result.title 
    });
    this.props.history.push({
      pathname: "/search",
      search: `?title=${result.title}`,
      state: {detail: [result]} //result가 객체 이므로 배열로 만듬 (searchpage에 배열 전달로 통일)
    });
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })
    
    setTimeout(async() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const results = (await axios.get("/search?title=" + value)).data;
      console.log(results)
    
      this.setState({
        isLoading: false,
        results: results,
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid centered textAlign={"center"} container>
        <Grid.Column width={6} textAlign={"center"}>
          <form onSubmit={this.handleSubmit}>
            <Search
              className={"SearchBar"}
              loading={isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, {
                leading: true,
              })}
              results={results}
              value={value}
              size={"large"}
              {...this.props}
            />
          </form>
        </Grid.Column>
      </Grid>
    );
  }
}
