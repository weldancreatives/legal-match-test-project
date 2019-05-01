var modal = {

    declaration: function(){

        // modal.open('.s-modal');
        var modalButtons = document.getElementsByClassName(".btn-modal");
        modalButtons.onclick = function(e){
            // e.preventDefault();
            alert('sdfsd');
        };

    },

    open: function(className){

        // $('.' + className).addClass('active');
        // console.log('hello');
    }
};


document.addEventListener('DOMContentLoaded',function(){

    modal.declaration();
})