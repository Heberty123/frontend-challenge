class Login{
    
    constructor(){
        this._usuario = 'usuario';
        this._senha = 'teste';
    }

    logar(usuario, senha){
        console.log(this._usuario == usuario);
        console.log(this._senha == senha);

        if(this._usuario == usuario && this._senha == senha){

            return true;
        }
        else{
            return false
        }
    }
}

