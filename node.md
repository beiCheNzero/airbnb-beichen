### 爱彼迎项目实战-react

#### 1.创建项目

1. `create-react-app ljlairbnb`

2. 配置图标

3. 配置标题

4. 配置jsconfig.js文件

5. 配置别名

   @ => src  webpack中配置

   但是在react脚手架中隐藏了webpack的配置

   方案一：`npm run eject`将webpack配置暴露出来，但是不建议

   方案二：craco => create-react-app config 的缩写，可以将webpack的配置合并

   这里采用第二种方案

   安装craco：`npm install @craco/craco`在最新的脚手架中不支持

   需要安装alpha的版本：`npm install @craco/craco@alpha -D`

   创建craco.config.js文件

   配置完别名之后需要修改启动文件，将启动命令react-scripts改成craco

6. 配置less

   安装：`npm install craco-less@2.1.0-alpha.0`

   **在antdesign官网中可以找到相对应的配置。**

   ```js
   const path = require('path')
   const CracoLessPlugin = require('craco-less')
   
   const resolve = pathname => path.resolve(__dirname, pathname)
   
   module.exports = {
     // 配置webpack
     webpack: {
       alias: {
         "@": resolve('src'),
         "utils": resolve('src/utils')
       }
     },
     // 配置less
     plugins: [
       {
         plugin: CracoLessPlugin,
         // 如下配置是针对antdesign中的配置
         options: {
           lessLoaderOptions: {
             lessOptions: {
               modifyVars: { "@primary-color": "#1DA57A" },
               javascriptEnables: true
             }
           }
         }
       }
     ]
   }
   ```

7. css样式重置

   - normalize.css
   - reset.css



#### 2.路由(Router)配置

安装：`npm install react-router-dom`(@6)

#### 3.redux

安装：`npm install @reduxjs/toolkit react-redux`  

#### 4.axios的封装

安装：`npm install axios`

#### 5.styled-components

安装：`npm install styled-components`