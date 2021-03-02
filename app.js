//grabbing all the links
const triggers = document.querySelectorAll('a');

//creating the highlight span and adding to the DOM
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  //getting the link coordinates from the DOM
  const linkCoords = this.getBoundingClientRect();
  //custom coordinates to account for windows scroll
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };

  // styling the link with highlight
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

//for each link run highlightLink function
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
