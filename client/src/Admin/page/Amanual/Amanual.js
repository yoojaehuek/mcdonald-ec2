import React from 'react';
import { Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import DescriptionIcon from '@mui/icons-material/Description';

const StyledAmanual = styled('div')({
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  margin: '5vw auto',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f8f8f8',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const Title = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '25px',
  color: 'rgb(255, 188, 13)',
  letterSpacing: '1px', 
  
});

const SubTitle = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#666',
  marginTop: '20px',
});


const DownloadLink = styled('a')({
  textDecoration: 'none',
});

const DownloadButton = styled(Button)({
  fontSize: '1rem',
  padding: '10px 20px',
  marginTop: '20px',
  backgroundColor: '#2196F3',
  color: '#fff',
  margin: '1vw',
  '&:hover': {
    backgroundColor: '#1565C0',
  },
});

const Amanual = () => {
  return (
    <StyledAmanual>
      <Title gutterBottom>
        매뉴얼
      </Title>
      <Typography>
        Macdonald's 관리자 페이지 사용 설명서
      </Typography>
      <SubTitle gutterBottom>
        매뉴얼 다운로드
      </SubTitle>
      <DownloadLink href="/admin_manual.pdf" download>
        <DownloadButton startIcon={<DescriptionIcon />}>
          pdf 다운로드
        </DownloadButton>
      </DownloadLink>
      <DownloadLink href="/admin_manual.hwp" download>
        <DownloadButton startIcon={<DescriptionIcon />}>
          hwp 다운로드
        </DownloadButton>
      </DownloadLink>
    </StyledAmanual>
  );
};

export default Amanual;
