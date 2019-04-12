import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateSortType, updateProductType } from '../actions/psp.js';

class Filters extends Component {
  constructor(props) {
    super(props);

    this.onSortTypeChange = this.onSortTypeChange.bind(this);
    this.onPropertyTypeChange = this.onPropertyTypeChange.bind(this);
  }

  onSortTypeChange(e) {
    this.props.updateSortType(e.target.value)
  }

  onPropertyTypeChange(e) {
    this.props.updateProductType(e.target.value)
  }

  render() {
    const propertyOptions = this.props.propertyTypes && Object.keys(this.props.propertyTypes).map(key => (
      <option key={key} value={key}>{this.props.propertyTypes[key]}</option>
    ));

    const orderOptions = this.props.orders && Object.keys(this.props.orders).map(key => (
      <option key={key} value={key}>{this.props.orders[key]}</option>
    ));
  
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Filters:</h1>
          <div className="form-group">
            <label htmlFor="property-type">Property Type:</label>
            <select className="form-control" id="property-type" name="property-type" onChange={this.onPropertyTypeChange}>
              {propertyOptions}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="sort-by">Sort by price:</label>
            <select value={this.props.selectedOrder} className="form-control" id="sort-by" name="sort-by" onChange={this.onSortTypeChange}>
              {orderOptions}
            </select>
          </div>
          <button type="button" className="btn btn-primary">Download JSON</button>
        </form>
      </div>
    );
  }
}

Filters.propTypes = {
  propertyTypes: PropTypes.object,
  orders: PropTypes.object,
  selectedOrder: PropTypes.string,
  updateSortType: PropTypes.func,
  updateProductType: PropTypes.func
};

const mapStateToProps = state => ({
  propertyTypes: state.posts.initialConfig.propertyTypes,
  orders: state.posts.initialConfig.orders,
  selectedOrder: state.posts.selectedOrder
});

const mapDispatchToProps = {
  updateSortType,
  updateProductType
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
