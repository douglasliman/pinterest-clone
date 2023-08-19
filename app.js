const grids = document.querySelectorAll('.grid')
const headings = document.querySelectorAll('.heading .wrapper .text')

function enterScreen(i){
    const grid = grids[i]
    const heading = headings[i]
const gridColumns = grid.querySelectorAll('.column')

grid.classList.add('active')


gridColumns.forEach(element => {
    element.classList.remove('animate-before')
  })

}


function outScreen(i, delay){}


function setupAnimationCycle({
    initialScreenIndex,
     timePerScreen, 
     delay
}){
    enterScreen(initialScreenIndex)
}

setupAnimationCycle({
    initialScreenIndex:0,
    timePerScreen:2000, //ms
    delay: 200 * 7,
})