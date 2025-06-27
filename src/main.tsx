/*Цей файл є точкою входу для React-додатка, яка ініціалізує рендеринг головного компонента (App) у DOM-елемент із ідентифікатором root. */

import React from "react"; // Необхідний для використання JSX.
import ReactDOM from "react-dom/client"; // Містить методи для рендерингу React-компонентів у DOM.
import App from "../src/components/App/App"; // Імпорт головного компонента додатка.
import "modern-normalize"; // CSS-бібліотека для уніфікації стилів між різними браузерами.
import "./index.css"; // Файл із власними стилями для проекту.

// Ініціалізація рендерингу React-додатка в елемент з id "root"
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* Головний компонент додатка */}
    <App />
  </React.StrictMode>
);
