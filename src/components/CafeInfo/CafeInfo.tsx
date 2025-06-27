/*Компонент CafeInfo:
      Відповідає за відображення загальної інформації про кафе.
      Не має стану або логіки — це лише презентаційний компонент.*/

import css from "./CafeInfo.module.css"; // підключення модульного CSS файлу
// експорт функціонального компонента CafeInfo
export default function CafeInfo() {
  return (
    /*Головний контейнер для компонента зі стилями*/
    <div className={css.container}>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.description}>
        Please rate our service by selecting one of the options below.
      </p>
    </div>
  );
}
