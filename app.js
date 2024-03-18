const URL = "http://api.weatherapi.com/v1/current.json?key=4d116a76afc14faa8bc172056241703&q=";
const city = document.querySelector("#city");
const btn = document.querySelector("#search");
const reset = document.querySelector("#reset");
const container = document.querySelector(".containerDisplay");
const temp = document.querySelector("#display");

const getData = async () => {
    let res = await fetch(`${URL}${city.value}`);
    let data = await res.json();
    console.log(data.current.temp_c);
    temp.innerHTML = `The current temp of ${city.value} is ${data.current.temp_c} degC`;
    container.style.visibility = "visible";
    container.style.zIndex = "1";

}

const Reset = () => {
    container.style.visibility = "hidden";
    container.style.zIndex = "-1";
    console.clear();
    city.value = "";
}

btn.addEventListener("click",getData);
reset.addEventListener("click",Reset);
