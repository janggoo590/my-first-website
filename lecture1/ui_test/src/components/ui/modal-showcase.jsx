import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

/**
 * ModalShowcase 컴포넌트
 *
 * MUI Dialog 로 구성한 모달. 버튼 클릭 시 열리며, 제목/내용/확인·취소 버튼과
 * 우측 상단 닫기(X) 버튼을 가진다. 배경(backdrop) 클릭이나 ESC 키로도 닫힌다.
 * 마지막 동작 결과(확인/취소/닫기)를 아래 영역에 표시한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <ModalShowcase />
 */
function ModalShowcase() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastAction, setLastAction] = useState('');

  /** 모달 열기 */
  const handleOpen = () => {
    setIsOpen(true);
  };

  /**
   * 모달 닫기
   * @param {string} action - 닫힘을 유발한 동작 ('확인' | '취소' | '닫기')
   */
  const handleClose = (action) => {
    setIsOpen(false);
    setLastAction(action);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 } }}>
      <Box>
        <Button variant="contained" onClick={handleOpen}>
          모달 열기
        </Button>
      </Box>

      <Dialog
        open={isOpen}
        onClose={() => handleClose('닫기')}
        aria-labelledby="modal-showcase-title"
        aria-describedby="modal-showcase-description"
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle id="modal-showcase-title" sx={{ pr: 6 }}>
          약관에 동의하시겠습니까?
          <IconButton
            aria-label="닫기"
            onClick={() => handleClose('닫기')}
            sx={{ position: 'absolute', right: 8, top: 8, color: 'text.secondary' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="modal-showcase-description">
            서비스 이용약관 및 개인정보 처리방침에 동의하시면 확인을 눌러주세요. 배경을 클릭하거나
            ESC 키를 눌러도 창이 닫힙니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose('취소')} color="inherit">
            취소
          </Button>
          <Button onClick={() => handleClose('확인')} variant="contained" autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>

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
          마지막 동작
        </Typography>
        <Box sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
          <Box component="span" sx={{ color: lastAction ? 'text.primary' : 'text.disabled' }}>
            {lastAction || '(아직 없음)'}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ModalShowcase;
