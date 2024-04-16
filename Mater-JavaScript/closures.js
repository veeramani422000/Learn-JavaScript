// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

function a() {
    var i = 'hello this is 3000ms setTimeout';
    setTimeout(() => {
        console.log(i);
    }, 3000);
    console.log('hello Javascript');
}

a();

function z() {
    var b = 2;
    function x(){
        var a = 4;
        function y(){
            console.log(a, b);
        }
        y();
    }
    x();
}
z();
