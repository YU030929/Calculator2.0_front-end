function cal(num) {
    var n = document.getElementById(num)
    if (n === null) return
    document.getElementById("Screen").value += n.value;
}
 
var flag = true;
function equal() {
    var value = document.getElementById("Screen").value;
    console.log(value, '66666');
    fetch('http://127.0.0.1:80/cun/', {
            method: 'POST',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                code: value,
            }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('Screen').value = data.frontend_data;
        console.log(document.getElementById('Screen').value, '88888');
       
    })
    .catch(error => {
        onsole.error('Error:', error);
    });

    if (value.indexOf('^') != -1) {
        value = this.pow(value, value.indexOf('^'))
    }
    // 点击'='切换分数/小数
    if (!flag) {
        document.getElementById("Screen").value=this.decimalToFractional(eval(value))
        flag = true
    } 
    else {
        document.getElementById("Screen").value=this.decimalToFractional(eval(value))
        flag = false
    }

}


function back() {
    var n = document.getElementById("Screen");
    n.value = n.value.substring(0, n.value.length - 1);
}
 
function clearNum() {
    document.getElementById("Screen").value = "";
}
 
function sin() {
    var value = document.getElementById("Screen").value
    const angleInRadians = value * (Math.PI / 180);
    document.getElementById("Screen").value = Math.sin(angleInRadians);
}
function cos() {
    var value = document.getElementById("Screen").value
    const angleInRadians = value * (Math.PI / 180);
    document.getElementById("Screen").value = Math.cos(angleInRadians);
}
function tan() {
    var value = document.getElementById("Screen").value
    const angleInRadians = value * (Math.PI / 180);
    document.getElementById("Screen").value = Math.tan(angleInRadians);
}
function lg() {
    var value = document.getElementById("Screen").value
    document.getElementById("Screen").value = Math.log(value) / Math.log(10);
}
function ln() {
    document.getElementById("Screen").value = Math.log(document.getElementById("Screen").value);
}
function sqrt() {
    document.getElementById("Screen").value = Math.sqrt(document.getElementById("Screen").value);
}
function cbrt() {
    document.getElementById("Screen").value = Math.cbrt(document.getElementById("Screen").value)
}
function square() {
    document.getElementById("Screen").value = Math.pow(document.getElementById("Screen").value, 2);
}
function cube() {
    document.getElementById("Screen").value = Math.pow(document.getElementById("Screen").value, 3);
}
function pow(value, pos) {
    if (pos != -1) {
        let arr = value.split("")
        let powVal = Math.pow(arr[pos - 1], arr[pos + 1])
        arr.splice(pos - 1, 3, powVal)
        value = arr.join("")
        return value
    }
}
 
// 阶乘
function factorial() {
    function func(num) {
        if (num == 1) {
            console.log(1);
            return 1;
        } else if (num == 0) {
            console.log(0);
            return 1;
        } else {
            return num * func(num - 1)
        }
    }
    document.getElementById("Screen").value = func(document.getElementById("Screen").value)
}
 
// 小数化为分数
function decimalToFractional(decimal) {
    if (decimal % 1 === 0) {
        return decimal
    }
    const formatDecimal = decimal.toFixed(2)
    let denominator = 100
    let numerator = formatDecimal * 100
    let bigger = 0
    function recursion() {
        bigger = denominator > numerator ? denominator : numerator
        for (let i = bigger; i > 1; i--) {
            if (
                Number.isInteger(numerator / i) && Number.isInteger(denominator / i)) {
                numerator = numerator / i
                denominator = denominator / i
                recursion()
            }
        }
    }
    recursion()
    return `${numerator} / ${denominator}`
}

// 读取历史记录
function Ans() {
    var value = document.getElementById("Screen").value;
    console.log(value, '66666');
    fetch('http://127.0.0.1:80/qu/', {
            method: 'POST',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                code: value,
            }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.frontend_data1,'456')
        for (let i = 0; i < data.frontend_data1.length; i++) {
            document.getElementById('Screen').value += String(data.frontend_data1[i].expression) +'='+ String(data.frontend_data1[i].result)+'\t';
        }
        console.log(document.getElementById('Screen').value, '88888');
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

