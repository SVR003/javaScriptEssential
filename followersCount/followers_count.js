let count=0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue()
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count;
}

function checkCountValue() {
    if(count === 10){
        alert("Your instagram acc gained 10 followers! congratulations!")
    }else if(count === 20){
        alert("Your instagram acc gained 20 followers! congratulations!")
    }
}

function resetCount() {
    count = 0;
    document.getElementById('countDisplay').innerHTML = count
    alert("Your intstagram acc foloowers count has been reset")
}