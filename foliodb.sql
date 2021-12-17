-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 17, 2021 at 09:33 AM
-- Server version: 5.5.68-MariaDB
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `foliodb`
--

-- --------------------------------------------------------

--
-- Table structure for table `gives_rating_to_project`
--

CREATE TABLE IF NOT EXISTS `gives_rating_to_project` (
  `userId` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `rating` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gives_rating_to_project`
--

INSERT INTO `gives_rating_to_project` (`userId`, `projectId`, `rating`) VALUES
(1, 56, 1),
(3, 56, -1),
(5, 33, -1),
(5, 56, 1),
(5, 62, 1),
(5, 86, -1),
(5, 97, 1),
(23, 32, -1),
(23, 86, -1),
(23, 89, 1),
(24, 87, 1),
(41, 89, 1),
(46, 87, 1),
(100, 97, 1),
(101, 97, -1);

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE IF NOT EXISTS `projects` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `description` text,
  `video` text,
  `images` text CHARACTER SET utf8,
  `outline` text,
  `logo` text,
  `tags` text,
  `author` int(11) NOT NULL,
  `private` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `name`, `date`, `description`, `video`, `images`, `outline`, `logo`, `tags`, `author`, `private`) VALUES
(32, 'Happy birdz', '2021-12-08 22:00:00', '', '', 'd4c8c733b61a651c7d71e4c0f3502ed3,ae284c38ec52e346b4973240fe92f37a,274e60bd1362ecd05f00ba358715c886,8c9ea9938d43ac3ebce47b7fa6025463,0e45e3b38ddc54906d1ce548da85151c,1d35e15e6964802193bbea5d4af3db23', 'Not a knock-off', '74b279c49e42fc02223efc55e3c9e343', NULL, 23, 0),
(33, 'Not Instant gram', '2021-11-30 22:00:00', 'good app', '', '8cc33c3c17db8471dc8456fb28f52c91', 'Post pictures of yourself', '3ef6f89d63167e2410e08fedb5a05d9d', NULL, 5, 0),
(35, 'Tweet Tweet', '2021-12-08 22:00:00', '', '', '06f4b3915518f70f7fd8acef8930f59a', 'Post memes and news', '648ab34c6b1ffb353a1e1b5cf4bee92b', NULL, 5, 0),
(36, 'WeeWee', '2021-12-08 22:00:00', '', '', 'd23b1e30368a5877254a0b7d25f309a2', 'Wee', 'bfa953d36a8e92db3310766c0436dc2c', NULL, 5, 0),
(37, 'Sweets rush', '2021-12-08 22:00:00', '', '', '1d7b287868c2b0b671eb24619b41c59a,22d73e85dda5697a50a2426222eac63d', 'Sugar-free', '91b52574bb6c6ad3453ce6f15e15fc8a', NULL, 23, 0),
(38, 'Clash of Guilds', '2021-12-08 22:00:00', '', '', '475dbd9aed89fefdd37f8884b721c0cf,70b50ee59bb857fe5654dff512060113', 'Another not-counterfeit', '72a7f39a9befc305b35691e9e5076ffd', NULL, 23, 0),
(46, 'ForeHeadBook', '2021-12-09 22:00:00', 'This is not fake', '', 'd805d174fe8a0a5de7969b7961674d45', 'Come see my forehead', '199c7cadea4f610627afabdb0d563802', NULL, 5, 0),
(56, 'Microsoft BASIC', '2021-12-17 09:26:31', 'pretty slow, wouldn''t recommend using ', '', '9843b751572238ba0e99b28d91bfeaf8', 'some programming language I made during lunch break lol', '3565e3f9f938732df63f90e0be7a8a2e', NULL, 34, 0),
(62, 'Toilet PC Simulator', '2021-12-09 22:00:00', '', 'FAYR7SJeK1c', '52e684c1fbf054eb16f183a6f36b4d50,86226617a52a6b4124ddabb723a4f2e4,3f522d50219d1b7c530c9555822d7edb', 'Flush me, it turns me on.', 'f053d28fa98dc5e5e54bad91ea0e9d00', NULL, 5, 0),
(85, 'Flighter', '2021-12-16 10:48:53', '', '', NULL, '', '6ff8eb201881c6816ec3c308f728badd', NULL, 24, 0),
(86, 'Sinical', '2021-12-16 10:49:10', '', '', NULL, '', 'bd0cc54fd299c9460cce9c7dc7842464', NULL, 24, 0),
(87, 'TradeEven', '2021-12-16 10:49:25', '', '', NULL, '', 'e8b9fc258495749d8a616d3b14c35729', NULL, 24, 0),
(88, 'LowFly', '2021-12-16 10:49:38', 'This is a test', '', NULL, '', 'cfc416fb34da53189ae43d631f020673', NULL, 24, 0),
(89, 'FolioHub', '2021-12-17 09:29:24', '', '', 'c078d57a16594f01b9b98f58abc20391,5b27ddf5660f0d77707ef3ad63e39465,4ff1defeb8cb71ce6468c75d6ab2e560,3e59d8e37be4520866aecbf773753b04', '', 'c62d73abfabfc159aa0d4940cbcca4ab', NULL, 24, 0),
(97, 'Booboots', '2021-12-17 07:40:17', 'Nice', '', '47dce8f003e0cf45a04cd5d401c5e8e8,23b4d10c140a96771df2135ab2d24032', 'Booboo''s boots', 'ec409ce7a7be059d22804276e83ab35e', NULL, 100, 0),
(98, 'Flighter', '2021-12-17 08:27:55', '', '', '860db10395ecd5c6527f1930664a0621,c6d9a7696a48d0a722f6c0fad85c555d', 'Fly Lighter', '41eff5ff46951764fc5682c72b3d7425', NULL, 101, 0),
(99, 'TradeEven', '2021-12-17 08:30:18', '', '', '109ce6295d278b64ebabdce725272d95,376516bc3333fd92f7809f004a7fa82a', 'The new way to trade', 'e76b5526152ddaaf698c37fa8eea24c2', NULL, 101, 0),
(100, 'LowFly', '2021-12-17 09:21:37', '', '', NULL, 'For all your travel needs', '7b0e4a803e230e6ed796ae981a440c34', NULL, 101, 0),
(101, 'Thinking Above', '2021-12-17 09:22:01', '', '', NULL, 'Don''t limit yourself', '3db6a0c356ab9e11596d63cf4f5d0216', NULL, 24, 0),
(102, 'Mountain Simulator', '2021-12-17 09:19:19', 'I think we go get some fresh air!', '', '4396763032ebd7f394f1145c9e5ce146', 'Want to take a hike to the mountains? This is for you!', 'b5160cebfda7d5638df24f6db048c580', NULL, 5, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `userId` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `email` text NOT NULL,
  `title` text,
  `creationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `github` text,
  `description` text,
  `tags` text,
  `profilePic` text,
  `role` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `username`, `password`, `email`, `title`, `creationDate`, `github`, `description`, `tags`, `profilePic`, `role`) VALUES
(1, 'admin', 'asdf', 'admin@metropolia.fi', 'admin', '2021-12-14 11:00:00', 'www.admin.com', 'im the admin', 'Longtag,Admin', 'c99e39547b5cd983e7101ef0b6d05470', 1),
(3, 'souly', 'souly', 'souly@metropolia.fi', 'Mascot', '2022-09-08 21:00:00', NULL, NULL, NULL, NULL, 0),
(5, 'Sam Hämäläinen', 'sam123', 'samhamal@metropolia.fi', 'Developer', '1997-10-01 21:00:00', 'https://gitlab.metropolia.fi/foliohub', 'Not so professional programmer', 'HTML,CSS,JavaScript', '42d2be1911e22755938dce9d4399a3af', 0),
(7, 'souly not 3', 'souly', 'souly2@metropolia.fi', 'admin did this haha', '2021-12-01 22:00:00', NULL, NULL, NULL, '', 0),
(23, 'grumpycat', 'hello', 'hello@there.com', 'noob', '2021-12-06 22:00:00', 'github.com', 'just grumpy', '', 'ae8623facdf55b0e867019630d7e9a4b', 0),
(24, 'Dfallow', 'dave123', 'dave@metropolia.fi', 'Student', '2021-12-08 22:00:00', 'www.gitlab.com', '', 'Full-Stack,Javascript,Kotlin', '1eabe46de6d607e9915faef92ae1cfef', 0),
(26, 'dave91', 'test123', 'somedude@metro.fi', 'tester', '2021-12-08 22:00:00', '', 'this is a test', '', 'dabbacb6213d9ca13b7a8c1a1a0b750a', 0),
(29, 'sam empty', 'samsam', 'sam@sam.fi', '', '2021-12-08 22:00:00', '', '', '', NULL, 0),
(33, 'Spongebob', 'Spongebob123', 'spongebob@mail.com', 'Squarepants', '2021-12-09 22:00:00', '', '', '', NULL, 0),
(34, 'bill_gates', 'Hashed123', 'bill.gates@microsoft.com', '', '2021-12-09 22:00:00', '', '', '', '49642b46282e4f0ce98f9579594f3315', 0),
(37, 'mimi', 'Test1234', 'mimi@gmail.com', 'Something', '2021-12-09 22:00:00', 'github.com', 'Something else', '', '29ca916bc86cab0000a77f4adea321f8', 0),
(38, 'andrasa', 'Testing123', 'andrasa@metropolia.fi', '', '2021-12-09 22:00:00', '', '', '', NULL, 0),
(39, 'sirjakos', 'Qwertyui8', 'woopwopp@gmail.com', 'Queen of the Empire', '2021-12-09 22:00:00', '', 'Beware!!', '', '6bb1cc4bf9c9e4831ead3dcdd022b3a9', 0),
(41, 'User', 'jK13sP31', 'hilma@metropolia.fi', 'My project', '2021-12-09 22:00:00', 'Github', 'Description', '', '3edc37e53a2708cd015ed92cfbb7b10b', 0),
(43, 'andy', 'test123', 'test@test.test', 'programmer', '2021-12-09 22:00:00', 'github.com', 'you are my fire the one desire', '', '98edcaf5f802af3731efd920ddd0768d', 0),
(45, 'CommentTester', 'Test1234', 'comment@testing.com', 'Tester', '2021-12-10 22:00:00', '', 'Testing the comments on projects', '', '274032c83d64e01e53875b9cfee88c63', 0),
(46, 'tester', 'test1234', 'comment@test.com', 'tester', '2021-12-10 22:00:00', '', 'testing comments', '', '98d6c3f768644f9fbaa3c290b22947f0', 0),
(47, 'Toilet PC', 'user123', 'new@user.fi', 'master', '2021-12-13 16:22:14', 'www.gitlab.fi', 'short', '', '5fbe6b11442b70007a86475354c67f0f', 0),
(53, 'tagtesting', 'test123', 't@f.fi', 'tagger', '2021-12-14 16:43:22', '', 'likes to tag', 'one,two,three', '78590c5c163f0b01815d406f05988bb6', 0),
(54, 'tagger', 'test123', 'davetest@metro.fi', 'tester', '2021-12-14 16:47:53', '', 'testing the tags', '', 'ca9382df5bcf5cf2827b324b3f88e630', 0),
(55, 'test', 'test123', 'fresh@new.com', '', '2021-12-14 18:46:25', '', '', '', 'ca0858b68e396024e8f30f2e99294500', 0),
(56, 'newaccount', 'test123', 'a@b.com', 'who dis?', '2021-12-14 18:48:41', '', 'what do you want?', 'first,second,third', '4d7216e27b6576ce1bb6c512a37d051c', 0),
(57, 'Tag testing of Davids work', 'test123', 'a@b.fi', 'david', '2021-12-14 19:41:38', 'www.gitlab.com', 'shorty desc', 'tagthreeagain,newtag,working', 'f161ef93f3162b064bb1a68fb4825324', 0),
(58, 'another grumpy cat', 'one1234', 'one@one.com', 'very grumpy', '2021-12-15 10:02:18', '', '', '', 'e447d39bd5c47bea84d0a6a00ed06959', 0),
(62, 'thumb', 'thumb123', 'thumb@thumb.com', '', '2021-12-15 11:05:14', '', '', '', '9a3f0ec8c12748011494e8567328966f', 0),
(63, 'tester', 'test123', 'logintest@metro.fi', 'test', '2021-12-15 11:07:37', '', '', 'test', '789d01754ebc68731738a2b82444ef86', 0),
(64, 'notags', 'test123', 'testtags@metr.fi', '', '2021-12-15 11:08:37', '', '', '', 'eadfb2bedacf34255ed08b7f2701f31a', 0),
(82, 'Bezos updated', 'Test1234', 'two@test.com', 'the boss of amazoom', '2021-12-15 13:15:58', NULL, NULL, NULL, '7c4672749c147f74e9083b0238fcd051', 0),
(84, 'John the coder', 'Hardpass123', 'john@metropolia.fi', 'Developer', '2021-12-15 13:44:10', 'www.gitlab.com', 'I enjoy web development.', 'HTML,CSS,JavaScript', NULL, 0),
(85, 'John the coder', 'Hardpass123', 'john@metropolia.fi', 'Developer', '2021-12-15 13:44:11', 'www.gitlab.com', 'I enjoy web development.', 'HTML,CSS,JavaScript', NULL, 0),
(86, 'John the coder', 'Hardpass123', 'john@metropolia.fi', 'Developer', '2021-12-15 13:44:11', 'www.gitlab.com', 'I enjoy web development.', 'HTML,CSS,JavaScript', NULL, 0),
(88, 'empty user test', 'Sam12345', 'newuser@new.com', '', '2021-12-15 20:48:20', '', '', '', NULL, 0),
(89, 'Hello', 'Hello1234', 'hello@test.com', 'noob', '2021-12-15 20:48:45', 'github.com', 'sfdsfsdf', '', 'f432ff400aae1f3421907a30fcc25ee4', 0),
(90, 'noob', 'Noob1234', 'noob@noob.fi', 'noob', '2021-12-15 20:52:06', 'www.noob.fi', 'noob', 'noob', NULL, 0),
(91, 'test create', 'HEllo1234', 'hell@o.com', 'safdsf', '2021-12-15 20:54:23', 'github.com', 'asfdsaf', 'test,check', 'b2f351ddd34284fda66f8ef4273e4ed8', 0),
(93, 'no project man', 'Test1234', 'noproject@test.fi', 'Life is empty', '2021-12-15 22:12:36', 'www.google.com', 'empty:(', 'nothing', 'a0c0d02dfbe826db1364640b6ec06a4b', 0),
(94, 'newUser', 'Test1234', 'new@new.com', 'test', '2021-12-16 07:57:31', '', 'short', 'Check,Test', 'c66ad8a2534982f73ff5f54a8c318a03', 0),
(95, 'empty test', 'Sam12345', 'a@b.c', '', '2021-12-16 09:23:06', '', '', '', '3d36bfcfe09053389f90784c95666002', 0),
(96, 'dfallow', 'Test1231', 'ab@cd.fi', 'Programmer', '2021-12-16 20:31:27', '', '', 'Kotlin,JavaScript', 'c68986dc964a82814f66415b3d2de97f', 0),
(97, 'Sam 2', 'Sam12345', 'sam2@sam.fi', 'Alt account', '2021-12-17 03:00:55', 'www.github.com', 'testing at night', 'Late,Night,Sleepy', 'f639b4bba912ea3b430e1878714d5e1c', 0),
(98, 'Not so happy bird', 'Abc12345', 'ab@ab.ab', 'bird', '2021-12-17 03:58:17', 'github.com', 'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', 'Sql,Type,Other', '74f0693119e9b3159849f299df954e87', 0),
(99, 'panda102', 'Hello1234', 'ab@abc.com', 'Full-stack', '2021-12-17 06:52:16', 'github.com', 'I like food and coding', 'Js,Css,Node,Html', 'fafcd367fa3483122b3935533d10fae2', 0),
(100, 'BOOBOO', 'boobooB1', 'booboo@boobs.boo', 'Emperor', '2021-12-17 07:37:50', 'Boobooboobooboobooboobooboobooboo', 'I''m the bestest', 'Best,Goddess,Emperor,Booboo', '4f02f3e038dee6525ea6b2d184ebc979', 0),
(101, 'Tserved', 'Server123', 'server1@metropolia.fi', 'Developer', '2021-12-17 08:25:21', 'www.gitlab.com', '', 'Front End,Html,JavaScript', '6ce0d8ef0385a7d0382907a1245ee384', 0);

-- --------------------------------------------------------

--
-- Table structure for table `writes_about`
--

CREATE TABLE IF NOT EXISTS `writes_about` (
  `commentId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `comment` text NOT NULL,
  `timeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `writes_about`
--

INSERT INTO `writes_about` (`commentId`, `userId`, `projectId`, `comment`, `timeStamp`) VALUES
(1, 23, 33, 'First test comment', '2021-12-12 15:29:47'),
(24, 5, 62, 'I like this setup alot !', '2021-12-13 10:48:36'),
(61, 5, 62, 'Who would do that tho? oh nice video! this toilet pc is nice name. Sam is good developer! ', '2021-12-13 19:23:55'),
(75, 5, 33, 'This is testing through postman, did it work?', '2021-12-15 17:57:46'),
(76, 5, 33, 'This is testing through postman, did it work?', '2021-12-15 17:59:50'),
(84, 23, 37, 'comment', '2021-12-16 13:07:04'),
(87, 23, 37, 'fsdahfklsdajfkljasdklfjklasdjfkljasedjflsdjklf', '2021-12-16 13:08:12'),
(88, 23, 37, 'sfajflkjsdkljfkldsfkl', '2021-12-16 13:08:19'),
(89, 23, 37, 'sdfkal;fkl;dskfal;dkl;fkldks dfsjfkljsadlkfjasdkl', '2021-12-16 13:08:31'),
(93, 23, 89, 'VERY GOOD', '2021-12-16 13:14:28'),
(101, 5, 46, 'this is fake', '2021-12-16 23:04:09'),
(109, 100, 97, 'Wow dem boots', '2021-12-17 07:40:59'),
(110, 5, 97, 'Nice boots, where can i download this?', '2021-12-17 09:04:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gives_rating_to_project`
--
ALTER TABLE `gives_rating_to_project`
  ADD PRIMARY KEY (`userId`,`projectId`),
  ADD KEY `projectId` (`projectId`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author` (`author`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- Indexes for table `writes_about`
--
ALTER TABLE `writes_about`
  ADD PRIMARY KEY (`commentId`),
  ADD KEY `userId` (`userId`),
  ADD KEY `projectId` (`projectId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=103;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=102;
--
-- AUTO_INCREMENT for table `writes_about`
--
ALTER TABLE `writes_about`
  MODIFY `commentId` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=111;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `gives_rating_to_project`
--
ALTER TABLE `gives_rating_to_project`
  ADD CONSTRAINT `gives_rating_to_project_ibfk_2` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gives_rating_to_project_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `fk_author_id` FOREIGN KEY (`author`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `writes_about`
--
ALTER TABLE `writes_about`
  ADD CONSTRAINT `writes_about_ibfk_1` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `writes_about_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
