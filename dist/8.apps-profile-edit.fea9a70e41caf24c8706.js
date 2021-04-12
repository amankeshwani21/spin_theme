webpackJsonp([8],{236:function(e,t){e.exports={inlineInputs:"ProfileEdit__inlineInputs___2uaCS",paymentOtherLabel:"ProfileEdit__paymentOtherLabel___47oxS"}},1491:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(11),r=l(n),u=a(4),d=l(u),c=a(10),m=l(c),f=a(6),o=l(f),s=a(5),i=l(s),E=a(2),p=l(E),y=a(19),h=(l(y),a(12)),v=(l(h),a(9)),N=(l(v),a(104)),g=(l(N),a(25)),C=l(g),b=a(43),w=(l(b),a(22)),x=a(62),M=a(3),k=a(20),P=a(35),S=(l(P),a(18)),_=(a(14),a(236)),A=(l(_),a(1502)),F={Name:C.default.name.firstName()+" "+C.default.name.lastName(),Avatar:C.default.image.avatar()},O=function(e){switch(e){case"profile":return"Profile Edit";case"account":return"Account Edit";case"billing":return"Billing Edit";case"settings":return"Settings Edit";case"sessions":return"Sessions Edit"}},L=function(e){function t(){return(0,d.default)(this,t),(0,o.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,m.default)(t,[{key:"getLayoutOptions",value:function(){return{contentView:S.CONTENT_VIEW_STATIC}}},{key:"render",value:function(){var e=this.props.routeParams.section;return p.default.createElement("div",null,p.default.createElement(M.Row,null,p.default.createElement(M.Col,{md:12,className:"m-b-3"},p.default.createElement(M.Media,null,p.default.createElement(M.Media.Left,{align:"middle"},p.default.createElement(M.AvatarImage,{src:F.Avatar})),p.default.createElement(M.Media.Body,null,p.default.createElement("p",{className:"h3 m-y-0"},p.default.createElement(w.Link,{to:"/apps/profile-details"},F.Name),p.default.createElement("span",{className:"text-muted m-x-1"},"/"),p.default.createElement("span",{className:"text-white"},O(e))),p.default.createElement("p",{className:"m-y-0"},p.default.createElement(M.Label,{outline:!0,className:"m-r-1 v-a-m",bsStyle:"primary"},"Premium"),p.default.createElement("span",{className:"v-a-m"},"Edit Your Name, Avatar, etc.")))))),p.default.createElement(M.Row,null,p.default.createElement(M.Col,{lg:2},p.default.createElement(M.Nav,{bsStyle:"pills",stacked:!0},p.default.createElement(x.LinkContainer,{to:"/apps/user-profile/edit/profile"},p.default.createElement(M.NavItem,{eventKey:1,href:"javascript:;"},"Profile Edit")),p.default.createElement(x.LinkContainer,{to:"/apps/user-profile/edit/account"},p.default.createElement(M.NavItem,{eventKey:2,href:"javascript:;"},"Account Edit")),p.default.createElement(x.LinkContainer,{to:"/apps/user-profile/edit/billing"},p.default.createElement(M.NavItem,{eventKey:3,href:"javascript:;"},"Billing Edit")),p.default.createElement(x.LinkContainer,{to:"/apps/user-profile/edit/settings"},p.default.createElement(M.NavItem,{eventKey:4,href:"javascript:;"},"Settings Edit")),p.default.createElement(x.LinkContainer,{to:"/apps/user-profile/edit/sessions"},p.default.createElement(M.NavItem,{eventKey:5,href:"javascript:;"},"Sessions Edit")))),p.default.createElement(M.Col,{lg:10},"profile"===e&&p.default.createElement(A.ProfileEdit,null),"account"===e&&p.default.createElement(A.AccountEdit,null),"billing"===e&&p.default.createElement(A.BillingEdit,null),"settings"===e&&p.default.createElement(A.SettingsEdit,null),"sessions"===e&&p.default.createElement(A.SessionsEdit,null))))}}]),t}(k.RoutedComponent);t.default=(0,k.connect)()(L)},1492:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=l(n),u=a(62),d=a(22),c=a(3),m=(a(14),a(68),a(236)),f=(l(m),function(){return r.default.createElement("div",null,r.default.createElement(c.Panel,{className:"m-b-2",header:r.default.createElement("h4",{className:"panel-title"},"Account Edit"),footer:r.default.createElement("div",null,r.default.createElement("i",{className:"fa fa-fw fa-support m-r-1"}),r.default.createElement("span",null,"If you have trouble with the configuration, you can contact us.")," ",r.default.createElement(d.Link,{to:"/apps/faq"},"We can help."))},r.default.createElement(c.Form,{horizontal:!0},r.default.createElement(c.FormGroup,null,r.default.createElement(c.Col,{componentClass:c.ControlLabel,sm:3},"Old Password"),r.default.createElement(c.Col,{sm:6},r.default.createElement(c.FormControl,{type:"text"}))),r.default.createElement(c.FormGroup,null,r.default.createElement(c.Col,{componentClass:c.ControlLabel,sm:3},"New Password"),r.default.createElement(c.Col,{sm:6},r.default.createElement(c.FormControl,{type:"text"}))),r.default.createElement(c.FormGroup,null,r.default.createElement(c.Col,{componentClass:c.ControlLabel,sm:3},"Confirm New Password"),r.default.createElement(c.Col,{sm:6},r.default.createElement(c.FormControl,{type:"text"}))),r.default.createElement(c.FormGroup,null,r.default.createElement(c.Col,{smOffset:3,sm:6},r.default.createElement(c.Button,{className:"m-r-1"},"Update Password"),r.default.createElement(u.LinkContainer,{to:"/pages/forgot-password"},r.default.createElement(c.Button,{bsStyle:"link"},"Forgot Password?")))))),r.default.createElement(c.Panel,{className:"m-b-2",header:r.default.createElement("h4",{className:"panel-title"},"Change Username")},r.default.createElement("p",null,r.default.createElement("span",null,"Changing the username is not recommended. In this connection, it can create")," ",r.default.createElement(d.Link,{to:"/apps/faq"},"many problems.")),r.default.createElement(c.Button,null,"Change Username")),r.default.createElement(c.Panel,{header:r.default.createElement("h4",{className:"panel-title"},"Delete Account"),footer:r.default.createElement("div",null,r.default.createElement("i",{className:"fa fa-fw fa-exclamation-circle m-r-1"}),r.default.createElement("span",null," Are you sure you don’t want to just downgrade your account to a Free Account? We won’t charge your PayPal account anymore."))},r.default.createElement("p",null,"Once you delete your account, there is no going back. Please be certain."),r.default.createElement(c.Button,{bsStyle:"danger",className:"btn-outline"},"Delete Your Account")))});t.default=f},1493:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1492),r=l(n);t.default=r.default},1494:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(135),r=l(n),u=a(38),d=l(u),c=a(11),m=l(c),f=a(4),o=l(f),s=a(10),i=l(s),E=a(6),p=l(E),y=a(5),h=l(y),v=a(2),N=l(v),g=a(19),C=l(g),b=a(25),w=l(b),x=a(12),M=l(x),k=a(22),P=a(3),S=a(652),_=(a(14),a(236)),A=l(_),F=[{id:C.default.v4(),type:"Basic",bsStyle:"info",description:"Very good to start your business",price:23,capabilities:[{key:"Android / iOS",value:"Yes"},{key:"Admin Web Access",value:"85421"},{key:"Appointments",value:"Yes"},{key:"Import / Export Data",value:"Yes"},{key:"Data Storage",value:"1GB"}]},{id:C.default.v4(),type:"Premium",bsStyle:"primary",description:"Our most popular package",price:48.9,capabilities:[{key:"Android / iOS",value:"Yes"},{key:"Admin Web Access",value:"14931"},{key:"Appointments",value:"Yes"},{key:"Import / Export Data",value:"Yes"},{key:"Data Storage",value:"2GB"}],active:!0},{id:C.default.v4(),type:"Pro",bsStyle:"warning",description:"When you have a lot of customers to take care of",price:79.99,capabilities:[{key:"Android / iOS",value:"Yes"},{key:"Admin Web Access",value:"35415"},{key:"Appointments",value:"Yes"},{key:"Import / Export Data",value:"Yes"},{key:"Data Storage",value:"3GB"}]},{id:C.default.v4(),type:"Advanced",bsStyle:"danger",description:"For the most advanced users and teams",price:123,capabilities:[{key:"Android / iOS",value:"Yes"},{key:"Admin Web Access",value:"51738"},{key:"Appointments",value:"Yes"},{key:"Import / Export Data",value:"Yes"},{key:"Data Storage",value:"4GB"}]}],O=w.default.internet.email(),L=w.default.internet.email(),B=w.default.internet.email(),T=w.default.internet.email(),G=function(e){function t(e,a){(0,o.default)(this,t);var l=(0,p.default)(this,(t.__proto__||(0,m.default)(t)).call(this,e,a));return l.state={planModalOpen:!1,paymentModalOpen:!1,paymentModalType:"credit"},l}return(0,h.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this;return N.default.createElement("div",null,N.default.createElement(P.Panel,{className:"m-b-2",header:N.default.createElement("h4",{className:"panel-title"},"Billing Edit"),footer:N.default.createElement("div",null,N.default.createElement("i",{className:"fa fa-fw fa-support m-r-1"}),"If you want to personalize the notification settings,"," ",N.default.createElement(k.Link,{to:"/apps/user-profile/edit/settings"},"go here."))},N.default.createElement(P.Form,{horizontal:!0},N.default.createElement(P.Media,null,N.default.createElement(P.Media.Body,null,N.default.createElement(P.FormGroup,null,N.default.createElement(P.Col,{componentClass:P.ControlLabel,sm:3},"Your Plan"),N.default.createElement(P.Col,{sm:6},N.default.createElement("p",null,N.default.createElement("span",{className:"text-white"},"Premium")," - You use 37% of the available space"),N.default.createElement(P.SlimProgressBar,null,N.default.createElement(P.ProgressBar,{now:60,key:1}),N.default.createElement(P.ProgressBar,{now:10,bsStyle:"info",key:2}),N.default.createElement(P.ProgressBar,{now:10,bsStyle:"success",key:3})),N.default.createElement("dl",{className:"dl-horizontal m-t-1"},N.default.createElement("dt",null,"Amount of Space"),N.default.createElement("dd",{className:"text-white"},"214,8 GB / 1,03 TB"),N.default.createElement("dt",null,"Regular Files"),N.default.createElement("dd",{className:"text-white"},N.default.createElement("i",{className:"fa fa-square text-primary m-r-1"}),"177,8 GB"),N.default.createElement("dt",null,"Shared Files"),N.default.createElement("dd",{className:"text-white"},N.default.createElement("i",{className:"fa fa-square text-info m-r-1"}),"37 GB"),N.default.createElement("dt",null,"Available Space"),N.default.createElement("dd",{className:"text-white"},N.default.createElement("i",{className:"fa fa-square text-success m-r-1"}),"177,8 GB"))))),N.default.createElement(P.Media.Right,null,N.default.createElement(P.Button,{onClick:function(){e.setState({planModalOpen:!0})}},"Change Plan"))),N.default.createElement(P.Divider,null,"Payment"),N.default.createElement(P.Media,null,N.default.createElement(P.Media.Body,null,N.default.createElement(P.FormGroup,null,N.default.createElement(P.Col,{componentClass:P.ControlLabel,sm:3},"Payment Method"),N.default.createElement(P.Col,{sm:9},N.default.createElement("p",{className:"m-b-1"},N.default.createElement("i",{className:"fa fa-fw fa-paypal text-primary m-y-0 p-y-1"}),N.default.createElement("span",{className:"text-white"},"PayPal")," - PayPal Account: ",O),N.default.createElement("dl",{className:"dl-horizontal"},N.default.createElement("dt",null,"Next Payment Due"),N.default.createElement("dd",{className:"text-white"}," 2016-05-21 "),N.default.createElement("dt",null,"Amount"),N.default.createElement("dd",{className:"text-white"},"$ 13.00"))))),N.default.createElement(P.Media.Right,null,N.default.createElement(P.Button,{onClick:function(){e.setState({paymentModalOpen:!0})}},"Change Payment"))))),N.default.createElement(P.Panel,{header:N.default.createElement("h4",{className:"panel-title"},"Payment History")},N.default.createElement(P.Table,{fill:!0},N.default.createElement("thead",null,N.default.createElement("tr",null,N.default.createElement("th",null,"#"),N.default.createElement("th",null,"Id"),N.default.createElement("th",null,"Date"),N.default.createElement("th",null,"Amount"),N.default.createElement("th",null,"Description"),N.default.createElement("th",null,"Payment Method"),N.default.createElement("th",null,"Receipt"))),N.default.createElement("tbody",null,N.default.createElement("tr",null,N.default.createElement("td",null,N.default.createElement(P.OverlayTrigger,{overlay:N.default.createElement(P.Tooltip,{id:"payment-status-tooltip-1"},"Success")},N.default.createElement("i",{className:"fa fa-check text-success"}))),N.default.createElement("td",{className:"text-white"},"26822"),N.default.createElement("td",{className:"text-white"},"2016-04-21"),N.default.createElement("td",{className:"text-white"},"$ 626.00"),N.default.createElement("td",null,N.default.createElement(P.Label,{outline:!0,bsStyle:"primary"},"Premium")),N.default.createElement("td",null,N.default.createElement("i",{className:"fa fa-fw fa-paypal text-primary m-r-1"}),N.default.createElement("span",{className:"text-white"},L)),N.default.createElement("td",null,N.default.createElement(P.OverlayTrigger,{overlay:N.default.createElement(P.Tooltip,{id:"download-link-1"},"Download")},N.default.createElement("a",{href:"javascript:;"},N.default.createElement("i",{className:"fa fa-cloud-download"}))))),N.default.createElement("tr",null,N.default.createElement("td",null,N.default.createElement(P.OverlayTrigger,{overlay:N.default.createElement(P.Tooltip,{id:"payment-status-tooltip-2"},"Success")},N.default.createElement("i",{className:"fa fa-check text-success"}))),N.default.createElement("td",{className:"text-white"},"75314"),N.default.createElement("td",{className:"text-white"},"2011-09-13"),N.default.createElement("td",{className:"text-white"},"$ 379.00"),N.default.createElement("td",null,N.default.createElement(P.Label,{outline:!0,bsStyle:"info"},"Basic")),N.default.createElement("td",null,N.default.createElement("i",{className:"fa fa-fw fa-credit-card-alt m-r-1"}),N.default.createElement("span",null,"Visa 4*** **** **** 9221")),N.default.createElement("td",null,N.default.createElement(P.OverlayTrigger,{overlay:N.default.createElement(P.Tooltip,{id:"payment-link-tooltip-2"},"Download")},N.default.createElement("a",{href:"javascript:;"},N.default.createElement("i",{className:"fa fa-cloud-download"}))))),N.default.createElement("tr",null,N.default.createElement("td",null,N.default.createElement(P.OverlayTrigger,{overlay:N.default.createElement(P.Tooltip,{id:"payment-status-tooltip-3"},"Failed")},N.default.createElement("i",{className:"fa fa-close text-danger"}))),N.default.createElement("td",null,"38264"),N.default.createElement("td",null,"2016-04-21"),N.default.createElement("td",null,"$ 585.00"),N.default.createElement("td",null,N.default.createElement(P.Label,{outline:!0,bsStyle:"warning"},"Pro")),N.default.createElement("td",null,N.default.createElement("i",{className:"fa fa-fw fa-paypal m-r-1"}),N.default.createElement("span",null,B)),N.default.createElement("td",null)),N.default.createElement("tr",null,N.default.createElement("td",null,N.default.createElement(P.OverlayTrigger,{overlay:N.default.createElement(P.Tooltip,{id:"payment-status-tooltip-4"},"Failed")},N.default.createElement("i",{className:"fa fa-close text-danger"}))),N.default.createElement("td",null,"38264"),N.default.createElement("td",null,"2016-04-21"),N.default.createElement("td",null,"$ 585.00"),N.default.createElement("td",null,N.default.createElement(P.Label,{outline:!0,bsStyle:"danger"},"Advanced")),N.default.createElement("td",null,N.default.createElement("i",{className:"fa fa-fw fa-credit-card-alt m-r-1"}),N.default.createElement("span",null,"Visa 4*** **** **** 9221")),N.default.createElement("td",null)),N.default.createElement("tr",null,N.default.createElement("td",null,N.default.createElement(P.OverlayTrigger,{overlay:N.default.createElement(P.Tooltip,{id:"payment-status-tooltip-5"},"Success")},N.default.createElement("i",{className:"fa fa-check text-success"}))),N.default.createElement("td",null,"80882"),N.default.createElement("td",null,"2016-04-21"),N.default.createElement("td",null,"$ 793.00"),N.default.createElement("td",null,N.default.createElement(P.Label,{outline:!0},"Free")),N.default.createElement("td",null,N.default.createElement("i",{className:"fa fa-fw fa-paypal m-r-1"}),N.default.createElement("span",{className:"text-white"},T)),N.default.createElement("td",null))))),N.default.createElement(P.Modal,{show:this.state.planModalOpen,onHide:function(){return e.setState({planModalOpen:!1})},bsSize:"large"},N.default.createElement(P.Modal.Header,{closeButton:!0},N.default.createElement(P.Modal.Title,null,"Change Your Plan")),N.default.createElement(P.Modal.Body,null,N.default.createElement(P.Row,null,M.default.map(F,function(e){return N.default.createElement(P.Col,{md:3,key:e.id},N.default.createElement(S.PricingTableClean,e))}))),N.default.createElement(P.Modal.Footer,null,N.default.createElement("p",{className:"m-y-0"},N.default.createElement(P.Label,{outline:!0,className:"m-r-1"},"Free"),"Lorem ipsum dolor sit amet, consectetur adipisicing ",N.default.createElement("a",{href:"javascript:;"},"Downgrade Now")))),N.default.createElement(P.Modal,{show:this.state.paymentModalOpen,onHide:function(){return e.setState({paymentModalOpen:!1})},bsSize:"small"},N.default.createElement(P.Modal.Header,{closeButton:!0},N.default.createElement(P.Modal.Title,null,"Payment Details")),N.default.createElement(P.Modal.Body,null,N.default.createElement("form",null,N.default.createElement(P.FormGroup,null,N.default.createElement("h5",{className:A.default.paymentOtherLabel},"Pay With"),N.default.createElement(P.Radio,{inline:!0,checked:"credit"===this.state.paymentModalType,onChange:function(){e.setState({paymentModalType:"credit"})}},"Credit Card"),N.default.createElement(P.Radio,{inline:!0,checked:"paypal"===this.state.paymentModalType,onChange:function(){e.setState({paymentModalType:"paypal"})}},"PayPal Account")),"credit"===this.state.paymentModalType?N.default.createElement("div",null,N.default.createElement(P.FormGroup,null,N.default.createElement("h5",{className:A.default.paymentOtherLabel},"Credit Card Number"),N.default.createElement(P.FormControl,{type:"text",placeholder:"Enter Your Card Number..."})),N.default.createElement(P.FormGroup,null,N.default.createElement("h5",{className:A.default.paymentOtherLabel},"Accepted Cards"),N.default.createElement("div",null,N.default.createElement("i",{className:"fa fa-fw fa-cc-visa fa-2x m-r-1 text-white"}),N.default.createElement("i",{className:"fa fa-fw fa-cc-mastercard fa-2x m-r-1 text-white"}),N.default.createElement("i",{className:"fa fa-fw fa-cc-discover fa-2x m-r-1 text-white"}),N.default.createElement("i",{className:"fa fa-fw fa-cc-amex fa-2x m-r-1 text-white"}),N.default.createElement("i",{className:"fa fa-fw fa-cc-jcb fa-2x m-r-1 text-white"}))),N.default.createElement(P.Row,null,N.default.createElement(P.Col,{xs:7},N.default.createElement(P.FormGroup,{inline:!0},N.default.createElement("h5",{className:A.default.paymentOtherLabel},"Expiriation"),N.default.createElement("div",{className:A.default.inlineInputs},N.default.createElement(P.FormControl,{componentClass:"select",inline:!0},M.default.map((0,d.default)(r.default.mark(function e(){var t;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=1;case 1:if(!(t<=12)){e.next=7;break}return e.next=4,t;case 4:t++,e.next=1;break;case 7:case"end":return e.stop()}},e,this)})()),function(e,t){return N.default.createElement("option",{value:e,key:t},e)})),N.default.createElement(P.FormControl,{componentClass:"select",inline:!0},M.default.map((0,d.default)(r.default.mark(function e(){var t;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<10)){e.next=7;break}return e.next=4,16+t;case 4:t++,e.next=1;break;case 7:case"end":return e.stop()}},e,this)})()),function(e,t){return N.default.createElement("option",{value:e,key:t},e)}))))),N.default.createElement(P.Col,{xs:5},N.default.createElement(P.FormGroup,null,N.default.createElement("h5",{className:A.default.paymentOtherLabel},"CVV"),N.default.createElement(P.FormControl,{type:"text",placeholder:"CVV Code..."})))),N.default.createElement(P.FormGroup,null,N.default.createElement(P.ControlLabel,null,"Country"),N.default.createElement(P.FormControl,{componentClass:"select"},N.default.createElement("option",{value:1},"United Kingdom"),N.default.createElement("option",{value:2},"United States"),N.default.createElement("option",{value:2},"Australia"),N.default.createElement("option",{value:3},"Canada"),N.default.createElement("option",{value:4},"New Zeland"),N.default.createElement("option",{value:5},"Germany"))),N.default.createElement(P.FormGroup,null,N.default.createElement(P.ControlLabel,null,"Postal Code"),N.default.createElement(P.FormControl,{type:"text",placeholder:"Enter Code..."})),N.default.createElement(P.FormGroup,null,N.default.createElement(P.ControlLabel,null,"VAT ID"),N.default.createElement(P.FormControl,{type:"text",placeholder:"Enter ID..."}))):N.default.createElement("div",null,N.default.createElement("h5",{class:"m-t-3"},"Charge to"),N.default.createElement("p",null,"You are currently paying with your PayPal account ",N.default.createElement("strong",{class:"text-white"},N.default.createElement("span",null,"Alanna.Nicolas@gmail.com"))," Sign in to PayPal to use a different account."),N.default.createElement(P.Button,{block:!0,className:"m-y-2",bsStyle:"primary"},N.default.createElement("i",{className:"fa fa-fw fa-paypal"})," ","PayPal")))),N.default.createElement(P.Modal.Footer,null,N.default.createElement(P.Button,{className:"m-r-1",onClick:function(){return e.setState({paymentModalOpen:!1})}},"Cancel"),N.default.createElement(P.Button,{bsStyle:"success"},"Save"))))}}]),t}(N.default.Component);t.default=G},1495:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1494),r=l(n);t.default=r.default},1496:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=l(n),u=a(3),d=a(14),c=a(68),m=a(236),f=(l(m),function(){return r.default.createElement("div",null,r.default.createElement(u.Panel,{header:r.default.createElement("h4",{className:"panel-title"},"Edit Profile"),footer:r.default.createElement("div",{className:"text-right"},r.default.createElement(u.Button,{bsStyle:"primary"},"Update Profile"))},r.default.createElement(u.Form,{horizontal:!0},r.default.createElement(u.FormGroup,null,r.default.createElement(u.Col,{componentClass:u.ControlLabel,sm:3},"Avatar"),r.default.createElement(u.Col,{sm:6},r.default.createElement(c.Upload,null))),r.default.createElement(u.FormGroup,null,r.default.createElement(u.Col,{componentClass:u.ControlLabel,sm:3},r.default.createElement("span",{className:"text-danger"}," * "),"First Name"),r.default.createElement(u.Col,{sm:6},r.default.createElement(u.FormControl,{type:"text",placeholder:"First Name..."}))),r.default.createElement(u.FormGroup,null,r.default.createElement(u.Col,{componentClass:u.ControlLabel,sm:3},"Last Name"),r.default.createElement(u.Col,{sm:6},r.default.createElement(u.FormControl,{type:"text",placeholder:"Last Name..."}))),r.default.createElement(u.FormGroup,null,r.default.createElement(u.Col,{componentClass:u.ControlLabel,sm:3},r.default.createElement("span",{className:"text-danger"}," * "),"Job Type"),r.default.createElement(u.Col,{sm:6},r.default.createElement(u.FormControl,{componentClass:"select",placeholder:"1"},r.default.createElement("option",{value:"1"},"Human Intranet Developer"),r.default.createElement("option",{value:"2"},"Dynamic Tactics Specialist"),r.default.createElement("option",{value:"3"},"Global Configuration Consultant"),r.default.createElement("option",{value:"4"},"Principal Directives Orchestrator"),r.default.createElement("option",{value:"5"},"Corporate Usability Consultant")))),r.default.createElement(u.Divider,null,"Availability"),r.default.createElement(u.FormGroup,null,r.default.createElement(u.Col,{componentClass:u.ControlLabel,sm:3},"After Logging"),r.default.createElement(u.Col,{sm:6},r.default.createElement(u.Radio,{name:"after-logging",defaultChecked:!0},r.default.createElement(u.Label,{outline:!0,bsStyle:"success"},"Available")),r.default.createElement(u.Radio,{name:"after-logging"},r.default.createElement(u.Label,{outline:!0,bsStyle:"warning"},"Inactive")),r.default.createElement(u.Radio,{name:"after-logging"},r.default.createElement(u.Label,{outline:!0,bsStyle:"danger"},"Busy")),r.default.createElement(u.Radio,{name:"after-logging"},r.default.createElement(u.Label,{outline:!0,bsStyle:"custom",customColor:d.Colors.grayDarker},"Offline")))),r.default.createElement(u.Divider,null,"Add Profile"),r.default.createElement(u.FormGroup,null,r.default.createElement(u.Col,{componentClass:u.ControlLabel,sm:3},"Profile"),r.default.createElement(u.Col,{sm:6},r.default.createElement(u.FormControl,{componentClass:"textarea",placeholder:"Please Describe Your Profile..."}))),r.default.createElement(u.FormGroup,null,r.default.createElement(u.Col,{componentClass:u.ControlLabel,sm:3},"Add Labels"),r.default.createElement(u.Col,{sm:6},r.default.createElement(u.FormControl,{type:"text",placeholder:"Add Here..."}))))))});t.default=f},1497:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1496),r=l(n);t.default=r.default},1498:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=l(n),u=a(25),d=(l(u),a(3)),c=(a(14),a(236)),m=l(c),f=function(){return r.default.createElement("div",null,r.default.createElement(d.Panel,{header:r.default.createElement("h4",{className:"panel-title"},"Sessions Edit")},r.default.createElement(d.Table,{fill:!0},r.default.createElement("thead",null,r.default.createElement("tr",null,r.default.createElement("th",null,"#"),r.default.createElement("th",null,"Browser & OS"),r.default.createElement("th",null,"IP"),r.default.createElement("th",null,"Location"),r.default.createElement("th",null,"Signed In"),r.default.createElement("th",null,"Action"))),r.default.createElement("tbody",null,r.default.createElement("tr",null,r.default.createElement("td",null,r.default.createElement("i",{className:"fa fa-fw fa-circle text-success"})),r.default.createElement("td",null,r.default.createElement(d.Media,null,r.default.createElement(d.Media.Left,{align:"middle"},r.default.createElement("i",{className:"fa fa-fw fa-2x fa-desktop text-muted"})),r.default.createElement(d.Media.Body,{className:m.default.mediaFix},r.default.createElement("p",{className:"m-y-0 text-white"},"Safari / 534.2.0"),r.default.createElement("p",{className:"m-y-0"},"OS X 10.11.3")))),r.default.createElement("td",null,r.default.createElement("p",{className:"m-y-0 text-white"},"242.29.162.180"),r.default.createElement("p",{className:"m-y-0"},"Your Current Session")),r.default.createElement("td",null,r.default.createElement("p",{className:"m-y-0 text-white"},"New Garthstad"),r.default.createElement("p",{className:"m-y-0"},"Washington, Solomon Islands")),r.default.createElement("td",null,r.default.createElement("p",{className:"m-y-0 text-white"},"23 June, Saturday, 2016"),r.default.createElement("p",{className:"m-y-0"},"12:43 PM")),r.default.createElement("td",null,r.default.createElement(d.OverlayTrigger,{overlay:r.default.createElement(d.Tooltip,{id:"revoke-tooltip-1"},"Revoke")},r.default.createElement("i",{className:"fa fa-close text-danger"})))),r.default.createElement("tr",null,r.default.createElement("td",null,r.default.createElement("i",{className:"fa fa-fw fa-circle text-danger"})),r.default.createElement("td",null,r.default.createElement(d.Media,null,r.default.createElement(d.Media.Left,{align:"middle"},r.default.createElement("i",{className:"fa fa-fw fa-2x fa-laptop text-muted"})),r.default.createElement(d.Media.Body,{className:m.default.mediaFix},r.default.createElement("p",{className:"m-y-0 text-white"},"Mozilla / 5.0"),r.default.createElement("p",{className:"m-y-0"},"Windows NT 6.0")))),r.default.createElement("td",null,r.default.createElement("p",{className:"m-y-0 text-white"},"130.209.254.9"),r.default.createElement("p",{className:"m-y-0"},"-")),r.default.createElement("td",null,r.default.createElement("p",{className:"m-y-0 text-white"},"Durganbury"),r.default.createElement("p",{className:"m-y-0"},"Alaska, Denmark")),r.default.createElement("td",null,r.default.createElement("p",{className:"m-y-0 text-white"},"01 August, Friday, 2016"),r.default.createElement("p",{className:"m-y-0"},"09:11 AM")),r.default.createElement("td",null,r.default.createElement(d.OverlayTrigger,{overlay:r.default.createElement(d.Tooltip,{id:"revoke-tooltip-2"},"Revoke")},r.default.createElement("i",{className:"fa fa-close text-danger"})))),r.default.createElement("tr",null,r.default.createElement("td",null,r.default.createElement("i",{className:"fa fa-fw fa-circle"})),r.default.createElement("td",null,r.default.createElement(d.Media,null,r.default.createElement(d.Media.Left,{align:"middle"},r.default.createElement("i",{className:"fa fa-fw fa-2x fa-mobile text-muted"})),r.default.createElement(d.Media.Body,{className:m.default.mediaFix},r.default.createElement("p",{className:"m-y-0 "},"Chrome / 20.0.844.0"),r.default.createElement("p",{className:"m-y-0"},"iOS 7.1")))),r.default.createElement("td",null,r.default.createElement("p",{className:"m-y-0 "},"105.230.82.36"),r.default.createElement("p",{className:"m-y-0"},"-")),r.default.createElement("td",null,r.default.createElement("p",{className:"m-y-0 "},"Port Nathen"),r.default.createElement("p",{className:"m-y-0"},"Nevada, Belarus")),r.default.createElement("td",null,r.default.createElement("p",{className:"m-y-0 "},"01 January, Monday, 2016"),r.default.createElement("p",{className:"m-y-0"},"09:11 AM")),r.default.createElement("td",null,r.default.createElement(d.OverlayTrigger,{overlay:r.default.createElement(d.Tooltip,{id:"revoke-tooltip-3"},"Revoke")},r.default.createElement("i",{className:"fa fa-close text-danger"})))),r.default.createElement("tr",null,r.default.createElement("td",null,r.default.createElement("i",{className:"fa fa-fw fa-circle"})),r.default.createElement("td",null,r.default.createElement(d.Media,null,r.default.createElement(d.Media.Left,{align:"middle"},r.default.createElement("i",{className:"fa fa-fw fa-2x fa-tablet text-muted"})),r.default.createElement(d.Media.Body,{className:m.default.mediaFix},r.default.createElement("p",{className:"m-y-0 "},"AppleWebKit / 534.2.0"),r.default.createElement("p",{className:"m-y-0"},"iOS 9.1")))),r.default.createElement("td",null,r.default.createElement("p",{className:"m-y-0 "},"22.132.11.85"),r.default.createElement("p",{className:"m-y-0"},"-")),r.default.createElement("td",null,r.default.createElement("p",{className:"m-y-0 "},"Kadeport"),r.default.createElement("p",{className:"m-y-0"},"Delaware, Guatemala")),r.default.createElement("td",null,r.default.createElement("p",{className:"m-y-0 "},"01 August, Thursday, 2016"),r.default.createElement("p",{className:"m-y-0"},"09:11 AM")),r.default.createElement("td",null,r.default.createElement(d.OverlayTrigger,{overlay:r.default.createElement(d.Tooltip,{id:"revoke-tooltip-4"},"Revoke")},r.default.createElement("i",{className:"fa fa-close text-danger"})))),r.default.createElement("tr",null,r.default.createElement("td",null,r.default.createElement("i",{className:"fa fa-fw fa-circle"})),r.default.createElement("td",null,r.default.createElement(d.Media,null,r.default.createElement(d.Media.Left,{align:"middle"},r.default.createElement("i",{className:"fa fa-fw fa-2x fa-server text-muted"})),r.default.createElement(d.Media.Body,{className:m.default.mediaFix},r.default.createElement("p",{className:"m-y-0 "},"Safari / 533.1.0"),r.default.createElement("p",{className:"m-y-0"},"OSX Server 4")))),r.default.createElement("td",null,r.default.createElement("p",{className:"m-y-0 "},"208.166.232.254"),r.default.createElement("p",{className:"m-y-0"},"-")),r.default.createElement("td",null,r.default.createElement("p",{className:"m-y-0 "},"Anitamouth"),r.default.createElement("p",{className:"m-y-0"},"Maryland, Ethiopia")),r.default.createElement("td",null,r.default.createElement("p",{className:"m-y-0 "},"01 October, Wednesday, 2016"),r.default.createElement("p",{className:"m-y-0"
},"09:11 AM")),r.default.createElement("td",null,r.default.createElement(d.OverlayTrigger,{overlay:r.default.createElement(d.Tooltip,{id:"revoke-tooltip-5"},"Revoke")},r.default.createElement("i",{className:"fa fa-close text-danger"}))))))))};t.default=f},1499:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1498),r=l(n);t.default=r.default},1500:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=l(n),u=a(22),d=a(3),c=(a(14),a(236)),m=(l(c),function(){return r.default.createElement("div",null,r.default.createElement(d.Panel,{header:r.default.createElement("h4",{className:"panel-title"},"Settings Edit"),footer:r.default.createElement("div",null,r.default.createElement("i",{className:"fa fa-fw fa-support m-r-1"}),r.default.createElement("span",null,"If you have trouble with the configuration, you can contact us.")," ",r.default.createElement(u.Link,{to:"/apps/faq"},"We can help."))},r.default.createElement("div",null,r.default.createElement("h5",null,"Monthly Newsletter"),r.default.createElement("p",null,"Do you want receive our monthly newsletter about new products and offers?"),r.default.createElement(d.Checkbox,null,"Notify me")),r.default.createElement("div",{className:"m-t-3"},r.default.createElement("h5",null,"Private Message"),r.default.createElement("p",null,"Do you want notify you by email whenever contacts send you a message?"),r.default.createElement(d.Radio,{name:"privateMessagesAccept",defaultChecked:!0,inline:!0},"Yes"),r.default.createElement(d.Radio,{name:"privateMessagesAccept",inline:!0},"No")),r.default.createElement("div",{className:"m-t-3"},r.default.createElement("h5",null,"Publication Email Subscriptions"),r.default.createElement("p",null,"Control the emails that publications send to you."),r.default.createElement(d.Button,null,"Manage Publications")),r.default.createElement("div",{className:"m-t-3"},r.default.createElement("h5",null,"Activity Notifications"),r.default.createElement("p",null,"Notify me via email when"),r.default.createElement(d.Checkbox,{defaultChecked:!0,inline:!0},"Someone Comments"),r.default.createElement(d.Checkbox,{defaultChecked:!0,inline:!0},"Someone Mentions"),r.default.createElement(d.Checkbox,{defaultChecked:!0,inline:!0},"Anyone Follows Me"))))});t.default=m},1501:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1500),r=l(n);t.default=r.default},1502:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.SessionsEdit=t.SettingsEdit=t.BillingEdit=t.AccountEdit=t.ProfileEdit=void 0;var n=a(1497),r=l(n),u=a(1493),d=l(u),c=a(1495),m=l(c),f=a(1501),o=l(f),s=a(1499),i=l(s);t.ProfileEdit=r.default,t.AccountEdit=d.default,t.BillingEdit=m.default,t.SettingsEdit=o.default,t.SessionsEdit=i.default},1503:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1491),r=l(n);t.default=r.default}});