webpackJsonp([33],{1482:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(11),r=a(n),u=l(4),o=a(u),d=l(10),c=a(d),m=l(6),f=a(m),s=l(5),i=a(s),p=l(2),E=a(p),b=l(19),N=(a(b),l(12)),h=(a(N),l(9)),C=(a(h),l(104)),_=(a(C),l(43)),w=a(_),y=(l(22),l(3)),k=l(20),v=l(37),I=a(v),x=l(35),F=(a(x),l(18)),S=l(14),T=l(68),g=[{title:"Inbox",count:4},{title:"Draft",count:2},{title:"Sent",count:7},{title:"Trash",count:1}],A=[{title:"Family",color:S.Colors.brandPrimary},{title:"Friends",color:S.Colors.brandInfo},{title:"Work",color:S.Colors.brandSuccess},{title:"Other",color:S.Colors.brandDanger}],G=[{FileName:"borders_action_items_bandwidth.skd",FileSize:548,Type:"Word",Owner:"{{fake:[name.firstName] [name.lastName]}}",DateAdded:"{{faker:date.recent}}"},{FileName:"borders_action_items_bandwidth.skd",FileSize:959,Type:"PowerPoint",Owner:"{{fake:[name.firstName] [name.lastName]}}",DateAdded:"{{faker:date.recent}}"},{FileName:"borders_action_items_bandwidth.skd",FileSize:887,Type:"Excel",Owner:"{{fake:[name.firstName] [name.lastName]}}",DateAdded:"{{faker:date.recent}}"}],B=function(e,t){return E.default.createElement(y.Panel,{header:E.default.createElement("div",{className:"flex-space-between"},E.default.createElement(y.Button,{className:"p-l-0",bsStyle:"link",onClick:function(){return t.push("/apps/inbox")}},E.default.createElement("i",{className:"fa fa-fw fa-angle-left m-r-1"}),"Inbox"),E.default.createElement(y.ButtonToolbar,null,E.default.createElement(y.Button,{bsStyle:"link"},"Cancel"),E.default.createElement(y.Button,{bsStyle:"primary"},E.default.createElement("i",{className:"fa fa-fw fa-paper-plane"}),E.default.createElement("span",{className:"visible-lg-inline"}," Send")))),footer:E.default.createElement("div",{className:"text-right"},E.default.createElement(y.Button,null,E.default.createElement("i",{className:"fa fa-fw fa-paperclip"})," Add New Files"))},E.default.createElement("div",null,E.default.createElement(y.Row,null,E.default.createElement(y.Col,{md:12,className:"m-b-1"},E.default.createElement(y.InputGroup,null,E.default.createElement(y.InputGroup.Addon,null,"To"),E.default.createElement(y.FormControl,{type:"email",placeholder:"Enter email(s)..."}),E.default.createElement(y.InputGroup.Button,null,E.default.createElement(y.Button,null,E.default.createElement("i",{className:"fa fa-fw fa-plus"})))))),E.default.createElement(y.Row,null,E.default.createElement(y.Col,{md:6,className:"m-b-1"},E.default.createElement(y.InputGroup,null,E.default.createElement(y.InputGroup.Addon,null,"Cc"),E.default.createElement(y.FormControl,{type:"text",placeholder:"Enter email(s)..."}))),E.default.createElement(y.Col,{md:6,className:"m-b-1"},E.default.createElement(y.InputGroup,null,E.default.createElement(y.InputGroup.Addon,null,"Bcc"),E.default.createElement(y.FormControl,{type:"text",placeholder:"Enter email(s)..."})))),E.default.createElement(y.Row,null,E.default.createElement(y.Col,{md:12,className:"m-b-1"},E.default.createElement(y.InputGroup,null,E.default.createElement(y.InputGroup.Addon,null,"Subject"),E.default.createElement(y.FormControl,{type:"text",placeholder:"Enter topic..."})))),E.default.createElement(y.Row,null,E.default.createElement(y.Col,{md:12,className:"m-b-1"},E.default.createElement(y.FormControl,{componentClass:"textarea",placeholder:"Enter message...",rows:6})))),E.default.createElement(T.EmailAttachments,{items:e,actionIcon:"fa fa-close",actionTooltipText:"Remove"}))},O=function(e){function t(e,l){(0,o.default)(this,t);var a=(0,f.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e,l));return a.state=(0,w.default)({},a.state,{attachments:(0,I.default)(G)}),a}return(0,i.default)(t,e),(0,c.default)(t,[{key:"getLayoutOptions",value:function(){return{contentView:F.CONTENT_VIEW_STATIC}}},{key:"render",value:function(){var e=this;return E.default.createElement(y.Row,null,E.default.createElement(y.Col,{lg:2},E.default.createElement(y.Row,null,E.default.createElement(y.Col,{lg:12,xs:6},E.default.createElement(T.SideNav,{items:g,folderSelected:function(){e.props.history.push("/apps/inbox")}})),E.default.createElement(y.Col,{lg:12,xs:6},E.default.createElement(y.Divider,null,"Labels"),E.default.createElement(T.LabelsList,{items:A})))),E.default.createElement(y.Col,{lg:10},B(this.state.attachments,this.props.history)))}}]),t}(k.RoutedComponent);t.default=(0,k.connect)()(O)},1483:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(1482),r=a(n);t.default=r.default}});