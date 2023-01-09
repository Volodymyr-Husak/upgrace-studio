import css from './Hero.module.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Link from '@mui/material/Link';
const theme = createTheme({
  palette: {
    // primary: {
    //   // Purple and green play nicely together.
    //   main: purple[500],
    // },
    // secondary: {
    //   // This is green.A700 as hex.
    //   main: '#11cb5f',
    // },
    beige: {
      main: 'RGB(143, 110, 106)',
    },
  },
});
function Hero() {
  return (
    <ThemeProvider theme={theme}>
      <section className={css.hero}>
        {/* <section className={css.navContainer}> */}
        <div className={css.hero__container}>
          {/* <p className="uppertitle uppertitle--mode-dark" lang="en">
            A hair salon for men in Kyiv
          </p> */}
          <h1 className={css.hero__title}>
            Студія у яку завжди
            <br />
            повертаються
          </h1>
          {/* <button className={css.hero__btn} type="button" data-modal-open>
          Замовити послугу
        </button> */}
          <Button
            className={css.hero__btn}
            // color="beige"
            variant="contained"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc3crJ3vJ7TPVaZ_ifq_kYLLXWZ5cj49CRzCQ_fLwg45rtRFg/viewform"
          >
            Стати клієнтом
          </Button>
          {/* <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSf-PDy4R3LXe6cwWSz9dPhB3pbcC6ltdKnKXJ2Htnz6be8xMQ/viewform"
          underline="none"
        >
          {'underline="none"'}
        </Link> */}
        </div>
      </section>
    </ThemeProvider>
  );
}

export default Hero;
