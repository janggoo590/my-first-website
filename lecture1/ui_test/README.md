# ui_test

16개 UI 요소를 섹션 단위로 순차 추가하며 테스트하는 React + MUI 프로젝트.

## 기술 스택

- React 19 + Vite
- MUI (Material-UI) v9 + Emotion
- Roboto 폰트 (@fontsource/roboto)
- oxlint

## 실행

```bash
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm run lint     # oxlint 검사
```

## 디렉토리 구조

```
src/
├── components/
│   ├── sections/               # UI 섹션별 컴포넌트
│   │   ├── section-container.jsx  # 모든 섹션 공통 래퍼 (제목 + 본문)
│   │   └── index.js              # 섹션 레지스트리 (여기에 순차 등록)
│   └── ui/                     # 개별 UI 요소 컴포넌트
├── styles/
│   ├── global.css             # CSS 초기화 + 전역 스타일
│   └── app.css                # 앱 레이아웃 스타일
├── App.jsx                    # 네비게이션 없는 단일 스크롤 레이아웃
├── main.jsx                   # 엔트리 (ThemeProvider + CssBaseline)
└── theme.js                   # MUI 테마
```

## UI 요소 추가 방법

1. `src/components/ui/` 에 개별 UI 요소 컴포넌트 생성
   예: `src/components/ui/button-showcase.jsx`
2. `src/components/sections/` 에 섹션 래퍼 생성
   예: `src/components/sections/button-section.jsx`
   ```jsx
   import ButtonShowcase from '../ui/button-showcase.jsx';

   function ButtonSection() {
     return <ButtonShowcase />;
   }

   export default ButtonSection;
   ```
3. `src/components/sections/index.js` 의 `sections` 배열에 등록
   ```js
   import ButtonSection from './button-section.jsx';

   export const sections = [
     {
       id: 'button',
       title: 'Button',
       description: 'MUI Button 의 주요 변형과 상태',
       Component: ButtonSection,
     },
   ];
   ```

등록된 순서대로 화면에 번호가 매겨진 섹션으로 렌더링된다.
