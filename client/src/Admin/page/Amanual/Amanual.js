import React from 'react';
import { Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledAmanual = styled('div')({
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  margin: '5vw auto',
  textAlign: 'center',
});

const Amanual = () => {
  return (
    <StyledAmanual>
      <Typography variant="h4" gutterBottom>
        매뉴얼
      </Typography>
      <Typography>
        Macdonald's 관리자 페이지 사용 설명서
      </Typography>
      <div style={{ marginTop: '20px' }}>
        <Typography variant="h6" gutterBottom>
          매뉴얼 다운로드
        </Typography>
        <a href="/admin_manual.hwp" download>
          <Button variant="contained" color="primary">
            다운로드
          </Button>
        </a>
      </div>
    </StyledAmanual>
  );
};

export default Amanual;
