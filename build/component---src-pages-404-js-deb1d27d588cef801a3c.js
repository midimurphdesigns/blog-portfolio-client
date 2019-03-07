(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return u});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(157),c=n(155),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return i.a.createElement(l.a,{location:this.props.location,title:e},i.a.createElement(c.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(i.a.Component);t.default=s;var u="1097489062"},151:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(32),c=n.n(l);n.d(t,"a",function(){return c.a});n(153);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return d});var a=n(165),r=n.n(a),o=n(166),i=n.n(o),l=(n(167),n(168),n(169)),c=n.n(l);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var s=new r.a(c.a);var u=s.rhythm,d=s.scale},153:function(e,t,n){var a;e.exports=(a=n(154))&&a.default||a},154:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(54),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},155:function(e,t,n){"use strict";var a=n(156),r=n(0),o=n.n(r),i=n(4),l=n.n(i),c=n(170),s=n.n(c);function u(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,l=e.title,c=a.data.site,u=t||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Kevin Murphy Web Dev Blog",description:"A blog for all things web & mobile development.",author:"Kevin Murphy"}}}}},157:function(e,t,n){"use strict";n(33);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(151),c=n(152),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("header",{style:{display:"flex",flexDirection:"row",backgroundColor:"#5DA5F2",width:"100%",height:"70px",top:"0",left:"0",borderBottom:"1px solid black"}},i.a.createElement("nav",{style:{display:"flex",flexDirection:"row",alignItems:"center",height:"100%",width:"100%",padding:"0, 10px"}},i.a.createElement("div",null,i.a.createElement("a",{style:{display:"flex",flexDirection:"row",fontSize:"35px",color:"white",fontWeight:"500",width:200,fontFamily:"Pacifico",paddingLeft:20},href:"//kevinmurphywebdev.com"},"Kevin Murphy")),i.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",height:"100%",width:"100%"}},i.a.createElement("ul",{style:{display:"flex",flexDirection:"row",textDecoration:"none",listStyleType:"none",padding:"10px",color:"white",fontFamily:"Montserrat",paddingTop:50}},i.a.createElement("li",null,i.a.createElement("a",{href:"//kevinmurphywebdev.com",style:{padding:"10px",color:"white"}},"About Me")),i.a.createElement("li",null,i.a.createElement("a",{href:"//kevinmurphywebdev.com/portfolio",style:{padding:"10px",color:"white"}},"Portfolio")),i.a.createElement("li",null,i.a.createElement("a",{href:"//kevinmurphywebdev.com/resources",style:{padding:"10px",color:"white"}},"Resources")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/",style:{padding:"10px",color:"white"}},"Blog"))))))},t}(o.Component),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.title,r=t.children;return e="/"===n.pathname?i.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},i.a.createElement(l.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit",textDecorationColor:"red"},to:"/"},a)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement("a",{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},href:"https://blog.kevinmurphywebdev.com"},a)),i.a.createElement("div",{style:{backgroundImage:"linear-gradient( to bottom, #cfe8fd, rgba(232,244,254,.5) ), url(../../../../content/assets/km-logo.png)",height:"100vh"}},i.a.createElement(s,null),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},i.a.createElement("header",null,e),i.a.createElement("main",null,r),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),","," ",i.a.createElement("a",{href:"https://kevinmurphywebdev.com"},"Kevin Murphy"))))},t}(i.a.Component);t.a=u}}]);
//# sourceMappingURL=component---src-pages-404-js-deb1d27d588cef801a3c.js.map