# Kurochou WebApp
## ❓ What is it?
kurochou.me is a small project being developed by two good friends with a passion for development, aiming to challenge ourselves and improve our skills. The goal is to build a simple website where people can access and watch clips of our gameplay and daily laughs.

---

## 🚀 Features

- Login with username and password authentication;
- JWT token generation;
- Responsive layout with **TailwindCSS**;
- Communication with **.NET API** ([kurochou-api repository](https://github.com/meirochun/kurochou-api));
- Video upload and playback (to-do);

---

## 🛠 Technologies

- **Frontend:** Next.js, TailwindCSS  
- **Backend:** .NET 8, Dapper  
- **Authentication:** JWT  
- **Database:** PostgreSQL  

---

## ⚡ Prerequisites

- Node.js >= 18  
- npm or yarn  

---

## 💻 How to run the project

### Frontend (Next.js)
```bash
git clone git@github.com:MrFelopes/kurochou-front.git
cd kurochou-front
npm install
npm run dev
``` 

### About the database
Although the project code is publicly available, database access is restricted to me and [Meiro](https://github.com/meirochun). If you want to test the project, I recommend setting up a local database. Alternatively, I also recommend [supabase](https://supabase.com) for creating online PostgreSQL databases.