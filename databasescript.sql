-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: test_project
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `mainmenu`
--

DROP TABLE IF EXISTS `mainmenu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mainmenu` (
  `ID` bigint NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) NOT NULL,
  `ORDERBY` int DEFAULT NULL,
  `IS_ACTIVE` smallint DEFAULT NULL,
  `CREATED_ON` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UPDATED_ON` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mainmenu`
--

LOCK TABLES `mainmenu` WRITE;
/*!40000 ALTER TABLE `mainmenu` DISABLE KEYS */;
INSERT INTO `mainmenu` VALUES (1,'Master',1,1,'2025-05-21 11:59:10',NULL),(2,'Detail',2,1,'2025-05-21 11:59:24',NULL);
/*!40000 ALTER TABLE `mainmenu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) NOT NULL,
  `COMPONENT` varchar(200) DEFAULT NULL,
  `PARENT_ID` int DEFAULT NULL,
  `MENU_TYPE` smallint DEFAULT NULL,
  `URL` varchar(150) DEFAULT NULL,
  `PAGEPATH` varchar(500) DEFAULT NULL,
  `ICON_CSS` varchar(30) DEFAULT NULL,
  `ORDERBY` int DEFAULT NULL,
  `IS_ACTIVE` smallint DEFAULT NULL,
  `CREATED_ON` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UPDATED_ON` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,'Student','StudentList',1,NULL,'/student','./Pages/Manage/StudentList','UserOutlined',2,1,'2025-05-20 13:56:37',NULL),(2,'Event Info.','Event',2,NULL,'/event','./Pages/Manage/Event','DesktopOutlined',3,1,'2025-05-20 14:03:19',NULL),(3,'Menu','MenuList',1,1,'/menu','./Pages/Manage/MenuList','UserOutlined',1,1,'2025-05-21 06:31:26',NULL),(10,'Speakers','SpeakerList',2,NULL,'/speakers','./Pages/Manage/SpeakerList','UserOutlined',4,1,'2025-05-21 10:24:44',NULL),(11,'EventSchedule','EventScheduleList',2,NULL,'/schedule','./Pages/Manage/EventScheduleList','UserOutlined',5,1,'2025-05-21 10:26:08',NULL),(12,'Event Gallery','EventGalleryPage',2,NULL,'/eventgallery','./Pages/Manage/EventGallery','UserOutlined',6,1,'2025-05-21 11:37:40',NULL),(13,'Dashboard','Dashboard',2,NULL,'/dashboad','./Pages/Manage/Dashboard','UserOutlined',7,1,'2025-05-21 11:40:47',NULL);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `ID` bigint NOT NULL AUTO_INCREMENT,
  `USERNAME` text,
  `MOBILENUMBER` bigint NOT NULL,
  `EMAILID` text,
  `SALARY` bigint DEFAULT NULL,
  `CREATED_ON` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UPDATED_ON` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'Milan',9214545916,'a@gmail.com',12000,'2025-05-20 13:00:38',NULL);
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-23 17:50:30
