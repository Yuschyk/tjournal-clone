import { FC, useState } from 'react'
import CheckIcon from '@material-ui/icons/CheckOutlined'
import AddIcon from '@material-ui/icons/AddOutlined'
import { Button } from '@material-ui/core'

import styles from './FollowButton.module.scss'

const FollowButton: FC = () => {
  const [followed, setFollowed] = useState(false)

  return (
    <Button
      onClick={() => setFollowed(!followed)}
      variant="contained"
      style={{ minWidth: 30, width: 35, height: 35 }}>
      {followed ? (
        <AddIcon />
      ) : (
        <CheckIcon style={{ color: '#2ea83a', fontSize: 20 }} />
      )}
    </Button>
  )
}

export default FollowButton
