# MELT: 일상의 온도를 결정하는 가구 큐레이션

---

## ➊ Project Overview
* **프로젝트명**: `MELT`
* **개요**: 모던하고 따뜻한 원목 감성을 지향하는 가구 브랜드 'MELT'의 브랜드 메인 페이지
* **목표**: 사용자가 공간의 안락함을 직관적으로 느낄 수 있도록 디자인 시스템을 구축하고, 사용자 인터랙션을 강화하여 완성도 높은 브랜드 경험 제공
* **제작 기간**: 1인 프로젝트 (브랜딩, 디자인, 퍼블리싱 전 과정 수행)

---

## ➋ Concept & Design
* **브랜드 컨셉**: '일상의 온도를 녹이는(Melt) 가구'
* **디자인 키워드**: `아이보리 톤` · `현대적 모던함` · `불규칙한 조형미` · `과감한 타이포그래피`
* **디자인 특징**: 심심할 수 있는 모던한 레이아웃에 불규칙적인 도형과 큰 폰트를 배치하여 시각적 리듬감 부여

---

## ➌ Tech Stack
* **Language / Markup**: 
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />

* **Library**: 
  <img src="https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=swiper&logoColor=white" />

* **Tool**: 
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white" />

---

## ➍ Section Highlights
#### [Global] Layout & Header
> **1. 컴포넌트 모듈화**
> * 헤더와 푸터를 별도 파일로 분리하여 `fetch` API로 동적 로딩
> * 페이지가 늘어나도 중앙 관리 한 번으로 전체 메뉴와 푸터를 일괄 수정할 수 있는 확장성 확보

> **2. 복합 인터랙션 설계**
> * 스크롤 방향 및 위치에 따라 헤더를 유연하게 노출/숨김(`Hide/Show`) 처리
> * 호버 상태, 최상단 복귀, 아래로 스크롤 등 복합적인 경우의 수를 변수(`lastScrollY`, `isHovering`)로 관리하여 인터랙션 충돌 방지

> **3. 기기별 UX 최적화**
> * 반응형 환경에서 리사이즈(`Resize`) 이벤트를 통해 기기 전환 시 발생할 수 있는 모바일 메뉴 잔류 문제 해결 및 최적화된 메뉴 탐색 구조 완성

---

## ➎ Retrospective
이번 프로젝트는 단순히 눈에만 예쁜 포트폴리오용 화면을 넘어, 실제 카페24 등 상용 쇼핑몰 템플릿 제작을 목표로 시작했습니다. 웹쇼핑 특유의 정형화된 틀에서 벗어난 디자인적 요소를 담으면서도, **마우스 호버, 스크롤 업/다운, 화면 리사이즈 등 실제 사용 시 마주할 수 있는 모든 동선과 예외 상황**을 철저히 고려해 코딩하는 데 집중했습니다. 특히 헤더와 슬라이더, 반응형 레이아웃을 구현하며 수많은 예외 상황과 부딪혔고, 그 과정에서 **자바스크립트를 활용한 새로운 해결 접근법**들을 깊이 있게 체득할 수 있었습니다. 모든 코드를 완벽하게 암기하고 있지는 않더라도, 앞으로 실무에서 비슷한 문제를 마주했을 때 **"아, 그때 이런 방식으로 해결했었지!" 하고 떠올리며 찾아볼 수 있는 실무적 문제 해결의 뼈대**를 단단하게 다진 소중한 경험이 되었습니다.


<img alt="index" src="https://github.com/user-attachments/assets/533eb359-5109-41a5-9982-b0d54189d75e" />