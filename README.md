# React TypeScript Template

> 프로젝트에 필요한 기본적인 패키지 및 디렉토리 구조를 미리 구축하여 새로운 프로젝트를 생성할 때 이 프로젝트를 클론하여 개발환경을 구축하면 됩니다.

## 설치한 패키지 목록

> yarn add react-router-dom@6  
> yarn add @tanstack/react-query  
> yarn add @tanstack/react-query-devtools  
> yarn add @emotion/react  
> yarn add @emotion/styled  
> yarn add node-sass  
> yarn add react-redux  
> yarn add @reduxjs/toolkit
> yarn add axios  
> yarn add @types/classnames

## 디렉토리 구조

```
├── src
│   ├── api : # API 호출 모음
│   ├── assets : 정적 파일에 대한 모음 (font나 image)
│   ├── components : # component
│   └── containers : # container
│   └── core : # lib 나 util 파일 모음
│       └── lib : # 정규식, 날짜 계산 등 포맷터 라이브러리 모음
│       └── util : # 라우터 경로, 헤더 타이틀 등 모음
│   └── hooks # custom hooks 모음
│   └── routes # 라우팅 페이지 구성
│   └── assets # 정적 이미지 모음 svg, img file
│   └── store # redux, redux-saga , reducer 등 전역 상태관리
│   └── styles # 전역 스타일링 모음
│   └── types # 타입선언에 대한 모음
└──
```
