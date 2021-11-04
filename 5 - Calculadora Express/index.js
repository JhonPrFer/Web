
const express = require("express");
const path = require("path")
const app = express();

app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 3000;

app.get("/adicionar/:numero1/:numero2",function(req,res){
    let num1 = Number(req.params.numero1);
    let num2 = Number(req.params.numero2);
    let resultado = num1 + num2;
res.send(`<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500;700&display=swap" rel="stylesheet">
<title>Document</title>
<style>
    *{
        margin: 0;
        padding: 0;
        border: none;
        text-decoration: none;
    }
    body div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 15px;
        align-items: center;
        height: 100vh;
        background-color: #640D14;
    }
    p{
        font-size: 2.5em;
        font-weight: 700;
        font-family: 'Montserrat Alternates', sans-serif;
        color: #F5E0B7;
    }
    button{
        padding: 5px;
        width: 150px;
        border-radius: 3px;
        background-color: #F5E0B7;
        font-size: 1em;
        font-weight: 700;
        font-family: 'Montserrat Alternates', sans-serif;
        color: #640D14;
        cursor: pointer;
        border: 1px solid #F5E0B7;
        transition: 0.5s;
    }

    button:hover{
        background-color: #640D14;
        color: #F5E0B7;
        border: 1px solid #F5E0B7;
    }
</style>
</head><body><div><p>` + resultado + `</p>` + `<button onclick= "retorna()">Retornar</button></div> <script>function retorna(){
        window.location.href="http://localhost:3000/";
    }</script></body>`)
});
app.get("/subtrair/:numero1/:numero2",function(req,res){
    let num1 = Number(req.params.numero1);
    let num2 = Number(req.params.numero2);
    let resultado = num1 - num2;
    res.send(`<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500;700&display=swap" rel="stylesheet">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            border: none;
            text-decoration: none;
        }
        body div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 15px;
            align-items: center;
            height: 100vh;
            background-color: #640D14;
        }
        p{
            font-size: 2.5em;
            font-weight: 700;
            font-family: 'Montserrat Alternates', sans-serif;
            color: #F5E0B7;
        }
        button{
            padding: 5px;
            width: 150px;
            border-radius: 3px;
            background-color: #F5E0B7;
            font-size: 1em;
            font-weight: 700;
            font-family: 'Montserrat Alternates', sans-serif;
            color: #640D14;
            cursor: pointer;
            border: 1px solid #F5E0B7;
            transition: 0.5s;
        }

        button:hover{
            background-color: #640D14;
            color: #F5E0B7;
            border: 1px solid #F5E0B7;
        }
    </style>
</head><body><div><p>` + resultado + `</p>` + `<button onclick= "retorna()">Retornar</button></div> <script>function retorna(){
        window.location.href="http://localhost:3000/";
    }</script></body>`)
});
app.get("/multiplicar/:numero1/:numero2",function(req,res){
    let num1 = Number(req.params.numero1);
    let num2 = Number(req.params.numero2);
    let resultado = num1 * num2;
    res.send(`<style>
    *{
        margin: 0;
        padding: 0;
        border: none;
        text-decoration: none;
    }
    body div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 15px;
        align-items: center;
        height: 100vh;
        background-color: #640D14;
    }
    p{
        font-size: 2.5em;
        font-weight: 700;
        font-family: 'Montserrat Alternates', sans-serif;
        color: #F5E0B7;
    }
    button{
        padding: 5px;
        width: 150px;
        border-radius: 3px;
        background-color: #F5E0B7;
        font-size: 1em;
        font-weight: 700;
        font-family: 'Montserrat Alternates', sans-serif;
        color: #640D14;
        cursor: pointer;
        border: 1px solid #F5E0B7;
        transition: 0.5s;
    }

    button:hover{
        background-color: #640D14;
        color: #F5E0B7;
        border: 1px solid #F5E0B7;
    }
</style>
</head><body><div><p>` + resultado + `</p>` + `<button onclick= "retorna()">Retornar</button></div> <script>function retorna(){
        window.location.href="http://localhost:3000/";
    }</script></body>`)
});
app.get("/dividir/:numero1/:numero2",function(req,res){
    let num1 = Number(req.params.numero1);
    let num2 = Number(req.params.numero2);
    let resultado = num1 / num2;
    res.send(`<style>
    *{
        margin: 0;
        padding: 0;
        border: none;
        text-decoration: none;
    }
    body div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 15px;
        align-items: center;
        height: 100vh;
        background-color: #640D14;
    }
    p{
        font-size: 2.5em;
        font-weight: 700;
        font-family: 'Montserrat Alternates', sans-serif;
        color: #F5E0B7;
    }
    button{
        padding: 5px;
        width: 150px;
        border-radius: 3px;
        background-color: #F5E0B7;
        font-size: 1em;
        font-weight: 700;
        font-family: 'Montserrat Alternates', sans-serif;
        color: #640D14;
        cursor: pointer;
        border: 1px solid #F5E0B7;
        transition: 0.5s;
    }

    button:hover{
        background-color: #640D14;
        color: #F5E0B7;
        border: 1px solid #F5E0B7;
    }
</style>
</head><body><div><p>` + resultado + `</p>` + `<button onclick= "retorna()">Retornar</button></div> <script>function retorna(){
        window.location.href="http://localhost:3000/";
    }</script></body>`)
});

app.use(function(req,res,next){
    res.status(404).send(`<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500;700&display=swap" rel="stylesheet">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            border: none;
            text-decoration: none;
        }

        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 15px;
            height: 100vh;
            background-color: #640D14;
        }

        .erro{
            font-size: 70px;
            font-weight: 700;
            font-family: 'Montserrat Alternates' , sans-serif;
            color: #F5E0B7;
        }

        p{
            font-size: 1.5em;
            font-weight: 700;
            font-family: 'Montserrat Alternates' , sans-serif;
            color: #F5E0B7;
        }

        button{
            padding: 5px 30px;
            border-radius: 3px;
            background-color: #F5E0B7;
            font-size: 1em;
            font-weight: 700;
            font-family: 'Montserrat Alternates' , sans-serif;
            color: #640D14;
            border: 1px solid #F5E0B7;
            transition: 0.5s;
            cursor: pointer;
        }

        button:hover{
            background-color: #640D14;
            color: #F5E0B7;
            border: 1px solid #F5E0B7;
        }
    </style>
</head><body><div><p class="erro">404</p><p>Rota inexistente</p><button onclick= "retorna()">Retornar</button></div><script>function retorna(){
        window.location.href="http://localhost:3000/";
    }</script></body>`)
});

app.listen(PORT,()=> console.log(`server na porta ${PORT}`));

