webpackJsonp([14],{295:function(e,t){e.exports={Messages:[{User:{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Away"},Date:"{{fake:[date.recent]}}",Content:"{{fake:[lorem.paragraph]}}",Active:"{{n:0:1}}"},{User:{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Online"},Date:"{{fake:[date.recent]}}",Content:"{{fake:[lorem.paragraph]}}",Active:"{{n:0:1}}"},{User:{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Online"},Date:"{{fake:[date.recent]}}",Content:"{{fake:[lorem.paragraph]}}",Active:"{{n:0:1}}"},{User:{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Busy"},Date:"{{fake:[date.recent]}}",Content:"{{fake:[lorem.paragraph]}}",Active:"{{n:0:1}}"},{User:{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Away"},Date:"{{fake:[date.recent]}}",Content:"{{fake:[lorem.paragraph]}}",Active:"{{n:0:1}}"},{User:{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Online"},Date:"{{fake:[date.recent]}}",Content:"{{fake:[lorem.paragraph]}}",Active:"{{n:0:1}}"},{User:{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Offline"},Date:"{{fake:[date.recent]}}",Content:"{{fake:[lorem.paragraph]}}",Active:"{{n:0:1}}"},{User:{Name:"{{fake:[name.firstName] [name.lastName]}}",Avatar:"{{fake:[image.avatar]}}",Status:"Away"},Date:"{{fake:[date.recent]}}",Content:"{{fake:[lorem.paragraph]}}",Active:"{{n:0:1}}"}]}},353:function(e,t){e.exports={userDetails:"ProfileDetails__userDetails___B05ld",userPanelName:"ProfileDetails__userPanelName___ExM1t",detailsTab:"ProfileDetails__detailsTab___3cnKg",overviewBox:"ProfileDetails__overviewBox___2dM5B",header:"ProfileDetails__header___1Gc31",value:"ProfileDetails__value___VXqOF",subTitle:"ProfileDetails__subTitle___11V6k",footer:"ProfileDetails__footer___17o6U",messagesTable:"ProfileDetails__messagesTable___24FSH"}},1484:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(11),r=l(n),u=a(4),d=l(u),s=a(10),m=l(s),f=a(6),c=l(f),o=a(5),i=l(o),E=a(2),p=l(E),v=a(19),N=(l(v),a(25)),h=l(N),g=a(9),b=(l(g),a(12)),w=l(b),_=a(104),y=(l(_),a(43)),C=(l(y),a(22),a(62)),k=a(3),M=a(20),D=a(35),S=l(D),x=a(14),P=a(18),A=a(353),T=l(A),B=a(1489),I={name:h.default.name.firstName()+" "+h.default.name.lastName(),avatar:h.default.image.avatar(),position:h.default.name.jobTitle(),shortProfile:h.default.lorem.paragraph(),labels:[h.default.commerce.department(),h.default.commerce.department(),h.default.commerce.department()],favoritted:!!Math.round(Math.random())},O=function(){return p.default.createElement("div",{className:T.default.userDetails},p.default.createElement(k.Media,null,p.default.createElement(k.Media.Left,{align:"middle"},p.default.createElement(k.AvatarImage,{size:"large",showStatus:!0,statusPlacement:"bottom",statusColor:x.Colors.brandSuccess,src:I.avatar})),p.default.createElement(k.Media.Body,null,p.default.createElement("div",{className:T.default.userPanelName},p.default.createElement("h4",null,I.name),p.default.createElement(k.FavoriteStar,{favorited:!!parseInt(I.favoritted),className:"m-l-1"})),p.default.createElement("p",null,I.position),p.default.createElement("div",null,p.default.createElement(k.Button,{bsStyle:"primary"},p.default.createElement("i",{className:"fa fa-envelope m-r-1"}),"Send Email")," ",p.default.createElement(C.LinkContainer,{to:"/apps/user-profile/edit/profile"},p.default.createElement(k.Button,{href:"javascript:;"},p.default.createElement("i",{className:"fa fa-pencil"})))," ",p.default.createElement(k.Button,null,p.default.createElement("i",{className:"fa fa-trash"}))))),p.default.createElement(k.Divider,null,"Profile"),p.default.createElement("p",{className:"m-y-0"},I.shortProfile),p.default.createElement(k.Divider,null,"Labels"),p.default.createElement("div",null,w.default.map(I.labels,function(e,t){return p.default.createElement(k.Label,{outline:!0,bsStyle:"default",className:"m-r-1",key:t},e)})))},j=function(e){function t(){return(0,d.default)(this,t),(0,c.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,m.default)(t,[{key:"getLayoutOptions",value:function(){return{contentView:P.CONTENT_VIEW_STATIC}}},{key:"render",value:function(){return p.default.createElement(k.Row,null,p.default.createElement(k.Col,{lg:4},(0,S.default)(O)),p.default.createElement(k.Col,{lg:8},p.default.createElement(k.Tab.Container,{id:"profile-tabs",defaultActiveKey:"overview"},p.default.createElement("div",null,p.default.createElement(k.Nav,{bsStyle:"tabs"},p.default.createElement(k.NavItem,{eventKey:"overview"},"Overview"),p.default.createElement(k.NavItem,{eventKey:"contact-details"},"Contact Details"),p.default.createElement(k.NavItem,{eventKey:"chat"},"Chat"),p.default.createElement(k.NavItem,{eventKey:"messages"},"Messages"," ",p.default.createElement(k.Badge,null,"4"))),p.default.createElement(k.Tab.Content,{animation:!0},p.default.createElement(k.Tab.Pane,{eventKey:"overview"},p.default.createElement(B.Overview,null)),p.default.createElement(k.Tab.Pane,{eventKey:"contact-details"},p.default.createElement(B.DetailContact,null)),p.default.createElement(k.Tab.Pane,{eventKey:"chat"},p.default.createElement(B.Chat,null)),p.default.createElement(k.Tab.Pane,{eventKey:"messages"},p.default.createElement(B.Messages,null)))))))}}]),t}(M.RoutedComponent);t.default=(0,M.connect)()(j)},1485:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=l(n),u=a(25),d=l(u),s=a(3),m=a(68),f=a(37),c=l(f),o=a(295),i=l(o),E=a(353),p=(l(E),(0,c.default)(i.default)),v=d.default.name.firstName()+" "+d.default.name.lastName(),N=function(){return r.default.createElement(s.Panel,{className:"m-t-2",header:r.default.createElement(s.Row,null,r.default.createElement(s.Col,{sm:6,xs:12},"Chat with "+v,r.default.createElement(s.Col,{sm:6,lgHidden:!0,mdHidden:!0,smHidden:!0},r.default.createElement(s.DropdownButton,{id:"dropdown-chat-options-mobile",title:"Options"},r.default.createElement(s.MenuItem,{eventKey:"1"},r.default.createElement("i",{className:"fa fa-message fa-fw m-r-1"}),"Private Message"),r.default.createElement(s.MenuItem,{eventKey:"2"},r.default.createElement("i",{className:"fa fa-search fa-fw m-r-1"}),"Search this Thread"),r.default.createElement(s.MenuItem,{divider:!0}),r.default.createElement(s.MenuItem,{eventKey:"3"},r.default.createElement("i",{className:"fa fa-cross fa-fw m-r-1"}),"Block User")))),r.default.createElement(s.Col,{sm:6,xsHidden:!0,className:"text-right"},r.default.createElement(s.Dropdown,{id:"dropdown-chat-options-desktop",bsSize:"small"},r.default.createElement(s.Dropdown.Toggle,null,r.default.createElement("i",{className:"fa fa-gear fa-fw"})),r.default.createElement(s.Dropdown.Menu,{className:"super-colors"},r.default.createElement(s.MenuItem,{eventKey:"1"},r.default.createElement("i",{className:"fa fa-message fa-fw m-r-1"}),"Private Message"),r.default.createElement(s.MenuItem,{eventKey:"2"},r.default.createElement("i",{className:"fa fa-search fa-fw m-r-1"}),"Search this Thread"),r.default.createElement(s.MenuItem,{divider:!0}),r.default.createElement(s.MenuItem,{eventKey:"3"},r.default.createElement("i",{className:"fa fa-cross fa-fw m-r-1"}),"Block User"))))),footer:r.default.createElement(s.InputGroup,null,r.default.createElement(s.InputGroup.Button,null,r.default.createElement(s.Button,null,r.default.createElement("i",{className:"fa fa-plus fa-fw"}))),r.default.createElement(s.FormControl,{type:"text",placeholder:"Your Message..."}),r.default.createElement(s.InputGroup.Button,{bsSize:"small"},r.default.createElement(s.Button,{bsStyle:"primary"},"Send")))},r.default.createElement(m.Chat,{messages:p.Messages}))};t.default=N},1486:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=l(n),u=a(25),d=l(u),s=a(3),m={phone:d.default.phone.phoneNumberFormat(),mobile:d.default.phone.phoneNumberFormat(),fax:d.default.phone.phoneNumberFormat(),email:d.default.internet.email(),skype:d.default.internet.userName(),linkedIn:"http://lnkd.in/"+d.default.internet.userName(),facebook:"http://fb.com/"+d.default.internet.userName(),twitter:"http://twitter.com/"+d.default.internet.userName(),address:d.default.address.streetAddress(),city:d.default.address.city(),state:d.default.address.state(),zipCode:d.default.address.zipCode()},f=function(){return r.default.createElement("div",null,r.default.createElement(s.Divider,{className:"m-t-1"},"Contact"),r.default.createElement("dl",{className:"dl-horizontal"},r.default.createElement("dt",null,"Phone"),r.default.createElement("dd",{className:"text-white"},m.phone),r.default.createElement("dt",null,"Mobile"),r.default.createElement("dd",{className:"text-white"},m.mobile),r.default.createElement("dt",null,"Fax"),r.default.createElement("dd",{className:"text-white"},m.fax),r.default.createElement("dt",null,"Email"),r.default.createElement("dd",null,r.default.createElement("a",{href:"javascript:void(0)"},m.email)),r.default.createElement("dt",null,"Skype"),r.default.createElement("dd",null,r.default.createElement("a",{href:"javascript:void(0)"},m.skype))),r.default.createElement(s.Divider,{className:"m-t-1"},"Social"),r.default.createElement("dl",{className:"dl-horizontal"},r.default.createElement("dt",null,r.default.createElement("i",{className:"fa fa-linkedin-square fa-fw"})," ","LinkedIn"),r.default.createElement("dd",{className:"text-white"},r.default.createElement("a",{href:"javascript:void(0)"},m.linkedIn)),r.default.createElement("dt",null,r.default.createElement("i",{className:"fa fa-facebook-square fa-fw"})," ","Facebook"),r.default.createElement("dd",{className:"text-white"},r.default.createElement("a",{href:"javascript:void(0)"},m.facebook)),r.default.createElement("dt",null,r.default.createElement("i",{className:"fa fa-twitter-square fa-fw"}),"Twitter"),r.default.createElement("dd",{className:"text-white"},r.default.createElement("a",{href:"javascript:void(0)"},m.twitter))),r.default.createElement(s.Divider,{className:"m-t-1"},"Address"),r.default.createElement("dl",{className:"dl-horizontal"},r.default.createElement("dt",null,"Address"),r.default.createElement("dd",{className:"text-white"},m.address),r.default.createElement("dt",null,"City"),r.default.createElement("dd",{className:"text-white"},m.city),r.default.createElement("dt",null,"State"),r.default.createElement("dd",{className:"text-white"},m.state),r.default.createElement("dt",null,"Zip Code"),r.default.createElement("dd",{className:"text-white"},m.zipCode)))};t.default=f},1487:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(135),r=l(n),u=a(38),d=l(u),s=a(2),m=l(s),f=a(25),c=l(f),o=a(19),i=l(o),E=a(12),p=l(E),v=a(9),N=l(v),h=a(3),g=a(14),b=a(353),w=l(b),_=(0,d.default)(r.default.mark(function e(){var t;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<20)){e.next=7;break}return e.next=4,{id:i.default.v4(),User:{Name:c.default.name.firstName()+" "+c.default.name.lastName(),Avatar:c.default.image.avatar(),State:c.default.address.state(),StatusColor:[g.Colors.brandSuccess,g.Colors.brandWarning,g.Colors.brandDanger,g.Colors.gray][Math.floor(4*Math.random())]},Message:{Subject:c.default.company.catchPhrase(),Content:c.default.lorem.sentence()},Date:c.default.date.recent(),Attachment:!!Math.round(Math.random()),Active:t<=1};case 4:t++,e.next=1;break;case 7:case"end":return e.stop()}},e,this)})()),y=function(){return m.default.createElement(h.Panel,{className:"m-t-2",header:m.default.createElement(h.Row,null,m.default.createElement(h.Col,{lg:6},"Messages with "+c.default.name.firstName()+" "+c.default.name.lastName()),m.default.createElement(h.Col,{lg:6,className:"text-right"},m.default.createElement(h.ButtonGroup,{bsSize:"small"},m.default.createElement(h.Button,{active:!0},"Inbox"),m.default.createElement(h.Button,null,"Active")))),footer:m.default.createElement(h.Row,null,m.default.createElement(h.Col,{lg:6},m.default.createElement(h.ButtonGroup,{bsSize:"small"},m.default.createElement(h.Button,null,m.default.createElement("i",{className:"fa fa-angle-left"})),m.default.createElement(h.Button,null,m.default.createElement("i",{className:"fa fa-angle-right"})))),m.default.createElement(h.Col,{lg:6},m.default.createElement("p",{className:"m-y-0 text-right text-muted"},"Showing 1 to 10 of 57 entries")))},m.default.createElement(h.Table,{className:w.default.messagesTable,fill:!0},m.default.createElement("thead",null,m.default.createElement("tr",null,m.default.createElement("th",null),m.default.createElement("th",null,"From"),m.default.createElement("th",null,"Subject"),m.default.createElement("th",null),m.default.createElement("th",null,"Date"))),m.default.createElement("tbody",null,p.default.map(_,function(e){return m.default.createElement("tr",{key:e.id},m.default.createElement("td",null,e.Active&&m.default.createElement(h.OverlayTrigger,{placement:"top",overlay:m.default.createElement(h.Tooltip,{id:"new-message-tooltip"},"You Got New Message")},m.default.createElement("i",{className:"fa fa-fw fa-circle text-primary"}))),m.default.createElement("td",null,m.default.createElement(h.Media,null,m.default.createElement(h.Media.Left,{align:"middle"},m.default.createElement(h.AvatarImage,{src:e.User.Avatar,showStatus:!0,statusPlacement:"bottom",statusColor:e.User.StatusColor})),m.default.createElement(h.Media.Body,null,m.default.createElement("p",{className:"m-y-0 text-white"},e.User.Name),m.default.createElement("p",{className:"m-y-0"},e.User.State)))),m.default.createElement("td",null,m.default.createElement("p",{className:"m-y-0"},m.default.createElement("a",{href:"javascript:;",className:""+(e.Active?"text-white":"text-muted")},e.Message.Subject)),m.default.createElement("p",{className:"m-y-0"},e.Message.Content)),m.default.createElement("td",null,e.Attachment&&m.default.createElement("i",{className:"fa fa-fw fa-lg fa-paperclip"})),m.default.createElement("td",null,m.default.createElement("p",{className:"m-y-0 "+(e.Active&&"text-white")},(0,N.default)(e.Date).format("DD-MMM-YYYY")),m.default.createElement("p",{className:"m-y-0"},(0,N.default)(e.Date).format("h:mm A"))))}))))};t.default=y},1488:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=l(n),u=a(3),d=a(14),s=a(648),m=a(353),f=l(m),c=function(){return r.default.createElement("div",null,r.default.createElement(u.Row,{className:"m-t-3"},r.default.createElement(u.Col,{lg:3,md:6},r.default.createElement(u.Panel,{className:f.default.overviewBox,style:{backgroundColor:d.Colors.brandPrimary}},r.default.createElement("p",{className:f.default.header},r.default.createElement("span",null,"Views"),r.default.createElement(u.Label,{bsStyle:"custom",customColor:d.Colors.brandWhite,className:"pull-right",outline:!0},"Monthly")),r.default.createElement("p",{className:f.default.value},"6.200"),r.default.createElement("p",{className:f.default.subTitle},"Total Views"),r.default.createElement("p",{className:f.default.footer},r.default.createElement("span",null,"Last Month"),r.default.createElement("span",null,"34%"," ",r.default.createElement("i",{className:"fa fa-caret-down"}))))),r.default.createElement(u.Col,{lg:3,md:6},r.default.createElement(u.Panel,{className:f.default.overviewBox,style:{backgroundColor:d.Colors.brandSuccess}},r.default.createElement("p",{className:f.default.header},r.default.createElement("span",null,"Orders"),r.default.createElement(u.Label,{bsStyle:"custom",customColor:d.Colors.brandWhite,className:"pull-right",outline:!0},"Annual")),r.default.createElement("p",{className:f.default.value},"80.202"),r.default.createElement("p",{className:f.default.subTitle},"New Orders"),r.default.createElement("p",{className:f.default.footer},r.default.createElement("span",null,"Last Month"),r.default.createElement("span",null,"92%"," ",r.default.createElement("i",{className:"fa fa-caret-down"}))))),r.default.createElement(u.Col,{lg:3,md:6},r.default.createElement(u.Panel,{className:f.default.overviewBox,style:{backgroundColor:d.Colors.brandWarning}},r.default.createElement("p",{className:f.default.header},r.default.createElement("span",null,"Visits"),r.default.createElement(u.Label,{bsStyle:"custom",customColor:d.Colors.brandWhite,className:"pull-right",outline:!0},"Monthly")),r.default.createElement("p",{className:f.default.value},"767"),r.default.createElement("p",{className:f.default.subTitle},"Total Views"),r.default.createElement("p",{className:f.default.footer},r.default.createElement("span",null,"Last Month"),r.default.createElement("span",null,"34%"," ",r.default.createElement("i",{className:"fa fa-caret-down"}))))),r.default.createElement(u.Col,{lg:3,md:6},r.default.createElement(u.Panel,{className:f.default.overviewBox,style:{backgroundColor:d.Colors.brandDanger}},r.default.createElement("p",{className:f.default.header},r.default.createElement("span",null,"Downloads"),r.default.createElement(u.Label,{bsStyle:"custom",customColor:d.Colors.brandWhite,className:"pull-right",outline:!0},"Today")),r.default.createElement("p",{className:f.default.value},"72"),r.default.createElement("p",{className:f.default.subTitle},"Total Downloads"),r.default.createElement("p",{className:f.default.footer},r.default.createElement("span",null,"Last Month"),r.default.createElement("span",null,"20%"," ",r.default.createElement("i",{className:"fa fa-caret-up"})))))),r.default.createElement(u.Row,null,r.default.createElement(u.Col,{lg:12},r.default.createElement(u.Divider,{className:"m-t-2",textPosition:"center"},"Activity"),r.default.createElement(s.VerticalTimeline,null))))};t.default=c},1489:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Overview=t.Messages=t.DetailContact=t.Chat=void 0;var n=a(1485),r=l(n),u=a(1486),d=l(u),s=a(1487),m=l(s),f=a(1488),c=l(f);t.Chat=r.default,t.DetailContact=d.default,t.Messages=m.default,t.Overview=c.default},1490:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1484),r=l(n);t.default=r.default}});