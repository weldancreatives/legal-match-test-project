var modal = {

    declaration: function(){

        modal.ready();

    },


    ready: function(){

        document.body.onclick = function(e) {  

            e = window.event? event.srcElement : e.target;
        
            if( e.className && e.className.indexOf('btn-modal') != -1 ) {
                
                modal.open(e);
            }
            else if( e.className && e.className.indexOf('modal-close') != -1 ){

                modal.closeActive();
            }
        }


        document.addEventListener('keydown', function(e) {
            if( e.keyCode == 27 ){
                modal.closeActive();
            }
        })

    },

    open: function(e){

        if( e.getAttribute('data-target') ){
                    
            var target = document.getElementById( e.getAttribute('data-target') );
            var node = document.createElement("div"); 

            target.className += ' active';

            node.id = 's-modal-bg';

            document.body.appendChild(node);
        }
    },

    closeActive: function(){

        var x = document.getElementsByClassName("s-modal active");
        if( x ){
            
            for (i = 0; i < x.length; i++) {
                x[i].className = x[i].className.replace('active', '');
            }
        }

        document.getElementById('s-modal-bg').remove();
    },

};


document.addEventListener('DOMContentLoaded',function(){

    modal.declaration();
})