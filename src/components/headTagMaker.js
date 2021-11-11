export function headTagMaker(p){
    document.querySelector('meta[name="theme-color"]').setAttribute("content", p.color?p.color:"#000000");
    document.querySelector('title').innerHTML=p.title;
    document.querySelector('meta[name="description"]').setAttribute("content", p.description);
  }