webpackJsonp([18],{271:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0}),a.FakerImage=a.Faker=void 0;var r=t(8),n=l(r),u=t(11),s=l(u),o=t(4),f=l(o),d=t(10),i=l(d),c=t(6),m=l(c),p=t(5),g=l(p),h=t(2),M=l(h),_=t(25),C=l(_),y=t(12),D=l(y),U=t(19),E=(l(U),function(e,a){var t="000000000"+e;return t.substr(t.length-a)});C.default.date.day=function(){return E(1+Math.floor(31*Math.random()),2)},C.default.date.monthDigit=function(){return E(1+Math.floor(12*Math.random()),2)},C.default.date.time=function(){var e=E(1+Math.floor(12*Math.random()),2),a=E(1+Math.floor(60*Math.random()),2);return e+":"+a},C.default.date.year=function(){return(2011+Math.floor(6*Math.random())).toString()},C.default.date.monthShort=function(){return C.default.date.month().substr(0,3)},C.default.date.weekdayShort=function(){return C.default.date.weekday().substr(0,3)};var v=function(e){var a=e.replace(/\[/g,"{{").replace(/\]/g,"}}"),t=C.default.fake(a);return t},k=function(e){function a(){(0,f.default)(this,a);var e=(0,m.default)(this,(a.__proto__||(0,s.default)(a)).call(this));return e.prevValue=null,e}return(0,g.default)(a,e),(0,i.default)(a,[{key:"fake",value:function(e){return this.prevValue||(this.prevValue=v(e)),this.prevValue}},{key:"render",value:function(){var e=D.default.omit(this.props,"children");return M.default.createElement("span",e,this.fake(this.props.children))}}]),a}(M.default.Component);k.propTypes={children:h.PropTypes.string.isRequired};var x=function(e){function a(){(0,f.default)(this,a);var e=(0,m.default)(this,(a.__proto__||(0,s.default)(a)).call(this));return e.lastImageUrl=null,e}return(0,g.default)(a,e),(0,i.default)(a,[{key:"fake",value:function(e){return this.lastImageUrl||(this.lastImageUrl=C.default.image[e]()),this.lastImageUrl}},{key:"render",value:function(){var e=D.default.omit(this.props,"imageType");return M.default.createElement("img",(0,n.default)({},e,{src:this.fake(this.props.imageType)}))}}]),a}(M.default.Component);x.propTypes={imageType:h.PropTypes.string.isRequired},a.Faker=k,a.FakerImage=x},272:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.FakerImage=void 0;var l=t(271);a.FakerImage=l.FakerImage,a.default=l.Faker},1866:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var r=t(66),n=l(r),u=t(67),s=l(u),o=t(11),f=l(o),d=t(4),i=l(d),c=t(10),m=l(c),p=t(6),g=l(p),h=t(5),M=l(h),_=t(2),C=l(_),y=t(172),D=l(y),U=t(19),E=(l(U),t(298)),v=l(E),k=t(12),x=l(k),b=t(44),P=l(b),S=t(43),N=l(S),T=t(3),V=t(272),I=l(V),w=t(37),R=l(w),B=t(35),W=l(B),F=t(20),O=t(2405),L=l(O),j=t(14),G=t(18),H=t(3475),K=l(H),q=function(e){return(0,R.default)(e)},A=function(e){var a=function(e){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,t=[],l=0;l<a;l++){var r=Math.round(Math.random()*e);t.push(r)}return t};return x.default.map(e,function(e){return(0,N.default)({},e,{CpuUsage:{Data:a(e.CpuUsage.Max),Metric:"%",Color:j.Colors.brandWarning},MemoryUsage:{Data:a(e.MemoryUsage.Max),Metric:"Mb",Color:j.Colors.brandSuccess},DiskUsage:{Data:a(e.DiskUsage.Max),Metric:"KB/s",Color:j.Colors.brandDanger},ProcessCount:{Data:a(e.ProcessCount.Max),Color:j.Colors.brandPrimary}})})},z=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,a=[],t=0;t<e;t++)a.push(Math.round(100*Math.random()));return a},J=function(e,a,t){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"%";return C.default.createElement(T.Col,{lg:3,sm:6},C.default.createElement(T.Panel,{className:L.default.componentPanel,header:C.default.createElement(T.Media,{className:L.default.filledMedia,style:{backgroundColor:t}},C.default.createElement(T.Media.Body,null,C.default.createElement("p",{className:"text-white"},e),C.default.createElement("p",{className:L.default.componentVal},a.Value,C.default.createElement("small",null,l)),C.default.createElement(T.Label,{bsStyle:"custom",customColor:j.Colors.brandWhite,outline:!0,className:L.default.componentDiff},a.DiffInc?C.default.createElement("i",{className:"fa fa-caret-up"}):C.default.createElement("i",{className:"fa fa-caret-down"})," "+a.Diff+"%")),C.default.createElement(T.Media.Right,null,C.default.createElement(T.Charts.SparklineDonut,{animated:!0,value:a.Value/a.Max*100,radius:68,innerRadius:"30%",color:j.Colors.brandWhite})))},C.default.createElement(T.Charts.SparklineBar,{data:a.Data,width:158,height:52,color:j.Colors.grayLight,block:!0})))},Q=function(e){var a=function(e,a,t,l){var r=Math.round(a/t*100),n=t-a;return C.default.createElement("div",{key:(0,v.default)(e)},C.default.createElement("div",{className:L.default.generalRow},C.default.createElement("h4",null,e),C.default.createElement(T.Label,{className:"label-gray-lighter label-outline"},"v ",l)),C.default.createElement("div",{className:"p-y-1"},C.default.createElement(T.SlimProgressBar,{now:r})),C.default.createElement("div",{className:L.default.generalRow},C.default.createElement("span",{className:"text-white"},r,"%"),C.default.createElement("span",null,(0,P.default)(n).format("0,0")," GB Left")))},t=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return C.default.createElement("div",null,C.default.createElement("p",{className:L.default.processComponentVal},x.default.last(e)+" "+t),C.default.createElement(T.Charts.SparklineLine,{data:e,width:200,height:33,color:a}))};return C.default.createElement(T.Panel,{header:C.default.createElement("div",{className:L.default.panelHeading},C.default.createElement("h4",null,"Processes"),C.default.createElement(T.ButtonGroup,{bsSize:"small"},C.default.createElement(T.Button,null,C.default.createElement("i",{className:"fa fa-angle-left"})),C.default.createElement(T.Button,null,C.default.createElement("i",{className:"fa fa-angle-right"}))))},C.default.createElement("p",null,C.default.createElement(I.default,null,"[lorem.paragraph]")),C.default.createElement(T.Table,{responsive:!0,fill:!0,standard:!0,className:L.default.processTable},C.default.createElement("thead",null,C.default.createElement("tr",null,C.default.createElement("th",{style:{width:"20%",minWidth:"135px"}},"Name"),C.default.createElement("th",null,"Count"),C.default.createElement("th",null,"Memory"),C.default.createElement("th",null,"Cpu"),C.default.createElement("th",null,"Disk I/O"))),C.default.createElement("tbody",null,x.default.map(e,function(e){return C.default.createElement("tr",{key:e._id},C.default.createElement("td",null,a(e.Name,e.Space.Used,e.Space.Total,e.Version)),C.default.createElement("td",null,t(e.ProcessCount.Data,e.ProcessCount.Color)),C.default.createElement("td",null,t(e.MemoryUsage.Data,e.MemoryUsage.Color,e.MemoryUsage.Metric)),C.default.createElement("td",null,t(e.CpuUsage.Data,e.CpuUsage.Color,e.CpuUsage.Metric)),C.default.createElement("td",null,t(e.DiskUsage.Data,e.DiskUsage.Color,e.DiskUsage.Metric)))}))))},Y=function(e){function a(e,t){(0,i.default)(this,a);var l=(0,g.default)(this,(a.__proto__||(0,f.default)(a)).call(this,e,t)),r=function(){return Math.random()>.5};return l.state=(0,N.default)({},q(K.default),{MemoryUsage:{Data:z(),DiffInc:r()},CpuUsage:{Data:z(),DiffInc:r()},Traffic:{Data:z(),DiffInc:r()},DiskUsage:{Data:z(),DiffInc:r()},ProcessDetails:A(K.default.ProcessDetails)}),l}return(0,M.default)(a,e),(0,m.default)(a,[{key:"simulateProcessData",value:function(){var e=function(e,a){var t=Math.round(Math.random()*a),l=x.default.last(e,e.length-1);return[].concat((0,s.default)(l),[t])};this.setState((0,n.default)({},this.state,{ProcessDetails:x.default.map(this.state.ProcessDetails,function(a){return(0,N.default)({},a,{CpuUsage:{Data:e(a.CpuUsage.Data,a.CpuUsage.Max)},MemoryUsage:{Data:e(a.MemoryUsage.Data,a.MemoryUsage.Max)},DiskUsage:{Data:e(a.DiskUsage.Data,a.DiskUsage.Max)},ProcessCount:{Data:e(a.ProcessCount.Data,a.ProcessCount.Max)}})})}))}},{key:"getLayoutOptions",value:function(){return{contentView:G.CONTENT_VIEW_STATIC}}},{key:"render",value:function(){var e=this;return C.default.createElement("div",{className:L.default.mainWrap},C.default.createElement(D.default,{timeout:500,enabled:!0,callback:function(){return e.simulateProcessData()}}),C.default.createElement(T.Row,null,J("Memory",this.state.MemoryUsage,j.Colors.brandPrimary,"%"),J("CPU",this.state.CpuUsage,j.Colors.brandSuccess,"%"),J("Traffic",this.state.Traffic,j.Colors.brandWarning,"KB"),J("Disk I/O",this.state.DiskUsage,j.Colors.brandDanger,"KB")),C.default.createElement(T.Row,null,C.default.createElement(T.Col,{lg:12},(0,W.default)(Q,this.state.ProcessDetails))))}}]),a}(F.RoutedComponent);a.default=(0,F.connect)()(Y)},1867:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var r=t(1866),n=l(r);a.default=n.default},2405:function(e,a){e.exports={mainWrap:"System__mainWrap___1_C1p",componentPanel:"System__componentPanel___V_rGb",filledMedia:"System__filledMedia___M8-t5",componentVal:"System__componentVal___Dh5bV",componentDiff:"System__componentDiff___1tSBa",panelHeading:"System__panelHeading___NUf2T",processTable:"System__processTable___2P8Sa",generalRow:"System__generalRow___WapxY",processComponentVal:"System__processComponentVal___2npTb"}},3475:function(e,a){e.exports={MemoryUsage:{Value:"{{n:10:100}}",Max:100,Diff:"{{n:10:60}}"},CpuUsage:{Value:"{{n:10:100}}",Max:100,Diff:"{{n:10:60}}"},Traffic:{Value:"{{n:1:90}}",Max:100,Diff:"{{n:10:60}}"},DiskUsage:{Value:"{{n:1:90}}",Max:100,Diff:"{{n:10:60}}"},ProcessDetails:[{Name:"Apache",Version:"12.02",Space:{Total:1e4,Used:"{{n:100:9000}}"},ProcessCount:{Max:20},MemoryUsage:{Max:1e3},CpuUsage:{Max:100},DiskUsage:{Max:1e3}},{Name:"Postfix",Version:"5.09",Space:{Total:1e4,Used:"{{n:100:9000}}"},ProcessCount:{Max:20},MemoryUsage:{Max:1e3},CpuUsage:{Max:100},DiskUsage:{Max:1e3}},{Name:"Ruby R1",Version:"0.0.2",Space:{Total:1e4,Used:"{{n:100:9000}}"},ProcessCount:{Max:20},MemoryUsage:{Max:1e3},CpuUsage:{Max:100},DiskUsage:{Max:1e3}},{Name:"MySQL",Version:"6.1",Space:{Total:1e4,Used:"{{n:100:9000}}"},ProcessCount:{Max:20},MemoryUsage:{Max:1e3},CpuUsage:{Max:100},DiskUsage:{Max:1e3}},{Name:"Ruby R2",Version:"1.1",Space:{Total:1e4,Used:"{{n:100:9000}}"},ProcessCount:{Max:20},MemoryUsage:{Max:1e3},CpuUsage:{Max:100},DiskUsage:{Max:1e3}}]}}});