# 🧬 Инструмент для выравнивания аминокислотных последовательностей

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://gaigerov.github.io/aminoacids)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Интерактивный инструмент для визуализации выравнивания аминокислотных последовательностей с анимацией и биоинформатическим анализом.


## ✨ Особенности

- Визуализация выравнивания последовательностей с цветовой кодировкой
- Точечная матрица для сравнения последовательностей
- Анимированное преобразование буквенных обозначений в графические цепочки
- Интерактивные элементы с подсказками
- Адаптивный дизайн для всех устройств
- Поддержка копирования последовательностей
- Валидация ввода аминокислотных последовательностей

## 🚀 Быстрый старт

### Установка зависимостей
```bash
npm install
```

### Запуск в режиме разработки
```bash
npm run dev
```

### Сборка для production
```bash
npm run build
```

### Деплой на GitHub Pages
```bash
npm run deploy
```

## 🌐 Деплой на GitHub Pages

1. Убедитесь, что в `vite.config.ts` указан правильный base URL:
```ts
export default defineConfig({
  base: '/aminoacids/',
  // ...
})
```

2. В `package.json` добавьте:
```json
"homepage": "https://gaigerov.github.io/aminoacids",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Выполните деплой:
```bash
npm run deploy
```

## 🧪 Технологии

- [React](https://reactjs.org/) - Библиотека для построения пользовательских интерфейсов
- [TypeScript](https://www.typescriptlang.org/) - Статическая типизация
- [Vite](https://vitejs.dev/) - Сборка проекта
- [Material-UI](https://mui.com/) - UI компоненты
- [Framer Motion](https://www.framer.com/motion/) - Анимации
- [React Hook Form](https://react-hook-form.com/) - Управление формами

## 🧬 Цветовая схема аминокислот

| Группа | Цвет | Аминокислоты |
|--------|------|--------------|
| Цистеин | ![#ffea00](https://img.shields.io/badge/-%23ffea00-ffea00) | C |
| Гидрофобные | ![#67e4a6](https://img.shields.io/badge/-%2367e4a6-67e4a6) | A, I, L, M, F, W, Y, V, P |
| Глицин | ![#c4c4d4](https://img.shields.io/badge/-%23c4c4d4-c4c4d4) | G |
| Отрицательно заряженные | ![#fc9cac](https://img.shields.io/badge/-%23fc9cac-fc9cac) | D, E |
| Положительно заряженные | ![#bb99ff](https://img.shields.io/badge/-%23bb99ff-bb99ff) | K, R |
| Полярные незаряженные | ![#80bfff](https://img.shields.io/badge/-%2380bfff-80bfff) | S, T, H, Q, N |
| Пробел | ![#ffffff](https://img.shields.io/badge/-%23ffffff-ffffff) | - |

## 📄 Лицензия

Этот проект распространяется под лицензией MIT. Подробнее см. в файле [LICENSE](LICENSE).

---

<div align="center">
  <a href="https://gaigerov.github.io/aminoacids">
    <img src="https://img.shields.io/badge/Open%20in%20GitHub%20Pages-181717?style=for-the-badge&logo=github" alt="Open in GitHub Pages">
  </a>
</div>
