import Box from '@mui/material/Box';

/**
 * FlexNavigationShowcase 컴포넌트
 *
 * flexbox 만으로 구성한 네비게이션 바. 가로 전체 폭에 높이 60px, 배경색
 * #2d3748 인 큰 네비게이션 박스 안에서 로고 박스(왼쪽)와 메뉴 박스(오른쪽)를
 * space-between 으로 양 끝 정렬한다. 메뉴 항목은 호버 시 흰색으로 바뀐다.
 *
 * Props: 없음
 *
 * Example usage:
 * <FlexNavigationShowcase />
 */

/** @type {Array<string>} 메뉴 항목 */
const MENU_ITEMS = ['홈', '소개', '상품', '연락처', '설정'];

function FlexNavigationShowcase() {
  return (
    <Box
      component="nav"
      sx={{
        width: '100%',
        height: 60,
        bgcolor: '#2d3748',
        borderRadius: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 3,
      }}
    >
      <Box
        sx={{
          color: '#ffffff',
          fontWeight: 700,
          fontSize: 20,
        }}
      >
        MyWebsite
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
        }}
      >
        {MENU_ITEMS.map((item) => (
          <Box
            key={item}
            component="a"
            href={`#${item}`}
            onClick={(event) => event.preventDefault()}
            sx={{
              color: '#a0aec0',
              fontSize: 16,
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              '&:hover': {
                color: '#ffffff',
              },
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default FlexNavigationShowcase;
