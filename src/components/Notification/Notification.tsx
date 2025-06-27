/*Компонент відповідає за інформування користувача про відсутність даних.
    Не взаємодіє з іншими компонентами напряму, тільки відображається за умовою.*/

import css from "./Notification.module.css"; // імпорт модульних стилів для

// експорт функціонального компонента Notification
export default function Notification() {
  return <p className={css.message}>No feedback yet</p>;
}
