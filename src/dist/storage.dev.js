"use strict";

// Зберігаємо дані у localStorage
function saveDataToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
} // Отримуємо дані з localStorage


function getDataFromLocalStorage(key) {
  var data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
} // Очищаємо дані у localStorage


function clearLocalStorage(key) {
  localStorage.removeItem(key);
}
//# sourceMappingURL=storage.dev.js.map
