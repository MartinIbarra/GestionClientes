<script>
    $(function() {
        "use strict";
        var socket = io.connect('http://localhost');

        socket.on('connection', function() {	
            console.log('socket: ' + socket.toString());
        });

        $('.form').on('submit', function (e){
        	e.preventDefault();
        	socket.emit('userInstert', {
        		name: $('#inputName').val(),
        		phone: $('#phone').val(),
        		problem: $('#problem').val(),
        		model: $('#model').val(),
        		type: $('#type').val(),
        		amount: $('#amount').val()
        	});
        });

        socket.on('disconnect', function() {
            console.log('user disconnected');
        });
    })
</script>