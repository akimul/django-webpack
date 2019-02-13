import * as timer from './timer'
import * as service from './promiser'

const name = document.getElementById('name')
const counter = document.getElementById('counter')
const fetchBtn = document.getElementById('fetch-btn')
const table = document.getElementById('data-table')
if(table){
   table.style.visibility = "hidden"
}
const tableData = document.getElementById('table-body')

name.innerText = "John Doe"

timer.startTime()

fetchBtn.addEventListener('click', ()=>{
   table.style.visibility = "hidden"
   service.findAll()
    .then(rates => {
        let html = ''
        rates.forEach(rate => html += `<tr><td>${rate.name}</td><td>${rate.year}</td><td>${rate.dept}</td></tr>`)
        tableData.innerHTML = html
        table.style.visibility = "visible"
    })
    .catch(e => console.log(e))
})

