/*
 Компонент організовує логіку голосування. Основні функції:
           Зберігання стану голосів (good, neutral, bad).
          Обчислення загальної кількості голосів та відсотка позитивних.
          Передача стану та функцій у дочірні компоненти для відображення або дій.*/

import css from "./App.module.css"; //Імпорт стилів, специфічних для компонента App
import CafeInfo from "../CafeInfo/CafeInfo"; //Компонент, що відображає загальну інформацію про кафе
import { useState } from "react"; // хук для зберігання данних(votes)
import type { Votes, VoteType } from "../../types/votes"; //тип для зберігання типів голосів
// import type { VoteType } from "../../Types/Votes"; //тип  стану голосів
import VoteOptions from "../VoteOptions/VoteOptions"; //компонент для вибору голосів
import VoteStats from "../VoteStats/VoteStats"; //компонент для відображеня статистикі голосів
import Notification from "../Notification/Notification"; // Компонент для показу повідомлення, коли голосів немає

export default function App() {
  // Стан для зберігання кількості голосів кожного типу
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Обчислення загальної кількості голосів
  const totalVotes = votes.good + votes.neutral + votes.bad;

  // Обчислення відсотка позитивних голосів
  const positiveRate =
    totalVotes > 0 ? Math.round((votes.good / totalVotes) * 100) : 0;

  /*Функція динамічно збільшує кількість голосів для конкретного типу.
            Викликається дочірнім компонентом VoteOptions при натисканні кнопки.*/
  const handleVote = (type: VoteType) => {
    // оновлює стан
    setVotes((prev: Votes) => ({
      ...prev, // Зберігає поточні значення голосів
      [type]: prev[type] + 1, //Збільшує кількість голосів для вказаного типу
    }));
  };

  // Функція для скидання стану голосів до початкового значення
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      {/* Компонент для голосування */}
      <VoteOptions
        onVote={handleVote} //пропс передає функцію для обробки голосів
        onReset={resetVotes} //пропс передає функцію для скидання голосів
        canReset={totalVotes > 0} //пропс контролює активність кнопки Reset
      />

      {/* Умовний рендеринг: статистика або повідомлення */}
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes} // пропс із об'єктом голосів
          totalVotes={totalVotes} //пропс із загальной кількістью голосів
          positiveRate={positiveRate} //пропс із відсотком позитивних голосів
        />
      ) : (
        <Notification /> //Компонент повідомленн якщо голосів немає
      )}
    </div>
  );
}
