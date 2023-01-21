import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentsList: [],
    count: 0,
  }

  inputName = event => {
    this.setState({name: event.target.value})
  }

  inputComment = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const firstLetter = name.slice(0, 1)
    const date = formatDistanceToNow(new Date())
    const color =
      initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)]

    const object = {
      id: uuidv4(),
      names: name,
      firstLetters: firstLetter,
      comments: comment,
      dates: date,
      newClass: color,
      isFavourite: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, object],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(each => each.id !== id)
    this.setState(prevState => ({
      commentsList: filteredList,
      count: prevState.count - 1,
    }))
  }

  toggleFavourite = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isFavourite: !each.isFavourite}
        }
        return each
      }),
    }))
  }

  render() {
    const {name, comment, commentsList, count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div className="inner-container">
          <div className="element-container">
            <p className="des1">Say something about 4.0 Technologies</p>
            <form className="element-container" onSubmit={this.addComment}>
              <input
                type="text"
                className="name-input"
                placeholder="Your Name"
                onChange={this.inputName}
                value={name}
              />
              <textarea
                className="comment-input"
                placeholder="Your Comment"
                onChange={this.inputComment}
                value={comment}
              />
              <button type="submit" className="btn">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="main-image"
            alt="comments"
          />
        </div>
        <hr />
        <p className="comments-count">
          <span className="number-count">{count}</span> Comments
          <ul className="comment-holder">
            {commentsList.map(eachObject => (
              <CommentItem
                key={eachObject.id}
                commentsList={eachObject}
                deleteComment={this.deleteComment}
                toggleFavourite={this.toggleFavourite}
              />
            ))}
          </ul>
        </p>
      </div>
    )
  }
}

export default Comments
