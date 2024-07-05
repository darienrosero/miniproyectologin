-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: login
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombres` varchar(250) NOT NULL,
  `apellidos` varchar(250) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `date_creation` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `password` (`password`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'juan','benitez','0932159867','juanb','juan123',NULL),(16,'sebastian','gonzalez','0986572301','sebastiang','sebastian123',NULL),(17,'julio','perez','0912476088','sebastianp','perez123','2024-06-30 01:56:02'),(27,'maria','hidalgo','0123456789','mariah','maria123','2024-06-30 02:25:22'),(30,'jose','zambrano','3175849637','josez','jose123','2024-06-30 02:26:27'),(32,'ricardo','torres','ricardot','ricardot','$2b$10$TEdHeTS53a93doFv0Dq2zOevgNt/bHZHGmuvspy/Z9k9CUrIgbdrq','2024-06-30 14:37:01'),(33,'','',NULL,'karla','$2b$10$SrvPZQSJn9JxfIJJ5.UKWuySG9gsHk2fr/p3C6c9GCNjLCj/frNBS','2024-07-02 06:06:26'),(34,'','',NULL,'asd','$2b$10$L9KXpdvvitu6KzsORxrPBeGGQ8Ly4rNoh0znNBDBtZEwNVPJz0Dwe','2024-07-02 15:29:27'),(45,'','',NULL,'wer','$2b$10$onEzDP/42GOL7L6moJD2nuTFmb5oDf1dC94ES/3UCh20AUZ5kCXSy','2024-07-02 16:09:13'),(46,'','',NULL,'yui','$2b$10$9aatd/R0lp3C8/Beq4bCsOIliWrA04tHXVIKfEub3ZibSc4eauhYu','2024-07-02 16:11:12'),(47,'','',NULL,'ghj','$2b$10$s8JoMhoYiZYBPl1WBraFy.olJHmTySI7ztcC.hZXOH86HWj1.hc/u','2024-07-02 16:15:05'),(49,'','',NULL,'darien','$2b$10$2GK2G/.xv57cpvWxsR5GY..b5P8J/wgTvWL3tCDOk0W2OJr3qTjLm','2024-07-03 23:44:14'),(50,'','',NULL,'joel','$2b$10$MofHqxL2vklCntX4Mq.X6uv6n24rRhnlmoCXAaVBUMIVyIftAc.BK','2024-07-03 23:46:23'),(51,'','',NULL,'jorge','$2b$10$Ic7WxRBDZUEgtACJ87MxsupdrP0TKRZhdnCDvBBqYRsMGFvOxr8/G','2024-07-03 23:48:49'),(53,'','',NULL,'qwe','$2b$10$WIP40YYdhwmWJkUpKKdoWemhWo86Q5OocSLMZqoskIIxVsoca4dlO','2024-07-04 02:26:03');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-05 15:27:01
