import { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

/**
 * DropdownShowcase 컴포넌트
 *
 * MUI Select 컴포넌트로 구성한 드롭다운. 6개의 옵션 중 하나를 선택하며,
 * 선택된 값은 상태로 관리되어 아래 영역에 실시간으로 표시된다.
 *
 * Props: 없음
 *
 * Example usage:
 * <DropdownShowcase />
 */

/** @type {Array<{ value: string, label: string }>} */
const OPTIONS = [
  { value: 'seoul', label: '서울' },
  { value: 'busan', label: '부산' },
  { value: 'incheon', label: '인천' },
  { value: 'daegu', label: '대구' },
  { value: 'gwangju', label: '광주' },
  { value: 'daejeon', label: '대전' },
];

function DropdownShowcase() {
  const [selected, setSelected] = useState('');

  /**
   * 선택값 변경 핸들러
   * @param {import('@mui/material/Select').SelectChangeEvent} event - 변경 이벤트
   */
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const selectedLabel = OPTIONS.find((option) => option.value === selected)?.label ?? '';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 } }}>
      <FormControl fullWidth>
        <InputLabel id="dropdown-city-label">도시 선택</InputLabel>
        <Select
          labelId="dropdown-city-label"
          id="dropdown-city"
          value={selected}
          label="도시 선택"
          onChange={handleChange}
        >
          {OPTIONS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
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
          선택된 값 실시간 표시
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

export default DropdownShowcase;
