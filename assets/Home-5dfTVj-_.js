import{j as e,M as i,i as l,a as o,b as c,c as m,d,e as h,L as x,T as g}from"./index-TgdSDZgO.js";import{u as t}from"./useMediaQuery-QJeSEyUt.js";const j=()=>{const s=t("(max-width: 900px)");return e.jsx(e.Fragment,{children:e.jsx("div",{className:"gallery",children:p.map((n,a)=>e.jsx("div",{className:"pics",children:e.jsx(i,{index:s?0:a,children:e.jsx("img",{src:n.imgSrc,alt:n.altText,style:{width:"100%"}})})},a))})})},p=[{id:1,imgSrc:l,altText:"Image 1"},{id:2,imgSrc:o,altText:"Image 2"},{id:3,imgSrc:c,altText:"Image 3"},{id:4,imgSrc:m,altText:"Image 4"},{id:5,imgSrc:d,altText:"Image 5"},{id:6,imgSrc:h,altText:"Image 6"}],u=()=>{const s=[{name:"linkedin",icon:"fa-brands fa-linkedin",anchor:"https://fi.linkedin.com/in/ronjakolho"},{name:"instagram",icon:"fa-brands fa-instagram",anchor:"https://www.instagram.com/ronjajjulia?igsh=MTQxYmpweHFsNXh3bw== "}],n=["Home","About","Portfolio","Contact"];return e.jsxs("footer",{children:[e.jsx("ul",{className:"socials",children:s.map((a,r)=>e.jsx("li",{children:e.jsx(i,{index:r,direction:"down",children:e.jsx("a",{href:a.anchor,children:e.jsx("i",{className:a.icon})})})},r))}),e.jsx("ul",{className:"links",children:n.map((a,r)=>e.jsx("li",{children:e.jsx(i,{index:r+1,direction:"down",children:e.jsx(x,{to:a.toLowerCase()==="home"?"/":`/${a.toLowerCase()}`,children:a},a)})},r))}),e.jsx(i,{children:e.jsxs("p",{className:"legal",children:["© ",new Date().getFullYear()," All rights reserved"]})}),e.jsx(i,{children:e.jsxs("p",{className:"legal",children:["Website created by ",e.jsx("a",{href:"https://cankolho.github.io/CanKolho-Portfolio/",children:"Can Kolho"})]})})]})},b=()=>{const s=t("(max-width: 990px)");return e.jsxs(e.Fragment,{children:[e.jsx(i,{index:1,direction:"down",children:e.jsx(g,{variant:s?"h3":"h2",align:"center",fontWeight:700,mb:10,mt:15,children:"RONJA KOLHO"})}),e.jsx(j,{}),e.jsx(u,{})]})};export{b as default};
