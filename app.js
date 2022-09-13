
var numbers = document.getElementsByClassName("numbers")[0].children;
var onDefault = document.getElementsByClassName("onDefault")[0];
var onSubmit = document.getElementsByClassName("onSubmit")[0];
var btnSubmit = document.getElementsByClassName("btnSubmit")[0];

var value;
for (var i=0; i<numbers.length; i++){
    numbers[i].addEventListener("click", function(){

        // 1. clear all 'clicked' class & add 'clicked' class to clicked number
        for (var i=0; i<numbers.length; i++){
            numbers[i].classList.remove('clicked');
        }
        this.classList.add('clicked');

        // 2. Get value of clicked number
        value = this.innerHTML;

    });
}

btnSubmit.addEventListener('click', function(){

        // 2.5 check if value is defined
        if(value != undefined){
            // 3. Hide onDefault section 
            onDefault.style.display = 'none';

            // 4. Input value
            console.log(value);
            document.getElementById('selectedValue').innerHTML = value;

            // 4. Display onSubmit section
            onSubmit.style.display = 'block';
        }else{
            alert("Please select a rating before submitting!");
        }

});



