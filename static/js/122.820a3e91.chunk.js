"use strict";(self.webpackChunkmy_shopping_app=self.webpackChunkmy_shopping_app||[]).push([[122],{122:(t,s,e)=>{e.r(s),e.d(s,{default:()=>i});var n=e(43),o=e(579);class c extends n.Component{constructor(t){super(t),this.state={count:0,userInfo:{}}}async componentDidMount(){const t=await fetch("https://api.github.com/users/akshaymarch7"),s=await t.json();console.log(s),this.setState({userInfo:s}),this.timer=setInterval((()=>{console.log("timer updates once every 1 sec")}),1e3)}componentDidUpdate(t,s){this.state.count!==s.count&&console.log("updated")}componentWillUnmount(){clearInterval(this.timer),console.log("willunmount")}render(){const{count:t}=this.state,{name:s,location:e,avatar_url:n}=this.state.userInfo;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"user-card",children:[(0,o.jsxs)("h2",{children:["Count: ",t]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("button",{className:"increment-btn",onClick:()=>{this.setState({count:this.state.count+1})},children:"+"}),(0,o.jsx)("button",{onClick:()=>{this.setState({count:this.state.count-1})},children:"-"})]}),(0,o.jsx)("br",{}),(0,o.jsx)("img",{src:n}),(0,o.jsxs)("h2",{children:["Name: ",s]}),(0,o.jsxs)("h2",{children:["Location: ",e]}),(0,o.jsx)("h2",{children:"Contact: +91 7732848728"})]})})}}const a=c;class r extends n.Component{constructor(t){super(t)}componentDidMount(){}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"aboutUs-page",children:[(0,o.jsx)("h1",{children:"Welcome to About Us page"}),(0,o.jsx)("hr",{}),(0,o.jsx)(a,{name:"Anish",location:"Chennai, Tamil Nadu"}),(0,o.jsx)("hr",{})]})})}}const i=r}}]);
//# sourceMappingURL=122.820a3e91.chunk.js.map