$(document).ready(function () {
    $('.show_btn').on('click',function () {
        $(this).hide();
        $(this).closest('.input-group').find('.passField').prop({type:"text"})
        $(this).closest('.input-group').find('.hide_btn').show()
    });
    $('.hide_btn').on('click',function () {
        $(this).hide();
        $(this).closest('.input-group').find('.passField').prop({type:"password"})
        $(this).closest('.input-group').find('.show_btn').show()
    });


    let  oneNumberRegRules=new RegExp("[0-9]+");
    let  oneLetterRegRules=new RegExp("[a-zA-Z]+");
    let  newPasswordValue='';
    let  confirmPasswordValue='';
    $('.newPassword').on('keyup',function () {
        newPasswordValue=$('.newPassword').val();
        chekingNewPasswordValidation()
    })

    $('.confrimPassword').on('keyup',function () {
        $('.password_change_error').hide()
        confirmPasswordValue=$('.confrimPassword').val();
        if(confirmPasswordValue!==newPasswordValue){
           $('.samePassError').show()
        }
    })

    chekingNewPasswordValidation=()=>{
        $('.password_change_error').hide()
        if(!(oneNumberRegRules.test(newPasswordValue))){
            $('.oneNumberRegRules').show()
        }
        else if(!(oneLetterRegRules.test(newPasswordValue))){
            $('.oneLetterRegRules').show()
        }
        else if(!(newPasswordValue.length>=8)||(newPasswordValue.length>=20)){
           $('.lengthValueError').show()
        }
    }






});