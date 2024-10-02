import { render, screen, fireEvent } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  test('Test#1 Check quadratic', () => {
    render(<Card />);

    const inputA = screen.getByLabelText('a =');
    const inputB = screen.getByLabelText('b =');
    const inputC = screen.getByLabelText('c =');
    const solveButton = screen.getByText(/Решить/i);

    // Вводим некорректные значения
    fireEvent.change(inputA, { target: { value: '1' } });
    fireEvent.change(inputB, { target: { value: '-3' } });
    fireEvent.change(inputC, { target: { value: '2' } });
    fireEvent.click(solveButton);

    const resultElement1 = screen.getByText(/x1 = 2/i);
    const resultElement2 = screen.getByText(/x2 = 1/i);
    expect(resultElement1).toBeInTheDocument();
    expect(resultElement2).toBeInTheDocument();
  });

  test('Test#2 one root', () => {
    render(<Card />);

    const inputA = screen.getByLabelText('a =');
    const inputB = screen.getByLabelText('b =');
    const inputC = screen.getByLabelText('c =');
    const solveButton = screen.getByText(/Решить/i);

    // Вводим некорректные значения
    fireEvent.change(inputA, { target: { value: '1' } });
    fireEvent.change(inputB, { target: { value: '-2' } });
    fireEvent.change(inputC, { target: { value: '1' } });
    fireEvent.click(solveButton);

    const resultElement1 = screen.getByText(/x1 = 1/i);
    expect(resultElement1).toBeInTheDocument();
  });


  test('Test#3 There are no real roots', () => {
    render(<Card />);

    const inputA = screen.getByLabelText('a =');
    const inputB = screen.getByLabelText('b =');
    const inputC = screen.getByLabelText('c =');
    const solveButton = screen.getByText(/Решить/i);

    // Вводим корректные значения
    fireEvent.change(inputA, { target: { value: '1' } });
    fireEvent.change(inputB, { target: { value: '2' } });
    fireEvent.change(inputC, { target: { value: '2' } });
    fireEvent.click(solveButton);

    const resultElement1 = screen.getByText(/Нет вещественных корней/i);
    expect(resultElement1).toBeInTheDocument();
  });

  test('Test#4 display error when is abc', () => {
    render(<Card />);

    const inputA = screen.getByLabelText('a =');
    const inputB = screen.getByLabelText('b =');
    const inputC = screen.getByLabelText('c =');
    const solveButton = screen.getByText(/Решить/i);

    // Вводим значение a = 0
    fireEvent.change(inputA, { target: { value: 'a' } });
    fireEvent.change(inputB, { target: { value: 'b' } });
    fireEvent.change(inputC, { target: { value: 'c' } });
    fireEvent.click(solveButton);

    const resultElement = screen.getByText(/Все коэффициенты должны быть числовыми значениями/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('Test#5 displays error for coefficients greater than 1000 like 100000000', () => {
    render(<Card />);

    const inputA = screen.getByLabelText('a =');
    const inputB = screen.getByLabelText('b =');
    const inputC = screen.getByLabelText('c =');
    const solveButton = screen.getByText(/Решить/i);

    // Вводим значение больше 1000
    fireEvent.change(inputA, { target: { value: '10000000' } });
    fireEvent.change(inputB, { target: { value: '20000000' } });
    fireEvent.change(inputC, { target: { value: '30000000' } });
    fireEvent.click(solveButton);

    const resultElement = screen.getByText(/Коэффициенты квадратного уравнения не должны превышать 1000/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('Test#6 when number like 6.5', () => {
    render(<Card />);

    const inputA = screen.getByLabelText('a =');
    const inputB = screen.getByLabelText('b =');
    const inputC = screen.getByLabelText('c =');
    const solveButton = screen.getByText(/Решить/i);

    fireEvent.change(inputA, { target: { value: '6.5' } });
    fireEvent.change(inputB, { target: { value: '7.2' } });
    fireEvent.change(inputC, { target: { value: '1.2' } });
    fireEvent.click(solveButton);

    const resultElement1 = screen.getByText(/x1 = -0.20437487102767543/i);
    const resultElement2 = screen.getByText(/x2 = -0.9033174366646323/i);
    expect(resultElement1).toBeInTheDocument();
    expect(resultElement2).toBeInTheDocument();
  });

  test('Test#7 Empty input', () => {
    render(<Card />);

    const inputA = screen.getByLabelText('a =');
    const inputB = screen.getByLabelText('b =');
    const inputC = screen.getByLabelText('c =');
    const solveButton = screen.getByText(/Решить/i);

    fireEvent.change(inputA, { target: { value: '' } });
    fireEvent.change(inputB, { target: { value: '' } });
    fireEvent.change(inputC, { target: { value: '' } });
    fireEvent.click(solveButton);

    const resultElement = screen.getByText(/Все коэффициенты должны быть числовыми значениями/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('Test#8 when all inputs zero', () => {
    render(<Card />);

    const inputA = screen.getByLabelText('a =');
    const inputB = screen.getByLabelText('b =');
    const inputC = screen.getByLabelText('c =');
    const solveButton = screen.getByText(/Решить/i);

    fireEvent.change(inputA, { target: { value: '0' } });
    fireEvent.change(inputB, { target: { value: '0' } });
    fireEvent.change(inputC, { target: { value: '0' } });
    fireEvent.click(solveButton)

    const resultElement = screen.getByText(/Коэффициент при первом слагаемом уравнения не может быть равным нулю измените его и попробуйте снова/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('Test#9 when one input is zero', () => {
    render(<Card />);

    const inputA = screen.getByLabelText('a =');
    const inputB = screen.getByLabelText('b =');
    const inputC = screen.getByLabelText('c =');
    const solveButton = screen.getByText(/Решить/i);

    fireEvent.change(inputA, { target: { value: '0' } });
    fireEvent.change(inputB, { target: { value: '1' } });
    fireEvent.change(inputC, { target: { value: '4' } });

    fireEvent.click(solveButton);

    const resultElement = screen.getByText(/Коэффициент при первом слагаемом уравнения не может быть равным нулю измените его и попробуйте снова/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('Test#10 when one > than -10011', () => {
    render(<Card />);

    const inputA = screen.getByLabelText('a =');
    const inputB = screen.getByLabelText('b =');
    const inputC = screen.getByLabelText('c =');
    const solveButton = screen.getByText(/Решить/i);

    fireEvent.change(inputA, { target: { value: '-10011' } });
    fireEvent.change(inputB, { target: { value: '-10011' } });
    fireEvent.change(inputC, { target: { value: '-10011' } });

    fireEvent.click(solveButton);

    const resultElement = screen.getByText(/Коэффициенты квадратного уравнения не должны быть менее -1000/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('Test#11 when a = 1000', () => {
    render(<Card />);

    const inputA = screen.getByLabelText('a =');
    const inputB = screen.getByLabelText('b =');
    const inputC = screen.getByLabelText('c =');
    const solveButton = screen.getByText(/Решить/i);

    fireEvent.change(inputA, { target: { value: '1000' } });
    fireEvent.change(inputB, { target: { value: '1' } });
    fireEvent.change(inputC, { target: { value: '-2' } });

    fireEvent.click(solveButton);

    const resultElement = screen.getByText(/x1 = 0.04422415454762672/i);
    const result2Element = screen.getByText(/x2 = -0.045224154547626724/i);
    expect(resultElement).toBeInTheDocument();
    expect(result2Element).toBeInTheDocument();
  });

  test('Test#12 when a > 1000', () => {
    render(<Card />);

    const inputA = screen.getByLabelText('a =');
    const inputB = screen.getByLabelText('b =');
    const inputC = screen.getByLabelText('c =');
    const solveButton = screen.getByText(/Решить/i);

    fireEvent.change(inputA, { target: { value: '1001' } });
    fireEvent.change(inputB, { target: { value: '1' } });
    fireEvent.change(inputC, { target: { value: '-2' } });

    fireEvent.click(solveButton);

    const resultElement = screen.getByText(/Коэффициенты квадратного уравнения не должны превышать 1000/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('Test#13 when a < 1000', () => {
    render(<Card />);

    const inputA = screen.getByLabelText('a =');
    const inputB = screen.getByLabelText('b =');
    const inputC = screen.getByLabelText('c =');
    const solveButton = screen.getByText(/Решить/i);

    fireEvent.change(inputA, { target: { value: '999' } });
    fireEvent.change(inputB, { target: { value: '1' } });
    fireEvent.change(inputC, { target: { value: '-2' } });

    fireEvent.click(solveButton);

    const resultElement = screen.getByText(/x1 = 0.04424603570905435/i);
    expect(resultElement).toBeInTheDocument();
  });
});
