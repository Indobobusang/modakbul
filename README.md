# modakbul

## 프로젝트 정보
####  프로젝트 이름 : 모닥불(Modakbul)
#### 프로젝트 목표 : 
캠핑을 좋아하는 사람들의 커뮤니티를 만들어서 사용자 자신들의 캠핑 경험을 게시물로 올려서 팔로워들과 공유하며 캠핑을 좋아하는 다른 사람들을 팔로잉하여 그들의 캠핑 게시물과 일과를 공유 할 수 있는 플랫폼으로 마치 캠핑의 인스타그램과 같은 커뮤니티를 만드는 것이 목표입니다. 선택적으로 본인들이 소개하고 싶은 캠핑 사이트(지역)을 네이버 지도를 통해 공유하며 나아가 캠핑 용품과 캠핑에 유용한 정보 등을 공유하는 커뮤니티를 만드는 것이 우선적인 목표이며, 이제는 필요 없거나 자주 사용하지 않는 캠핑 용품을 중고거래도 할 수 있도록 발전시켜 나가고 싶어서 프로젝트를 시작하게 되었습니다. 인스타그램과 당근마켓 등을 참고하여 실제 사용자들이 사용하는 데에 익숙한 형태의 플랫폼을 만들고 있습니다.
<br>
#### 프로젝트 인원 : 
 - Back-End(1명) : 박준우(나)
 - Front-End(2명) : 이종혁, 신혜린



## 기술 스택

Back-End
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&amp;logo=javascript&amp;logoColor=white">
<img src="https://img.shields.io/badge/Node.js-339933?style=flat&amp;logo=Node.js&amp;logoColor=white">
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&amp;logo=MySQL&amp;logoColor=white">
<img src="https://img.shields.io/badge/Express-000000?style=flat&amp;logo=Express&amp;logoColor=white">
<img src="https://img.shields.io/badge/JWT-CC6699?style=flat&amp;logo=JSON&amp;logoColor=white">
<img src="https://img.shields.io/badge/Dbmate-009DC7?style=flat&amp;logo=Bcrypt&amp;logoColor=white">
<img src="https://img.shields.io/badge/-Bcrypt-blueviolet?style=flat&amp;logo=Bcrypt&amp;logoColor=white">
<img src="https://img.shields.io/badge/AWS_S3-569A31?style=flat&amp;logo=AWS_S3&amp;logoColor=white">
<img src="https://img.shields.io/badge/-TypeScript-blue">

Common
<img src="https://img.shields.io/badge/Git-F05032?style=flat&amp;logo=Git&amp;logoColor=white">
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&amp;logo=GitHub&amp;logoColor=white">
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&amp;logo=prettier&amp;logoColor=white">
<img src="https://img.shields.io/badge/RestfulAPI-F7533E?style=flat&amp;logo=RestfulAPII&amp;logoColor=white">
<img src="https://img.shields.io/badge/VSCode-007ACC?style=flat&amp;logo=Visual Studio Code&amp;logoColor=white">
<img src="https://img.shields.io/badge/Postman-FF6C37?style=flat&amp;logo=Postman&amp;logoColor=white">

Communication
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat&amp;logo=Slack&amp;logoColor=white">
<img src="https://img.shields.io/badge/Notion-000000?style=flat&amp;logo=Notion&amp;logoColor=white">

## ERD <br>
[ERD Link](https://dbdiagram.io/d/644f253ddca9fb07c44aa069)
<img width="948" alt="스크린샷 2023-06-07 오전 2 52 04" src="https://github.com/Indobobusang/modakbul-backend/assets/120322181/960455a9-b61f-47c5-927d-4157f91bec25">

## 박준우(나)가 만든 기능

1. 구글 로그인 회원가입 기능 구현
 - 구글 API를 활용하여 로그인 회원가입 기능 구현

2. 피드(게시글) 등록 기능 구현
 - AWS S3를 활용한 이미지 등록
 - 네이버 지도 API를 활용한 좌표 등록

3. 피드 댓글 등록 기능 구현
 - 피드 게시물에 댓글 등록 및 무한 스크롤 기능 구현 

4. 피드 게시물과 댓글 좋아요, 스크랩 기능 구현
 - 피드 게시물 좋아요와 스크랩 기능 구현
 - 댓글 좋아요 기능 구현

5. 피드 상세페이지 조회 기능 구현
 - 피드 상세페이지 조회 및 댓글 조회 기능 구현

6. 메인페이지 조회 기능 구현
 - 메인페이지에 등록된 최근순으로 피드 조회

7. 마이페이지 조회 기능 구현
 - 해당 유저의 정보, 등록한 게시물, 좋아요한 게시물, 스크랩한 게시물 등 조회
