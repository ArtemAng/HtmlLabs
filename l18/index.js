let time = 0;
let interval = null;
let v = null;

function f() {
    document.body.removeChild(document.querySelector('#block'));
    const block = document.createElement('img');
    block.setAttribute('src', 'https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/124151/5ghBjz2RU8slauOb5QTCQ.jpg');
    block.classList.add('b');
    document.body.appendChild(block);
}

document.querySelector('[name=start]').onClick = ()=>{
    if (!time) {
        time = parseFloat(document.querySelector('[name=start]').value);
        if (!isNaN(time)) {
            let block = document.querySelector('#block');
            if (!block) {
                block= document.createElement('input');
                block.setAttribute('type', 'text');
                block.setAttribute('id', 'block');
                block.classList.add('a');
                document.appendChild(block);
            }
            block.value = (time < 10? '0' + time : time + ":00");
        }
    }
    v = setTimeout(F, (time+1) * 1000);
    interval = setInterval(()=>{
        if (time > 0) {
            --time;
            if (time < 10) {
                block.value= '0' + time + ':00';
            }
            else block.value = time + ':00';
        }
        else clearInterval(interval);
    }, 1000);
}

document.querySelector('[name=stop]').onClick = ()=>{
    clearTimeout(v);
    clearInterval(interval);
}