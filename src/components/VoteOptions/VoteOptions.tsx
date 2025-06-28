/*Компонент виконує функцію:
       1. Рендер кнопок для   ("Good", "Neutral", "Bad")
       2. Умовне відображення кнопки Reset:
            -Кнопка Reset відображається лише тоді, коли є хоча б один голос (canReset).
       3. Передача подій (функцій) через пропси для обробки голосування та скидання голосів..*/

import css from "./VoteOptions.module.css"; // Імпорт модульних стилів
import type { VoteType } from "../../types/votes"; // Імпортуємо тип VoteType

// Оголошую типи для пропсів
interface VoteOptionsProps {
  onVote: (type: VoteType) => void; // Функція для  обробки голосування(отримує тип голосу)
  onReset: () => void; // Функція для скидання голосів
  canReset: boolean; // Показувати кнопку Reset чи ні
}
// Компонент VoteOptions

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      {/* Кнопка для голосування "Good" */}
      <button className={css.button} onClick={() => onVote("good")}>
        Good
      </button>
      {/* Кнопка для голосування "Neutral" */}
      <button className={css.button} onClick={() => onVote("neutral")}>
        Neutral
      </button>
      {/* Кнопка для голосування "Bad" */}
      <button className={css.button} onClick={() => onVote("bad")}>
        Bad
      </button>
      {/* Кнопка Reset відображається лише, якщо canReset = true */}
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
