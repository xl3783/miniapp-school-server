# 使用 Node.js 18 作为基础镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 安装依赖
COPY package.json yarn.lock ./
RUN yarn install

# 复制源代码
COPY . .

# 构建应用
RUN yarn build

# 暴露端口
EXPOSE 1337

# 启动命令
CMD ["yarn", "start"] 