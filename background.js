

let lastTime

function update(time)
{
    if(lastTime != null)
    {
        const delta = time - lastTime
        const hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"))
        document.documentElement.style.setProperty("color", "red")
    }

    lastTime = time
}


window.requestAnimationFrame(update)