import { Typography } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Typography
          sx={{
            margin: '10px 0',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
          typography="h2"
        >
          Тестирование
        </Typography>
      </header>

      <main className="container-fluid">{children}</main>
    </>
  );
};

export default Layout;
