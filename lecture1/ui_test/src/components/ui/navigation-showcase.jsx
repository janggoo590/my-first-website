import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

/**
 * NavigationShowcase 컴포넌트
 *
 * MUI AppBar + Toolbar 로 구성한 네비게이션 바.
 * 데스크톱(sm 이상)에서는 메뉴가 가로 버튼으로 표시되고,
 * 모바일(sm 미만)에서는 햄버거 아이콘을 눌러 드롭다운 메뉴로 표시된다.
 * 메뉴 클릭 시 해당 메뉴명을 알림창(alert)으로 표시한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <NavigationShowcase />
 */

/** @type {Array<string>} */
const MENU_ITEMS = ['홈', '소개', '서비스', '연락처'];

function NavigationShowcase() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  /**
   * 햄버거 메뉴 열기
   * @param {React.MouseEvent<HTMLElement>} event - 클릭 이벤트
   */
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /** 햄버거 메뉴 닫기 */
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  /**
   * 메뉴 항목 클릭 처리
   * @param {string} label - 클릭된 메뉴명
   */
  const handleMenuClick = (label) => {
    handleCloseMenu();
    window.alert(`${label} 메뉴를 클릭했습니다.`);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="static" color="primary" elevation={1} sx={{ borderRadius: 2 }}>
        <Toolbar sx={{ gap: 1 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700, fontSize: { xs: '1rem', md: '1.25rem' } }}
          >
            MySite
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
            {MENU_ITEMS.map((label) => (
              <Button key={label} color="inherit" onClick={() => handleMenuClick(label)}>
                {label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              color="inherit"
              edge="end"
              aria-label="메뉴 열기"
              aria-controls={isMenuOpen ? 'navigation-mobile-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={isMenuOpen ? 'true' : undefined}
              onClick={handleOpenMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="navigation-mobile-menu"
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleCloseMenu}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              {MENU_ITEMS.map((label) => (
                <MenuItem key={label} onClick={() => handleMenuClick(label)}>
                  {label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavigationShowcase;
