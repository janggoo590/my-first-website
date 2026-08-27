import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

/**
 * ButtonShowcase 컴포넌트
 *
 * MUI Button 의 3가지 variant(contained, outlined, text)와
 * 3가지 color(primary, secondary, error) 조합을 격자 형태로 보여준다.
 * 각 버튼을 클릭하면 해당 variant/color 정보를 알림창(alert)으로 표시한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <ButtonShowcase />
 */

/** @type {Array<'contained' | 'outlined' | 'text'>} */
const VARIANTS = ['contained', 'outlined', 'text'];

/** @type {Array<'primary' | 'secondary' | 'error'>} */
const COLORS = ['primary', 'secondary', 'error'];

function ButtonShowcase() {
  /**
   * 버튼 클릭 시 알림창 표시
   * @param {string} variant - 클릭된 버튼의 variant
   * @param {string} color - 클릭된 버튼의 color
   */
  const handleClick = (variant, color) => {
    window.alert(`${variant} / ${color} 버튼을 클릭했습니다.`);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 } }}>
      {VARIANTS.map((variant) => (
        <Box key={variant}>
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
            {variant}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1, md: 1.5 } }}>
            {COLORS.map((color) => (
              <Button
                key={color}
                variant={variant}
                color={color}
                onClick={() => handleClick(variant, color)}
              >
                {color}
              </Button>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default ButtonShowcase;
