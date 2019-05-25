import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createCommentPostAction } from '../actions'

class AddCommentPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    console.log(props)
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  onSubmit = (e) => {
    e.preventDefault();

    const comment = {
      postId: this.props.postId,
      body: this.state.body
    };

    this.props.createCommentPostAction(comment);
  }

  render() {
    return (
      <div>
        <h2>Add comment</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

AddCommentPostForm.propTypes = {
  createCommentPostAction: PropTypes.func.isRequired
};

const mapStateToProps = ({ post: { postId } } ) => ({
  postId
})

export default connect(mapStateToProps, { createCommentPostAction })(AddCommentPostForm);