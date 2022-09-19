const required_field = 'Обязательно для заполнения'

export const loginValidation = {
    required: required_field,
    validate: (value: string) =>{

        if(value.match(/[а-яА-я]/)){
            return 'Логин не можешь содержать русские буквы'
        }



        return true
    }
}

export const passwordValidation = {
    required: required_field,

    validate: (value: string) =>{

        if(value.length < 6){
            return 'Пароль не должен быть длинее 6-ти символов'
        }

        return true;
    }
}