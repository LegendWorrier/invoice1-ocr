"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[862],{1230:function(e,a,t){t.r(a);var o=t(7313),n=t(6113),l=t(501),i=t(6835),s=t(3467),r=t(7478),d=t(1629),c=t(3477),h=t(4076),u=t(6135),m=t(2084),g=t(8197),p=t(9624),x=t(6370),b=t(5508),I=t(6573),Z=t(6287),y=t(1682),f=t(1404),v=t.n(f),w=t(3523),j=t(8695),k=t.n(j),D=t(6417);const C=new(v().Workbook),P=[{header:"No",key:"no"},{header:"Proveedor",key:"ProviderName"},{header:"CIF/DNI Proveedor",key:"ProviderCIF"},{header:"Fecha",key:"InvoiceDate"},{header:"N Factura",key:"InvoiceNumber"},{header:"Impuesto Tasa",key:"TaxRate"},{header:"Base",key:"BaseAmount"},{header:"Imquestos",key:"TaxAmount"},{header:"Total",key:"TotalAmount"}],A=[{id:"no",label:"No",align:"center",minWidth:100},{id:"ProviderName",label:"Proveedor",align:"center",minWidth:180},{id:"ProviderCIF",label:"CIF/DNI Proveedor",align:"center",minWidth:180},{id:"InvoiceDate",label:"Fecha",align:"center",minWidth:130},{id:"InvoiceNumber",label:"N Factura",align:"center",minWidth:130},{id:"TaxRate",label:"Impuesto Tasa",align:"center",minWidth:100},{id:"BaseAmount",label:"Base",align:"center",minWidth:150},{id:"TaxAmount",label:"Imquestos",align:"center",minWidth:50},{id:"TotalAmount",label:"Total",align:"center",minWidth:100}];a.default=(0,u.$j)((e=>({storeState:e})))((e=>{let{storeState:a}=e;const[t,u]=(0,o.useState)([]);(0,o.useEffect)((()=>{F()}),[]);const f=async()=>{console.log("woe",a.customization.auth.data);try{let e=a.customization.auth.data.fname+" "+a.customization.auth.data.lname,o={client:a.customization.auth.data.agency_id._id,userid:a.customization.auth.data._id,user:e+" acaba de generar el Excel sobre facturas!"};a.customization.socket.emit("Add User",o);const n=C.addWorksheet("invoice2");n.columns=P,console.log("orw",n.columns),n.columns.forEach((e=>{e.width=e.header.length+5,e.alignment={horizontal:"center"}})),t.forEach((e=>{n.addRow(e)}));const l=await C.xlsx.writeBuffer();(0,w.saveAs)(new Blob([l]),"1.xlsx"),y.Z.success({description:"\xc9xito de exportaci\xf3n!",placement:"bottomRight",duration:2})}catch(e){y.Z.error({description:"Exportaci\xf3n fallida!",placement:"bottomRight",duration:2})}},v=()=>{console.log("store",a),I.Z.post(Z.Z.API_URL+"api/users/deleteVoice",{id:a.customization.auth.data._id}).then((e=>{"success"==e.data?(u([]),y.Z.success({description:"Eliminado exitosamente!",placement:"bottomRight",duration:2})):"failed"==e.data&&y.Z.error({description:"desafortunadamente no se pudo eliminar!",placement:"bottomRight",duration:2})}))},j=()=>{console.log("rows",t);let e=[];for(let o=0;o<t.length;o++)e.push([t[o].no,t[o].ProviderName,t[o].ProviderCIF,t[o].InvoiceDate,t[o].InvoiceNumber,t[o].TaxRate,t[o].BaseAmount,t[o].TaxAmount,t[o].TotalAmount]);const a=new b.jsPDF;k()(a,{theme:"grid",columnStyles:{0:{halign:"center"}},margin:{top:10},head:[["No","Proveedor","CIF/DNI Proveedor","Fecha","N Factura","Impuesto Tasa","Base","Imquestos","Total"]],body:e}),a.save("table.pdf")},F=()=>{console.log("aaaa",a.customization.auth.data);const e=new Date,t=e.getMonth(),o=3*Math.floor(t/3),n=new Date(e.getFullYear(),o,1);I.Z.post(Z.Z.API_URL+"api/users/gather").then((e=>{let t=[];e.data.map(((e,o)=>{if(e.UserId==a.customization.auth.data._id&&n<new Date(e.Date)&&0==e.downloadFlag){let a=e;a.no=o+1,t.push(a)}})),console.log("data",e.data);let o=1;t.map((e=>{e.UserId=e.ClientId.id,e.no=o,o++})),u(t),console.log(t)}))};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(m.Z,{defaultValue:"anual",style:{width:180,display:"none"},onChange:e=>{console.log(`selected ${e}`);const t=new Date;"month"==e?(console.log("aaaa",a.customization.auth.data),I.Z.post(Z.Z.API_URL+"api/users/gather").then((e=>{let t=[];const o=new Date,n=o.getMonth(),l=3*Math.floor(n/3),i=new Date(o.getFullYear(),l,1);e.data.map(((e,o)=>{if(e.UserId==a.customization.auth.data._id&&i<new Date(e.Date)&&0==e.downloadFlag){let a=e;a.no=o+1,t.push(a)}})),console.log("data",e.data);let s=1;t.map((e=>{e.ClientId=e.ClientId.id,e.no=s,s++})),u(t),console.log(t)}))):"quarter"==e?(console.log("aaaa",a.customization.auth.data),I.Z.post(Z.Z.API_URL+"api/users/gather").then((e=>{let o=[];e.data.map((e=>{if(e.UserId==a.customization.auth.data._id&&new Date(t.getFullYear(),t.getMonth()-3,t.getDate())<new Date(e.Date)){let a=e;a.no=idx+1,o.push(a)}})),console.log("data",e.data);let n=1;o.map((e=>{e.ClientId=e.ClientId.id,e.no=n,n++})),u(o),console.log(o)}))):"semester"==e?(console.log("aaaa",a.customization.auth.data),I.Z.post(Z.Z.API_URL+"api/users/gather").then((e=>{let o=[];e.data.map(((e,n)=>{if(e.UserId==a.customization.auth.data._id&&new Date(t.getFullYear(),t.getMonth()-6,t.getDate())<new Date(e.Date)){let a=e;a.no=n+1,o.push(a)}})),console.log("data",e.data);let n=1;o.map((e=>{e.ClientId=e.ClientId.id,e.no=n,n++})),u(o),console.log(o)}))):"annual"==e&&(console.log("aaaa",a.customization.auth.data),I.Z.post(Z.Z.API_URL+"api/users/gather").then((e=>{let o=[];e.data.map(((e,n)=>{if(e.UserId==a.customization.auth.data._id&&new Date(t.getFullYear(),t.getMonth()-12,t.getDate())<new Date(e.Date)){let a=e;a.no=n+1,o.push(a)}})),console.log("data",e.data);let n=1;o.map((e=>{e.ClientId=e.ClientId.id,e.no=n,n++})),u(o),console.log(o)})))},options:[{value:"month",label:"El mes pasado"},{value:"quarter",label:"\xdaltimo cuarto"},{value:"semester",label:"\xdaltimo semestre"},{value:"annual",label:"anual"}]}),(0,D.jsx)(l.Z,{sx:{width:"100%",overflow:"hidden"},children:(0,D.jsx)(d.Z,{sx:{maxHeight:440},children:(0,D.jsxs)(i.Z,{stickyHeader:!0,"aria-label":"sticky table",id:"ocrTbl",children:[(0,D.jsx)(c.Z,{children:(0,D.jsx)(h.Z,{children:A.map((e=>(0,D.jsx)(r.Z,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)))})}),(0,D.jsx)(s.Z,{children:t?t.map((e=>(0,D.jsx)(h.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:A.map((a=>{let t;return t="BaseAmount"==a.id||"TaxAmount"==a.id||"TotalAmount"==a.id?e[a.id]+" \u20ac":e[a.id]+"",(0,D.jsx)(r.Z,{align:a.align,children:t},a.id)}))},e.code))):""})]})})}),0!=t.length?(0,D.jsxs)(g.Z,{style:{marginTop:"5vh"},children:[(0,D.jsx)(p.Z,{span:6,style:{textAlign:"center"},children:(0,D.jsx)(x.ZP,{style:{backgroundColor:"#2196f3",color:"white"},onClick:f,variant:"contained",component:"label",endIcon:(0,D.jsx)(n.Z,{}),children:"Exportar Excel"})}),(0,D.jsx)(p.Z,{span:3,style:{textAlign:"center"},children:(0,D.jsx)(x.ZP,{style:{backgroundColor:"#2196f3",color:"white"},onClick:j,variant:"contained",component:"label",endIcon:(0,D.jsx)(n.Z,{}),children:"Exportar PDF"})}),(0,D.jsx)(p.Z,{span:12,style:{textAlign:"center"},children:(0,D.jsx)(x.ZP,{style:{backgroundColor:"#2196f3",color:"white",float:"right"},onClick:v,variant:"contained",component:"label",endIcon:(0,D.jsx)(n.Z,{}),children:"Delete"})})]}):(0,D.jsxs)(g.Z,{style:{marginTop:"5vh"},children:[(0,D.jsx)(p.Z,{span:6,style:{textAlign:"center"},children:(0,D.jsx)(x.ZP,{disabled:!0,style:{backgroundColor:"#2196f3",color:"white",display:"none"},onClick:f,variant:"contained",component:"label",endIcon:(0,D.jsx)(n.Z,{}),children:"Exportar Excel"})}),(0,D.jsx)(p.Z,{span:3,style:{textAlign:"center"},children:(0,D.jsx)(x.ZP,{disabled:!0,style:{backgroundColor:"#2196f3",color:"white",display:"none"},onClick:j,variant:"contained",component:"label",endIcon:(0,D.jsx)(n.Z,{}),children:"Exportar PDF"})}),(0,D.jsx)(p.Z,{span:12,style:{textAlign:"center"},children:(0,D.jsx)(x.ZP,{disabled:!0,style:{backgroundColor:"#2196f3",color:"white",float:"right",display:"none"},onClick:v,variant:"contained",component:"label",endIcon:(0,D.jsx)(n.Z,{}),children:"Delete"})})]})]})}))}}]);