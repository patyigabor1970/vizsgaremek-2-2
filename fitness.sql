-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2023 at 03:06 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fitness`
--

-- --------------------------------------------------------

--
-- Table structure for table `elmaradasok`
--

CREATE TABLE `elmaradasok` (
  `Id` int(11) NOT NULL,
  `OraId` int(11) NOT NULL,
  `ElmaradasOka` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `idopontok`
--

CREATE TABLE `idopontok` (
  `Id` int(11) NOT NULL,
  `Kezdes` time NOT NULL,
  `Vegzes` time NOT NULL,
  `HetNap` enum('0','1','2','3','4','5','6') COLLATE utf8mb4_hungarian_ci NOT NULL,
  `Oradij` int(11) NOT NULL COMMENT 'ft/h',
  `MinimumFo` int(11) NOT NULL,
  `MozgasformaId` int(11) NOT NULL,
  `TrainerId` int(11) NOT NULL,
  `TeremId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Dumping data for table `idopontok`
--

INSERT INTO `idopontok` (`Id`, `Kezdes`, `Vegzes`, `HetNap`, `Oradij`, `MinimumFo`, `MozgasformaId`, `TrainerId`, `TeremId`) VALUES
(6, '09:00:00', '10:00:00', '0', 599, 1, 1, 1, 1),
(7, '15:00:00', '16:00:00', '3', 600, 2, 2, 3, 2),
(8, '14:00:00', '15:00:00', '6', 588, 1, 3, 2, 3),
(9, '11:00:00', '12:00:00', '4', 577, 1, 3, 1, 3),
(10, '08:30:00', '09:30:00', '1', 666, 2, 2, 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `mozgasformak`
--

CREATE TABLE `mozgasformak` (
  `Id` int(11) NOT NULL,
  `Nev` text COLLATE utf8mb4_hungarian_ci NOT NULL,
  `Leiras` text COLLATE utf8mb4_hungarian_ci NOT NULL,
  `KepUrl` varchar(2038) COLLATE utf8mb4_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Dumping data for table `mozgasformak`
--

INSERT INTO `mozgasformak` (`Id`, `Nev`, `Leiras`, `KepUrl`) VALUES
(1, 'Spinning', 'A spinning az egyik legkiválóbb kardió edzés, mely egyszerre fejleszti a testet és a lelket, a mentális képességeket és az állóképességet is. Ez a mozgásforma méltán népszerű, mára már filozófiává, életformává nőtte ki magát. A legjobb, hogy kortól és nemtől függetlenül bárki űzheti.', 'http://localhost:5173/src/images/main1.jpg'),
(2, 'Aerobik', 'Az aerobik az aerob szóból származik. Definícióját tekintve jelentése: „az oxigén jelenléte”. Minden gyakorlatot, ami nagy izomcsoportok megmozgatását, ritmust és ismétléseket igényel, ennek – vagyis oxigént igénylőnek – nevezhetünk.', 'http://localhost:5173/src/images/main2.jpg'),
(3, 'CrossFit', 'A CrossFit a funkcionális edzés alapjaira épül, és annak eszköztárát alkalmazza a programjai megalkotása során, egyaránt merítve a súlyemelés, erőemelés, gimnasztika, állóképességi sportok területéről. Egy mondatban meghatározva a CrossFit funkcionális edzés magas intenzitáson végrehajtva állandó változatosság mellett. 6 állomásos keret, cross fit rudak és tárcsák, GHD pad, concept2 ergométer, airbike, kettlebell, freerun- és stairmaster hiit futópad áll rendelkezésedre, hogy fejleszd kondícionális képességeidet.', 'http://localhost:5173/src/images/main3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `orak`
--

CREATE TABLE `orak` (
  `Id` int(11) NOT NULL,
  `IdopontId` int(11) NOT NULL,
  `Datum` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Dumping data for table `orak`
--

INSERT INTO `orak` (`Id`, `IdopontId`, `Datum`) VALUES
(1, 6, '2023-05-15'),
(2, 7, '2023-05-18'),
(3, 8, '2023-05-14'),
(4, 10, '2023-05-16'),
(5, 9, '2023-05-19');

-- --------------------------------------------------------

--
-- Table structure for table `registry`
--

CREATE TABLE `registry` (
  `Id` int(11) NOT NULL,
  `Jogosultsag` enum('0','1','2','') COLLATE utf8mb4_hungarian_ci NOT NULL DEFAULT '2' COMMENT '0 Admin, 1 Trainer, 2 User',
  `Email` varchar(99) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `Password` char(60) COLLATE utf8mb4_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Dumping data for table `registry`
--

INSERT INTO `registry` (`Id`, `Jogosultsag`, `Email`, `Password`) VALUES
(1, '0', 'atilightwolf@gmail.com', '123456'),
(2, '1', '1@1.com', '123456'),
(3, '1', '2@1.com', '123456'),
(4, '1', '3@1.com', '123456'),
(5, '1', '4@1.com', '123456'),
(6, '2', '1@2.com', '123456'),
(7, '2', '2@2.com', '123456'),
(8, '1', '123@gmail.com', '123456');

-- --------------------------------------------------------

--
-- Table structure for table `resztvetelek`
--

CREATE TABLE `resztvetelek` (
  `Id` int(11) NOT NULL,
  `ResztvevoId` int(11) NOT NULL,
  `OraId` int(11) NOT NULL,
  `Jelenlet` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Dumping data for table `resztvetelek`
--

INSERT INTO `resztvetelek` (`Id`, `ResztvevoId`, `OraId`, `Jelenlet`) VALUES
(1, 1, 1, 1),
(2, 1, 2, 1),
(3, 1, 3, 0),
(4, 2, 4, 1),
(5, 2, 5, 1),
(6, 2, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `resztvevok`
--

CREATE TABLE `resztvevok` (
  `Id` int(11) NOT NULL,
  `Nev` text COLLATE utf8mb4_hungarian_ci NOT NULL,
  `Telefonszam` varchar(15) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `RegistryId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Dumping data for table `resztvevok`
--

INSERT INTO `resztvevok` (`Id`, `Nev`, `Telefonszam`, `RegistryId`) VALUES
(1, 'John Smith', '+1 111 1111', 6),
(2, 'Jane Smith', '+2 222 2222', 7),
(3, 'Fred Flintstone', '+30 345 3456', 8);

-- --------------------------------------------------------

--
-- Table structure for table `termek`
--

CREATE TABLE `termek` (
  `Id` int(11) NOT NULL,
  `Nev` text COLLATE utf8mb4_hungarian_ci NOT NULL,
  `MaxCap` int(11) NOT NULL,
  `Lokacio` text COLLATE utf8mb4_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Dumping data for table `termek`
--

INSERT INTO `termek` (`Id`, `Nev`, `MaxCap`, `Lokacio`) VALUES
(1, 'Thermopylae', 20, 'Greece'),
(2, 'Dún Scáith', 10, 'Ireland'),
(3, 'Avalon', 2, 'The Reverse Side of the World');

-- --------------------------------------------------------

--
-- Table structure for table `trainerek`
--

CREATE TABLE `trainerek` (
  `Id` int(11) NOT NULL,
  `Nev` text COLLATE utf8mb4_hungarian_ci NOT NULL,
  `Telefonszam` varchar(15) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `TrainerKepUrl` varchar(2083) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `Leiras` text COLLATE utf8mb4_hungarian_ci NOT NULL,
  `RegistryId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Dumping data for table `trainerek`
--

INSERT INTO `trainerek` (`Id`, `Nev`, `Telefonszam`, `TrainerKepUrl`, `Leiras`, `RegistryId`) VALUES
(1, 'Mezei Gábor', '+36305110546', 'http://localhost:5173/src/images/mezeigabor.jpg','A sport mindig is szerves részét képezte az életemnek, 10 év kosárlabdázás után döntöttem a súlyzós edzés mellett, ami azóta már életformává vált. Éppen ezért döntöttem úgy, a jogi tanulmányaim befejeztével, hogy edzői képesítést szerzek, hogy bárki számára segítséget tudjak nyújtani, aki a súlyzós edzés világába szeretne betekintést nyerni.', 2),
(2, 'Gáti Éva', '+36702213654', 'http://localhost:5173/src/images/gatieva.jpg','5 éve vagyok a crossfitt szerelmese, jelenleg is aktívan sportolok. 2, 5 éve crossfitt edzéseket tartok.Amit tudok biztosítani barátságos, családias légkör, változatos edzések, magasfokú képzettség.', 3),
(3, 'Sós Norbert', '+36301252244', 'http://localhost:5173/src/images/sosnorbert.jpg', 'Édesanyám sportrehabilitációs trénerként óriási mértékben hatott rám. Korábban számos sportágat kipróbáltam, míg végül 7 évvel ezelőtt elragadott az edzőtermek világa, ahol megtaláltam önmagam. Hamar rá kellett jönnöm, hogy a megfelelő háttértudás nélkül nem tudom elérni a céljaimat. Az edzéselmélet mellett a táplálkozástudományban is elmélyedtem, ennek eredményeképpen biomérnökként diplomáztam Szegeden. Rengeteget tanultam az emberi test működéséről, valamint egyre inkább lenyűgözött az a tény, hogy a háttérfolyamatok megértése révén mennyivel hatékonyabban megy a testépítés vagy éppen a fogyás.', 4),
(4, 'Vári Áron', '+363065630303', 'http://localhost:5173/src/images/variaron.jpg', 'Gyermekkorom óta életem meghatározó részévé vált a sport. Kezdetben kipróbáltam a karate különböző válfajait, majd belekóstoltam az atlétikába. Ezek a sportok kiváló alapot adtak fizikálisan, és mentálisan egyaránt.2013-tól egy jól sikerült újévi fogadalomnak köszönhetően belecsöppentem a súlyzós edzés világába, melyet töretlen lelkesedéssel végzek azóta is. Mindig szerettem emberekkel foglalkozni, és elhatároztam, hogy trainerként szeretnék érvényesülni.Igyekszem látókörömet bővíteni, és tovább képzeni magam, hogy minél sokoldalúbb edzéseket tarthassak vendégeim számára, és minél több kihívást állíthassak magam elé.', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `elmaradasok`
--
ALTER TABLE `elmaradasok`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Fk_ora_elmar` (`OraId`);

--
-- Indexes for table `idopontok`
--
ALTER TABLE `idopontok`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Fk_trainer_ido` (`TrainerId`),
  ADD KEY `Fk_terem_ido` (`TeremId`),
  ADD KEY `Fk_mozgas_ido` (`MozgasformaId`);

--
-- Indexes for table `mozgasformak`
--
ALTER TABLE `mozgasformak`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `orak`
--
ALTER TABLE `orak`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Fk_ido_ora` (`IdopontId`);

--
-- Indexes for table `registry`
--
ALTER TABLE `registry`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `resztvetelek`
--
ALTER TABLE `resztvetelek`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Fk_rvevo_rvetel` (`ResztvevoId`),
  ADD KEY `Fk_ora_rvetel` (`OraId`);

--
-- Indexes for table `resztvevok`
--
ALTER TABLE `resztvevok`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Fk_registry_reszt` (`RegistryId`);

--
-- Indexes for table `termek`
--
ALTER TABLE `termek`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `trainerek`
--
ALTER TABLE `trainerek`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Fk_registry_train` (`RegistryId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `elmaradasok`
--
ALTER TABLE `elmaradasok`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `idopontok`
--
ALTER TABLE `idopontok`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `mozgasformak`
--
ALTER TABLE `mozgasformak`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `orak`
--
ALTER TABLE `orak`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `registry`
--
ALTER TABLE `registry`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `resztvetelek`
--
ALTER TABLE `resztvetelek`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `resztvevok`
--
ALTER TABLE `resztvevok`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `termek`
--
ALTER TABLE `termek`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `trainerek`
--
ALTER TABLE `trainerek`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `elmaradasok`
--
ALTER TABLE `elmaradasok`
  ADD CONSTRAINT `Fk_ora_elmar` FOREIGN KEY (`OraId`) REFERENCES `orak` (`Id`);

--
-- Constraints for table `idopontok`
--
ALTER TABLE `idopontok`
  ADD CONSTRAINT `Fk_mozgas_ido` FOREIGN KEY (`MozgasformaId`) REFERENCES `mozgasformak` (`Id`),
  ADD CONSTRAINT `Fk_terem_ido` FOREIGN KEY (`TeremId`) REFERENCES `termek` (`Id`),
  ADD CONSTRAINT `Fk_trainer_ido` FOREIGN KEY (`TrainerId`) REFERENCES `trainerek` (`Id`);

--
-- Constraints for table `orak`
--
ALTER TABLE `orak`
  ADD CONSTRAINT `Fk_ido_ora` FOREIGN KEY (`IdopontId`) REFERENCES `idopontok` (`Id`);

--
-- Constraints for table `resztvetelek`
--
ALTER TABLE `resztvetelek`
  ADD CONSTRAINT `Fk_ora_rvetel` FOREIGN KEY (`OraId`) REFERENCES `orak` (`Id`),
  ADD CONSTRAINT `Fk_rvevo_rvetel` FOREIGN KEY (`ResztvevoId`) REFERENCES `resztvevok` (`Id`);

--
-- Constraints for table `resztvevok`
--
ALTER TABLE `resztvevok`
  ADD CONSTRAINT `Fk_registry_reszt` FOREIGN KEY (`RegistryId`) REFERENCES `registry` (`Id`);

--
-- Constraints for table `trainerek`
--
ALTER TABLE `trainerek`
  ADD CONSTRAINT `Fk_registry_train` FOREIGN KEY (`RegistryId`) REFERENCES `registry` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
