var modal = {

    declaration: function(){

        document.body.onclick = function(e) {  

            e = window.event? event.srcElement : e.target;
        
            if( e.className && e.className.indexOf('btn-modal') != -1 ) {
                
                if( e.getAttribute('data-target') ) {
                    modal.openModal( e.getAttribute('data-target') );
                }
            }
            else if( e.className && e.className.indexOf('modal-close') != -1 ){

                modal.closeActive();
            }
            else if( e.closest('.s-modal.active') ){

                if( e.className == 's-modal active' ){
                    modal.closeActive();
                }
            }
          
        }
    },

    openModal: function(modal_id){

        var target = document.getElementById( modal_id  );
        var node   = document.createElement("div"); 
    
        target.className += ' active';

        node.id = 's-modal-bg';

        document.body.appendChild(node);

        return false;
    },

    openSelected: function(event) {

        if( event.target.getAttribute('modal-target') ) {
            modal.openModal( event.target.getAttribute('modal-target') );
        }
        
        app.closeDropdown();

        return false;
    },

    closeActive: function(){

        var x = document.getElementsByClassName("s-modal active");
        if( x ){
            
            for (i = 0; i < x.length; i++) {
                x[i].className = x[i].className.replace('active', '');
            }
        }

        if( document.getElementById('s-modal-bg') )
            document.getElementById('s-modal-bg').remove();

        return false;
    },

};


var app = {

    declaration: function(){
        

        document.getElementById("select-dropdown").onclick = app.dropdown;

        document.addEventListener('keydown', function(e) {

            if( e.keyCode == 27 ){
                modal.closeActive();
                app.closeDropdown();
            }
        })

        // ready dropdown items onclick
        app.onclickDropdownItemSelected();
    },

    dropdown: function(e){

        var parent = e.target.closest('.s-dropdown-group');
        var target = parent.querySelector('.s-choices');

        if( target ) {
            
            if( target.className.indexOf('open') == -1 )
                target.className += ' open';
            else
                app.closeDropdown()
        }

        return false;
    },

    closeDropdown: function(){

        var x = document.getElementsByClassName("s-choices open");
        if( x ){
            
            for (i = 0; i < x.length; i++) {
                x[i].className = x[i].className.replace('open', '');
            }
        }

        return false;
    },
    
    onclickDropdownItemSelected: function(){

        var selector = document.querySelectorAll('a[modal-target]');

        if( selector ){

            for(i= 0; i < selector.length; i++ )
                selector[i].onclick = modal.openSelected;
        }

        return false;   
    }
};


document.addEventListener('DOMContentLoaded',function(){

    modal.declaration();
    app.declaration();

})