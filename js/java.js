fetch("https://gamertocoder.garena.co.th/api/minigames")
  .then((response) => {
    if (response.status !== 200) {
      return response.status;
    }
    return response.json();
  })
  .then((data) => {
    if (typeof data == "number") {
      alert(data);
    } else {
      for (let i = 0; i < data.length; i++) {
        const currentData = data[i];
        const newListItem = document.createElement("div");
              newListItem.classList.add("card");
              const genre_array = currentData.genre;
              let genre_string = genre_array[0];
              if (genre_array.length > 1) {
                for (let j = 1; j < genre_array.length; j++) {
                  genre_string = genre_string + ", " + genre_array[j];
                }
              }
              
        const html =
          '<div class="name" >' + currentData.name + '</div>'
          + '<img src="' + currentData.icon + '"/>'
          + '<div>'+ genre_string +'</div>'
          + '<div class="text">' + currentData.description + '</div>'
        html.trim();
        newListItem.innerHTML = html;
        document.getElementById("list").appendChild(newListItem);
      }
    }
  });

function info(){
  document.getElementById('button').style.display='none'
  document.getElementById('close').style.display='inline'
  document.getElementById('info').style.display='flex'
}
function closeinfo(){
  document.getElementById('close').style.display='none'
  document.getElementById('button').style.display='inline'
  document.getElementById('info').style.display='none'
}