import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const Fibonacci = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const fibonacci = (n) => {
    if (n <= 0)
      return 'Порядковый номер должен быть положительным числом и больше нуля';
    if (!Number.isInteger(n)) return 'Введите целое число';
    if (n > 1000) return 'Порядковый номер должен быть меньше 1000';

    let prev = 0,
      current = 1;

    for (let i = 2; i <= n; i++) {
      const nextNumber = prev + current;
      prev = current;
      current = nextNumber;
    }

    return n === 1 ? 0 : current;
  };

  const startSolve = () => {
    const parsedValue = parseFloat(value);

    if (isNaN(parsedValue)) {
      setResult('Порядковый номер должен быть числом');
    } else if (!Number.isInteger(parsedValue)) {
      setResult('Введите целое число');
    } else {
      const fibResult = fibonacci(parsedValue);
      setResult(fibResult.toString());
    }
  };

  const clearFields = () => {
    setValue('');
    setResult('');
  };

  return (
    <>
      <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
        Нахождение числа Фибоначчи по порядковому номеру
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <Card sx={{ padding: '20px' }}>
          <Box sx={{ display: 'flex', gap: 20 }}>
            <Box>
              <TextField
                id="value"
                label="Введите порядковый номер"
                variant="outlined"
                value={value}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{ margin: '10px 0' }}
                onClick={startSolve}
              >
                Решить
              </Button>
              <Button
                variant="contained"
                sx={{ margin: '10px 0 10px 15px', backgroundColor: 'red' }}
                onClick={clearFields}
              >
                Очистить
              </Button>
            </Box>
          </Box>
          <Box sx={{ marginTop: '20px' }}>Результат: {result}</Box>
        </Card>
      </Box>
    </>
  );
};

export default Fibonacci;
