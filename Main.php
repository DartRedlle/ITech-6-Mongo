<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="ajax.js"></script>

    <style>
        table, th, td {
            border: 2px solid black;
        }
    </style>
</head>
<body>
    <br>
    <!-- Task 1 --> 
    Сообщения от выбранного клиента:<br>
    <select id = "Login_select">
        <?php
            include "db.php";            
            $collection = $DB->UsersInfo;           
            $result = $collection->find([],['projection'=>['_id'=>0,'Login'=>1]]);          
            echo '<option selected = "selected">Выберите пользователя</option>';
            foreach($result as $Login)
            {
                echo "<option>{$Login['Login']}</option>";
            }
            ?>
    </select>
    
    <br>
    From DB:
    <input type="button" value="Send1" onclick="ClientMessages()">
    <br>
    From LocalStorage:
    <input type="button" value="Send2" onclick="ClientMessagesLocal()"><br><br> 
    <div id="Messages-PlaceHolder"></div>
    <div id="LS"></div>
    <input type="button" value="clear" onclick="ClearLS()">     
    <br><br>

    <!-- Task 2 -->
     Общий входящий и исходящий траффик:<br>
    <input type="button" value="Send" onclick="TotalIOTraffic()"><br><br>
    <div id="InOutTraffic"></div>
    <br><br>

    <!-- Task 3 -->
    Список клиентов с отрицательным балансом:<br>
    <input type="button" value="Send" onclick="MinusBalance()"><br><br>
    <div id="MinusBalance"></div> 
</body>
</html>