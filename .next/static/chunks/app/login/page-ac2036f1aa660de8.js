(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[520],{2925:(e,s,t)=>{Promise.resolve().then(t.bind(t,4341))},4341:(e,s,t)=>{"use strict";t.d(s,{default:()=>u});var r=t(5155),a=t(2115),l=t(9606),o=t(738),n=t(2598),m=t(2679),c=t(3415);let i=c.z.object({name:c.z.string().min(2,"Name must have atleast 2 characters"),password:c.z.string().min(8,"Password must be atleast 8 characters").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,"Password must contain at least one uppercase letter, one lowercase letter, and one number"),confirmPassword:c.z.string(),terms:c.z.boolean().refine(e=>!0===e,"You must accept the terms")}).refine(e=>e.password===e.confirmPassword,{message:"Passwords don't match",path:["confirmPassword"]});var d=t(9506),x=t(1536);function u(){let[e,s]=(0,a.useState)(!1),[t,c]=(0,a.useState)(!1),{register:u,handleSubmit:h,formState:{errors:p}}=(0,l.mN)({resolver:(0,m.u)(i)}),f=async e=>{try{c(!0),console.log(e)}catch(e){console.error("Error:",e)}finally{c(!1)}};return(0,r.jsxs)("div",{className:"min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8",children:[(0,r.jsxs)("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[(0,r.jsx)("h2",{className:"text-center text-3xl font-bold tracking-tight text-gray-900",children:"Welcome to Equipment.ng"}),(0,r.jsx)("p",{className:"font-medium text-2xl text-center text-gray-600 mt-4",children:"Login to Equipment.ng"})]}),(0,r.jsxs)("div",{className:"mt-4 sm:mx-auto sm:w-full sm:max-w-md",children:[(0,r.jsx)("div",{className:"bg-white py-8 px-4 sm:rounded-lg sm:px-10",children:(0,r.jsxs)("form",{className:"space-y-6",onSubmit:h(f),children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{...u("email"),type:"email",placeholder:"Email",className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"}),p.email&&(0,r.jsx)("p",{className:"mt-1 text-sm text-red-600",children:p.email.message})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("input",{...u("password"),type:e?"text":"password",placeholder:"Password",className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"}),(0,r.jsx)("button",{type:"button",className:"absolute right-3 top-1/2 -translate-y-1/2",onClick:()=>s(!e),children:e?(0,r.jsx)(o.A,{className:"h-4 w-4 text-gray-500"}):(0,r.jsx)(n.A,{className:"h-4 w-4 text-gray-500"})})]}),p.password&&(0,r.jsx)("p",{className:"mt-1 text-sm text-red-600",children:p.password.message})]}),(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center px-2",children:[(0,r.jsx)("input",{...u("terms"),type:"checkbox",className:"h-4 w-4 rounded border-yellow-300 text-yellow-600 focus:ring-yellow-500 checked:bg-yellow-600"}),(0,r.jsx)("p",{className:"px-2 font-medium text-slate",children:"Remember me"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:"/",className:"text-yellow-500 font-medium",children:"Forgot Password?"})})]}),p.terms&&(0,r.jsx)("p",{className:"mt-1 text-sm text-red-600",children:p.terms.message}),(0,r.jsx)("button",{type:"submit",disabled:t,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50",children:t?"Signing in...":"Login"}),(0,r.jsxs)("div",{className:"mt-5 grid grid-cols-2 gap-3",children:[(0,r.jsxs)("button",{type:"button",className:"w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",children:[(0,r.jsx)(x.eMv,{className:"mr-2"}),(0,r.jsx)("span",{children:"Sign up with Apple"})]}),(0,r.jsxs)("button",{type:"button",className:"w-full inline-flex items-center justify-center py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",children:[(0,r.jsx)(d.F4b,{className:"mr-2"}),(0,r.jsx)("span",{children:"Sign up with Google"})]})]})]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("p",{className:"text-center mt-4 text-gray-600",children:["Don't have an account? ",(0,r.jsx)("a",{href:"/",className:"text-yellow-500 font-medium",children:"Create an account"})]})})]})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[711,753,606,524,441,517,358],()=>s(2925)),_N_E=e.O()}]);