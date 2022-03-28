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
        else if((usuario == "" || usuario == null) && (senha == "" || senha == null)){

            return null;
        }
        else if(usuario == "" || usuario == null){

            return "usuario";
        }
        else if(senha == "" || senha == null){

            return "senha";
        }
        else{
            return false
        }
    }
}

