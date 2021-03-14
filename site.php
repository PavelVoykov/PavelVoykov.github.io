<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<style>
    body{
        background-image: url("https://PavelVoykov.github.io/ezgif.com-gif-maker (7).gif");
    }
    #texts{
        text-align: center;
        font-family: "Freestyle Script"; 
        color: white;
    }
    #links{
        text-align: center;
        font-family: "Freestyle Script"; 
        font-weight: bold;
        font-size: 25px;
    }

    #inputM{
        margin-left: 40%; 
        width: 20%;
        height: 30px;
        font-size: 200%;
        border:1px solid black;
        background-color: white;
        font-family: "Freestyle Script"; 
    }
    #submitt{
    margin-left: 40%;
    background-color: rgb(194, 51, 51); 
    width: 20.5%;
    height: 40px;
    font-size: 200%;
    font-family: "Freestyle Script";    
    font-weight: bold;
    color: rgb(255, 255, 255);
    border:none;
    }
</style>
<body>
    <h1 id = "texts">Is that you love?</h1>
    
    <form action = "site.php" method = "post">
    <input id = "inputM" type = "text" name = "answer" autocomplete="off">
    <br>
    <br>
    <input id = "submitt" type="submit">
    </form>

    <?php
        $ans =$_POST["answer"];
        if($ans == "DariaVoykova"){
            echo "<a id='links' href='https://pavelvoykov.github.io/spaceGame/index.html'>Space Game</a>";
            echo "<br>";
            echo "<a id='links' href='https://pavelvoykov.github.io/Ping-Pong/start.html'>Ping-Pong</a>";
        } elseif($ans == "Darir"){
            echo "<p id = 'texts' style='font-size:150%'>Ha Ha Ha, \"Darir\"! Nice try! Ha Ha Ha</p>";
        }
        $ans = "Else";
    ?>
    
</body>
</html>