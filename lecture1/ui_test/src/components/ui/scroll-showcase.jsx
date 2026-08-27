import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

/**
 * ScrollShowcase 컴포넌트
 *
 * 고정 높이(300px)의 스크롤 컨테이너. 내부에 많은 항목을 넣어 세로 스크롤이
 * 발생하며, 일정 높이 이상 스크롤하면 우측 하단에 "Top 으로 이동" 버튼이
 * 나타나 클릭 시 컨테이너 최상단으로 부드럽게 스크롤한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <ScrollShowcase />
 */

/** @type {Array<number>} 스크롤 확인용 더미 항목 */
const ITEMS = Array.from({ length: 30 }, (unused, index) => index + 1);

/** Top 버튼이 나타나는 스크롤 임계값(px) */
const SCROLL_THRESHOLD = 120;

function ScrollShowcase() {
  const containerRef = useRef(null);
  const [isTopVisible, setIsTopVisible] = useState(false);

  /**
   * 스크롤 위치에 따라 Top 버튼 표시 여부 갱신
   * @param {React.UIEvent<HTMLDivElement>} event - 스크롤 이벤트
   */
  const handleScroll = (event) => {
    const nextVisible = event.currentTarget.scrollTop > SCROLL_THRESHOLD;
    if (nextVisible !== isTopVisible) {
      setIsTopVisible(nextVisible);
    }
  };

  /** 컨테이너 최상단으로 스크롤 */
  const handleScrollToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Paper
        ref={containerRef}
        variant="outlined"
        onScroll={handleScroll}
        sx={{
          height: 300,
          overflowY: 'auto',
          borderRadius: 2,
          p: 2,
        }}
      >
        <Typography sx={{ mb: 1.5, color: 'text.secondary', fontSize: '0.875rem' }}>
          아래로 스크롤하면 우측 하단에 Top 버튼이 나타납니다.
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {ITEMS.map((item) => (
            <Box
              key={item}
              sx={{
                p: 1.5,
                borderRadius: 1,
                bgcolor: 'action.hover',
                fontSize: '0.9375rem',
              }}
            >
              {`항목 ${item}`}
            </Box>
          ))}
        </Box>
      </Paper>

      {isTopVisible && (
        <Fab
          size="small"
          color="primary"
          aria-label="맨 위로 이동"
          onClick={handleScrollToTop}
          sx={{ position: 'absolute', right: 16, bottom: 16 }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </Box>
  );
}

export default ScrollShowcase;
