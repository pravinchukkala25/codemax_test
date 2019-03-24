-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 24, 2019 at 05:35 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventory_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `manufacturer_tb`
--

CREATE TABLE `manufacturer_tb` (
  `m_id` int(11) NOT NULL,
  `m_name` varchar(255) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `manufacturer_tb`
--

INSERT INTO `manufacturer_tb` (`m_id`, `m_name`, `created_date`, `modified_date`) VALUES
(5, 'demoname1', '2019-03-23 08:50:24', NULL),
(6, 'demoname1', '2019-03-23 08:50:24', NULL),
(7, 'demoname1', '2019-03-23 08:50:24', NULL),
(8, 'test', '2019-03-24 15:50:39', NULL),
(9, 'Manufacture 2', '2019-03-24 17:32:52', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `models`
--

CREATE TABLE `models` (
  `id` int(11) NOT NULL,
  `m_id` int(11) DEFAULT NULL,
  `model_name` varchar(255) DEFAULT NULL,
  `color` text,
  `m_year` date DEFAULT NULL,
  `reg_no` int(11) DEFAULT NULL,
  `note` text,
  `pics` text,
  `c_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `models`
--

INSERT INTO `models` (`id`, `m_id`, `model_name`, `color`, `m_year`, `reg_no`, `note`, `pics`, `c_date`) VALUES
(1, 5, 'test', 'green', '0000-00-00', NULL, NULL, NULL, '2019-03-24 16:00:31'),
(2, 5, 'test', 'green', '0000-00-00', NULL, NULL, NULL, '2019-03-24 16:03:28'),
(3, 5, 'test', 'green', '0000-00-00', NULL, NULL, NULL, '2019-03-24 16:54:32'),
(4, 5, 'Model 2', 'red', '0000-00-00', 123, 'undefined', NULL, '2019-03-24 17:17:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `manufacturer_tb`
--
ALTER TABLE `manufacturer_tb`
  ADD PRIMARY KEY (`m_id`);

--
-- Indexes for table `models`
--
ALTER TABLE `models`
  ADD PRIMARY KEY (`id`),
  ADD KEY `manufactureID` (`m_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `manufacturer_tb`
--
ALTER TABLE `manufacturer_tb`
  MODIFY `m_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `models`
--
ALTER TABLE `models`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `models`
--
ALTER TABLE `models`
  ADD CONSTRAINT `manufacture_FK` FOREIGN KEY (`m_id`) REFERENCES `manufacturer_tb` (`m_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
