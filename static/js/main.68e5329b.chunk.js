(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),i=a.n(o),l=(a(89),a(90),a(81)),c=a(8),s=a(34),m=a(112),p=Object(s.a)({},m.a,{colors:Object(s.a)({},m.a.colors,{reactDark:"#20232a",trans:{gray:"#A0AEC020",blue:{300:"#63B3ED60",400:"#4299E160",500:"#3182CE60",600:"#2A69AC60",700:"#1E4E8C60"}},bgCover:"#1A202CBB",bgCover2:"#1A202CDD"}),fonts:{body:"system-ui, sans-serif"},fontWeights:{light:350},lineHeights:{normal:"normal",none:"1",shorter:"1.25",short:"1.375",base:"1.5",tall:"1.625",taller:"2"},letterSpacings:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"}}),d=a(24),h=a(4),u=a(113),g=a(43),f=a(44),x=a(80),w=a(82),E=a(105),b=a(47),y=a(111),v=a(110),S=function(e){Object(w.a)(a,e);var t=Object(x.a)(a);function a(){var e;return Object(g.a)(this,a),(e=t.call(this)).state={compact:!1},e.buttonsOrigSize=0,e.titleSize=0,e.buttonsRef=null,e.setButtonsRef=function(t){null!=t&&(e.buttonsRef=t,e.buttonsOrigSize=t.offsetWidth)},e.titleRef=null,e.setTitleRef=function(t){null!=t&&(e.titleRef=t,e.titleSize=t.offsetWidth)},e.handleResize=function(){window.innerWidth<e.buttonsOrigSize+e.titleSize+80&&!e.state.compact?e.setState({compact:!0}):window.innerWidth>e.buttonsOrigSize+e.titleSize+80&&e.state.compact&&e.setState({compact:!1})},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize),this.handleResize()}},{key:"render",value:function(){var e=this.props,t=e.scrollTo,a=e.names;return r.a.createElement(E.a,null,r.a.createElement(E.a,{h:"64px"}),r.a.createElement(E.a,{bg:"reactDark",w:"100%",color:"white",py:"0",justifyContent:"space-between",px:"1.5rem",h:"64px",alignItems:"center",position:"fixed",zIndex:100},r.a.createElement(E.a,{ref:this.setTitleRef},r.a.createElement(b.a,{fontSize:"xl",letterSpacing:"wide",fontWeight:"light"},"Rawin ("),r.a.createElement(b.a,{fontSize:"xl",letterSpacing:"wider",fontWeight:"bold",color:"blue.400"},"Robin"),r.a.createElement(b.a,{fontSize:"xl",letterSpacing:"wide",fontWeight:"light"},") Deeboonchai")),this.state.compact?r.a.createElement(v.d,null,r.a.createElement(v.a,{as:y.a,rightIcon:"chevron-down",variant:"ghost",color:"white",_hover:{bg:"#FFFFFF10"},rounded:"1px",h:"100%",_active:{transform:"scale(0.9)"},_focus:{boxShadow:"0 0 0 0"}}),r.a.createElement(v.c,{bg:"reactDark",color:"white",borderColor:"#00000000"},a.map((function(e){return r.a.createElement(v.b,{_focus:{bg:"#FFFFFF10"},onClick:function(){return t(e)}},e)})))):r.a.createElement(E.a,{h:"100%",ref:this.setButtonsRef},a.map((function(e){return r.a.createElement(y.a,{variant:"ghost",color:"white",_hover:{bg:"#FFFFFF10"},rounded:"1px",h:"100%",_active:{transform:"scale(0.9)"},_focus:{boxShadow:"0 0 0 0"},onClick:function(){return t(e)}},e)})))))}}]),a}(n.Component),C=a(106),k=a(13),A=a(55),R=a.n(A);var W=function(e){var t=e.text;return r.a.createElement(b.a,{w:"100%",textAlign:"center",fontSize:"5xl",letterSpacing:"wider",fontWeight:"light"},t)};var z=function(){return r.a.createElement(E.a,{w:"100%",h:window.innerHeight-64,bgImage:"url("+R.a+")",bgRepeat:"no-repeat",bgSize:"cover"},r.a.createElement(E.a,{w:"100%",pb:"3rem",pt:"1rem",h:"100%",direction:"column",alignItems:"center",justifyContent:"center",bg:"bgCover"},r.a.createElement(E.a,{mx:"10px",direction:"column",justifyContent:"center",h:"100%"},r.a.createElement(W,{text:"Welcome!"}),r.a.createElement(b.a,{fontSize:"xl",lineHeight:"taller",letterSpacing:"widest",fontWeight:"light",textAlign:"center",wrap:"wrap"},"This is the portfolio of ",r.a.createElement("span",{style:{color:"#63B3ED"}},"Robin D.")),r.a.createElement(E.a,{justifyContent:"center",alignItems:"center",pt:"30px"},r.a.createElement(C.a,{isExternal:!0,href:"https://www.facebook.com/comtalyst"},r.a.createElement(h.a,{as:k.b,size:"30px",mx:"10px"})),r.a.createElement(C.a,{isExternal:!0,href:"https://github.com/comtalyst"},r.a.createElement(h.a,{as:k.c,size:"30px",mx:"10px"})),r.a.createElement(C.a,{isExternal:!0,href:"https://www.instagram.com/pun_rawin"},r.a.createElement(h.a,{as:k.d,size:"30px",mx:"10px"})),r.a.createElement(C.a,{isExternal:!0,href:"https://www.linkedin.com/in/rawin-deeboonchai-41619a197/"},r.a.createElement(h.a,{as:k.e,size:"30px",mx:"10px"})))),r.a.createElement(b.a,{mx:"10px",lineHeight:"taller",letterSpacing:"widest",fontWeight:"light",textAlign:"center",color:"gray.400",wrap:"wrap"},"Scroll down or use the navigation bar above to begin")))},j=a(107),P=a(108),I=a(56),F=a.n(I);var T=function(){return r.a.createElement(E.a,{w:"100%",pb:"3rem",pt:"1rem",direction:"column"},r.a.createElement(W,{text:"Hello There!"}),r.a.createElement(j.a,{templateColumns:{base:"1fr",md:"minmax(0px, 150px) minmax(300px, auto) minmax(300px, auto) minmax(0px, 150px)"},columnGap:"3.5rem"},r.a.createElement(h.a,null),r.a.createElement(E.a,{justifyContent:"center",pt:"1.5rem",mx:"20px"},r.a.createElement(P.a,{src:F.a,alt:"Portrait",size:"500px",objectFit:"cover",borderRadius:"5px",shadow:"5px 5px #00000030"})),r.a.createElement(E.a,{justifyContent:"center",marginTop:"-0.5rem",pt:"1.5rem",mx:"20px"},r.a.createElement(E.a,{maxW:"500px",wrap:"wrap",direction:"column"},r.a.createElement(b.a,{lineHeight:"taller",letterSpacing:"wider",fontWeight:"light",flexWrap:"wrap"},"My name is Rawin Deeboonchai, nicknamed Pun. But I usually let people call me ",r.a.createElement("span",{style:{color:"#63B3ED",fontWeight:"bold"}},"Robin")," for the sake of simplicity.",r.a.createElement("br",null)),r.a.createElement(b.a,{lineHeight:"taller",letterSpacing:"wider",fontWeight:"light",flexWrap:"wrap",mt:"1rem"},r.a.createElement("span",{style:{color:"#2A69AC",fontWeight:"bold"}},"comtalyst"),' is my digital codename, originate from the word "computing" and "catalyst."'),r.a.createElement(b.a,{lineHeight:"taller",letterSpacing:"wider",fontWeight:"light",flexWrap:"wrap",mt:"1rem"},"Bangkok, Thailand is my hometown. However, I am currently pursuing my undergraduate degree in the United States at the University of Wisconsin-Madison as a Sophomore."),r.a.createElement(b.a,{lineHeight:"taller",letterSpacing:"wider",fontWeight:"light",flexWrap:"wrap",mt:"1rem"},"My biggest passion and dreams always are around computing and digital technologies since I was very young. That prompts me to pursue my career in Computer Science and Data Science since years ago and from now on. Current specific interests of mine in those fields are Artificial Intelligence, Machine Learning, and Web Development."))),r.a.createElement(h.a,null)))},H=a(32),M=a(109),D=a(58),O=a.n(D),L=a(59),_=a.n(L),B=a(60),N=a.n(B),G=a(61),J=a.n(G);var U=function(){var e=[{name:"University of Wisconsin-Madison",color:"red.100",desc:"B.S. in Computer Science and Data Science",year:"2019 - 2023",courses:["Calculus - Functions of Several Variables","Data Programming I","Elementary Matrix and Linear Algebra"],logo:O.a},{name:"George School, PA",color:"green.100",desc:"Diploma with Honor Roll and Head of School\u2019s List (Postgrad)",year:"2018 - 2019",courses:["Independent Study in Advanced Programming"],logo:_.a},{name:"Suankularb Wittayalai School, Bangkok, Thailand",color:"pink.100",desc:"Science-Mathematics Program",year:"2012 - 2018",logo:N.a},{name:"Self-Study",color:"blue.100",desc:"The courses below are completed without guidance from formal institutions",year:"",courses:["Deep Learning Specialization, by deeplearning.ai via Coursera","Machine Learning, by Stanford University Online via Coursera"],logo:"n/a"}],t=r.a.useState(Array(e.length).fill(!1)),a=Object(H.a)(t,2),n=a[0],o=a[1];return r.a.createElement(E.a,{w:"100%",bgImage:"url("+J.a+")",bgRepeat:"no-repeat",bgSize:"cover"},r.a.createElement(E.a,{w:"100%",pb:"3rem",pt:"1rem",direction:"column",bg:"bgCover2"},r.a.createElement(W,{text:"Education"}),e.map((function(e,t){var a=e.name,i=e.color,l=e.desc,c=e.year,s=e.courses,m=e.logo;return r.a.createElement(j.a,{templateColumns:{base:"1fr",md:"auto auto"},columnGap:"0px",pt:"1.5rem"},r.a.createElement(E.a,{mx:"20px"},"n/a"===m?r.a.createElement(h.a,{h:"100px",w:"100px",mr:"10px"}):r.a.createElement(P.a,{src:m,alt:"logo",size:"100px",objectFit:"contain",mr:"10px"}),r.a.createElement(E.a,{direction:"column"},r.a.createElement(b.a,{fontSize:"xl",lineHeight:"tall",letterSpacing:"wider",fontWeight:"light",color:i},a),r.a.createElement(b.a,{fontSize:"xl",lineHeight:"tall",letterSpacing:"wider",fontWeight:"light"},l),void 0!==s&&null!==s?r.a.createElement(h.a,null,r.a.createElement(y.a,{variant:"ghost",color:"white",_hover:{bg:"#FFFFFF10"},rounded:"3px",_active:{transform:"scale(0.9)"},_focus:{boxShadow:"0 0 0 0"},rightIcon:"chevron-down",w:"fit-content",pl:"0",onClick:function(){return function(e){var t=Array.from(n);t[e]=!t[e],o(t)}(t)}},"Highlighted Courses"),r.a.createElement(M.a,{mt:1,isOpen:n[t]},s.map((function(e){return r.a.createElement(b.a,{fontSize:"l",lineHeight:"tall",letterSpacing:"wider",fontWeight:"light"},r.a.createElement("li",null,e))})))):r.a.createElement(h.a,{h:"0",w:"0"}))),r.a.createElement(b.a,{fontSize:"xl",lineHeight:"taller",letterSpacing:"wider",fontWeight:"light",mx:"20px",textAlign:"right"},c))}))))};var Q=function(){var e=function(e){return r.a.createElement(E.a,{pt:"0.5rem",justifyContent:"center",flexWrap:"wrap"},function(e){return e.map((function(e){var t=function(e){var t="";switch(e){case 1:t="blue.700";break;case 2:t="blue.600";break;case 3:t="blue.500";break;case 4:t="blue.400";break;case 5:t="blue.300";break;default:t="gray.500"}return t}(e.level),a=t;return r.a.createElement(h.a,{borderWidth:"2px",px:"5px",py:"1px",borderRadius:"5px",m:"2px",borderColor:t,minWidth:"fit-content",bg:a},r.a.createElement(b.a,{fontSize:"xl",lineHeight:"taller",letterSpacing:"wider",fontWeight:"light"},e.name))}))}(e))},t=function(e){return r.a.createElement(b.a,{fontSize:"3xl",letterSpacing:"wider",fontWeight:"light",textAlign:"center",pt:"1rem"},e)};return r.a.createElement(E.a,{w:"100%",pb:"3rem",pt:"1rem",direction:"column"},r.a.createElement(W,{text:"Tech Skills"}),r.a.createElement(E.a,{direction:"column",px:"20px"},t("Languages"),e([{name:"C/C++",level:4},{name:"Java",level:4},{name:"Python",level:4},{name:"JavaScript",level:3},{name:"SQL",level:2},{name:"C#",level:2},{name:"HTML5 & CSS3",level:2}]),t("Frameworks/Libraries"),e([{name:"tf.keras",level:3},{name:"Pandas",level:3},{name:"React",level:3},{name:"React-Redux",level:3},{name:"Express.js & Node.js",level:2},{name:"Tensorflow",level:2},{name:"Unity 2D",level:2}]),t("Platforms"),e([{name:"Arduino",level:4},{name:"GitHub",level:3},{name:"Linux",level:3},{name:"Android Studio",level:2},{name:"PostgreSQL",level:2}]),t("Specialties"),e([{name:"Data Structure & Algorithms",level:4},{name:"Deep & Machine Learning",level:3},{name:"Object-Oriented Programming",level:3},{name:"Web Development",level:3},{name:"Game Development",level:2}])))},q=a(63),K=a.n(q),V=a(64),$=a.n(V),X=a(65),Y=a.n(X),Z=a(66),ee=a.n(Z),te=a(67),ae=a.n(te),ne=a(68),re=a.n(ne),oe=a(69),ie=a.n(oe),le=a(70),ce=a.n(le),se=a(71),me=a.n(se),pe=a(72),de=a.n(pe),he=a(54),ue=a(48);var ge=function(e){var t=e.rows,a=e.collapseTitle,n=function(e){return r.a.createElement(E.a,{justifyContent:"left",flexWrap:"wrap"},function(e){return e.map((function(e){return r.a.createElement(h.a,{borderWidth:"2px",px:"5px",py:"1px",borderRadius:"5px",m:"2px",borderColor:"gray.500",minWidth:"fit-content",bg:"gray.500"},r.a.createElement(b.a,{fontSize:"l",lineHeight:"tall",letterSpacing:"wider",fontWeight:"light"},e))}))}(e))},o=r.a.useState(Array(t.length).fill(!1)),i=Object(H.a)(o,2),l=i[0],c=i[1];return t.map((function(e,t){var o=e.name,i=e.color,s=e.desc,m=e.year,p=e.keywords,d=e.link,u=e.source,g=e.extras;return r.a.createElement(h.a,null,0!==t?r.a.createElement(he.a,{border:"2px solid",borderColor:"gray.500",ml:"30px",mr:"20px",my:"1.5rem"}):r.a.createElement(h.a,{h:"0",w:"0",my:"1.5rem"}),r.a.createElement(E.a,{direction:"column"},r.a.createElement(j.a,{templateColumns:{base:"1fr",md:"auto auto"},columnGap:"0px"},r.a.createElement(E.a,{mx:"20px"},r.a.createElement(E.a,{direction:"column",ml:"10px"},r.a.createElement(b.a,{fontSize:"xl",lineHeight:"tall",letterSpacing:"wider",fontWeight:"light",color:null!==i&&void 0!==i?i:"blue.100"},o),null!==s&&void 0!==s?r.a.createElement(b.a,{fontSize:"l",lineHeight:"tall",letterSpacing:"wider",fontWeight:"light",maxW:"1000px"},s):r.a.createElement(h.a,{h:"0",w:"0"}),r.a.createElement(E.a,{alignItems:"center"},null!==a&&void 0!==a&&void 0!==p&&null!==p?r.a.createElement(y.a,{variant:"ghost",color:"gray.400",_hover:{bg:"#FFFFFF10"},rounded:"3px",_active:{transform:"scale(0.9)"},_focus:{boxShadow:"0 0 0 0"},rightIcon:"chevron-down",w:"fit-content",pl:"0",pr:"2",onClick:function(){return function(e){var t=Array.from(l);t[e]=!t[e],c(t)}(t)}},a):r.a.createElement(h.a,{h:"0",w:"0"}),null===d||void 0===d||"n/a"===d?r.a.createElement(h.a,{h:"0",w:"0"}):r.a.createElement(C.a,{href:d,isExternal:!0,mx:"5px",color:"blue.300"},"Link ",r.a.createElement(ue.a,{name:"external-link",mx:"1px"})),null===u||void 0===u||"n/a"===u?r.a.createElement(h.a,{h:"0",w:"0"}):r.a.createElement(C.a,{href:u,isExternal:!0,mx:"5px",color:"blue.300"},"Source ",r.a.createElement(ue.a,{name:"external-link",mx:"1px"}))),r.a.createElement(M.a,{mt:1,isOpen:l[t]},void 0!==p&&null!==p?n(p):r.a.createElement(h.a,{h:"0",w:"0"})))),null!==m?r.a.createElement(b.a,{fontSize:"xl",lineHeight:"taller",letterSpacing:"wider",fontWeight:"light",mx:"20px",textAlign:"right"},m):r.a.createElement(h.a,{h:"0",w:"0"})),null!==g&&void 0!==g?g:r.a.createElement(h.a,{h:"0",w:"0"})))}))};var fe=function(){var e=[{name:"Personal Portfolio Website",desc:"The website you are currently viewing!",year:"Jul 2020",keywords:["Front-End Development","React","JavaScript","HTML5 & CSS3","Chakra UI"],link:"https://comtalyst.com",source:"https://github.com/comtalyst/personal-site"},{name:"Shootdown",desc:"A mobile arcade/abstract tap-to-shoot game; developed with educational objectives.",year:"Jun 2019 - Jan 2020",keywords:["Game Development","Object-Oriented Programming","Unity 2D","C#","Google Play Services"],link:"https://play.google.com/store/apps/details?id=com.comtalyst.shootdown",extras:r.a.createElement(E.a,{justifyContent:"center",mt:"1rem",wrap:"wrap"},r.a.createElement(P.a,{src:K.a,alt:"screenshot",h:"250px",m:"10px",borderRadius:"5px",shadow:"4px 4px #00000020"}),r.a.createElement(P.a,{src:$.a,alt:"screenshot",h:"250px",m:"10px",borderRadius:"5px",shadow:"4px 4px #00000020"}),r.a.createElement(P.a,{src:Y.a,alt:"screenshot",h:"250px",m:"10px",borderRadius:"5px",shadow:"4px 4px #00000020"}),r.a.createElement(P.a,{src:ee.a,alt:"screenshot",h:"250px",m:"10px",borderRadius:"5px",shadow:"4px 4px #00000020"}),r.a.createElement(P.a,{src:ae.a,alt:"screenshot",h:"250px",m:"10px",borderRadius:"5px",shadow:"4px 4px #00000020"}))},{name:"Luminateer",desc:"An Arduino-powered software that makes PattonRobotics OneBot follows the tricolor LED signal. A project for the Intensive Robotics course at George School.",year:"Mar 2019 - May 2019",keywords:["Robotics & Physical Computing","Arduino","C"],source:"https://github.com/comtalyst/Luminateer",extras:r.a.createElement(E.a,{justifyContent:"center",mt:"1rem",wrap:"wrap"},r.a.createElement(P.a,{src:re.a,alt:"screenshot",h:"200px",m:"10px",borderRadius:"5px",shadow:"4px 4px #00000020"}),r.a.createElement(P.a,{src:ie.a,alt:"screenshot",h:"200px",m:"10px",borderRadius:"5px",shadow:"4px 4px #00000020"}))},{name:"Random Forestry",desc:'A project for the Independent Study in Advanced Programming course at George School. The technical objective of the project is to find and select "useful" features from the mass amount of predictable training data using Random Forest.',year:"Mar 2019 - May 2019",keywords:["Machine Learning","Random Forest","scikit-learn","Python"],source:"https://github.com/comtalyst/Random_Forestry"},{name:"Firex",desc:"A firefighting robot created for Trinity College International Firefighting Robot Contest 2019 by 4 students from George School under the guidance of robotics teacher Chris: Robin (Maze traversal / pathfinding), Sam (Hardware and Fire extinguishing), Andrew (Hardware and Fire detection) and Ian (Hardware and Microphone).",year:"Mar 2019 - Apr 2019",keywords:["Robotics & Physical Computing","Arduino","C"],source:"https://github.com/comtalyst/Firex",extras:r.a.createElement(E.a,{justifyContent:"center",mt:"1rem",wrap:"wrap"},r.a.createElement(P.a,{src:ce.a,alt:"screenshot",h:"200px",m:"10px",borderRadius:"5px",shadow:"4px 4px #00000020"}),r.a.createElement(P.a,{src:me.a,alt:"screenshot",h:"200px",m:"10px",borderRadius:"5px",shadow:"4px 4px #00000020"}))},{name:"Minesweepers",desc:'A project for the Independent Study in Advanced Programming course at George School. The technical objective of the project is to train the "Minesweeper" bots to correctly walk through the "mines" presented on a 2D plane using Genetic Algorithms and Neural Networks.',year:"Nov 2018 - Mar 2019",keywords:["Machine Learning","Neural Networks","Genetic Algorithms","Java"],source:"https://github.com/comtalyst/Minesweepers",extras:r.a.createElement(E.a,{justifyContent:"center",mt:"1rem",wrap:"wrap"},r.a.createElement(P.a,{src:de.a,alt:"screenshot",h:"300px",m:"10px",borderRadius:"5px",shadow:"4px 4px #00000020"}))},{name:"Amico",desc:"A Chatbot web application to support people with depression. I mainly responsible for the bot part; while my teammate, Pete, is mainly responsible for launching it as a web application. Submitted as a part of Thailand's National Software Contest 2018.",year:"Jun 2017 - Mar 2018",keywords:["Chatbot","Machine Learning (Lite)","Python"],source:"https://github.com/comtalyst/Amico-Bot"},{name:"Auditial",desc:"An accounting android application.",year:"Jul 2016 - Aug 2016",keywords:["Android Studio","Java"],source:"https://github.com/comtalyst/Auditial"}];return r.a.createElement(E.a,{w:"100%",pb:"3rem",pt:"1rem",direction:"column",bg:"trans.gray"},r.a.createElement(W,{text:"Projects"}),r.a.createElement(ge,{rows:e,collapseTitle:"Technologies"}))};var xe=function(){return r.a.createElement(E.a,{w:"100%",pb:"3rem",pt:"1rem",direction:"column"},r.a.createElement(W,{text:"Experiences"}),r.a.createElement(ge,{rows:[{name:"Member, UW-Madison 2019 ICPC Team",desc:"Trained in preparation for ICPC 2019 North Central NA Regional Contest along with two other teammates.",year:"Sep 2019 - Nov 2019",keywords:["Teamed Competitive Programming","C/C++","Data Structures & Algorithms"],link:"http://pages.cs.wisc.edu/~dieter/ICPC/"},{name:"Finalist, Thailand International Olympiad in Informatics Team",desc:"Participated in a series of training camps and programming contests to select 4 national representatives to the IOI. Ranked 5th place in the final stage (That's right, I was almost there).",year:"Jun 2015 - May 2018",keywords:["Competitive Programming","C/C++","Data Structures & Algorithms","Computer Science Theory"],link:"http://pages.cs.wisc.edu/~dieter/ICPC/"},{name:"Executive Board, Suankularb Wittayalai School Computer Club",desc:"Organized various activities like programming competitions, workshops, and exhibitions to students and visitors. The notable ones are an Android Application Tutorial workshop (sponsored by Google Student Ambassador) and an ICPC-style high school level competitive programming contest.",year:"Dec 2015 - May 2017",link:"https://www.facebook.com/skcomclub/"}],collapseTitle:"Experiences"}))},we=a(73),Ee=a.n(we),be=a(74),ye=a.n(be),ve=a(75),Se=a.n(ve),Ce=a(76),ke=a.n(Ce),Ae=a(77),Re=a.n(Ae);var We=function(){var e=[{name:"6th Place, ICPC 2019 North Central North America Regional Contest",color:"gray.300",desc:'A formal college-level programming competition to qualify regional representatives to the ICPC World Finals 2020. Contestants from 178 teams have to solve most number of problems using data structure and algorithms, varied from basics to advanced, in a limited time (this competition style is called "Competitive Programming")',year:r.a.createElement(E.a,{justifyContent:"flex-end",mt:"1rem",wrap:"wrap"},r.a.createElement(P.a,{src:Se.a,alt:"screenshot",h:"80px",m:"10px"}),"Nov 2019"),keywords:["Teamed Competitive Programming","C/C++","Data Structure and Algorithms"],link:"https://icpc.global/"},{name:"North American Award (Level 3), Trinity College Int\u2019l Firefighting Robot Contest 2019",color:"yellow.400",desc:"A firefighting robotics competition: the robot must traverse the maze and extinguish the candle in a limited time. Competed using the robot Firex along with teammates from George School: Sam, Andrew, and Ian under the guidance of robotics teacher Chris. Received the best performance award for teams from North America in the most advanced maze.",year:r.a.createElement(E.a,{justifyContent:"flex-end",mt:"1rem",wrap:"wrap"},r.a.createElement(P.a,{src:ke.a,alt:"screenshot",h:"100px",m:"10px",mx:"25px"}),"Apr 2019"),keywords:["Robotics & Physical Computing","Arduino","C"],link:"https://trinityrobotcontest.org/"},{name:"Royal Thai Olympiad Scholarship",desc:"A scholarship from the Thai government to study computer sciences internationally up to Doctoral Degree Awarded to students who reached the final qualification round in an academic Olympiad program (in my case, informatics Olympiad).",year:"Jun 2018"},{name:"National Representative, Asia-Pacific Informatics Olympiad (APIO) 2018",desc:"A formal high-school-level programming competition for national representatives from Asian-Pacific nations. Missed a medalist opportunity with a mistake I never forget...",year:r.a.createElement(E.a,{justifyContent:"flex-end",mt:"1rem",wrap:"wrap"},r.a.createElement(P.a,{src:ye.a,alt:"screenshot",h:"80px",m:"10px"}),"May 2018"),keywords:["Competitive Programming","C/C++","Data Structure and Algorithms"],link:"https://apio2018.ru/"},{name:"Participant, Thailand's National Software Contest 2018",desc:"A nation-wide software development competition. Competed using the Chatbot Amico along with teammates from Suankularb Wittayalai School: Pete and Boss under the guidance of teacher Saowalak. Qualified to the first round and received development funds.",year:r.a.createElement(E.a,{justifyContent:"flex-end",mt:"1rem",wrap:"wrap"},r.a.createElement(P.a,{src:Re.a,alt:"screenshot",h:"80px",m:"10px",mx:"30px"}),"Mar 2018"),keywords:["Software Development","Chatbot","Machine Learning (Lite)","Python"],link:"http://www.nectec.or.th/nsc/"},{name:"Silver Medalist, 12th Thailand Olympiad in Informatics",color:"gray.300",desc:"A formal high-school-level nation-wide programming competition organized by the Institute for the Promotion of Teaching Science and Technology, a government-sponsored organization.",year:"Jun 2016",keywords:["Competitive Programming","C/C++","Data Structure and Algorithms"],link:"http://www.enews.psu.ac.th/index.php/education/28-the-12th-thailand-olympiad-in-informatics",extras:r.a.createElement(E.a,{justifyContent:"center",mt:"1rem",wrap:"wrap"},r.a.createElement(P.a,{src:Ee.a,alt:"screenshot",h:"250px",m:"10px",borderRadius:"5px",shadow:"4px 4px #00000020"}))}];return r.a.createElement(E.a,{w:"100%",pb:"3rem",pt:"1rem",direction:"column",bg:"trans.gray"},r.a.createElement(W,{text:"Awards and Honors"}),r.a.createElement(ge,{rows:e,collapseTitle:"Aspects"}))},ze=a(78),je=a.n(ze);var Pe=function(){return r.a.createElement(E.a,{w:"100%",pb:"3rem",pt:"1rem",direction:"column"},r.a.createElement(W,{text:"Contact"}),r.a.createElement(E.a,{mx:"20px",direction:"column"},r.a.createElement(b.a,{lineHeight:"taller",letterSpacing:"wider",fontWeight:"light",textAlign:"center",flexWrap:"wrap"},"Want to know more? Want to proof those records? Comments and Criticism?",r.a.createElement("br",null),"All are welcome! Just contact me!"),r.a.createElement("br",null),r.a.createElement(E.a,{justifyContent:"center",alignItems:"center",wrap:"wrap"},r.a.createElement(b.a,{fontSize:"lg",lineHeight:"taller",letterSpacing:"widest",fontWeight:"light",textAlign:"center"},"Mr. Rawin (Robin) Deeboonchai"),r.a.createElement(b.a,{fontSize:"lg",lineHeight:"taller",letterSpacing:"wider",fontWeight:"b",textAlign:"center",color:"gray.400"},"\xa0/\xa0"),r.a.createElement(b.a,{fontSize:"lg",lineHeight:"taller",letterSpacing:"wider",fontWeight:"light",textAlign:"center"},"\u0e19\u0e32\u0e22 \u0e23\u0e27\u0e34\u0e19\u0e17\u0e4c \u0e14\u0e35\u0e1a\u0e38\u0e0d\u0e0a\u0e31\u0e22")),r.a.createElement(E.a,{justifyContent:"center",alignItems:"center",wrap:"wrap"},r.a.createElement(E.a,{alignItems:"center"},r.a.createElement(h.a,{as:k.f,size:"15px",mx:"10px"}),r.a.createElement(b.a,{fontSize:"lg",lineHeight:"taller",letterSpacing:"wider",fontWeight:"light",textAlign:"center"},"Bangkok, Thailand (Summer)")),r.a.createElement(b.a,{fontSize:"lg",lineHeight:"taller",letterSpacing:"wider",fontWeight:"b",textAlign:"center",color:"gray.400"},"\xa0/\xa0"),r.a.createElement(E.a,{alignItems:"center"},r.a.createElement(h.a,{as:k.f,size:"15px",mx:"10px",ml:"2px"}),r.a.createElement(b.a,{fontSize:"lg",lineHeight:"taller",letterSpacing:"wider",fontWeight:"light",textAlign:"center"},"Madison, WI, USA"))),r.a.createElement(E.a,{justifyContent:"center",alignItems:"center"},r.a.createElement(h.a,{as:k.a,size:"15px",mx:"10px",mt:"3px"}),r.a.createElement(C.a,{fontSize:"lg",lineHeight:"taller",letterSpacing:"wider",fontWeight:"light",textAlign:"center",isExternal:!0,href:"mailto:rawin.dbc@outlook.com"},"rawin.dbc@outlook.com")),r.a.createElement(E.a,{justifyContent:"center",alignItems:"center",pt:"30px"},r.a.createElement(C.a,{isExternal:!0,href:"https://www.facebook.com/comtalyst"},r.a.createElement(h.a,{as:k.b,size:"30px",mx:"10px"})),r.a.createElement(C.a,{isExternal:!0,href:"https://github.com/comtalyst"},r.a.createElement(h.a,{as:k.c,size:"30px",mx:"10px"})),r.a.createElement(C.a,{isExternal:!0,href:"https://www.instagram.com/pun_rawin"},r.a.createElement(h.a,{as:k.d,size:"30px",mx:"10px"})),r.a.createElement(C.a,{isExternal:!0,href:"https://www.linkedin.com/in/rawin-deeboonchai-41619a197/"},r.a.createElement(h.a,{as:k.e,size:"30px",mx:"10px"}))),r.a.createElement(E.a,{pt:"20px",mx:"-20px",mb:"-40px"},r.a.createElement(C.a,{isExternal:!0,href:"https://www.youtube.com/watch?v=hB8S6oKjiw8"},r.a.createElement(P.a,{src:je.a,alt:"logo",size:"30px",mx:"10px"})))))},Ie=a(79),Fe=a.n(Ie);var Te=function(){var e={Profile:Object(n.useRef)(null),Education:Object(n.useRef)(null),Skills:Object(n.useRef)(null),Projects:Object(n.useRef)(null),Experiences:Object(n.useRef)(null),Honors:Object(n.useRef)(null),Contact:Object(n.useRef)(null)};return r.a.createElement(h.a,{bg:"gray.700",color:"white",bgImage:"url("+Fe.a+")",bgRepeat:"no-repeat",bgSize:"100% 100%"},r.a.createElement(u.a,null),r.a.createElement(S,{scrollTo:function(t){window.scrollTo(0,e[t].current.offsetTop-64)},names:["Profile","Education","Skills","Projects","Experiences","Honors","Contact"]}),r.a.createElement(z,null),r.a.createElement("hr",null),r.a.createElement("div",{ref:e.Profile}),r.a.createElement(T,null),r.a.createElement("hr",null),r.a.createElement("div",{ref:e.Education}),r.a.createElement(U,null),r.a.createElement("hr",null),r.a.createElement("div",{ref:e.Skills}),r.a.createElement(Q,null),r.a.createElement("hr",null),r.a.createElement("div",{ref:e.Projects}),r.a.createElement(fe,null),r.a.createElement("hr",null),r.a.createElement("div",{ref:e.Experiences}),r.a.createElement(xe,null),r.a.createElement("hr",null),r.a.createElement("div",{ref:e.Honors}),r.a.createElement(We,null),r.a.createElement("hr",null),r.a.createElement("div",{ref:e.Contact}),r.a.createElement(Pe,null))};var He=function(){return r.a.createElement(d.a,{theme:p},r.a.createElement(l.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:["/","/home"],component:Te}),r.a.createElement(c.a,{component:function(){return r.a.createElement("span",null,"Page Not Found")}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(He,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},55:function(e,t,a){e.exports=a.p+"static/media/scene1.386f9d72.jpg"},56:function(e,t,a){e.exports=a.p+"static/media/portrait.c205ed16.png"},58:function(e,t,a){e.exports=a.p+"static/media/uw_logo.6a5af82c.png"},59:function(e,t,a){e.exports=a.p+"static/media/gs_logo.ad7e82ae.png"},60:function(e,t,a){e.exports=a.p+"static/media/sk_logo.14769d8e.png"},61:function(e,t,a){e.exports=a.p+"static/media/scene3.ffe7888f.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/shootdown1.3e2f7ee4.png"},64:function(e,t,a){e.exports=a.p+"static/media/shootdown2.f21041d4.png"},65:function(e,t,a){e.exports=a.p+"static/media/shootdown3.c8a8b162.png"},66:function(e,t,a){e.exports=a.p+"static/media/shootdown4.8f30fc9f.png"},67:function(e,t,a){e.exports=a.p+"static/media/shootdown5.213b60a2.png"},68:function(e,t,a){e.exports=a.p+"static/media/luminateer1.ad6acf30.png"},69:function(e,t,a){e.exports=a.p+"static/media/luminateer2.fa79a473.png"},70:function(e,t,a){e.exports=a.p+"static/media/firex1.0c401ad7.png"},71:function(e,t,a){e.exports=a.p+"static/media/firex2.bf417bfe.png"},72:function(e,t,a){e.exports=a.p+"static/media/minesweepers1.ccf2a4f9.PNG"},73:function(e,t,a){e.exports=a.p+"static/media/toi1.f1c01113.png"},74:function(e,t,a){e.exports=a.p+"static/media/apio_logo.753153dc.png"},75:function(e,t,a){e.exports=a.p+"static/media/icpc_logo.49bd8086.png"},76:function(e,t,a){e.exports=a.p+"static/media/trinity_logo.63a1925a.png"},77:function(e,t,a){e.exports=a.p+"static/media/nsc_logo.22dfbb57.png"},78:function(e,t,a){e.exports=a.p+"static/media/comtalyst_hidden.29a6db59.png"},79:function(e,t,a){e.exports=a.p+"static/media/grad.217bf136.png"},84:function(e,t,a){e.exports=a(103)},89:function(e,t,a){},90:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.68e5329b.chunk.js.map