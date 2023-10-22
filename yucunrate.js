function showcun() {
    document.getElementById("time").innerHTML = `
        <option value="cun">活期存款</option>
        <option value="cun">三个月</option>
        <option value="cun">半年</option>
        <option value="cun">一年</option>
        <option value="cun">二年</option>
        <option value="cun">三年</option>
        <option value="cun">五年</option>
    `;
}

function showdai() {
    document.getElementById("time").innerHTML = `
        <option value="dai">六个月</option>
        <option value="dai">一年</option>
        <option value="dai">一至三年</option>
        <option value="dai">三至五年</option>
        <option value="dai">五年</option>
    `;
}

var flag = true;
function calculate() {
    var moneyValue = document.getElementById("money").value;
    var timeValue = document.getElementById("time").value;
    console.log(moneyValue, '66666');
    fetch('http://127.0.0.1:80/cunkuan/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                code: moneyValue,
                time: timeValue
            }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('lixi').value = data.frontend_data;
        console.log(document.getElementById('lixi').value, '88888');
       
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

