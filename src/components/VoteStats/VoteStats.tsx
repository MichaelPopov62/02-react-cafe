/* Компонент призначений для відображення статистики:
 1.Кількості голосів кожного типу
 2. Загальної кількості голосів 
 3. Відсотка позитивних голосів.
 4.Не обчислює дані самостійно.
 5.Лише рендерить інформацію, передану через пропси.*/

// Імпорт типу Votes, який описує об'єкт голосів
import type { Votes } from "../../types/votes";

// Імпорт стилів для компонента
import styles from "./VoteStats.module.css";

// Інтерфейс пропсів, які отримує компонент VoteStats
interface VoteStatsProps {
  votes: Votes; //Об'єкт з кількістю голосів (good, neutral, bad), переданий з батьківського компонента App
  totalVotes: number; // Загальна кількість голосів, обчислюється а App
  positiveRate: number; // Відсоток позитивних голосів, обчислюються в App
}
// Компонент для відображення статистики голосів
export default function VoteStats({
  votes, //об'єкт голосів
  totalVotes, //загальна кількість голосів
  positiveRate, //відсоток позитивних голосів
}: VoteStatsProps) {
  return (
    <div className={styles.container}>
      {/* Відображаємо кількість позитивних голосів */}
      <p className={styles.stat}>
        Good: <strong>{votes.good}</strong>
      </p>
      {/* Відображаємо кількість нейтральних голосів */}
      <p className={styles.stat}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      {/* Відображаємо кількість негативних голосів */}
      <p className={styles.stat}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      {/* Відображаємо загальну кількість голосів */}
      <p className={styles.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      {/* Відображаємо відсоток позитивних голосів */}
      <p className={styles.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
}
