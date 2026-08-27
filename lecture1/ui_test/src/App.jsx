import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SectionContainer from './components/sections/section-container.jsx';
import { sections } from './components/sections/index.js';
import './styles/app.css';

/**
 * App 컴포넌트
 *
 * 네비게이션 없는 단일 스크롤 레이아웃. 섹션 레지스트리(sections)에 등록된
 * UI 요소를 등록 순서대로 SectionContainer 로 감싸 순차 렌더링한다.
 */
function App() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        py: { xs: 3, md: 6 },
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 } }}>
        <Box component="header" sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' }, fontWeight: 600, mb: 1 }}
          >
            UI Test
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: { xs: '0.875rem', md: '1rem' } }}>
            16개 UI 요소를 섹션 단위로 순차 추가하는 테스트 페이지
          </Typography>
        </Box>

        {sections.length === 0 ? (
          <Box className="app-layout__empty">
            <Typography sx={{ color: 'text.secondary' }}>
              아직 등록된 섹션이 없습니다. src/components/sections/index.js 의 sections 배열에
              UI 요소를 추가하세요.
            </Typography>
          </Box>
        ) : (
          <Box className="app-layout__sections">
            {sections.map(({ id, title, description, Component }, i) => (
              <SectionContainer key={id} title={title} description={description} index={i + 1}>
                <Component />
              </SectionContainer>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default App;
