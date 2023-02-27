const baseURL = 'http://localhost:3000'
var body = document.getElementById('body')
var app = document.getElementById('app')


var json = []

async function gettodos(){
    const data = await fetch(baseURL + '/gettodos')
    json = await data.json()
    console.log(json)

    for(var i=0; i<=json.length-1; i++){

        //tworzenie elementow

        const div = document.createElement('div')
        div.classList.add('toDo')
        div.setAttribute('id', 'd' + i)

        const nazwa = document.createElement('h2')
        nazwa.innerHTML = json[i].name

        const daysToEnd = document.createElement('h3')
        daysToEnd.innerHTML = `pozostało dni: ${json[i].daystoend}` 

        if(json[i].done==true){
            div.classList.add('done')
        }else if(json[i].done == false){
            div.classList.add("nDone")
        }

        const doneChange = document.createElement('checkbox')
        doneChange.setAttribute('onclick', 'doneChange()')
        doneChange.setAttribute('id', 'b'+i)
        doneChange.style.border = '1px solid yellow'

        //append

        div.appendChild(nazwa)
        div.appendChild(daysToEnd)
        div.appendChild(doneChange)
        app.appendChild(div)
        
    }

}

async function sentData(){
    const nazwa = document.getElementById('nazwa').value
    const dni = document.getElementById('dni').value

    const url = `${baseURL}/addtodo/${nazwa}/${dni}`

    await fetch(url)

    document.getElementById('dni').value= ''
    document.getElementById('nazwa').value = ''
}

function doneChange(){
    
}



gettodos()


