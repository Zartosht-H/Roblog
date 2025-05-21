# React + Vite
# **Roblog** is a React + Vite project

## This is a sample that get data from local json-server and show them in a nice and freindly user interface

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## To setup and run the project folow these steps:
  1. install [NodeJS](https://nodejs.org/dist/v22.16.0/node-v22.16.0-x64.msi)
  2. start terminal
  3. run these commands:  
     `git clone https://github.com/Zartosht-H/Roblog.git`  
     `cd Roblog`  
     `npm install`  
     `npx json-server --watch database/db.json --port 3000`  
     `npm run dev`  
  4. open your browser and go to [localhost:5137](localhost:5137)
  5. Enjoy it...!

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
