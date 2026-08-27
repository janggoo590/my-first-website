import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

/**
 * SliderShowcase 컴포넌트
 *
 * MUI Slider 로 0~100 범위의 값을 조절한다. 20 단위로 구간 표시(marks)가
 * 있으며, 현재 값은 슬라이더 위에 실시간으로 표시된다.
 *
 * Props: 없음
 *
 * Example usage:
 * <SliderShowcase />
 */

/** @type {Array<{ value: number, label: string }>} 20 단위 구간 표시 */
const MARKS = [
  { value: 0, label: '0' },
  { value: 20, label: '20' },
  { value: 40, label: '40' },
  { value: 60, label: '60' },
  { value: 80, label: '80' },
  { value: 100, label: '100' },
];

function SliderShowcase() {
  const [value, setValue] = useState(40);

  /**
   * 슬라이더 값 변경 핸들러
   * @param {Event} event - 변경 이벤트
   * @param {number} newValue - 새 슬라이더 값
   */
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 } }}>
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 1 }}>
          <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>현재 값</Typography>
          <Box component="span" sx={{ fontSize: '1.25rem', fontWeight: 700, color: 'primary.main' }}>
            {value}
          </Box>
        </Box>
        <Box sx={{ px: 1 }}>
          <Slider
            value={value}
            onChange={handleChange}
            min={0}
            max={100}
            step={1}
            marks={MARKS}
            valueLabelDisplay="auto"
            aria-label="0부터 100까지 값 조절 슬라이더"
          />
        </Box>
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
          현재 값 실시간 표시
        </Typography>
        <Box sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
          <Box component="span" sx={{ fontWeight: 600, color: 'primary.main' }}>
            {value}
          </Box>
          <Box component="span" sx={{ color: 'text.secondary' }}>{' / 100'}</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SliderShowcase;
