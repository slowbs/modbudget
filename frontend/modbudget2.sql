/*
 Navicat Premium Data Transfer

 Source Server         : MINE
 Source Server Type    : MySQL
 Source Server Version : 100406
 Source Host           : localhost:3306
 Source Schema         : modbudget

 Target Server Type    : MySQL
 Target Server Version : 100406
 File Encoding         : 65001

 Date: 27/11/2019 14:25:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for activity
-- ----------------------------
DROP TABLE IF EXISTS `activity`;
CREATE TABLE `activity`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `activityno` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `budgetno` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `total` double(20, 2) NOT NULL,
  `balance` double(25, 2) NOT NULL,
  `created` timestamp(0) NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp(0) NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `activityno`(`activityno`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of activity
-- ----------------------------
INSERT INTO `activity` VALUES (1, '1111', 'กิจกรรมหนึ่ง', '1111111', 0.00, 0.00, '2019-11-27 11:45:26', '2019-11-27 13:50:26');
INSERT INTO `activity` VALUES (2, '4444', 'กิจกรรมสี่', '222222', 0.00, 0.00, '2019-11-27 13:52:33', '2019-11-27 14:22:53');
INSERT INTO `activity` VALUES (3, '5555', 'กิจกรรมห้า', '222222', 0.00, 0.00, '2019-11-27 13:53:40', '2019-11-27 13:53:40');

-- ----------------------------
-- Table structure for budget
-- ----------------------------
DROP TABLE IF EXISTS `budget`;
CREATE TABLE `budget`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `budgetno` int(10) NOT NULL,
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `total` double(20, 2) NOT NULL,
  `balance` double(25, 2) NOT NULL,
  `created` timestamp(0) NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp(0) NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `budgetno`(`budgetno`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of budget
-- ----------------------------
INSERT INTO `budget` VALUES (1, 1111111, 'งบประมาณหนึ่ง', 0.00, 0.00, '2019-11-27 11:45:18', '2019-11-27 11:58:10');
INSERT INTO `budget` VALUES (2, 222222, 'งบประมาณสี่', 0.00, 0.00, '2019-11-27 13:52:25', '2019-11-27 14:16:10');

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bookno` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `datepick` date NOT NULL,
  `budgetno` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `activityno` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `projectno` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `productno` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `text` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `income` double(25, 2) NOT NULL,
  `outcome` double(25, 2) NOT NULL,
  `balance` double(25, 2) NOT NULL,
  `refund` double(25, 2) NOT NULL,
  `note` text CHARACTER SET utf8 COLLATE utf8_bin NULL,
  `created` timestamp(0) NOT NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP(0),
  `updated` timestamp(0) NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES (1, 'สธ 23123/1292', '2019-11-27', '1111111', '1111', '333', '', 'หกดฟฟหดก', 22222.00, 0.00, 0.00, 0.00, '', '2019-11-27 13:51:57', '2019-11-27 11:45:45');
INSERT INTO `list` VALUES (2, 'สธ 23123/1292', '2019-11-27', '222222', '4444', '444', '', 'สี่หนึ่ง', 4000.00, 0.00, 0.00, 0.00, '', '2019-11-27 14:22:53', '2019-11-27 13:52:57');
INSERT INTO `list` VALUES (3, 'ddd', '2019-11-27', '222222', '5555', '555', '', 'โครงการห้าหนึ่ง', 50000.00, 0.00, 0.00, 0.00, '', '2019-11-27 14:17:48', '2019-11-27 14:15:58');
INSERT INTO `list` VALUES (4, 'sdfs3', '2019-11-27', '222222', '5555', '555', '', 'โครงการห้าสอง', 0.00, 2000.00, 0.00, 1000.00, '', '2019-11-27 14:17:48', '2019-11-27 14:17:10');

-- ----------------------------
-- Table structure for list2
-- ----------------------------
DROP TABLE IF EXISTS `list2`;
CREATE TABLE `list2`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bookno` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `datepick` date NOT NULL,
  `budgetno` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `activityno` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `productno` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `text` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `income` double(25, 2) NOT NULL,
  `outcome` double(25, 2) NOT NULL,
  `balance` double(25, 2) NOT NULL,
  `refund` double(25, 2) NOT NULL,
  `note` text CHARACTER SET utf8 COLLATE utf8_bin NULL,
  `created` timestamp(0) NOT NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP(0),
  `updated` timestamp(0) NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of list2
-- ----------------------------
INSERT INTO `list2` VALUES (3, 'สธ 23123/1292', '2019-11-19', '1', '5555', '', 'ทดสอบ', 0.00, 1000.00, 19000.00, 0.00, 'หนึ่ง', '2019-11-19 13:25:36', '2019-11-19 09:29:28');
INSERT INTO `list2` VALUES (7, '123', '2019-11-19', '1', '6666', '', 'sda', 0.00, 300.00, 17389.00, 0.00, 'asdfsdf', '2019-11-19 13:25:40', '2019-11-19 09:59:10');
INSERT INTO `list2` VALUES (12, '321', '2019-12-19', '1111', '4444', '7777', 'asdfsdfsdf', 25000.00, 0.00, 25000.00, 0.00, NULL, '2019-11-19 14:03:43', '2019-11-19 11:39:51');
INSERT INTO `list2` VALUES (13, '322', '2019-08-13', '1111', '4444', '7777', 'ทดสอบ2', 0.00, 4000.00, 0.00, 0.00, NULL, '2019-11-19 13:59:28', '2019-11-19 11:41:58');
INSERT INTO `list2` VALUES (14, '323', '2019-12-02', '1111', '4444', '7777', 'ทดสอบ3', 0.00, 5000.00, 0.00, 0.00, NULL, '2019-11-19 11:43:07', '2019-11-19 11:42:19');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productno` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `total` double(20, 2) NOT NULL,
  `balance` double(25, 2) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for project
-- ----------------------------
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `budgetno` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `activityno` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `projectno` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `balance` double(25, 2) NOT NULL,
  `person` varchar(35) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `workgroup` varchar(35) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `created` timestamp(0) NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp(0) NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of project
-- ----------------------------
INSERT INTO `project` VALUES (1, '1111111', '1111', '333', 'โครงการหนึ่ง', 0.00, 'ใคร', 'ไม่รู้', '2019-11-27 11:45:35', '2019-11-27 13:51:57');
INSERT INTO `project` VALUES (2, '222222', '4444', '444', 'โครงการสี่', 0.00, 'ไม่รู้', 'ใคร', '2019-11-27 13:52:43', '2019-11-27 13:52:43');
INSERT INTO `project` VALUES (3, '222222', '5555', '555', 'โครงการห้า', 0.00, 'ห้า', 'ห้าห้า', '2019-11-27 14:15:43', '2019-11-27 14:17:48');

-- ----------------------------
-- Table structure for total
-- ----------------------------
DROP TABLE IF EXISTS `total`;
CREATE TABLE `total`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `budgetno` int(10) NOT NULL,
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `total` double(20, 2) NOT NULL,
  `balance` double(25, 2) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of total
-- ----------------------------
INSERT INTO `total` VALUES (1, 1111, 'งบประมาณหนึ่ง', 20000.00, 0.00);

-- ----------------------------
-- Triggers structure for table activity
-- ----------------------------
DROP TRIGGER IF EXISTS `editactivityproject`;
delimiter ;;
CREATE TRIGGER `editactivityproject` AFTER UPDATE ON `activity` FOR EACH ROW update project set activityno = NEW.activityno
where project.budgetno = old.budgetno and
project.activityno = old.activityno
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table activity
-- ----------------------------
DROP TRIGGER IF EXISTS `editactivitylist`;
delimiter ;;
CREATE TRIGGER `editactivitylist` AFTER UPDATE ON `activity` FOR EACH ROW update list set activityno = NEW.activityno
where list.budgetno = old.budgetno and
list.activityno = old.activityno
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table activity
-- ----------------------------
DROP TRIGGER IF EXISTS `deleteproject`;
delimiter ;;
CREATE TRIGGER `deleteproject` AFTER DELETE ON `activity` FOR EACH ROW delete from project where budgetno = OLD.budgetno
and activityno = OLD.activityno
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table budget
-- ----------------------------
DROP TRIGGER IF EXISTS `editbudgetlist`;
delimiter ;;
CREATE TRIGGER `editbudgetlist` AFTER UPDATE ON `budget` FOR EACH ROW update list set budgetno = NEW.budgetno where budgetno = OLD.budgetno
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table budget
-- ----------------------------
DROP TRIGGER IF EXISTS `editbudgetproject`;
delimiter ;;
CREATE TRIGGER `editbudgetproject` AFTER UPDATE ON `budget` FOR EACH ROW update project set budgetno = NEW.budgetno where budgetno = OLD.budgetno
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table budget
-- ----------------------------
DROP TRIGGER IF EXISTS `editbudgetactivity`;
delimiter ;;
CREATE TRIGGER `editbudgetactivity` AFTER UPDATE ON `budget` FOR EACH ROW update activity set budgetno = NEW.budgetno where budgetno = OLD.budgetno
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table budget
-- ----------------------------
DROP TRIGGER IF EXISTS `deleteactivity`;
delimiter ;;
CREATE TRIGGER `deleteactivity` AFTER DELETE ON `budget` FOR EACH ROW delete from activity where budgetno = OLD.budgetno
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table list
-- ----------------------------
DROP TRIGGER IF EXISTS `settotoalbalance`;
delimiter ;;
CREATE TRIGGER `settotoalbalance` AFTER INSERT ON `list` FOR EACH ROW UPDATE total
   SET balance = new.balance
   where total.budgetno = new.budgetno
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table list2
-- ----------------------------
DROP TRIGGER IF EXISTS `settotoalbalance_copy1`;
delimiter ;;
CREATE TRIGGER `settotoalbalance_copy1` AFTER INSERT ON `list2` FOR EACH ROW UPDATE total
   SET balance = new.balance
   where total.budgetno = new.budgetno
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table project
-- ----------------------------
DROP TRIGGER IF EXISTS `editprojectlist`;
delimiter ;;
CREATE TRIGGER `editprojectlist` AFTER UPDATE ON `project` FOR EACH ROW update list set projectno = NEW.projectno
where list.budgetno = old.budgetno and
list.activityno = old.activityno and
list.projectno = old.projectno
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table project
-- ----------------------------
DROP TRIGGER IF EXISTS `deletelist`;
delimiter ;;
CREATE TRIGGER `deletelist` AFTER DELETE ON `project` FOR EACH ROW delete from list where budgetno = OLD.budgetno
and activityno = OLD.activityno and projectno = OLD.projectno
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
