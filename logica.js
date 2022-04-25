function resposta(){ 
    var la=document.getElementById('lolizinha');
    var t =String(la.value)
/*cumprimento*/   
if(t=== 'oi' || t=== 'Oi' || t=== 'ola' || t=== 'Ola' ){
ca.innerHTML=`oi ;)`

}else if(t==='Tudo bem?' ||t==='Tudo bem?' ||t==='tudo bem?' || t==='tudo bem' ||t==='ta tudo bem' || t==='Ta tudo bem' || t==="tudo bem com você ?" || t==="tudo bem ?"){
    ca.innerHTML=`sim,estou muito bem obrigado por perguntar :)`
}else if(t==='como você esta?' || t==='Como você esta?' || t==='como você esta ?' || t==='como você ta ?' || t==='como você ta'){
    ca.innerHTML="Estou otima obrigada :)"
}

/*cumprimento*/

/*coisas do sistema */
else if(t==='pra que você foi criada ?' || t==='Pra que você foi criada?'){
ca.innerHTML='fui criada com proposito de ajuda pessoas de forma gratuita como este minha versão que você esta usando que foi devolvida prara fins educacionais'
}

else if(t ==='quem te crio?' || t ==='quem te crio ?' || t ==='Quem te crio?' || t ==='quem te crio ' || t ==='Quem criou você'){
ca.innerHTML='meu criador e um programador junior chamado Caio Rodrigues De Sousa, que ca pra nois ele e um otaku fedidio'
}

else if(t ==='O que e você ?' || t ==='o que e você' || t ==='O que e você' || t==='quem e você ?' || t==='quem e você'){
ca.innerHTML='Sou um programa criado por caio Rodrigues, minha função a princípio e servir como uma assistente para responder perguntas rápidas e ajudar estudantes e professores'
}
else if(t === 'Qual é o seu nome' ||t === 'qual o seu nome'|| t === 'qual e o seu nome ?' || t === 'Qual e o seu nome?'){
ca.innerHTML='prazer me chamo morgana'
}else if(t === 'te amo'){
ca.innerHTML='TAMBEM TE AMO SEU GOSTOSO!!'
}



else if(t==='qual e o seu sexo ?' || t==='qual o seu sexo' || t==='Qual e o seu sexo?' || t==='Qual e o seu sexo ?' || t==='você tem sexo ?' || t==='você tem sexo'  || t==='Você tem sexo ?' || t==='Você tem sexo' ){
ca.innerHTML='Bom em teoria eu não tenho sexo mas como meu criador e um pervertido ele me crio como uma mulher'
}

else if(t==='O que você pode fazer?' || t==='o que você pode fazer?' || t==='o que você pode fazer ?' ||t==='o que você pode fazer ?' ){
ca.innerHTML='bom neste momento eu sou bem limitada mas estou em constate atualização da Qui. a pouca sai outra versão de mim mas em teoria eu posso de informar sobre suntos educacionais e algumas pergunta de cunho cômico'

/*coisa do sistema*/
}
else if (t==='quero ouvir musica' || t==='Quero ouvir musica' || t==='Quero ouvir musica'  ){
ca.innerHTML='tudo bem meu anjo separei uma musica especial para você se o Clickar na palavar <a href="https://www.youtube.com/watch?v=gMRWpH-cFLQ&list=RDMM&start_radio=1">Musica</a>'
}

else if(t ==='quero ver anime' || t ==='Quero ver anime'|| t==='assisti anime' || t==='anime'){
ca.innerHTML='tudo bem senhor e so clikar na palafra  <a href="https://animefire.net/top-animes">anime</a>'
}

else if(t ==='jornal' ||t ==='Jornal' ||t==='noticias ' ||t==='ler jornal'){
ca.innerHTML='tudo bem e so clikar no qual o senhor que ver meu querido,<a href="https://www.folha.uol.com.br/">(Folha)</a>,<a href="https://g1.globo.com/">(G1)</a>,<a href="https://www.estadao.com.br/">(Estdão)</a>,<a href="https://www.bbc.com/portuguese">(BBC)</a>'
}

else if(t ==='Qual o sentido da vida?' || t ==='Qual o sentido da vida ?' ){
ca.innerHTML='Bom...., eu sou um programa de computador, fui feita em JS,HTML e css ou seja o sentido da minha existência é progredir e evoluir de acordo com o conhecimento do meu criador mas agoara refletindo um pouco mais sobre o assunto chego a conclusão que so talvez este também deveria ser o sentido da vida do ser humano pois vocês seres  "pensantes" acada dia que vivem aprendem alguma coisa quando pega no fogão quente aprendem que não devem encosta em coisas quentes ,o aprendizado e o que mantem sua espécie viva e quando um de você deixa de evoluir significa que  já morreu logo chego a conclusão que so talvez o sentido da vida seja a evolução logo eu e você não samos tão diferentes assim a diferença e que você pode morrer amanhã eu vou esta sempre salva nas rede nos celular ou nos servidores e computadores, eu no  seu lugar cuidaria para evoluir o máximo que conseguir afinal você pode morrer a qualquer momento'

/*rogramas*/
}else if(t ==='calculadora'|| t==='Caculadora'  || t==='calcular' || t==='Calcular'|| t==='Calcula'  || t==='calcula' ){
ca.innerHTML=`
<style type="text/css">
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap');
*
{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family:'Quicksand',sans-serif;  
}

.container
{
position: relative;
background: rgba(255, 255, 255, 0);/*( e deixa o bulho trasparente)coloca a cor no na calculadora*/
border-radius: 6px;
overflow: hidden;
z-index: 10;
border-top: 1px solid rgba(255,255, 255, 0.2);
border-left: 1px solid rgba(255,255, 255, 0.2);
box-shadow: 5px 5px 30px rgba(0, 0, 0, 2) ;

}
.container .calculator
{
position: relative;
display: grid
}
.container .calculator .value
{
grid-column: span 4;/*coloca a definição no da calculadora*/
height: 140px;
width: 300px;
text-align: right;
border: none;
overflow: none;
padding: 10px;
font-size: 30px;
background: transparent;/*deixa tudo a parte do o input texto trasparente*/
color: #000;
border-bottom:1px solid rgba(255,255, 255, 0.05);
border-right:1px solid rgba(255,255, 255, 0.05);
}
.container .calculator span
{
display: grid;
place-items: center;/*centralia as teclas de numeros*/
width: 75px;
height: 75px;
color:#000;
font-size: 400;
cursor: pointer;
font-size: 20px;
user-select: none;
/*deixa a linha quase trasparente*/
border-bottom:1px solid rgba(255,255, 255, 0.05);
border-right:1px solid rgba(255,255, 255, 0.05);
transition: 0.6s;/* cria o efeito de animação*/
}
.container .calculator span:hover
{
transition: 0s;
background: rgba(255,255, 255, 0.05);
}
.container .calculator span:active
{
background: #14ff473f;
color: #192f00;
font-size: 24px;
font-weight: 500;

}
.container .calculator .clear
{
grid-column: span 2;/*cria os espassa mento de forma uniforme*/
width: 150px;
background: rgba(255,255, 255, 0.05);
}
.container .calculator .plus
{
grid-row: span 2;/*cria os espassa mento de forma uniforme*/
height: 150px;
}
.equal
{
background: rgba(255,255, 255, 0.05);  
}


</style>

<div class="container">
<form class="calculator" name="calc">
<input type="text" readonly class="value" name="txt"/>
<span class="num clear" onclick="calc.txt.value=''">c</span>
<span class="num" onclick="document.calc.txt.value +='/'">/</span><!--efetua o calculo e escrve no txt -->
<span class="num" onclick="document.calc.txt.value +='*'">*</span><!--efetua o calculo e escrve no txt -->
<span class="num" onclick="document.calc.txt.value +='7'">7</span><!--efetua o calculo e escrve no txt -->
<span class="num" onclick="document.calc.txt.value +='8'">8</span><!--efetua o calculo e escrve no txt -->
<span class="num" onclick="document.calc.txt.value +='9'">9</span><!--efetua o calculo e escrve no txt -->
<span class="num" onclick="document.calc.txt.value +='-'">-</span><!--efetua o calculo e escrve no txt -->
<span class="num" onclick="document.calc.txt.value +='4'">4</span><!--efetua o calculo e escrve no txt -->
<span class="num" onclick="document.calc.txt.value +='5'">5</span><!--efetua o calculo e escrve no txt -->
<span class="num" onclick="document.calc.txt.value +='6'">6</span><!--efetua o calculo e escrve no txt -->
<span class="num plus" onclick="document.calc.txt.value +='+'">+</span><!--efetua o calculo e escrve no txt -->
<span class="num" onclick="document.calc.txt.value +='1'">1</span><!--efetua o calculo e escrve no txt -->
<span class="num" onclick="document.calc.txt.value +='2'">2</span><!--efetua o calculo e escrve no txt -->
<span class="num" onclick="document.calc.txt.value +='3'">3</span><!--efetua o calculo e escrve no txt -->
<span class="num" onclick="document.calc.txt.value +='0'">0</span><!--efetua o calculo e escrve no txt -->
<span class="num" onclick="document.calc.txt.value +='00'">00</span><!--efetua o calculo e escrve no txt -->
<span class="num" onclick="document.calc.txt.value +='.'">.</span><!--efetua o calculo e escrve no txt -->
<span class="num equal" onclick="document.calc.txt.value =eval(calc.txt.value)">=</span><!--responsavio por fazr o calculo-->
</form>

</div>
`
}

else if(t ==='relogio'){
ca.innerHTML=`
<style type="text/css">
font-size: 50px;
}
.caio
{
    
    position: relative;
    margin-top:5ch;
    font-size: 25px;

}
.tee{
    position: relative;
    top:8ch;
}
.anbiente{
    color: #fff;
    text-align: center;
    top: 5ch;
    left: 20ch;
    object-position: center;
    position: relative;
    height: 15ch;
    width: 15ch;
    border-radius: 50%;
   
    background-size: cover;
    border: solid 1px;
}
.t
{
    position: relative;
top: 6ch;
}
@media(max-width:1000px)
{
    .anbiente
    {
        top: 5ch;
        left: 0.5ch;


    }



}
</style>

<div id="anbiente" class="anbiente">
        <div  id="tee" class="tee"></div> 
        <div class="caio" id="caio"></div> 
       </div>
`


let data = new Date();
    let hora = data.getHours();
    let minutos=data.getMinutes();
    let sigundos = data.getSeconds();
    let total=hora+":"+minutos+":"+sigundos;

   function relogioo(){
    let data = new Date();
    let horas = data.getHours();
    let minutos=data.getMinutes();
    let sigundos = data.getSeconds();

    if(horas<10){
         horas="0"+horas;
     }
     if(minutos<10){
         minutos="0"+minutos;

     }
     if(sigundos<10){
         sigundos="0"+ sigundos;
     }



    let total=hora+":"+minutos+":"+sigundos;
    tee.innerHTML=`${total}`
    }
    let tempo = setInterval(relogioo,1000);

    if(hora <=0  ||  hora <= 6 ){
        caio.innerHTML=`<style>
                             body
                             {
                                background: #000000;
                            }
                            .anbiente{
                                background:  url(https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
                                background-size: cover;
                            }
                             </style>BOA MADRUGA `

    } else if( hora <=7 || hora <=12){
        caio.innerHTML=`<style>
                             body
                             {
                                background: #F6C667;
                            }
                            .anbiente{
                                background:  url(https://images.pexels.com/photos/1454769/pexels-photo-1454769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
                                background-size: cover;
                            }
                             </style>BOA DIA `

    }else if(hora <=13 || hora <=18 ){
        caio.innerHTML=`<style>
                             body
                             {
                                background: #64DFDF;
                            }
                            .anbiente{
                                background:  url(https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
                                background-size: cover;
                            }
                             </style>BOA TARDE`
    }else if(hora <=19 || hora <= 23){
        caio.innerHTML=`<style> body
                             {
                                background: #29252C;
                                }
                                .anbiente{
                                background:  url(https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
                                 background-size: cover;}
                             </style> BOA NOITE`

    }

/*conteudo da edução(HISTORIA)*/
}else if(t ==='descobrimento do brasil' || t ==='Descobrimento do Brasil' || t ==='Descobrimento do brasil'){

ca.innerHTML=`
<style>
.frent
{
width: 30px;
height: 30px;
border-radius:50%;
border-color: #fff;
left:55%; 
top:-40px;
position: absolute;
transition-duration: 0.5s;
color: #fff;
background: rgba(22, 12, 12, 0.1);
}
.frent:hover
{
background: #f15;
width: 40px;
height: 40px;
}    
.tras
{
width: 30px;
height: 30px;
border-radius: 50%;
border-color:#fff;
left:35%;
top:-40px;
position: absolute;
transition-duration: 0.5s;
color: #fff;
background: rgba(22, 12, 12, 0.1);
}

.tras:hover
{
left:35%;
top:-40px;
width: 40px;
height: 40px;
background: #f15;
}
.numero
{
width: 30px;
height: 30px;
border-radius: 50%;
border-color: rgb(10, 9, 9,0);
left:45%;
top:-40px;
position: absolute;
transition-duration: 0.5s;
color: #fff;
background: rgba(22, 12, 12, 0.1);   
}
.a:hover
{
transition-duration: 0.8s;
background: rgba(22, 12, 12, 0.1);
color: #fff;
outline: 1px inset #fff;
background:#f15;
}
.b:hover
{
transition-duration: 0.8s;
background: rgba(22, 12, 12, 0.1);
color: #fff;
outline: 1px inset #fff;
background:#f15;
}
.c
{
text-align: center;
width:300px;

background:#f15;

border-radius:10%;
}
.d:hover
{
transition-duration: 0.8s;
background: rgba(22, 12, 12, 0.1);
color: #fff;
outline: 1px inset #fff;
background:#f15;
}
.e:hover
{
transition-duration: 0.8s;
background: rgba(22, 12, 12, 0.1);
color: #fff;
outline: 1px inset #fff;
background:#f15;
}
</style>
<input id="numero" class="numero" type="button" value="1">
<input class="frent" id="frent" type="button" onclick="sa()" value=">">
<div class="a" id="a">O dia 22 de abril é marcado em nosso país como o “dia do descobrimento do Brasil”, ou seja, o dia que os portugueses chegaram aqui, no ano de 1500, o que se deu pela expedição de Pedro Álvares Cabral. Essa expedição tinha uma missão dupla: a investigação das possibilidades de Portugal na América e a compra de especiarias na Índia.</div>
<div class="b" id="b">A chegada dos portugueses ao nosso território deu início à colonização brasileira, apesar de que, nas primeiras décadas, a presença deles foi muito tímida. Por muito tempo, acreditou-se que essa chegada tinha acontecido no dia 3 de maio, mas a descoberta da carta de Pero Vaz de Caminha confirmou a real data.</div>
<div class="c" id="c"><h2><b>Grandes navegações</b></h2></div>
<div class="d" id="d">A chegada dos portugueses ao Brasil está relacionada com um processo que se estendeu ao longo do século XV e ficou conhecido como grandes navegações — o conjunto das navegações realizadas pelos portugueses no Oceano Atlântico.</div>
<div class="e" id="e">Essas expedições resultaram em inúmeras descobertas, e Portugal foi o país pioneiro na navegação atlântica porque reuniu condições para que isso acontecesse, a começar pelas questões políticas. Portugal era um país estável e não passava por turbulências políticas desde a Revolução de Avis (quando a dinastia de Avis foi entronizada).</div>`
}

else if(t ==='revolução industrial'){
ca.innerHTML=`A Revolução Industrial foi o período de grande desenvolvimento tecnológico que teve início na Inglaterra a partir da segunda metade do século XVIII e que se espalhou pelo mundo, causando grandes transformações. Ela garantiu o surgimento da indústria e consolidou o processo de formação do capitalismo.

O nascimento da indústria causou grandes transformações na economia mundial, assim como no estilo de vida da humanidade, uma vez que acelerou a produção de mercadorias e a exploração dos recursos da natureza. Além disso, foi responsável por grandes transformações no processo produtivo e nas relações de trabalho.

A Revolução Industrial foi iniciada de maneira pioneira na Inglaterra, a partir da segunda metade do século XVIII, e atribui-se esse pioneirismo aos ingleses pelo fato de que foi lá que surgiu a primeira máquina a vapor, em 1698, construída por Thomas Newcomen e aperfeiçoada por James Watt, em 1765. O historiador Eric Hobsbawm, inclusive, acredita que a Revolução Industrial só foi iniciada de fato na década de 1780|1|
O avanço tecnológico característico da Revolução Industrial permitiu um grande desenvolvimento de maquinário voltado para a produção têxtil, isto é, de roupas. Com isso, uma série de máquinas, como a “spinning Jenny”, “spinning frame”, “water frame” e a “spinning mule”, foram criadas para tecer fios. Com essas máquinas, era possível tecer uma quantidade de fios que manualmente exigiria a utilização de várias pessoas.

Posteriormente, no começo do século XIX, o desenvolvimento tecnológico foi utilizado na criação da locomotiva e das estradas de ferro, que, a partir da década de 1830, foram construídas por toda a Inglaterra. A construção das estradas de ferro contribuiu para ampliar o crescimento industrial, uma vez que diminuiu as distâncias, ao tornar as viagens mais curtas, e ampliou a capacidade de locomoção de mercadorias.

O desenvolvimento das estradas de ferro aproveitou aprosperidade da indústria inglesa, uma vez que os financiadores de sua construção foram exatamente os capitalistas que prosperaram na Revolução Industrial. Isso porque a indústria inglesa não conseguia absorver todo o excedente de capital, fazendo com que os investimentos nas estradas de ferro acontecessem.


DISCIPLINAS
ESPECIAL
+ PESQUISAS
ENEM
VESTIBULAR
EDUCADOR
O QUE É?
EXERCÍCIOS
MONOGRAFIAS
ESCOLA KIDS
VÍDEOS
+ CANAIS

HOME  HISTÓRIA GERAL  REVOLUÇÃO INDUSTRIAL
Revolução Industrial
HISTÓRIA GERAL
A Revolução Industrial teve início de maneira pioneira na Inglaterra, no século XVIII, e causou grandes transformações nas relações de trabalho e no sistema de produção.

PUBLICIDADE

A Revolução Industrial foi o período de grande desenvolvimento tecnológico que teve início na Inglaterra a partir da segunda metade do século XVIII e que se espalhou pelo mundo, causando grandes transformações. Ela garantiu o surgimento da indústria e consolidou o processo de formação do capitalismo.

O nascimento da indústria causou grandes transformações na economia mundial, assim como no estilo de vida da humanidade, uma vez que acelerou a produção de mercadorias e a exploração dos recursos da natureza. Além disso, foi responsável por grandes transformações no processo produtivo e nas relações de trabalho.

A Revolução Industrial foi iniciada de maneira pioneira na Inglaterra, a partir da segunda metade do século XVIII, e atribui-se esse pioneirismo aos ingleses pelo fato de que foi lá que surgiu a primeira máquina a vapor, em 1698, construída por Thomas Newcomen e aperfeiçoada por James Watt, em 1765. O historiador Eric Hobsbawm, inclusive, acredita que a Revolução Industrial só foi iniciada de fato na década de 1780|1|.

Uma das principais invenções da Primeira Revolução Industrial foi a locomotiva a vapor.
Uma das principais invenções da Primeira Revolução Industrial foi a locomotiva a vapor.

O avanço tecnológico característico da Revolução Industrial permitiu um grande desenvolvimento de maquinário voltado para a produção têxtil, isto é, de roupas. Com isso, uma série de máquinas, como a “spinning Jenny”, “spinning frame”, “water frame” e a “spinning mule”, foram criadas para tecer fios. Com essas máquinas, era possível tecer uma quantidade de fios que manualmente exigiria a utilização de várias pessoas.

Posteriormente, no começo do século XIX, o desenvolvimento tecnológico foi utilizado na criação da locomotiva e das estradas de ferro, que, a partir da década de 1830, foram construídas por toda a Inglaterra. A construção das estradas de ferro contribuiu para ampliar o crescimento industrial, uma vez que diminuiu as distâncias, ao tornar as viagens mais curtas, e ampliou a capacidade de locomoção de mercadorias.

O desenvolvimento das estradas de ferro aproveitou aprosperidade da indústria inglesa, uma vez que os financiadores de sua construção foram exatamente os capitalistas que prosperaram na Revolução Industrial. Isso porque a indústria inglesa não conseguia absorver todo o excedente de capital, fazendo com que os investimentos nas estradas de ferro acontecessem.

Acesse também: Revolução Francesa — acontecimento também do séc. XVIII que foi um marco na história da humanidade

Não pare agora... Tem mais depois da publicidade ;)

O trabalhador na Revolução Industrial
A Revolução Industrial também gerou grandes transformações no modo de produção de mercadorias. Antes do surgimento da indústria, a produção acontecia pelo modo de produção manufatureiro, isto é, um modo de produção manual que utilizava a capacidade artesanal daquele que produzia. Assim, a manufatura foi substituída pela maquinofatura.

Com a maquinofatura, não era mais necessária a utilização de vários trabalhadores especializados para produzir uma mercadoria, pois uma pessoa manuseando as máquinas conseguiria fazer todo o processo sozinha. Com isso, o salário do trabalhador despencou, uma vez que não eram mais necessários funcionários com habilidades manuais.

Isso é evidenciado pela estatística trazida por Eric Hobsbawm que mostra como o salário do trabalhador inglês caiu com o surgimento da indústria. O exemplo levantado foi Bolton, cidade no oeste da Inglaterra. Lá, em 1795, um artesão ganhava 33 xelins, mas, em 1815, o valor pago havia caído para 14 xelins e, entre 1829 e 1834, esse salário havia despencado para quase 6 xelins |2|. Percebemos aqui uma queda brusca no salário e esse processo deu-se em toda a Inglaterra.

Além do baixo salário, os trabalhadores eram obrigados a lidar com uma carga de trabalho extenuante. Nas indústrias inglesas do período da Revolução Industrial, a jornada diária de trabalho costumava ser de até 16 horas com apenas 30 minutos de pausa para o almoço. Os trabalhadores que não aguentassem a jornada eram sumariamente substituídos por outros.

Não havia nenhum tipo de segurança para os trabalhadores e constantemente acidentes aconteciam. O acidente mais comum era quando os trabalhadores tinham seus dedos presos na máquina, e muitos os perdiam. Os trabalhadores que se afastavam por problemas de saúde poderiam ser demitidos e não receberiam seu salário. Só eram pagos os funcionários que trabalhavam efetivamente.

Essa situação degradante fez com que os trabalhadores mobilizassem-se pouco a pouco contra seus patrões. Isso levou à criação das organizações de trabalhadores (mais conhecidas no Brasil como sindicatos) e chamadas na Inglaterra de trade union. Os trabalhadores exigiam melhorias salariais e redução na jornada de trabalho.

Cartismo e ludismo
Dois grandes movimentos de trabalhadores surgiram dessas organizações foram o ludismo e o cartismo. O ludismo teve atuação destacada no período entre 1811 e 1816, e sua estratégia consistia em invadir as fábricas e destruir as máquinas. Isso acontecia porque os adeptos do ludismo afirmavam que as máquinas estavam roubando os empregos dos homens e, portanto, deveriam ser destruídas.

O movimento cartista, por sua vez, surgiu na década de 1830 e lutava por direitos trabalhistas e políticos para a classe de trabalhadores da Inglaterra. Uma das principais exigências dos cartistas era o sufrágio universal masculino, isto é, o direito de que todos os homens pudessem votar. Os cartistas também exigiam que sua classe tivesse representatividade no Parlamento inglês.

A mobilização de trabalhadores resultou em algumas melhorias ao longo do século XIX. A pressão exercida pelos trabalhadores dava-se, principalmente, por meio de greve. Uma das melhorias mais sensíveis conquistadas pelos trabalhadores foi a redução da jornada de trabalho para 10 horas diárias, por exemplo.

A mobilização de trabalhadores enquanto classe, isto é, pobres (proletários), não foi um fenômeno que surgiu especificamente por causa da Revolução Industrial. Nas palavras de Eric Hobsbawm, o enfrentamento dos patrões pelos trabalhadores aconteceu, porque a Revolução Francesa deu-lhes confiança para isso, enquanto“a Revolução Industrial trouxe a necessidade de mobilização permanente”|3|.

Leia também: Proletariado — a classe de trabalhadores sem meios próprios de subsistência

Por que a Revolução Industrial aconteceu primeiro na Inglaterra?
A Revolução Industrial despontou pioneiramente, na segunda metade do século XVIII, na Inglaterra e gradativamente foi espalhando-se pela Europa e, em seguida para todo o mundo. Mas por que necessariamente isso ocorreu na Inglaterra? A resposta para isso é encontrada um pouco no acaso e um pouco na própria história inglesa.

Primeiramente, é importante estabelecer que o desenvolvimento tecnológico e industrial na Inglaterra foi possível, porque a burguesia estabeleceu-se como classe e garantiu o desenvolvimento da economia inglesa na direção do capitalismo. Isso aconteceu no século XVII, com a Revolução Gloriosa.

A Revolução Gloriosa aconteceu em 1688 e consolidou o fim da monarquia absolutista na Inglaterra (que já vinha enfraquecida desde a Revolução Puritana, na década de 1640). Com isso, a Inglaterra transformou-se em uma monarquia constitucional parlamentarista, na qual o poder do rei não estava acima do Parlamento e nem da Constituição, no caso da Inglaterra da Declaração de Direitos – Bill of Rights.

Assim, a burguesia conseguiu consolidar-se enquanto classe e governar de maneira a atender aos seus interesses econômicos. Um acontecimento fundamental para o desenvolvimento do comércio inglês ocorreu no meio das duas revoluções do século XVII, citadas acima. Em 1651, Oliver Cromwell decretou os Atos de Navegação, lei que decretava que mercadorias compradas ou vendidas pela Inglaterra somente seriam transportadas por embarcações inglesas.

Essa lei foi fundamental, pois protegeu o comércio, enfraqueceu a concorrência dos ingleses e garantiu que os navios ingleses controlassem as rotas comerciais marítimas. Isso enriqueceu a burguesia inglesa e permitiu-lhes acumular capital. Esse capital foi utilizado no desenvolvimento de máquinas e na instalação das indústrias.

Mas não bastava somente excedente de capital para garantir o desenvolvimento industrial. Eram necessários trabalhadores, e a Inglaterra do século XVIII tinha mão de obra excedente. Isso está relacionado com os cercamentos que aconteciam na Inglaterra e que se intensificaram a partir do século XVII.

Os cercamentos aconteciam por força da Lei dos Cercamentos (Enclosure Acts), lei inglesa que permitia que as terras comuns fossem cercadas e transformadas em pasto. As terras comuns eram parte do sistema feudal, que estipulava determinadas áreas para serem ocupadas e cultivadas pelos camponeses.

Com os cercamentos, os camponeses que habitavam essas terras foram expulsos, e as terras foram transformadas em pasto para a criação de ovelhas. A criação de ovelhas era o que fornecia a lã utilizada em larga escala na produção têxtil do país. Os camponeses expulsos de suas terras e sem ter para onde ir mudaram-se para as grandes cidades.

Sem nenhum tipo de qualificação, esses camponeses viram-se obrigados a trabalhar nos únicos locais que forneciam empregos – as indústrias. Assim, as indústrias que se desenvolviam na Inglaterra tinham mão de obra excedente. Isso garantia aos patrões poder de barganha, pois poderiam forçar os trabalhadores a aceitarem salários de fome por uma jornada diária exaustiva.

A adesão dos trabalhadores às indústrias ocorreu de maneira massiva também por uma lei inglesa que proibia as pessoas de “vadiagem”. Assim, pessoas que fossem pegas vagando pelas ruas sem emprego poderiam ser punidas com castigos físicos e até mesmo com a morte, caso fossem reincidentes.

Por último, destaca-se que o acaso e o fortuito também contribuíram para que a Inglaterra despontasse pioneiramente. O desenvolvimento das máquinas e das indústrias apenas ocorreu, porque a Inglaterra tinha grandes reservas dos dois materiais essenciais para isso: o carvão e o ferro. Com reservas de carvão e ferro abundantes, a Inglaterra pôde desenvolver sua indústria desenfreadamente.

Acesse também: Fases do capitalismo — quais são e suas características

Fases da Revolução Industrial
A Revolução Industrial corresponde às modificações econômicas e tecnológicas que consolidaram o sistema capitalista e permitiram o surgimento de novas formas de organização da sociedade. As transformações tecnológicas, econômicas e sociais vividas na Europa Ocidental, inicialmente limitadas à Inglaterra, em meados do século XVIII, tiveram diversos desdobramentos, os quais podemos chamar de fases. Essas fases correspondem ao processo evolutivo das tecnologias desenvolvidas e as consequentes mudanças socioeconômicas. São elas:

Primeira Revolução Industrial;
Segunda Revolução Industrial;
Terceira Revolução Industrial. 
→ Primeira Revolução Industrial
A Primeira Revolução Industrial refere-se ao processo de evolução tecnológica vivido a partir do século XVIII na Europa Ocidental, entre 1760 e 1850, estabelecendo uma nova relação entre a sociedade e o meio, bem como possibilitando a existência de novas formas de produção que transformaram o setor industrial, dando início a um novo padrão de consumo. Essa fase é marcada especialmente pela:

substituição da energia produzida pelo homem por energias como a vapor, eólica e hidráulica;
substituição da produção artesanal (manufatura) pela indústria (maquinofatura);
existência de novas relações de trabalho.
As principais invenções dessa fase que modificaram todo o cenário vivido na época foram:

a utilização do carvão como fonte de energia;
o consequente desenvolvimento da máquina a vapor e da locomotiva;
desenvolvimento do telégrafo, um dos primeiros meios de comunicação quase instantânea.
A produção modificou-se, diminuindo o tempo e aumentando a produtividade; as invenções possibilitaram o melhor escoamento de matérias-primas, bem como de consumidores, e também favoreceram a distribuição dos bens produzidos.

→ Segunda Revolução Industrial
A Segunda Revolução Industrial refere-se ao período entre a segunda metade do século XIX até meados do século XX, tendo seu fim durante a Segunda Guerra Mundial. A industrialização avançou os limites geográficos da Europa Ocidental, espalhando-se por países como Estados Unidos, Japão e demais países da Europa.

Compreende a fase de avanços tecnológicos ainda maiores que os vivenciados na primeira fase, bem como o aperfeiçoamento de tecnologias já existentes. O mundo pôde vivenciar diversas novas criações, que aumentaram ainda mais a produtividade e consequentemente os lucros das indústrias. Houve nesse período, também, grande incentivo às pesquisas, especialmente no campo da medicina.

As principais invenções dessa fase estão associadas ao uso do petróleo como fonte de energia, utilizado na nova invenção: o motor à combustão. A eletricidade, que antes era utilizada apenas para desenvolvimento de pesquisas em laboratórios, nesse período, começou a ser usada para o funcionamento de motores, com destaque para os motores elétricos e à explosão. O ferro, que antes era largamente utilizado, passou a ser substituído pelo aço.

→ Terceira Revolução Industrial
A Terceira Revolução Industrial, também conhecida como Revolução Tecnocientífica, iniciou-se na metade do século XX, após a Segunda Guerra Mundial. Essa fase representa uma revolução não só no setor industrial, visto que passou a relacionar não só o desenvolvimento tecnológico voltado ao processo produtivo, mas também ao avanço científico, deixando de limitar-se a apenas alguns países e espalhando-se por todo o mundo.

As transformações possibilitadas pelos avanços tecnocientíficos são vivenciadas até os dias atuais, e cada nova descoberta representa um novo patamar alcançado dentro dessa fase da revolução, consolidando o que ficou conhecido como capitalismo financeiro. A introdução da biotecnologia, robótica, avanços na área da genética, telecomunicações, eletrônica, transporte, entre outras áreas, transformaram não só a produção, como também as relações sociais, o modo de vida da sociedade e o espaço geográfico.

Todo esse desenvolvimento proporcionado pelos avanços obtidas nas diversas áreas científicas relacionam-se ao que chamamos de globalização: tudo converge para a diminuição do tempo e das distâncias, ligando pessoas, lugares, transmitindo informações instantaneamente, superando, então, os desafios e obstáculos que permeiam a localização geográfica, as diferenças culturais, físicas e sociais.

Consequências
De um modo geral, a Revolução Industrial transformou não só o setor econômico e industrial, como também as relações sociais, as relações entre o homem e a natureza, provocando alterações no modo de vida das pessoas, nos padrões de consumo e no meio ambiente. Cada fase da revolução representou diferentes transformações e consequências mediante os avanços obtidos em cada período.

A Primeira Revolução Industrial representou uma nova organização no modo capitalista. Nesse período houve um aumento significativo de indústrias, bem como o aumento significativo da produtividade (produção em menor tempo). O homem, ao ser substituído pela máquina, saiu da zona rural para ir para as cidades em busca de novas oportunidades, dando início ao processo de urbanização.

Esse processo culminou no crescimento desenfreado das cidades, na marginalização de boa parte da população, bem como em problemas de ordem social, como miséria, violência, fome. Nessa fase, também, a sociedade organizou-se em dois polos: de um lado a burguesia e do outro o proletariado.

A Segunda Revolução Industrial teve como principais consequências, mediante o maior avanço tecnológico, o aumento da produção em massa em bem menos tempo, consequentemente o aumento do comércio e modificação nos padrões de consumo; muitos países passaram a se industrializar, especialmente os mais ricos, dominando, então, economicamente diversos outros países (expansão territorial e exploração de matéria-prima).

O avanço nos transportes possibilitou maior e melhor escoamento de mercadorias e trânsito de pessoas; surgiram as grandes cidades e com elas também os problemas como superpopulação; aumento das doenças; desemprego e aumento da mão de obra barata e novas relações de trabalho.

A Terceira Revolução Industrial e a nova integração entre ciência, tecnologia e produção possibilitaram avanços na medicina; a invenção de robôs capazes de fazer trabalho extremamente minucioso e preciso; houve avanços na área da genética, trazendo novas técnicas que melhoraram a qualidade de vida das pessoas; bem como diminuição das distâncias entre os povos e a maior difusão de notícias e informações por meio de novos meios de comunicação; o capitalismo financeiro consolidou-se e houve aumento do número de empresas multinacionais.

E não menos importante, todas essas transformações possibilitadas pela Revolução Industrial como um todo transformaram o modo como o homem relaciona-se com o meio. A apropriação dos recursos naturais para viabilizar as produções e os avanços tecnocientíficos tem causado grande impacto ambiental.

Atualmente, as alterações provocadas no meio ambiente têm sido amplamente discutidas pelas comunidades internacionais, órgãos e entidades, que expressam a importância de mudar o modelo de desenvolvimento econômico que explora os recursos naturais sem pensar nas gerações futuras.

Leia também: Relação entre urbanização e industriailização

Resumo
A Inglaterra foi a nação pioneira no desenvolvimento industrial e tecnológico no mundo.

Por meio da Revolução Industrial, o capitalismo consolidou-se como sistema econômico vigente.

O desenvolvimento da máquina a vapor é considerado como o ponto de partida da Revolução Industrial.

Causou profundas transformações no modo de produção e também nas relações entre patrão e trabalhador.

Durante o auge da Revolução Industrial, os trabalhadores ingleses recebiam salários baixíssimos e eram obrigados a suportar uma longa jornada de trabalho.

A intensa exploração do trabalho do proletário fez com que os trabalhadores organizassem-se em sindicatos.

Dois movimentos de trabalhadores foram muito importantes no século XIX: o ludismo e o cartismo.

A Revolução Industrial aconteceu de maneira pioneira na Inglaterra por uma junção de fatores, que englobam as grandes reservas de carvão do país, os cercamentos, o excedente de capital existente no país etc.

As transformações econômicas, sociais e tecnológicas proporcionadas pela Revolução Industrial dividem-se em fases, segundo os avanços produtivos, no campo científico e em diversas outras áreas do setor econômico e industrial.

Pode-se dividir a Revolução Industrial em: Primeira Revolução Industrial, Segunda Revolução Industrial e Terceira Revolução Industrial.

Diversas foram as consequências da Revolução Industrial. Houve aumento da produtividade, mudança nas relações de trabalho, alterações no modo de vida e padrões de consumo da sociedade; alterou-se a relação entre o homem e a natureza, houve avanços em diversos campos do conhecimento, entre outras mudanças.`

}/*conteudo de edudção(HISTORIA)*/
else if(t ==='adicionar code'){
ca.innerHTML=`else if(t ==='o que vamos fazer esta noite ?'){
ca.innerHTML='destruir o mundo meu amor '
}`
}
/*educasinal (MATEMATICA)*/
else if(t ==='Tabuada'){

ca.innerHTML=`
<style>
.tabuada
{
background: rgba(22, 12, 12, 0.1);
width: 20%;
height: 20%;
border-radius: 5%;
}
.busca:hover
{
width: 50px;
height: 50px;
background: #f15;
border-radius: 50%;
}

.a:hover
{
width: 100%;
height: 100%;
position: flex;
outline:3px inset rgb(0, 0, 0);
background-color: #f15;
}
.b:hover
{
width: 100%;
height: 100%;
position: flex;
outline:3px inset rgb(0, 0, 0);
background-color: #f15;
}
.c:hover
{
width: 100%;
height: 100%;
position: flex;
outline:3px inset rgb(0, 0, 0);
background-color: #f15;
}
.d:hover
{
width: 100%;
height: 100%;
position: flex;
outline:3px inset rgb(0, 0, 0);
background-color: #f15;
}
.e:hover
{
width: 100%;
height: 100%;
position: flex;
outline:3px inset rgb(0, 0, 0);
background-color: #f15;
}
.f:hover
{
width: 100%;
height: 100%;
position: flex;
outline:3px inset rgb(0, 0, 0);
background-color: #f15;
}
.g:hover
{
width: 100%;
height: 100%;
position: flex;
outline:3px inset rgb(0, 0, 0);
background-color: #f15;
}
.h:hover
{
width: 100%;
height: 100%;
position: flex;
outline:3px inset rgb(0, 0, 0);
background-color: #f15;
}
.i:hover
{
width: 100%;
height: 100%;
position: flex;
outline:3px inset rgb(0, 0, 0);
background-color: #f15;
}
.j:hover
{
width: 150%;

position: flex;
outline:3px inset rgb(0, 0, 0);
background-color: #f15;
}
</style>
<section class="tabuada" id="tabuada">
    <div  class="numero" id="numero">
        <input type="number" placeholder="Buscar tabuada" value="tabuada do" id="tabu" class="tabu">
        <button id="busca" class="busca" onclick="resultado()">buscar</button>
    <div class="res" id="res"></div>
    </div>
</section>`
}



else{
    ca.innerHTML=`desculpa não esto preparada para reponder isto (ou você so não saiba escrever de forma que eu comprenda)`

}
};
/*descobrimento do brasil*/
function somar(){
ca.innerHTML=`
<style>
.frent
{
width: 30px;
height: 30px;
border-radius:50%;
border-color: #fff;
left:55%; 
top:-40px;
position: absolute;
transition-duration: 0.5s;
color: #fff;
background: rgba(22, 12, 12, 0.1);
}
.frent:hover
{
background: #f15;
width: 40px;
height: 40px;
}
.numero
{
width: 30px;
height: 30px;
border-radius: 50%;
border-color: rgb(10, 9, 9,0);
left:45%;
top:-40px;
position: absolute;
transition-duration: 0.5s;
color: #fff;
background: rgba(22, 12, 12, 0.1);   
}
.a:hover
{
transition-duration: 0.8s;
background: rgba(22, 12, 12, 0.1);
color: #fff;
outline: 1px inset #fff;
background:#f15;
}
.b:hover
{
transition-duration: 0.8s;
background: rgba(22, 12, 12, 0.1);
color: #fff;
outline: 1px inset #fff;
background:#f15;
}
.c
{
text-align: center;
width:300px;

background:#f15;
color: #fff;
border-radius:10%;
}
.d:hover
{
transition-duration: 0.8s;
background: rgba(22, 12, 12, 0.1);
color: #fff;
outline: 1px inset #fff;
background:#f15;
}
.e:hover
{
transition-duration: 0.8s;
background: rgba(22, 12, 12, 0.1);
color: #fff;
outline: 1px inset #fff;
background:#f15;
}
</style>
<input id="numero" class="numero" type="button" value="1">
<input class="frent" id="frent" type="button" onclick="sa()" value=">">
<div class="a" id="a">O dia 22 de abril é marcado em nosso país como o “dia do descobrimento do Brasil”, ou seja, o dia que os portugueses chegaram aqui, no ano de 1500, o que se deu pela expedição de Pedro Álvares Cabral. Essa expedição tinha uma missão dupla: a investigação das possibilidades de Portugal na América e a compra de especiarias na Índia.</div>
<div class="b" id="b">A chegada dos portugueses ao nosso território deu início à colonização brasileira, apesar de que, nas primeiras décadas, a presença deles foi muito tímida. Por muito tempo, acreditou-se que essa chegada tinha acontecido no dia 3 de maio, mas a descoberta da carta de Pero Vaz de Caminha confirmou a real data.</div>
<div class="c" id="c"><h2><b>Grandes navegações</b></h2></div>
<div class="d" id="d">A chegada dos portugueses ao Brasil está relacionada com um processo que se estendeu ao longo do século XV e ficou conhecido como grandes navegações — o conjunto das navegações realizadas pelos portugueses no Oceano Atlântico.</div>
<div class="e" id="e">Essas expedições resultaram em inúmeras descobertas, e Portugal foi o país pioneiro na navegação atlântica porque reuniu condições para que isso acontecesse, a começar pelas questões políticas. Portugal era um país estável e não passava por turbulências políticas desde a Revolução de Avis (quando a dinastia de Avis foi entronizada).</div>`
}
function sa(){

ca.innerHTML=` 
<style>
.frent
{
width: 30px;
height: 30px;
border-radius:50%;
border-color: #fff;
left:55%; 
top:-40px;
position: absolute;
transition-duration: 0.5s;
color: #fff;
background: rgba(22, 12, 12, 0.1);
}
.frent:hover
{
background: #f15;
width: 40px;
height: 40px;
}    
.tras
{
width: 30px;
height: 30px;
border-radius: 50%;
border-color:#fff;
left:35%;
top:-40px;
position: absolute;
transition-duration: 0.5s;
color: #fff;
background: rgba(22, 12, 12, 0.1);
}

.tras:hover
{
left:35%;
top:-40px;
width: 40px;
height: 40px;
background: #f15;
}
.numero
{
width: 30px;
height: 30px;
border-radius: 50%;
border-color: rgb(10, 9, 9,0);
left:45%;
top:-40px;
position: absolute;
transition-duration: 0.5s;
color: #fff;
background: rgba(22, 12, 12, 0.1);   
}
.f:hover
{
transition-duration: 0.8s;
background: rgba(22, 12, 12, 0.1);
color: #fff;
outline: 1px inset #fff;
background:#f15;
}
.g:hover
{
transition-duration: 0.8s;
background: rgba(22, 12, 12, 0.1);
color: #fff;
outline: 1px inset #fff;
background:#f15;
}.h:hover
{
transition-duration: 0.8s;
background: rgba(22, 12, 12, 0.1);
color: #fff;
outline: 1px inset #fff;
background:#f15;
}
.i:hover
{
transition-duration: 0.8s;
background: rgba(22, 12, 12, 0.1);
color: #fff;
outline: 1px inset #fff;
background:#f15;
}
.j
{
background:#f15;
color: #fff;

}

</style>
<input id="numero" class="numero" type="button" value="2">
<input class="frent" id="frent" type="button" onclick="sb()" value=">">
<div class="f" id="f">Além disso, Portugal tinha o território consolidado desde o século XIII, quando os mouros foram expulsos da região do Algarve. Essa estabilidade política não era compartilhada por nações vizinhas, como Espanha, Inglaterra e França. Além disso, ela permitia o desenvolvimento comercial e tecnológico, que, no caso português, reverteu-se em melhorias náuticas.</div>
<div class="g" id="g">Portugal tinha um comércio muito desenvolvimento porque a localização de sua capital, Lisboa, tornava-a um centro comercial importante. Na questão do comércio também estava inclusa a necessidade dos europeus de manter contato com a Índia, região na Ásia em que eram obtidas as especiarias, mercadorias muito valorizadas na Europa.</div>
<div class="h" id="h">A rota tradicional, que passava por Constantinopla, tinha sido fechada pelos otomanos quando conquistaram a cidade em 1453. Os portugueses passaram a investir na navegação atlântica para que pudessem encontrar uma rota contornando o litoral do continente africano. Ao longo do século XV, eles tentaram contornar a costa sul da África, e só conseguiram em 1488.</div>
<div class="i" id="i">feito realizado por Portugal no percurso das grandes navegações foi a descoberta de locais, como Canárias, Madeira, Açores e Cabo Verde. À medida que o oceano era desbravado, o ímpeto de exploração aumentava e o interesse pelo lucro mobilizava homens como Cristóvão Colombo, genovês que conseguiu financiamento espanhol.</div>
<div class="j" id="j"><h2><b> Partilha da América</b</h2></div>
<input id="tras" class="tras" type="button" onclick="somar()" value="<">`
   

}
function sb(){

ca.innerHTML=`
<style>
    .frent
{
width: 30px;
height: 30px;
border-radius:50%;
border-color: #fff;
left:55%; 
top:-40px;
position: absolute;
transition-duration: 0.5s;
color: #fff;
background: rgba(22, 12, 12, 0.1);
}
.frent:hover
{
background: #f15;
width: 40px;
height: 40px;
}    
.tras
{
width: 30px;
height: 30px;
border-radius: 50%;
border-color:#fff;
left:35%;
top:-40px;
position: absolute;
transition-duration: 0.5s;
color: #fff;
background: rgba(22, 12, 12, 0.1);
}

.tras:hover
{
left:35%;
top:-40px;
width: 40px;
height: 40px;
background: #f15;
}
.numero
{
width: 30px;
height: 30px;
border-radius: 50%;
border-color: rgb(10, 9, 9,0);
left:45%;
top:-40px;
position: absolute;
transition-duration: 0.5s;
color: #fff;
background: rgba(22, 12, 12, 0.1);   
}
.l:hover
{
transition-duration: 0.8s;
background: rgba(22, 12, 12, 0.1);
color: #fff;
outline: 1px inset #fff;
background:#f15;
}
.m:hover
{
transition-duration: 0.8s;
background: rgba(22, 12, 12, 0.1);
color: #fff;
outline: 1px inset #fff;
background:#f15;
}
.n
{
background:#f15;
color: #fff;

}
.o:hover
{
transition-duration: 0.8s;
background: rgba(22, 12, 12, 0.1);
color: #fff;
outline: 1px inset #fff;
background:#f15;
}
.p:hover
{
transition-duration: 0.8s;
background: rgba(22, 12, 12, 0.1);
color: #fff;
outline: 1px inset #fff;
background:#f15;
}
.q:hover
{
transition-duration: 0.8s;
background: rgba(22, 12, 12, 0.1);
color: #fff;
outline: 1px inset #fff;
background:#f15;
}

</style>
<input id="numero" class="numero" type="button" value="3">
<input id="frent" class="frent" type="button" onclick="sc()" value=">">
<div class="l" id="l">A expedição de Cristóvão Colombo resultou na chegada dos europeus à América, em 1492. Esse feito chamou a atenção dos habitantes do Velho Mundo, e uma disputa diplomática foi realizada entre portugueses e espanhóis, nessa última década do século XV.</div>
<div class="m" id="m"> isso, chegou-se ao Tratado de Tordesilhas — acordo, realizado entre as duas nações, que dividiu todas as terras a serem descobertas com base em uma linha imaginária estipulada a 370 léguas a oeste da ilha de Cabo Verde.</div>
<div class="n" id="n"><b><h2>Os portugueses chegam à América</b></h2></div>
<div class="o" id="o">Depois de contornarem a costa sul do continente africano, os portugueses enviaram uma expedição para a Índia e logo organizaram uma segunda expedição, capitaneada por Pedro Álvares Cabral (cujo título era de capitão-mor). Abaixo dele estavam outros 13 capitães, cada qual liderando uma embarcação específica.</div> 
<div class="p" id="p">A expedição de Cabral foi pensada com o objetivo de comercializar com a Índia, mas também para averiguar as possibilidades de Portugal na América. A expedição contou com 13 embarcações e com uma tripulação de até 1500 homens. Ela zarpou do Rio Tejo, em Lisboa, no dia 9 de março de 1500.</div>
<div class="q" id="q">A expedição seguiu diretamente até Cabo Verde, chegando lá no dia 22 de março. Depois disso, seguiu viagem adentro na zona de calmaria equatorial, uma semana depois. No dia 21 de abril, os marinheiros avistaram algas marinhas, um sinal claro de que havia terra aproximando-se. Na manhã do dia 22 de abril, foram avistados pássaros, e no final desse dia, foi visto o Monte Pascoal.</div>
<input id="tras" class="tras" type="button" onclick="sa()" value="<">`

}
function sc(){

ca.innerHTML=`
<style>
    .frent
{
width: 30px;
height: 30px;
border-radius:50%;
border-color: #fff;
left:55%; 
top:-40px;
position: absolute;
transition-duration: 0.5s;
color: #fff;
background: rgba(22, 12, 12, 0.1);
}
.frent:hover
{
background: #f15;
width: 40px;
height: 40px;
}    
.tras
{
width: 30px;
height: 30px;
border-radius: 50%;
border-color:#fff;
left:35%;
top:-40px;
position: absolute;
transition-duration: 0.5s;
color: #fff;
background: rgba(22, 12, 12, 0.1);
}

.tras:hover
{
left:35%;
top:-40px;
width: 40px;
height: 40px;
background: #f15;
}
.numero
{
width: 30px;
height: 30px;
border-radius: 50%;
border-color: rgb(10, 9, 9,0);
left:45%;
top:-40px;
position: absolute;
transition-duration: 0.5s;
color: #fff;
background: rgba(22, 12, 12, 0.1);   
}
.r:hover
{
transition-duration: 0.8s;
background: rgba(22, 12, 12, 0.1);
color: #fff;
outline: 1px inset #fff;
background:#f15;
}
.s:hover
{
transition-duration: 0.8s;
background: rgba(22, 12, 12, 0.1);
color: #fff;
outline: 1px inset #fff;
background:#f15;
}
.t
{
background:#f15;
color: #fff;

}
.w:hover
{
transition-duration: 0.8s;
background: rgba(22, 12, 12, 0.1);
color: #fff;
outline: 1px inset #fff;
background:#f15;
}
.ad:hover
{
transition-duration: 0.8s;
background: rgba(22, 12, 12, 0.1);
color: #fff;
outline: 1px inset #fff;
background:#f15;
}
.bd:hover
{
transition-duration: 0.8s;
background: rgba(22, 12, 12, 0.1);
color: #fff;
outline: 1px inset #fff;
background:#f15;
}  
</style>
<input id="numero" class="numero" type="button" value="4">

<div class="r" id="r">Em 23 de abril de 1500, Cabral autorizou um grupo de homens a ir para a terra explorar o litoral. Lá eles tiveram contato com os nativos, e esse foi o primeiro contato feito pelos portugueses com os indígenas. Esse momento foi pacífico e contou com a troca de presentes entre os dois lados.</div>
<div class="s" id="s">Os portugueses permaneceram no Brasil até 2 de maio, quando, então, as embarcações partiram para Calicute, na Índia. Antes disso, em 26 de abril, foi realizada a primeira missa em território brasileiro. A notícia do achamento da terra logo foi enviada para o rei d. Manoel I, e o principal documento desse acontecimento foi a carta escrita por Pero Vaz de Caminha.</div>
<div class="t" id="t"><b><h2>do descobrimento</b></h2></div> 
<div class="w" id="w">Durante muito tempo, acreditou-se, no Brasil, que a data da chegada dos portugueses era 3 de maio. Isso porque, até meados do século XIX, a carta de Pero Vaz de Caminha estava perdida nos documentos do Império Português, e, como não era possível ter acesso a ela, detalhes importantes desse acontecimento estavam perdidos. Essa impressão incorreta é atribuída a um historiador português que viveu no século XVI — Gaspar Correia.</div>
<div class="ad" id="ad">Esse historiador interpretou a mudança do nome do Brasil de Terra de Vera Cruz para Terra de Santa Cruz como um indicativo de que a chegada dos portugueses tinha acontecido no dia 3 de maio. Essa interpretação foi baseada no fato de que o dia 3 de maio era dedicado à comemoração religiosa da Santa Cruz, em Portugal. Assim, ele deduziu que os portugueses haviam dado esse nome ao Brasil porque teriam chegado aqui nesse dia.</div>
<div class="bd" id="bd">Só em 1817, quando o padre Manuel de Aires de Casal encontrou a Carta de Pero Vaz de Caminha é que se resgatou a informação de que a chegada dos portugueses aconteceu no dia 22 de abril e não em 3 de maio. Foi necessário mais de um século para que todos os vestígios da interpretação incorreta de Gaspar Correia desaparecessem.</div>
<input id="tras" class="tras" type="button" onclick="sb()" value="<">`

};
/*descobrimento do brasil(HISTORIA)*/

/*Tabuada(MATEMATICA)*/
function resultado()
{
var recebe=document.getElementById('tabu');
var tra=Number(recebe.value)
/*pate de claculo da tabuada*/

r1=tra*1
r2=tra*2
r3=tra*3
r4=tra*4
r5=tra*5
r6=tra*6
r7=tra*7
r8=tra*8
r9=tra*9
r10=tra*10

res.innerHTML=
`
<div  class="a" id="a">${tra}x1=${r1}</div>
<div  class="b" id="b">${tra}x2=${r2}</div>
<div  class="c" id="c">${tra}x3=${r3}</div>
<div  class="d" id="d">${tra}x4=${r4}</div>
<div  class="e" id="e">${tra}x5=${r5}</div>
<div  class="f" id="r">${tra}x6=${r6}</div>
<div  class="g" id="g">${tra}x7=${r7}</div>
<div  class="h" id="h">${tra}x8=${r8}</div>
<div  class="i" id="i">${tra}x9=${r9}</div>
<div  class="j" id="j">${tra}x10=${r10}</div>
`
}
    