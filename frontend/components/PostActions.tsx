import React from 'react'
import { IconButton } from '@material-ui/core'
import CommentsIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import RepostIcon from '@material-ui/icons/RepeatOutlined'
import FavoriteIcon from '@material-ui/icons/BookmarkBorderOutlined'
import ShareIcon from '@material-ui/icons/ShareOutlined'
import { CSSProperties } from '@material-ui/styles'

const styles: CSSProperties = {
  position: 'relative',
  top: '5px',
  display: 'flex',
  padding: 0,
  margin: 0,
  listStyle: 'none',
}

const PostActions: React.FC = () => {
  return (
    <ul style={styles}>
      <li>
        <IconButton>
          <CommentsIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <RepostIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </li>
    </ul>
  )
}

export default PostActions
