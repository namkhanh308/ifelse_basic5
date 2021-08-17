// b1
result = (a + b < 4) ? 'Below' : 'Over';
// b2
let message = (login == 'Employee') ?
    'Hello' :
    (login == 'Director') ?
        'Greetings' :
        (login == '') ?
            'No login' :
            '';
alert(message)