const eventData = new Date("Aug 29, 2023 19:00:00");
const timeStampEvent = eventData.getTime();

const contaHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const eventDistance = timeStampEvent - timeStampAtual;

    const diasAteEvento = Math.floor(eventDistance / (1000 * 60 * 60 * 24));
    const horasAteEvento = Math.floor((eventDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosAteEvento = Math.floor((eventDistance % (1000 * 60 * 60)) / (1000 * 60));
    const segundosAteEvento = Math.floor((eventDistance % (1000 * 60)) / 1000);

    console.log(diasAteEvento);
    console.log(horasAteEvento);
    console.log(minutosAteEvento);
    console.log(segundosAteEvento);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (eventDistance < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = "EVENTO JÁ INICIADO";
    }
}, 1000);
