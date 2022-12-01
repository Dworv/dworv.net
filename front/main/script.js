const movie = document.getElementById("movie");

const orCycle = function* () {
  let c = 1;
  let d = +1;
  
  const START = 1;
  const END = 3;
  
  while (true) {
    if (c == START) {
      d = 1;
    }
    if (c == END) {
      d = -1;
    }
    c += d;
    yield c;
  }
};

let cycle = orCycle();
setInterval(() => {
    let o = cycle.next();
    movie.dataset.orientation = o.value;
}, 2000)

let follow = document.getElementById("github-follow");
let src = document.getElementById("source-code");

follow.onclick = () => {window.location.href("https://github.com/dworv")}
src.onclick = () => {window.location.href("https://github.com/dworv/dworv.net")}