(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return A});a(33);var r=a(7),i=a.n(r),n=a(0),o=a.n(n),s=a(151),l=a(158),d=a(155),c=a(156),u=a(152),f=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,i=a.next;return o.a.createElement(d.a,{location:this.props.location,title:t},o.a.createElement(c.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),o.a.createElement("h1",null,e.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-1)})},e.frontmatter.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),o.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),o.a.createElement(l.a,null),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,r&&o.a.createElement(s.a,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),o.a.createElement("li",null,i&&o.a.createElement(s.a,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))))},t}(o.a.Component);t.default=f;var A="3654438753"},151:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(0),i=a.n(r),n=a(4),o=a.n(n),s=a(32),l=a.n(s);a.d(t,"a",function(){return l.a});a(153);var d=i.a.createContext({}),c=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(163),i=a.n(r),n=a(164),o=a.n(n);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new i.a(o.a);var l=s.rhythm,d=s.scale},153:function(e,t,a){var r;e.exports=(r=a(154))&&r.default||r},154:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),i=a.n(r),n=a(4),o=a.n(n),s=a(54),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},155:function(e,t,a){"use strict";a(33);var r=a(7),i=a.n(r),n=a(0),o=a.n(n),s=(a(151),a(152)),l=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,i=t.children;return e="/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(s.b)(1.5),{marginBottom:Object(s.a)(1.5),marginTop:0})},o.a.createElement("a",{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},href:"https://kevinmurphywebdev.com"},r)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement("a",{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},href:"https://kevinmurphywebdev.com"},r)),o.a.createElement("div",{style:{backgroundImage:"linear-gradient( to bottom, #cfe8fd, rgba(232,244,254,.5) ), url(../../../../content/assets/km-logo.png)"}},o.a.createElement("header",{style:{display:"flex",flexDirection:"row",backgroundColor:"blue",width:"100%",height:"70px",top:"0",left:"0"}},o.a.createElement("nav",{style:{display:"flex",flexDirection:"row",alignItems:"center",height:"100%",width:"100%",padding:"0, 10px"}},o.a.createElement("div",{style:{flex:"1"}}),o.a.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"35px",textDecoration:"none",color:"white",fontWeight:"500"}},o.a.createElement("a",{style:{display:"flex",flexDirection:"row",fontSize:"35px",textDecoration:"none",color:"white",fontWeight:"500",width:"100%"},href:"//kevinmurphywebdev.com"},"Kevin Murphy")),o.a.createElement("div",{style:{flex:"1"}}),o.a.createElement("div",{style:{flex:"0.5"}}),o.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",height:"100%",width:"100%"}},o.a.createElement("ul",{style:{display:"flex",flexDirection:"row",textDecoration:"none",listStyleType:"none",padding:"10px",color:"white"}},o.a.createElement("li",null,o.a.createElement("a",{href:"//kevinmurphywebdev.com"},"About Me")),o.a.createElement("li",null,o.a.createElement("a",{href:"//kevinmurphywebdev.com/portfolio"},"Portfolio")),o.a.createElement("li",null,o.a.createElement("a",{href:"//kevinmurphywebdev.com/resources"},"Resources")),o.a.createElement("li",null,o.a.createElement("a",{href:"//blog.kevinmurphywebdev.com"},"Blog")))))),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},o.a.createElement("header",null,e),o.a.createElement("main",null,i),o.a.createElement("footer",null,"© ",(new Date).getFullYear(),","," ",o.a.createElement("a",{href:"https://kevinmurphywebdev.com"},"Kevin Murphy"))))},t}(o.a.Component);t.a=l},156:function(e,t,a){"use strict";var r=a(157),i=a(0),n=a.n(i),o=a(4),s=a.n(o),l=a(165),d=a.n(l);function c(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,s=e.title,l=r.data.site,c=t||l.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=c},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Kevin Murphy Web Dev Blog",description:"A blog for all things web & mobile development.",author:"Kevin Murphy"}}}}},158:function(e,t,a){"use strict";a(159);var r=a(161),i=a(0),n=a.n(i),o=a(151),s=a(162),l=a.n(s),d=a(152);var c="4007731267";t.a=function(){return n.a.createElement(o.b,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,a)," who lives and works in Tempe, AZ, building web & mobile apps."," ",n.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"You should follow him on Twitter")))},data:r})}},159:function(e,t,a){"use strict";a(160)("fixed",function(e){return function(){return e(this,"tt","","")}})},160:function(e,t,a){var r=a(11),i=a(17),n=a(18),o=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},161:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUDAv/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAGzznkNJySJmFVFf//EAB0QAAICAQUAAAAAAAAAAAAAAAEDAhEABBAhIjP/2gAIAQEAAQUCaagrjZ7YxyL6INjU+wxJ6f/EABURAQEAAAAAAAAAAAAAAAAAACBB/9oACAEDAQE/AYP/xAAVEQEBAAAAAAAAAAAAAAAAAAAgQf/aAAgBAgEBPwGj/8QAGxAAAgIDAQAAAAAAAAAAAAAAAAEQERIxQXH/2gAIAQEABj8C3Rtv2MH0rhY5/8QAHRABAAICAgMAAAAAAAAAAAAAAQARIUEQMVFhof/aAAgBAQABPyF3qx2QOFT2t47Iv4hUi/OAA6YpYRt9z//aAAwDAQACAAMAAAAQZMjD/8QAFhEAAwAAAAAAAAAAAAAAAAAAAREg/9oACAEDAQE/EAof/8QAFREBAQAAAAAAAAAAAAAAAAAAICH/2gAIAQIBAT8Qof/EAB4QAQACAQQDAAAAAAAAAAAAAAEAESExQWGhEFFx/9oACAEBAAE/ELokBuBvXNQFxWzEP314EyiLSqK6sxeWHTfJERsLGMg8HUwFTFaBV1P/2Q==",width:50,height:50,src:"/static/d077ab51df65b56565a37f53af2a8299/be31c/profile-pic.jpg",srcSet:"/static/d077ab51df65b56565a37f53af2a8299/be31c/profile-pic.jpg 1x,\n/static/d077ab51df65b56565a37f53af2a8299/83167/profile-pic.jpg 1.5x,\n/static/d077ab51df65b56565a37f53af2a8299/a795d/profile-pic.jpg 2x,\n/static/d077ab51df65b56565a37f53af2a8299/ec61a/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Kevin Murphy",social:{twitter:"kmurphywebdev"}}}}}},162:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),o=r(a(34)),s=r(a(74)),l=r(a(75)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},A=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p=[];var h=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),p.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+"<img "+s+l+a+i+t+o+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},u,{onLoad:o,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});g.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,s=A(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:A(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=A(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,p=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.Tag,E=e.itemProp,v="boolean"==typeof y?"lightgray":y,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),x={title:t,alt:this.state.isVisible?"":a,style:w,className:A};if(p){var j=p;return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),j.base64&&d.default.createElement(g,(0,l.default)({src:j.base64},x)),j.tracedSVG&&d.default.createElement(g,(0,l.default)({src:j.tracedSVG},x)),v&&d.default.createElement(b,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,j.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),d.default.createElement(g,{alt:a,title:t,sizes:j.sizes,src:j.src,srcSet:j.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},j))}}))}if(h){var R=h,B=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},n);return"inherit"===n.display&&delete B.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&d.default.createElement(g,(0,l.default)({src:R.base64},x)),R.tracedSVG&&d.default.createElement(g,(0,l.default)({src:R.tracedSVG},x)),v&&d.default.createElement(b,{title:t,style:{backgroundColor:v,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement(g,{alt:a,title:t,width:R.width,height:R.height,sizes:R.sizes,src:R.src,srcSet:R.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:b,sizes:E,fixed:b,fluid:E,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var v=y;t.default=v}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-e7db6b740a71c4829a83.js.map