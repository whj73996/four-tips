import "./app1.css";
import $ from "jquery";


const m={
  data:{
    n(){return (parseInt(localStorage.getItem("n") )|| 100)}
  }
}

const v ={
  init(container){
    v.container = container
    v.render()
    c.init()
  },
  html: `
      <section id="app1">
        <div class="output">
          <span id="number">{{number}}</span>
        </div>
        <div class="action">
          <button id='add1'>+1</button>
          <button id='minus1'>-1</button>
          <button id='mul2'>*2</button>
          <button id='divide2'>÷2</button>
        </div>
      </section>
`,
  render:()=>{
    $(v.html.replace("{{number}}",m.data.n)).appendTo(v.container)
  },

  update:()=>{
    c.ui.number.text(m.data.n || 100);
  }
}

const c = {
  init(){
    c.ui={
      number : v.container.children("#number")
    }
    c.bindEvents()
  }
  ,
  bindEvents(){
    v.container.on("click","#add1", () => {
      let n = m.data.n();
      n += 1;
      localStorage.setItem("n", n);
      v.update()
    })
    v.container.on("click","#minus1",  () => {
      let n = m.data.n();
      n -= 1;
      localStorage.setItem("n", n);
      v.update()
    })
    v.container.on("click","#mul2",  () => {
      let n = m.data.n();
      n *= 2;
      localStorage.setItem("n", n);
      v.update()
    })
    v.container.on("click","#divide2",  () => {
      console.log(1);
      let n = m.data.n();
      n /= 2;
      localStorage.setItem("n", n);
      v.update()
    })
  }
}
   //第一次渲染
export default v



