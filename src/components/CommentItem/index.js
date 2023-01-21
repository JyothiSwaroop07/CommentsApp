import './index.css'

const CommentItem = props => {
  const {commentsList, deleteComment, toggleFavourite} = props
  const {
    id,
    names,
    firstLetters,
    comments,
    newClass,
    isFavourite,
    dates,
  } = commentsList

  const imgUrl = isFavourite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const addClass = isFavourite ? 'sky-blue' : ''

  const favButton = () => {
    toggleFavourite(id)
  }

  const delButton = () => {
    deleteComment(id)
  }

  return (
    <li className="comment-item" key={id}>
      <div className="content-holder">
        <p className={`user-icon ${newClass}`}>{firstLetters}</p>
        <div className="sub-holder">
          <div className="name-holder">
            <h1 className="name-holder">{names}</h1>
            <p className="time-now">{dates}</p>
          </div>
          <p className="Comment-line">{comments}</p>
        </div>
      </div>
      <div className="icons-holder">
        <button type="button" className="like-btn" onClick={favButton}>
          <img src={imgUrl} className="image2" alt="like" />
        </button>
        <p className={`icon-name ${addClass}`}>Like</p>
        <button
          type="button"
          className="del-btn"
          onClick={delButton}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="del-image"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
