import React from 'react'
import Comments from './Comments'

export default function CommentBox() {
  return (
    <div>
       <Comments
        commentsUrl="http://localhost:4500/comments"
        currentUserId="1"
      />
    </div>
  )
}
