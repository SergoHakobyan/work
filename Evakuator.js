let arrowLeft = document.querySelector('.arrow_left');
let arrowRight = document.querySelector('.arrow_right');
let imgAll = document.querySelectorAll('.slider img');

let offset = 0;

arrowLeft.addEventListener('click', function () {
    imgAll.forEach(function (item) {
        offset = offset + (item.offsetWidth + 10) / imgAll.length;
    });
    imgAll.forEach(function (item) {
        let s = item.getBoundingClientRect();
        let left = s.left
        console.log(left)
        if (left > item.offsetWidth * 4) {
            console.log(1);
        } else {
            item.style.left = `${offset}px`;
        }
    });
})

// arrowRight.addEventListener('click', function () {
//     imgAll.forEach(function (item) {
//         offset = offset + (item.offsetWidth + 10) / imgAll.length;
//     });
//     imgAll.forEach(function (item) {
//         item.style.left = `${offset}px`;
//     });
// })