/*
Navicat MySQL Data Transfer

Source Server         : LOCALHOST
Source Server Version : 50616
Source Host           : localhost:3306
Source Database       : dellemc

Target Server Type    : MYSQL
Target Server Version : 50616
File Encoding         : 65001

Date: 2018-06-11 06:14:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `results`
-- ----------------------------
DROP TABLE IF EXISTS `results`;
CREATE TABLE `results` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `num1` float(120,0) DEFAULT NULL,
  `num2` float(120,0) DEFAULT NULL,
  `result` float(120,0) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of results
-- ----------------------------
INSERT INTO `results` VALUES ('32', '12', '12', '144');
