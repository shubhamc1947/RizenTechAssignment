-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 09, 2024 at 06:13 PM
-- Server version: 8.0.33
-- PHP Version: 8.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dashboard_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `dashboard_tbl`
--

CREATE TABLE `dashboard_tbl` (
  `menuid` int NOT NULL,
  `menu_heading` text NOT NULL,
  `menu_name` text NOT NULL,
  `menu_under` text NOT NULL,
  `enable_yn` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `dashboard_tbl`
--

INSERT INTO `dashboard_tbl` (`menuid`, `menu_heading`, `menu_name`, `menu_under`, `enable_yn`) VALUES
(1, 'Masters', 'mnu_masters', 'header', 'Y'),
(2, 'Transactions', 'mnu_transactions', 'header', 'N'),
(3, 'Accounts', 'mnu_accounts', 'header', 'N'),
(4, 'Item Master', 'mnu_itemmaster', 'mnu_masters', 'Y'),
(5, 'Manufacturer Master', 'mnu_mfgrmas', 'mnu_masters', 'Y'),
(6, 'Sale', 'mnu_sale', 'mnu_transactions\r\n', 'Y'),
(7, 'Purchase', 'mnu_purchase', 'mnu_transactions\r\n', 'Y'),
(8, 'Debit Note', 'mnu_drn', 'mnu_transactions\r\n', 'Y'),
(9, 'Cash Receving', 'mnu_cashrecv', 'mnu_accounts', 'Y');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dashboard_tbl`
--
ALTER TABLE `dashboard_tbl`
  ADD PRIMARY KEY (`menuid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dashboard_tbl`
--
ALTER TABLE `dashboard_tbl`
  MODIFY `menuid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
