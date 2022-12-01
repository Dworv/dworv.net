window.onload = () => {
  console.log("epic website moment");

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
  
  var follow = document.getElementById("github-follow");
  var src = document.getElementById("source-code");
  
  follow.onclick = () => {window.location.href = "https://github.com/dworv"}
  src.onclick = () => {window.location.href = "https://github.com/dworv/dworv.net"}
  
  var repos = [
    "https://github.com/Dworv/dna-omelette",
    "https://github.com/Dworv/faraway",
    "https://github.com/Dworv/headaches",
    "https://github.com/interactions-py/persistence"
  ]
  var polys = document.getElementsByClassName("poly");
  for (let i = 0; i < polys.length; i++) {
    console.log(i);
    polys[i].onclick = () => {window.location.href = repos[Math.floor(Math.random()*repos.length)]}
  }
  
  let cycle = orCycle();
  setInterval(() => {
      let o = cycle.next();
      movie.dataset.orientation = o.value;
  }, 2000)
}
