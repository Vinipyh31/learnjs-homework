container.onclick = function (event) {
    if (event.target.className == 'remove-button') {
        let pane = event.target.closest('.pane');
        pane.remove();
    };
};