#!/bin/bash

# 设置颜色输出
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}开始 Strapi 数据迁移...${NC}"

# 1. 导出数据
echo -e "${GREEN}步骤 1: 导出本地数据${NC}"
yarn strapi export --no-encrypt

# 获取最新的导出文件名
EXPORT_FILE=$(ls -t export_*.tar.gz | head -n1)
if [ -z "$EXPORT_FILE" ]; then
    echo "错误：未找到导出文件"
    exit 1
fi

echo -e "${GREEN}导出文件: $EXPORT_FILE${NC}"

# 2. 启动 Docker 容器
echo -e "${GREEN}步骤 2: 启动 Docker 容器${NC}"
docker-compose up -d

# 等待容器完全启动
echo -e "${BLUE}等待容器启动...${NC}"
sleep 10

# 3. 复制导出文件到容器
echo -e "${GREEN}步骤 3: 复制导出文件到容器${NC}"
docker cp $EXPORT_FILE strapi:/app/$EXPORT_FILE

# 4. 导入数据
echo -e "${GREEN}步骤 4: 导入数据到容器${NC}"
docker exec strapi yarn strapi import -f /app/$EXPORT_FILE

# 5. 清理临时文件
echo -e "${GREEN}步骤 5: 清理临时文件${NC}"
docker exec strapi rm /app/$EXPORT_FILE

echo -e "${GREEN}数据迁移完成！${NC}"
echo -e "${BLUE}你现在可以通过 http://localhost:1337 访问你的 Strapi 应用${NC}" 