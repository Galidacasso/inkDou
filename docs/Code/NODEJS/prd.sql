SET NAMES UTF8;

DROP DATABASE IF EXISTS `prd`;
CREATE DATABASE `prd` DEFAULT CHARACTER SET UTF8;
USE `prd`;

-- 创建商品表
CREATE TABLE `product`(
    `id` INT KEY AUTO_INCREMENT,
    `pname` VARCHAR(40),
    `title` VARCHAR(40),
    `price` VARCHAR(40)
)DEFAULT CHARACTER SET UTF8;

INSERT INTO `product` VALUES(NULL,'三星W2022','三星 SAMSUNG 心系天下W22 5G 折叠屏 骁龙888 5G手机 16＋512GB雅瓷黑',23999);
INSERT INTO `product` VALUES(NULL,'小米11','小米11 5G 骁龙888 2K AMOLED四曲面柔性屏 游戏手机 8G+128GB 白色',3799);
INSERT INTO `product` VALUES(NULL,'vivo','vivo X60 5G手机 5nm旗舰芯片蔡司光学镜头vivox60手机 微光 8GB+256GB',2799);
INSERT INTO `product` VALUES(NULL,'华为','华为 Mate40 5G 手机【支持鸿蒙HarmonyOs】 亮黑色 mate40E(8+128G)',4959);
