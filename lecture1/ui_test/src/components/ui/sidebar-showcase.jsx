import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

/**
 * SidebarShowcase 컴포넌트
 *
 * MUI Drawer 로 구성한 토글형 사이드바. 버튼으로 열고 닫으며, 왼쪽/오른쪽
 * 위치를 선택할 수 있다. 내부는 List / ListItem 으로 구성한 네비게이션 링크
 * 목록이며, 링크 클릭 시 사이드바가 닫히고 선택된 메뉴가 아래에 표시된다.
 *
 * Props: 없음
 *
 * Example usage:
 * <SidebarShowcase />
 */

/** @type {Array<{ key: string, label: string, href: string, Icon: React.ComponentType }>} */
const NAV_LINKS = [
  { key: 'dashboard', label: '대시보드', href: '#dashboard', Icon: DashboardIcon },
  { key: 'profile', label: '프로필', href: '#profile', Icon: PersonIcon },
  { key: 'stats', label: '통계', href: '#stats', Icon: BarChartIcon },
  { key: 'settings', label: '설정', href: '#settings', Icon: SettingsIcon },
  { key: 'help', label: '도움말', href: '#help', Icon: HelpIcon },
];

function SidebarShowcase() {
  const [isOpen, setIsOpen] = useState(false);
  const [anchor, setAnchor] = useState('left');
  const [selected, setSelected] = useState('');

  /**
   * 사이드바 열림 상태 설정
   * @param {boolean} open - 열림 여부
   */
  const toggleDrawer = (open) => () => {
    setIsOpen(open);
  };

  /**
   * 사이드바 위치 변경
   * @param {React.MouseEvent<HTMLElement>} event - 클릭 이벤트
   * @param {string | null} nextAnchor - 선택된 위치 ('left' | 'right')
   */
  const handleAnchorChange = (event, nextAnchor) => {
    if (nextAnchor) {
      setAnchor(nextAnchor);
    }
  };

  /**
   * 네비게이션 링크 클릭 처리
   * @param {string} label - 선택된 메뉴명
   */
  const handleLinkClick = (label) => (event) => {
    event.preventDefault();
    setSelected(label);
    setIsOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 } }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2 }}>
        <Button variant="contained" onClick={toggleDrawer(true)}>
          사이드바 열기
        </Button>
        <ToggleButtonGroup
          size="small"
          exclusive
          value={anchor}
          onChange={handleAnchorChange}
          aria-label="사이드바 위치"
        >
          <ToggleButton value="left" aria-label="왼쪽">
            왼쪽
          </ToggleButton>
          <ToggleButton value="right" aria-label="오른쪽">
            오른쪽
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Drawer anchor={anchor} open={isOpen} onClose={toggleDrawer(false)}>
        <Box role="presentation" sx={{ width: 260 }}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              메뉴
            </Typography>
            <Typography sx={{ fontSize: '0.8125rem', color: 'text.secondary' }}>
              {`${anchor === 'left' ? '왼쪽' : '오른쪽'} 사이드바`}
            </Typography>
          </Box>
          <Divider />
          <List>
            {NAV_LINKS.map(({ key, label, href, Icon }) => (
              <ListItem key={key} disablePadding>
                <ListItemButton component="a" href={href} onClick={handleLinkClick(label)}>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box
        sx={{
          p: { xs: 1.5, md: 2 },
          borderRadius: 2,
          bgcolor: 'action.hover',
        }}
      >
        <Typography
          sx={{
            mb: 1,
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'text.secondary',
          }}
        >
          선택된 메뉴 표시
        </Typography>
        <Box sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
          <Box component="span" sx={{ color: selected ? 'text.primary' : 'text.disabled' }}>
            {selected || '(선택 없음)'}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SidebarShowcase;
