import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import * as localActions from "./actions";
import DatePicker from "react-datepicker";
import { Header } from "../common";
import "./home.scss";
import "react-datepicker/dist/react-datepicker.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date().getTime(),
      toDate: new Date().getTime()
    };
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
  }

  componentDidMount() {
    this.props.listHotels();
  }
  handleFromChange(date) {
    this.setState({
      startDate: new Date(date).getTime()
    });
  }
  handleToChange(date) {
    this.setState(
      {
        toDate: new Date(date).getTime()
      },
      () => alert(new Date(this.state.toDate))
    );
  }
  filterDates = () => {
    this.props.filterHotels(
      this.props.home.hotelList.hotels,
      this.state.startDate,
      this.state.toDate
    );
  };

  render() {
    return (
      <div>
        <Header header="Search by Hotels" />
        <div className="dateContainer">
          <div className="datePickers">
            <label>From</label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleFromChange}
            />
          </div>
          <div className="datePickers">
            <label>To</label>
            <DatePicker
              selected={this.state.toDate}
              onChange={this.handleToChange}
            />
          </div>
          <button onClick={this.filterDates} className="btn">
            Search
          </button>
        </div>
        <Header styles={{ marginTop: "40px" }} header="Hotel Listing" />
        <div className="listContainer">
          <div className="leftSection">
            <input type="text" placeholder="search with hotel names" />
          </div>
          <div className="hotels">
            <div className='hotels_topPart'>
              <p>Total nights</p>
              <div className='sortingSection'>
                  <button onClick={()=>this.props.sort(this.props.home.hotelList.hotels,'name')} className='btn'>Sort by name</button>
                  <button onClick={()=>this.props.sort(this.props.home.hotelList.hotels,'price')} className='btn'>Sort by price</button>
              </div>
            </div>
            <div className='cardContainer'>
           
            {this.props.home &&
              this.props.home.hotelList &&
              this.props.home.hotelList.hotels.map(item => {
                return (
                  <div key={item.name} className="cards">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item.city}</p>
                  </div>
                );
              })}
               </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { home } = state;
  return { home };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...localActions }, dispatch);
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
