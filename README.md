## ODraw-Server

「挑战杯」安徽省大学生创业计划竞赛抽签平台后端 (外包项目)

<br/>

### 主要依赖

#### 前端

- React.js (Next.js)
- Ant Design React
- https://github.com/HelipengTony/odraw

#### 后端

- MongoDB
- Express.js
- Express-JWT
- Excel.js
- Convert-excel-to-json
- https://github.com/HelipengTony/odraw-server

<br/>

### 功能列表

- 用户登录
- 用户密码修改
- 项目抽签
- 项目分类数据处理
- 项目分类标签 设置
- 项目数据 .xlsx 导入
- 用户数据 .xlsx 导入
- 项目数据 .xlsx 导出

<br/>

### 环境变量

- JWT_SECRET
- MONGODB_USER
- MONGODB_PASSWD
- MONGODB_URL
- ADMIN_NAME
- DEFAULT_ADMIN_PWD

<br/>

### 数据库填充

#### MongoDB

数据库名: `odraw`

#### `status`

确保此条文档存在: `{"ID": "this", "status": false}`

#### `users`

确保管理员账户存在: `{"ID" : "admin", "userName" : "...", "userPwd" : "..."}`
