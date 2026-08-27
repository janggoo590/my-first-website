import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

/**
 * DragDropShowcase 컴포넌트
 *
 * HTML5 Drag and Drop API 로 구현한 아이템 이동 예제. 왼쪽 "대기" 영역과
 * 오른쪽 "완료" 영역 사이로 아이템을 드래그하여 옮길 수 있다.
 * 드래그 중인 아이템은 반투명 처리되고, 드롭 대상 영역은 테두리가 강조된다.
 *
 * Props: 없음
 *
 * Example usage:
 * <DragDropShowcase />
 */

/** @type {Array<{ id: string, label: string }>} */
const INITIAL_ITEMS = [
  { id: 'task-1', label: '기획서 작성' },
  { id: 'task-2', label: '디자인 검토' },
  { id: 'task-3', label: '코드 리뷰' },
  { id: 'task-4', label: '배포 준비' },
];

/** @type {Array<{ key: 'todo' | 'done', title: string }>} */
const ZONES = [
  { key: 'todo', title: '대기' },
  { key: 'done', title: '완료' },
];

function DragDropShowcase() {
  const [placement, setPlacement] = useState(() =>
    INITIAL_ITEMS.reduce((acc, item) => ({ ...acc, [item.id]: 'todo' }), {}),
  );
  const [draggingId, setDraggingId] = useState('');
  const [dragOverZone, setDragOverZone] = useState('');

  /**
   * 드래그 시작 핸들러
   * @param {string} id - 드래그하는 아이템 id
   */
  const handleDragStart = (id) => (event) => {
    event.dataTransfer.setData('text/plain', id);
    event.dataTransfer.effectAllowed = 'move';
    setDraggingId(id);
  };

  /** 드래그 종료 핸들러 */
  const handleDragEnd = () => {
    setDraggingId('');
    setDragOverZone('');
  };

  /**
   * 드롭 영역 위로 드래그 중일 때 (drop 허용)
   * @param {string} zone - 대상 영역 key
   */
  const handleDragOver = (zone) => (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    if (dragOverZone !== zone) {
      setDragOverZone(zone);
    }
  };

  /**
   * 드롭 처리 핸들러
   * @param {string} zone - 아이템을 놓은 영역 key
   */
  const handleDrop = (zone) => (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    if (id) {
      setPlacement((prev) => ({ ...prev, [id]: zone }));
    }
    setDraggingId('');
    setDragOverZone('');
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
        gap: { xs: 2, md: 3 },
      }}
    >
      {ZONES.map((zone) => {
        const zoneItems = INITIAL_ITEMS.filter((item) => placement[item.id] === zone.key);
        const isActiveDropTarget = dragOverZone === zone.key;

        return (
          <Paper
            key={zone.key}
            variant="outlined"
            onDragOver={handleDragOver(zone.key)}
            onDragLeave={() => setDragOverZone('')}
            onDrop={handleDrop(zone.key)}
            sx={{
              p: 2,
              minHeight: 220,
              borderRadius: 2,
              borderStyle: 'dashed',
              borderWidth: 2,
              borderColor: isActiveDropTarget ? 'primary.main' : 'divider',
              bgcolor: isActiveDropTarget ? 'action.hover' : 'transparent',
              transition: 'border-color 0.15s ease, background-color 0.15s ease',
            }}
          >
            <Typography
              sx={{
                mb: 1.5,
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'text.secondary',
              }}
            >
              {`${zone.title} (${zoneItems.length})`}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {zoneItems.length === 0 ? (
                <Typography sx={{ color: 'text.disabled', fontSize: '0.875rem' }}>
                  여기로 아이템을 끌어다 놓으세요
                </Typography>
              ) : (
                zoneItems.map((item) => (
                  <Paper
                    key={item.id}
                    elevation={draggingId === item.id ? 4 : 1}
                    draggable
                    onDragStart={handleDragStart(item.id)}
                    onDragEnd={handleDragEnd}
                    sx={{
                      p: 1.5,
                      borderRadius: 1.5,
                      cursor: 'grab',
                      fontSize: '0.9375rem',
                      opacity: draggingId === item.id ? 0.4 : 1,
                      transition: 'opacity 0.15s ease',
                      '&:active': { cursor: 'grabbing' },
                    }}
                  >
                    {item.label}
                  </Paper>
                ))
              )}
            </Box>
          </Paper>
        );
      })}
    </Box>
  );
}

export default DragDropShowcase;
