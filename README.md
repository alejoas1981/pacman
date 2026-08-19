# Pacman Game

Classic Pacman game implementation with clean code architecture.

## Author

**Savchenko Aleksey**  
Email: alejoas1981@gmail.com

## Features

- Classic Pacman gameplay
- Four ghosts with different AI behaviors
- Proper collision detection
- Score tracking
- Power pellets
- Clean Code principles (based on https://github.com/ryanmcdermott/clean-code-javascript)
- JSDoc documentation for all functions
- Unit tests with Vitest
- E2E tests with Playwright

## Installation

```bash
npm install
```

## Running the Game

```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

## Running Tests

### Unit Tests
```bash
npm test
```

### E2E Tests
```bash
npm run test:e2e
```

### Test Coverage
```bash
npm run test:coverage
```

## Project Structure

```
pacman/
├── src/
│   ├── config.js      # Game configuration
│   ├── utils.js       # Utility functions
│   ├── pacman.js      # Pacman logic
│   ├── ghost.js       # Ghost logic
│   └── main.js        # Main game loop
├── tests/
│   ├── unit/          # Unit tests
│   └── e2e/           # E2E tests
├── assets/
│   ├── images/        # Game images
│   └── sounds/        # Game sounds
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## License

MIT License - see LICENSE file for details
