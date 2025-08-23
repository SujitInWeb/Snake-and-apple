# 🐍 Snake Game

<div align="center">
  <img src="https://img.shields.io/badge/Game-Snake-brightgreen" alt="Snake Game">
  <img src="https://img.shields.io/badge/Language-JavaScript-yellow" alt="JavaScript">
  <img src="https://img.shields.io/badge/Canvas-HTML5-orange" alt="HTML5 Canvas">
  <img src="https://img.shields.io/badge/License-MIT-blue" alt="MIT License">
</div>

<div align="center">
  <h3>🎮 A classic Snake game built with HTML5 Canvas, CSS, and JavaScript</h3>
  <p>Control the snake to eat food, grow longer, and avoid collisions!</p>
</div>

---

## 📖 Table of Contents

- [🚀 Quick Start](#-quick-start)
- [✨ Features](#-features)
- [🎯 How to Play](#-how-to-play)
- [🎮 Controls](#-controls)
- [🏆 Game Rules](#-game-rules)
- [📁 Project Structure](#-project-structure)
- [🛠️ Technical Details](#️-technical-details)
- [🎨 Styling](#-styling)
- [🔧 Customization](#-customization)
- [🐛 Known Issues](#-known-issues)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required!

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/snake-game.git
   ```

2. **Navigate to project directory:**
   ```bash
   cd snake-game
   ```

3. **Launch the game:**
   ```bash
   open index.html
   ```
   *Or simply double-click the `index.html` file*

---

## ✨ Features

<div align="center">

   | Feature | Description |
   |---------|-------------|
   | 🎮 **Smooth Gameplay** | 75ms refresh rate for fluid movement |
   | 📊 **Score Tracking** | Real-time score display and updates |
   | 📱 **Responsive Design** | Adapts to different screen sizes |
   | 💀 **Game Over Screen** | Elegant display with custom MV Boli font |
   | 🔄 **Reset Function** | Restart the game anytime with one click |
   | 💥 **Collision Detection** | Smart detection for walls and self-collision |
   | 🎲 **Random Food Generation** | Food appears at random grid positions |

</div>

---

## 🎯 How to Play

### Basic Gameplay
1. **Move the snake** using arrow keys
2. **Eat the red food** to grow and increase your score
3. **Avoid hitting walls** or your own body
4. **Click Reset** to start over anytime

### Objective
- Eat as much food as possible to achieve the highest score
- Each food consumed adds +1 to your score and grows the snake

---

## 🎮 Controls

<div align="center">

   | Key | Action | Description |
   |-----|--------|-------------|
   | ⬅️ **Left Arrow** | Move Left | Turn snake left |
   | ➡️ **Right Arrow** | Move Right | Turn snake right |
   | ⬆️ **Up Arrow** | Move Up | Turn snake up |
   | ⬇️ **Down Arrow** | Move Down | Turn snake down |
   | 🔄 **Reset Button** | Restart Game | Reset to initial state |

</div>

---

## 🏆 Game Rules

### 🎯 Objective
Eat as much food as possible to grow the snake and achieve the highest score

### 📈 Scoring System
- **+1 point** per food consumed
- Score displayed in real-time on the right panel

### 💀 Game Over Conditions
- ❌ Snake hits any wall boundary
- ❌ Snake collides with its own body

### 🐍 Snake Behavior
- Starts with 5 segments
- Grows by 1 segment per food consumed
- Cannot move in reverse direction

---

## 📁 Project Structure

```
snake-game/
├── 📄 index.html          # Main HTML structure
├── 📜 index.js            # Game logic and functionality
├── 🎨 style.css           # Styling and layout
├── 📁 images/
│   └── 🖼️ pause-line.svg  # Pause button icon
└── 📋 README.md           # This file
```

---

## 🛠️ Technical Details

### ⚙️ Game Configuration
| Setting | Value | Description |
|---------|-------|-------------|
| **Canvas Size** | 90% × 85% | Relative to container |
| **Unit Size** | 10px | Snake segments and food size |
| **Initial Snake Length** | 5 segments | Starting snake size |
| **Game Speed** | 75ms/frame | Refresh rate |

### 🔄 Core Game Loop (`nextTick()`)
1. **Clear Board** → Remove previous frame
2. **Draw Food** → Render food at current position
3. **Move Snake** → Update snake position
4. **Draw Snake** → Render snake segments
5. **Check Game Over** → Validate game state
6. **Recursive Call** → Continue the loop

### 🐍 Snake Movement System
- **Velocity Control**: `xVelocity` and `yVelocity` variables
- **Direction Lock**: Prevents reverse direction movement
- **Growth Logic**: Snake grows when food is consumed
- **Collision Detection**: Checks boundaries and self-collision

### 🍎 Food Generation Algorithm
- **Random Positioning**: Within canvas boundaries
- **Grid Alignment**: Aligned to unit grid system
- **Collision Avoidance**: Ensures food doesn't spawn on snake

---

## 🎨 Styling

### 🎨 Color Scheme
| Element | Color Code | Description |
|---------|------------|-------------|
| **Background** | `#010409` | Main container background |
| **Game Area** | `#151B23` | Canvas and score card background |
| **Snake** | `lightgreen` | Snake segments color |
| **Food** | `red` | Food color |
| **Borders** | `#3D444D` | Border and button colors |
| **Text** | `#F0F6FC` | Score and UI text |
| **Accent** | `#29903B` | Buttons and highlights |

### 🔤 Typography
- **Main UI**: Poppins (modern, clean)
- **Game Over**: MV Boli (decorative, handwritten style)

---

## 🔧 Customization

### 🎨 Colors
```javascript
// Modify these variables in index.js
const snakeColor = "lightgreen";    // Snake segments
const foodColor = "red";            // Food color
const boardBackground = "#151B23";  // Game area background
```

### ⚙️ Game Settings
```javascript
// Adjust game parameters
const unitSize = 10;                // Size of game units
// setTimeout delay in nextTick()   // Game speed (lower = faster)
```

### 🎭 UI Customization
```css
/* Modify these classes in style.css */
.score {
    font-size: 4em;               /* Score display size */
    color: #F0F6FC;               /* Score text color */
}

.ground {
    background-color: #151B23;    /* Game area background */
    border: 1px solid #3D444D;    /* Game area border */
}
```

---

## 🐛 Known Issues

- ⚠️ **Font Dependency**: Game over text requires MV Boli font (Windows-specific)
- ⚠️ **Pause Button**: Present in UI but not functional
- ⚠️ **Mobile Support**: Arrow key controls not mobile-friendly

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request

### 💡 Ideas for Contribution
- Add mobile touch controls
- Implement pause functionality
- Add high score persistence
- Create different difficulty levels
- Add sound effects

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What does MIT License mean?
- ✅ **Commercial use allowed**
- ✅ **Modification allowed**
- ✅ **Distribution allowed**
- ✅ **Private use allowed**
- ⚠️ **Must include license and copyright**
- ❌ **No warranty provided**

---

<div align="center">
  <h3>🎮 Ready to Play?</h3>
  <p>Download the game and start playing now!</p>
  <p><strong>Happy Gaming! 🐍</strong></p>
</div>