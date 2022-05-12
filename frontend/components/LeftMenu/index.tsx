import { FC } from 'react'
import Link from 'next/link'
import { Button } from '@material-ui/core'
import FireIcon from '@material-ui/icons/WhatshotOutlined'
import MessageIcon from '@material-ui/icons/TextsmsOutlined'
import TrendingIcon from '@material-ui/icons/TrendingUpOutlined'
import ListIcon from '@material-ui/icons/ListOutlined'

import styles from './LeftMenu.module.scss'

const menu = [
  { text: 'Лента', icon: <FireIcon />, path: '/' },
  { text: 'Сообщения', icon: <MessageIcon />, path: '/messages' },
  { text: 'Рейтинг RJ', icon: <TrendingIcon />, path: '/rating' },
  { text: 'Подписки', icon: <ListIcon />, path: '/follows' },
]

const LeftMenu: FC = () => {
  return (
    <aside className={styles.menu}>
      <ul>
        {menu.map(obj => (
          <li key={obj.path}>
            <Link href={obj.path}>
              <a>
                <Button>
                  {obj.icon}
                  {obj.text}
                </Button>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default LeftMenu
