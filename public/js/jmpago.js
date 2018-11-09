var bodyElement = document.getElementsByTagName('body')[0];
var modalId = "";
function confirmarPago(){
    var input = document.getElementsByClassName('jm-radio');
    closeModal();
    setTimeout(function(){
        for(i = 0; i< input.length; i++){
            if(input[i].checked){
                modalId = "modal-"+input[i].id;
                openModal(modalId);
                break;
            }
        }
    },500);
}
function openModal(idModal){
    var modal = document.getElementById(idModal);
    var dialog = modal.getElementsByClassName("jm-modal--dialog");
    dialog[0].className = "jm-modal--dialog modal-open";
    var backdropElement = document.createElement('div');
    modal.className += " open";
    bodyElement.appendChild(backdropElement);
    backdropElement.className = "jm-modal--backdrop body-openModal";
}
function closeModal(e){
    var modal = document.getElementById(modalId);
    var dialog = modal.getElementsByClassName("jm-modal--dialog");
    dialog[0].className += " jm-modal--close";
    var backdropElement = document.getElementsByClassName("jm-modal--backdrop");
    backdropElement[0].className += "jm-modal--backdrop body-closeModal"
    setTimeout(function(){
        modal.className = "jm-modal";
        dialog[0].className = "jm-modal--dialog";
        while(backdropElement[0]){ backdropElement[0].remove(); }
    }, 450);
    modalId = "";
}
function pagar(){
    openModal("modal-concentrador");
    modalId = "modal-concentrador";
}
function validateModalClose(e){
    if(e.target.className == 'jm-modal open'){
        closeModal(modalId);
    }
}
bodyElement.addEventListener('click',validateModalClose, true);