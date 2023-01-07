import css from './About.module.css';
// import sdfcss from '../../images/logo/logo.jpg';

function About() {
  return (
    <section className={'about section'} id="about">
      <div className={css.about__container}>
        <ul className={css.about__list}>
          <li className={css.about_list__item}>
            <img
              className="about-list__img"
              src="../../images/hero/hero-img_sm.jpg"
              alt="Бритье бороды"
              width="270"
              height="445"
            />
          </li>
          <li className={css.about_list__item}>
            <img
              className="about-list__img"
              src="./images/about/img-2.jpg"
              alt="Бритье опасной бритвой"
              width="270"
              height="445"
            />
          </li>
        </ul>
        <div className={css.about__group} data-aos="fade-left">
          <p className="uppertitle uppertitle--mode-light">ПРО НАС</p>
          <h2 className="section-title section-title--mode-light">
            Лучший Барбершоп твоего города
          </h2>
          <p className="subtitle subtitle--mode-light about__subtitle">
            Если ты хочешь добавить в свой образ больше уверенности – тебе точно
            к нам.
          </p>
          <p className="description about__description">
            Мы команда, которая никогда не останавливается на достигнутом и
            жаждет перемен. И когда ты попадешь в руки нашего мастера, то уже
            никогда не сможешь быть прежним. Мы команда, которая всегда с
            клиентами "на одной волне". Поэтому, мы всегда готовы
            усовершенствовать каждого, кто к нам приходит!
          </p>
          <button className="btn btn--mode-light" type="button">
            онлайн-запись
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
