"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[246],{1904:function(e,a,t){t.r(a);var n=t(7313),s=t(1682),i=t(8197),r=t(9624),l=t(4195),o=t(253),d=t(6370),c=t(9666),p=t(7890),u=t(6573),m=t(6287),h=t(2548),g=t(1405),v=t(6417);a.default=()=>{const[e,a]=(0,n.useState)(""),[t,b]=(0,n.useState)(""),[x,Z]=(0,n.useState)(""),[j,f]=(0,n.useState)(""),[y,w]=(0,n.useState)(""),[C,k]=(0,n.useState)(""),[I,S]=(0,n.useState)(""),[$,_]=(0,n.useState)(""),[O,F]=(0,n.useState)(""),[B,D]=(0,n.useState)(""),[M,z]=(0,n.useState)([]),[U,R]=(0,n.useState)(),[N,L]=(0,n.useState)(),[P,q]=(0,n.useState)(0),[W,G]=(0,n.useState)(0),[T,V]=(0,n.useState)(0),[A,E]=(0,n.useState)(),H=(0,p.UO)().id;(0,n.useEffect)((()=>{Y()}),[]);const Y=async()=>{const e=await u.Z.post(m.Z.API_URL+"api/users/getUser",{id:H}),t=await u.Z.get(m.Z.API_URL+"api/users/getclients"),n=await u.Z.get(m.Z.API_URL+"api/users/invoicelist");a(e.data.fname),b(e.data.lname),Z(e.data.cif),f(e.data.email),w(e.data.irpf),S(e.data.license),_(e.data.contactName),k(e.data.tax),F(e.data.phone),z(t.data),D(e.data.agency_id);let s=0,i=0,r=0,l=new Date;const o=(new Date).getMonth(),d=Math.floor(o/3)+1;for(let a=0;a<n.data.length;a++)n.data[a].UserId==H&&new Date(l.getFullYear(),l.getMonth()-12,1)<new Date(n.data[a].Date)&&s++,n.data[a].UserId==H&&new Date(l.getFullYear(),l.getMonth(),1)<new Date(n.data[a].Date)&&i++,n.data[a].UserId==H&&new Date(l.getFullYear(),3*(d-1)+1,1)<new Date(n.data[a].Date)&&r++;R(e.data.fee),L(e.data.consumption),q(i),G(r),V(s),E((r*e.data.consumption).toFixed(2)),console.log("users",e,t)};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i.Z,{children:(0,v.jsx)(r.Z,{span:24,children:(0,v.jsx)("h2",{children:"Perfil"})})}),(0,v.jsxs)(i.Z,{justify:"space-evenly",style:{marginBottom:10},children:[(0,v.jsx)(r.Z,{span:3,children:(0,v.jsx)(c.Z,{id:"standard-basic",value:e,onChange:e=>{a(e.target.value)},label:"Nombre de pila",variant:"standard"})}),(0,v.jsx)(r.Z,{span:3,children:(0,v.jsx)(c.Z,{id:"standard-basic",value:t,onChange:e=>{b(e.target.value)},label:"Apellido",variant:"standard"})}),(0,v.jsx)(r.Z,{span:8,children:(0,v.jsx)(c.Z,{id:"standard-basic",disabled:!0,value:C,onChange:e=>{k(e.target.value)},fullWidth:!0,label:"Impuesto",variant:"standard"})})]}),(0,v.jsxs)(i.Z,{justify:"space-evenly",style:{marginBottom:10},children:[(0,v.jsx)(r.Z,{span:8,children:(0,v.jsx)(c.Z,{id:"standard-basic",value:x,onChange:e=>{Z(e.target.value)},fullWidth:!0,label:"CIF/DNI",variant:"standard"})}),(0,v.jsx)(r.Z,{span:8,children:(0,v.jsx)(c.Z,{id:"standard-basic",value:y,onChange:e=>{w(e.target.value)},fullWidth:!0,label:"IRPF",variant:"standard"})})]}),(0,v.jsxs)(i.Z,{justify:"space-evenly",style:{marginBottom:10},children:[(0,v.jsx)(r.Z,{span:8,children:(0,v.jsx)(c.Z,{disabled:!0,id:"standard-basic",value:$,onChange:e=>{_(e.target.value)},fullWidth:!0,label:"Nombre de contacto",variant:"standard"})}),(0,v.jsx)(r.Z,{span:8,children:(0,v.jsx)(c.Z,{id:"standard-basic",value:I,onChange:e=>{S(e.target.value)},fullWidth:!0,label:"N\xfamero de licencia",variant:"standard"})})]}),(0,v.jsxs)(i.Z,{justify:"space-evenly",style:{marginBottom:10},children:[(0,v.jsx)(r.Z,{span:8,children:(0,v.jsx)(c.Z,{id:"standard-basic",value:O,onChange:e=>{F(e.target.value)},fullWidth:!0,label:"Contacto telefonico",variant:"standard"})}),(0,v.jsx)(r.Z,{span:8,children:(0,v.jsx)(h.Z,{fullWidth:!0,labelId:"demo-simple-select-label",id:"demo-simple-select",value:B,onChange:e=>D(e.target.value),children:M.map((e=>(0,v.jsx)(g.Z,{value:e._id,children:e.id},e._id)))})})]}),(0,v.jsxs)(i.Z,{justify:"space-evenly",style:{marginBottom:10},children:[(0,v.jsx)(r.Z,{span:8,children:(0,v.jsx)(c.Z,{id:"standard-basic",value:j,onChange:e=>{f(e.target.value)},fullWidth:!0,label:"Contacto de correo",variant:"standard"})}),(0,v.jsx)(r.Z,{span:8})]}),(0,v.jsxs)(i.Z,{justify:"space-evenly",style:{marginBottom:10},children:[(0,v.jsx)(r.Z,{span:8,children:(0,v.jsxs)(i.Z,{style:{alignItems:"center",justifyContent:"center"},children:[(0,v.jsx)(r.Z,{span:12,children:(0,v.jsx)("div",{children:"Upload Counter Month"})}),(0,v.jsx)(r.Z,{span:6,children:(0,v.jsx)(l.Z,{disabled:!0,value:P})})]})}),(0,v.jsx)(r.Z,{span:8,children:(0,v.jsxs)(i.Z,{style:{alignItems:"center",justifyContent:"center"},children:[(0,v.jsx)(r.Z,{span:12,children:(0,v.jsx)("div",{children:"Cuota mensual"})}),(0,v.jsx)(r.Z,{span:6,children:(0,v.jsx)(o.Z,{min:6,max:1e5,value:U,onChange:e=>{R(e)}})})]})})]}),(0,v.jsxs)(i.Z,{justify:"space-evenly",style:{marginBottom:10},children:[(0,v.jsx)(r.Z,{span:8,children:(0,v.jsxs)(i.Z,{style:{alignItems:"center",justifyContent:"center"},children:[(0,v.jsx)(r.Z,{span:12,children:(0,v.jsx)("div",{children:"Upload Counter Trimestre"})}),(0,v.jsx)(r.Z,{span:6,children:(0,v.jsx)(l.Z,{disabled:!0,value:W})})]})}),(0,v.jsx)(r.Z,{span:8,children:(0,v.jsxs)(i.Z,{style:{alignItems:"center",justifyContent:"center"},children:[(0,v.jsx)(r.Z,{span:12,children:(0,v.jsx)("div",{children:"Consumo por p\xe1gina"})}),(0,v.jsx)(r.Z,{span:6,children:(0,v.jsx)(o.Z,{min:.2,max:1e5,value:N,onChange:e=>{q(P),G(W),V(T),L(e),E((W*e).toFixed(2))}})})]})})]}),(0,v.jsxs)(i.Z,{justify:"space-evenly",style:{marginBottom:10},children:[(0,v.jsx)(r.Z,{span:8,children:(0,v.jsxs)(i.Z,{style:{alignItems:"center",justifyContent:"center"},children:[(0,v.jsx)(r.Z,{span:12,children:(0,v.jsx)("div",{children:"Upload Counter a\xf1o"})}),(0,v.jsx)(r.Z,{span:6,children:(0,v.jsx)(l.Z,{disabled:!0,value:T})})]})}),(0,v.jsx)(r.Z,{span:8,children:(0,v.jsxs)(i.Z,{style:{alignItems:"center",justifyContent:"center"},children:[(0,v.jsx)(r.Z,{span:12,children:(0,v.jsx)("div",{children:"COST TO BILL"})}),(0,v.jsx)(r.Z,{span:6,children:(0,v.jsx)(l.Z,{disabled:!0,value:A})})]})})]}),(0,v.jsx)(i.Z,{children:(0,v.jsx)(r.Z,{span:24,children:(0,v.jsx)(i.Z,{align:"center",style:{marginTop:"15vh"},children:(0,v.jsx)(d.ZP,{type:"primary",size:"large",onClick:()=>{u.Z.post(m.Z.API_URL+"api/users/editUser",{fname:e,lname:t,cif:x,agency_id:B,irpf:y,license:I,consumption:N,fee:U,email:j,tableID:H}).then((()=>{s.Z.success({description:" Guardar \xe9xito!",placement:"bottomRight",duration:2})})).catch((e=>{console.log(e)}))},children:"Editar"})})})})]})}},7440:function(e,a,t){t.d(a,{Z:function(){return o}});var n=t(7462),s=t(7313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},r=t(7469),l=function(e,a){return s.createElement(r.Z,(0,n.Z)({},e,{ref:a,icon:i}))};var o=s.forwardRef(l)},1405:function(e,a,t){t.d(a,{Z:function(){return k}});var n=t(3366),s=t(7462),i=t(7313),r=t(3061),l=t(1921),o=t(7551),d=t(7592),c=t(7342),p=t(1195),u=t(7999),m=t(4993),h=t(6983),g=t(9273),v=t(7363),b=t(1081),x=t(7430),Z=t(2298);function j(e){return(0,Z.Z)("MuiMenuItem",e)}var f=(0,x.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),y=t(6417);const w=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],C=(0,d.ZP)(u.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,t.dense&&a.dense,t.divider&&a.divider,!t.disableGutters&&a.gutters]}})((e=>{let{theme:a,ownerState:t}=e;return(0,s.Z)({},a.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(a.vars||a).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${f.selected}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.primary.mainChannel} / ${a.vars.palette.action.selectedOpacity})`:(0,o.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity),[`&.${f.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.primary.mainChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:(0,o.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}},[`&.${f.selected}:hover`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.primary.mainChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:(0,o.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?`rgba(${a.vars.palette.primary.mainChannel} / ${a.vars.palette.action.selectedOpacity})`:(0,o.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}},[`&.${f.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`&.${f.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},[`& + .${g.Z.root}`]:{marginTop:a.spacing(1),marginBottom:a.spacing(1)},[`& + .${g.Z.inset}`]:{marginLeft:52},[`& .${b.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${b.Z.inset}`]:{paddingLeft:36},[`& .${v.Z.root}`]:{minWidth:36}},!t.dense&&{[a.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,s.Z)({minHeight:32,paddingTop:4,paddingBottom:4},a.typography.body2,{[`& .${v.Z.root} svg`]:{fontSize:"1.25rem"}}))}));var k=i.forwardRef((function(e,a){const t=(0,c.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:o=!1,component:d="li",dense:u=!1,divider:g=!1,disableGutters:v=!1,focusVisibleClassName:b,role:x="menuitem",tabIndex:Z,className:f}=t,k=(0,n.Z)(t,w),I=i.useContext(p.Z),S=i.useMemo((()=>({dense:u||I.dense||!1,disableGutters:v})),[I.dense,u,v]),$=i.useRef(null);(0,m.Z)((()=>{o&&$.current&&$.current.focus()}),[o]);const _=(0,s.Z)({},t,{dense:S.dense,divider:g,disableGutters:v}),O=(e=>{const{disabled:a,dense:t,divider:n,disableGutters:i,selected:r,classes:o}=e,d={root:["root",t&&"dense",a&&"disabled",!i&&"gutters",n&&"divider",r&&"selected"]},c=(0,l.Z)(d,j,o);return(0,s.Z)({},o,c)})(t),F=(0,h.Z)($,a);let B;return t.disabled||(B=void 0!==Z?Z:-1),(0,y.jsx)(p.Z.Provider,{value:S,children:(0,y.jsx)(C,(0,s.Z)({ref:F,role:x,tabIndex:B,component:d,focusVisibleClassName:(0,r.Z)(O.focusVisible,b),className:(0,r.Z)(O.root,f)},k,{ownerState:_,classes:O}))})}))},4394:function(e,a){a.Z=function(){if("undefined"===typeof navigator||"undefined"===typeof window)return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null===e||void 0===e?void 0:e.substr(0,4))}}}]);