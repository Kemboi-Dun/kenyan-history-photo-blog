# Kenyan-History-Photo-Blog

> [!NOTE]
> Data displayed are fetched from a different site.
> [Data source page](https://traveldiarieskenya.wordpress.com/2014/10/03/a-look-at-kenya-through-the-years-pictureblog-1914-1990s/comment-page-1/)
### Home page
![Screenshot from 2024-07-06 13-09-23](https://github.com/Kemboi-Dun/kenyan-history-photo-blog/assets/86706504/58ea0413-ec01-4ee3-bbf1-6077cf862207)

### Detailed view
![image](https://github.com/Kemboi-Dun/kenyan-history-photo-blog/assets/86706504/65462aec-f1b4-48f9-a47c-e687307227fb)

## Backend Setup
```
git clone git@github.com:Kemboi-Dun/kenyan-history-photo-blog.git
```
```
cd travel_diaries_kenya_backend
```
```pip install fastapi uvicorn python-multipart requests beautifulsoup4 ``` or ``` pip install -r requirements.txt ```
```
fastapi dev Travel-diaries.py
```

#### Terminal Output:
![image](https://github.com/Kemboi-Dun/kenyan-history-photo-blog/assets/86706504/671dca3c-c1be-4898-9e88-fb51a1c92b0b)

## Frontend Setup
```
git clone git@github.com:Kemboi-Dun/kenyan-history-photo-blog.git
```
```
npm install
```
```
npm run dev
```
#### Terminal Output:
![image](https://github.com/Kemboi-Dun/kenyan-history-photo-blog/assets/86706504/356b7f13-b70b-4b9f-a5ac-12f3469ab233)


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
