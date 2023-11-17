const form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const height = parseInt(document.getElementById("height").value)
    const weight = parseInt(document.getElementById("weight").value)
    const result = document.getElementById("result")

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please give a valid height"
    }else if(weight === '' || height < 0 || isNaN(weight)){
        result.innerHTML = "Please give a valid weight"
    }else{
        const guideLines = document.querySelectorAll('.weightguide')
        guideLines.forEach(gl => {
            gl.style.backgroundColor = 'White'
        })
        const res = (weight / Math.pow(height/100,2)).toFixed(2);
        result.innerHTML = res;
        if(res < 18.6)
            document.getElementById('uw').style.backgroundColor = 'Blue'
        else if(res > 24.9)
            document.getElementById('ow').style.backgroundColor = 'Red'
        else
            document.getElementById('nw').style.backgroundColor = 'Green'      
        
    }

})