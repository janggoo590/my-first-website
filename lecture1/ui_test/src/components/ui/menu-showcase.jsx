import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

/**
 * MenuShowcase 컴포넌트
 *
 * MUI Menu 로 구성한 드롭다운 메뉴. 버튼 클릭 시 열리며, 아이콘이 포함된
 * MenuItem 6개를 제공한다. 항목을 클릭하면 메뉴가 닫히고 선택된 메뉴명이
 * 아래 영역에 표시된다.
 *
 * Props: 없음
 *
 * Example usage:
 * <MenuShowcase />
 */

/** @type {Array<{ key: string, label: string, Icon: React.ComponentType, divider?: boolean }>} */
const MENU_ITEMS = [
  { key: 'edit', label: '편집', Icon: EditIcon },
  { key: 'copy', label: '복사', Icon: ContentCopyIcon },
  { key: 'share', label: '공유', Icon: ShareIcon },
  { key: 'download', label: '다운로드', Icon: DownloadIcon, divider: true },
  { key: 'delete', label: '삭제', Icon: DeleteIcon },
];

function MenuShowcase() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState('');
  const isOpen = Boolean(anchorEl);

  /**
   * 메뉴 열기
   * @param {React.MouseEvent<HTMLElement>} event - 클릭 이벤트
   */
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /** 메뉴 닫기 */
  const handleClose = () => {
    setAnchorEl(null);
  };

  /**
   * 메뉴 항목 클릭 처리
   * @param {string} label - 선택된 메뉴명
   */
  const handleSelect = (label) => {
    setSelected(label);
    handleClose();
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 } }}>
      <Box>
        <Button
          variant="contained"
          endIcon={<ArrowDropDownIcon />}
          aria-controls={isOpen ? 'menu-showcase' : undefined}
          aria-haspopup="true"
          aria-expanded={isOpen ? 'true' : undefined}
          onClick={handleOpen}
        >
          메뉴 열기
        </Button>
        <Menu
          id="menu-showcase"
          anchorEl={anchorEl}
          open={isOpen}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          {MENU_ITEMS.flatMap(({ key, label, Icon, divider }) =>
            [
              <MenuItem key={key} onClick={() => handleSelect(label)}>
                <ListItemIcon>
                  <Icon fontSize="small" />
                </ListItemIcon>
                <ListItemText>{label}</ListItemText>
              </MenuItem>,
              divider ? <Divider key={`${key}-divider`} /> : null,
            ].filter(Boolean),
          )}
        </Menu>
      </Box>

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

export default MenuShowcase;
