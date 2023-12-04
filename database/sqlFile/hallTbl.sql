-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.3.11-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- wedingrumdb 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `wedingrumdb` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `wedingrumdb`;

-- 테이블 wedingrumdb.halls 구조 내보내기
CREATE TABLE IF NOT EXISTS `halls` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hallName` varchar(255) NOT NULL COMMENT '홀이름',
  `hallImg` varchar(255) NOT NULL COMMENT '홀 이미지 주소',
  `Capacity` varchar(255) NOT NULL COMMENT '수용가능인원',
  `ParkingCapacity` varchar(255) NOT NULL COMMENT '주차가능 대수',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- 테이블 데이터 wedingrumdb.halls:~6 rows (대략적) 내보내기
INSERT INTO `halls` (`id`, `hallName`, `hallImg`, `Capacity`, `ParkingCapacity`) VALUES
	(1, '청담점 2F 연회홀', '/images/party/banquet_hall_1.jpg', '300', '200'),
	(2, '공덕점 6F 연회홀', '/images/party/banquet_hall_2.jpg', '500 ', '550'),
	(3, '공덕점 7F 연회홀', '/images/party/banquet_hall_3.jpg', '500', '550'),
	(4, '선릉점 연회홀', '/images/party/banquet_hall_4.jpg', '440', '350'),
	(5, '광화문점 연회홀', '/images/party/banquet_hall_5.jpg', '550', '400'),
	(6, '반포점 연회홀', '/images/party/banquet_hall_6.jpg', '500', '250');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
