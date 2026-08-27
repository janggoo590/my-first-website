import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/**
 * HoverShowcase 컴포넌트
 *
 * MUI ButtonBase 로 만든 카드 6개에 서로 다른 호버 효과를 적용한다.
 * 색상 변화, 확대/축소, 그림자, 이동, 회전, 테두리 강조 등 각 카드의
 * sx '&:hover' 스타일로 구현하며 transition 으로 부드럽게 전환한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <HoverShowcase />
 */

/** @type {Array<{ key: string, label: string, hoverSx: object }>} */
const HOVER_CARDS = [
  {
    key: 'color',
    label: '색상 변화',
    hoverSx: { bgcolor: 'primary.main', color: 'primary.contrastText', borderColor: 'primary.main' },
  },
  {
    key: 'scale',
    label: '확대',
    hoverSx: { transform: 'scale(1.08)' },
  },
  {
    key: 'shadow',
    label: '그림자',
    hoverSx: { boxShadow: 8, borderColor: 'transparent' },
  },
  {
    key: 'lift',
    label: '위로 이동',
    hoverSx: { transform: 'translateY(-8px)', boxShadow: 6, borderColor: 'transparent' },
  },
  {
    key: 'rotate',
    label: '회전',
    hoverSx: { transform: 'rotate(-4deg) scale(1.04)' },
  },
  {
    key: 'border',
    label: '테두리 강조',
    hoverSx: { borderColor: 'secondary.main', borderWidth: 2, color: 'secondary.main' },
  },
];

function HoverShowcase() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {HOVER_CARDS.map((card) => (
          <Grid key={card.key} size={{ xs: 6, sm: 4 }}>
            <ButtonBase
              focusRipple
              sx={{
                width: '100%',
                height: 120,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0.5,
                p: 2,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
                transition: 'all 0.25s ease',
                '&:hover': card.hoverSx,
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: '0.9375rem' }}>{card.label}</Typography>
              <Typography sx={{ fontSize: '0.75rem', opacity: 0.7 }}>마우스를 올려보세요</Typography>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HoverShowcase;
