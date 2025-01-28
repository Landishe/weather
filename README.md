#Проект "Прогноз Погоды"

представляет собой веб-приложение, разработанное на языке JavaScript с использованием библиотеки React. Приложение позволяет пользователям получать актуальную информацию о погоде в выбранных городах России, а также предоставляет рекомендации по выбору одежды в зависимости от текущих погодных условий и пола пользователя.

##Основные функции

    **Получение данных о погоде**: Данные о погоде загружаются из внешнего API с использованием метода fetch. Приложение поддерживает работу только с **5 городами России (ограничение бесплатной версии API)**.

    **Рекомендации по одежде**: На основе текущих погодных условий (температура, осадки и т.д.) и выбора пола пользователя (мужчина/женщина), приложение предлагает подходящую одежду. Логика рекомендаций реализована с использованием условных операторов if/else.

    **Динамическое обновление интерфейса**: Интерфейс приложения динамически изменяется в зависимости от погодных условий (например, отображаются иконки солнца, дождя, снега и т.д.).

    **Адаптивный дизайн**: Приложение адаптировано для корректного отображения на мобильных устройствах и планшетах.

##Используемые технологии

1.  **JavaScript**: Основной язык программирования.

2.  **React**: Библиотека для создания пользовательского интерфейса.

3.  **Fetch API**: Для получения данных о погоде из внешнего источника.

4.  **HTML/CSS**: Для верстки и стилизации приложения.

##Как использовать

    Откройте приложение в браузере.

    Выберите город из списка доступных (5 городов России).
    Выберите ваш пол (мужчина/женщина).

    Приложение отобразит текущую погоду и рекомендации по одежде.

###Ограничения
Из-за ограничений бесплатной версии API, доступны данные только для 5 городов России.
Рекомендации по одежде основаны на базовых условиях и могут не учитывать все возможные сценарии.

##Установка и запуск 1. Клонируйте репозиторий: git clone https://github.com/ваш-username/weather.git 2. Перейдите в директорию проекта: cd ./weather 3. Установите зависимости: npm install 4. Запустите приложение: npm start 5. Откройте браузер и перейдите по адресу http://localhost:3000.
