import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Paper, Typography } from '@material-ui/core'
import PostActions from '../PostActions'

import styles from './Post.module.scss'

const Post: FC = () => {
  return (
    <Paper elevation={0} className="p-20">
      <Typography
        variant="h5"
        className={styles.title}
        classes={{ root: styles.paper }}>
        <Link href="/news/test-123">
          <a>
            МВД признало «пожизненно нежелательным» пребывание комика Идрака
            Мирзализаде в России. Он обязан покинуть страну
          </a>
        </Link>
      </Typography>
      <Typography className="mt-10 mb-15">
        Ведомство считает, что комик будет «угрожать общественному порядку».
      </Typography>
      <Image
        src="https://leonardo.osnova.io/d693db9f-c6c1-553d-af1d-52fcd4c2d44a/-/preview/800/-/format/webp/"
        width={700}
        height={365}
      />
      <PostActions />
    </Paper>
  )
}

export default Post
