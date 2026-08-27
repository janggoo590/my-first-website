import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

/**
 * InputShowcase 컴포넌트
 *
 * MUI TextField 의 3가지 variant(standard, outlined, filled)를 보여준다.
 * 각 필드는 개별 label 과 placeholder 를 가지며, 입력값은 상태로 관리되어
 * 아래 영역에 실시간으로 표시된다.
 *
 * Props: 없음
 *
 * Example usage:
 * <InputShowcase />
 */

/** @type {Array<{ variant: 'standard' | 'outlined' | 'filled', label: string, placeholder: string }>} */
const FIELDS = [
  { variant: 'standard', label: '이름 (standard)', placeholder: '이름을 입력하세요' },
  { variant: 'outlined', label: '이메일 (outlined)', placeholder: 'example@email.com' },
  { variant: 'filled', label: '메시지 (filled)', placeholder: '메시지를 입력하세요' },
];

function InputShowcase() {
  const [values, setValues] = useState({ standard: '', outlined: '', filled: '' });

  /**
   * 입력값 변경 핸들러
   * @param {string} variant - 변경된 필드의 variant (상태 키)
   */
  const handleChange = (variant) => (event) => {
    setValues((prev) => ({ ...prev, [variant]: event.target.value }));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2.5, md: 3 } }}>
        {FIELDS.map(({ variant, label, placeholder }) => (
          <TextField
            key={variant}
            variant={variant}
            label={label}
            placeholder={placeholder}
            value={values[variant]}
            onChange={handleChange(variant)}
            fullWidth
          />
        ))}
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
          입력값 실시간 표시
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          {FIELDS.map(({ variant }) => (
            <Box key={variant} sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'primary.main', mr: 1 }}>
                {variant}
              </Box>
              <Box component="span" sx={{ color: values[variant] ? 'text.primary' : 'text.disabled' }}>
                {values[variant] || '(입력 없음)'}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default InputShowcase;
