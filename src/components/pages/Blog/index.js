import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPostAction } from './actions'
import ListPosts from './viewes/ListPosts'
import Sidebar from '../../Sidebar'
import './style.scss'


class Blog extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const { posts, addPosts } = this.props;
        const allPosts = [...new Set([...posts ,...addPosts])]
        
        return (
            <div id="blog">
                <div className="container">
                    <div className="page page__with-sidebar">
                        <div className="page__wrap">
                            <h1>Blog</h1>
                            <ListPosts posts={allPosts} />
                        </div>
                    </div>
                    <Sidebar blog={true}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ blog: { posts }, sidebar: { addPosts} }) => ({
    posts,
    addPosts
})
const mapDispatchToProps = {
    fetchPosts: fetchPostAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)