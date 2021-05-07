setInterval(() => {
    const today = new Date();
    document.querySelector('.hours').innerHTML = today.getHours();
    document.querySelector('.minuites').innerHTML = today.getMinutes();
    document.querySelector('.seconds').innerHTML = today.getSeconds();
}, 1000)
