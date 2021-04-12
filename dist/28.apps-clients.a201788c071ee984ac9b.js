webpackJsonp([28],{1472:function(e,a,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var n=t(11),s=r(n),m=t(4),d=r(m),l=t(10),o=r(l),i=t(6),f=r(i),c=t(5),u=r(c),k=t(2),p=r(k),N=t(19),h=(r(N),t(43)),b=r(h),E=t(12),v=r(E),y=t(3),A=t(35),C=r(A),S=t(20),F=t(37),g=r(F),L=t(18),P=t(14),T=t(3447),_=r(T),w=t(2361),I=r(w),M=t(68),z="user",O="company",x=function(e){return(0,g.default)(e)},j=function(e){switch(e){case"Online":return P.Colors.brandSuccess;case"Busy":return P.Colors.brandDanger;case"Away":return P.Colors.brandWarning;default:case"Offline":return P.Colors.grayLighter}},B=function(e){var a={Computers:"primary",Shoes:"success",Toys:"warning",Music:"danger",Grocery:"info",Jewelery:"default","Clothing:":"primary",Movies:"success",Industrial:"warning",Automotive:"danger"};return a[e]||"primary"},D=function(e){var a={Facebook:{icon:p.default.createElement("i",{className:"fa fa-facebook"}),color:P.Colors.brandWhite,background:"#3A5C96"},Apple:{icon:p.default.createElement("i",{className:"fa fa-apple"}),color:P.Colors.grayDark,background:P.Colors.brandWhite},Twitter:{icon:p.default.createElement("i",{className:"fa fa-twitter"}),color:P.Colors.brandWhite,background:"#5FABDC"},Amazon:{icon:p.default.createElement("i",{className:"fa fa-amazon"}),color:P.Colors.brandWhite,background:"#ffa500"},Foursquare:{icon:p.default.createElement("i",{className:"fa fa-foursquare"}),color:"#F84978",background:P.Colors.brandWhite},"Last.fm":{icon:p.default.createElement("i",{className:"fa fa-lastfm"}),color:P.Colors.brandWhite,background:"#E2132F"},LinkedIn:{icon:p.default.createElement("i",{className:"fa fa-linkedin"}),color:P.Colors.brandWhite,background:"#027AB4"},Medium:{icon:p.default.createElement("i",{className:"fa fa-medium"}),color:P.Colors.brandWhite,background:"#18AA6E"},Microsoft:{icon:p.default.createElement("i",{className:"fa fa-windows"}),color:"#10BFF2",background:P.Colors.brandWhite}};return a[e]||null},Z=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",t=D(e);return t?p.default.createElement(y.AvatarIcon,{backgroundColor:t.background,color:t.color,type:"rounded",size:a},t.icon):null},W=function(e){var a=e.clients,t=e.changeItem,r=e.selectedItem;return p.default.createElement(y.Table,{responsive:!0,hover:!0,className:I.default.peopleTable},p.default.createElement("thead",null,p.default.createElement("tr",null,p.default.createElement("th",null),p.default.createElement("th",null,"Star"),p.default.createElement("th",null,"Name"),p.default.createElement("th",null,"Email"),p.default.createElement("th",null,"Phone"),p.default.createElement("th",null,"Label"))),p.default.createElement("tbody",null,v.default.map(a,function(e){return p.default.createElement("tr",{key:e._id,className:e===r?"active":null},p.default.createElement("td",null,p.default.createElement(y.Checkbox,null)),p.default.createElement("td",null,p.default.createElement(y.FavoriteStar,{favorited:!!parseInt(e.Favoritted)})),p.default.createElement("td",null,p.default.createElement(y.Media,null,p.default.createElement(y.Media.Left,{align:"middle"},p.default.createElement(y.AvatarImage,{src:e.Avatar,showStatus:!0,statusPlacement:"bottom",statusColor:j(e.Status)})),p.default.createElement(y.Media.Body,null,p.default.createElement("a",{href:"javascript:void(0)",onClick:function(){return t(e,z)}},e.Name),p.default.createElement("p",{className:"m-y-0"},e.Position)))),p.default.createElement("td",null,e.Contact.Email),p.default.createElement("td",null,e.Contact.Phone),p.default.createElement("td",null,p.default.createElement(y.Label,{bsStyle:B(v.default.first(e.Labels)),outline:!0},v.default.first(e.Labels))))})))},K=function(e){var a=e.companies,t=e.selectedItem,r=e.changeItem;return p.default.createElement(y.Table,{responsive:!0,hover:!0,className:I.default.companiesTable},p.default.createElement("thead",null,p.default.createElement("tr",null,p.default.createElement("th",null),p.default.createElement("th",null,"Star"),p.default.createElement("th",null,"Company Name"),p.default.createElement("th",null,"Employees"),p.default.createElement("th",null,"Contact"),p.default.createElement("th",null,"Address"))),p.default.createElement("tbody",null,v.default.map(a,function(e){return p.default.createElement("tr",{key:e._id,className:e===t?"active":null},p.default.createElement("td",null,p.default.createElement(y.Checkbox,null)),p.default.createElement("td",null,p.default.createElement(y.FavoriteStar,{favorited:!!parseInt(e.Favoritted)})),p.default.createElement("td",null,p.default.createElement(y.Media,null,p.default.createElement(y.Media.Left,{align:"middle"},Z(e.Name)),p.default.createElement(y.Media.Body,{className:I.default.mediaFix},p.default.createElement("a",{href:"javascript:void(0)",onClick:function(){return r(e,O)}},e.Name),p.default.createElement("p",{className:"m-y-0"},e.Location)))),p.default.createElement("td",null,v.default.map(e.Employees,function(e){return p.default.createElement(y.AvatarImage,{size:"small",src:e.Avatar,className:"m-r-1",key:e._id})})),p.default.createElement("td",null,p.default.createElement("span",null,e.Contact.Phone),p.default.createElement("br",null),p.default.createElement("span",null,e.Contact.Email)),p.default.createElement("td",null,p.default.createElement("span",null,e.Address.Line1),p.default.createElement("br",null),p.default.createElement("span",null,e.Address.Line2)))})))},J=function(e){var a={status:e.Status,avatar:e.Avatar,name:e.Name,favortted:e.Favoritted,position:e.Position,shortProfile:e.ShortProfile,labels:e.Labels,contact:e.Contact,social:e.Social,address:e.Address};return p.default.createElement(y.Panel,{className:I.default.companiesPanel},p.default.createElement(M.UserDetails,a))},G=function(e){return p.default.createElement(y.Panel,{className:I.default.companiesPanel},p.default.createElement(y.Media,null,p.default.createElement(y.Media.Left,null,p.default.createElement("div",{className:"p-t-1"},Z(e.Name,"large"))),p.default.createElement(y.Media.Body,null,p.default.createElement("div",{className:I.default.companyPanelName},p.default.createElement("h4",null,e.Name),p.default.createElement(y.FavoriteStar,{favorited:!!parseInt(e.Favoritted),className:"m-l-1"})),p.default.createElement("p",null,e.Location),p.default.createElement("div",null,p.default.createElement(y.Button,{bsStyle:"primary"},p.default.createElement("i",{className:"fa fa-envelope m-r-1"}),"Contact")," ",p.default.createElement(y.Button,null,p.default.createElement("i",{className:"fa fa-pencil"}))))),p.default.createElement(y.Divider,null,"Description"),p.default.createElement("p",{className:"m-y-0"},e.ShortDesc),p.default.createElement(y.Divider,null,"Tags"),p.default.createElement("div",null,v.default.map(e.Tags,function(e,a){return p.default.createElement(y.Label,{outline:!0,bsStyle:"default",className:"m-r-1",key:a},e)})),p.default.createElement(y.Tabs,{defaultActiveKey:"tab-1",className:"m-t-3",id:"company-details-panel"},p.default.createElement(y.Tab,{eventKey:"tab-1",title:"Contact Details",className:I.default.detailsTab},p.default.createElement(y.Divider,{className:"m-t-1"},"Contact"),p.default.createElement("dl",{className:"dl-horizontal"},p.default.createElement("dt",null,"Phone"),p.default.createElement("dd",{className:"text-white"},e.Contact.Phone),p.default.createElement("dt",null,"Email"),p.default.createElement("dd",null,p.default.createElement("a",{href:"javascript:void(0)"},e.Contact.Email))),p.default.createElement(y.Divider,{className:"m-t-1"},"Address"),p.default.createElement("dl",{className:"dl-horizontal"},p.default.createElement("dt",null,"Address"),p.default.createElement("dd",{className:"text-white"},p.default.createElement("a",{href:"javascript:void(0)"},e.Address.Line1)),p.default.createElement("dt",null),p.default.createElement("dd",{className:"text-white"},p.default.createElement("a",{href:"javascript:void(0)"},e.Address.Line2)))),p.default.createElement(y.Tab,{eventKey:"tab-2",title:"Employees"},p.default.createElement(y.Nav,{className:"p-t-1"},v.default.map(e.Employees,function(e,a){return p.default.createElement(y.NavItem,{key:e._id},p.default.createElement(y.Media,null,p.default.createElement(y.Media.Left,null,p.default.createElement(y.AvatarImage,{src:e.Avatar,size:"small"})),p.default.createElement(y.Media.Body,null,p.default.createElement("h5",{className:"m-y-0"},e.Name),p.default.createElement("p",{className:"small text-gray-lighter m-b-0"},e.Location)),p.default.createElement(y.Media.Right,{align:"middle"},p.default.createElement(y.OverlayTrigger,{overlay:p.default.createElement(y.Tooltip,{id:"employee-status-"+a},e.Status),placement:"left"},p.default.createElement("i",{className:"fa fa-fw fa-circle",style:{color:j(e.Status)}})))))})))))},R=function(e){function a(e,t){(0,d.default)(this,a);var r=(0,f.default)(this,(a.__proto__||(0,s.default)(a)).call(this,e,t)),n=x(_.default);return r.state=(0,b.default)({},r.state,{data:n,selected:v.default.first(n.People),selectedType:z}),r}return(0,u.default)(a,e),(0,o.default)(a,[{key:"getLayoutOptions",value:function(){return{contentView:L.CONTENT_VIEW_STATIC}}},{key:"changeActiveItem",value:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:z;this.setState({selected:e,selectedType:a})}},{key:"render",value:function(){var e=this;return p.default.createElement(y.Row,null,p.default.createElement(y.Col,{lg:8},p.default.createElement(y.Tab.Container,{defaultActiveKey:"people",id:"main-container"},p.default.createElement("div",null,p.default.createElement("div",{className:I.default.tabsContainer},p.default.createElement(y.Nav,{bsStyle:"tabs"},p.default.createElement(y.NavItem,{eventKey:"people"},"People"),p.default.createElement(y.NavItem,{eventKey:"companies"},"Companies")),p.default.createElement("div",{className:I.default.tabSettings},p.default.createElement(y.OverlayTrigger,{overlay:p.default.createElement(y.Tooltip,{id:"tooltip-edit-hint"},"Edit"),placement:"top"},p.default.createElement(y.Button,null,p.default.createElement("i",{className:"fa fa-gear fa-fw"})))," ",p.default.createElement(y.Button,{bsStyle:"primary"},"Add Contact",p.default.createElement("i",{className:"fa fa-plus m-l-1"})))),p.default.createElement(y.Tab.Content,{animation:!0},p.default.createElement(y.Tab.Pane,{eventKey:"people"},(0,C.default)(W,{clients:this.state.data.People,changeItem:function(a){return e.changeActiveItem(a,z)},selectedItem:this.state.selected})),p.default.createElement(y.Tab.Pane,{eventKey:"companies"},(0,C.default)(K,{companies:this.state.data.Companies,changeItem:function(a){return e.changeActiveItem(a,O)},selectedItem:this.state.selected})))))),p.default.createElement(y.Col,{lg:4},this.state.selectedType===z?(0,C.default)(J,this.state.selected):(0,C.default)(G,this.state.selected)))}}]),a}(S.RoutedComponent);a.default=(0,S.connect)()(R)},1473:function(e,a,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var n=t(1472),s=r(n);a.default=s.default},2361:function(e,a){e.exports={tabsContainer:"Clients__tabsContainer___2oRn_",tabSettings:"Clients__tabSettings___2Gno1",companiesTable:"Clients__companiesTable___XWjgB",peopleTable:"Clients__peopleTable___FiF0C",companiesPanel:"Clients__companiesPanel___sFAsg",companyPanelName:"Clients__companyPanelName___3dmpP",userPanel:"Clients__userPanel___2iSsv",detailsTab:"Clients__detailsTab___3YXJw"}},3447:function(e,a){e.exports={People:[{Avatar:"{{fake: [image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Position:"{{fake:[name.jobTitle]}}",ShortProfile:"{{fake:[lorem.sentences]}}",Status:"Online",Contact:{Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Mobile:"{{fake:[phone.phoneNumberFormat]}}",Fax:"{{fake:[phone.phoneNumberFormat]}}",Skype:"{{fake:[internet.userName]}}"},Social:{LinkedIn:"{{fake:/[internet.userName]}}",Facebook:"{{fake:/[internet.userName]}}",Twitter:"{{fake:/[internet.userName]}}"},Address:{Address:"{{fake:[address.streetAddress]}}",City:"{{fake:[address.city]}}",State:"{{fake:[address.state]}}",ZipCode:"{{fake:[address.zipCode]}}"},Favoritted:"{{n:0:1}}",Labels:["Computers","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]},{Avatar:"{{fake: [image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Position:"{{fake:[name.jobTitle]}}",ShortProfile:"{{fake:[lorem.sentences]}}",Status:"Online",Contact:{Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Mobile:"{{fake:[phone.phoneNumberFormat]}}",Fax:"{{fake:[phone.phoneNumberFormat]}}",Skype:"{{fake:[internet.userName]}}"},Social:{LinkedIn:"{{fake:/[internet.userName]}}",Facebook:"{{fake:/[internet.userName]}}",Twitter:"{{fake:/[internet.userName]}}"},Address:{Address:"{{fake:[address.streetAddress]}}",City:"{{fake:[address.city]}}",State:"{{fake:[address.state]}}",ZipCode:"{{fake:[address.zipCode]}}"},Favoritted:"{{n:0:1}}",Labels:["Shoes","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]},{Avatar:"{{fake: [image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Position:"{{fake:[name.jobTitle]}}",ShortProfile:"{{fake:[lorem.sentences]}}",Status:"Offline",Contact:{Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Mobile:"{{fake:[phone.phoneNumberFormat]}}",Fax:"{{fake:[phone.phoneNumberFormat]}}",Skype:"{{fake:[internet.userName]}}"},Social:{LinkedIn:"{{fake:/[internet.userName]}}",Facebook:"{{fake:/[internet.userName]}}",Twitter:"{{fake:/[internet.userName]}}"},Address:{Address:"{{fake:[address.streetAddress]}}",City:"{{fake:[address.city]}}",State:"{{fake:[address.state]}}",ZipCode:"{{fake:[address.zipCode]}}"},Favoritted:"{{n:0:1}}",Labels:["Toys","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]},{Avatar:"{{fake: [image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Position:"{{fake:[name.jobTitle]}}",ShortProfile:"{{fake:[lorem.sentences]}}",Status:"Busy",Contact:{Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Mobile:"{{fake:[phone.phoneNumberFormat]}}",Fax:"{{fake:[phone.phoneNumberFormat]}}",Skype:"{{fake:[internet.userName]}}"},Social:{LinkedIn:"{{fake:/[internet.userName]}}",Facebook:"{{fake:/[internet.userName]}}",Twitter:"{{fake:/[internet.userName]}}"},Address:{Address:"{{fake:[address.streetAddress]}}",City:"{{fake:[address.city]}}",State:"{{fake:[address.state]}}",ZipCode:"{{fake:[address.zipCode]}}"},Favoritted:"{{n:0:1}}",Labels:["Computers","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]},{Avatar:"{{fake: [image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Position:"{{fake:[name.jobTitle]}}",ShortProfile:"{{fake:[lorem.sentences]}}",Status:"Away",Contact:{Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Mobile:"{{fake:[phone.phoneNumberFormat]}}",Fax:"{{fake:[phone.phoneNumberFormat]}}",Skype:"{{fake:[internet.userName]}}"},Social:{LinkedIn:"{{fake:/[internet.userName]}}",Facebook:"{{fake:/[internet.userName]}}",Twitter:"{{fake:/[internet.userName]}}"},Address:{Address:"{{fake:[address.streetAddress]}}",City:"{{fake:[address.city]}}",State:"{{fake:[address.state]}}",ZipCode:"{{fake:[address.zipCode]}}"},Favoritted:"{{n:0:1}}",Labels:["Music","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]},{Avatar:"{{fake: [image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Position:"{{fake:[name.jobTitle]}}",ShortProfile:"{{fake:[lorem.sentences]}}",Status:"Online",Contact:{Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Mobile:"{{fake:[phone.phoneNumberFormat]}}",Fax:"{{fake:[phone.phoneNumberFormat]}}",Skype:"{{fake:[internet.userName]}}"},Social:{LinkedIn:"{{fake:/[internet.userName]}}",Facebook:"{{fake:/[internet.userName]}}",Twitter:"{{fake:/[internet.userName]}}"},Address:{Address:"{{fake:[address.streetAddress]}}",City:"{{fake:[address.city]}}",State:"{{fake:[address.state]}}",ZipCode:"{{fake:[address.zipCode]}}"},Favoritted:"{{n:0:1}}",Labels:["Shoes","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]},{Avatar:"{{fake: [image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Position:"{{fake:[name.jobTitle]}}",ShortProfile:"{{fake:[lorem.sentences]}}",Status:"Offline",Contact:{Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Mobile:"{{fake:[phone.phoneNumberFormat]}}",Fax:"{{fake:[phone.phoneNumberFormat]}}",Skype:"{{fake:[internet.userName]}}"},Social:{LinkedIn:"{{fake:/[internet.userName]}}",Facebook:"{{fake:/[internet.userName]}}",Twitter:"{{fake:/[internet.userName]}}"},Address:{Address:"{{fake:[address.streetAddress]}}",City:"{{fake:[address.city]}}",State:"{{fake:[address.state]}}",ZipCode:"{{fake:[address.zipCode]}}"},Favoritted:"{{n:0:1}}",Labels:["Jewelery","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]},{Avatar:"{{fake: [image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Position:"{{fake:[name.jobTitle]}}",ShortProfile:"{{fake:[lorem.sentences]}}",Status:"Online",Contact:{Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Mobile:"{{fake:[phone.phoneNumberFormat]}}",Fax:"{{fake:[phone.phoneNumberFormat]}}",Skype:"{{fake:[internet.userName]}}"},Social:{LinkedIn:"{{fake:/[internet.userName]}}",Facebook:"{{fake:/[internet.userName]}}",Twitter:"{{fake:/[internet.userName]}}"},Address:{Address:"{{fake:[address.streetAddress]}}",City:"{{fake:[address.city]}}",State:"{{fake:[address.state]}}",ZipCode:"{{fake:[address.zipCode]}}"},Favoritted:"{{n:0:1}}",Labels:["Games","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]},{Avatar:"{{fake: [image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Position:"{{fake:[name.jobTitle]}}",ShortProfile:"{{fake:[lorem.sentences]}}",Status:"Away",Contact:{Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Mobile:"{{fake:[phone.phoneNumberFormat]}}",Fax:"{{fake:[phone.phoneNumberFormat]}}",Skype:"{{fake:[internet.userName]}}"},Social:{LinkedIn:"{{fake:/[internet.userName]}}",Facebook:"{{fake:/[internet.userName]}}",Twitter:"{{fake:/[internet.userName]}}"},Address:{Address:"{{fake:[address.streetAddress]}}",City:"{{fake:[address.city]}}",State:"{{fake:[address.state]}}",ZipCode:"{{fake:[address.zipCode]}}"},Favoritted:"{{n:0:1}}",Labels:["Jewelery","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]},{Avatar:"{{fake: [image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Position:"{{fake:[name.jobTitle]}}",ShortProfile:"{{fake:[lorem.sentences]}}",Status:"Busy",Contact:{Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Mobile:"{{fake:[phone.phoneNumberFormat]}}",Fax:"{{fake:[phone.phoneNumberFormat]}}",Skype:"{{fake:[internet.userName]}}"},Social:{LinkedIn:"{{fake:/[internet.userName]}}",Facebook:"{{fake:/[internet.userName]}}",Twitter:"{{fake:/[internet.userName]}}"},Address:{Address:"{{fake:[address.streetAddress]}}",City:"{{fake:[address.city]}}",State:"{{fake:[address.state]}}",ZipCode:"{{fake:[address.zipCode]}}"},Favoritted:"{{n:0:1}}",Labels:["Clothing","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]},{Avatar:"{{fake: [image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Position:"{{fake:[name.jobTitle]}}",ShortProfile:"{{fake:[lorem.sentences]}}",Status:"Online",Contact:{Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Mobile:"{{fake:[phone.phoneNumberFormat]}}",Fax:"{{fake:[phone.phoneNumberFormat]}}",Skype:"{{fake:[internet.userName]}}"},Social:{LinkedIn:"{{fake:/[internet.userName]}}",Facebook:"{{fake:/[internet.userName]}}",Twitter:"{{fake:/[internet.userName]}}"},Address:{Address:"{{fake:[address.streetAddress]}}",City:"{{fake:[address.city]}}",State:"{{fake:[address.state]}}",ZipCode:"{{fake:[address.zipCode]}}"},Favoritted:"{{n:0:1}}",Labels:["Movies","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]},{Avatar:"{{fake: [image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Position:"{{fake:[name.jobTitle]}}",ShortProfile:"{{fake:[lorem.sentences]}}",Status:"Offline",Contact:{Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Mobile:"{{fake:[phone.phoneNumberFormat]}}",Fax:"{{fake:[phone.phoneNumberFormat]}}",Skype:"{{fake:[internet.userName]}}"},Social:{LinkedIn:"{{fake:/[internet.userName]}}",Facebook:"{{fake:/[internet.userName]}}",Twitter:"{{fake:/[internet.userName]}}"},Address:{Address:"{{fake:[address.streetAddress]}}",City:"{{fake:[address.city]}}",State:"{{fake:[address.state]}}",ZipCode:"{{fake:[address.zipCode]}}"},Favoritted:"{{n:0:1}}",Labels:["Industrial","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]},{Avatar:"{{fake: [image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Position:"{{fake:[name.jobTitle]}}",ShortProfile:"{{fake:[lorem.sentences]}}",Status:"Online",Contact:{Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Mobile:"{{fake:[phone.phoneNumberFormat]}}",Fax:"{{fake:[phone.phoneNumberFormat]}}",Skype:"{{fake:[internet.userName]}}"},Social:{LinkedIn:"{{fake:/[internet.userName]}}",Facebook:"{{fake:/[internet.userName]}}",Twitter:"{{fake:/[internet.userName]}}"},Address:{Address:"{{fake:[address.streetAddress]}}",City:"{{fake:[address.city]}}",State:"{{fake:[address.state]}}",ZipCode:"{{fake:[address.zipCode]}}"},Favoritted:"{{n:0:1}}",Labels:["Automotive","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]},{Avatar:"{{fake: [image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Position:"{{fake:[name.jobTitle]}}",ShortProfile:"{{fake:[lorem.sentences]}}",Status:"Online",Contact:{Email:"{{fake:[internet.email]}}",Phone:"{{fake:[phone.phoneNumberFormat]}}",Mobile:"{{fake:[phone.phoneNumberFormat]}}",Fax:"{{fake:[phone.phoneNumberFormat]}}",Skype:"{{fake:[internet.userName]}}"},Social:{LinkedIn:"{{fake:/[internet.userName]}}",Facebook:"{{fake:/[internet.userName]}}",Twitter:"{{fake:/[internet.userName]}}"},Address:{Address:"{{fake:[address.streetAddress]}}",City:"{{fake:[address.city]}}",State:"{{fake:[address.state]}}",ZipCode:"{{fake:[address.zipCode]}}"},Favoritted:"{{n:0:1}}",Labels:["Grocery","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]}],Companies:[{Name:"Facebook",ShortDesc:"{{fake:[lorem.sentences]}}",Favoritted:"{n:0:1}",Location:"{{fake:[address.country]}}",Employees:[{Avatar:"{{fake:[image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Location:"{{fake: [address.state], [address.stateAbbr]}}",Status:"Online"},{Avatar:"{{fake:[image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Location:"{{fake: [address.state], [address.stateAbbr]}}",Status:"Busy"}],Contact:{Phone:"{{fake:[phone.phoneNumberFormat]}}",Email:"{{fake:[internet.email]}}"},Address:{Line1:"{{fake:[address.streetAddress]}}",Line2:"{{fake:[address.city] [address.state], [address.zipCode]}}"},Tags:["{{fake:[commerce.department]}}","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]},{Name:"Apple",ShortDesc:"{{fake:[lorem.sentences]}}",Favoritted:"{n:0:1}",Location:"{{fake:[address.country]}}",Employees:[{Avatar:"{{fake:[image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Location:"{{fake: [address.state], [address.stateAbbr]}}",Status:"Offline"},{Avatar:"{{fake:[image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Location:"{{fake: [address.state], [address.stateAbbr]}}",Status:"Busy"}],Contact:{Phone:"{{fake:[phone.phoneNumberFormat]}}",Email:"{{fake:[internet.email]}}"},Address:{Line1:"{{fake:[address.streetAddress]}}",Line2:"{{fake:[address.city] [address.state], [address.zipCode]}}"},Tags:["{{fake:[commerce.department]}}","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]},{Name:"Twitter",ShortDesc:"{{fake:[lorem.sentences]}}",Favoritted:"{n:0:1}",Location:"{{fake:[address.country]}}",Employees:[{Avatar:"{{fake:[image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Location:"{{fake: [address.state], [address.stateAbbr]}}",Status:"Online"},{Avatar:"{{fake:[image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Location:"{{fake: [address.state], [address.stateAbbr]}}",Status:"Online"}],Contact:{Phone:"{{fake:[phone.phoneNumberFormat]}}",Email:"{{fake:[internet.email]}}"},Address:{Line1:"{{fake:[address.streetAddress]}}",Line2:"{{fake:[address.city] [address.state], [address.zipCode]}}"},Tags:["{{fake:[commerce.department]}}","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]},{Name:"Amazon",ShortDesc:"{{fake:[lorem.sentences]}}",Favoritted:"{n:0:1}",Location:"{{fake:[address.country]}}",Employees:[{Avatar:"{{fake:[image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Location:"{{fake: [address.state], [address.stateAbbr]}}",Status:"Away"},{Avatar:"{{fake:[image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Location:"{{fake: [address.state], [address.stateAbbr]}}",Status:"Busy"}],Contact:{Phone:"{{fake:[phone.phoneNumberFormat]}}",Email:"{{fake:[internet.email]}}"},Address:{Line1:"{{fake:[address.streetAddress]}}",Line2:"{{fake:[address.city] [address.state], [address.zipCode]}}"},Tags:["{{fake:[commerce.department]}}","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]},{Name:"Foursquare",ShortDesc:"{{fake:[lorem.sentences]}}",Favoritted:"{n:0:1}",Location:"{{fake:[address.country]}}",Employees:[{Avatar:"{{fake:[image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Location:"{{fake: [address.state], [address.stateAbbr]}}",Status:"Offline"},{Avatar:"{{fake:[image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Location:"{{fake: [address.state], [address.stateAbbr]}}",Status:"Offline"}],Contact:{Phone:"{{fake:[phone.phoneNumberFormat]}}",Email:"{{fake:[internet.email]}}"},Address:{Line1:"{{fake:[address.streetAddress]}}",Line2:"{{fake:[address.city] [address.state], [address.zipCode]}}"},Tags:["{{fake:[commerce.department]}}","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]},{Name:"Last.fm",ShortDesc:"{{fake:[lorem.sentences]}}",Favoritted:"{n:0:1}",Location:"{{fake:[address.country]}}",Employees:[{Avatar:"{{fake:[image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Location:"{{fake: [address.state], [address.stateAbbr]}}",Status:"Busy"},{Avatar:"{{fake:[image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Location:"{{fake: [address.state], [address.stateAbbr]}}",Status:"Online"}],Contact:{Phone:"{{fake:[phone.phoneNumberFormat]}}",Email:"{{fake:[internet.email]}}"},Address:{Line1:"{{fake:[address.streetAddress]}}",Line2:"{{fake:[address.city] [address.state], [address.zipCode]}}"},Tags:["{{fake:[commerce.department]}}","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]},{Name:"LinkedIn",ShortDesc:"{{fake:[lorem.sentences]}}",Favoritted:"{n:0:1}",Location:"{{fake:[address.country]}}",Employees:[{Avatar:"{{fake:[image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Location:"{{fake: [address.state], [address.stateAbbr]}}",Status:"Online"},{Avatar:"{{fake:[image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Location:"{{fake: [address.state], [address.stateAbbr]}}",Status:"Online"}],Contact:{Phone:"{{fake:[phone.phoneNumberFormat]}}",Email:"{{fake:[internet.email]}}"},Address:{Line1:"{{fake:[address.streetAddress]}}",Line2:"{{fake:[address.city] [address.state], [address.zipCode]}}"},Tags:["{{fake:[commerce.department]}}","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]},{Name:"Medium",ShortDesc:"{{fake:[lorem.sentences]}}",Favoritted:"{n:0:1}",Location:"{{fake:[address.country]}}",Employees:[{Avatar:"{{fake:[image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Location:"{{fake: [address.state], [address.stateAbbr]}}",Status:"Away"},{Avatar:"{{fake:[image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Location:"{{fake: [address.state], [address.stateAbbr]}}",Status:"Away"}],Contact:{Phone:"{{fake:[phone.phoneNumberFormat]}}",Email:"{{fake:[internet.email]}}"},Address:{Line1:"{{fake:[address.streetAddress]}}",Line2:"{{fake:[address.city] [address.state], [address.zipCode]}}"},Tags:["{{fake:[commerce.department]}}","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]},{Name:"Microsoft",ShortDesc:"{{fake:[lorem.sentences]}}",Favoritted:"{n:0:1}",Location:"{{fake:[address.country]}}",Employees:[{Avatar:"{{fake:[image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Location:"{{fake: [address.state], [address.stateAbbr]}}",Status:"Busy"},{Avatar:"{{fake:[image.avatar]}}",Name:"{{fake:[name.firstName] [name.lastName]}}",Location:"{{fake: [address.state], [address.stateAbbr]}}",Status:"Busy"}],Contact:{Phone:"{{fake:[phone.phoneNumberFormat]}}",Email:"{{fake:[internet.email]}}"},Address:{Line1:"{{fake:[address.streetAddress]}}",Line2:"{{fake:[address.city] [address.state], [address.zipCode]}}"},Tags:["{{fake:[commerce.department]}}","{{fake:[commerce.department]}}","{{fake:[commerce.department]}}"]}]}}});