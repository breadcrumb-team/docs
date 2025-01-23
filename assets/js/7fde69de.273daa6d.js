"use strict";(self.webpackChunkbreadcrumb_doc=self.webpackChunkbreadcrumb_doc||[]).push([[303],{5247:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var s=r(6540),a=r(781),i=r(7859),n=r(2732),l=r(4164),o=r(856);function d(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.QP)((0,l.$)(t))}var m=r(4848);const c=(0,n.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),u=s.forwardRef(((e,t)=>{let{className:r,variant:s,size:a,asChild:n=!1,...l}=e;const o=n?i.DX:"button";return(0,m.jsx)(o,{className:d(c({variant:s,size:a,className:r})),ref:t,...l})}));u.displayName="Button";const g=s.forwardRef(((e,t)=>{let{className:r,type:s,...a}=e;return(0,m.jsx)("input",{type:s,className:d("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...a})}));g.displayName="Input";const p=s.forwardRef(((e,t)=>{let{className:r,...s}=e;return(0,m.jsx)("textarea",{className:d("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...s})}));p.displayName="Textarea";const b=(0,n.F)("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),h=s.forwardRef(((e,t)=>{let{className:r,variant:s,...a}=e;return(0,m.jsx)("div",{ref:t,role:"alert",className:d(b({variant:s}),r),...a})}));h.displayName="Alert";const v=s.forwardRef(((e,t)=>{let{className:r,...s}=e;return(0,m.jsx)("div",{ref:t,className:d("text-sm [&_p]:leading-relaxed",r),...s})}));function f(){const[e,t]=(0,s.useState)("idle"),[r,i]=(0,s.useState)([]),[n,l]=(0,s.useState)({name:"",email:"",type:"technical",message:""});return(0,m.jsx)(a.A,{title:"Get Help",description:"Submit a help request to the Breadcrumb team",children:(0,m.jsx)("div",{className:"container margin-vert--lg",children:(0,m.jsx)("div",{className:"row",children:(0,m.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,m.jsx)("h1",{children:"Need Help?"}),(0,m.jsx)("p",{className:"margin-bottom--lg",children:"Fill out this form and our support team will get back to you as soon as possible."}),"success"===e&&(0,m.jsx)(h,{className:"margin-bottom--md",variant:"default",children:(0,m.jsxs)(v,{children:["Thanks for reaching out! We'll get back to you soon at ",n.email,"."]})}),"error"===e&&(0,m.jsx)(h,{className:"margin-bottom--md",variant:"destructive",children:(0,m.jsx)(v,{children:r.length>0?(0,m.jsx)("ul",{className:"list-none m-0 p-0",children:r.map(((e,t)=>(0,m.jsx)("li",{children:e},t)))}):"Something went wrong. Please try again or email us directly at support@breadcrumb.ai"})}),(0,m.jsxs)("form",{onSubmit:async e=>{e.preventDefault();const r=(()=>{const e=[];return n.name.trim()||e.push("Name is required"),n.email.trim()||e.push("Email is required"),n.message.trim()||e.push("Message is required"),n.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)&&e.push("Please enter a valid email address"),e})();if(r.length>0)return t("error"),void i(r);i([]),t("submitting");try{const e=`\nName: ${n.name}\nEmail: ${n.email}\nType: ${n.type}\nMessage:\n${n.message}\n      `,r=`mailto:support@breadcrumb.ai?subject=Help Request: ${n.type}&body=${encodeURIComponent(e)}`;window.location.href=r,t("success"),l({name:"",email:"",type:"technical",message:""})}catch(s){console.error("Error submitting form:",s),t("error")}},className:"margin-bottom--lg",children:[(0,m.jsxs)("div",{className:"margin-bottom--sm",children:[(0,m.jsx)("label",{htmlFor:"name",className:"margin-bottom--sm",children:"Name"}),(0,m.jsx)(g,{id:"name",type:"text",value:n.name,onChange:e=>l((t=>({...t,name:e.target.value}))),required:!0})]}),(0,m.jsxs)("div",{className:"margin-bottom--sm",children:[(0,m.jsx)("label",{htmlFor:"email",className:"margin-bottom--sm",children:"Email"}),(0,m.jsx)(g,{id:"email",type:"email",value:n.email,onChange:e=>l((t=>({...t,email:e.target.value}))),required:!0})]}),(0,m.jsxs)("div",{className:"margin-bottom--sm",children:[(0,m.jsx)("label",{htmlFor:"type",className:"margin-bottom--sm",children:"Request Type"}),(0,m.jsxs)("select",{id:"type",value:n.type,onChange:e=>l((t=>({...t,type:e.target.value}))),className:"form-select",required:!0,children:[(0,m.jsx)("option",{value:"technical",children:"Technical Support"}),(0,m.jsx)("option",{value:"account",children:"Account Help"}),(0,m.jsx)("option",{value:"billing",children:"Billing Question"}),(0,m.jsx)("option",{value:"feature",children:"Feature Request"}),(0,m.jsx)("option",{value:"other",children:"Other"})]})]}),(0,m.jsxs)("div",{className:"margin-bottom--lg",children:[(0,m.jsx)("label",{htmlFor:"message",className:"margin-bottom--sm",children:"Message"}),(0,m.jsx)(p,{id:"message",value:n.message,onChange:e=>l((t=>({...t,message:e.target.value}))),required:!0,rows:5})]}),(0,m.jsx)(u,{type:"submit",disabled:"submitting"===e,className:"button button--primary",style:{backgroundColor:"#59479C",color:"white",padding:"10px 24px",borderRadius:"8px",border:"none",cursor:"pointer"},children:"submitting"===e?"Sending...":"Submit Request"})]})]})})})})}v.displayName="AlertDescription"}}]);