import React, { FC } from 'react'
import Link from 'next/link'
import { Paper, Avatar, Button, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import CreateIcon from '@material-ui/icons/CreateOutlined'
import MessageIcon from '@material-ui/icons/TextsmsOutlined'
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined'
import MenuIcon from '@material-ui/icons/Menu'
import ArrowBottomIcon from '@material-ui/icons/ExpandMoreOutlined'

import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a>
            <svg className={styles.logo} viewBox="0 0 24 25">
              <path fill="#e8a427" d="M0 19h8.5v6H0v-6z"></path>
              <path d="M0 7h8.5v18l6.5-6V7h9V0H0v7z"></path>
              <path fill="rgba(0,0,0,0.15)" d="M7.5 19h1v6l-1-6z"></path>
            </svg>
          </a>
        </Link>
        <div className={styles.searchBlock}>
          <SearchIcon />
          <input type="text" placeholder="Поиск" />
        </div>
        <Button variant="contained" className={styles.penButton}>
          Новая запись
        </Button>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <Link href="/profile/1">
          <a className="d-flex align-center">
            <Avatar
              className={styles.avatar}
              alt="Remy Sharp"
              src="https://cdn25.img.ria.ru/images/07e4/06/16/1573330809_0:25:894:528_1920x0_80_0_0_0b5cbb79e3f1000d0325babf8e6a9e75.jpg"
            />
            <ArrowBottomIcon />
          </a>
        </Link>
      </div>
    </Paper>
  )
}

export default Header
