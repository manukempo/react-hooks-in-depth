# Hooks in Depth

0. Start Project

   1. Install main dependencies

   ```
   $ yarn init -y
   $ git init
   $ yarn add -D prettier eslint eslint-config-prettier babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks parcel-bundler
   $ yarn add react react-dom
   ```

   2. Add config files:

      **package.json**

   ```json
   "scripts": {
    "dev": "parcel src/index.html",
    "format": "prettier \"src/**/*.{js,html}\" --write",
    "lint": "eslint \"src/**/*.{js,jsx}\" --quiet",
    "test": "echo \"Error: no test specified\" && exit 1"
   }
   ```

   **.prettierrc**

   ```json
   {
     "singleQuote": true
   }
   ```

   **.eslintrc.json**

   ```json
   {
     "extends": [
       "eslint:recommended",
       "plugin:import/errors",
       "plugin:react/recommended",
       "plugin:jsx-a11y/recommended",
       "prettier",
       "prettier/react"
     ],
     "rules": {
       "react/prop-types": 0,
       "no-console": 1,
       "react-hooks/rules-of-hooks": 2,
       "react-hooks/exhaustive-deps": 1
     },
     "plugins": ["react", "import", "jsx-a11y", "react-hooks"],
     "parser": "babel-eslint",
     "parserOptions": {
       "ecmaVersion": 2018,
       "sourceType": "module",
       "ecmaFeatures": {
         "jsx": true
       }
     },
     "env": {
       "es6": true,
       "browser": true,
       "node": true
     },
     "settings": {
       "react": {
         "version": "detect"
       }
     }
   }
   ```

   **.gitignore**

   ```
    node_modules/
    .cache/
    dist/
    coverage/
    .vscode/
    .env
   ```

1. **useState** allows you to make our components stateful (previously required a class component) using just functions (more flexible).

2. **useEffect** recreates the React's lifecycle methods: _componentDidMount_, _componentDidUpdate_, and _componentDidUnmount_. Inside useEffect, you can do any sort of side-effect that will only re-run if one of the parameters in the array of dependencies changes.

3. **useContext** allows you to store data in the UserContext.Provider. useContext just pulls that data out when given a Context object as a parameter. In general, context adds a decent amount of complexity (prop drilling) to an app. Only put things in context that are truly application-wide state like user information or auth keys and then use local state for the rest.

4. **useRef** is useful for things likeW

   - Holding on to setInterval and setTimeout IDs so they can be cleared later;
   - Any bit of statefulness that could change but you don't want it to cause a re-render when it does;
   - Referencing DOM nodes directly.

5. **useReducer** allows you to do Redux-style reducers inside a hook. For example, instead of having a bunch of functions to update our various properties, we can have one reducer that handles all the updates based on an action type.

6. **useMemo** is a performance optimization that memoizes expensive function calls so they only are re-evaluated when needed (similar to _useEffect_, where the second parameter is the dependency).

   - NOTE: In computing, **memoization** or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

7. **useCallback** is quite similar and implemented with the same mechanisms as _useMemo_. The goal here is that an Expensive Computation Component only re-renders whenever it absolutely must.

   - **React.memo** is similar to _PureComponent_ where a component will do a simple check on its props to see if they've changed and if not it will not re-render this component.

8. **useLayoutEffect** is almost the same as useEffect except that it's synchronous (runs at the same time as componentDidMount and componentDidUpdate whereas useEffect is scheduled after). You should be using useLayoutEffect ONLY to measure DOM nodes for things like animations.

9. **useImperativeHandle** allows to customize methods on an object that is made available to the parents via the **useRef** API.

   - As the example, wrapping the ElaborateInput component in a **forwardRef** call provides a second ref parameter. Meanwhile, the _inputRef_ (**useRef**) is used to directly access the DOM.
