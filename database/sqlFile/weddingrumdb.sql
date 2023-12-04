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

-- 테이블 wedingrumdb.faq 구조 내보내기
CREATE TABLE IF NOT EXISTS `faq` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 wedingrumdb.faq:~22 rows (대략적) 내보내기
INSERT INTO `faq` (`id`, `category`, `name`, `description`) VALUES
	(1, '전체', '1', '1'),
	(2, '결혼준비', '결혼준비는 크게 대략 어떤것들을 준비하나요?', '결혼식에는 웨딩홀, 스드메, 예복, 촬영, 청첩장 등을 준비하시면 되며, 필요시 예단, 예물, 함 도 별도 준비합니다.\n이후 신혼집, 가전/가구 등 혼수 준비와 함께 신혼여행 예약도 진행하시면 됩니다.'),
	(3, '결혼준비', '결혼준비 비용은 얼마나 드나요?', '결혼준비 비용은 신혼집을 제외하고 예식장, 스드메, 신혼여행 등을 위주로 대략 3~5천만원 내외를 기준으로 신랑 신부님의 상황에 맞게 준비하시는 편입니다.'),
	(4, '결혼준비', '결혼준비 해야할게 많은데 혼자 할 수 있나요?', '혼자 결혼 준비에 어려움을 겪는 분이라면 웨딩플래너와 함께 결혼 준비하는 것을 추천드립니다.\n웨딩플래너는 신랑 신부의 스케줄 관리와 각종 절차·예산 등을 기획, 대행해 주는 역할을 합니다.\n웨딩 관련 정보 습득에 용이하며, 시간을 효율적으로 사용 할 수 있습니다.'),
	(5, '웨딩', '웨딩홀 스타일에는 어떤 타입이 있나요?', '채플 : 교회나 성당의 성스러운 분위기 연출\n컨벤션 : 대부분 어두운 분위기의 컨벤션 홀에서 진행\n호텔 : 대규모 연회장을 커스텀하여 진행\n하우스 : 개인 공간이나 집에서 하는 듯한 프라이빗한 분위기 연출\n야외 : 실내가 아닌 실외에서 예식 진행\n한옥 : 일반 예식 또는 전통 혼례'),
	(6, '웨딩', '유모멘트는 결혼식장인가요?', '유모멘트㈜는 웨딩홀, 컨설팅, 드레스, 케이터링 등 웨딩과 관련된 서비스를 운영하는 국내 최대 규모의 `웨딩 전문 기업`입니다.'),
	(7, '견적/결제/정산', '견적금액은 어떤식으로 내는 것인가요?', '견적금액은 크게 ① 예식장 이용에 대한 금액과 ② 선택 상품 이용에 대한 금액으로 구성됩니다.\n①. 예식장 이용 금액 (식대+부대비용)\n*부대비용은 예식장의 시설이용료로 예식장, 피로연장 등 각종 시청각 장비등의 사용료 입니다.\n②. 선택상품 이용 금액 (유료 웨딩 상품)\n*웨딩카, 혼주메이크업, 전문사회자, 촬영, 축가, 플라워샤워 등 선택상품에 대한 비용입니다.'),
	(8, '견적/결제/정산', '요금 정책이 정찰제라고 하던데, 그럼 모든 사람 견적이 차이가 없는 것인가요?', '고객 편의를 위해 가격이 투명한 정찰제로 운영되며, 동일한 조건의 예식은 가격도 동일합니다.'),
	(9, '견적/결제/정산', '지불보증인원은 뭔가요?', '지불보증인원이란 고객님 예식의 하객 수를 예상하셔서 예식 당일 지급하셔야 하는 식비에 대한 최소한의 인원 수를 말합니다.\n보증하신 인원 수 보다 적은 하객이 오셔서 식사를 하셔도 보증 인원만큼의 식사비용을 지급하셔야 합니다.'),
	(10, '계약/변경/취소', '유모멘트의 웨딩홀 예약은 어떻게 하면 되나요? (더채플/아펠가모/루벨 중 1) 의 웨딩홀은 어떻게 예약하나요?', '예식의 예약은 국내 최초로 도입된 온리원 시스템인 [온라인 예약 시스템]을 통해서 편리하게 예약하실 수 있습니다.\n[온라인 예약 시스템]에서 장소, 날짜, 시간 등 카테고리 별로 선택하여 잔여타임 확인 가능하며, 전 지점 웨딩홀의 최소 보증 인원 및 예상 견적까지 비교 분석 후 예약하실 수 있습니다.'),
	(11, '계약/변경/취소', '웨딩홀 일정 홀딩이나 가예약이 가능한가요?', '웨딩홀 홀딩이나 가예약은 불가능한 점 양해 부탁드립니다. 선호하는 웨딩홀과 희망하는 날짜와 시간이 정해지셨다면 마감되기전에 최대한 신속히 결정하시어 계약 하시는 것을 추천 드립니다.'),
	(12, '계약/변경/취소', '정확하게 취소는 아니고 날짜나 장소를 변경해야 하면 어떻게 하나요?', '예식일로부터 180일 이전에 요청한 경우, 최대 6개월까지 연기 가능하며 1회에 한해 가능합니다. (같은 지점 내 다른 홀로 이동 포함 )\n다른 지점 간 이동일 경우에도 취소 후 계약으로 가능합니다. (모든 지점들 중 1군데만 계약 가능 / 중복 계약 불가)'),
	(13, '맞춤서비스', '기본 웨딩홀 예약시 포함되는 서비스와 미포함되는 서비스는 무엇이 있나요?', '웨딩홀 예약 시, 포함되어 있는 서비스는 `부대상품`, 미포함되는 서비스는 `선택상품`이라고 합니다.\n세부 내용은 링크에서 확인 가능합니다.'),
	(14, '맞춤서비스', '폐백실을 사용하면 음식도 주시나요?', '폐백 음식은 웨딩홀에서 제공해드리지 않으며, 제휴된 업체를 통해 주문 가능합니다.'),
	(15, '맞춤서비스', '선택상품이라고 하는 것들은 언제까지 결정해야 하나요?', '선택상품 별로 차이가 있습니다.\n사진과 영상, 트리츠, 포토부스의 경우 원하시는 업체와 진행을 위해서는 최대한 빠르게 선택하시는 것을 추천드립니다.\n그 외의 상품은 최소 2주 전으로 확정해 주시면됩니다.'),
	(16, '상담예약', '웨딩홀 방문 상담시 어떤 내용을 상담 받게 되나요?', '고객님께서 선호하시는 웨딩의 컨셉과 원하시는 일정 및 예상 하객 인원 등을 고려하여 웨딩 컨설팅을 제안해 드립니다.\n웨딩홀을 소개해 드리고 가능한 일정 및 금액과 서비스 구성에 대해 자세하게 상담해 드립니다.\n동시에 웨딩홀 공간에 대한 소개 및 특/장점들에 대해 안내 받으실 수 있습니다.'),
	(17, '상담예약', '웨딩홀 계약을 하려면 꼭 상담을 받아야 하나요?', '계약 전 상담이 필수는 아니며, 고객님의 상황에 따라 계약 후 상담도 가능합니다.'),
	(18, '상담예약', '웨딩홀 상담을 받으려면 어떻게 하면 되나요?', '모든 상담은 반드시 사전 예약을 통해 진행됩니다. 온라인 사이트 / 유선 / 컨설팅 플래너님을 통해 예약이 가능합니다.\n상담 예약 시 노쇼 방지를 위해 상담보증금 결제를 해주셔야 하며 상담 차 방문하시면 결제 내역은 취소해드립니다.'),
	(19, '부대시설', '예식 시간은 정해져 있나요?', '모든 웨딩홀 이용 가능 시간은 90분입니다.\n사진 촬영 및 피로연장 이용 시간을 고려하여, 예식은 30분 내외로 진행됩니다.'),
	(20, '부대시설', '피로연장은 몇시부터 이용이 가능한가요?', '피로연장은 예식 시간 기준으로 30분 전부터 이용할 수 있으며, 총 120분 동안 이용이 가능합니다.'),
	(21, '부대시설', '입구의 방명록이나 축의금용 봉투는 비치되어 있나요?', '방명록과 축의금용 봉투는 웨딩홀 로비 축의금 데스크에 준비되어 있습니다.'),
	(22, '기타', '웨딩홀 음식이 맛있다고 들었어요. 별도로 판매도 하나요?', '맛있는 웨딩홀 메뉴를 집에서도 드실 수 있게 홈파티 딜리버리 서비스 [아펠가모 앳 홈]을 운영하고 있습니다.');

-- 테이블 wedingrumdb.halls 구조 내보내기
CREATE TABLE IF NOT EXISTS `halls` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hallName` varchar(255) NOT NULL COMMENT '홀이름',
  `hallImg` varchar(255) NOT NULL COMMENT '홀 이미지 주소',
  `Capacity` varchar(255) NOT NULL COMMENT '수용가능인원',
  `ParkingCapacity` varchar(255) NOT NULL COMMENT '주차가능 대수',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 wedingrumdb.halls:~6 rows (대략적) 내보내기
INSERT INTO `halls` (`id`, `hallName`, `hallImg`, `Capacity`, `ParkingCapacity`) VALUES
	(1, '청담점 2F 연회홀', '/images/party/banquet_hall_1.jpg', '300', '200'),
	(2, '공덕점 6F 연회홀', '/images/party/banquet_hall_2.jpg', '500 ', '550'),
	(3, '공덕점 7F 연회홀', '/images/party/banquet_hall_3.jpg', '500', '550'),
	(4, '선릉점 연회홀', '/images/party/banquet_hall_4.jpg', '440', '350'),
	(5, '광화문점 연회홀', '/images/party/banquet_hall_5.jpg', '550', '400'),
	(6, '반포점 연회홀', '/images/party/banquet_hall_6.jpg', '500', '250');

-- 테이블 wedingrumdb.planners 구조 내보내기
CREATE TABLE IF NOT EXISTS `planners` (
  `id` varchar(20) NOT NULL COMMENT '플레너 ID (기본키)',
  `pwd` varchar(20) NOT NULL COMMENT '비밀번호',
  `profileImgUrl` varchar(255) NOT NULL COMMENT '상담사프로필사진',
  `point` varchar(20) NOT NULL COMMENT '지점',
  `name` varchar(20) NOT NULL COMMENT '이름',
  `phone` varchar(20) NOT NULL COMMENT '전화번호',
  `introduction` varchar(255) NOT NULL COMMENT '소개',
  `regdate` datetime NOT NULL COMMENT '플레너 회원 가입일',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 wedingrumdb.planners:~0 rows (대략적) 내보내기
INSERT INTO `planners` (`id`, `pwd`, `profileImgUrl`, `point`, `name`, `phone`, `introduction`, `regdate`) VALUES
	('asd', 'asd', '/image/Reservation/planner/planner.jpg', '잠실점', '카리나', '010-1111-2222', '안녕하세요 카리나 입니다.','2023-11-22 00:00:00'),
  ('asd1', 'asd1', '/image/Reservation/planner/planner1.jpg', '잠실점', '김일', '010-1111-2222', '안녕하세요 김일 입니다.','2023-11-22 00:00:00'),
  ('asd2', 'asd2', '/image/Reservation/planner/planner2.jpg', '잠실점', '김이', '010-1111-2222', '안녕하세요 김이 입니다.','2023-11-22 00:00:00'),
  ('asd3', 'asd3', '/image/Reservation/planner/planner3.jpg', '반포점', '김삼', '010-1111-2222', '안녕하세요 김삼 입니다.','2023-11-22 00:00:00'),
  ('asd4', 'asd4', '/image/Reservation/planner/planner4.jpg', '반포점', '김사', '010-1111-2222', '안녕하세요 김사 입니다.','2023-11-22 00:00:00'),
  ('asd5', 'asd5', '/image/Reservation/planner/planner5.jpg', '반포점', '김오', '010-1111-2222', '안녕하세요 김오 입니다.','2023-11-22 00:00:00'),
  ('asd6', 'asd6', '/image/Reservation/planner/planner6.jpg', '평택점', '김육', '010-1111-2222', '안녕하세요 김육 입니다.','2023-11-22 00:00:00'),
  ('asd7', 'asd7', '/image/Reservation/planner/planner7.jpg', '평택점', '김칠', '010-1111-2222', '안녕하세요 김칠 입니다.','2023-11-22 00:00:00'),
  ('asd8', 'asd8', '/image/Reservation/planner/planner8.jpg', '평택점', '김팔', '010-1111-2222', '안녕하세요 김팔 입니다.','2023-11-22 00:00:00'),
  ('asd9', 'asd9', '/image/Reservation/planner/planner9.jpg', '선릉점', '김구', '010-1111-2222', '안녕하세요 김구 입니다.','2023-11-22 00:00:00'),
  ('asd10', 'asd10', '/image/Reservation/planner/planner10.jpg', '선릉점', '김십', '010-1111-2222', '안녕하세요 김십 입니다.','2023-11-22 00:00:00'),
  ('asd11', 'asd11', '/image/Reservation/planner/planner11.jpg', '선릉점', '김십일', '010-1111-2222', '안녕하세요 김십일 입니다.','2023-11-22 00:00:00'),
  ('asd12', 'asd12', '/image/Reservation/planner/planner12.jpg', '공덕점', '김십이', '010-1111-2222', '안녕하세요 김십이 입니다.','2023-11-22 00:00:00'),
  ('asd13', 'asd13', '/image/Reservation/planner/planner13.jpg', '공덕점', '김십삼', '010-1111-2222', '안녕하세요 김십삼 입니다.','2023-11-22 00:00:00'),
  ('asd14', 'asd14', '/image/Reservation/planner/planner14.jpg', '공덕점', '김십사', '010-1111-2222', '안녕하세요 김십사 입니다.','2023-11-22 00:00:00');

-- 테이블 wedingrumdb.points 구조 내보내기
CREATE TABLE IF NOT EXISTS `points` (
  `id` varchar(20) NOT NULL COMMENT '지점 ID (기본키)',
  `name` varchar(20) NOT NULL COMMENT '지점 이름',
  `content` varchar(20) NOT NULL COMMENT '지점 콘텐츠',
  `information` varchar(20) NOT NULL COMMENT '지점 정보',
  `hall` varchar(20) NOT NULL COMMENT '홀',
  `location` varchar(20) NOT NULL COMMENT '지점 위치',
  `mainImgUrl` varchar(255) NOT NULL COMMENT '메인이미지 url',
  `infoImgUrl` varchar(255) NOT NULL COMMENT 'info이미지 url',
  `HallImgUrl` varchar(255) NOT NULL COMMENT '홀 이미지 url',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 wedingrumdb.points:~0 rows (대략적) 내보내기

-- 테이블 wedingrumdb.products 구조 내보내기
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '상품 아이디 (기본키)',
  `name` varchar(200) NOT NULL COMMENT '상품 이름',
  `price` int(11) NOT NULL COMMENT '상품 가격',
  `imageUrl` varchar(255) NOT NULL COMMENT '이미지 URL 주소',
  `galleryImages` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '갤러리 이미지 배열',
  `category` varchar(255) NOT NULL COMMENT '상품 카테고리',
  `title` varchar(255) DEFAULT NULL COMMENT '상품 제목',
  `description` varchar(255) DEFAULT NULL COMMENT '상품 설명',
  `detailType` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '상세 정보 배열',
  `detailDescription` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '상세 정보 설명',
  `detailPrice` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '상세 정보 가격',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 wedingrumdb.products:~0 rows (대략적) 내보내기
INSERT INTO `products` (`id`, `name`, `price`, `imageUrl`, `galleryImages`, `category`, `title`, `description`, `detailType`, `detailDescription`, `detailPrice`) VALUES 
(1, '축가', 165000, '/image/Product/category/Etc/01.jpg', '["/image/Product/category/Etc/01.jpg", "/image/Product/category/Etc/weddingSong2.jpg"]', 'prodetc', '[더채플 · 아펠가모 · 루벨]', ' 아름다운 노래로 신랑, 신부님에게 축복을 전해드립니다. ', '["축가 1인", "축가 2인"]', '["1인 축가, 1곡", "2인 축가, 1곡"]', '[165000, 220000]'),
(2, '연주', 220000, '/image/Product/category/Etc/02.jpg', '["/image/Product/category/Etc/02.jpg"]', 'prodetc', '[더채플 · 아펠가모 · 루벨]', ' 아름다운 선율로 완성되는 프리미엄 웨딩을 만나보세요. ', '["현악 2중주 (아펠가모 선릉, 더채플앳청담 전용)", "현악 4중주 (더채플 전용)", "재즈 3중주 (더채플앳청담 전용)", "현악3중주+남성3중창 (아펠가모 반포 전용)"]', '["악기 구성: 바이올린+첼로", "악기 구성: 바이올린2+비올라+첼로", "악기 구성: 콘트라베이스+색소폰+피아노", "악기 구성: 피아노+바이올린+첼로 | 화촉점화, 신랑 입장, 신부 입장, 축가, 퇴장"]', '[220000, 495000, 550000, 550000]'),
(3, '주례자', 165000, '/image/Product/category/Etc/03.jpg', '["/image/Product/category/Etc/03.jpg"]', 'prodetc', '[더채플 · 아펠가모 · 루벨]', ' 신랑, 신부님의 찬란하게 빛날 앞날에 진심 어린 축복을 담아 드립니다. ', '["웨딩 전문 주례자"]', '[""]', '[165000]'),
(4, '사회자', 220000, '/image/Product/category/Etc/04.jpg', '["/image/Product/category/Etc/04.jpg"]', 'prodetc', '[아펠가모(공덕 제외) · 루벨]', ' 깔끔하고 센스 있는 웨딩 전문 사회자와 함께 완벽한 웨딩을 준비해보세요. 매끄러운 진행으로 더욱 빛나는 웨딩을 만들어 드립니다. ', '["웨딩 전문 사회자"]', '[""]', '[220000]'),
(5, '사회자', 275000, '/image/Product/category/Etc/05.jpg', '["/image/Product/category/Etc/05.jpg"]', 'prodetc', '[더채플 · 아펠가모 공덕]', ' 깔끔하고 센스 있는 웨딩 전문 사회자와 함께 완벽한 웨딩을 준비해보세요. 매끄러운 진행으로 더욱 빛나는 웨딩을 만들어 드립니다. ', '["웨딩 전문 사회자"]', '[""]', '[275000]'),
(6, '본식 스냅 촬영', 770000, '/image/Product/category/Photo/01.jpg', '["/image/Product/category/Photo/01.jpg"]', 'prodpho', '[더웨이스튜디오]', ' 그날의 생생한 감동과 행복한 순간을 오롯이 한 권에 담습니다. 트렌디한 감각으로 가장 소중한 날의 기억을 기록해 드립니다. ', '["1인 촬영"]', '["50P앨범(14X11인치)1권+50P(10X8인치)앨범 2권 원본,수정본 별도(신부대기실 부터 촬영)"]', '[770000]'),
(7, '본식 스냅 촬영', 1430000, '/image/Product/category/Photo/02.jpg', '["/image/Product/category/Photo/02.jpg", "/image/Product/category/Photo/02-1.jpg", "/image/Product/category/Photo/02-2.jpg", "/image/Product/category/Photo/02-3.jpg", "/image/Product/category/Photo/02-4.jpg", "/image/Product/category/Photo/02-5.jpg", "/image/Product/category/Photo/02-6.jpg", "/image/Product/category/Photo/02-7.jpg"]', 'prodpho', '[누아스튜디오]', ' 가장 찬란한 순간, 기쁨을 함께 합니다. 신랑신부님의 아름다운 추억을 정성스럽게 담아냅니다. ', '["1인 촬영"]', '["80P앨범 1권+10P앨범 2권 원본, 수정본 포함 (신부대기실 부터 촬영)"]', '[1430000]'),
(8, '본식 스냅 촬영', 880000, '/image/Product/category/Photo/03.jpg', '["/image/Product/category/Photo/03.jpg"]', 'prodpho', '[르스토리아]', ' 가장 찬란한 순간, 기쁨을 함께 합니다. 신랑신부님의 아름다운 추억을 정성스럽게 담아냅니다. ', '["1인 촬영"]', '["40P앨범 1권+10P앨범 2권 원본, 수정본 별도 (신부대기실 부터 촬영)"]', '[880000]'),
(9, '본식 스냅 촬영', 1500000, '/image/Product/category/Photo/04.jpg', '["/image/Product/category/Photo/04.jpg", "/image/Product/category/Photo/04-1.jpg", "/image/Product/category/Photo/04-2.jpg", "/image/Product/category/Photo/04-3.jpg", "/image/Product/category/Photo/04-4.jpg", "/image/Product/category/Photo/04-5.jpg", "/image/Product/category/Photo/04-6.jpg", "/image/Product/category/Photo/04-7.jpg"]', 'prodpho', '[언아더데이]', ' 크고 작은 웃음, 진심 어린 축하로 가득한 특별한 하루. 더 많은 날을 약속하는 두 분의 언아더데이를 기록합니다. ', '["1인 촬영", "2인 촬영"]', '["80P앨범 1권+80P미니앨범 2권 원본, 수정본 포함 (신부대기실 부터 촬영)", "80P앨범 1권+80P미니앨범 2권 원본, 수정본 포함 (신부대기실 부터 촬영)"]', '[1500000, 1900000]'),
(10, '본식 영상 촬영', 660000, '/image/Product/category/Movie/01.jpg', '["/image/Product/category/Movie/01.jpg"]', 'prodmov', '[웨딩미]', ' 많은 셀럽들의 선택한 웨딩미는 바른촬영과 많이 꾸미지 않는 편집, 눈에 보는듯한 순수한 색감을 지향하며 아름다운 결혼식을 남겨드립니다. ', '["1인 2캠 (FHD)", "1인 1캠 (4k)", "1인 2캠 (4k)"]', '["FHD 촬영, 다큐영상 형식 40분, 신부대기실 부터, USB 제공", "4K UHD 촬영, 다큐영상 형식 40분, 신부대기실 부터, USB 제공, 하이라이트 영상 포함", "4K UHD 촬영, 다큐영상 형식 40분, 신부대기실 부터, USB 제공, 하이라이트 영상 포함"]', '[660000, 770000, 880000]'),
(11, '본식 영상 촬영', 660000, '/image/Product/category/Movie/02.jpg', '["/image/Product/category/Movie/02.jpg"]', 'prodmov', '[레이블]', ' 사랑하는 사람들이 주인공이었던 그 소중한 시간들을 거창하고 화려하진 않지만 진심으로 담아 세상에 하나뿐인 아름다운 감동으로 만들어 드립니다. ', '["1인 2캠 (FHD)"]', '["FHD 촬영, 뮤비 형식 20분, 신부대기실 부터, USB로 제공"]', '[660000]'),
(12, '혼주 헤어&메이크업', 185000, '/image/Product/category/Hair/01.jpg', '["/image/Product/category/Hair/01.jpg"]', 'prodhair', '[에코쟈뎅]', " '에코쟈뎅'은 박준뷰티랩의 오랜 노하우와 기술력으로 선보인 프리미엄 브랜드로 트렌디한 헤어&메이크업을 선보이고 있습니다. ", '["여성혼주 1인", "남성혼주 1인"]', '["", ""]', '[185000, 55000]'),
(13, '혼주 헤어&메이크업', 220000, '/image/Product/category/Hair/02.jpg', '["/image/Product/category/Hair/02.jpg"]', 'prodhair', '[보보리스(출장)]', ' 보보리스는 아름다움을 경외하는 사람들이란 뜻으로 감각적인 영 프로페셔널을 위한 진정한 아름다움을 추구하는 스타일라이프 살롱입니다. ', '["여성혼주 1인", "남성혼주 1인", "여성혼주 1인, 남성혼주 1인", "여성혼주 2인, 남성혼주 2인", "남성혼주 2인", "여성혼주 2인"]', '["", "", "", "", "", ""]', '[198000, 55000, 220000, 429000, 110000, 396000]'),
(14, '혼주 헤어&메이크업', 242000, '/image/Product/category/Hair/03.jpg', '["/image/Product/category/Hair/03.jpg"]', 'prodhair', '[제니하우스]', ' 20년 노하우, 탄탄한 실력과 감각을 갖춘 80여 명의 아티스트가 감각적인 헤어, 메이크업을 선보이고 있습니다. 2만 5천 쌍의 커플이 선택한 제니하우스 웨딩은 트렌디하고 절제미와 세련미를 갖춘 웨딩 스타일 룩을 완성 시켜드립니다. ', '["여성혼주 1인", "남성혼주 1인", "여성혼주 1인, 남성혼주 1인", "여성혼주 2인, 남성혼주 2인", "남성혼주 2인", "여성혼주 2인"]', '["", "", "", "", "", ""]', '[187000, 55000, 242000, 484000, 110000, 374000]'),
(15, '혼주 헤어&메이크업', 220000, '/image/Product/category/Hair/04.jpg', '["/image/Product/category/Hair/04.jpg"]', 'prodhair', '[플리페]', ' 풀잎에라는 한글의 발음을 차용한 플리페는 뷰티전문가로서 고객에게 아름다움과 전문적인 서비스를 제공하고자 노력하는 Professional 정신을 표현하고 있습니다. 풀잎의 자연스러운 움직임과 풀잎 끝의 날카로운 형태를 응용해 정해진 틀에 얽매이지 않는 표현력과 트렌디한 헤어&메이크업을 선보입니다. ', '["여성혼주 1인, 남성혼주 1인", "여성혼주 2인, 남성혼주 2인", "남성혼주 1인", "여성혼주 1인", "남성혼주 2인", "여성혼주 2인"]', '["", "", "", "", "", ""]', '[220000, 429000, 55000, 198000, 110000, 396000]'),
(16, '혼주 헤어&메이크 (루벨 강동)', 198000, '/image/Product/category/Hair/05.jpg', '["/image/Product/category/Hair/05.jpg"]', 'prodhair', '[플리페]', ' 풀잎에라는 한글의 발음을 차용한 플리페는 뷰티전문가로서 고객에게 아름다움과 전문적인 서비스를 제공하고자 노력하는 Professional 정신을 표현하고 있습니다. 풀잎의 자연스러운 움직임과 풀잎 끝의 날카로운 형태를 응용해 정해진 틀에 얽매이지 않는 표현력과 트렌디한 헤어&메이크업을 선보입니다. ', '["여성혼주 1인, 남성혼주 1인", "여성혼주 2인, 남성혼주 2인", "남성혼주 1인", "여성혼주 1인", "남성혼주 2인", "여성혼주 2인"]', '["", "", "", "", "", ""]', '[198000, 396000, 55000, 165000, 110000, 330000]'),
(17, '포토부스', 407000, '/image/Product/category/Booth/01.jpg', '["/image/Product/category/Booth/01.jpg", "/image/Product/category/Booth/01-1.jpg", "/image/Product/category/Booth/01-2.jpg", "/image/Product/category/Booth/01-3.jpg", "/image/Product/category/Booth/01-4.jpg", "/image/Product/category/Booth/01-5.jpg", "/image/Product/category/Booth/01-6.jpg"]', 'prodbooth', '[심플큐브]', ' 평생에 한 번뿐인 소중한 순간을 사랑하는 지인들의 사진과 따뜻한 축하 메시지가 담긴 포토 방명록으로 추억으로 남겨보세요. ', '["포토부스"]', '["무제한 촬영 인화지+액자 1개(블랙or우드)+무제한 포토방명록+포토방명록 케이스 1개+원본 이미지 USB"]', '[407000]'),
(18, '웨딩카', 330000, '/image/Product/category/Car/01.jpg', '["/image/Product/category/Car/01.jpg", "/image/Product/category/Car/02.jpg", "/image/Product/category/Car/03.jpg"]', 'prodcar', '[더채플 · 아펠가모 · 루벨]', '가장 행복 한 날의 시작과 마지막을 완벽하게, 베테랑 기사님의 안전한 운행으로 신랑 신부님을 편안하게 모십니다.', '["2구간", "풀구간"]', '["자택(서울출발기준)", "자택(서울출발기준)"]', '[330000, 500000]'),
(19, '폐백 음식', 209000, '/image/Product/category/Bow/01.jpg', '["/image/Product/category/Bow/01-1.jpg", "/image/Product/category/Bow/01-2.jpg", "/image/Product/category/Bow/01-3.jpg", "/image/Product/category/Bow/01-4.jpg", "/image/Product/category/Bow/01-5.jpg", "/image/Product/category/Bow/01-6.jpg", "/image/Product/category/Bow/01-7.jpg", "/image/Product/category/Bow/01-8.jpg", "/image/Product/category/Bow/01-9.jpg"]', 'prodbow', '[허니문폐백]', '이옥남 폐백 장인의 손을 거쳐 하나부터 열까지 정성스럽게 만든 폐백 음식, 내 딸을 시집보낸다는 어머니의 마음으로 지극한 정성과 소망을 담아 만듭니다.', '["1호", "2호", "3호", "5호", "6호", "7호", "8호", "9호", "특가 A호", "특가 B호"]', '["닭, 구절판, 한과, 정종", "닭, 구절판, 대추고임, 정종", "닭, 구절판, 대추고임, 한과, 정종", "육포, 구절판, 대추고임, 정종", "육포, 구절판, 대추고임, 한과, 정종", "닭, 육포, 구절판, 대추고임, 정종", "산적, 구절판, 대추고임, 한과, 정종", "육포, 닭, 구절판, 대추고임, 한과, 정종", "육포, 구절판, 한과, 술, 밤주머니", "밤대추고임, 구절판, 한과, 정종"]', '[209000, 231000, 297000, 308000, 374000, 385000, 440000, 451000, 275000, 220000]'),
(20, '신부&신랑 관리', 496000, '/image/Product/category/WdMg/01.jpg', '["/image/Product/category/WdMg/01-1.jpg", "/image/Product/category/WdMg/01-2.jpg", "/image/Product/category/WdMg/01-3.jpg", "/image/Product/category/WdMg/01-4.jpg", "/image/Product/category/WdMg/01-5.jpg", "/image/Product/category/WdMg/01-6.jpg", "/image/Product/category/WdMg/01-7.jpg"]', 'prodwdmg', '[트리츠]', '국내 최초 브라이덜 전문 스파 트리츠는 신부들의 정확한 니즈를 충족시켜줄 세분화된 최적의 관리 프로그램들이 마련되어 있습니다. 신부 전용 케어라는 이름을 붙인 관리 서비스는 여럿이지만 실제 신부들의 정확한 니즈와 D-day의 드라마틱한 변화를 확실히 이끌어내 줄 프로그램은 트리츠의 신부 전용 케어뿐임을 자신합니다.', '["웨딩케어 60분 5회", "웨딩케어 90분 5회"]', '["정상가 620,000원 / 회당 99,200원", "정상가 750,000원 / 회당 120,000원"]', 
'[496000, 600000]');

-- 테이블 wedingrumdb.reservations 구조 내보내기
CREATE TABLE IF NOT EXISTS `reservations` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '예약 ID (기본키)',
  `userId` varchar(20) NOT NULL COMMENT '유저 ID (참조키) ',
  `plannerId` varchar(20) NOT NULL COMMENT '플레너 ID (참조키) ',
  `point` varchar(20) NOT NULL COMMENT '지점',
  `date` varchar(20) NOT NULL COMMENT '방문일',
  `time` varchar(20) NOT NULL COMMENT '희망 시간대',
  `contactChoice` varchar(20) NOT NULL COMMENT '선호하는 연락 방법',
  `theme` varchar(20) NOT NULL COMMENT '방문 인원',
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `plannerId` (`plannerId`),
  CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`plannerId`) REFERENCES `planners` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 wedingrumdb.reservations:~1 rows (대략적) 내보내기

-- 테이블 wedingrumdb.users 구조 내보내기
CREATE TABLE IF NOT EXISTS `users` (
  `id` varchar(20) NOT NULL COMMENT '유저 ID (기본키)',
  `pwd` varchar(128) NOT NULL COMMENT '비밀번호',
  `salt` varchar(200) NOT NULL COMMENT '암호화할때 쓴 난수',
  `name` varchar(20) NOT NULL COMMENT '이름',
  `phone` varchar(20) NOT NULL COMMENT '회원 전화번호',
  `birth` varchar(20) NOT NULL COMMENT '생일',
  `gender` varchar(20) NOT NULL COMMENT '성별',
  `companionName` varchar(20) NOT NULL COMMENT '배우자 이름',
  `companionPhone` varchar(20) NOT NULL COMMENT '배우자 전화번호',
  `regdate` datetime NOT NULL COMMENT '회원 가입일',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 wedingrumdb.users:~3 rows (대략적) 내보내기
INSERT INTO `users` (`id`, `pwd`, `salt`, `name`, `phone`, `birth`, `gender`, `companionName`, `companionPhone`, `regdate`) VALUES
	('123', 'bb8b126ed9d240da8de3c9671baa0cdd07cc81c1ab27096560bad572f21648d513dde731da924a521fbe36e489b147f18c046f9078e34ca1c11201d5aca34095', 'fzNwlKN0MCgWnv3zcmn4wgORICW3ge/r0fBDCAz6ul855NM/mTw5yTl4/XivHtiVUGun1Lqaqe+dEyA16AxdBWSGY8YUhiAQBKExy44yHdLFyfNU4jY0o7OGFSzdx1CEwxfbwV/5hcy5noF+AOgrBPGKCxQ/QK6g3x6ORo3F0i4=', '123', '123', '2023-11-22', 'man', '123', '123', '2023-11-20 12:49:12'),
	('2', '5aa7f56a02c2b437fb71dc9bb5fecfc27e87d69f8b201b219e12f1a3a495733f5d1bdc7a91f2c9e7bd6b7c4f857f2dfb27f53c0ddeade543ba85273b61d08289', 'v9NvaSHu+7qK0nAiGpujh3Qe0+pkrfcYHmKZyj3dQ+KdY8fiLtu8FBjqCZKhWJFUkO7o1Xks9A34eaXhzBaIG1EpgOHxxo9TGe/7bAUljtf37TkZhqORlNilq+Z51lgQzAlrcsocFDa/4nTwn25Q8oa3t/T2ITnCj8Jvto4Yf7U=', '1', '4', '2023-11-24', 'man', '5`', '6', '2023-11-19 21:28:56'),
	('22', 'b33980b46f1e1daca92ef7a88fb3845cade0c99571e162631c175d43bc80d6d2c5d71f80ffda85a61cb9d6b7e20c1af8ea304e43bb9c03863230368f2d21c415', 'cZTZpFrVm5O+eKohx3CJWG2lvEMqbtkhDHC6JNwKPTnU6NXGxpZF1TndUDAJ3Otl9EyO4p1PSgqAkgweBGQMdZlNWX88jotDBFfhBUlCJLv04Yz8/an+pjdtjlS2ANgOqbT5seCJfI+f32iboQ4jT+S9bfWUKIIYRrMelCkNxUo=', '김지환', '010', '2023-11-15', 'man', '엄준식', '엄준식', '2023-11-23 11:09:50');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
/*! wedingrumdbproducts */;