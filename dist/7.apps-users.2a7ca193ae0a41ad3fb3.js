webpackJsonp([7],{295:function(e,t){e.exports={Messages:[{User:{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Away"},Date:"{{fake:[date.recent]}}",Content:"{{fake:[lorem.paragraph]}}",Active:"{{n:0:1}}"},{User:{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Online"},Date:"{{fake:[date.recent]}}",Content:"{{fake:[lorem.paragraph]}}",Active:"{{n:0:1}}"},{User:{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Online"},Date:"{{fake:[date.recent]}}",Content:"{{fake:[lorem.paragraph]}}",Active:"{{n:0:1}}"},{User:{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Busy"},Date:"{{fake:[date.recent]}}",Content:"{{fake:[lorem.paragraph]}}",Active:"{{n:0:1}}"},{User:{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Away"},Date:"{{fake:[date.recent]}}",Content:"{{fake:[lorem.paragraph]}}",Active:"{{n:0:1}}"},{User:{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Online"},Date:"{{fake:[date.recent]}}",Content:"{{fake:[lorem.paragraph]}}",Active:"{{n:0:1}}"},{User:{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Offline"},Date:"{{fake:[date.recent]}}",Content:"{{fake:[lorem.paragraph]}}",Active:"{{n:0:1}}"},{User:{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Away"},Date:"{{fake:[date.recent]}}",Content:"{{fake:[lorem.paragraph]}}",Active:"{{n:0:1}}"}]}},1518:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(27),r=l(n),o=a(11),m=l(o),u=a(4),f=l(u),i=a(10),s=l(i),d=a(6),c=l(d),E=a(5),p=l(E),v=a(2),C=l(v),h=a(19),N=l(h),k=a(104),b=(l(k),a(12)),g=l(b),y=a(9),M=(l(y),a(43)),P=l(M),F=(a(22),a(62)),S=a(3),x=a(20),T=a(37),w=l(T),A=a(35),_=(l(A),a(18)),j=a(14),L=a(3453),B=l(L),I=a(68),O=a(1531),D=function(e){return(0,w.default)(e)},G=[{title:"Updates",count:4},{title:"Favorites",count:2},{title:"Private",count:7}],V=[{title:"Documents",color:j.Colors.brandPrimary},{title:"Pictures",color:j.Colors.brandInfo},{title:"Videos",color:j.Colors.brandSuccess},{title:"Music",color:j.Colors.brandWarning},{title:"Other",color:j.Colors.brandDanger}],H=function(e){switch(e){default:case"Online":return j.Colors.brandSuccess;case"Away":return j.Colors.brandWarning;case"Busy":return j.Colors.brandDanger;case"Offline":return j.Colors.grayLighter}},U=function(e){return e&&0!==e.length?C.default.createElement("div",null,g.default.map(e,function(e,t){return C.default.createElement("a",{href:"javascript:;",className:"m-r-1",key:t},C.default.createElement(S.OverlayTrigger,{placement:"top",overlay:C.default.createElement(S.Tooltip,{id:"tooltip-"+e},e+" Profile")},function(){switch(e){case"LinkedIn":return C.default.createElement("i",{className:"fa fa-linkedin-square text-muted fa-lg"});case"Facebook":return C.default.createElement("i",{className:"fa fa-facebook-square text-muted fa-lg"});case"Twitter":return C.default.createElement("i",{className:"fa fa-twitter-square text-muted fa-lg"})}}()))})):"-"},R=function(e){return C.default.createElement(S.Dropdown,{id:"dropdown-user-actions-"+N.default.v4(),pullRight:!0},C.default.createElement(S.Dropdown.Toggle,null,C.default.createElement("i",{className:"fa fa-fw fa-bars m-r-1"})),C.default.createElement(S.Dropdown.Menu,null,C.default.createElement(S.MenuItem,{eventKey:"1",onClick:function(){e("callModal",!0)}},C.default.createElement("i",{className:"fa fa-fw fa-phone text-gray-lighter m-r-1"}),"Call"),C.default.createElement(S.MenuItem,{eventKey:"2",onClick:function(){e("chatModal",!0)}},C.default.createElement("i",{className:"fa fa-fw fa-comment text-gray-lighter m-r-1"}),"Chat"),C.default.createElement(S.MenuItem,{eventKey:"3",onClick:function(){e("videoModal",!0)}},C.default.createElement("i",{className:"fa fa-fw fa-video-camera text-gray-lighter m-r-1"}),"Video"),C.default.createElement(S.MenuItem,{eventKey:"4",onClick:function(){e("profileModal",!0)}},C.default.createElement("i",{className:"fa fa-fw fa-user text-gray-lighter m-r-1"}),"Profile"),C.default.createElement(S.MenuItem,{eventKey:"4",onClick:function(){e("editModal",!0)}},C.default.createElement("i",{className:"fa fa-fw fa-pencil text-gray-lighter m-r-1"}),"Edit"),C.default.createElement(S.MenuItem,{divider:!0}),C.default.createElement(S.MenuItem,{eventKey:"6",onClick:function(){e("deleteModal",!0)}},C.default.createElement("i",{className:"fa fa-fw fa-trash text-gray-lighter m-r-1"}),"Delete")))},K=function(e){return C.default.createElement(S.SplitButton,{title:"Profile",id:"dropdown-user-actions-"+N.default.v4(),onClick:function(){e("profileModal",!0)}},C.default.createElement(S.MenuItem,{eventKey:"1",onClick:function(){e("callModal",!0)}},C.default.createElement("i",{className:"fa fa-fw fa-phone text-gray-lighter m-r-1"}),"Call"),C.default.createElement(S.MenuItem,{eventKey:"2",onClick:function(){e("chatModal",!0)}},C.default.createElement("i",{className:"fa fa-fw fa-comment text-gray-lighter m-r-1"}),"Chat"),C.default.createElement(S.MenuItem,{eventKey:"3",onClick:function(){e("videoModal",!0)}},C.default.createElement("i",{className:"fa fa-fw fa-video-camera text-gray-lighter m-r-1"}),"Video"),C.default.createElement(S.MenuItem,{eventKey:"4",onClick:function(){e("editModal",!0)}},C.default.createElement("i",{className:"fa fa-fw fa-pencil text-gray-lighter m-r-1"}),"Edit"),C.default.createElement(S.MenuItem,{divider:!0}),C.default.createElement(S.MenuItem,{eventKey:"6",onClick:function(){e("deleteModal",!0)}},C.default.createElement("i",{className:"fa fa-fw fa-trash text-gray-lighter m-r-1"}),"Delete"))},z=function(e,t){return C.default.createElement("div",{className:"m-t-2"},C.default.createElement(S.Table,{hover:!0},C.default.createElement("thead",null,C.default.createElement("tr",null,C.default.createElement("th",null,"#"),C.default.createElement("th",null,"Star"),C.default.createElement("th",null,"Name"),C.default.createElement("th",null,"Email"),C.default.createElement("th",null,"Phone"),C.default.createElement("th",null,"Social"),C.default.createElement("th",null,"Actions"))),C.default.createElement("tbody",null,g.default.map(e,function(e){return C.default.createElement("tr",{key:e._id},C.default.createElement("td",null,C.default.createElement(S.Checkbox,null)),C.default.createElement("td",null,C.default.createElement(S.FavoriteStar,{favorited:!!parseInt(e.Favorited)})),C.default.createElement("td",null,C.default.createElement(S.Media,null,C.default.createElement(S.Media.Left,{align:"middle"},C.default.createElement(S.AvatarImage,{src:e.Avatar,showStatus:!0,statusPlacement:"bottom",statusColor:H(e.Status)})),C.default.createElement(S.Media.Body,null,C.default.createElement("p",{className:"text-white m-y-0"},e.Name),C.default.createElement("p",{className:"m-y-0"},e.Position)))),C.default.createElement("td",null,e.Email),C.default.createElement("td",null,e.Phone),C.default.createElement("td",null,U(e.Social)),C.default.createElement("td",null,R(t)))}))),C.default.createElement("div",{className:"text-center"},C.default.createElement(S.Pagination,{bsSize:"medium",items:5,activePage:1,className:"m-b-2",boundaryLinks:!0,prev:!0,next:!0,first:!0,last:!0,ellipsis:!0})))},q=function(e,t){return C.default.createElement("div",{className:"m-t-2"},C.default.createElement(S.Row,null,g.default.map(e,function(e){return C.default.createElement(S.Col,{lg:4,md:6,key:e._id},C.default.createElement(S.Panel,{className:"text-center"},C.default.createElement(S.AvatarImage,{src:e.Avatar,showStatus:!0,statusPlacement:"bottom",statusColor:H(e.Status),size:"large"}),C.default.createElement("div",{className:"m-y-1"},C.default.createElement("span",{className:"h4 text-white"},e.Name+" "),C.default.createElement(S.FavoriteStar,{favorited:!!parseInt(e.Favorited)})),C.default.createElement("p",null,e.Position),C.default.createElement("div",{className:"p-y-2"},K(t))))})),C.default.createElement("div",{className:"text-center"},C.default.createElement(S.Pagination,{bsSize:"medium",items:5,activePage:1,className:"m-b-2",boundaryLinks:!0,prev:!0,next:!0,first:!0,last:!0,ellipsis:!0})))},Y=function(e){function t(e,a){(0,f.default)(this,t);var l=(0,c.default)(this,(t.__proto__||(0,m.default)(t)).call(this,e,a));return l.state=(0,P.default)({},l.state,{data:D(B.default),callModalVisible:!1,profileModalVisible:!1,chatModalVisible:!1,videoModalVisible:!1,editModalVisible:!1,deleteModalVisible:!1}),l}return(0,p.default)(t,e),(0,s.default)(t,[{key:"getLayoutOptions",value:function(){return{contentView:_.CONTENT_VIEW_STATIC}}},{key:"toggleModal",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.setState((0,r.default)({},e+"Visible",t))}},{key:"render",value:function(){var e=this;return C.default.createElement("div",null,C.default.createElement(S.Row,null,C.default.createElement(S.Col,{lg:2},C.default.createElement(S.Row,null,C.default.createElement(S.Col,{lg:12,xs:6},C.default.createElement(I.SideNav,{items:G,folderSelected:function(){e.props.history.push("/apps/inbox")}})),C.default.createElement(S.Col,{lg:12,xs:6},C.default.createElement(S.Divider,null,"Labels"),C.default.createElement(I.LabelsList,{items:V})))),C.default.createElement(S.Col,{lg:10},C.default.createElement(S.Row,null,C.default.createElement(S.Col,{lg:4,md:6,sm:5,xs:12},C.default.createElement(I.SearchBox,null),C.default.createElement(S.Row,null,C.default.createElement(S.Col,{md:12,lgHidden:!0,mdHidden:!0,smHidden:!0,className:"m-b-2"},C.default.createElement(S.ButtonGroup,{justified:!0},C.default.createElement(S.Button,{href:"javascript:;"},C.default.createElement("i",{className:"fa fa-folder"})),C.default.createElement(S.Button,{href:"javascript:;"},C.default.createElement("i",{className:"fa fa-link"})),C.default.createElement(F.LinkContainer,{to:"/apps/users/list"},C.default.createElement(S.Button,{href:"javascript:;"},C.default.createElement("i",{className:"fa fa-list"}))),C.default.createElement(F.LinkContainer,{to:"/apps/users/grid"},C.default.createElement(S.Button,{href:"javascript:;"},C.default.createElement("i",{className:"fa fa-th-large"}))),C.default.createElement(S.Button,{href:"javascript:;"},C.default.createElement("i",{className:"fa fa-plus"})))))),C.default.createElement(S.Col,{xsHidden:!0,lg:8,md:6,sm:7},C.default.createElement(S.ButtonToolbar,{className:"pull-right"},C.default.createElement(S.ButtonGroup,null,C.default.createElement(S.Button,{href:"javascript:;"},C.default.createElement("i",{className:"fa fa-folder"})),C.default.createElement(S.Button,{href:"javascript:;"},C.default.createElement("i",{className:"fa fa-link"})),C.default.createElement(S.Button,{href:"javascript:;"},C.default.createElement("i",{className:"fa fa-trash"}))),C.default.createElement(S.ButtonGroup,null,C.default.createElement(F.LinkContainer,{to:"/apps/users/list"},C.default.createElement(S.Button,{href:"javascript:;"},C.default.createElement("i",{className:"fa fa-list"}))),C.default.createElement(F.LinkContainer,{to:"/apps/users/grid"},C.default.createElement(S.Button,{href:"javascript:;"},C.default.createElement("i",{className:"fa fa-th-large"})))),C.default.createElement(S.ButtonGroup,null,C.default.createElement(S.Button,{href:"javascript:;",bsStyle:"primary"},C.default.createElement("i",{className:"fa fa-fw fa-plus"})))))),C.default.createElement(S.Row,null,C.default.createElement(S.Col,{lg:12},"list"===this.props.routeParams.listStyle&&z(this.state.data.Users,this.toggleModal.bind(this)),"grid"===this.props.routeParams.listStyle&&q(g.default.first(this.state.data.Users,15),this.toggleModal.bind(this)))))),C.default.createElement(O.EditModal,{visible:this.state.editModalVisible,onClose:function(){e.toggleModal("editModal",!1)}}),C.default.createElement(O.DeleteModal,{visible:this.state.deleteModalVisible,onClose:function(){e.toggleModal("deleteModal",!1)}}),C.default.createElement(O.VideoModal,{visible:this.state.videoModalVisible,onClose:function(){e.toggleModal("videoModal",!1)}}),C.default.createElement(O.CallModal,{visible:this.state.callModalVisible,onClose:function(){e.toggleModal("callModal",!1)}}),C.default.createElement(O.ProfileModal,{visible:this.state.profileModalVisible,onClose:function(){e.toggleModal("profileModal",!1)}}),C.default.createElement(O.ChatModal,{visible:this.state.chatModalVisible,onClose:function(){e.toggleModal("chatModal",!1)}}))}}]),t}(x.RoutedComponent);t.default=(0,x.connect)()(Y)},1519:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=l(n),o=a(25),m=l(o),u=a(3),f=a(14),i={Avatar:m.default.image.avatar(),Name:m.default.name.firstName()+" "+m.default.name.lastName(),Position:m.default.name.jobTitle()},s=function(e){return r.default.createElement(u.Modal,{show:e.visible,onHide:e.onClose,bsSize:"small"},r.default.createElement(u.Modal.Header,{closeButton:!0},r.default.createElement(u.Modal.Title,null,"Do you want to call?")),r.default.createElement(u.Modal.Body,{className:"text-center"},r.default.createElement(u.AvatarImage,{src:i.Avatar,size:"large",showStatus:!0,statusPlacement:"bottom",statusColor:f.Colors.brandSuccess}),r.default.createElement("h4",{className:"m-t-0"},i.Name),r.default.createElement("p",null,i.Position)),r.default.createElement(u.Modal.Footer,null,r.default.createElement(u.Button,{block:!0,bsStyle:"success",className:"btn-outline"},r.default.createElement("i",{className:"fa fa-phone fa-fw m-r-1"}),"Call"),r.default.createElement(u.Button,{block:!0,bsStyle:"danger",className:"btn-outline"},r.default.createElement("i",{className:"fa fa-close fa-fw m-r-1"}),"Dismiss")))};s.propTypes={visible:n.PropTypes.bool,onClose:n.PropTypes.func},s.defaultProps={onClose:function(){}},t.default=s},1520:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1519),r=l(n);t.default=r.default},1521:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=l(n),o=a(25),m=l(o),u=a(12),f=l(u),i=a(3),s=a(37),d=l(s),c=a(295),E=l(c),p=a(68),v=(0,d.default)(E.default).Messages,C=function(e){return r.default.createElement(i.Modal,{show:e.visible,onHide:e.onClose},r.default.createElement(i.Modal.Header,{closeButton:!0},r.default.createElement(i.Modal.Title,null,"Chat with ",m.default.name.firstName()+" "+m.default.name.lastName())),r.default.createElement(i.Modal.Body,null,r.default.createElement(p.Chat,{messages:f.default.first(v,4)})),r.default.createElement(i.Modal.Footer,null,r.default.createElement(i.InputGroup,null,r.default.createElement(i.FormControl,{type:"text",placeholder:"Message..."}),r.default.createElement(i.InputGroup.Button,null,r.default.createElement(i.Button,null,"Send")))))};C.propTypes={visible:n.PropTypes.bool,onClose:n.PropTypes.func},C.defaultProps={onClose:function(){}},t.default=C},1522:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1521),r=l(n);t.default=r.default},1523:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=l(n),o=a(25),m=(l(o),a(3)),u=(a(14),function(e){return r.default.createElement(m.Modal,{show:e.visible,onHide:e.onClose,bsSize:"large",bsStyle:"danger"},r.default.createElement(m.Modal.Body,null,r.default.createElement(m.Media,null,r.default.createElement(m.Media.Left,{align:"middle"},r.default.createElement("span",{className:"fa-stack fa-lg"},r.default.createElement("i",{className:"fa fa-circle fa-stack-2x text-danger"}),r.default.createElement("i",{className:"fa fa-exclamation fa-stack-1x fa-inverse"}))),r.default.createElement(m.Media.Body,null,r.default.createElement("h4",null,"Do you really want to delete?"),r.default.createElement("p",null,"You will not be able to rollback this action. Think carefully because the effects are irreversible.")))),r.default.createElement(m.Modal.Footer,null,r.default.createElement(m.Button,{onClick:function(){return e.onClose()}},"Cancel"),r.default.createElement(m.Button,{bsStyle:"danger"},"Yes, Delete")))});u.propTypes={visible:n.PropTypes.bool,onClose:n.PropTypes.func},u.defaultProps={onClose:function(){}},t.default=u},1524:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1523),r=l(n);t.default=r.default},1525:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=l(n),o=a(25),m=(l(o),a(3)),u=a(14),f=a(68),i=function(e){return r.default.createElement(m.Modal,{show:e.visible,onHide:e.onClose},r.default.createElement(m.Modal.Header,{closeButton:!0},r.default.createElement(m.Modal.Title,null,"Edit Profile ",r.default.createElement("small",null,"The fields marked with * are required"))),r.default.createElement(m.Modal.Body,null,r.default.createElement(m.Form,{horizontal:!0},r.default.createElement(m.FormGroup,null,r.default.createElement(m.Col,{componentClass:m.ControlLabel,sm:3},"Avatar"),r.default.createElement(m.Col,{sm:9},r.default.createElement(f.Upload,null))),r.default.createElement(m.FormGroup,null,r.default.createElement(m.Col,{componentClass:m.ControlLabel,sm:3},r.default.createElement("span",{className:"text-danger"}," * "),"First Name"),r.default.createElement(m.Col,{sm:9},r.default.createElement(m.FormControl,{type:"text",placeholder:"First Name..."}))),r.default.createElement(m.FormGroup,null,r.default.createElement(m.Col,{componentClass:m.ControlLabel,sm:3},"Last Name"),r.default.createElement(m.Col,{sm:9},r.default.createElement(m.FormControl,{type:"text",placeholder:"Last Name..."}))),r.default.createElement(m.FormGroup,null,r.default.createElement(m.Col,{componentClass:m.ControlLabel,sm:3},r.default.createElement("span",{className:"text-danger"}," * "),"Job Type"),r.default.createElement(m.Col,{sm:9},r.default.createElement(m.FormControl,{componentClass:"select",placeholder:"1"},r.default.createElement("option",{value:"1"},"Human Intranet Developer"),r.default.createElement("option",{value:"2"},"Dynamic Tactics Specialist"),r.default.createElement("option",{value:"3"},"Global Configuration Consultant"),r.default.createElement("option",{value:"4"},"Principal Directives Orchestrator"),r.default.createElement("option",{value:"5"},"Corporate Usability Consultant")))),r.default.createElement(m.Divider,null,"Availability"),r.default.createElement(m.FormGroup,null,r.default.createElement(m.Col,{componentClass:m.ControlLabel,sm:3},"After Logging"),r.default.createElement(m.Col,{sm:9},r.default.createElement(m.Radio,{name:"after-logging",defaultChecked:!0},r.default.createElement(m.Label,{outline:!0,bsStyle:"success"},"Available")),r.default.createElement(m.Radio,{name:"after-logging"},r.default.createElement(m.Label,{outline:!0,bsStyle:"warning"},"Inactive")),r.default.createElement(m.Radio,{name:"after-logging"},r.default.createElement(m.Label,{outline:!0,bsStyle:"danger"},"Busy")),r.default.createElement(m.Radio,{name:"after-logging"},r.default.createElement(m.Label,{outline:!0,bsStyle:"custom",customColor:u.Colors.grayDarker},"Offline")))),r.default.createElement(m.Divider,null,"Add Profile"),r.default.createElement(m.FormGroup,null,r.default.createElement(m.Col,{componentClass:m.ControlLabel,sm:3},"Profile"),r.default.createElement(m.Col,{sm:9},r.default.createElement(m.FormControl,{componentClass:"textarea",placeholder:"Please Describe Your Profile..."}))),r.default.createElement(m.FormGroup,null,r.default.createElement(m.Col,{componentClass:m.ControlLabel,sm:3},"Add Labels"),r.default.createElement(m.Col,{sm:9},r.default.createElement(m.FormControl,{type:"text",placeholder:"Add Here..."}))),r.default.createElement(m.Divider,null,"Add Contacts"),r.default.createElement(m.FormGroup,null,r.default.createElement(m.Col,{componentClass:m.ControlLabel,sm:3},r.default.createElement("span",{className:"text-danger"}," * "),"Email"),r.default.createElement(m.Col,{sm:9},r.default.createElement(m.FormControl,{type:"text",placeholder:"Enter Here..."}))),r.default.createElement(m.FormGroup,null,r.default.createElement(m.Col,{componentClass:m.ControlLabel,sm:3},r.default.createElement("span",{className:"text-danger"}," * "),"Mobile"),r.default.createElement(m.Col,{sm:9},r.default.createElement(m.FormControl,{type:"text",placeholder:"Enter Here..."}))),r.default.createElement(m.FormGroup,null,r.default.createElement(m.Col,{componentClass:m.ControlLabel,sm:3},"Phone"),r.default.createElement(m.Col,{sm:9},r.default.createElement(m.FormControl,{type:"text",placeholder:"Enter Here..."}))),r.default.createElement(m.FormGroup,null,r.default.createElement(m.Col,{componentClass:m.ControlLabel,sm:3},"Fax"),r.default.createElement(m.Col,{sm:9},r.default.createElement(m.FormControl,{type:"text",placeholder:"Enter Here..."}))),r.default.createElement(m.FormGroup,null,r.default.createElement(m.Col,{componentClass:m.ControlLabel,sm:3},"Skype"),r.default.createElement(m.Col,{sm:9},r.default.createElement(m.FormControl,{type:"text",placeholder:"Enter Here..."}))),r.default.createElement(m.FormGroup,null,r.default.createElement(m.Col,{componentClass:m.ControlLabel,sm:3},"Other"),r.default.createElement(m.Col,{sm:9},r.default.createElement(m.Button,{bsStyle:"link"},r.default.createElement("i",{className:"fa fa-plus m-r-1 text-success"}),"Add"))),r.default.createElement(m.Divider,null,"Add Social"),r.default.createElement(m.FormGroup,null,r.default.createElement(m.Col,{componentClass:m.ControlLabel,sm:3},"LinkedIn"),r.default.createElement(m.Col,{sm:9},r.default.createElement(m.InputGroup,null,r.default.createElement(m.InputGroup.Addon,null,r.default.createElement("i",{className:"fa fa-fw fa-linkedin-square m-r-1 text-gray-lighter"}),"http://lnkd.in/"),r.default.createElement(m.FormControl,{type:"text",placeholder:"Your Username..."})))),r.default.createElement(m.FormGroup,null,r.default.createElement(m.Col,{componentClass:m.ControlLabel,sm:3},"Facebook"),r.default.createElement(m.Col,{sm:9},r.default.createElement(m.InputGroup,null,r.default.createElement(m.InputGroup.Addon,null,r.default.createElement("i",{className:"fa fa-fw fa-facebook-square m-r-1 text-gray-lighter"}),"http://fb.com/"),r.default.createElement(m.FormControl,{type:"text",placeholder:"Your Username..."})))),r.default.createElement(m.FormGroup,null,r.default.createElement(m.Col,{componentClass:m.ControlLabel,sm:3},"Twitter"),r.default.createElement(m.Col,{sm:9},r.default.createElement(m.InputGroup,null,r.default.createElement(m.InputGroup.Addon,null,r.default.createElement("i",{className:"fa fa-fw fa-twitter-square m-r-1 text-gray-lighter"}),"http://twitter.com/"),r.default.createElement(m.FormControl,{type:"text",placeholder:"Your Username..."})))),r.default.createElement(m.FormGroup,null,r.default.createElement(m.Col,{componentClass:m.ControlLabel,sm:3},"Other"),r.default.createElement(m.Col,{sm:9},r.default.createElement(m.Button,{bsStyle:"link"},r.default.createElement("i",{className:"fa fa-plus m-r-1 text-success"}),"Add"))),r.default.createElement(m.Divider,null,"Add Address"),r.default.createElement(m.FormGroup,null,r.default.createElement(m.Col,{componentClass:m.ControlLabel,sm:3},r.default.createElement("span",{className:"text-danger"}," * "),"Address"),r.default.createElement(m.Col,{sm:9},r.default.createElement(m.FormControl,{type:"text",placeholder:"Address..."}))),r.default.createElement(m.FormGroup,null,r.default.createElement(m.Col,{componentClass:m.ControlLabel,sm:3},r.default.createElement("span",{className:"text-danger"}," * "),"City"),r.default.createElement(m.Col,{sm:9},r.default.createElement(m.FormControl,{type:"text",placeholder:"City..."}))),r.default.createElement(m.FormGroup,null,r.default.createElement(m.Col,{componentClass:m.ControlLabel,sm:3},r.default.createElement("span",{className:"text-danger"}," * "),"State"),r.default.createElement(m.Col,{sm:9},r.default.createElement(m.FormControl,{type:"text",placeholder:"Enter State..."}))),r.default.createElement(m.FormGroup,null,r.default.createElement(m.Col,{componentClass:m.ControlLabel,sm:3},r.default.createElement("span",{className:"text-danger"}," * "),"ZIP Code"),r.default.createElement(m.Col,{sm:9},r.default.createElement(m.FormControl,{type:"text",placeholder:"ZIP Code..."}))))),r.default.createElement(m.Modal.Footer,null,r.default.createElement(m.Button,{onClick:e.onClose},"Close"),r.default.createElement(m.Button,{bsStyle:"primary"},"Save")))};i.propTypes={visible:n.PropTypes.bool,onClose:n.PropTypes.func},i.defaultProps={onClose:function(){}},t.default=i},1526:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1525),r=l(n);t.default=r.default},1527:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=l(n),o=a(25),m=l(o),u=a(3),f=a(68),i={status:"Online",avatar:m.default.image.avatar(),name:m.default.name.firstName()+" "+m.default.name.lastName(),favoritted:!!Math.round(Math.random()),position:m.default.name.jobTitle(),shortProfile:m.default.lorem.paragraph(),contact:{Email:m.default.internet.email(),Phone:m.default.phone.phoneNumberFormat(),Mobile:m.default.phone.phoneNumberFormat(),Fax:m.default.phone.phoneNumberFormat(),Skype:m.default.internet.userName()},social:{LinkedIn:"/"+m.default.internet.userName(),Facebook:"/"+m.default.internet.userName(),Twitter:"/"+m.default.internet.userName()},address:{Address:m.default.address.streetAddress(),City:m.default.address.city(),State:m.default.address.state(),ZipCode:m.default.address.zipCode()},labels:["Computers",m.default.commerce.department(),m.default.commerce.department()]},s=function(e){return r.default.createElement(u.Modal,{show:e.visible,onHide:e.onClose},r.default.createElement(u.Modal.Header,{closeButton:!0},r.default.createElement(u.Modal.Title,null,"Profile Details")),r.default.createElement(u.Modal.Body,null,r.default.createElement(f.UserDetails,i)),r.default.createElement(u.Modal.Footer,null,r.default.createElement(u.Button,{onClick:e.onClose},"Close")))};s.propTypes={visible:n.PropTypes.bool,onClose:n.PropTypes.func},s.defaultProps={onClose:function(){}},t.default=s},1528:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1527),r=l(n);t.default=r.default},1529:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=l(n),o=a(25),m=l(o),u=a(3),f=a(14),i={Callee:{Name:m.default.name.firstName()+" "+m.default.name.lastName(),Position:m.default.name.jobTitle()},Caller:{Name:m.default.name.firstName()+" "+m.default.name.lastName(),Position:m.default.name.jobTitle()}},s=function(e){return r.default.createElement(u.Modal,{show:e.visible,onHide:e.onClose,bsSize:"large"},r.default.createElement(u.Modal.Header,{closeButton:!0},r.default.createElement(u.Modal.Title,null,"Video Conference with ",i.Callee.Name)),r.default.createElement(u.Modal.Body,{className:"text-center"},r.default.createElement(u.Row,null,r.default.createElement(u.Col,{md:6,className:"text-center"},r.default.createElement(u.Image,{phIcon:r.default.createElement("i",{className:"fa fa-video-camera fa-4x"}),height:200,phForegroundColor:f.Colors.grayDark}),r.default.createElement("h4",{className:"m-y-2"},i.Caller.Name),r.default.createElement("p",null,i.Caller.Position)),r.default.createElement(u.Col,{md:6},r.default.createElement(u.Image,{phIcon:r.default.createElement("i",{className:"fa fa-video-camera fa-4x"}),height:200,phForegroundColor:f.Colors.grayDarker}),r.default.createElement("h4",{className:"m-y-2"},i.Callee.Name),r.default.createElement("p",null,i.Callee.Position)),r.default.createElement(u.Col,{md:12},r.default.createElement(u.Divider,{textPosition:"center"},"Contact Options"),r.default.createElement("div",{className:"text-center m-y-1"},r.default.createElement("a",{href:"javascript:;",className:"p-x-1"},r.default.createElement(u.OverlayTrigger,{placement:"top",overlay:r.default.createElement(u.Tooltip,{id:"call-button"},"Call")},r.default.createElement("span",{className:"fa-stack fa-lg"},r.default.createElement("i",{className:"fa fa-circle fa-stack-2x text-success"}),r.default.createElement("i",{className:"fa fa-phone fa-stack-1x fa-inverse"})))),r.default.createElement("a",{href:"javascript:;",className:"p-x-1"},r.default.createElement(u.OverlayTrigger,{placement:"top",overlay:r.default.createElement(u.Tooltip,{id:"dismiss-button"},"Dismiss")},r.default.createElement("span",{className:"fa-stack fa-lg"},r.default.createElement("i",{className:"fa fa-circle fa-stack-2x text-danger"}),r.default.createElement("i",{className:"fa fa-close fa-stack-1x fa-inverse"})))),r.default.createElement("a",{href:"javascript:;",className:"p-x-1"},r.default.createElement(u.OverlayTrigger,{placement:"top",overlay:r.default.createElement(u.Tooltip,{id:"chat-button"},"Chat")},r.default.createElement("span",{className:"fa-stack fa-lg"},r.default.createElement("i",{className:"fa fa-circle fa-stack-2x text-primary"}),r.default.createElement("i",{className:"fa fa-comment fa-stack-1x fa-inverse"})))),r.default.createElement("a",{href:"javascript:;",className:"p-x-1"},r.default.createElement(u.OverlayTrigger,{placement:"top",overlay:r.default.createElement(u.Tooltip,{id:"voice-only-button"},"Voice Only")},r.default.createElement("span",{className:"fa-stack fa-lg"},r.default.createElement("i",{className:"fa fa-circle fa-stack-2x text-warning"}),r.default.createElement("i",{className:"fa fa-microphone fa-stack-1x fa-inverse"})))))))))};s.propTypes={visible:n.PropTypes.bool,onClose:n.PropTypes.func},s.defaultProps={onClose:function(){}},t.default=s},1530:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1529),r=l(n);t.default=r.default},1531:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.EditModal=t.DeleteModal=t.VideoModal=t.ChatModal=t.ProfileModal=t.CallModal=void 0;var n=a(1520),r=l(n),o=a(1528),m=l(o),u=a(1522),f=l(u),i=a(1530),s=l(i),d=a(1524),c=l(d),E=a(1526),p=l(E);t.CallModal=r.default,t.ProfileModal=m.default,t.ChatModal=f.default,t.VideoModal=s.default,t.DeleteModal=c.default,t.EditModal=p.default},1532:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1518),r=l(n);t.default=r.default},3453:function(e,t){e.exports={Users:[{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Online",Position:"{{fake:[name.jobTitle]}}",Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Social:["LinkedIn","Facebook","Twitter"],Favorited:"{{n:0:1}}"},{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Offline",Position:"{{fake:[name.jobTitle]}}",Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Favorited:"{{n:0:1}}"},{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Online",Position:"{{fake:[name.jobTitle]}}",Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Social:["Facebook","Twitter"],Favorited:"{{n:0:1}}"},{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Busy",Position:"{{fake:[name.jobTitle]}}",Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Social:["Facebook"],
Favorited:"{{n:0:1}}"},{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Away",Position:"{{fake:[name.jobTitle]}}",Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Social:["LinkedIn"],Favorited:"{{n:0:1}}"},{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Online",Position:"{{fake:[name.jobTitle]}}",Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Social:["LinkedIn","Facebook","Twitter"],Favorited:"{{n:0:1}}"},{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Offline",Position:"{{fake:[name.jobTitle]}}",Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Favorited:"{{n:0:1}}"},{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Online",Position:"{{fake:[name.jobTitle]}}",Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Social:["Facebook","Twitter"],Favorited:"{{n:0:1}}"},{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Busy",Position:"{{fake:[name.jobTitle]}}",Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Social:["Facebook"],Favorited:"{{n:0:1}}"},{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Away",Position:"{{fake:[name.jobTitle]}}",Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Social:["LinkedIn"],Favorited:"{{n:0:1}}"},{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Online",Position:"{{fake:[name.jobTitle]}}",Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Social:["LinkedIn","Facebook","Twitter"],Favorited:"{{n:0:1}}"},{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Offline",Position:"{{fake:[name.jobTitle]}}",Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Favorited:"{{n:0:1}}"},{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Online",Position:"{{fake:[name.jobTitle]}}",Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Social:["Facebook","Twitter"],Favorited:"{{n:0:1}}"},{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Busy",Position:"{{fake:[name.jobTitle]}}",Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Social:["Facebook"],Favorited:"{{n:0:1}}"},{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Away",Position:"{{fake:[name.jobTitle]}}",Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Social:["LinkedIn"],Favorited:"{{n:0:1}}"},{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Online",Position:"{{fake:[name.jobTitle]}}",Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Social:["LinkedIn","Facebook","Twitter"],Favorited:"{{n:0:1}}"},{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Offline",Position:"{{fake:[name.jobTitle]}}",Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Favorited:"{{n:0:1}}"},{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Online",Position:"{{fake:[name.jobTitle]}}",Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Social:["Facebook","Twitter"],Favorited:"{{n:0:1}}"},{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Busy",Position:"{{fake:[name.jobTitle]}}",Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Social:["Facebook"],Favorited:"{{n:0:1}}"},{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Away",Position:"{{fake:[name.jobTitle]}}",Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Social:["LinkedIn"],Favorited:"{{n:0:1}}"}]}}});