import{c as t,E as v,h as g,g as $}from"./index-B4HfQMAO.js";const f={dark:{type:Boolean,default:null}};function h(e,n){return t(()=>e.dark===null?n.dark.isActive:e.dark)}const k={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},i={xs:2,sm:4,md:8,lg:16,xl:24},S=v({name:"QSeparator",props:{...f,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const n=$(),l=h(e,n.proxy.$q),s=t(()=>e.vertical===!0?"vertical":"horizontal"),r=t(()=>` q-separator--${s.value}`),o=t(()=>e.inset!==!1?`${r.value}-${k[e.inset]}`:""),u=t(()=>`q-separator${r.value}${o.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(l.value===!0?" q-separator--dark":"")),d=t(()=>{const a={};if(e.size!==void 0&&(a[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const m=e.spaced===!0?`${i.md}px`:e.spaced in i?`${i[e.spaced]}px`:e.spaced,c=e.vertical===!0?["Left","Right"]:["Top","Bottom"];a[`margin${c[0]}`]=a[`margin${c[1]}`]=m}return a});return()=>g("hr",{class:u.value,style:d.value,"aria-orientation":s.value})}});export{S as Q,h as a,f as u};