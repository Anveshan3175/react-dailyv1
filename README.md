## react-dailyv1 app

1. Create repo in the GIT react-dailyv1 (keep url handy)
2. Create same project in your desktop
   npx create-react-app react-dailyv1
3. Open react-dailyv1 in VSCode
4. Open Terminal in the VSCode and navigate to folder : react-dailyv1
5. In the terminal, initialize git

- > git init
- > git add .
- > git config --global user.username Anveshan3175
- > git config --global user.email "akunduru4@gmail.com"
- > git commit -m 'first commit'
- > git branch -M main
- > git remote add origin https://github.com/Anveshan3175/react-dailyv1.git

6. To refresh

- > git init
- > git pull
- > make changes
- > git add .
- > git commit -m "test"
- > git push -u origin main

###############
Install Styled Components https://react.school/styled-components https://styled-components.com/docs/basics

- > npm install --save styled-components

###############
Install react router dom

- > npm install react-router-dom

###############

1. Refer external css . Write css file. Names caps
2. Refer the css in js like - import "../css/Common.css";
3. Use className - className="Login"

imp urls

1. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
2. Comment Code Block Ctrl+K+C/Ctrl+K+U
3. https://www.geeksforgeeks.org/html5-semantics/
4. https://www.geeksforgeeks.org/difference-between-article-tag-and-section-tag/
5. https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces

Notes on components

1. <section> represents section of document. <div> is more generic . They can be same in certain context
2. A file can only have one default export, but it can have numerous named exports!

   1. import { Profile } from './Gallery.js'; -- named export
   2. export function Profile() -- in the source file

3. The ability to pass child components to main components will give flexibility. At runtime, any child component can be passed to main component. Also resuability.
4. {} are used to passed names in JSX. {{ }} are used to pass objects and styles.
5. props can be
   1. name {}
   2. objects {{}}
   3. child components {children}
