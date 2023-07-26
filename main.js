var nariz_x = 0
var nariz_y = 0
ojoizquierdo_x = 0
ojoizquierdo_y = 0
ojoderecho_x = 0
ojoderecho_y = 0
numeroAlAzar = 0
nombre =""
function setup() {
    canvas = createCanvas(290, 335)
    background("rgb(0, 225, 255)")
    canvas.parent("#celular")
    video = createCapture(VIDEO)
    video.size(290, 335)
    video.hide()
    pose = ml5.poseNet(video, listo)
    pose.on("pose", encontrado)
}
function draw() {
    image(video, 0, 0, 290, 335)
    distancia = ojoizquierdo_x - ojoderecho_x
    switch (numeroAlAzar) {
        case 1:
            tamaño = distancia * 5
            image(creeper, nariz_x - (tamaño / 2), nariz_y - ((tamaño / 2) + 15), tamaño, tamaño)
            nombre="creeper.png"
            break;
        case 2:
            image(abeja, ojoizquierdo_x, ojoizquierdo_y - 100, 50, 50)
            image(abeja, ojoderecho_x - 50, ojoderecho_y - 150, 50, 50)
            nombre="abeja.png"
            break;
        case 3:
            tamaño = distancia * 3
            image(gato, nariz_x - (tamaño / 2), nariz_y - ((tamaño / 2) + 120), tamaño, tamaño)
            nombre="michi.png"
            break;
        default:nombre="foto.png"
            break;
    }
}
function listo() {
    console.log("bienvenido a snapchat mejorado")
}
function encontrado(result) {
    if (result.length > 0) {
        //console.clear()
        //console.log(result)
        nariz_x = result[0].pose.nose.x
        nariz_y = result[0].pose.nose.y
        ojoizquierdo_x = result[0].pose.leftEye.x
        ojoizquierdo_y = result[0].pose.leftEye.y
        ojoderecho_x = result[0].pose.rightEye.x
        ojoderecho_y = result[0].pose.rightEye.y
    }
}
function preload() {
    creeper = loadImage("minecraft-creeper.png")
    abeja = loadImage("abeja.png")
    gato = loadImage("gato_de_maicra.webp")
}
function captura() {
    save(nombre)
}
function filtros() {
    numeroAlAzar++
    if (numeroAlAzar > 3) {
        numeroAlAzar = 1
    }
    console.log(numeroAlAzar)
}