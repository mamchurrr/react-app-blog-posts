import { combineReducers } from 'redux'
import blog from '../components/pages/Blog/reducer'
import header from '../components/Header/reducer'
import sidebar from '../components/Sidebar/reducer'
import post from '../components/pages/Post/reducer'

export default combineReducers ({
    blog,
    sidebar,
    header,
    post
})