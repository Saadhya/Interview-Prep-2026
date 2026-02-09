- npm create vite@latest app-name
- npm run dev
- react-router-dom, react-redux, @reduxjs/toolkit

# libraries used 
- chakraui
- tailwindcss

# chakra-ui
- npm i @chakra-ui/react @emotion/react
- npx @chakra-ui/cli snippet add
- npm i -D vite-tsconfig-paths
- set in vite.config file = tsconfigPaths()
- wrap in the chkra provider in main.tsx file
- or use MCP to integrate AI directly into your apps with editor= https://chakra-ui.com/docs/get-started/ai/mcp-server#windsurf

# tailwindcss
- to install - npm install tailwindcss @tailwindcss/vite -D
- to init - npx tailwindcss init
- to config - put the below one into vite.config.ts
- tailwindcss()
- @import "tailwindcss"; (use into your css files)

# git learning
- git clone
- npm install 
- git add . => commit -m "msg" => git push
- git push -u origin <branch-name>
- git checkout -b branch-name (to create new branch)
- git push -u origin HEAD (to current branch)
