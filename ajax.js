function ClientMessages()
{
    let Login = document.getElementById('Login_select').value;

    let PH = document.getElementById('Messages-PlaceHolder');

    var ajax = new XMLHttpRequest();

    PH.innerHTML = ""

    ajax.onload = () => {
        let Messages = JSON.parse(ajax.responseText);

        let table = document.createElement("table");

        let tr = document.createElement("tr");

        let th = document.createElement("th");
        th.innerText = Login;
        tr.appendChild(th);
        table.appendChild(tr);

        let td;

        Messages.forEach(Message => {
            tr = document.createElement("tr");
            td = document.createElement("td");
            td.innerText = Message;
            tr.appendChild(td);
            table.appendChild(tr);
        });

        PH.appendChild(table);
        
        let key = Login;
        localStorage.setItem(key, ajax.responseText);
    }

    ajax.open('GET', `Messages.php?Login=${Login}`);
    ajax.send();
}
//////////////////////////////////////////////////


function ClientMessagesLocal()
{
    let PH = document.getElementById('LS');
    PH.innerHTML = ""

    let key = document.getElementById('Login_select').value;
    let data = localStorage.getItem(key);
    
    if(data===null)
    {
        alert('No stored data for this key!')
        return;
    }
    let Messages = JSON.parse(data);
       
        let table = document.createElement("table");

        let tr = document.createElement("tr");

        let th = document.createElement("th");
        let Login = document.getElementById('Login_select').value;
        th.innerText = Login;
        tr.appendChild(th);
        table.appendChild(tr);

        let td;
        Messages.forEach(Message => {
            tr = document.createElement("tr");
            td = document.createElement("td");
            td.innerText = Message;
            tr.appendChild(td);
            table.appendChild(tr);
        });

        PH.appendChild(table);
}
//////////////////////////
function ClearLS()
{
    localStorage.clear();
}

///////////////////////////////
function MinusBalance()
{
    let PH = document.getElementById('MinusBalance');
    PH.innerHTML = ""

    var ajax = new XMLHttpRequest();
    ajax.onload = () => {
        let Balances = JSON.parse(ajax.responseText);

        let table = document.createElement("table");

        let tr;
        let td;
        let td1;
        Balances.forEach(Balance => {
            tr = document.createElement("tr");
            td = document.createElement("td");
            td.innerText=Balance.Login;
            tr.appendChild(td);
            td1 = document.createElement("td");
            td1.innerText = Balance.Balance;
            tr.appendChild(td1);
            table.appendChild(tr);
        });

        PH.appendChild(table);
    }
    ajax.open('GET', `MinusBalance.php`);
    ajax.send();   
}

///////////////////////////////////

function TotalIOTraffic()
{
    var ajax = new XMLHttpRequest();

    let PH = document.getElementById('InOutTraffic');
    PH.innerHTML = "";

    ajax.onload = () => {
        PH.innerHTML = ajax.responseText;
    }

    ajax.open('GET', 'InOutTraffic.php');
    ajax.send();
}