(this.webpackJsonpgooglebooks=this.webpackJsonpgooglebooks||[]).push([[0],{28:function(e,t,a){e.exports=a(56)},56:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),o=a.n(r),c=a(26),s=a(1),m=a(10),i=a(11),u=a(13),d=a(12),E=a(8),h=a.n(E),b=function(e){return h.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},v=function(){return h.a.get("/api/books")},f=function(e){return h.a.delete("/api/books/"+e)},p=function(e){return h.a.post("/api/books",e)};function k(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function N(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function g(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},a)}var B=function(e){return 0===e.savedBooks.length?l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body player"},l.a.createElement("div",{className:"article"},l.a.createElement("h3",null,"Books that You Saved")))):l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body player"},l.a.createElement("div",{className:"article"},l.a.createElement("h3",null,"Books that You Saved"),e.savedBooks.map((function(t){return l.a.createElement("li",{className:"saved-list list-group-item"},l.a.createElement(N,{className:"SearchResult",id:t.title+"Card",key:t._id},l.a.createElement(g,{size:"2",className:"bookImage"},l.a.createElement("img",{src:t.image,alt:t.title})),l.a.createElement(g,{size:"1",className:"emptyCol"}),l.a.createElement(g,{size:"9",className:"bookInfo"},l.a.createElement(N,null,l.a.createElement("h2",{className:"bookTitle"},t.title)),l.a.createElement(N,null,l.a.createElement("h3",{className:"bookAuthor"},t.authors)),l.a.createElement(N,null,l.a.createElement("p",{className:"bookDescription"},t.description)))),l.a.createElement("br",null),l.a.createElement(N,{className:"buttonDiv "},l.a.createElement("button",{className:"deleteBook btn btn-danger",id:t._id,onClick:function(){return e.handleDeleteButton(t._id)}},"Delete Book"),l.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("button",{className:"viewBook btn btn-success"},"View Book"))))})))))},y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={savedBooks:[]},e.handleDeleteButton=function(t){f(t).then((function(t){return e.componentDidMount()})).catch((function(e){return console.log(e)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;v().then((function(t){return e.setState({savedBooks:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement(k,{fluid:!0,className:"container"},l.a.createElement(k,null,l.a.createElement(B,{savedBooks:this.state.savedBooks,handleDeleteButton:this.handleDeleteButton})))}}]),a}(n.Component),S=function(e){return l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"BookSearchLabel"},l.a.createElement("h3",null,"Search For Book")),l.a.createElement("br",null),l.a.createElement("input",{className:"col-12 form-control",value:e.search,type:"text",name:"searchBook",placeholder:"Enter Book's Name",onChange:e.handleInputChange})),l.a.createElement("button",{type:"submit",className:"submitBtn btn btn-primary",onClick:e.handleFormSubmit},"Submit"))},w=function(e){return 0===e.books.length?l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body player"},l.a.createElement("div",{className:"article"},l.a.createElement("h3",null,"Search Results")))):l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body player"},l.a.createElement("div",{className:"article"},l.a.createElement("h3",null,"Search Results"),e.books.map((function(t){return l.a.createElement("li",{className:"search-list list-group-item"},l.a.createElement(N,{className:"SearchResult row",id:t.title+"Card",key:t._id},l.a.createElement(g,{size:"2",className:"bookImage"},l.a.createElement("img",{src:t.image,alt:t.title})),l.a.createElement(g,{size:"1",className:"emptyCol"}),l.a.createElement(g,{size:"9",className:"bookInfo"},l.a.createElement(N,null,l.a.createElement("h3",{className:"bookTitle"},t.title)),l.a.createElement(N,null,l.a.createElement("h4",{className:"bookAuthor"},t.author)),l.a.createElement(N,null,l.a.createElement("p",{className:"bookDescription"},t.description)))),l.a.createElement("br",null),l.a.createElement(N,{className:"buttonDiv "},l.a.createElement("button",{className:"saveBook btn btn-primary",id:t.id,onClick:function(t){return e.handleSavedButton(t)}},"Save Book"),l.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("button",{className:"viewBook btn btn-success"},"View Book"))))})))))},C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={search:"",books:[],error:"",message:""},e.handleInputChange=function(t){e.setState({search:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault(),b(e.state.search).then((function(t){if("error"===t.data.items)throw new Error(t.data.items);var a=t.data.items;a=a.map((function(e){return e={key:e.id,id:e.id,title:e.volumeInfo.title,author:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.infoLink}})),e.setState({books:a,error:""})})).catch((function(t){return e.setState({error:t.items})}))},e.handleSavedButton=function(t){t.preventDefault(),console.log(e.state.books);var a=e.state.books.filter((function(e){return e.id===t.target.id}));a=a[0],p(a).then(e.setState({message:alert("Your book is saved")})).catch((function(e){return console.log(e)}))},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(k,{fluid:!0},l.a.createElement("br",null),l.a.createElement(k,null,l.a.createElement(N,null,l.a.createElement(g,{size:"12"},l.a.createElement(S,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange})))),l.a.createElement("br",null),l.a.createElement(k,null,l.a.createElement(w,{books:this.state.books,handleSavedButton:this.handleSavedButton})))}}]),a}(n.Component);var I=function(e){var t=e.children;return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)};var D=function(){return l.a.createElement(k,{fluid:!0},l.a.createElement(N,null,l.a.createElement(g,{size:"md-12"},l.a.createElement(I,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var j=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Google Books Search"),l.a.createElement("div",{id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item",id:"home"},l.a.createElement("a",{className:"nav-link",href:"/"},l.a.createElement("button",{type:"button",className:"btn btn-info text-white"},"Search Books"))),l.a.createElement("li",{className:"nav-item",id:"report"},l.a.createElement("a",{className:"nav-link",href:"/saved"},l.a.createElement("button",{type:"button",className:"btn btn-warning text-white"},"Saved Books"))))))};var x=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:C}),l.a.createElement(s.a,{exact:!0,path:"/saved",component:y}),l.a.createElement(s.a,{exact:!0,path:"/saved/:id",component:y}),l.a.createElement(s.a,{component:D}))))};o.a.render(l.a.createElement(x,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.41e3c101.chunk.js.map