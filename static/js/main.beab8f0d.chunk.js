(this["webpackJsonpweb-crawling"]=this["webpackJsonpweb-crawling"]||[]).push([[0],{16:function(e,t){},22:function(e,t,n){e.exports=n(39)},27:function(e,t,n){},33:function(e,t){},34:function(e,t){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(18),c=n.n(l),o=(n(27),n(19)),i=n(1),u=n(21),d=n(11),s=function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],l=t[1],c=function(){var e=document.querySelector("#searchText");e.style.height="1px",e.style.height=12+e.scrollHeight+"px"};return r.a.createElement(a.Fragment,null,r.a.createElement("input",{type:"number",id:"classNo"}),"\ubc18 ",r.a.createElement("br",null),r.a.createElement("input",{type:"file",id:"fileInput",onClick:function(){""===document.querySelector("#classNo").value&&(alert("\ubc18\uc744 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694."),window.location=".")},onChange:function(e){if(e.preventDefault(),0!==e.target.files.length){var t=e.target.files[0],n=new FileReader;n.onload=function(e){for(var t=e.target.result,n=d.read(t,{type:"binary"}),a=[],r=0;r<n.SheetNames.length;r++){var c=n.SheetNames[r],o=n.Sheets[c],i=d.utils.sheet_to_json(o,{header:1});a.push(i)}l(a)},n.readAsBinaryString(t),e.target.files=null}}}),r.a.createElement("button",{onClick:function(){if(void 0!==n){var e=document.querySelector("#classNo");if(""!==e.value){var t=document.querySelector("#searchText"),a=document.querySelector("#checkDiv");a.innerText="";var r=document.createElement("table"),l=document.createElement("th"),c=document.createElement("th"),o=document.createElement("th");l.innerText="\ubc88\ud638",c.innerText="\uc774\ub984",o.innerText="\ucd9c\uc11d",l.style.padding="10px",c.style.padding="10px",o.style.padding="10px",r.border=1,r.style.textAlign="center",r.append(l),r.append(c),r.append(o),a.append(r);for(var i=0;i<n[e.value-1].length;i++){var u=document.createElement("tr"),d=document.createElement("td"),s=document.createElement("td"),p=document.createElement("td");d.innerText=n[e.value-1][i][0],s.innerText=n[e.value-1][i][1],-1!=t.value.indexOf(n[e.value-1][i][1])?(p.innerText="O",d.style.color="green",s.style.color="green",p.style.color="green"):(p.innerText="X",d.style.color="red",s.style.color="red",p.style.color="red"),d.style.padding="10px",s.style.padding="10px",p.style.padding="10px",u.append(d),u.append(s),u.append(p),r.append(u)}}else alert("\ubc18\uc744 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694.")}else alert("\ucd9c\uc11d\ubd80 \uc120\ud0dd\uc744 \uba3c\uc800 \ud574\uc8fc\uc138\uc694.")}},"\ucd9c\uc11d\uccb4\ud06c"),r.a.createElement("div",{id:"checkDiv"}),r.a.createElement("textarea",{id:"searchText",onKeyDown:c,onKeyUp:c,style:{width:"100%",minHeight:"400px"}}))},p=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(i.a,{path:"/",component:s,exact:!0})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.beab8f0d.chunk.js.map