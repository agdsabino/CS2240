$(document).ready(function (){

    // hide all elements for validation
    $(".validationError").hide();

    // validation
    let nValid = false;
    let bChanged = false;
    let eValid = false;
    let pValid = false;
    let cpValid = false;

    // input validation
    $('.name').keyup(function() {
        validName();
    });

    $('#birthDay').change(function(){
        bChanged = true;
        validBirthday(new Date(this.value));
    });

    $('#emailAddress').keyup(function() {
        validEmail();
    });

    $('#pass').keyup(function() {
        validPassword();
    });

    $('#verifyPass').keyup(function() {
        confirmPassword();
    });

    function validName() {
        let fname = $('#firstName').val();
        let lname = $('#lastName').val();

        if((fname.length == '') || (lname.length == '')) {
            $('#nameCheck').show();
            nValid = false;
            return false;
        } else {
            $('#nameCheck').hide();
            nValid = true;
        }
    }
    
    function validBirthday(date) {
        let currentDate = new Date();
        let compareDate = new Date(date.getFullYear() + 1, date.getMonth() - 1, date.getDay());

        if (currentDate <= compareDate) {
            $('#bdayCheck').show();
            bValid = false;
            return false;
        } else {
            $('#bdayCheck').hide();
            bValid = true;
        }
        
    }

    function validEmail(){
        let email = $('#emailAddress').val();
        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        
        if((email.length == '') || (!regex.test(email))){
            $('#emailCheck').show();
            eValid = false;
            return false;
        } else {
            $('#emailCheck').hide();
            eValid = true;
        }
    }

    function validPassword(){
        let pass = $('#pass').val();

        if(pass.length == ''){
            $('#passwordCheck').show();
            pValid = false;
            return false;
        }
        
        if((pass.length < 5) || (pass.length > 12)){
            $('#passwordCheck').show();
            pValid = false;
            return false;
        } else {
            $('#passwordCheck').hide();
            pValid = true;
        }
    }

    function confirmPassword(){
        let pass = $('#pass').val();
        let verifyPass = $('#verifyPass').val();
    
        if(verifyPass != pass){
            $('#passwordVerify').show();
            cpValid = false;
            return false;
        } else {
            $('#passwordVerify').hide();
            cpValid = true;
        }
    }

    $('#submitSignUp').click(function (){
        validName();
        validEmail();
        validPassword();
        confirmPassword();

        if(!bChanged){
            $('#bdayCheck').show();
        }
        
        if( !nValid || !validBirthday() || !eValid || !pValid || !cpValid){
            return false;
        }
        else {
            window.alert("Successful!");
            window.location.href = "pa3.html";
        }
    });

}); 

