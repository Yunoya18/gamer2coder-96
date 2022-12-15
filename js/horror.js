const ButtonOne = document.querySelector('#btn-1')
const ButtonTwo = document.querySelector('#btn-2')

fetch("https://gamertocoder.garena.co.th/api/minigame/6")
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
              let currentData = data;
              const newDivItem = document.createElement("div");
              newDivItem.classList.add("container-block");
              const genre_array = currentData.genre;
              let genre_string = genre_array[0];
              if (genre_array.length > 1) {
                for (let j = 1; j < genre_array.length; j++) {
                  genre_string = genre_string + ", " + genre_array[j];
                }

              let html =
              '<div id="data-1">'
              + '<div class="title-name">'+ currentData.name +'</div>'
              + '<div class="type">'+ genre_string +'</div>'
              + '<div class="content-container">'
              + '<img class="img-content" src="'+ currentData.icon +'">'
              + '<div class="detail-content">'
              + '<div class="detail-text"> '+ currentData.description +' </div>'
              + '</div>'
              + '</div>'
              + '</div>'
              + '</div>'
              html.trim();
              newDivItem.innerHTML = html;
              document.getElementById("container").appendChild(newDivItem);
              //ปุ่ม
              document.getElementById("btn-1").classList.add("disable-btn")
            }
          }
        });

fetch("https://gamertocoder.garena.co.th/api/minigame/12")
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
              let currentData = data;
              const newDivItem = document.createElement("div");
              newDivItem.classList.add("container-block");
              const genre_array = currentData.genre;
              let genre_string = genre_array[0];
              if (genre_array.length > 1) {
                for (let j = 1; j < genre_array.length; j++) {
                  genre_string = genre_string + ", " + genre_array[j];
                }

              let html =
              '<div id="data-2">'
              + '<div class="title-name">'+ currentData.name +'</div>'
              + '<div class="type">'+ genre_string +'</div>'
              + '<div class="content-container">'
              + '<img class="img-content" src="'+ currentData.icon +'">'
              + '<div class="detail-content">'
              + '<div class="detail-text"> '+ currentData.description +' </div>'
              + '</div>'
              + '</div>'
              + '</div>'
              + '</div>'
              html.trim();
              newDivItem.innerHTML = html;
              document.getElementById("container").appendChild(newDivItem);
              document.getElementById("data-2").classList.add("disable")
            }
          }
        });

const PageOne = function(){
        document.getElementById("data-1").classList.remove("disable")
        document.getElementById("data-2").classList.add("disable")
        document.getElementById("btn-1").classList.add("disable-btn")
        document.getElementById("btn-2").classList.remove("disable-btn")
          }
const PageTwo = function(){
            document.getElementById("data-2").classList.remove("disable")
            document.getElementById("data-1").classList.add("disable")
            document.getElementById("btn-2").classList.add("disable-btn")
            document.getElementById("btn-1").classList.remove("disable-btn")
          }