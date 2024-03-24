document.getElementById('time').innerHTML = new Date().toLocaleDateString();

function showhtml() {
    document.getElementById('coco').src = '/과제/img/코믹.png';
    document.getElementById('desc').innerHTML = '<b>만드는 법</b>';
    }
function hide() {
    document.getElementById('coco').src = '';
    document.getElementById('desc').innerHTML = '';
}
function go(){
    window.location.href = 'https://www.youtube.com/watch?v=sxGd2PPJBws';
}