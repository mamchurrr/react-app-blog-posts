import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCommentsAction } from '../actions'

class BtnViewComments extends Component {

  viewComments = () => {
    this.props.fetchCommentsAction(this.props.postId);
  }

  render() {
    return (
      <div>
        <button onClick={this.viewComments} >View all comments</button>
      </div>
    );
  }
}

BtnViewComments.propTypes = {
  fetchCommentsAction: PropTypes.func.isRequired
};
const mapStateToProps = ({ post: { postId } }) => ({
  postId
})

export default connect(mapStateToProps, { fetchCommentsAction })(BtnViewComments);