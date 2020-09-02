

    var gender = 'male';
    var age = 18;
    var country = 'Bangladesh';

    if(age >= 18 && (country == 'Bangladesh' || country == 'India' ) && country !== 'Pakistan' && (gender == 'male' || gender !== 'female' )) {

        document.querySelector('.pangsha').innerHTML='Account has been completed.'

    }else{

        document.querySelector('.pangsha').innerHTML='Account has been unveiled!.'
    }










