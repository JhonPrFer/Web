let main = document.getElementsByTagName('main')[0]

 let pessoas = [
    {
        nome: 'Alexandre Shyjada Sousa',
        totaldepaes: 50,
        posicao: '0'
    },
    {
        nome: 'Matheus Novais',
        totaldepaes: 50,
        posicao: '1'
    },
    {
        nome: 'Victor Peixoto',
        totaldepaes: 50,
        posicao: '2'
    },
    {
        nome: 'Kennedy Anderson',
        totaldepaes: 50,
        posicao: '3'
    },
    {
        nome: 'João Victor',
        totaldepaes: 50,
        posicao: '4'
    },
    {
        nome: 'Thales Brito',
        totaldepaes: 50,
        posicao: '5'
    },
    {
        nome: 'Ivens Joris',
        totaldepaes: 50,
        posicao: '6'
    },
]
 
 function renderlista(){
    let totalLista = 0, totalPaes = 0
    
    lista.innerHTML = ''
    pessoas.forEach((pessoa_lista)=>{
        totalLista++
        totalPaes+=Number(pessoa_lista.totaldepaes)
        pessoa_lista.posicao = pessoas.indexOf(pessoa_lista)
        lista.innerHTML+=`
        <div class="pessoa_lista">
                    <div class="texto">
                    <h3>${pessoa_lista.nome}</h3>
                    <div>
                        <p><span>Total de pães:</span> ${pessoa_lista.totaldepaes} pães</p>
                        <p><span>Total a pagar:</span> ${(pessoa_lista.totaldepaes/2).toLocaleString('pr-br',{style:'currency',currency:'BRL'})}</p>
                    </div>
                </div>
                <img src="images/icon4.svg" id="excluir" onclick="excluir(${pessoa_lista.posicao})" alt="excluir">
            </div>`
        })
        document.getElementById('pessoas').innerHTML = totalLista;
        document.getElementById('paes').innerHTML = totalPaes;
        let entrada = totalPaes/2;
        document.getElementById('entrada').innerHTML = entrada.toLocaleString('pr-br',{style:'currency',currency:'BRL'})
} 


let lista

function telahome() {
    main.innerHTML=
    `
    <header>
        <img src="images/Logo.svg" alt="logo la padarie">
        <section class="cards">
            <div class="card">
                <div class="card_texto">
                    <p>Pessoas na fila</p>
                    <img src="images/icon1.svg" alt="icon">
                </div>
                <p id="pessoas"></p>
            </div>
            <div class="card">
                <div class="card_texto">
                    <p>Pães vendidos</p>
                    <img src="images/icon2.svg" alt="icon">
                </div>
                <p id="paes"></p>
            </div>
            <div class="card entrada">
                <div class="card_texto">
                    <p>Entrada</p>
                    <img src="images/icon3.svg" alt="icon">
                </div>
                <p id="entrada"></p>
            </div>
        </section>
    </header>
    <section class="container">
        <div class="conteudo">
            <h3 class="subtitulo" id="adicionar">+ Adicionar pessoa a fila</h3>
            <section class="lista" id="lista">
            </section>
        </div>
        </section>
        <footer>
            <p>Com 💛 Info Jr UFBA 2021</p>
        </footer>

    <div id="modal_adicionar" class="modal_fila">
        <div class="modal">
            <h3 class="subtitulo">Adicionar pessoa a fila</h3>
            <form>
                <input type="text" class="input" id="nome" placeholder="Nome completo do cliente">
                <input type="number" class="input" id="quantidade"placeholder="Total de pães:">
            </form>
            <div class="btns">
                <button id="btn_enviar">Enviar</button>
                <button type="reset" id="btn_cancelar">Cancelar</button>
            </div>
        </div>
    </div>
    `
    lista = document.getElementsByClassName('lista')[0]
    renderlista()
}

telahome()


document.getElementById('btn_enviar').addEventListener('click', () =>{
    let nomepessoa = document.getElementById('nome')
    let quantidadepaes = document.getElementById('quantidade')
    if(nomepessoa.value != '' && quantidadepaes.value > 0){
        pessoas.push(
            {
                nome: nomepessoa.value,
                totaldepaes: quantidadepaes.value,
                posicao: pessoas.length,
            }
        )
    }
    renderlista()
})
function excluir(posicao){
    pessoas .splice(posicao,1)
    renderlista()
}


const abrirmodal = document.getElementById('adicionar');
const cancelar = document.getElementById('btn_cancelar');
const enviar = document.getElementById('btn_enviar');
const inputnome = document.getElementById('nome');
const inputpaes = document.getElementById('quantidade')
function limparcampos(){
    inputnome.value ='';
    inputpaes.value = '';
}

function modal(){
    const modal = document.getElementById('modal_adicionar');
    if(modal.classList.contains('active')){
        limparcampos();
    }
    modal.classList.toggle('active');
}

abrirmodal.addEventListener('click', modal);
cancelar.addEventListener('click',modal);
enviar.addEventListener('click',modal);