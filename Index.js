function Cronometro (){
    
    function Horario (segundos){
        const data = new Date(segundos*1000);
        return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone:'GMT'});
    }
    
    const Container = document.querySelector('.Container');
    const P = Container.querySelector('p');
    const Iniciar = Container.querySelector('.Iniciar');
    const Parar = Container.querySelector('.Parar');
    const Zerar = Container.querySelector('.Zerar');
    let relogio = 0;
    let timer;

    function Paragrafo(algo){
        P.innerHTML = Horario(algo);
    }
    Paragrafo(relogio);

    function IniciaContagem(){
        timer = setInterval(function() {
            relogio ++;
            Paragrafo(relogio);
            }, 1000);
        }

    Iniciar.addEventListener( 'click', function(event){
        clearInterval(timer);
        IniciaContagem();
    });
    Parar.addEventListener( 'click', function(event){
        clearInterval(timer);
    });
    Zerar.addEventListener( 'click', function(event){
        relogio = 0
        Paragrafo(relogio);
        clearInterval(timer);
    });


};
Cronometro();
