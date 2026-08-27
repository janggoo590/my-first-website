import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';

/**
 * AnimationShowcase 컴포넌트
 *
 * MUI 트랜지션(Fade, Grow, Slide, Zoom)을 버튼으로 전환하며 재생한다.
 * "토글" 버튼으로 대상 요소를 나타냈다 사라지게 하고, 선택된 효과에 따라
 * 다른 애니메이션이 적용된다. 별도로 CSS @keyframes 로 만든 상시 애니메이션
 * (둥둥 떠다니는 원)을 함께 배치해 CSS 애니메이션과 MUI 트랜지션을 조합한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <AnimationShowcase />
 */

/** @type {Array<{ key: 'fade' | 'grow' | 'slide' | 'zoom', label: string }>} */
const EFFECTS = [
  { key: 'fade', label: 'Fade' },
  { key: 'grow', label: 'Grow' },
  { key: 'slide', label: 'Slide' },
  { key: 'zoom', label: 'Zoom' },
];

const TIMEOUT = 400;

function AnimationShowcase() {
  const slideContainerRef = useRef(null);
  const [effect, setEffect] = useState('fade');
  const [isShown, setIsShown] = useState(true);

  /**
   * 애니메이션 효과 선택
   * @param {string} key - 선택한 효과 key
   */
  const handleSelectEffect = (key) => {
    setEffect(key);
    setIsShown(true);
  };

  /** 대상 요소 표시/숨김 토글 */
  const handleToggle = () => {
    setIsShown((prev) => !prev);
  };

  const demoBox = (
    <Paper
      elevation={3}
      sx={{
        width: 160,
        height: 160,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        fontWeight: 700,
      }}
    >
      {effect}
    </Paper>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 } }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {EFFECTS.map((item) => (
          <Button
            key={item.key}
            variant={effect === item.key ? 'contained' : 'outlined'}
            onClick={() => handleSelectEffect(item.key)}
          >
            {item.label}
          </Button>
        ))}
        <Button color="secondary" variant="text" onClick={handleToggle}>
          토글
        </Button>
      </Box>

      <Box
        ref={slideContainerRef}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          height: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 2,
          bgcolor: 'action.hover',
        }}
      >
        {effect === 'fade' && (
          <Fade in={isShown} timeout={TIMEOUT}>
            {demoBox}
          </Fade>
        )}
        {effect === 'grow' && (
          <Grow in={isShown} timeout={TIMEOUT}>
            {demoBox}
          </Grow>
        )}
        {effect === 'slide' && (
          <Slide in={isShown} direction="up" timeout={TIMEOUT} container={slideContainerRef.current}>
            {demoBox}
          </Slide>
        )}
        {effect === 'zoom' && (
          <Zoom in={isShown} timeout={TIMEOUT}>
            {demoBox}
          </Zoom>
        )}
      </Box>

      <Box>
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
          CSS @keyframes 상시 애니메이션
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            p: 2,
            borderRadius: 2,
            bgcolor: 'action.hover',
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              bgcolor: 'secondary.main',
              animation: 'animationShowcaseFloat 1.6s ease-in-out infinite',
              '@keyframes animationShowcaseFloat': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-12px)' },
              },
            }}
          />
          <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
            sx 의 @keyframes 로 정의한 CSS 애니메이션이 MUI 트랜지션과 함께 동작합니다.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AnimationShowcase;
