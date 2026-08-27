/**
 * 섹션 레지스트리
 *
 * 16개 UI 요소를 순차적으로 추가하기 위한 중앙 목록.
 * 배열에 등록된 순서대로 App 화면에 SectionContainer 로 렌더링된다.
 *
 * 새 UI 요소 추가 절차:
 * 1. src/components/ui/ 에 개별 UI 요소 컴포넌트 파일 생성 (예: button-showcase.jsx)
 * 2. src/components/sections/ 에 섹션 래퍼 파일 생성 (예: button-section.jsx)
 *    - 내부에서 SectionContainer 로 감싸고 위 UI 컴포넌트를 렌더링
 * 3. 아래 sections 배열에 { id, title, description, Component } 형태로 등록
 *
 * 등록 예시:
 *   import ButtonSection from './button-section.jsx';
 *
 *   export const sections = [
 *     {
 *       id: 'button',
 *       title: 'Button',
 *       description: 'MUI Button 의 주요 변형과 상태',
 *       Component: ButtonSection,
 *     },
 *   ];
 */

import AnimationShowcase from '../ui/animation-showcase.jsx';
import ButtonShowcase from '../ui/button-showcase.jsx';
import CardShowcase from '../ui/card-showcase.jsx';
import CheckboxShowcase from '../ui/checkbox-showcase.jsx';
import HoverShowcase from '../ui/hover-showcase.jsx';
import InputShowcase from '../ui/input-showcase.jsx';
import DragDropShowcase from '../ui/drag-drop-showcase.jsx';
import DropdownShowcase from '../ui/dropdown-showcase.jsx';
import FlexNavigationShowcase from '../ui/flex-navigation-showcase.jsx';
import MenuShowcase from '../ui/menu-showcase.jsx';
import ModalShowcase from '../ui/modal-showcase.jsx';
import NavigationShowcase from '../ui/navigation-showcase.jsx';
import RadioShowcase from '../ui/radio-showcase.jsx';
import ScrollShowcase from '../ui/scroll-showcase.jsx';
import SidebarShowcase from '../ui/sidebar-showcase.jsx';
import SliderShowcase from '../ui/slider-showcase.jsx';
import SwipeShowcase from '../ui/swipe-showcase.jsx';

/** @type {Array<{ id: string, title: string, description?: string, Component: React.ComponentType }>} */
export const sections = [
  {
    id: 'button',
    title: 'Button',
    description:
      'MUI Button 의 variant(contained, outlined, text) × color(primary, secondary, error) 조합. 클릭 시 알림창 표시.',
    Component: ButtonShowcase,
  },
  {
    id: 'input',
    title: 'Input',
    description:
      'MUI TextField 의 variant(standard, outlined, filled) 3종. label·placeholder 설정, 입력값 실시간 표시.',
    Component: InputShowcase,
  },
  {
    id: 'navigation',
    title: 'Navigation',
    description:
      'MUI AppBar + Toolbar 네비게이션. 홈·소개·서비스·연락처 메뉴, 클릭 시 알림, 모바일에서는 햄버거 메뉴.',
    Component: NavigationShowcase,
  },
  {
    id: 'dropdown',
    title: 'Dropdown',
    description:
      'MUI Select 드롭다운. MenuItem 6개 옵션 중 하나를 선택하고, 선택된 값을 실시간 표시.',
    Component: DropdownShowcase,
  },
  {
    id: 'checkbox',
    title: 'Checkbox',
    description:
      'MUI Checkbox 다중 선택 목록. 전체 선택/해제(indeterminate 지원), 선택된 항목 개수 실시간 표시.',
    Component: CheckboxShowcase,
  },
  {
    id: 'radio',
    title: 'Radio',
    description:
      'MUI Radio + RadioGroup 단일 선택 목록. FormControlLabel 로 레이블 설정, 선택된 옵션 실시간 표시.',
    Component: RadioShowcase,
  },
  {
    id: 'slider',
    title: 'Slider',
    description: 'MUI Slider 0~100 범위. 20 단위 구간 표시(marks), 현재 값 실시간 표시.',
    Component: SliderShowcase,
  },
  {
    id: 'modal',
    title: 'Modal',
    description:
      'MUI Dialog 모달. 버튼으로 열기, 제목·내용·확인/취소 버튼, 닫기(X)·배경 클릭·ESC 로 닫기.',
    Component: ModalShowcase,
  },
  {
    id: 'card',
    title: 'Card',
    description:
      'MUI Card + CardMedia/CardContent/CardActions. 카드 3개를 Grid 로 반응형 배치, 호버 시 elevation 효과.',
    Component: CardShowcase,
  },
  {
    id: 'drag-drop',
    title: 'Drag & Drop',
    description:
      'HTML5 Drag and Drop API. 아이템을 대기/완료 영역 사이로 드래그, 드래그 중 반투명·드롭영역 강조 피드백.',
    Component: DragDropShowcase,
  },
  {
    id: 'scroll',
    title: 'Scroll',
    description:
      '고정 높이(300px) Paper 스크롤 컨테이너. 많은 콘텐츠로 스크롤 발생, 스크롤 위치에 따라 Top 이동 버튼 표시.',
    Component: ScrollShowcase,
  },
  {
    id: 'animation',
    title: 'Animation',
    description:
      'MUI 트랜지션(Fade/Grow/Slide/Zoom)을 버튼으로 전환 재생 + sx @keyframes CSS 애니메이션 조합.',
    Component: AnimationShowcase,
  },
  {
    id: 'menu',
    title: 'Menu',
    description:
      'MUI Menu 드롭다운. 버튼으로 열기, 아이콘 포함 MenuItem 5개, 클릭 시 선택된 메뉴 표시.',
    Component: MenuShowcase,
  },
  {
    id: 'sidebar',
    title: 'Sidebar',
    description:
      'MUI Drawer 토글형 사이드바. List/ListItem 네비게이션 링크, 왼쪽/오른쪽 위치 선택.',
    Component: SidebarShowcase,
  },
  {
    id: 'hover',
    title: 'Hover',
    description:
      'MUI ButtonBase 카드 6개에 서로 다른 호버 효과(색상·크기·그림자·이동·회전·테두리) 적용.',
    Component: HoverShowcase,
  },
  {
    id: 'swipe',
    title: 'Swipe',
    description:
      'react-swipeable 좌우 스와이프(터치/마우스) 이미지 슬라이더. 현재 인덱스 표시, 이전/다음 버튼 제공.',
    Component: SwipeShowcase,
  },
  {
    id: 'flex-navigation',
    title: 'Flex Navigation',
    description:
      'flexbox(space-between)로 구성한 네비게이션 바. 로고(왼쪽) + 메뉴 5개(오른쪽), 호버 시 흰색으로 전환.',
    Component: FlexNavigationShowcase,
  },
];
