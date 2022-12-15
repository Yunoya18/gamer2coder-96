const ButtonOne = document.querySelector('#btn-1')
const ButtonTwo = document.querySelector('#btn-2')
const ButtonThree = document.querySelector('#btn-3')
const ButtonFour = document.querySelector('#btn-4')
const ButtonFive = document.querySelector('#btn-5')
const ButtonSix = document.querySelector('#btn-6')
const ButtonSeven = document.querySelector('#btn-7')
const ButtonEight = document.querySelector('#btn-8')

fetch("https://gamertocoder.garena.co.th/api/minigame/1")
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

fetch("https://gamertocoder.garena.co.th/api/minigame/3")
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

fetch("https://gamertocoder.garena.co.th/api/minigame/4")
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
              '<div id="data-3">'
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
              document.getElementById("data-3").classList.add("disable")
            }
          }
        });

fetch("https://gamertocoder.garena.co.th/api/minigame/7")
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
              '<div id="data-4">'
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
              document.getElementById("data-4").classList.add("disable")
            }
          }
        });

fetch("https://gamertocoder.garena.co.th/api/minigame/8")
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
              '<div id="data-5">'
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
              document.getElementById("data-5").classList.add("disable")
            }
          }
        });

fetch("https://gamertocoder.garena.co.th/api/minigame/9")
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
              '<div id="data-6">'
              + '<div class="title-name">'+ currentData.name +'</div>'
              + '<div class="type">'+ genre_string +'</div>'
              + '<div class="content-container">'
              + '<img class="img-content" src="'+ currentData.icon +'">'
              + '<div class="detail-content">'
              + '<div class="detail-text-fix"> '+ currentData.description +' </div>'
              + '</div>'
              + '</div>'
              + '</div>'
              + '</div>'
              html.trim();
              newDivItem.innerHTML = html;
              document.getElementById("container").appendChild(newDivItem);
              document.getElementById("data-6").classList.add("disable")
            }
          }
        });

fetch("https://gamertocoder.garena.co.th/api/minigame/10")
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
              '<div id="data-7">'
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
              document.getElementById("data-7").classList.add("disable")
            }
          }
        });

fetch("https://gamertocoder.garena.co.th/api/minigame/11")
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
              '<div id="data-8">'
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
              document.getElementById("data-8").classList.add("disable")
            }
          }
        });


const PageOne = function(){
  document.getElementById("data-1").classList.remove("disable")
  document.getElementById("data-2").classList.add("disable")
  document.getElementById("data-3").classList.add("disable")
  document.getElementById("data-4").classList.add("disable")
  document.getElementById("data-5").classList.add("disable")
  document.getElementById("data-6").classList.add("disable")
  document.getElementById("data-7").classList.add("disable")
  document.getElementById("data-8").classList.add("disable")
  document.getElementById("btn-1").classList.add("disable-btn")
  document.getElementById("btn-2").classList.remove("disable-btn")
  document.getElementById("btn-3").classList.remove("disable-btn")
  document.getElementById("btn-4").classList.remove("disable-btn")
  document.getElementById("btn-5").classList.remove("disable-btn")
  document.getElementById("btn-6").classList.remove("disable-btn")
  document.getElementById("btn-7").classList.remove("disable-btn")
  document.getElementById("btn-8").classList.remove("disable-btn")
}

const PageTwo = function(){
  document.getElementById("data-2").classList.remove("disable")
  document.getElementById("data-1").classList.add("disable")
  document.getElementById("data-3").classList.add("disable")
  document.getElementById("data-4").classList.add("disable")
  document.getElementById("data-5").classList.add("disable")
  document.getElementById("data-6").classList.add("disable")
  document.getElementById("data-7").classList.add("disable")
  document.getElementById("data-8").classList.add("disable")
  document.getElementById("btn-2").classList.add("disable-btn")
  document.getElementById("btn-1").classList.remove("disable-btn")
  document.getElementById("btn-3").classList.remove("disable-btn")
  document.getElementById("btn-4").classList.remove("disable-btn")
  document.getElementById("btn-5").classList.remove("disable-btn")
  document.getElementById("btn-6").classList.remove("disable-btn")
  document.getElementById("btn-7").classList.remove("disable-btn")
  document.getElementById("btn-8").classList.remove("disable-btn")
}

const PageThree = function(){
  document.getElementById("data-3").classList.remove("disable")
  document.getElementById("data-1").classList.add("disable")
  document.getElementById("data-2").classList.add("disable")
  document.getElementById("data-4").classList.add("disable")
  document.getElementById("data-5").classList.add("disable")
  document.getElementById("data-6").classList.add("disable")
  document.getElementById("data-7").classList.add("disable")
  document.getElementById("data-8").classList.add("disable")
  document.getElementById("btn-3").classList.add("disable-btn")
  document.getElementById("btn-1").classList.remove("disable-btn")
  document.getElementById("btn-2").classList.remove("disable-btn")
  document.getElementById("btn-4").classList.remove("disable-btn")
  document.getElementById("btn-5").classList.remove("disable-btn")
  document.getElementById("btn-6").classList.remove("disable-btn")
  document.getElementById("btn-7").classList.remove("disable-btn")
  document.getElementById("btn-8").classList.remove("disable-btn")
}

const PageFour = function(){
  document.getElementById("data-4").classList.remove("disable")
  document.getElementById("data-1").classList.add("disable")
  document.getElementById("data-2").classList.add("disable")
  document.getElementById("data-3").classList.add("disable")
  document.getElementById("data-5").classList.add("disable")
  document.getElementById("data-6").classList.add("disable")
  document.getElementById("data-7").classList.add("disable")
  document.getElementById("data-8").classList.add("disable")
  document.getElementById("btn-4").classList.add("disable-btn")
  document.getElementById("btn-1").classList.remove("disable-btn")
  document.getElementById("btn-2").classList.remove("disable-btn")
  document.getElementById("btn-3").classList.remove("disable-btn")
  document.getElementById("btn-5").classList.remove("disable-btn")
  document.getElementById("btn-6").classList.remove("disable-btn")
  document.getElementById("btn-7").classList.remove("disable-btn")
  document.getElementById("btn-8").classList.remove("disable-btn")
}

const PageFive = function(){
  document.getElementById("data-5").classList.remove("disable")
  document.getElementById("data-1").classList.add("disable")
  document.getElementById("data-2").classList.add("disable")
  document.getElementById("data-3").classList.add("disable")
  document.getElementById("data-4").classList.add("disable")
  document.getElementById("data-6").classList.add("disable")
  document.getElementById("data-7").classList.add("disable")
  document.getElementById("data-8").classList.add("disable")
  document.getElementById("btn-5").classList.add("disable-btn")
  document.getElementById("btn-1").classList.remove("disable-btn")
  document.getElementById("btn-2").classList.remove("disable-btn")
  document.getElementById("btn-3").classList.remove("disable-btn")
  document.getElementById("btn-4").classList.remove("disable-btn")
  document.getElementById("btn-6").classList.remove("disable-btn")
  document.getElementById("btn-7").classList.remove("disable-btn")
  document.getElementById("btn-8").classList.remove("disable-btn")
}

const PageSix = function(){
  document.getElementById("data-6").classList.remove("disable")
  document.getElementById("data-1").classList.add("disable")
  document.getElementById("data-2").classList.add("disable")
  document.getElementById("data-3").classList.add("disable")
  document.getElementById("data-4").classList.add("disable")
  document.getElementById("data-5").classList.add("disable")
  document.getElementById("data-7").classList.add("disable")
  document.getElementById("data-8").classList.add("disable")
  document.getElementById("btn-6").classList.add("disable-btn")
  document.getElementById("btn-1").classList.remove("disable-btn")
  document.getElementById("btn-2").classList.remove("disable-btn")
  document.getElementById("btn-3").classList.remove("disable-btn")
  document.getElementById("btn-4").classList.remove("disable-btn")
  document.getElementById("btn-5").classList.remove("disable-btn")
  document.getElementById("btn-7").classList.remove("disable-btn")
  document.getElementById("btn-8").classList.remove("disable-btn")
}

const PageSeven = function(){
  document.getElementById("data-7").classList.remove("disable")
  document.getElementById("data-1").classList.add("disable")
  document.getElementById("data-2").classList.add("disable")
  document.getElementById("data-3").classList.add("disable")
  document.getElementById("data-4").classList.add("disable")
  document.getElementById("data-5").classList.add("disable")
  document.getElementById("data-6").classList.add("disable")
  document.getElementById("data-8").classList.add("disable")
  document.getElementById("btn-7").classList.add("disable-btn")
  document.getElementById("btn-1").classList.remove("disable-btn")
  document.getElementById("btn-2").classList.remove("disable-btn")
  document.getElementById("btn-3").classList.remove("disable-btn")
  document.getElementById("btn-4").classList.remove("disable-btn")
  document.getElementById("btn-5").classList.remove("disable-btn")
  document.getElementById("btn-6").classList.remove("disable-btn")
  document.getElementById("btn-8").classList.remove("disable-btn")
}

const PageEight = function(){
  document.getElementById("data-8").classList.remove("disable")
  document.getElementById("data-1").classList.add("disable")
  document.getElementById("data-2").classList.add("disable")
  document.getElementById("data-3").classList.add("disable")
  document.getElementById("data-4").classList.add("disable")
  document.getElementById("data-5").classList.add("disable")
  document.getElementById("data-6").classList.add("disable")
  document.getElementById("data-7").classList.add("disable")
  document.getElementById("btn-8").classList.add("disable-btn")
  document.getElementById("btn-1").classList.remove("disable-btn")
  document.getElementById("btn-2").classList.remove("disable-btn")
  document.getElementById("btn-3").classList.remove("disable-btn")
  document.getElementById("btn-4").classList.remove("disable-btn")
  document.getElementById("btn-5").classList.remove("disable-btn")
  document.getElementById("btn-6").classList.remove("disable-btn")
  document.getElementById("btn-7").classList.remove("disable-btn")
}