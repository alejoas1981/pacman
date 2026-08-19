/**
 * @fileoverview Утилиты для игры Pacman
 * @author Savchenko Aleksey <alejoas1981@gmail.com>
 */

import { CELL_SIZE, MAP_LAYOUT, CELL_TYPES } from './config.js';

/**
 * Проверяет, является ли клетка стеной
 * @param {number} x - Координата X клетки
 * @param {number} y - Координата Y клетки
 * @returns {boolean} True если клетка является стеной
 */
export function isWall(x, y) {
  const gridX = Math.floor(x / CELL_SIZE);
  const gridY = Math.floor(y / CELL_SIZE);
  
  if (gridY < 0 || gridY >= MAP_LAYOUT.length) return true;
  if (gridX < 0 || gridX >= MAP_LAYOUT[0].length) return false;
  
  return MAP_LAYOUT[gridY][gridX] === CELL_TYPES.WALL;
}

/**
 * Проверяет коллизию со стенами
 * @param {number} x - Координата X
 * @param {number} y - Координата Y
 * @param {number} size - Размер объекта
 * @returns {boolean} True если есть коллизия
 */
export function checkWallCollision(x, y, size = CELL_SIZE - 2) {
  const margin = 2;
  const points = [
    { x: x + margin, y: y + margin },
    { x: x + size - margin, y: y + margin },
    { x: x + margin, y: y + size - margin },
    { x: x + size - margin, y: y + size - margin }
  ];
  
  return points.some(point => isWall(point.x, point.y));
}

/**
 * Преобразует пиксели в координаты сетки
 * @param {number} pixel - Позиция в пикселях
 * @returns {number} Координата в сетке
 */
export function pixelToGrid(pixel) {
  return Math.floor(pixel / CELL_SIZE);
}

/**
 * Преобразует координаты сетки в пиксели
 * @param {number} grid - Координата в сетке
 * @returns {number} Позиция в пикселях
 */
export function gridToPixel(grid) {
  return grid * CELL_SIZE;
}

/**
 * Вычисляет расстояние между точками
 * @param {number} x1 - X первой точки
 * @param {number} y1 - Y первой точки
 * @param {number} x2 - X второй точки
 * @param {number} y2 - Y второй точки
 * @returns {number} Расстояние
 */
export function distance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}
