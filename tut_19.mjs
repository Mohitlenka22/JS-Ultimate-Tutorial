var ans, elem=document.createElement("div");
document.body.append(elem);
const func = () => {
  navigator.getBattery().then((battery) => {
    ans = battery.level * 100;
    elem.innerHTML = ans;
    console.log(battery.charging)
  });
};
setInterval(func, 1000);

