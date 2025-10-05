async function updateBatteryInfo(battery) {
  function refresh() {
    const level = (battery.level * 100).toFixed(3);
    document.getElementById("battery-percent").textContent = `${level}%`;
    document.getElementById("battery-fill").style.width = `${level}%`;
  }

  refresh();
  battery.addEventListener("levelchange", refresh);
}

if ('getBattery' in navigator) {
  navigator.getBattery().then(updateBatteryInfo);
} else {
  document.getElementById("battery-percent").textContent = "Battery API not supported";
}