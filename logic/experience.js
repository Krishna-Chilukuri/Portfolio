const exp = document.getElementById('exp')

const checkIsVisible = (element) => {
    const temp = element.getBoundingClientRext();
    if(Reflect.bottom>window.innerHeight){
        var ele = document.getElementById("summaryId")
        ele.value = "Work experience daatesav"
    }
}

document.addEventListener('scroll',() => {
    checkIsVisible(exp);
})