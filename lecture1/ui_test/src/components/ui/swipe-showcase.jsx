import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

/**
 * SwipeShowcase 컴포넌트
 *
 * react-swipeable 로 좌우 스와이프(터치/마우스) 제스처를 감지하는 이미지
 * 슬라이더. 스와이프 또는 이전/다음 버튼으로 슬라이드를 넘기며, 현재
 * 슬라이드 인덱스와 인디케이터 점을 함께 표시한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <SwipeShowcase />
 */

/** @type {Array<{ id: string, title: string, gradient: string }>} */
const SLIDES = [
  { id: 'slide-1', title: 'Slide 1', gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
  { id: 'slide-2', title: 'Slide 2', gradient: 'linear-gradient(135deg, #43cea2, #185a9d)' },
  { id: 'slide-3', title: 'Slide 3', gradient: 'linear-gradient(135deg, #f7971e, #ffd200)' },
  { id: 'slide-4', title: 'Slide 4', gradient: 'linear-gradient(135deg, #ee0979, #ff6a00)' },
];

function SwipeShowcase() {
  const [index, setIndex] = useState(0);

  /** 다음 슬라이드로 이동 (마지막에서 처음으로 순환) */
  const goNext = () => {
    setIndex((prev) => (prev + 1) % SLIDES.length);
  };

  /** 이전 슬라이드로 이동 (처음에서 마지막으로 순환) */
  const goPrev = () => {
    setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goNext,
    onSwipedRight: goPrev,
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
      <Box
        {...swipeHandlers}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 2,
          height: { xs: 180, md: 240 },
          touchAction: 'pan-y',
          userSelect: 'none',
          cursor: 'grab',
          '&:active': { cursor: 'grabbing' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            height: '100%',
            transition: 'transform 0.35s ease',
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {SLIDES.map((slide) => (
            <Box
              key={slide.id}
              sx={{
                flex: '0 0 100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: slide.gradient,
                color: '#fff',
                fontWeight: 700,
                fontSize: { xs: '1.25rem', md: '1.5rem' },
              }}
            >
              {slide.title}
            </Box>
          ))}
        </Box>

        <IconButton
          aria-label="이전 슬라이드"
          onClick={goPrev}
          sx={{
            position: 'absolute',
            left: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(0, 0, 0, 0.35)',
            color: '#fff',
            '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.55)' },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          aria-label="다음 슬라이드"
          onClick={goNext}
          sx={{
            position: 'absolute',
            right: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(0, 0, 0, 0.35)',
            color: '#fff',
            '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.55)' },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
          {`슬라이드 ${index + 1} / ${SLIDES.length}`}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {SLIDES.map((slide, dotIndex) => (
            <Box
              key={slide.id}
              onClick={() => setIndex(dotIndex)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                cursor: 'pointer',
                bgcolor: dotIndex === index ? 'primary.main' : 'action.disabled',
                transition: 'background-color 0.2s ease',
              }}
            />
          ))}
        </Box>
      </Box>

      <Typography sx={{ fontSize: '0.8125rem', color: 'text.secondary' }}>
        영역을 좌우로 스와이프(마우스 드래그 포함)하거나 화살표 버튼을 눌러보세요.
      </Typography>
    </Box>
  );
}

export default SwipeShowcase;
