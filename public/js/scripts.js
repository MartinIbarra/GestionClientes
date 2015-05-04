$(function() {
    "use strict";
    var socket = io.connect('http://localhost');

    socket.on('connection', function() {
        console.log('socket: ' + socket.toString());
    });
    
    $('.form').on('submit', function(e) {
        e.preventDefault();
        socket.emit('userInstert', {
            name: $('#inputName').val(),
            phone: $('#phone').val(),
            problem: $('#problem').val(),
            model: $('#model').val(),
            type: $('#type').val(),
            amount: $('#amount').val()
        });
        $('#inputName').val('');
        $('#phone').val('');
        $('#problem').val('');
        $('#model').val('');
        $('#type').val('');
        $('#amount').val('');
    });

    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
})