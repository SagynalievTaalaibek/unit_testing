import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const Card = () => {
  const [value, setValue] = useState({
    a: '',
    b: '',
    c: '',
  });

  const [result, setResult] = useState({ roots: [] });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [id]: value,
    }));
  };

  const solveQuadratic = (a, b, c) => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      return {
        roots: [],
        message: 'Все коэффициенты должны быть числовыми значениями',
      };
    }

    if (a === 0 && b === 0 && c === 0) {
      return { roots: [], message: 'Деление на 0 невозможно' };
    }

    if (a === 0) {
      if (b === 0) {
        return { roots: [], message: 'Нет решений' };
      }
      return { roots: [-c / b] };
    }

    if (a < -1000 || b < -1000 || c < -1000) {
      return {
        roots: [],
        message:
          'Коэффициенты квадратного уравнения не должны быть менее -1000',
      };
    }

    if (a > 1000 || b > 1000 || c > 1000) {
      return {
        roots: [],
        message: 'Коэффициенты квадратного уравнения не должны превышать 1000',
      };
    }

    if (Math.abs(a) < 0.0001) {
      return {
        roots: [],
        message: 'Коэффициент при x^2 должен быть отличен от нуля',
      };
    }

    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return { roots: [root1, root2] };
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      return { roots: [root] };
    } else {
      return { roots: [], message: 'Нет вещественных корней' };
    }
  };

  const startSolve = () => {
    const a = parseFloat(value.a);
    const b = parseFloat(value.b);
    const c = parseFloat(value.c);

    setResult(solveQuadratic(a, b, c));
  };

  const clearFields = () => {
    setValue({
      a: '',
      b: '',
      c: '',
    });
    setResult({ roots: [] });
  };

  return (
    <>
      <Typography variant="h3" sx={{ margin: '10px 0' }}>
        Нахождение вещественных корней квадратного уравнения
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ border: '1px solid black', padding: '10px 15px' }}>
          <Typography variant="h4">ax^2 + bx + c = 0</Typography>
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <Box>
              <TextField
                id="a"
                label="a ="
                variant="outlined"
                value={value.a}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <TextField
                id="b"
                label="b ="
                variant="outlined"
                value={value.b}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <TextField
                id="c"
                label="c ="
                variant="outlined"
                value={value.c}
                onChange={handleChange}
              />
            </Box>
          </Box>
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
          <Box sx={{ marginTop: '10px' }}>
            {value.a && parseFloat(value.a) === 0 ? (
              'Коэффициент при первом слагаемом уравнения не может быть равным нулю измените его и попробуйте снова'
            ) : (
              <>
                <Typography variant="h5">
                  {result.roots[0] !== undefined
                    ? `x1 = ${result.roots[0]}`
                    : ''}
                </Typography>
                <Typography variant="h5">
                  {result.roots[1] !== undefined
                    ? `x2 = ${result.roots[1]}`
                    : ''}
                </Typography>
                {result.message && (
                  <Typography variant="h5" color="red">
                    {result.message}
                  </Typography>
                )}
              </>
            )}
          </Box>
        </Box>
      </Box>

      export { solveQuadratic };
    </>
  );
};

export default Card;

