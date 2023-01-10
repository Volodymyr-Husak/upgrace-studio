import css from './ContactsInfo.module.css';

export default function ContactsInfo() {
  return (
    <div className={css.info_container}>
      {/* <div className={css.text_container}>
        <h2>Адреса:</h2>
        <p>м.Львів , Сихів, вул. Зелена, 281А</p>
      </div> */}
      {/* Телефон:+ 38 098 - 555 - 07 - 55 */}
      {/* Години роботи: */}
      <div>
        <p>
          {/* <b>Адреса:</b> м.Тернопіль , Сихів, вул. Зелена, 256А */}
          <b>Адреса:</b> м.Тернопіль , ТЦ Атріум, вул. Йосипа Сліпого 7, 256А
        </p>
        <p>
          <b>Телефон:</b> + 38 097-213-78-60
        </p>
        <p>
          <b>Години роботи:</b>
        </p>
        <p>Пн - Сб: 10:00 - 20:00</p>
        <p>Неділя: 10:00 - 15:00</p>
      </div>
    </div>
  );
}
