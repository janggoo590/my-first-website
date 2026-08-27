import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/**
 * CardShowcase 컴포넌트
 *
 * MUI Card 를 CardMedia + CardContent + CardActions 조합으로 구성하고,
 * 3개 이상의 카드를 Grid 로 반응형 배치한다. 각 카드는 마우스 호버 시
 * elevation(그림자)이 커지는 효과를 가진다.
 *
 * Props: 없음
 *
 * Example usage:
 * <CardShowcase />
 */

/** @type {Array<{ id: string, title: string, description: string, gradient: string }>} */
const CARDS = [
  {
    id: 'mountain',
    title: '산악 트레킹',
    description: '탁 트인 능선과 맑은 공기를 즐기는 당일 트레킹 코스입니다.',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 'ocean',
    title: '해안 드라이브',
    description: '해안선을 따라 이어지는 전망 좋은 드라이브 루트를 소개합니다.',
    gradient: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
  },
  {
    id: 'city',
    title: '도심 나이트워크',
    description: '해가 진 뒤 조명이 켜진 도심을 걷는 야경 산책 코스입니다.',
    gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
  },
];

function CardShowcase() {
  /**
   * 카드 액션 버튼 클릭 핸들러
   * @param {string} title - 클릭된 카드의 제목
   */
  const handleAction = (title) => {
    window.alert(`"${title}" 자세히 보기를 클릭했습니다.`);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {CARDS.map((card) => (
          <Grid key={card.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              elevation={1}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                '&:hover': {
                  boxShadow: 8,
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardMedia sx={{ height: 140, background: card.gradient }} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {card.title}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button size="small" onClick={() => handleAction(card.title)}>
                  자세히 보기
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CardShowcase;
