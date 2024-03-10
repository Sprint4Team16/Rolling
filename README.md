## SP4 Rolling-Project-Team-16

> 코드잇 스프린트 : 프론트 엔드 4기 Part2 - 16팀
>
> 개발 기간: 2024.2.24 ~ 3.12

URL: https://sp4-team16-rolling.netlify.app

## 💡프로젝트 소개

말하기 어려웠던 고민부터 시시콜콜한 안부까지 하고 싶었던 말을 롤링페이퍼를 통해서 남겨보세요.

- `롤링페이퍼 만들기` 롤링페이퍼를 만들고 친구들을 초대해 평소에 하지 못했던 이야기를 담아보세요.

- `작성 방식` 메시지를 작성하기 전에 내 롤링페이퍼 방에 컬러와 이미지 배경을 선택할 수 있어요.

- `친구 초대` 나만의 롤링페이퍼 방을 만들고, 카톡 공유하기 링크를 보내 친구들을 초대해요.

- `메시지 쓰기` 방에 초대되었다면, 하고 싶은 이야기를 남겨보세요.

- `메시지 꾸미기` 작성자 이름과 프로필 이미지로 힌트를 남겨주세요.

- `메시지 읽기` 카드를 클릭해서 메시지의 내용을 확인해요.

- `리액션` 친구의 롤링페이퍼에 이모지로 공감해 주세요.

### 💡팀원 소개

## 💡 기술 스택

#### Front-End

<div style="margin: ; text-align: left;" "text-align: left;">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
  <img src="https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=StyledComponents&logoColor=white">
  <img src="https://img.shields.io/badge/Eslint-4B32C3?style=for-the-badge&logo=Eslint&logoColor=white">
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">
 </div>

#### 협업

 <div style="margin: ; text-align: left;" "text-align: left;"> 
   <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
   <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white">
</div>

## 💡 역할분담

### 하태훈(팀장)

#### 🖥️ 페이지 구현 내용

- 롤링페이퍼 만들기 페이지 구현
  - 경로 : /post
  - **주요 기능**
    - /post 경로로 접속하는 경우, 롤링페이퍼를 만들기 위한 페이지 구현
    - 컬러-이미지 간 스위치 설정에 따라 4가지의 color 또는 4가지의 image 중 하나를 선택할 수 있도록 구현
      - 4가지의 이미지를 외부 api를 통해 불러올 수 있도록 설정
    - 생성하기 버튼 클릭 시, 새로운 롤링페이퍼가 생성되고 새롭게 생성된 롤링페이퍼 페이지로 이동
- message 수정하기 페이지 구현
  - 경로 : /post/{recipientId}/edit/{messageId}
  - **주요 기능**
    - 롤링페이퍼 수정 페이지에서 메세지 수정하기를 선택할 경우, 해당 메세지의 정보를 수정할 수 있는 페이지로 이동하여 데이터를 수정할 수 있는 페이지 구현
    - 전반적인 기능 및 화면 UI 구성은 '롤링페이퍼에 메세지 보내기 페이지'와 유사
    - 수정하려는 메세지의 수정 전 데이터를 받아와 수정전의 데이터 이후 수정 작업을 유도할 수 있도록 기능 설정
    - 일부 데이터만 수정되었을 경우 PATCH, 모든 데이터가 수정이 발생하였을 경우 PUT Request를 보내도록 설정

#### 🔧 기능 구현 내용

- API 기능 구현
  - Data를 axios 모듈을 통해 get, post, delete, put, patch하는 component 생성
  - 요구 기능별로 POST, GET, POST, PATCH, DELETE 별 세부 Components 생성
  - 각 페이지 및 버튼 클릭 시 사용할 API 기능을 연동
- Button 컴포넌트 생성 및 기능별 버튼 컴포넌트 생성
  - POST, DELETE, PUT, PATCH 등 상황에 따라 적용할 수 있는 Button 컴포넌트 생성
- Card Modal 구현
  - 롤링페이퍼 페이지에서 카드를 클릭하였을 때, 해당 카드에 대한 메세지 작성 내용 등의 정보를 Modal 화면으로 보여줄 수 있는 기능 구현
  - 롤링페이퍼 페이지에서 카드를 클릭하였을 경우, 기존에 생성 날짜가 표시되던 위치에 메세지 수정하기 버튼 생성
    - 메세지 수정하기 버튼 클릭 시, 해당 메세지를 수정할 수 있는 메세지 수정 페이지로 이동

#### 🪄 기타 수행 사항

- 초기 color 변수에 대한 css 변수 정의
- Refactoring
  - 공통 Modal 기능에 대한 수정
  - 단위(px->rem) refactoring 진행
  - Size, Color, Font, Option 등 상수화 작업 및 적용
  - 일부 수치조정 과정에서 발생하는 디자인 오류 수정 및 개선
  - 코드 스타일링: 불필요한 코드 제거 및 error 반환 방식 통일
- 팀 repository 생성 및 issues, label 등 초기 세팅 설정
  - issues 항목 설정
  - label 카테고리 생성
- 팀 회의 기록 정리
- README 파일 생성 및 내용 정리

### 김경주

#### 🖥️ 페이지 구현 내용

- 롤링페이퍼 목록 페이지 구현
  - 경로: /list
  - **주요 기능**
    - 생성된 롤링페이퍼의 데이터들을 인기순, 최신 생성순으로 정렬된 모습으로 화면에 구성
    - 생성된 롤링페이퍼 카드 목록에서 카드를 누를 경우, 해당 데이터에 맞는 롤링페이퍼 페이지로 이동
    - '나도 만들어보기' 버튼 클릭 시, 롤링페이퍼 생성 페이지로 이동

#### 🔧 기능 구현 내용

- 롤링페이퍼 카드 목록 정렬 방식 구현
  - 인기순 : emoji(이모지)를 많이 받은 롤링페이퍼를 기준으로 정렬
  - 최신순 : 최근 생성된 롤링페이퍼를 기준으로 정렬
- Mobile, Tablet 환경에서의 터치 슬라이드 구현

#### 🪄 기타 수행 사항

- Refactoring
  - font 설정과 관련하여 발생하던 warning에 대한 문제 해결 및 refactoring 진행

### 이유승

#### 🖥️ 페이지 구현 내용

- 메인 페이지 구현
  - 경로 : /
  - **주요 기능**
    - 처음 접속 시, Rolling 사이트에 대한 대략적인 개요 화면 페이지 구성
    - '구경해보기' 버튼 클릭 시, 롤링페이퍼 목록 페이지로 이동

#### 🔧 기능 구현 내용

- Header 공용 컴포넌트 생성
  - Logo 클릭 시, 메인 페이지 화면으로 돌아갈 수 있도록 설정
  - '나도 만들어보기' 버튼 클릭 시, 롤링페이퍼 생성 페이지로 이동
  - 메인 페이지, 롤링페이퍼 목록 페이지를 제외한 영역에서는 '나도 만들어보기' 버튼 제거
- Modal 공용 컴포넌트 생성
- Kakao 공유하기 관련 Modal 및 URL 공유 후 Toast 구현
- 생성된 롤링페이퍼 페이지의 공유 버튼 구현
  - SubHeader 영역 내에서 구현
  - 클릭 시, 카카오톡 공유 기능과 URL 복사 목록이 Dropdown 되도록 설정
- 롤링페이퍼에 메세지를 작성한 작성자들의 프로필 이미지 불러오기 구현

#### 🪄 기타 수행 사항

- 팀 프로젝트 발표를 위한 발표자료(ppt) 제작

### 이주형

#### 🖥️ 페이지 구현 내용

- 롤링페이퍼에 메세지 보내기 페이지 구현
  - 경로: /post/{id}/message
  - **주요 기능**
    - 롤링페이퍼 페이지에서 + 버튼을 누를 경우, 해당 롤링페이퍼에게 메세지를 보내기 위한 메세지 작성 페이지 구성
    - 프로필 이미지를 외부 api를 통해 불러올 수 있도록 설정
    - 이름, 관계, 프로필 이미지, 내용, 글꼴 설정 후 '생성하기' 버튼을 누를 경우 해당 메세지 데이터를 서버로 보내고, 롤링페이퍼 페이지로 이동

#### 🔧 기능 구현 내용

- 외부 텍스트 에디터를 활용한 메세지 내용 작성 기능 구현
  - 글자 크기, 정렬, list 등의 형태 적용 가능
  - 해당 Editor에서 작성한 내용에서 HTML 태그가 포함된 내용에 대해, 태그만 제거하여 호출할 수 있도록 설정
- 롤링페이퍼 페이지 내 카드에 메세지에서 설정한 글꼴, 정렬등의 정보가 반영 될 수 있도록 설정

#### 🪄 기타 수행 사항

- Refactoring
  - font, color 공통화 작업
  - Dropdown을 컴포넌트화 한 후 상이한 역할을 하도록 구현

### 최민준

#### 🖥️ 페이지 구현 내용

- 생성된 롤링페이퍼 페이지 구현
  - 경로 : /post/{id}
  - **주요 기능**
    - 사용자가 확인하고자하는 롤링페이퍼에 대한 메세지 작성 정보, emoji 정보 등을 확인할 수 있는 페이지 구성
    - '+' 버튼을 누를 경우, 해당 롤링페이퍼에 메세지를 보내는 페이지로 이동할 수 있도록 기능 구현
    - '수정하기' 버튼을 누를 경우,
    - 카드 화면을 아래로 스크롤 할 경우, 무한 스크롤을 통한 추가 메세지 데이터 확인
- 생성된 롤링페이퍼 수정 페이지
  - 경로 : /post/{recipientId}/edit/
  - **주요 기능**
    - 해당 롤링페이퍼에 대한 메세지 수정, 삭제 및 롤링페이퍼 삭제를 구현한 페이지 구성
    - 카드의 '쓰레기통' 모양의 버튼 클릭 시, 해당 메세지가 삭제되고 삭제된 데이터를 화면에 반영할 수 있도록 구성
    - '뒤로 가기' 버튼 클릭 시, 롤링페이퍼 페이지로 돌아가도록 구현
    - '롤링페이퍼 삭제하기' 버튼 클릭 시, 해당 롤링페이퍼는 삭제되고 롤링페이퍼 목록 페이지로 이동하도록 구현

#### 🔧 기능 구현 내용

- 무한 스크롤 구현
  - intersection observer web API 사용하여 구현
- 이모티콘 추가 구현
  - 추가할 때마다 인기순으로 재정렬
  - emoji-picker-react 라이브러리 사용
- 카드 데이터 삭제 로직 구현
  - API 연동
- 롤링페이퍼 페이지, 롤링페이퍼 수정 페이지의 ui 구현 및 API 연동
  - 카드 구현
  - sub header 구현
    - 누구의 롤링페이퍼인지, 몇명이 메세지를 작성하였는지, emoji는 얼마나 받았는지에 대한 정보 구성
    - emoji 추가 및 공유하기 버튼 추가
  - 배경화면 변경되도록 구현
- Button 컴포넌트 생성 및 기능별 버튼 컴포넌트 생성

#### 🪄 기타 수행 사항

- 팀 초기 컨벤션 세팅 설정
  - .eslint.js 초기 설정
    - Airbnb 기준으로 제외할 rules 추가
  - .prettierrc 설정
- 페이지 별 team 작업 issue/trouble shooting/refactoring 사항에 관한 리스트 생성 및 관리

## 👀 페이지 preview

### 홈페이지

![KakaoTalk_Image_2023-12-22-05-27-54_001](https://github.com/Rolling-Project-Team-9/rolling/assets/148737398/2bd87d33-4134-4568-a74e-a8cb4d7a12a8)

### 롤링페이퍼 리스트 페이지

### 롤링페이퍼 만들기 페이지

### 롤링페이퍼 페이지

### 롤링페이퍼 수정 페이지

### 롤링페이퍼 메세지 페이지
