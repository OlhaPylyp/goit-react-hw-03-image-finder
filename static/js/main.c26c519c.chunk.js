(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var o=a(0),r=a.n(o),n=a(20),c=a.n(n),l=a(7),s=a(11),i=a(4),m=a(13),u=a(12),h=a(23),d=a.n(h),g=a(1),b=document.querySelector("#modal-root"),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).handleKeyClose=function(t){"Escape"===t.code&&e.props.onClose()},e.backdropClick=function(t){console.log("e.currentTarget",t.target),t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyClose)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyClose)}},{key:"render",value:function(){return Object(n.createPortal)(Object(g.jsx)("div",{className:d.a.backdrops,onClick:this.backdropClick,children:Object(g.jsx)("div",{className:d.a.modal,children:this.props.children})}),b)}}]),a}(o.Component),j=a(116),p=a(42),_=a(24),y=a.n(_),O=a(25),v=a.n(O),S=function(e){var t=e.id,a=e.webformatURL,o=e.modalSrc,r=e.onClick;return Object(g.jsx)("li",{className:v.a.imageGalleryItem,children:Object(g.jsx)("img",{src:a,alt:"querly img",className:v.a.imageGalleryItem_image,onClick:function(){return r({modalSrc:o})}})},t)},I=function(e){var t=e.images,a=e.onClick;return Object(g.jsx)("div",{className:y.a.grid,children:Object(g.jsx)("ul",{className:y.a.imageGallery,children:t.map((function(e){var t=e.id,o=e.webformatURL,r=e.largeImageURL;return Object(g.jsx)(S,{id:t,webformatURL:o,modalSrc:r,onClick:a})}))})})},k=a(26),x=a.n(k),C=function(e){var t=e.onClick;return Object(g.jsx)("div",{className:x.a.container,children:Object(g.jsxs)("button",{className:x.a.button,type:"button",onClick:t,children:[" ","LoadMore"]})})},w=a(43),L=a.n(w),M=function(e){var t=e.searchImage,a=void 0===t?"":t,o=e.currentPage,r=void 0===o?1:o;return L.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(r,"&key=").concat("20342526-89d38198e8299a53d4950dffe","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},N=a(14),R=a.n(N),F=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={image:""},e.handleChange=function(t){e.setState({image:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.image),e.setState({image:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsx)("header",{className:R.a.search_bar,children:Object(g.jsxs)("form",{className:R.a.searchForm,onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:R.a.searchForm_button,children:Object(g.jsx)("span",{className:R.a.searchForm_button_label,children:"Search"})}),Object(g.jsx)("input",{onChange:this.handleChange,className:R.a.searchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.image})]})})})}}]),a}(o.Component),U=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).state={showModal:!1,images:[],currentPage:1,searchImage:"",isLoading:!1,error:null,modalURL:"",scrollScr:!1,enterError:!1},o.addImage=function(e){o.setState({searchImage:e,images:[],currentPage:1})},o.checkScroll=function(){o.state.scrollScr&&(console.log("lets scroll"),window.scrollTo({top:document.documentElement.scrollTop+document.documentElement.clientHeight,behavior:"smooth"})),o.state.searchImage.length>0?o.setState({scrollScr:!0}):console.log("2")},o.fetchImage=function(){console.log("fetchImage()");var e=o.state,t=e.searchImage,a={searchImage:t,currentPage:e.currentPage};o.setState({isLoading:!0}),t.length<=2?o.setState({isLoading:!1}):M(a).then((function(e){return o.setState((function(t){return{images:[].concat(Object(l.a)(t.images),Object(l.a)(e)),currentPage:t.currentPage+1}}))})).catch((function(e){return o.setState({error:e})})).finally((function(){return o.setState({isLoading:!1})}))},o.toogleModal=function(){console.log("toogleModal()"),o.setState((function(e){return{showModal:!e.showModal}}))},o.getModalImage=function(e){console.log("modalURL",o.state.modalURL),o.setState({modalURL:e.modalSrc}),o.toogleModal()},o.listRef=r.a.createRef(),o}return Object(i.a)(a,[{key:"getSnapshotBeforeUpdate",value:function(e,t){if(t.images.length<this.state.images.length){var a=this.listRef.current;return a.scrollHeight-a.scrollTop}return null}},{key:"componentDidUpdate",value:function(e,t,a){if(t.searchImage!==this.state.searchImage&&(console.log("call fetchImage()"),this.fetchImage()),null!==a){var o=this.listRef.current;console.log("snapshot: ",o.scrollHeight,a),this.state.scrollScr?window.scrollTo({top:document.documentElement.scrollTop+(o.scrollHeight-a),behavior:"smooth"}):this.setState({scrollScr:!0})}}},{key:"render",value:function(){var e=this.state,t=e.showModal,a=e.images,o=e.isLoading,r=e.modalURL,n=e.error;return console.log("render() searchImage",this.state.searchImage),Object(g.jsxs)("div",{ref:this.listRef,children:[" ",Object(g.jsx)(F,{onSubmit:this.addImage}),Object(g.jsx)(I,{images:a,onClick:this.getModalImage}),n&&Object(g.jsx)(p.Notification,{type:"error",title:"Error",text:"Please write some querly",animateIn:"bounceInLeft",animateOut:"bounceOutRight",delay:2500,shadow:!0,hide:!0,nonblock:!1,desktop:!1}),o&&Object(g.jsx)(j.a,{color:"secondary"}),a.length>0&&Object(g.jsx)(C,{onClick:this.fetchImage}),t&&Object(g.jsx)(f,{onClick:this.toogleModal,onClose:this.toogleModal,children:Object(g.jsx)("img",{width:"1200",height:"900",src:r,alt:"something"})})]})}}]),a}(o.Component);a(104);c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(U,{})}),document.getElementById("root"))},14:function(e,t,a){e.exports={searchForm_button:"Searchbar_searchForm_button__jKCj1",searchForm:"Searchbar_searchForm__f4C91",search_bar:"Searchbar_search_bar__3pSHF",searchForm_button_label:"Searchbar_searchForm_button_label__223ro",searchForm_input:"Searchbar_searchForm_input__15rsc"}},23:function(e,t,a){e.exports={backdrops:"Modal_backdrops__2aA56",modal:"Modal_modal__2HClk",button:"Modal_button__HNMIU",loader:"Modal_loader__3Beo3"}},24:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__389uE"}},25:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__28Ny4",imageGalleryItem_image:"ImageGalleryItem_imageGalleryItem_image__rAJJt"}},26:function(e,t,a){e.exports={button:"Button_button__1xxSI",container:"Button_container__lLX_2"}}},[[105,1,2]]]);
//# sourceMappingURL=main.c26c519c.chunk.js.map