# React + Redux Toolkit App

Цей проект демонструє міграцію з React Context API до Redux Toolkit для централізованого управління станом у React-додатку з TypeScript.

## 🔧 Технології

- React + TypeScript
- Redux Toolkit
- React Redux
- Vite (опційно)

---

## 📁 Структура проєкту
```
src/
├── components/
│ ├── UserComponentA.tsx
│ ├── UserComponentB.tsx
│ └── UserComponentC.tsx
├── redux/
| ├── slices/
| │ ├── UserSlice.ts
│ ├── store.ts
│ └── hooks.ts
├── App.tsx
├── main.tsx
```

## 🧩 Redux Toolkit: Основні частини
```
🔹 store.ts
🔹 userSlice.ts
🔹 hooks.ts
```

## 🧩 Компоненти
```
UserComponentA.tsx
UserComponentB.tsx
UserComponentC.tsx <- Цей компонент раніше використовував Context API, а тепер працює з Redux.
```

## 🛠 Видалено
```
AppContext.tsx
useContext(AppContext) у всіх компонентах
```
## 🧪 Відлагодження

Проєкт підтримує Redux DevTools. Ви можете відстежувати всі дії та зміни стану прямо в браузері.

# 🌐 Демо

Посилання на розгорнутий проєкт: [Vercel](https://home-work-45.vercel.app/)
