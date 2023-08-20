import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetail} = props
  const {id, name, comment, date, isLiked, initialClassName} = commentDetail
  const initalLetter = name ? name[0].toUpperCase() : ''
  const postedTime = formatDistanceToNow(date)
  const likeTextClassName = isLiked ? 'button active' : 'button1'
  const likeImageurl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickbuttonLike = () => {
    const {toggleLike} = props
    toggleLike(id)
  }
  return (
    <li className="list">
      <div className="container3">
        <div className={initialClassName}>
          <p className="initial">{initalLetter}</p>
        </div>

        <div className="container4">
          <h1 className="heading-name">{name}</h1>
          <p className="comment">{comment}</p>
        </div>
        <p className="date">{postedTime}</p>
      </div>
      <img src={likeImageurl} alt="like" className="like-image" />
      <button
        type="button"
        className={likeTextClassName}
        onClick={onClickbuttonLike}
      >
        Like
      </button>
      <hr />
    </li>
  )
}
export default CommentItem
