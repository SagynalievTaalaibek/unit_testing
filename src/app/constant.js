export const LABS = [
  {
    id: 'lab11',
    value: 'Lab-1',
    nav: 'lab1',
  },
  {
    id: 'lab22',
    value: 'Lab-2',
    nav: 'lab2',
  },
  {
    id: 'lab33',
    value: 'Lab-3',
    nav: 'lab3',
  },
  {
    id: 'lab44',
    value: 'Lab-4',
    nav: 'lab4',
  },
];

export const solveQuadratic = (a, b, c) => {
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
