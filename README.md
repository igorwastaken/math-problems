# math-problems

Solve math problems easily with this utility library. Includes temperature conversions, geometric area calculations, number utilities, and population statistics.

## Installation

```bash
npm install math-problems
```

## Usage

```javascript
import { area, toCelsius, isEven, populationDensity, population } from 'math-problems';

// Calculate the area of a circle with radius 5
console.log(area.circle(5)); // 78

// Convert 100°F to Celsius
console.log(toCelsius(100)); // 37

// Check if a number is even
console.log(isEven(4)); // true

// Calculate population density
console.log(populationDensity(11452000, 1483)); // 7724

// Access population data
console.log(population.br.sp); // 11452000
```

## API Documentation

### 📐 Area Calculations
All area functions return an object with a floored `area` value.

- **Rectangle**  
  `rect(base: number, height: number)`  
  `area.rect(4, 5) ➔ 20`

- **Triangle**  
  `triangle(base: number, height: number)`  
  `area.triangle(4, 5) ➔ 10`

- **Rhombus**  
  `rhombus(D: number, d: number)`  
  `area.rhombus(8, 6) ➔ 24`

- **Trapezoid**  
  `trapezoid(B: number, b: number, height: number)`  
  `area.trapezoid(10, 6, 5) ➔ 40`

- **Circle**  
  `circle(radius: number)`  
  `area.circle(3) ➔ 28`

### 🌡️ Temperature Conversions
Convert between Celsius (°C), Fahrenheit (°F), and Kelvin (K).

- **toCelsius**  
  `toCelsius(temperature: number, unit?: 'F' | 'K')`  
  Default unit: Fahrenheit  
  `toCelsius(32) ➔ 0`  
  `toCelsius(273.15, 'K') ➔ 0`

- **toFahrenheit**  
  `toFahrenheit(temperature: number, unit?: 'C' | 'K')`  
  Default unit: Celsius  
  `toFahrenheit(0) ➔ 32`  
  `toFahrenheit(273.15, 'K') ➔ 32`

- **toKelvin**  
  `toKelvin(temperature: number, unit?: 'C' | 'F')`  
  Default unit: Celsius  
  `toKelvin(0) ➔ 273`  
  `toKelvin(32, 'F') ➔ 273`

### 🔢 Number Utilities
- **isEven(number)**  
  Returns `true` if the number is even.

- **isOdd(number)**  
  Returns `true` if the number is odd.

- **difference(x, y)**  
  Returns the floored difference between two numbers.  
  `difference(10, 3.8) ➔ 6`

- **PI**  
  Math.PI constant (≈3.14159).

### 📊 Population Statistics
- **populationDensity(population, area)**  
  Returns density (people per unit area).

- **birthRate(births, population)**  
  Returns births per 1000 people.

- **deathRate(deaths, population)**  
  Returns deaths per 1000 people.

- **Population Data**  
  Pre-defined population figures (as of Feb 2025):
  ```javascript
  population.br.sp   // Brazil São Paulo: 11,452,000
  population.us.ny   // USA New York: 20,201,249
  ```

## Contributing
Contributions are welcome! Please follow the [contribution guidelines](https://github.com/igorwastaken/math-utils/blob/main/CONTRIBUTING.md).

1. Clone the repository:
   ```bash
   git clone https://github.com/igorwastaken/math-utils.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run tests:
   ```bash
   npm test
   ```

## License
MIT © Igor Figueiredo  
[Full License Text](LICENSE)
