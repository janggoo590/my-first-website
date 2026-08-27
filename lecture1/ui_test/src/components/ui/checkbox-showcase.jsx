import { useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';

/**
 * CheckboxShowcase 컴포넌트
 *
 * MUI Checkbox 로 구성한 다중 선택 목록. 전체 선택/해제 체크박스가 있으며
 * (일부만 선택된 경우 indeterminate 상태로 표시), 선택된 항목 개수를
 * 실시간으로 표시한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <CheckboxShowcase />
 */

/** @type {Array<{ key: string, label: string }>} */
const ITEMS = [
  { key: 'react', label: 'React' },
  { key: 'vue', label: 'Vue' },
  { key: 'angular', label: 'Angular' },
  { key: 'svelte', label: 'Svelte' },
  { key: 'solid', label: 'Solid' },
];

/** @type {Record<string, boolean>} 초기 선택 상태 (전체 해제) */
const INITIAL_CHECKED = ITEMS.reduce((acc, item) => ({ ...acc, [item.key]: false }), {});

function CheckboxShowcase() {
  const [checked, setChecked] = useState(INITIAL_CHECKED);

  const checkedCount = ITEMS.filter((item) => checked[item.key]).length;
  const isAllChecked = checkedCount === ITEMS.length;
  const isIndeterminate = checkedCount > 0 && checkedCount < ITEMS.length;

  /**
   * 개별 항목 토글 핸들러
   * @param {string} key - 토글할 항목의 key
   */
  const handleToggle = (key) => (event) => {
    setChecked((prev) => ({ ...prev, [key]: event.target.checked }));
  };

  /**
   * 전체 선택/해제 핸들러
   * @param {React.ChangeEvent<HTMLInputElement>} event - 변경 이벤트
   */
  const handleToggleAll = (event) => {
    const next = event.target.checked;
    setChecked(ITEMS.reduce((acc, item) => ({ ...acc, [item.key]: next }), {}));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 } }}>
      <Box>
        <FormControlLabel
          control={
            <Checkbox
              checked={isAllChecked}
              indeterminate={isIndeterminate}
              onChange={handleToggleAll}
            />
          }
          label="전체 선택"
        />
        <FormGroup sx={{ pl: 3 }}>
          {ITEMS.map((item) => (
            <FormControlLabel
              key={item.key}
              control={<Checkbox checked={checked[item.key]} onChange={handleToggle(item.key)} />}
              label={item.label}
            />
          ))}
        </FormGroup>
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
          선택된 항목 개수 실시간 표시
        </Typography>
        <Box sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
          <Box component="span" sx={{ fontWeight: 600, color: 'primary.main' }}>
            {checkedCount}
          </Box>
          <Box component="span" sx={{ color: 'text.secondary' }}>
            {` / ${ITEMS.length} 개 선택됨`}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CheckboxShowcase;
