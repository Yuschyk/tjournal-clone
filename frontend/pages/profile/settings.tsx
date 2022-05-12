import React from 'react'
import {
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'

import MainLayout from '../../layouts/MainLayout'

export default function Settings() {
  return (
    <MainLayout hideComments>
      <Paper className="p-20" elevation={0}>
        <Typography variant="h6">Основные настройки</Typography>
        <Divider className="mt-20 mb-30" />
        <form className="mt-20">
          <TextField
            className="mb-20"
            label="Никнейм"
            size="small"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            className="mb-20"
            label="Эл. почта"
            size="small"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Пароль"
            size="small"
            variant="outlined"
            fullWidth
            required
          />
          <Divider className="mt-30 mb-20" />
          <Button color="primary" variant="contained">
            Сохранить изменения
          </Button>
        </form>
      </Paper>
    </MainLayout>
  )
}
