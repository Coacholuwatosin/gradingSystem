function submitValues() {
    var score = input.value
    var songB = new Audio ('Musics/clapping.mp3')

    if (score >= 75 && score <= 100) {
        showResult.style.color = "black";
        // console.log('A');
        showResult.innerHTML = '<strong>A - Excellent 🙌 </strong><br><span style="color:grey" >Keep up the effort</span>';
    }

    else if (score >=60 && score <74) {
        showResult.style.color = 'black';
        showResult.innerHTML = '<strong>B - Very Good ❤️</strong><br><span style="color:grey" >Almost is not a winning, do more</span>';
        songB.play();
    }

    else if (score >=47 && score <59) {
        showResult.style.color = 'black';
        showResult.innerHTML = '<strong>C - Average 😒 </strong><br><span style="color:grey" >You can do better than this</span>';
    }

    if (score >=30 && score <46) {
        showResult.style.color = 'black';
        showResult.innerHTML = '<strong>D - Fair 🙄 </strong><br><span style="color:grey" >Look at your life, will your parent be happy with this</span>';
    }

    else if (score >=1 && score <29) {
        showResult.style.color = 'black';
        showResult.innerHTML = '<strong>E - Poor 🤦‍♂️😭 </strong><br><span style="color:grey" >Wasted Efforts</span>';
    }

    else if (score === '' || isNaN(score)){
        showResult.innerHTML= 'Invalid Input';
    }
        input.value =''
}

function reloadPage() {
    location.reload()
}