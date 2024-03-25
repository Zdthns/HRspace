# Используем официальный образ Node.js версии 18.19.0
FROM node:18.19.0-alpine

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json (если есть) в рабочую директорию
COPY package.json ./

# Устанавливаем зависимости проекта
RUN npm install

# Копируем остальные файлы проекта в рабочую директорию
COPY . .

# Собираем проект
RUN npm run build

# Запускаем проект
CMD ["npm", "run", "preview"]
