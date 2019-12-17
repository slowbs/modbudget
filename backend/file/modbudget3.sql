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

 Date: 17/12/2019 09:06:59
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
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `budgetno` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `total` double(20, 2) NOT NULL,
  `balance` double(25, 2) NOT NULL,
  `created` timestamp(0) NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp(0) NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `activityno`(`activityno`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of activity
-- ----------------------------
INSERT INTO `activity` VALUES (1, '1111', 'กิจกรรมหนึ่ง', '1111111', 0.00, 0.00, '2019-12-03 15:23:58', '2019-12-03 15:23:58');
INSERT INTO `activity` VALUES (2, '2222', 'กิจกรรมสอง', '2222222', 0.00, 0.00, '2019-12-04 09:37:27', '2019-12-04 09:37:27');

-- ----------------------------
-- Table structure for budget
-- ----------------------------
DROP TABLE IF EXISTS `budget`;
CREATE TABLE `budget`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `budgetno` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
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
INSERT INTO `budget` VALUES (1, '1111111', 'งบประมาณหนึ่ง', 0.00, 0.00, '2019-12-03 15:23:50', '2019-12-03 15:23:50');
INSERT INTO `budget` VALUES (2, '2222222', 'งบประมาณสอง', 0.00, 0.00, '2019-12-04 09:37:17', '2019-12-04 09:37:17');

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
  `income` double(25, 2) NOT NULL DEFAULT 0.00,
  `outcome` double(25, 2) NOT NULL DEFAULT 0.00,
  `balance` double(25, 2) NOT NULL,
  `refund` double(25, 2) NOT NULL DEFAULT 0.00,
  `note` text CHARACTER SET utf8 COLLATE utf8_bin NULL,
  `created` timestamp(0) NOT NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP(0),
  `updated` timestamp(0) NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES (1, 'สธ 23123/1292', '2019-12-04', '2222222', '2222', '222', '', 'จัดสรร', 5000.00, 0.00, 0.00, 0.00, '', '2019-12-04 09:38:04', '2019-12-04 09:38:04');
INSERT INTO `list` VALUES (2, 'ddd', '2019-12-04', '2222222', '2222', '333', '', 'จัดสรร', 3000.00, 0.00, 0.00, 0.00, '', '2019-12-04 10:05:46', '2019-12-04 10:05:46');
INSERT INTO `list` VALUES (3, 'นส 111/11', '2019-12-04', '2222222', '2222', '333', '', 'จ่าย', 0.00, 777.00, 0.00, 0.00, '', '2019-12-04 10:07:13', '2019-12-04 10:07:13');
INSERT INTO `list` VALUES (4, 'นส 111/11', '2019-12-04', '2222222', '2222', '333', '', 'จ่าย 2', 0.00, 222.00, 0.00, 0.00, '', '2019-12-04 10:07:24', '2019-12-04 10:07:24');
INSERT INTO `list` VALUES (5, 'นส 111/11', '2019-12-04', '2222222', '2222', '333', '', 'sadfasfd', 0.00, 0.00, 0.00, 111.00, '', '2019-12-04 10:10:01', '2019-12-04 10:10:01');
INSERT INTO `list` VALUES (6, 'นส 111/11', '2019-12-04', '2222222', '2222', '333', '', 'sdfsdf', 0.00, 0.00, 0.00, 222.00, '', '2019-12-04 10:10:23', '2019-12-04 10:10:23');
INSERT INTO `list` VALUES (7, 'นส 111/11', '2019-12-04', '2222222', '2222', '333', '', 'sdfsdf', 0.00, 0.00, 0.00, 111.00, '', '2019-12-04 10:10:37', '2019-12-04 10:10:37');
INSERT INTO `list` VALUES (8, 'sdfdsf', '2019-12-04', '2222222', '2222', '333', '', 'sdfsdf', 0.00, 0.00, 0.00, 22.00, 'sdfds', '2019-12-04 10:12:49', '2019-12-04 10:12:49');
INSERT INTO `list` VALUES (9, 'นส 111/11', '2019-12-04', '2222222', '2222', '333', '', 'sdfewr', 0.00, 0.00, 0.00, 44.00, '', '2019-12-04 10:16:11', '2019-12-04 10:16:11');
INSERT INTO `list` VALUES (11, 'นส 111/11', '2019-12-04', '2222222', '2222', '333', '', 'asdfsdf', 0.00, 0.00, 0.00, 0.00, '', '2019-12-04 10:17:21', '2019-12-04 10:17:21');
INSERT INTO `list` VALUES (12, 'สธ 23123/1292', '2019-12-04', '2222222', '2222', '333', '', 'sdfsdfsad', 0.00, 511.00, 0.00, 0.00, '', '2019-12-04 10:18:19', '2019-12-04 10:18:19');
INSERT INTO `list` VALUES (13, 'sdfsd', '2019-12-04', '2222222', '2222', '333', '', 'sdfsdf', 0.00, 12312.00, 0.00, 0.00, 'sdfds', '2019-12-04 10:19:59', '2019-12-04 10:19:59');
INSERT INTO `list` VALUES (14, 'sdfsd', '2019-12-04', '2222222', '2222', '333', '', 'sdfsdf', 20000.00, 0.00, 0.00, 0.00, '', '2019-12-04 10:42:25', '2019-12-04 10:42:25');
INSERT INTO `list` VALUES (15, 'sdfasdf', '2019-12-04', '2222222', '2222', '333', '', 'asdfas', 0.00, 0.00, 0.00, 0.00, 'asdfasdf', '2019-12-04 10:54:00', '2019-12-04 10:54:00');
INSERT INTO `list` VALUES (16, 'นส 111/11', '2019-12-04', '2222222', '2222', '333', '', 'asadfasdf', 0.00, 0.00, 0.00, 0.00, '', '2019-12-04 10:54:44', '2019-12-04 10:54:44');
INSERT INTO `list` VALUES (17, 'asdfsd', '2019-12-04', '2222222', '2222', '333', '', 'sdf', 0.00, 0.00, 0.00, 0.00, 'sdfsd', '2019-12-04 10:57:52', '2019-12-04 10:57:52');
INSERT INTO `list` VALUES (18, 'sdafsd', '2019-12-07', '2222222', '2222', '333', '', 'sadfasd', 0.00, 0.00, 0.00, 0.00, 'asdfas', '2019-12-04 11:11:44', '2019-12-04 11:08:17');

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
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
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
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
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
INSERT INTO `project` VALUES (1, '1111111', '1111', '111', 'โครงการหนึ่ง', 0.00, 'หนึ่ง', 'บริหารทั่วไป', '2019-12-03 15:24:07', '2019-12-03 15:24:07');
INSERT INTO `project` VALUES (2, '2222222', '2222', '222', 'โครงการสอง', 0.00, 'สอง', 'พัฒนายุทธศาสตร์และสาธารณสุข', '2019-12-04 09:37:45', '2019-12-04 09:37:45');
INSERT INTO `project` VALUES (3, '2222222', '2222', '333', 'โครงการสาม', 0.00, 'สาม', 'พัฒนายุทธศาสตร์และสาธารณสุข', '2019-12-04 10:05:18', '2019-12-04 10:05:18');

-- ----------------------------
-- Table structure for total
-- ----------------------------
DROP TABLE IF EXISTS `total`;
CREATE TABLE `total`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `budgetno` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `total` double(20, 2) NOT NULL,
  `balance` double(25, 2) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of total
-- ----------------------------
INSERT INTO `total` VALUES (1, '1111', 'งบประมาณหนึ่ง', 20000.00, 0.00);

-- ----------------------------
-- Table structure for workgroup
-- ----------------------------
DROP TABLE IF EXISTS `workgroup`;
CREATE TABLE `workgroup`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of workgroup
-- ----------------------------
INSERT INTO `workgroup` VALUES (1, 'บริหารทั่วไป');
INSERT INTO `workgroup` VALUES (2, 'พัฒนายุทธศาสตร์และสาธารณสุข');
INSERT INTO `workgroup` VALUES (3, 'ส่งเสริมสุขภาพ');
INSERT INTO `workgroup` VALUES (4, 'ควบคุมโรคติดต่อ');
INSERT INTO `workgroup` VALUES (5, 'นิติกร');
INSERT INTO `workgroup` VALUES (6, 'คุ้มครองผู้บริโภคและเภสัชสาธารณสุข');
INSERT INTO `workgroup` VALUES (7, 'ประกันสุขภาพ');
INSERT INTO `workgroup` VALUES (8, 'พัฒนาคุณภาพและรูปแบบบริการ');
INSERT INTO `workgroup` VALUES (9, 'ทันตสาธารณสุข');
INSERT INTO `workgroup` VALUES (10, 'บริหารทรัพยากรบุคคล');
INSERT INTO `workgroup` VALUES (11, 'อนามัยสิ่งแวดล้อมและอาชีวอนามัย');
INSERT INTO `workgroup` VALUES (12, 'ควบคุมโรคไม่ติดต่อ สุขภาพจิตและยาเสพติด');
INSERT INTO `workgroup` VALUES (13, 'การแพทย์แผนไทยและการแพทย์ทางเลือก');

-- ----------------------------
-- Triggers structure for table activity
-- ----------------------------
DROP TRIGGER IF EXISTS `editactivityproject`;
delimiter ;;
CREATE TRIGGER `editactivityproject` AFTER UPDATE ON `activity` FOR EACH ROW update project set activityno = NEW.activityno
where project.budgetno = old.budgetno and
project.activityno = old.activityno
;
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
;
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table activity
-- ----------------------------
DROP TRIGGER IF EXISTS `deleteproject`;
delimiter ;;
CREATE TRIGGER `deleteproject` AFTER DELETE ON `activity` FOR EACH ROW delete from project where budgetno = OLD.budgetno
and activityno = OLD.activityno
;
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table budget
-- ----------------------------
DROP TRIGGER IF EXISTS `editbudgetlist`;
delimiter ;;
CREATE TRIGGER `editbudgetlist` AFTER UPDATE ON `budget` FOR EACH ROW update list set budgetno = NEW.budgetno where budgetno = OLD.budgetno
;
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table budget
-- ----------------------------
DROP TRIGGER IF EXISTS `editbudgetproject`;
delimiter ;;
CREATE TRIGGER `editbudgetproject` AFTER UPDATE ON `budget` FOR EACH ROW update project set budgetno = NEW.budgetno where budgetno = OLD.budgetno
;
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table budget
-- ----------------------------
DROP TRIGGER IF EXISTS `editbudgetactivity`;
delimiter ;;
CREATE TRIGGER `editbudgetactivity` AFTER UPDATE ON `budget` FOR EACH ROW update activity set budgetno = NEW.budgetno where budgetno = OLD.budgetno
;
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table budget
-- ----------------------------
DROP TRIGGER IF EXISTS `deleteactivity`;
delimiter ;;
CREATE TRIGGER `deleteactivity` AFTER DELETE ON `budget` FOR EACH ROW delete from activity where budgetno = OLD.budgetno
;
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
;
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
;
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
;
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table project
-- ----------------------------
DROP TRIGGER IF EXISTS `deletelist`;
delimiter ;;
CREATE TRIGGER `deletelist` AFTER DELETE ON `project` FOR EACH ROW delete from list where budgetno = OLD.budgetno
and activityno = OLD.activityno and projectno = OLD.projectno
;
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
