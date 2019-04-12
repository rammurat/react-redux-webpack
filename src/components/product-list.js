import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/psp.js';
const image = require('../../src/static/images/property.jpg')

class Posts extends Component {
  constructor(props) {
    super(props);

    this.getSortedData = this.getSortedData.bind(this);
  }

  componentWillMount() {
    // load data on component ready
    this.props.fetchPosts();
  }

  // sort data in asc/desc form
  getSortedData(order) {
    if (this.props.posts) {
      if (order === 'asc') {
        return this.props.posts.sort((a, b) => {
          return a.pricePerMonth - b.pricePerMonth
        })
      } else {
        return this.props.posts.sort((a, b) => {
          return b.pricePerMonth - a.pricePerMonth
        })
      }
    }
  }

  render() {
    // count total number of properties
    const totalProperties = this.props.paginator && this.props.paginator.count
    const sortedList = this.getSortedData(this.props.order).slice(0, this.props.perPage) || []
    
    // return badge color to identify property type
    const badgeClass = (type) => {
      const category = {apartment: 'info',room: 'warning',studio: 'success',residence: 'secondary'}
      return `badge badge-${category[type]}`
    }

    const postItems = sortedList && sortedList.map(post => (
      <div className="product-list" key={post.id}>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
              <img src={image} alt="..." className="rounded"/>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8">
              <div className="row">
                  <div className="col-10">
                      <p>{post.title}</p>
                      <p><span className={badgeClass(post.type)}>{post.type}</span></p>
                  </div>
                  <div className="col-2 d-flex justify-content-end">
                      <p>{post.pricePerMonth}{post.currencySymbol}</p>
                  </div>
              </div>
              <div className="d-flex justify-content-end">
                  <div className="p-2">
                      <button type="button" className="p-2 btn btn-primary">More details</button>
                  </div>
                  <div className="p-2">
                      <button type="button" className="p-2 btn btn-primary">Book now!</button>
                  </div>
              </div>
          </div>
        </div>
      </div>
    ));

    return (
      <div>
        <p><strong>{totalProperties}</strong> properties to rent in city.</p>

        {/** Load PSP items */}
        {postItems}

        {/** Pagination for next phase */}
        <nav aria-label="Page navigation example" className="product-pagination ">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array,
  order: PropTypes.string,
  perPage: PropTypes.number
};

const mapStateToProps = state => ({
  posts: state.posts.products,
  paginator: state.posts.paginator,
  order: state.posts.selectedOrder,
  perPage: state.posts.initialConfig.pagination.perPage,
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
