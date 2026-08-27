import { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';

/**
 * RadioShowcase 컴포넌트
 *
 * MUI Radio + RadioGroup 으로 구성한 단일 선택 목록. 4개의 옵션 중
 * 하나만 선택할 수 있으며, 선택된 옵션은 아래 영역에 실시간으로 표시된다.
 *
 * Props: 없음
 *
 * Example usage:
 * <RadioShowcase />
 */

/** @type {Array<{ value: string, label: string }>} */
const OPTIONS = [
  { value: 'basic', label: 'Basic (무료)' },
  { value: 'pro', label: 'Pro (월 9,900원)' },
  { value: 'team', label: 'Team (월 29,000원)' },
  { value: 'enterprise', label: 'Enterprise (문의)' },
];

function RadioShowcase() {
  const [selected, setSelected] = useState('');

  /**
   * 선택값 변경 핸들러
   * @param {React.ChangeEvent<HTMLInputElement>} event - 변경 이벤트
   */
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const selectedLabel = OPTIONS.find((option) => option.value === selected)?.label ?? '';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 } }}>
      <FormControl>
        <FormLabel id="radio-plan-label">요금제 선택</FormLabel>
        <RadioGroup
          aria-labelledby="radio-plan-label"
          name="radio-plan-group"
          value={selected}
          onChange={handleChange}
        >
          {OPTIONS.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>

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
          선택된 옵션 실시간 표시
        </Typography>
        <Box sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
          <Box component="span" sx={{ color: selected ? 'text.primary' : 'text.disabled' }}>
            {selected ? `${selectedLabel} (${selected})` : '(선택 없음)'}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default RadioShowcase;
