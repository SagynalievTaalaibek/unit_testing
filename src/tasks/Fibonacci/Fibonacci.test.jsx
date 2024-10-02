import { render, screen, fireEvent } from '@testing-library/react';
import Fibonacci from './Fibonacci';

describe('Fibonacci lab2', () => {
  test('displays correct Fibonacci result for large valid input 400', () => {
    render(<Fibonacci />);

    const inputElement = screen.getByLabelText(/Введите порядковый номер/i);
    const solveButton = screen.getByText(/Решить/i);

    // Вводим большое валидное число
    fireEvent.change(inputElement, { target: { value: '400' } });
    fireEvent.click(solveButton);

    const resultElement = screen.getByText(/Результат: 1.760236806450138e\+83/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('displays correct Fibonacci result for equal to 1000', () => {
    render(<Fibonacci />);

    const inputElement = screen.getByLabelText(/Введите порядковый номер/i);
    const solveButton = screen.getByText(/Решить/i);

    fireEvent.change(inputElement, { target: { value: '1000' } });
    fireEvent.click(solveButton);

    const resultElement = screen.getByText(/Результат: 4.346655768693743e\+208/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('displays error for input greater than 1000', () => {
    render(<Fibonacci />);

    const inputElement = screen.getByLabelText(/Введите порядковый номер/i);
    const solveButton = screen.getByText(/Решить/i);

    fireEvent.change(inputElement, { target: { value: '1001' } });
    fireEvent.click(solveButton);

    const resultElement = screen.getByText(
      /Порядковый номер должен быть меньше 1000/i,
    );
    expect(resultElement).toBeInTheDocument();
  });

  test('displays correct Fibonacci result for less than 1000 like 999', () => {
    render(<Fibonacci />);

    const inputElement = screen.getByLabelText(/Введите порядковый номер/i);
    const solveButton = screen.getByText(/Решить/i);

    fireEvent.change(inputElement, { target: { value: '999' } });
    fireEvent.click(solveButton);

    const resultElement = screen.getByText(/Результат: 2.686381002448534e\+208/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('displays error for non-integer input', () => {
    render(<Fibonacci />);

    const inputElement = screen.getByLabelText(/Введите порядковый номер/i);
    const solveButton = screen.getByText(/Решить/i);

    fireEvent.change(inputElement, { target: { value: '10.3' } });
    fireEvent.click(solveButton);

    const resultElement = screen.getByText(/Введите целое число/i);
    expect(resultElement).toBeInTheDocument();
  });


  test('displays error for input less than 0', () => {
    render(<Fibonacci />);

    const inputElement = screen.getByLabelText(/Введите порядковый номер/i);
    const solveButton = screen.getByText(/Решить/i);

    fireEvent.change(inputElement, { target: { value: '-10' } });
    fireEvent.click(solveButton);

    const resultElement = screen.getByText(
      /Порядковый номер должен быть положительным числом и больше нуля/i,
    );
    expect(resultElement).toBeInTheDocument();
  });

  test('displays error for input equal to 0', () => {
    render(<Fibonacci />);

    const inputElement = screen.getByLabelText(/Введите порядковый номер/i);
    const solveButton = screen.getByText(/Решить/i);

    fireEvent.change(inputElement, { target: { value: '0' } });
    fireEvent.click(solveButton);

    const resultElement = screen.getByText(
      /Порядковый номер должен быть положительным числом и больше нуля/i,
    );
    expect(resultElement).toBeInTheDocument();
  });

  test('displays error for non-numeric input like fff', () => {
    render(<Fibonacci />);

    const inputElement = screen.getByLabelText(/Введите порядковый номер/i);
    const solveButton = screen.getByText(/Решить/i);

    fireEvent.change(inputElement, { target: { value: 'fff' } });
    fireEvent.click(solveButton);

    const resultElement = screen.getByText(
      /Порядковый номер должен быть числом/i,
    );
    expect(resultElement).toBeInTheDocument();
  });

  test('displays error for empty input', () => {
    render(<Fibonacci />);

    const inputElement = screen.getByLabelText(/Введите порядковый номер/i);
    const solveButton = screen.getByText(/Решить/i);

    fireEvent.change(inputElement, { target: { value: '' } });
    fireEvent.click(solveButton);

    const resultElement = screen.getByText(
      /Порядковый номер должен быть числом/i,
    );
    expect(resultElement).toBeInTheDocument();
  });

  test('displays correct Fibonacci result for edge case input', () => {
    render(<Fibonacci />);

    const inputElement = screen.getByLabelText(/Введите порядковый номер/i);
    const solveButton = screen.getByText(/Решить/i);

    fireEvent.change(inputElement, { target: { value: '1' } });
    fireEvent.click(solveButton);

    const resultElement = screen.getByText(/Результат: 0/i);
    expect(resultElement).toBeInTheDocument();
  });
});
