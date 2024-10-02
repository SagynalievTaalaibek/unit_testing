import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const Binary = () => {
  const [value, setValue] = useState(''); // Строка ввода для ключа
  const [result, setResult] = useState(''); // Результат поиска
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Пример массива для поиска

  // Функция бинарного поиска
  const binarySearch = (arr, key) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      const midValue = arr[middle];

      if (midValue === key) {
        return middle; // Возвращаем индекс найденного элемента
      } else if (midValue < key) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    return -1; // Если элемент не найден
  };

  // Обработчик для решения задачи
  const startSolve = () => {
    const key = parseInt(value, 10); // Преобразуем введенное значение в число
    if (isNaN(key)) {
      setResult('Введите корректное число!');
      return;
    }

    const searchResult = binarySearch(array, key);
    if (searchResult === -1) {
      setResult('Элемент не найден!');
    } else {
      setResult(`Элемент найден на позиции: ${searchResult}`);
    }
  };

  // Обработчик для очистки полей
  const clearFields = () => {
    setValue('');
    setResult('');
  };

  return (
    <>
      <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Бинарный поиск!
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
                label="Введите число для поиска"
                variant="outlined"
                value={value}
                onChange={(e) => setValue(e.target.value)} // Изменение значения ввода
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

export default Binary;
