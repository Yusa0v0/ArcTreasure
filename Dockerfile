# 阶段1：构建生产环境代码
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --registry=https://registry.npmmirror.org
COPY . .
RUN npm run build

# 阶段2：部署静态文件
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# 复制自定义 Nginx 配置（可选）
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]