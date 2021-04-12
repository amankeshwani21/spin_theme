webpackJsonp([3],{1514:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(11),n=l(r),s=a(4),d=l(s),u=a(10),i=l(u),f=a(6),c=l(f),m=a(5),o=l(m),p=a(2),E=l(p),N=a(19),_=(l(N),a(12)),k=l(_),h=a(9),v=l(h),g=a(44),b=(l(g),a(43)),y=l(b),T=a(22),D=a(3),A=a(20),C=a(37),P=l(C),S=a(35),x=l(S),w=a(18),M=a(14),L=a(3452),j=l(L),I=a(2367),O=l(I),B=a(68),G=function(e){return(0,P.default)(e)},F=function(e){switch(e){case"Bug":return M.Colors.brandDanger;default:case"Feature":return M.Colors.brandInfo;case"Duplicate":return M.Colors.brandPrimary;case"Invalid":return M.Colors.brandPerfume;case"On Hold":return M.Colors.brandEminence;case"Help":return M.Colors.brandWarning;case"HTML":return M.Colors.brandSuccess;case"CSS":return M.Colors.brandMintGreen;case"Next Phase":return M.Colors.brandMalibu}},V=function(e){return E.default.createElement(D.ListGroup,{className:O.default.taskDetails},E.default.createElement(D.ListGroupItem,{className:"flex-space-between"},E.default.createElement("h5",{className:O.default.detailsKey},"Project"),E.default.createElement("div",{className:O.default.detailsValue},E.default.createElement(T.Link,{to:"/apps/tasks"},e.Project.Name))),E.default.createElement(D.ListGroupItem,{className:"flex-space-between"},E.default.createElement("h5",{className:O.default.detailsKey},"Assigned by"),E.default.createElement("div",{className:O.default.detailsValue},E.default.createElement(T.Link,{to:"/apps/profile-details"},e.AssignedBy.Name))),E.default.createElement(D.ListGroupItem,{className:"flex-space-between"},E.default.createElement("h5",{className:O.default.detailsKey},"Start Date"),E.default.createElement("div",{className:O.default.detailsValue},(0,v.default)(e.StartDate).format("ddd, DD MMM YYYY"))),E.default.createElement(D.ListGroupItem,{className:"flex-space-between"},E.default.createElement("h5",{className:O.default.detailsKey},"Due Date"),E.default.createElement("div",{className:O.default.detailsValue},(0,v.default)(e.DueDate).format("ddd, DD MMM YYYY"))),E.default.createElement(D.ListGroupItem,{className:"flex-space-between"},E.default.createElement("h5",{className:O.default.detailsKey},"Priority"),E.default.createElement("div",{className:O.default.detailsValue},E.default.createElement(B.PriorityButton,{size:"xsmall",shortPriority:!0,selectedPriority:e.Priority}))),E.default.createElement(D.ListGroupItem,{className:"flex-space-between"},E.default.createElement("h5",{className:O.default.detailsKey},"Progress"),E.default.createElement("div",{className:O.default.detailsValue},Math.round(100*e.Progress),"%")),E.default.createElement(D.ListGroupItem,{className:"flex-space-between"},E.default.createElement("h5",{className:O.default.detailsKey},"Task ID"),E.default.createElement("div",{className:O.default.detailsValue},"# ",e.Id)),E.default.createElement(D.ListGroupItem,{className:"flex-space-between"},E.default.createElement("h5",{className:O.default.detailsKey},"Date Assigned"),E.default.createElement("div",{className:O.default.detailsValue},(0,v.default)(e.AssignedDate).format("ddd, DD MMM YYYY"),E.default.createElement("br",null),(0,v.default)(e.AssignedDate).format("hh:mm a"))))},K=function(){return E.default.createElement("div",{className:O.default.taskHeader+" flex-space-between"},E.default.createElement("h3",{className:"m-y-0 f-w-300"},E.default.createElement(T.Link,{to:"/apps/projects/grid"},"Projects"),E.default.createElement("span",{className:"text-muted m-x-1"},"/"),E.default.createElement(T.Link,{to:"/apps/tasks/grid"},"Tasks"),E.default.createElement("span",{className:"text-muted m-x-1"},"/"),"Task Details"),E.default.createElement("div",{className:O.default.headerActions+" hidden-xs"},E.default.createElement(D.Button,{className:"m-r-1"},E.default.createElement("i",{className:"fa fa-gear"})),E.default.createElement(D.Button,{bsStyle:"primary"},E.default.createElement("i",{className:"fa fa-pencil"})," Edit Task")),E.default.createElement(D.ButtonToolbar,{className:"visible-xs m-t-1"},E.default.createElement(D.ButtonGroup,{justified:!0},E.default.createElement(D.Button,{href:"javascript: void(0)"},E.default.createElement("i",{className:"fa fa-gear"})),E.default.createElement(D.Button,{href:"javascript: void(0)"},E.default.createElement("i",{className:"fa fa-pencil"})))))},Y=function(e){return E.default.createElement("div",null,E.default.createElement(B.EmailAttachments,{items:e}),E.default.createElement("p",{className:"m-t-1"},E.default.createElement("a",{href:"javascript: void(0)"},"Add More Files to this Task")))},H=function(e){return E.default.createElement("div",{className:"m-t-3"},E.default.createElement(D.Divider,null,"Comments",E.default.createElement(D.Badge,{className:"m-l-1"},e.length)),E.default.createElement(B.Comments,{data:e}))},R=function(e){return E.default.createElement(D.Panel,{footer:E.default.createElement(D.InputGroup,null,E.default.createElement(D.InputGroup.Button,null,E.default.createElement(D.Button,null,E.default.createElement("i",{className:"fa fa-fw fa-paperclip"}))),E.default.createElement(D.FormControl,{type:"text",placeholder:"Your Message..."}),E.default.createElement(D.InputGroup.Button,null,E.default.createElement(D.Button,{bsStyle:"primary"},"Send")))},E.default.createElement(D.Media,{className:"m-b-3"},E.default.createElement(D.Media.Left,{align:"middle"},E.default.createElement(D.OverlayTrigger,{overlay:E.default.createElement(D.Tooltip,{id:"open-close-task"},"Open / Close Task"),placement:"top"},E.default.createElement(D.Checkbox,null))),E.default.createElement(D.Media.Body,null,E.default.createElement("h3",{className:O.default.taskPanelTitle},E.default.createElement("span",{className:"text-muted m-r-1"},"#",e.Task.Id),e.Task.Title),k.default.map(e.Task.Labels,function(e,t){return E.default.createElement(D.Label,{key:t,outline:!0,bsStyle:"custom",customColor:F(e),className:O.default.taskLabel},e)}))),E.default.createElement("p",{className:"m-b-3"},e.Task.Text),Y(e.Attachments),H(e.Comments))},U=function(e){function t(e,a){(0,d.default)(this,t);var l=(0,c.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e,a));return l.state=(0,y.default)({},l.state,{data:G(j.default)}),l}return(0,o.default)(t,e),(0,i.default)(t,[{key:"getLayoutOptions",value:function(){return{contentView:w.CONTENT_VIEW_STATIC}}},{key:"render",value:function(){return E.default.createElement("div",{className:O.default.mainWrap},E.default.createElement(D.Row,null,E.default.createElement(D.Col,{lg:3},E.default.createElement(D.Divider,{className:O.default.leftPanelDivider},"Task Details"),(0,x.default)(V,this.state.data.Task),E.default.createElement(D.Divider,{className:O.default.leftPanelDivider},"Assigned To"),E.default.createElement(B.UsersList,{items:this.state.data.People})),E.default.createElement(D.Col,{lg:9},(0,x.default)(K),(0,x.default)(R,this.state.data))))}}]),t}(A.RoutedComponent);t.default=(0,A.connect)()(U)},1515:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1514),n=l(r);t.default=n.default},1850:function(e,t,a){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(324),s=r(n),d=a(11),u=r(d),i=a(4),f=r(i),c=a(10),m=r(c),o=a(6),p=r(o),E=a(5),N=r(E),_=a(2),k=r(_),h=a(12),v=(r(h),a(7)),g=(r(v),a(3)),b=a(20),y=a(18),T=a(2399),D=r(T),A=a(1851),C=r(A),P=a(1852),S=l(P),x="Select A Node To See Its Data Structure Here...",w=function(e){function t(e){return(0,f.default)(this,t),(0,p.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e))}return(0,N.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){var e=(0,s.default)(this.props.node,null,4);return e||(e=x),k.default.createElement("pre",{className:D.default.code},k.default.createElement("code",null,e))}}]),t}(k.default.Component);w.propTypes={node:k.default.PropTypes.object};var M=function(e){function t(e){(0,f.default)(this,t);var a=(0,p.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return a.state={data:C.default},a.onToggle=a.onToggle.bind(a),a}return(0,N.default)(t,e),(0,m.default)(t,[{key:"getLayoutOptions",value:function(){return{contentView:y.CONTENT_VIEW_STATIC}}},{key:"onToggle",value:function(e,t){this.state.cursor&&(this.state.cursor.active=!1),e.active=!0,e.children&&(e.toggled=t),this.setState({cursor:e})}},{key:"onFilterKeyUp",value:function(e){var t=e.target.value.trim();if(!t)return this.setState({data:C.default});var a=S.filterTree(C.default,t);a=S.expandFilteredNodes(a,t),this.setState({data:a})}},{key:"render",value:function(){return k.default.createElement(g.Row,null,k.default.createElement(g.Col,{lg:12},k.default.createElement(g.InputGroup,null,k.default.createElement(g.InputGroup.Addon,null,k.default.createElement("i",{className:"fa fa-search"})),k.default.createElement(g.FormControl,{placeholder:"Search the tree...",onKeyUp:this.onFilterKeyUp.bind(this)}))),k.default.createElement(g.Col,{lg:6,className:"m-t-2"},k.default.createElement("div",{className:D.default.container},k.default.createElement(g.Treebeard,{data:this.state.data,onToggle:this.onToggle.bind(this)}))),k.default.createElement(g.Col,{lg:6,className:"m-t-2"},k.default.createElement(w,{node:this.state.cursor})))}}]),t}(b.RoutedComponent);t.default=(0,b.connect)()(M)},1851:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"react-treebeard",toggled:!0,children:[{name:"example",children:[{name:"app.js"},{name:"data.js"},{name:"index.html"},{name:"styles.js"},{name:"webpack.config.js"}]},{name:"node_modules",loading:!0,children:[]},{name:"src",children:[{name:"components",children:[{name:"decorators.js"},{name:"treebeard.js"}]},{name:"index.js"}]},{name:"themes",children:[{name:"animations.js"},{name:"default.js"}]},{name:"Gulpfile.js"},{name:"index.js"},{name:"package.json"}]}},1852:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.expandFilteredNodes=t.filterTree=t.findNode=t.defaultMatcher=void 0;var r=a(66),n=l(r),s=t.defaultMatcher=function(e,t){return t.name.toLowerCase().indexOf(e.toLowerCase())!==-1},d=t.findNode=function e(t,a,l){return l(a,t)||t.children&&t.children.length&&!!t.children.find(function(t){return e(t,a,l)})};t.filterTree=function e(t,a){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s;if(l(a,t)||!t.children)return t;var r=t.children.filter(function(e){return d(e,a,l)}).map(function(t){return e(t,a,l)});return(0,n.default)({},t,{children:r})},t.expandFilteredNodes=function e(t,a){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s,r=t.children;if(!r||0===r.length)return(0,n.default)({},t,{toggled:!1});var u=t.children.filter(function(e){return d(e,a,l)}),i=u.length>0;return i&&(r=u.map(function(t){return e(t,a,l)})),(0,n.default)({},t,{children:r,toggled:i})}},1853:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1850),n=l(r);t.default=n.default},2367:function(e,t){e.exports={leftPanelDivider:"TaskDetails__leftPanelDivider___3zyRU",leftPanelSection:"TaskDetails__leftPanelSection___25dwS",taskDetails:"TaskDetails__taskDetails___EFuhT",detailsKey:"TaskDetails__detailsKey___3QvA0",detailsValue:"TaskDetails__detailsValue___3IdlK",taskLabel:"TaskDetails__taskLabel___3-IJ6",taskHeader:"TaskDetails__taskHeader___16DIe",headerActions:"TaskDetails__headerActions___sZDhU",taskPanelTitle:"TaskDetails__taskPanelTitle___1T2Jc"}},2399:function(e,t){e.exports={code:"TreeSortable__code___1VVeI"}},3452:function(e,t){e.exports={Task:{Id:"6726746",Project:{Name:"Analytics Redesing"},AssignedBy:{Name:"{{fake:[name.firstName] [name.lastName]}}"},StartDate:"{{faker:date.recent}}",DueDate:"{{faker:date.recent}}",AssignedDate:"{{faker:date.recent}}",Priority:"Low",Progress:.3,Title:"Configurable human-resource Graphic Interface",Text:"{{faker:lorem.paragraphs}}",Labels:["Bug","Feature","Help"]},People:[{Name:"{{fake:[name.firstName] [name.lastName]}}",Address:"{{fake:[address.state], [address.stateAbbr]}}",Status:"Online",Avatar:"{{faker:image.avatar}}"},{Name:"{{fake:[name.firstName] [name.lastName]}}",Address:"{{fake:[address.state], [address.stateAbbr]}}",Status:"Busy",Avatar:"{{faker:image.avatar}}"},{Name:"{{fake:[name.firstName] [name.lastName]}}",Address:"{{fake:[address.state], [address.stateAbbr]}}",Status:"Away",Avatar:"{{faker:image.avatar}}"},{Name:"{{fake:[name.firstName] [name.lastName]}}",Address:"{{fake:[address.state], [address.stateAbbr]}}",Status:"Offline",Avatar:"{{faker:image.avatar}}"}],Attachments:[{FileName:"borders_action_items_bandwidth.skd",FileSize:548,Type:"Word",Owner:"{{fake:[name.firstName] [name.lastName]}}",DateAdded:"{{faker:date.recent}}"},{FileName:"borders_action_items_bandwidth.skd",FileSize:959,Type:"PowerPoint",Owner:"{{fake:[name.firstName] [name.lastName]}}",DateAdded:"{{faker:date.recent}}"},{FileName:"borders_action_items_bandwidth.skd",FileSize:887,Type:"Excel",Owner:"{{fake:[name.firstName] [name.lastName]}}",DateAdded:"{{faker:date.recent}}"}],Comments:[{Sender:{Name:"{{fake:[name.firstName] [name.lastName]}}",CurrentStatus:"Away",Avatar:"{{faker:image.avatar}}"},DateAdded:"{{faker:date.recent}}",Content:"{{faker:lorem.sentences}}",Likes:92,Replies:[{Sender:{Name:"{{fake:[name.firstName] [name.lastName]}}",CurrentStatus:"Busy",Avatar:"{{faker:image.avatar}}"},DateAdded:"{{faker:date.recent}}",Content:"{{faker:lorem.sentences}}",Likes:44,Replies:[{Sender:{Name:"{{fake:[name.firstName] [name.lastName]}}",CurrentStatus:"Online",Avatar:"{{faker:image.avatar}}"},DateAdded:"{{faker:date.recent}}",Content:"{{faker:lorem.sentences}}",Likes:8}]}]}]}}});