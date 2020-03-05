-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 05 2020 г., 10:20
-- Версия сервера: 5.7.19
-- Версия PHP: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `project-analysis`
--

-- --------------------------------------------------------

--
-- Структура таблицы `projects`
--

CREATE TABLE `projects` (
  `project_id` int(11) NOT NULL,
  `project_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `project_date_created` datetime NOT NULL,
  `project_date_end` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `projects`
--

INSERT INTO `projects` (`project_id`, `project_name`, `project_date_created`, `project_date_end`) VALUES
(2, 'Desktop Windows 10', '2020-03-02 09:12:38', '2020-03-31 12:00:00');

-- --------------------------------------------------------

--
-- Структура таблицы `risks`
--

CREATE TABLE `risks` (
  `risk_id` int(11) NOT NULL,
  `risk_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `risk_type` tinyint(1) NOT NULL,
  `todo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `risks`
--

INSERT INTO `risks` (`risk_id`, `risk_name`, `risk_type`, `todo_id`) VALUES
(3, 'Впадлу', 2, 2),
(4, 'Впадлу', 2, 3);

-- --------------------------------------------------------

--
-- Структура таблицы `risk_types`
--

CREATE TABLE `risk_types` (
  `type_id` tinyint(1) NOT NULL,
  `type_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `risk_types`
--

INSERT INTO `risk_types` (`type_id`, `type_name`) VALUES
(1, 'Положительный'),
(2, 'Отрицательный');

-- --------------------------------------------------------

--
-- Структура таблицы `targets`
--

CREATE TABLE `targets` (
  `target_id` int(11) NOT NULL,
  `target_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `target_date_created` datetime NOT NULL,
  `target_date_end` datetime NOT NULL,
  `project_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `targets`
--

INSERT INTO `targets` (`target_id`, `target_name`, `target_date_created`, `target_date_end`, `project_id`) VALUES
(1, 'Грфическая оболочка', '2020-03-02 04:00:00', '2020-03-07 08:34:21', 2),
(2, 'Функционал', '2020-03-02 11:13:30', '2020-03-07 09:19:48', 2);

-- --------------------------------------------------------

--
-- Структура таблицы `todos`
--

CREATE TABLE `todos` (
  `todo_id` int(11) NOT NULL,
  `todo_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `todo_date_created` datetime NOT NULL,
  `todo_date_end` datetime NOT NULL,
  `target_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `todos`
--

INSERT INTO `todos` (`todo_id`, `todo_name`, `todo_date_created`, `todo_date_end`, `target_id`) VALUES
(1, 'Сверстать рабочий стол', '2020-03-02 08:32:50', '2020-03-03 08:33:26', 1),
(2, 'Сверстать проводник', '2020-03-02 10:35:52', '2020-03-07 07:20:38', 1),
(3, 'Сверстать блокнот', '2020-03-02 11:37:30', '2020-03-07 09:39:23', 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`project_id`);

--
-- Индексы таблицы `risks`
--
ALTER TABLE `risks`
  ADD PRIMARY KEY (`risk_id`),
  ADD KEY `todo_id` (`todo_id`),
  ADD KEY `risk_type` (`risk_type`);

--
-- Индексы таблицы `risk_types`
--
ALTER TABLE `risk_types`
  ADD PRIMARY KEY (`type_id`);

--
-- Индексы таблицы `targets`
--
ALTER TABLE `targets`
  ADD PRIMARY KEY (`target_id`),
  ADD KEY `project_id` (`project_id`);

--
-- Индексы таблицы `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`todo_id`),
  ADD KEY `target_id` (`target_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `projects`
--
ALTER TABLE `projects`
  MODIFY `project_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблицы `risks`
--
ALTER TABLE `risks`
  MODIFY `risk_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT для таблицы `risk_types`
--
ALTER TABLE `risk_types`
  MODIFY `type_id` tinyint(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблицы `targets`
--
ALTER TABLE `targets`
  MODIFY `target_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблицы `todos`
--
ALTER TABLE `todos`
  MODIFY `todo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `risks`
--
ALTER TABLE `risks`
  ADD CONSTRAINT `risks_ibfk_1` FOREIGN KEY (`todo_id`) REFERENCES `todos` (`todo_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `risks_ibfk_2` FOREIGN KEY (`risk_type`) REFERENCES `risk_types` (`type_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `targets`
--
ALTER TABLE `targets`
  ADD CONSTRAINT `targets_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `projects` (`project_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `todos`
--
ALTER TABLE `todos`
  ADD CONSTRAINT `todos_ibfk_1` FOREIGN KEY (`target_id`) REFERENCES `targets` (`target_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
