-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: classwave
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

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
-- Table structure for table `evento`
--

DROP TABLE IF EXISTS `evento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo_evento` enum('suscripcion','individual') NOT NULL,
  `id_usuario` int DEFAULT NULL,
  `id_suscripcion` int DEFAULT NULL,
  `recurrencia` tinyint NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `decripcion` varchar(200) DEFAULT NULL,
  `hora` time NOT NULL,
  `duracion` time NOT NULL DEFAULT '00:00:00',
  `dia_semana` enum('Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo') DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_evento_recurrente_usuarios1_idx` (`id_usuario`),
  KEY `fk_evento_recurrente_suscripcion1_idx` (`id_suscripcion`),
  CONSTRAINT `fk_evento_recurrente_suscripcion1` FOREIGN KEY (`id_suscripcion`) REFERENCES `suscripcion` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_evento_recurrente_usuarios1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evento`
--

LOCK TABLES `evento` WRITE;
/*!40000 ALTER TABLE `evento` DISABLE KEYS */;
INSERT INTO `evento` (`id`, `tipo_evento`, `id_usuario`, `id_suscripcion`, `recurrencia`, `titulo`, `decripcion`, `hora`, `duracion`, `dia_semana`, `fecha`) VALUES (6,'individual',1,NULL,0,'prueba4','Tarea de DSP y el proyecto de Jesus','10:30:00','00:30:00',NULL,'2023-05-06'),(21,'individual',1,NULL,0,'sfdfdf','dfdfdf','21:46:00','00:30:00',NULL,'2023-05-10'),(23,'individual',1,NULL,0,'dsfsdf','dsfsfs','21:48:00','00:01:00',NULL,'2023-05-10'),(30,'suscripcion',NULL,3,1,'Clase Teorica','Temas teoricos del curso','13:00:00','01:30:00','Lunes',NULL),(31,'suscripcion',NULL,3,1,'Clase Teorica','Temas teoricos del curso','13:00:00','01:30:00','Miércoles',NULL),(32,'suscripcion',NULL,3,1,'Clase Practica','Practica en laboratorio de computacion','13:00:00','01:30:00','Viernes',NULL),(33,'individual',NULL,3,0,'Tarea 12','Investigacion divide y venceras','23:30:00','00:30:00',NULL,'2023-05-22'),(34,'individual',NULL,3,0,'Entrega Practica 5','Practica programacion dinamica','23:30:00','00:30:00',NULL,'2023-05-24'),(35,'suscripcion',NULL,4,1,'Clase Teorica','Temas teoricos','14:30:00','01:30:00','Lunes',NULL),(36,'suscripcion',NULL,4,1,'Clase Practica','Demostracion de practica en salon','14:30:00','01:30:00','Miércoles',NULL),(37,'suscripcion',NULL,4,1,'Clase Practica','Realizacion de practica en laboratorio','14:30:00','01:30:00','Viernes',NULL),(38,'suscripcion',NULL,5,1,'Clase teorica','Temas teoricos','16:00:00','01:30:00','Lunes',NULL),(39,'suscripcion',NULL,5,1,'Clase practica','Realizacion de Ejercicios en salon','16:00:00','01:30:00','Miércoles',NULL),(40,'suscripcion',NULL,5,1,'Clase mini-Examen','Mini examen de los temas de la semana','16:00:00','01:30:00','Viernes',NULL),(41,'suscripcion',NULL,6,1,'Clase Teorica','Temas teoricos','17:30:00','01:30:00','Lunes',NULL),(42,'individual',NULL,6,1,'Clase practica','Realizacion de ejercicios a mano','17:30:00','01:30:00','Miércoles',NULL),(43,'suscripcion',NULL,6,1,'Clase Practica','Realizacion de ejercicios en laboratorio de computo','17:30:00','01:30:00','Viernes',NULL),(44,'suscripcion',NULL,7,1,'Clase teorica','Temas teoricos','13:00:00','01:30:00','Martes',NULL),(45,'suscripcion',NULL,7,1,'Clase Practica','Descripcion de practica en salon','13:00:00','01:30:00','Jueves',NULL),(46,'suscripcion',NULL,7,1,'Clase practica','Realizacion de practica en laboratorio de electronica','14:30:00','01:30:00','Jueves',NULL),(49,'individual',1,NULL,0,'Terminar aplicacion ClassWave','Concurso de Programacion','21:00:00','01:30:00',NULL,'2023-05-21'),(50,'individual',1,NULL,0,'Inaguracion del concurso de programacion','Concurso de Prorgamacion!!!!!','09:00:00','01:00:00',NULL,'2023-05-22'),(51,'individual',1,NULL,1,'Ir a la lavanderia','Recojer ropa de la lavanderia','19:30:00','00:20:00','Viernes',NULL),(52,'individual',3,NULL,0,'Hacer examanes para la semana','Exmanes de algoritmos','21:00:00','01:40:00',NULL,'2023-05-21'),(53,'individual',3,NULL,1,'Reunion de academia semanal','Reunion de ciencias computacionales','18:30:00','01:30:00','Martes',NULL);
/*!40000 ALTER TABLE `evento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` (`id`, `tipo`) VALUES (1,'profesor'),(2,'alumno');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suscripcion`
--

DROP TABLE IF EXISTS `suscripcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suscripcion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` enum('club','materia') NOT NULL,
  `organizador` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `semestre` varchar(45) DEFAULT NULL,
  `carrera` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_materia_usuarios1_idx` (`organizador`),
  CONSTRAINT `fk_materia_usuarios1` FOREIGN KEY (`organizador`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suscripcion`
--

LOCK TABLES `suscripcion` WRITE;
/*!40000 ALTER TABLE `suscripcion` DISABLE KEYS */;
INSERT INTO `suscripcion` (`id`, `tipo`, `organizador`, `nombre`, `semestre`, `carrera`, `descripcion`) VALUES (3,'materia',3,'Análisis y diseño de algoritmos','Tercer Semestre','Ingenieria en Inteligencia Artificial',NULL),(4,'materia',3,'Paradigmas de programación','Tercer Semestre','Ingenieria en Inteligencia Artificial',NULL),(5,'materia',3,'Ecuaciones diferenciales','Tercer Semestre','Ingenieria en Inteligencia Artificial',NULL),(6,'materia',3,'Bases de datos','Tercer Semestre','Ingenieria en Inteligencia Artificial',NULL),(7,'materia',3,'Diseño de sitemas digitales','Tercer Semestre','Ingenieria en Inteligencia Artificial',NULL),(8,'materia',3,'Liderazgo personal','Tercer Semestre','Ingenieria en Inteligencia Artificial',NULL);
/*!40000 ALTER TABLE `suscripcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rol_id` int DEFAULT NULL,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contrasena` varchar(150) NOT NULL,
  `numero` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_usuario_rol1_idx` (`rol_id`),
  CONSTRAINT `fk_usuario_rol1` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (`id`, `rol_id`, `nombre`, `correo`, `contrasena`, `numero`) VALUES (1,2,'Roberto Angel Herrera Rodriguez','betohr48@gmail.com','$2b$10$dWB6cixhZtOPozI5AmGcKe9OvNNUENkJ4Mk/ur02RONhQab7XJGnG','2727039959'),(3,1,'Esaú Eliezer Escobar Juárez','example@example.com','$2b$10$oWhkqoNMKxz431aXTQPFnOK7ebjUbCFFdrhMQQk8/XCdLLsMJeXkm','1234567890');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_sucripcion`
--

DROP TABLE IF EXISTS `usuario_sucripcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_sucripcion` (
  `usuario` int NOT NULL,
  `suscripcion` int NOT NULL,
  PRIMARY KEY (`usuario`,`suscripcion`),
  KEY `fk_usuarios_has_materia_materia1_idx` (`suscripcion`),
  KEY `fk_usuarios_has_materia_usuarios1_idx` (`usuario`),
  CONSTRAINT `fk_usuarios_has_materia_materia1` FOREIGN KEY (`suscripcion`) REFERENCES `suscripcion` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_usuarios_has_materia_usuarios1` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_sucripcion`
--

LOCK TABLES `usuario_sucripcion` WRITE;
/*!40000 ALTER TABLE `usuario_sucripcion` DISABLE KEYS */;
INSERT INTO `usuario_sucripcion` (`usuario`, `suscripcion`) VALUES (1,3),(3,3),(1,4),(3,4),(1,5),(3,5),(1,6),(3,6),(1,7),(3,7),(1,8),(3,8);
/*!40000 ALTER TABLE `usuario_sucripcion` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-21 22:43:37
