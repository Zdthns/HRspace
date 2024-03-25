#!/bin/bash

# Имя образа
IMAGE_NAME="hrspace"

# Сборка образа
docker build -t $IMAGE_NAME .

# Запуск контейнера
docker run -d -p 5675:5675 $IMAGE_NAME

echo http://127.0.0.1:5675
