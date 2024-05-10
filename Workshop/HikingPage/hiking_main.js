document.addEventListener("DOMContentLoaded", ()=>{

function showNonImageDetails(hike) {
    details.innerHTML = ` 
    <h1>${hike.name}</h1>
    <p>${hike.description}</p>
    <table><tr><th>Length:</th><th>Difficulty:</th></tr>
    <tr><td>${hike.length}</td><td>${hike.difficulty}</td></td></table><p> ID: ${hike.id}</p>
    `
}
function showImage(imageName, title) {
    details.innerHTML += `<h2>${title}</h2>
        <img src="../Workshop Images/${imageName}" alt="land">`

}
function showHikeDetails(hike) {
    showNonImageDetails(hike);
    showImage(hike.scenicImage, "Scenic Image");
    showImage(hike.trailMapImage, "Trail Map");
}
function onHikeChange() {
    for (h of hikes) {
        if (h.id == hikeElement.value) {
            showHikeDetails(h);
        }
    }
}
for (h of hikes) {
    hikeElement.innerHTML += `<option value="${h.id}">${h.name}</option>`
}

hikeElement.addEventListener("change", onHikeChange);


});
