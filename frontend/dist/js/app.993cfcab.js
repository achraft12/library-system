(function(){"use strict";var e={1139:function(e,o,t){var a=t(5130),r=t(6768),n=t.p+"img/clay-banks-GX8KBbVmC6c-unsplash.a0f92188.jpg";const s={id:"app"},i={key:0},l={class:"intro-section"},c={class:"images"},u={class:"introduction"};function d(e,o,t,a,d,k){const h=(0,r.g2)("AppNavbar"),p=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",s,[(0,r.bF)(h,{onSearch:k.handleSearch},null,8,["onSearch"]),k.isHomePage?((0,r.uX)(),(0,r.CE)("div",i,[(0,r.Lk)("div",l,[o[3]||(o[3]=(0,r.Lk)("h2",null,"Welcome to the Library System",-1)),o[4]||(o[4]=(0,r.Lk)("p",null,"Explore our vast collection of books or search for your favorite titles!",-1)),(0,r.Lk)("div",c,[(0,r.Lk)("div",u,[o[1]||(o[1]=(0,r.Lk)("p",null,[(0,r.Lk)("span",{class:"span"},"Online Library"),(0,r.eW)(),(0,r.Lk)("br"),(0,r.eW)(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde porro placeat odit explicabo quam vero debitis cum sint accusantium molestias! Recusandae necessitatibus quaerat accusantium maiores similique sunt deleniti vitae quae! ")],-1)),(0,r.Lk)("button",{class:"b",onClick:o[0]||(o[0]=e=>k.LoginPage()),"aria-label":"Login Page",title:"Go to Login Page"}," Login ")]),o[2]||(o[2]=(0,r.Lk)("img",{src:n,alt:"Library",class:"intro-image"},null,-1))])])])):(0,r.Q3)("",!0),(0,r.bF)(p,{"search-query":d.searchQuery},null,8,["search-query"]),o[5]||(o[5]=(0,r.Fv)('<footer class="footer"><div class="footer-content"><div class="about-us"><h3>About Us</h3><p> Welcome to our online library! Dive into a world of knowledge and discovery with our curated collection of books and resources. </p></div><div class="social-media"><h3>Follow Us</h3><div class="icons"><a href="https://facebook.com" target="_blank" aria-label="Facebook" class="icon facebook"><i class="fab fa-facebook-square"></i></a><a href="https://instagram.com" target="_blank" aria-label="Instagram" class="icon instagram"><i class="fab fa-instagram"></i></a><a href="https://twitter.com" target="_blank" aria-label="Twitter" class="icon twitter"><i class="fab fa-twitter-square"></i></a></div></div><div class="team"><h3>Our Team</h3><ul><li>Achraf Taki</li><li></li><li></li><li></li></ul></div></div><div class="footer-bottom"><p>© 2024 Library System. All rights reserved.</p></div></footer>',1))])}t(4114);var k=t(4232),h=t.p+"img/library_logo_4k_without_background-removebg-preview.3ac46e52.png";const p={class:"navbar-container"},m={class:"logo"},f={class:"navbar"},b={class:"notification"},g={key:0,class:"badge"},v={key:1,class:"notification-dropdown"},L={key:0},y=["onClick"],E={class:"search-container"};function w(e,o,t,n,s,i){const l=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",p,[(0,r.Lk)("nav",null,[(0,r.Lk)("div",m,[(0,r.bF)(l,{to:"/"},{default:(0,r.k6)((()=>o[4]||(o[4]=[(0,r.Lk)("img",{src:h,alt:"Library Logo"},null,-1)]))),_:1})]),(0,r.Lk)("ul",f,[(0,r.Lk)("li",null,[(0,r.bF)(l,{to:"/BookPage"},{default:(0,r.k6)((()=>o[5]||(o[5]=[(0,r.eW)("Books")]))),_:1})]),i.isLoggedIn()?((0,r.uX)(),(0,r.CE)(r.FK,{key:0},[(0,r.Lk)("li",null,[(0,r.bF)(l,{to:"/profile"},{default:(0,r.k6)((()=>[(0,r.eW)((0,k.v_)(i.userUsername),1)])),_:1})]),(0,r.Lk)("li",null,[(0,r.bF)(l,{to:"/borrowedbooks"},{default:(0,r.k6)((()=>o[6]||(o[6]=[(0,r.eW)("Borrowed Books")]))),_:1})]),(0,r.Lk)("li",null,[(0,r.bF)(l,{to:"/EventManagement"},{default:(0,r.k6)((()=>o[7]||(o[7]=[(0,r.eW)("events")]))),_:1})]),(0,r.Lk)("li",null,[(0,r.Lk)("button",{onClick:o[0]||(o[0]=(...e)=>i.signOut&&i.signOut(...e))},"Sign Out")]),(0,r.Lk)("li",b,[(0,r.Lk)("span",{onClick:o[1]||(o[1]=(...e)=>i.toggleNotifications&&i.toggleNotifications(...e)),class:"notification-bell"},"🔔"),i.unreadCount>0?((0,r.uX)(),(0,r.CE)("span",g,(0,k.v_)(i.unreadCount),1)):(0,r.Q3)("",!0),s.showNotifications?((0,r.uX)(),(0,r.CE)("div",v,[0===s.notifications.length?((0,r.uX)(),(0,r.CE)("p",L,"No new notifications")):(0,r.Q3)("",!0),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.notifications,(e=>((0,r.uX)(),(0,r.CE)("p",{key:e.id},[(0,r.eW)((0,k.v_)(e.message)+" ",1),(0,r.Lk)("button",{onClick:o=>i.markAsRead(e.id)},"Mark as read",8,y)])))),128))])):(0,r.Q3)("",!0)])],64)):((0,r.uX)(),(0,r.CE)(r.FK,{key:1},[(0,r.Lk)("li",null,[(0,r.bF)(l,{to:"/login"},{default:(0,r.k6)((()=>o[8]||(o[8]=[(0,r.eW)("Login")]))),_:1})]),(0,r.Lk)("li",null,[(0,r.bF)(l,{to:"/signup"},{default:(0,r.k6)((()=>o[9]||(o[9]=[(0,r.eW)("Sign Up")]))),_:1})])],64)),(0,r.Lk)("li",E,[(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=e=>s.searchQuery=e),onInput:o[3]||(o[3]=(...e)=>i.onSearch&&i.onSearch(...e)),placeholder:"Search for books...",class:"search-bar"},null,544),[[a.Jo,s.searchQuery]]),o[10]||(o[10]=(0,r.Lk)("i",{class:"search-icon"},"🔍",-1))])])])])}var I=t(4373),C={name:"AppNavbar",data(){return{searchQuery:"",searchTimeout:null,notifications:[],showNotifications:!1,userinfo:null}},computed:{userUsername(){return localStorage.getItem("email")},unreadCount(){return this.notifications.filter((e=>"unread"===e.status)).length}},methods:{isLoggedIn(){return!!localStorage.getItem("token")},signOut(){localStorage.removeItem("token"),localStorage.removeItem("username"),localStorage.removeItem("userinfo"),alert("Logged out successfully"),this.$router.push("/login").then((()=>{window.location.reload()}))},onSearch(){clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout((()=>{this.$emit("search",this.searchQuery)}),300)},async fetchNotifications(){if(this.userinfo&&this.userinfo.memberID)try{const e=await I.A.get("http://localhost:3000/notifications",{params:{memberID:this.userinfo.memberID}});this.notifications=e.data}catch(e){console.error("Failed to fetch notifications:",e)}else console.error("MemberID is not available.")},toggleNotifications(){this.showNotifications=!this.showNotifications},async markAsRead(e){await fetch(`/notifications/${e}`,{method:"PATCH"});const o=this.notifications.find((o=>o.id===e));o&&(o.status="read")}},mounted(){const e=localStorage.getItem("userinfo");if(console.log("here is the stored"+e),e)try{this.userinfo=JSON.parse(e),this.userinfo.memberID?this.fetchNotifications():console.error("MemberID is missing in userinfo.")}catch(o){console.error("Error parsing userinfo from localStorage:",o)}else console.error("No userinfo found in localStorage.")}},S=t(1241);const D=(0,S.A)(C,[["render",w],["__scopeId","data-v-1f7120e0"]]);var _=D,B={name:"App",components:{AppNavbar:_},data(){return{searchQuery:""}},computed:{isHomePage(){return"/"===this.$route.path}},methods:{handleSearch(e){this.searchQuery=e},LoginPage(){this.$router.push("/login")}}};const A=(0,S.A)(B,[["render",d]]);var N=A,U=t(1387);const O={class:"main"},X={class:"ulbooks"},T=["onClick"],P=["src"],F={class:"book-info"},W={class:"author"},q={class:"book-id"};function x(e,o,t,a,n,s){return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("div",O,[(0,r.Lk)("ul",X,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.filteredBooks,(e=>((0,r.uX)(),(0,r.CE)("li",{class:"listbooks",key:e.BOOK_ID},[(0,r.Lk)("div",{class:"book-card",onClick:o=>s.goToBookDetails(e.bookID)},[(0,r.Lk)("img",{src:e.imagepath,alt:"Book Image",class:"book-image"},null,8,P),(0,r.Lk)("div",F,[(0,r.Lk)("h3",null,(0,k.v_)(e.title),1),(0,r.Lk)("p",W,[o[0]||(o[0]=(0,r.eW)("Author: ")),(0,r.Lk)("strong",null,(0,k.v_)(e.author),1)]),(0,r.Lk)("p",q,[o[1]||(o[1]=(0,r.eW)("Book ID: ")),(0,r.Lk)("span",null,(0,k.v_)(e.bookID),1)])])],8,T)])))),128))])])])}var J={name:"BookPage",props:["searchQuery"],data(){return{books:[],filteredBooks:[]}},watch:{searchQuery(e){this.handleSearch(e)}},created(){I.A.get("http://localhost:3000/books").then((e=>{this.books=e.data,this.filteredBooks=[...this.books]})).catch((e=>{console.error("Error fetching data:",e)}))},methods:{handleSearch(e){this.filteredBooks=e?this.books.filter((o=>o.title&&o.title.toLowerCase().includes(e.toLowerCase())||o.author&&o.author.toLowerCase().includes(e.toLowerCase()))):this.books},goToBookDetails(e){this.$router.push({name:"BookDetails",params:{id:e}})}}};const Q=(0,S.A)(J,[["render",x],["__scopeId","data-v-a118ae58"]]);var $=Q;const V={class:"book-details"},M={class:"book-header"},j=["src"],K={class:"book-info"},R={class:"book-title"},Y={class:"book-author"},H={class:"book-id"},G={class:"book-actions"},z={key:1,class:"unavailable-msg"};function Z(e,o,t,a,n,s){return(0,r.uX)(),(0,r.CE)("div",V,[(0,r.Lk)("div",M,[(0,r.Lk)("img",{src:n.book.imagepath,alt:"Book Image",class:"book-image"},null,8,j),(0,r.Lk)("div",K,[(0,r.Lk)("h1",R,(0,k.v_)(n.book.title),1),(0,r.Lk)("p",Y,[o[2]||(o[2]=(0,r.Lk)("strong",null,"Author:",-1)),(0,r.eW)(" "+(0,k.v_)(n.book.author),1)]),(0,r.Lk)("p",H,[o[3]||(o[3]=(0,r.Lk)("strong",null,"Book ID:",-1)),(0,r.eW)(" "+(0,k.v_)(n.book.bookID),1)])])]),(0,r.Lk)("div",G,[n.book.isAvailable?((0,r.uX)(),(0,r.CE)("button",{key:0,class:"reserve-button",onClick:o[0]||(o[0]=(...e)=>s.reserveBook&&s.reserveBook(...e))}," Reserve Book ")):((0,r.uX)(),(0,r.CE)("p",z,"This book is currently unavailable.")),"faculty"===n.membertype?((0,r.uX)(),(0,r.CE)("button",{key:2,class:"delete-button",onClick:o[1]||(o[1]=(...e)=>s.deleteBook&&s.deleteBook(...e))}," Delete Book ")):(0,r.Q3)("",!0)])])}var ee={name:"BookDetails",data(){return{book:{},memberId:null,membertype:null}},created(){const e=this.$route.params.id;I.A.get(`http://localhost:3000/books/${e}`).then((e=>{this.book=e.data})).catch((e=>{console.error("Error fetching book details:",e)}));const o=localStorage.getItem("userinfo");if(o)try{const e=JSON.parse(o);this.memberId=e.memberID,this.membertype=e.membershipType,console.log(e.membershipType),console.log(this.membertype),this.membertype=e.membershipType.trim().toLowerCase()}catch(t){console.error("Error parsing userinfo from localStorage:",t)}},methods:{reserveBook(){const e=this.book.bookID,o=(new Date).toISOString().split("T")[0],t=new Date;t.setDate(t.getDate()+7);const a=t.toISOString().split("T")[0];I.A.post("http://localhost:3000/reservations",{reservationType:"book",memberID:this.memberId,bookID:e,reservationDate:o,expirationDate:a}).then((e=>{console.log("Reservation successful:",e.data),alert("Book reserved successfully!")})).catch((e=>{console.error("Error making reservation:",e)}))},deleteBook(){const e=this.book.bookID;I.A.delete(`http://localhost:3000/books/${e}`).then((e=>{console.log("Book deleted successfully:",e.data),alert("Book deleted successfully!"),this.$router.push("/BookPage").then((()=>{window.location.reload()}))})).catch((e=>{console.error("Error deleting book:",e),alert("Error deleting the book. Please try again.")}))}}};const oe=(0,S.A)(ee,[["render",Z],["__scopeId","data-v-cec4518e"]]);var te=oe;const ae={class:"login"},re={class:"form-container"};function ne(e,o,t,n,s,i){return(0,r.uX)(),(0,r.CE)("div",ae,[o[8]||(o[8]=(0,r.Lk)("div",{class:"background-overlay"},null,-1)),(0,r.Lk)("div",re,[o[7]||(o[7]=(0,r.Lk)("h2",null,"Welcome Back",-1)),(0,r.Lk)("form",{onSubmit:o[2]||(o[2]=(0,a.D$)(((...e)=>i.loginUser&&i.loginUser(...e)),["prevent"]))},[o[3]||(o[3]=(0,r.Lk)("label",{for:"email"},"Email",-1)),(0,r.bo)((0,r.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":o[0]||(o[0]=e=>s.email=e),placeholder:"Enter your email",required:""},null,512),[[a.Jo,s.email]]),o[4]||(o[4]=(0,r.Lk)("label",{for:"password"},"Password",-1)),(0,r.bo)((0,r.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":o[1]||(o[1]=e=>s.password=e),placeholder:"Enter your password",required:""},null,512),[[a.Jo,s.password]]),o[5]||(o[5]=(0,r.Lk)("button",{type:"submit"},"Login",-1)),o[6]||(o[6]=(0,r.Lk)("p",{class:"signup-link"},[(0,r.eW)(" Don't have an account? "),(0,r.Lk)("a",{href:"/signup"},"Sign up")],-1))],32)])])}var se={data(){return{email:"",password:""}},methods:{async loginUser(){try{const e=await fetch("http://localhost:3000/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:this.email,password:this.password})}),o=await e.json();if(e.ok){localStorage.setItem("token",o.token),localStorage.setItem("email",this.email),localStorage.setItem("userinfo",JSON.stringify(o.user));const e=o.user.membershipType;console.log(e),localStorage.setItem("usertype",e),alert("Login successful"),this.$router.push("/BookPage").then((()=>{window.location.reload()})),localStorage.setItem("userLoggedIn","true")}else alert(`Login failed: ${o.message}`)}catch(e){console.error("Error logging in:",e),alert("An error occurred while logging in. Please try again later.")}}}};const ie=(0,S.A)(se,[["render",ne],["__scopeId","data-v-8d176528"]]);var le=ie;const ce={class:"signup-page"},ue={class:"signup"},de={class:"form-container"};function ke(e,o,t,n,s,i){return(0,r.uX)(),(0,r.CE)("div",ce,[(0,r.Lk)("div",ue,[o[14]||(o[14]=(0,r.Lk)("div",{class:"background-overlay"},null,-1)),(0,r.Lk)("div",de,[o[13]||(o[13]=(0,r.Lk)("h2",null,"Sign Up",-1)),(0,r.Lk)("form",{onSubmit:o[5]||(o[5]=(0,a.D$)(((...e)=>i.signupUser&&i.signupUser(...e)),["prevent"]))},[o[7]||(o[7]=(0,r.Lk)("label",{for:"memberName"},"Member Name:",-1)),(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>s.memberName=e),required:"",placeholder:"Enter your name"},null,512),[[a.Jo,s.memberName]]),o[8]||(o[8]=(0,r.Lk)("label",{for:"email"},"Email:",-1)),(0,r.bo)((0,r.Lk)("input",{type:"email","onUpdate:modelValue":o[1]||(o[1]=e=>s.email=e),required:"",placeholder:"Enter your email"},null,512),[[a.Jo,s.email]]),o[9]||(o[9]=(0,r.Lk)("label",{for:"password"},"Password:",-1)),(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":o[2]||(o[2]=e=>s.password=e),required:"",placeholder:"Enter your password"},null,512),[[a.Jo,s.password]]),o[10]||(o[10]=(0,r.Lk)("label",{for:"contactInfo"},"Contact Info:",-1)),(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=e=>s.contactInfo=e),required:"",placeholder:"Enter contact details"},null,512),[[a.Jo,s.contactInfo]]),o[11]||(o[11]=(0,r.Lk)("label",{for:"type"},"Role:",-1)),(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":o[4]||(o[4]=e=>s.type=e),id:"type"},o[6]||(o[6]=[(0,r.Lk)("option",{value:"faculty"},"Faculty",-1),(0,r.Lk)("option",{value:"student"},"Student",-1),(0,r.Lk)("option",{value:"regular"},"Regular",-1)]),512),[[a.u1,s.type]]),(0,r.Lk)("h5",null,"Selected role: "+(0,k.v_)(s.type),1),o[12]||(o[12]=(0,r.Lk)("button",{type:"submit"},"Sign Up",-1))],32)])])])}var he={data(){return{username:"",email:"",password:"",type:"",memberName:"",contactInfo:"",expiryDate:""}},methods:{async signupUser(){try{const e=await fetch("http://localhost:3000/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:this.email,password:this.password,memberName:this.memberName,contactInfo:this.contactInfo,membershipType:this.type})}),o=await e.json();e.ok?(alert("Signup successful"),this.$router.push("/login")):alert("Signup failed: "+o.message)}catch(e){console.error("Error signing up:",e)}}}};const pe=(0,S.A)(he,[["render",ke],["__scopeId","data-v-a244b7ce"]]);var me=pe;const fe={class:"profile"},be={key:0,class:"user-info"},ge={class:"info-item"},ve={class:"info-item"},Le={class:"info-item"},ye={class:"info-item"},Ee={class:"info-item"},we={key:1,class:"loading-state"};function Ie(e,o,t,a,n,s){return(0,r.uX)(),(0,r.CE)("div",fe,[o[11]||(o[11]=(0,r.Lk)("h1",null,"User Profile",-1)),n.userinfo?((0,r.uX)(),(0,r.CE)("div",be,[(0,r.Lk)("div",ge,[o[1]||(o[1]=(0,r.Lk)("i",{class:"fas fa-envelope"},null,-1)),(0,r.Lk)("p",null,[o[0]||(o[0]=(0,r.Lk)("strong",null,"Email:",-1)),(0,r.eW)(" "+(0,k.v_)(n.userEmail),1)])]),(0,r.Lk)("div",ve,[o[3]||(o[3]=(0,r.Lk)("i",{class:"fas fa-user"},null,-1)),(0,r.Lk)("p",null,[o[2]||(o[2]=(0,r.Lk)("strong",null,"Member Name:",-1)),(0,r.eW)(" "+(0,k.v_)(n.userinfo.memberName),1)])]),(0,r.Lk)("div",Le,[o[5]||(o[5]=(0,r.Lk)("i",{class:"fas fa-phone"},null,-1)),(0,r.Lk)("p",null,[o[4]||(o[4]=(0,r.Lk)("strong",null,"Contact Info:",-1)),(0,r.eW)(" "+(0,k.v_)(n.userinfo.contactInfo),1)])]),(0,r.Lk)("div",ye,[o[7]||(o[7]=(0,r.Lk)("i",{class:"fas fa-id-card"},null,-1)),(0,r.Lk)("p",null,[o[6]||(o[6]=(0,r.Lk)("strong",null,"Membership Type:",-1)),(0,r.eW)(" "+(0,k.v_)(n.userinfo.membershipType),1)])]),(0,r.Lk)("div",Ee,[o[9]||(o[9]=(0,r.Lk)("i",{class:"fas fa-id-badge"},null,-1)),(0,r.Lk)("p",null,[o[8]||(o[8]=(0,r.Lk)("strong",null,"Member ID:",-1)),(0,r.eW)(" "+(0,k.v_)(n.userinfo.memberID),1)])])])):((0,r.uX)(),(0,r.CE)("div",we,o[10]||(o[10]=[(0,r.Lk)("p",null,"Loading user information...",-1)])))])}var Ce={name:"ProfilePage",data(){return{userEmail:localStorage.getItem("email"),userinfo:null}},created(){const e=localStorage.getItem("userinfo");if(e)try{this.userinfo=JSON.parse(e)}catch(o){console.error("Error parsing userinfo from localStorage:",o),this.userinfo={}}}};const Se=(0,S.A)(Ce,[["render",Ie],["__scopeId","data-v-3a4cad73"]]);var De=Se;const _e={class:"admin-add-book"},Be={class:"form-group"},Ae={class:"form-group"},Ne={class:"form-group"},Ue={class:"form-group"},Oe={class:"form-group"},Xe={class:"form-group"},Te=["value"],Pe={class:"form-group"};function Fe(e,o,t,n,s,i){return(0,r.uX)(),(0,r.CE)("div",_e,[o[16]||(o[16]=(0,r.Lk)("h2",null,"Add a New Book",-1)),(0,r.Lk)("form",{onSubmit:o[7]||(o[7]=(0,a.D$)(((...e)=>i.submitBook&&i.submitBook(...e)),["prevent"]))},[(0,r.Lk)("div",Be,[o[8]||(o[8]=(0,r.Lk)("label",{for:"title"},"Title:",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>s.book.title=e),type:"text",id:"title",required:""},null,512),[[a.Jo,s.book.title]])]),(0,r.Lk)("div",Ae,[o[9]||(o[9]=(0,r.Lk)("label",{for:"author"},"Author:",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>s.book.author=e),type:"text",id:"author",required:""},null,512),[[a.Jo,s.book.author]])]),(0,r.Lk)("div",Ne,[o[10]||(o[10]=(0,r.Lk)("label",{for:"isbn"},"ISBN:",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[2]||(o[2]=e=>s.book.isbn=e),type:"text",id:"isbn",required:""},null,512),[[a.Jo,s.book.isbn]])]),(0,r.Lk)("div",Ue,[o[11]||(o[11]=(0,r.Lk)("label",{for:"publishYear"},"Publish Year:",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[3]||(o[3]=e=>s.book.publishYear=e),type:"number",id:"publishYear",required:""},null,512),[[a.Jo,s.book.publishYear]])]),(0,r.Lk)("div",Oe,[o[12]||(o[12]=(0,r.Lk)("label",{for:"shelfLocation"},"Shelf Location:",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[4]||(o[4]=e=>s.book.shelfLocation=e),type:"text",id:"shelfLocation"},null,512),[[a.Jo,s.book.shelfLocation]])]),(0,r.Lk)("div",Xe,[o[13]||(o[13]=(0,r.Lk)("label",{for:"category"},"Category:",-1)),(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":o[5]||(o[5]=e=>s.book.categoryID=e),id:"category",required:""},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.categories,(e=>((0,r.uX)(),(0,r.CE)("option",{value:e.categoryID,key:e.categoryID},(0,k.v_)(e.categoryName),9,Te)))),128))],512),[[a.u1,s.book.categoryID]])]),(0,r.Lk)("div",Pe,[o[14]||(o[14]=(0,r.Lk)("label",{for:"imagepath"},"Image Path:",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[6]||(o[6]=e=>s.book.imagepath=e),type:"text",id:"imagepath"},null,512),[[a.Jo,s.book.imagepath]])]),o[15]||(o[15]=(0,r.Lk)("button",{type:"submit"},"Add Book",-1))],32)])}var We={name:"AdminAddBook",data(){return{book:{title:"",author:"",isbn:"",publishYear:null,shelfLocation:"",categoryID:null,imagepath:""},categories:[]}},created(){this.fetchCategories()},methods:{fetchCategories(){I.A.get("http://localhost:3000/categories").then((e=>{this.categories=e.data})).catch((e=>{console.error("Error fetching categories:",e)}))},submitBook(){const e=localStorage.getItem("token");I.A.post("http://localhost:3000/admin/add-book",this.book,{headers:{Authorization:`Bearer ${e}`}}).then((()=>{alert("Book added successfully!"),this.$router.push("/admin")})).catch((e=>{console.error("Error adding book:",e),e.response&&403===e.response.status&&alert("You do not have permission to perform this action.")}))}}};const qe=(0,S.A)(We,[["render",Fe],["__scopeId","data-v-897a322a"]]);var xe=qe;const Je={class:"main"},Qe={class:"ulbooks"},$e=["onClick"],Ve=["src"],Me={class:"book-info"},je={class:"author"},Ke={class:"book-id"},Re={class:"book-id"};function Ye(e,o,t,a,n,s){return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("div",Je,[(0,r.Lk)("ul",Qe,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.filteredBooks,(e=>((0,r.uX)(),(0,r.CE)("li",{class:"listbooks",key:e.BOOK_ID},[(0,r.Lk)("div",{class:"book-card",onClick:o=>s.goToBookDetails(e.bookID)},[(0,r.Lk)("img",{src:e.imagepath,alt:"Book Image",class:"book-image"},null,8,Ve),(0,r.Lk)("div",Me,[(0,r.Lk)("h3",null,(0,k.v_)(e.title),1),(0,r.Lk)("p",je,[o[0]||(o[0]=(0,r.eW)("Author: ")),(0,r.Lk)("strong",null,(0,k.v_)(e.author),1)]),(0,r.Lk)("p",Ke,[o[1]||(o[1]=(0,r.eW)("Book ID: ")),(0,r.Lk)("span",null,(0,k.v_)(e.bookID),1)]),(0,r.Lk)("p",Re,[o[2]||(o[2]=(0,r.eW)(" Return Date: ")),(0,r.Lk)("span",null,(0,k.v_)(s.formatExpirationDate(e.expirationDate)),1)])])],8,$e)])))),128))])])])}var He={name:"borrowedbooks",props:["searchQuery"],data(){return{books:[],filteredBooks:[],userinfo:null}},watch:{searchQuery(e){this.handleSearch(e)}},created(){const e=localStorage.getItem("userinfo");if(e)try{if(this.userinfo=JSON.parse(e),this.userinfo&&this.userinfo.memberID){const e=this.userinfo.memberID;I.A.post("http://localhost:3000/borrowedbooks",{memberID:e}).then((e=>{this.books=e.data,this.filteredBooks=[...this.books]})).catch((e=>{console.error("Error fetching data:",e)}))}}catch(o){console.error("Error parsing userinfo from localStorage:",o),this.userinfo={}}},methods:{handleSearch(e){this.filteredBooks=e?this.books.filter((o=>o.title&&o.title.toLowerCase().includes(e.toLowerCase())||o.author&&o.author.toLowerCase().includes(e.toLowerCase()))):this.books},goToBookDetails(e){this.$router.push({name:"BookDetails",params:{id:e}})},formatExpirationDate(e){if(!e)return"No return date available";const o=new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return o}}};const Ge=(0,S.A)(He,[["render",Ye],["__scopeId","data-v-07cc431a"]]);var ze=Ge;const Ze={class:"event-management-container"},eo={class:"events-list"},oo={class:"event-cards"},to={class:"event-name"},ao={class:"event-date-location"},ro={class:"event-description"},no={key:0,class:"event-actions"},so=["onClick"],io=["onClick"],lo={key:0,class:"add-event-form"};function co(e,o,t,n,s,i){return(0,r.uX)(),(0,r.CE)("div",Ze,[o[12]||(o[12]=(0,r.Lk)("h1",{class:"title"},"Event Management",-1)),(0,r.Lk)("div",eo,[o[5]||(o[5]=(0,r.Lk)("h2",{class:"section-title"},"Upcoming Events",-1)),(0,r.Lk)("div",oo,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.filteredEvents,(o=>((0,r.uX)(),(0,r.CE)("div",{class:"event-card",key:o.id},[(0,r.Lk)("h3",to,(0,k.v_)(o.eventName),1),(0,r.Lk)("p",ao,(0,k.v_)(i.formatEventDate(o.eventDate))+" - "+(0,k.v_)(o.location),1),(0,r.Lk)("p",ro,(0,k.v_)(o.description),1),"Faculty"===i.isFaculty()?((0,r.uX)(),(0,r.CE)("div",no,[(0,r.Lk)("button",{class:"edit-btn",onClick:t=>e.editEvent(o.eventID)},"Edit",8,so),(0,r.Lk)("button",{class:"delete-btn",onClick:e=>i.deleteEvent(o.eventID)},"Delete",8,io)])):(0,r.Q3)("",!0)])))),128))])]),"Faculty"===i.isFaculty()?((0,r.uX)(),(0,r.CE)("div",lo,[o[11]||(o[11]=(0,r.Lk)("h2",{class:"section-title"},"Add New Event",-1)),(0,r.Lk)("form",{onSubmit:o[4]||(o[4]=(0,a.D$)(((...e)=>i.addEvent&&i.addEvent(...e)),["prevent"])),class:"form"},[o[6]||(o[6]=(0,r.Lk)("label",{for:"name"},"Event Name:",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>s.newEvent.name=e),type:"text",id:"name",required:"",class:"input-field",placeholder:"Enter event name"},null,512),[[a.Jo,s.newEvent.name]]),o[7]||(o[7]=(0,r.Lk)("label",{for:"date"},"Event Date:",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>s.newEvent.date=e),type:"date",id:"date",required:"",class:"input-field"},null,512),[[a.Jo,s.newEvent.date]]),o[8]||(o[8]=(0,r.Lk)("label",{for:"location"},"Location:",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[2]||(o[2]=e=>s.newEvent.location=e),type:"text",id:"location",required:"",class:"input-field",placeholder:"Enter event location"},null,512),[[a.Jo,s.newEvent.location]]),o[9]||(o[9]=(0,r.Lk)("label",{for:"description"},"Description:",-1)),(0,r.bo)((0,r.Lk)("textarea",{"onUpdate:modelValue":o[3]||(o[3]=e=>s.newEvent.description=e),id:"description",class:"textarea-field",placeholder:"Enter event description"},null,512),[[a.Jo,s.newEvent.description]]),o[10]||(o[10]=(0,r.Lk)("button",{type:"submit",class:"submit-btn"},"Create Event",-1))],32)])):(0,r.Q3)("",!0)])}var uo={props:["searchQuery"],data(){return{events:[],newEvent:{name:"",date:"",location:"",description:""},filteredEvents:[]}},watch:{searchQuery(e){this.handleSearch(e)}},methods:{handleSearch(e){this.filteredEvents=e?this.events.filter((o=>o.description.toLowerCase().includes(e.toLowerCase())||o.eventName.toLowerCase().includes(e.toLowerCase()))):[...this.events]},isFaculty(){return localStorage.getItem("usertype")},fetchEvents(){I.A.get("http://localhost:3000/events").then((e=>{this.events=e.data,this.filteredEvents=[...this.events]})).catch((e=>{console.error("Error fetching events:",e)}))},addEvent(){I.A.post("http://localhost:3000/events",this.newEvent).then((e=>{this.fetchEvents(),this.newEvent={name:"",date:"",location:"",description:""}})).catch((e=>{console.error("Error creating event:",e)}))},deleteEvent(e){confirm("Are you sure you want to delete this event?")&&I.A.delete(`http://localhost:3000/events/${e}`).then((e=>{this.fetchEvents()})).catch((e=>{console.error("Error deleting event:",e)}))},formatEventDate(e){const o=new Date(e),t={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"};return o.toLocaleDateString("en-US",t)}},created(){this.fetchEvents()}};const ko=(0,S.A)(uo,[["render",co],["__scopeId","data-v-64e00d64"]]);var ho=ko;const po=[{path:"/bookPage",name:"BookPage",component:$,props:e=>({searchQuery:e.query.searchQuery})},{path:"/books/:id",name:"BookDetails",component:te},{path:"/login",component:le},{path:"/signup",component:me},{path:"/Profile",name:"Profile",component:De},{path:"/",redirect:"/bookPage"},{path:"/admin/add-book",name:"AdminAddBook",component:xe,meta:{requiresAdmin:!0}},{path:"/borrowedbooks",name:"borrowedbooks",component:ze},{path:"/EventManagement",name:"EventManagement",component:ho}],mo=(0,U.aE)({history:(0,U.LA)(),routes:po});var fo=mo;(0,a.Ef)(N).use(fo).mount("#app")}},o={};function t(a){var r=o[a];if(void 0!==r)return r.exports;var n=o[a]={exports:{}};return e[a].call(n.exports,n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(o,a,r,n){if(!a){var s=1/0;for(u=0;u<e.length;u++){a=e[u][0],r=e[u][1],n=e[u][2];for(var i=!0,l=0;l<a.length;l++)(!1&n||s>=n)&&Object.keys(t.O).every((function(e){return t.O[e](a[l])}))?a.splice(l--,1):(i=!1,n<s&&(s=n));if(i){e.splice(u--,1);var c=r();void 0!==c&&(o=c)}}return o}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[a,r,n]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var a in o)t.o(o,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:o[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={524:0};t.O.j=function(o){return 0===e[o]};var o=function(o,a){var r,n,s=a[0],i=a[1],l=a[2],c=0;if(s.some((function(o){return 0!==e[o]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(l)var u=l(t)}for(o&&o(a);c<s.length;c++)n=s[c],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(u)},a=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a))}();var a=t.O(void 0,[504],(function(){return t(1139)}));a=t.O(a)})();
//# sourceMappingURL=app.993cfcab.js.map