import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

/**
 * SectionContainer 컴포넌트
 *
 * 개별 UI 요소를 감싸는 공통 섹션 레이아웃. 제목/설명 + 콘텐츠 영역으로 구성되며
 * 16개 UI 요소를 동일한 형태로 순차 배치하기 위한 래퍼로 사용한다.
 *
 * Props:
 * @param {string} title - 섹션 제목 [Required]
 * @param {string} description - 섹션 설명 텍스트 [Optional, 기본값: '']
 * @param {number} index - 섹션 순번 (1부터). 배지로 표시 [Optional]
 * @param {React.ReactNode} children - 섹션 본문에 렌더링할 UI 요소 [Required]
 *
 * Example usage:
 * <SectionContainer title="Button" description="MUI 버튼 변형" index={1}>
 *   <ButtonShowcase />
 * </SectionContainer>
 */
function SectionContainer({ title, description = '', index, children }) {
  return (
    <Paper
      component="section"
      elevation={0}
      variant="outlined"
      sx={{
        width: '100%',
        p: { xs: 2, md: 3 },
        borderRadius: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: description ? 0.5 : 2 }}>
        {typeof index === 'number' && (
          <Box
            sx={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'primary.main',
              minWidth: 24,
            }}
          >
            {String(index).padStart(2, '0')}
          </Box>
        )}
        <Typography variant="h2" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 600 }}>
          {title}
        </Typography>
      </Box>

      {description && (
        <Typography sx={{ mb: 2, color: 'text.secondary', fontSize: { xs: '0.875rem', md: '1rem' } }}>
          {description}
        </Typography>
      )}

      <Box>{children}</Box>
    </Paper>
  );
}

export default SectionContainer;
