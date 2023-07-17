const delayedColorChange = async (color, delay) =>{
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      document.body.style.backgroundColor = color;
      res()
    }, delay)
  })
}

async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("purple", 1000);
  await delayedColorChange("violet", 1000);
}

rainbow();
