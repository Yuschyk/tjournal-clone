import React from 'react'
import { Button, Paper, Typography } from '@material-ui/core'
import PostActions from '../PostActions'
import MessageIcon from '@material-ui/icons/TextsmsOutlined'
import UserAddIcon from '@material-ui/icons/PersonAddOutlined'

import styles from './FullPost.module.scss'

export default function Home() {
  return (
    <Paper elevation={0} className={styles.paper}>
      <div style={{ margin: '0 auto', width: 680 }}>
        <Typography variant="h4" className={styles.title}>
          МВД признало «пожизненно нежелательным» пребывание комика Идрака
          Мирзализаде в России. Он обязан покинуть страну
        </Typography>
        <div>
          <Typography>
            МВД заявило, что Идрак Мирзализаде (гражданин Белоруссии с видом на
            жительство в РФ) на шоу «Разгоны» допустил выражения, «возбуждающие
            ненависть и вражду по отношению к лицам русской национальности,
            унижающие их человеческое достоинство». Об этом сообщается на сайте
            ведомства.
          </Typography>
          <Typography>
            МВД пока не уведомляло Мирзализаде об этом в установленном порядке,
            но пообещало сделать. Согласно закону, гражданин, в отношении
            которого принято решение о нежелательности пребывания, обязан
            выехать из РФ в установленном порядке. В противном случае, будет
            депортация.
          </Typography>
          <Typography>Основания для запрета на въезд в Россию:</Typography>
          <Typography>
            Нарушил правила пересечения границы; Сообщил заведомо ложные
            сведения о себе или о цели пребывания в России; Привлекался два и
            более раз к административной ответственности в течение трёх лет; Не
            выехал из России до истечения 30 суток со дня окончания срока
            временного пребывания, если не было исключительных обстоятельств;
            Участвовал в деятельности организации, которая признана в России
            нежелательной; Участвовал в деятельности организации, которая
            признана в России экстремистской или террористической.
          </Typography>
          <div style={{ width: 250, marginLeft: -15 }}>
            <PostActions />
          </div>
          <div className="d-flex justify-between align-center mt-30 mb-30">
            <div className={styles.userInfo}>
              <img
                src="https://leonardo.osnova.io/087fe7b0-cb36-5393-8073-8c2fe58cc445/-/scale_crop/108x108/-/format/webp/"
                alt="Avatar"
              />
              <b>Артём Мазанов</b>
              <span>+245 949</span>
            </div>
            <div>
              <Button variant="contained" className="mr-15">
                <MessageIcon />
              </Button>
              <Button variant="contained">
                <UserAddIcon />
                <b className="ml-10">Подписаться</b>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  )
}
