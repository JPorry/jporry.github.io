(function(){
    var toolbars = document.querySelectorAll('.toolbar .toggleMenu');

    Array.prototype.map.call(toolbars, function(toolbarButton){
        var menu = toolbarButton.parentNode.querySelector('.menu');
        toolbarButton.addEventListener('click', function(){
            menu.classList.toggle('open');
        });
    });

})();
