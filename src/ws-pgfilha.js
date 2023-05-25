/*
*Objetivo 
*titulo: Canal de denúncias do Governo já recebeu mais de mil denúncias contra postos de combustíveis 
*linkimg: https://www.gov.br/pt-br/noticias/energia-minerais-e-combustiveis/2023/05/canal-de-denuncias-do-governo-ja-recebeu-mais-de-mil-denuncias-contra-postos-de-combustiveis/24052023_combustiveis_32.jpeg/@@images/3d14b832-d45a-47e3-b0c1-9cdc8cb6be12.jpeg
*datapublicacao:24/05/2023 14h32
*texto:O Governo Federal já recebeu mais de mil denúncias no canal aberto para denunciar preços abusivos praticados por postos de combustíveis. Os registros de valores exacerbados estão sendo feitos através de um formulário...
*/

const axios = require('axios');
const cheerio = require('cheerio');

//const urlfilha = 'https://www.gov.br/pt-br/noticias/energia-minerais-e-combustiveis/2023/05/canal-de-denuncias-do-governo-ja-recebeu-mais-de-mil-denuncias-contra-postos-de-combustiveis';
const urlfilha = 'https://www.gov.br/pt-br/noticias/educacao-e-pesquisa/2023/05/inscricoes-do-encceja-2023-vao-ate-2-de-junho'

axios .get(urlfilha)
.then(resp=>{
    const dadoshtml = resp.data;
    const $ = cheerio.load(dadoshtml);
    const titulo = $('h1').text();
    const linkimg = $('img').attr('src');
    const datapublicacao = $('span[class="value"]').text();
    const texto = $('div[property="rnews:articleBody"]').text();
    
    const dados = {titulo,linkimg,datapublicacao,texto}
    console.log(dados);
    //console.log(linkimg);
})