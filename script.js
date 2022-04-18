const btnAbstractViewMore = document.getElementById('btnViewMoreAb');

btnAbstractViewMore.addEventListener('click', ()=>{
    const elementP = document.getElementById('textAbstract');
    let btnInnerText = btnAbstractViewMore
    elementP.classList.toggle('actived');
    btnInnerText.innerText == 'Ver mais'? btnInnerText.innerText = 'Ver menos' : btnInnerText.innerText = 'Ver mais'
    
})

const btnNewTopics = document.getElementById('btnNewTopics');
const containerForm = document.getElementById('containerForm');
const containerDoubts = document.getElementById('containerDoubts');

btnNewTopics.addEventListener('click', () => {
    containerForm.classList.add('actived');
    containerDoubts.classList.remove('actived');

    const btnCancel = document.getElementById('btnCancel');
    btnCancel.addEventListener('click', cancelSend)
    const btnSend = document.getElementById('btnSend');
    btnSend.addEventListener('click', (event)=>{
        event.preventDefault();
        let valueInputText = document.getElementById('inputText').value;
        let valueInputTextArea = document.getElementById('inputTextArea').value;

        if(valueInputText == '' && valueInputTextArea == ''){
            alert('Preencha todos os campos.')
        }else{
            console.log(valueInputText, valueInputTextArea)
            const newResponse = document.getElementById('item3');
            newResponse.classList.remove('disabled');
            containerForm.classList.remove('actived');
            containerDoubts.classList.add('actived');
        }
    })
});

function editQuestions(){
    const newResponse = document.getElementById('item3');
    newResponse.classList.add('disabled');
    containerForm.classList.add('actived');
    containerDoubts.classList.remove('actived');
}

function cancelSend(event) {
    event.preventDefault();
    containerForm.classList.remove('actived');
    containerDoubts.classList.add('actived');
}

function showResponse(index){
    let idItenList = `item${index}`
    const itemList = document.getElementById(idItenList)
    itemList.classList.toggle('response-actived')
}

let btnHamburguer = document.getElementById('btnHamburguer');

btnHamburguer.addEventListener('click', ()=> {
    let header = document.getElementById('header');
    header.classList.toggle('actived-menu');
    btnHamburguer.classList.toggle('btn-menu-actived')
})