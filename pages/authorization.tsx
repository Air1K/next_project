import Group1 from "../component/svg/Group_1";
import {Box, Container} from "@mui/system";
import {Avatar, Checkbox, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography} from "@mui/material";
import {Button} from "@mui/base";

const Authorization = () => {
  function handleSubmit() {

  }

  return (
    <div className={'authorization'}>
      <div className={'authorization--left'}>
        <div className={'authorization--left__text-bloc'}>

          <div className={'authorization--left__text-bloc-top'}><Group1/>Efirit</div>
          <div className={'authorization--left__text-bloc-bottom'}>
            Цифровой агент для вашего бизнеса
          </div>
        </div>
      </div>
      <div className={'authorization--right'}>
        <div className={'authorization--right__container'}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className={'authorization--right__header'}>
              <span>Войти в систему</span>
              <div className={'authorization--right__header-button'}>
                <Link href="#" variant="body2">
                  Еще нет аккаунта
                </Link>
                <Button>
                  ЗАРЕГИСТРИРОВАТЬСЯ
                </Button>
              </div>
            </div>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                // error={true}
                id="email"
                // helperText="Incorrect entry."
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Забыли пароль?
                  </Link>
                </Grid>
              </Grid>
              <Button
                type="submit"
              >
                Войти
              </Button>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Authorization;