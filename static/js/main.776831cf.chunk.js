(this["webpackJsonpscared-catalog-react"]=this["webpackJsonpscared-catalog-react"]||[]).push([[0],{165:function(e,t,a){e.exports=a(316)},170:function(e,t,a){},316:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(11),o=a.n(r),s=(a(170),a(29)),l=a(10),c=a(370),g=a(155),d=a(367),m=a(368),u=a(372),p=a(366),h=a(156),f=a(63),b=a(371),w=a(363),y=a(380),v=a(74),L=a(375),S=a(378),k=a(379),C=a(364),A=a(148),j=a(374),E=a(377),U=a(93),x=a.n(U),B=a(30),T=a(365),O=a(373),N=a(152),R=a.n(N),z=a(154),K=a.n(z),D=a(153),F=a.n(D),G=a(151),H=a.n(G),M=a(141),P=a(376),q=(a(177),a(369)),I=a(149),W=a.n(I);function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(a),!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var V="https://scaredpanties.us20.list-manage.com/subscribe/post?u=65173dffd9ab714c0d2d985ab&amp;id=ed2dc9ceb2",J=Object(f.a)((function(e){return{icon:{marginLeft:e.spacing(2),marginRight:e.spacing(2),marginBottom:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6),backgroundImage:"url(https://blog.scaredpanties.com/content/images/size/w2000/2019/06/B0010006_extended2.jpg)",width:"100%",height:" 100%",backgroundPosition:"center",backgroundSize:"cover"},heroTypography:{color:"white"},ms:{textAlign:"center",padding:"30px","& *":{fontSize:"1.2em"}},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},card:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},stickyNav:{backgroundColor:e.palette.background.paper,position:"sticky",zIndex:"10",top:"0"},selectForm:Object(l.a)({margin:e.spacing(1),minWidth:"30%"},e.breakpoints.down("xs"),{minWidth:"100%"}),cardMedia:{paddingTop:"75%",marginBottom:"10px"},cardContent:{margin:"200px",flexGrow:1,alignItems:"flex-end"},chipGrid:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly","& > *":{margin:e.spacing(.5)}},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}));function Z(){return n.a.createElement(h.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",n.a.createElement(w.a,{color:"inherit",href:"https://blog.scaredpanties.com/"},"scaredpanties")," ",(new Date).getFullYear(),".")}var Q=function(e){var t=[];return t.push("All"),t=t.concat(Array.from(new Set(e.map((function(e){return e.origin})))))};function $(e){var t=J(),a=n.a.useState(e.origins[0]),i=Object(s.a)(a,2),r=i[0],o=i[1];return n.a.createElement(C.a,{className:t.selectForm},n.a.createElement(S.a,{id:"origin-select"},"Brand origin country"),n.a.createElement(L.a,{labelId:"origin-select",id:"origin-select",value:r,onChange:function(t){B.a.event({category:"User",action:"select country",label:"navigation"}),o(t.target.value),e.onSelectChange((function(e){return _({},e,{origin:t.target.value})})),e.offsetReset(0)}},e.origins.map((function(e){return n.a.createElement(k.a,{key:e,value:e},e)}))))}function X(e){var t=J(),a=n.a.useState([e.tags[0]]),i=Object(s.a)(a,2),r=i[0],o=i[1];return n.a.createElement(C.a,{className:t.selectForm},n.a.createElement(S.a,{id:"tag-select"},"Tag selector"),n.a.createElement(L.a,{labelId:"tag-select",id:"tag-select",multiple:!0,input:n.a.createElement(T.a,null),value:r,onChange:function(t){var a=t.target.value;B.a.event({category:"User",action:"select tags",label:"navigation"}),"All"===a[0]&&a.length>1&&(a=a.filter((function(e){return"All"!==e}))),a.length<1&&a.push("All"),"All"===a[a.length-1]&&a.length>1&&(a=["All"]),o(a),e.onSelectChange((function(e){return _({},e,{tags:a})})),e.offsetReset(0)}},e.tags.map((function(e){return n.a.createElement(k.a,{key:e,value:e},e)}))))}function ee(e){var t=J();return n.a.createElement(p.a,{item:!0,xs:12,sm:6,md:4},n.a.createElement(d.a,{className:e.classes.card},n.a.createElement(m.a,{className:e.cardContent},n.a.createElement(q.a,{className:t.cardMedia,image:e.cardCont.img,title:e.cardCont.title}),n.a.createElement(h.a,{gutterBottom:!0,guttertop:!0,variant:"h5",component:"h2"},n.a.createElement(B.a.OutboundLink,{target:"_blank",eventLabel:e.cardCont.title,to:e.cardCont.link},e.cardCont.title),!0===e.cardCont.fav?n.a.createElement(x.a,{style:{color:"red"}}):null),n.a.createElement(h.a,{gutterBottom:!0,color:"textSecondary"},e.cardCont.origin),n.a.createElement(h.a,null,e.cardCont.desc)),n.a.createElement(c.a,null,n.a.createElement(P.a,{className:t.chipGrid},e.cardCont.tags.map((function(e){return n.a.createElement(y.a,{size:"small",label:e})}))))))}function te(e){return n.a.createElement(h.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"Such empty!!! Come back soon, i will add more...")}function ae(e){var t=e.db.length,a=J(),i=e.db.slice(e.offset,e.offset+12);return n.a.createElement(b.a,{className:a.cardGrid,maxWidth:"lg"},n.a.createElement(W.a,{limit:12,size:"large",total:t,onClick:function(t,a){return i=a,e.onOffsetChange(i),void B.a.event({category:"User",action:"select page",label:"navigation"});var i},offset:e.offset,style:{textAlign:"center",position:"sticky",top:"50px",backgroundColor:"white"}}),e.db.length>0?n.a.createElement(p.a,{container:!0,spacing:4,alignItems:"stretch"},i.map((function(e){return n.a.createElement(ee,{classes:a,cardCont:e,key:e.title})}))):n.a.createElement(te,null))}var ie=function(e){return Array.from(new Set(e.map((function(e){return e.tags})).reduce((function(e,t){return e.concat(t)}))))};var ne=function(){B.a.initialize("UA-39274880-3"),B.a.pageview("/catalog");var e=J(),t=Object(i.useState)({origin:"All",tags:["All"],fav:!1}),a=Object(s.a)(t,2),r=a[0],o=a[1],l=n.a.useState(!1),c=Object(s.a)(l,2),d=c[0],m=c[1],f=Object(i.useState)(0),w=Object(s.a)(f,2),y=w[0],L=w[1],S=ie(v);S.unshift("All");var k,C,U=v.sort((function(e,t){return e.title.localeCompare(t.title)}));return n.a.createElement("div",null,n.a.createElement(u.a,null),n.a.createElement("div",{className:e.heroContent},n.a.createElement(b.a,{maxWidth:"md"},n.a.createElement(h.a,{variant:"h3",align:"center",className:e.heroTypography,gutterBottom:!0},"scaredpanties'"),n.a.createElement(h.a,{variant:"h6",align:"center",color:"textSecondary",className:e.heroTypography,paragraph:!0},"lingerie brands catalog"))),n.a.createElement(b.a,{maxWidth:"md",gutterBottom:!0},n.a.createElement(p.a,{container:!0,justify:"space-between",alignItems:"center",spacing:2},n.a.createElement(p.a,{item:!0},n.a.createElement(M.a,{variant:"outlined",color:"primary",href:"https://blog.scaredpanties.com"}," BLOG ")),n.a.createElement(p.a,{item:!0},n.a.createElement(O.a,{color:"primary","aria-label":"Mail to scaredpanties",href:"mailto:scaredpanties@gmail.com"},n.a.createElement(H.a,null)),n.a.createElement(O.a,{color:"primary","aria-label":"Instagramm",href:"https://www.instagram.com/scaredpanties/"},n.a.createElement(R.a,null)),n.a.createElement(O.a,{color:"primary","aria-label":"Youtube",href:"https://www.youtube.com/channel/UCge0-VKn4mfJfGt1ZCMbcpQ?view_as=subscriber"},n.a.createElement(F.a,null)),n.a.createElement(O.a,{color:"primary","aria-label":"Twitter",href:"https://twitter.com/scaredpanties"},n.a.createElement(K.a,null))))),n.a.createElement(b.a,{maxWidth:"md",className:e.stickyNav},n.a.createElement($,{onSelectChange:o,origins:Q(v).sort(),offsetReset:L}),n.a.createElement(X,{tags:S,onSelectChange:o,offsetReset:L}),n.a.createElement(j.a,{style:{marginRight:"0px",marginLeft:"0px",verticalAlign:"baseline",textAlign:"right"},control:n.a.createElement(E.a,{checked:d,onChange:function(e){m(e.target.checked);var t=e.target.checked;o((function(e){return _({},e,{fav:t})})),L(0),B.a.event({category:"User",action:"select fav",label:"navigation"})},offsetReset:L,value:"checkedB",color:"primary"}),label:"scaredpanties' favorites"}),n.a.createElement(x.a,{style:{color:"red"}})),n.a.createElement(ae,{db:(k=U,C=r,"All"!==C.origin&&(k=k.filter((function(e){return e.origin===C.origin}))),!0===C.fav&&(k=k.filter((function(e){return!0===e.fav}))),"All"!==C.tags[0]&&(k=k.filter((function(e){return 0!==Object(A.intersection)(e.tags,C.tags).length}))),k),offset:y,onOffsetChange:L}),n.a.createElement("div",null,n.a.createElement(b.a,{maxWidth:"md",style:{textAlign:"center"}},n.a.createElement(h.a,null,"Currently i have ",U.length," lingerie brands in my catalog from ",Q(U).length," countries. Come back soon, i will add more!")),n.a.createElement(b.a,{maxWidth:"sm",className:e.ms,justify:"space-between"},n.a.createElement(h.a,{gutterBottom:!0,variant:"h6"},"Subscribe to scaredpanties updates:"),n.a.createElement(g.a,{url:V}))),n.a.createElement("footer",{className:e.footer},n.a.createElement(h.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Lingerie reviews, advice, and tips with a touch of luxury. Feel free to reach out to me via e-mail scaredpanties@gmail.com."),n.a.createElement(Z,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},74:function(e){e.exports=JSON.parse('[{"title":"Agent Provocateur","link":"https://www.agentprovocateur.com/int_en","desc":"World-famous brand of luxury lingerie, loungewear, and swimwear, with a strong focus on sensuality and provocative designs in their products, stores, and ad campaigns.","img":"https://blog.scaredpanties.com/content/images/2019/12/Agent-Provocateur-Lingerie_resized.jpg","origin":"UK","originCode":"GBR","fav":false,"tags":["Lingerie","Sleep/Lounge","Swimwear","Clothes","Corsets","Hosiery","Accessories","Large cup"]},{"title":"Andres Sarda","link":"https://www.andressarda.com/US/en/home","desc":"Seductive yet wearable lingerie with a distinctive Mediterranean vibe celebrates free and triumphant femininity featuring lots of vibrant and contrasting colours and catchy details.","img":"https://blog.scaredpanties.com/content/images/2019/12/Andres-Sarda-Lingerie1-1.jpg","origin":"Spain","originCode":"ESP","fav":false,"tags":["Lingerie","Swimwear","Sleep/Lounge","Clothes","Small cup","Large cup"]},{"title":"Angela Friedman","link":"https://angelafriedman.com/","desc":"Vintage-inspired lingerie meticulously hand crafted of 100% silk satins and French laces. Styles are heavily influenced by ballet, and the brand promises a slow fashion guarantee.","img":"https://blog.scaredpanties.com/content/images/2019/12/Angela-Friedman-Lingerie-2.jpg","origin":"UK","originCode":"GBR","fav":false,"tags":["Lingerie","Sleep/Lounge","Corsets"]},{"title":"Anya Lust","link":"https://anyalust.com/","desc":"Luxurious lingerie boutique offering sheer robes, nightgowns, and accessories under own brand name as well as gorgeous lingerie from designers around the world.","img":"https://blog.scaredpanties.com/content/images/2019/12/Anya-Lust-Loungewear.jpg","origin":"USA","originCode":"USA","fav":false,"tags":["Sleep/Lounge","Accessories"]},{"title":"Bordelle","link":"http://shop.bordelle.co.uk/collections/shop","desc":"Niche lingerie and bodywear characterised by body-con silhouettes and rooted in a proprietary technique that blends 24k gold-plated hardware and customised satin elastic to create a luxury and provocative S&M sensuality.","img":"https://blog.scaredpanties.com/content/images/2019/12/Bordelle-Lingerie-1.jpg","origin":"UK","originCode":"GBR","fav":true,"tags":["Lingerie","Clothes","Accessories"]},{"title":"Boudoir by d\'Lish","link":"https://boudoirbydlish.bigcartel.com/","desc":"Purely extravagant dressing gowns with vibe of \\"Hollywood\'s golden era\\" made of silk, nylon chiffon or sheer mesh and richly decorated with ruffles, marabou or ostrich feathers.","img":"https://blog.scaredpanties.com/content/images/2019/12/Boudoir-by-dLish-Gowns.jpg","origin":"USA","originCode":"USA","fav":false,"tags":["Sleep/Lounge","Accessories"]},{"title":"Boys+Arrows","link":"https://boysandarrows.com/","desc":"Truly sunny and cheerful swimsuits. Each design is offered in a number of styles which can be chosen separately for top and bottoms for your taste.","img":"https://blog.scaredpanties.com/content/images/2019/12/Boys-and-Arrows-Swimwear.jpg","origin":"USA","originCode":"USA","fav":false,"tags":["Swimwear","Clothes","Small cup"]},{"title":"Covert Behavior","link":"https://covertbehavior.com/","desc":"Unconventional lingerie made of cotton and tensel jersey and colourful swimwear: multiple cutouts, styles with eyes and teeth, and more. ","img":"https://blog.scaredpanties.com/content/images/2019/12/Screen-Shot-2019-12-08-at-12.57.58-AM.png","origin":"USA","originCode":"USA","fav":true,"tags":["Lingerie","Swimwear","Tailored"]},{"title":"Creepyyeha","link":"http://creepyyeha.storenvy.com/","desc":"Unique made to order lingerie and accessories with S&M vibe. Leather and vinyl pieces with signature abundance of metal hardware, crystal and pearl decorations.","img":"https://blog.scaredpanties.com/content/images/2019/12/Creepy-Yeha-Leather.jpg","origin":"USA","originCode":"USA","fav":false,"tags":["Lingerie","Accessories","Clothes","Tailored"]},{"title":"Dora Larsen","link":"https://doralarsen.com/","desc":"Lingerie features distinctive colourful combinations in mesh, lace, and elastics offering comfy designs in a size range from 32A through 36DD.","img":"https://blog.scaredpanties.com/content/images/2019/12/Dora-Larsen-Lingerie-1.jpg","origin":"UK","originCode":"GBR","fav":false,"tags":["Lingerie","Sleep/Lounge","Small cup","Large cup"]},{"title":"E.L.F ZHOU London","link":"https://elfzhou.com/","desc":"\\"A decadent yet ethereal range\\" of lingerie and leather artefacts. Bold statements pieces with S&M vibe made of locally sourced luxury materials from Britain, France and Italy.","img":"https://blog.scaredpanties.com/content/images/2019/12/ELF-Zhou-London-Lingerie-1.jpg","origin":"UK","originCode":"GBR","fav":false,"tags":["Lingerie","Accessories","Sleep/Lounge"]},{"title":"Edge o\'Beyond","link":"https://www.edgeobeyond.com/","desc":"Luxury brand incorporating delicate gold plated jewellery into its designs, distinctively merging lingerie and fine jewellery and making each of sets customizable.","img":"https://blog.scaredpanties.com/content/images/2019/12/Edge-o-Beyond-Lingerie.jpg","origin":"UK","originCode":"GBR","fav":false,"tags":["Lingerie","Sleep/Lounge","Swimwear","Accessories","Small cup","Large cup"]},{"title":"Elma Lingerie","link":"https://elmashop.co/","desc":"Handmade label specializing in the petite fit. Delicate bralettes of silk and lace can be made unlined, lined for light coverage, or with removable pads.","img":"https://blog.scaredpanties.com/content/images/2019/12/Elma-Lingerie.jpg","origin":"USA","originCode":"USA","fav":false,"tags":["Lingerie","Sleep/Lounge","Small cup"]},{"title":"Evgenia","link":"https://iamevgenia.com/","desc":"Luxury intimates crafted from silk with inserts of exquisite French laces. Feminine silhouettes with vintage vibe, especially when paired with the brand\'s corsets.","img":"https://blog.scaredpanties.com/content/images/2019/12/Eugenia-Lingerie-1.jpg","origin":"USA","originCode":"USA","fav":true,"tags":["Lingerie","Sleep/Lounge","Corsets","Small cup"]},{"title":"Fleet Ilya","link":"https://www.fleetilya.com/","desc":"Label \\"bridging a high fashion aesthetic and subversive fantasy\\" and offering lifestyle objects, ready to wear lingerie and accessories, and functional restraint pieces, all made of leather.","img":"https://blog.scaredpanties.com/content/images/2019/12/Ilya-Fleet-Leather-Lingerie-1.jpg","origin":"UK","originCode":"GBR","fav":true,"tags":["Lingerie","Accessories","Small cup"]},{"title":"Fleur du Mal","link":"https://www.fleurdumal.com/","desc":"\\"Feminine, chic and slightly subversive\\", the brand features silk, lace, embroidery, and vibrant colours.","img":"https://blog.scaredpanties.com/content/images/2019/12/Fleur-du-Mal-Lingerie-1.jpg","origin":"USA","originCode":"USA","fav":true,"tags":["Lingerie","Clothes","Swimwear"]},{"title":"Fleur of England","link":"https://www.fleurofengland.com/","desc":"Delicate and feminine, the brand offers luxury pieces made of silk, French lace, and signature embroidered tulle with \\"tattoo effect\\" in size range from 32A through 36E.","img":"https://blog.scaredpanties.com/content/images/2019/12/Fleur-of-England-Lingerie-1.jpg","origin":"UK","originCode":"GBR","fav":true,"tags":["Lingerie","Sleep/Lounge","Swimwear","Hosiery","Small cup","Large cup"]},{"title":"FRKS","link":"https://www.etsy.com/ca/shop/FRKSlingerie?","desc":"Lingerie made from fine elastic tulle with colourful tulle appliques and embroidery featuring funny animalistic and floral patterns. Sizes start at 30A, custom modifications available on request.","img":"https://blog.scaredpanties.com/content/images/2019/12/FRKS-Lingerie-1.jpg","origin":"Hungary","originCode":"HUN","fav":true,"tags":["Lingerie","Small cup"]},{"title":"Hopeless","link":"https://hopelesslingerie.com/","desc":"\\"Dark, modern and romantic lingerie for bad-ass women\\" made of see-through mesh and lace, mostly in black and red, with lots of straps. The brand specializes in custom orders and custom sizing.","img":"https://blog.scaredpanties.com/content/images/2019/12/Hopeless-Lingerie-1.jpg","origin":"Australia","originCode":"AUS","fav":false,"tags":["Lingerie","Accessories","Sleep/Lounge","Clothes","Tailored"]},{"title":"I.D. Sarrieri","link":"https://sarrieri.com/","desc":"The brand promotes femininity and refined glamour focusing on couture lingerie pieces and luxurious essentials. The signature is the extensive use of Chantilly lace, mixed with the highest quality fabrics.  ","img":"https://blog.scaredpanties.com/content/images/2019/12/ID-Sarrieri-Lingerie-1.jpg","origin":"UK","originCode":"GBR","fav":true,"tags":["Lingerie","Sleep/Lounge","Swimwear"]},{"title":"Karolina Laskowska","link":"https://karolinalaskowska.com/","desc":"Couture-level lingerie focusing on exquisite lace, beaded embroidery, fine silks and unconventional approaches such as vintage kimono silk or laser-cut leather. Sizes vary from 32A to 36DD.","img":"https://blog.scaredpanties.com/content/images/2019/12/Karolina-Laskowska-Lingerie-1.jpg","origin":"Norway","originCode":"NOR","fav":false,"tags":["Lingerie","Corsets","Accessories","Small cup","Large cup"]},{"title":"Kiki de Montparnasse","link":"https://kikidm.com/","desc":"As the lines between underwear and streetwear continue to blur, the brand leads in bridging this gap of dress and undress with the highest standards of design and materials.","img":"https://blog.scaredpanties.com/content/images/2019/12/Kiki-de-Montparnasse-Lingerie.jpg","origin":"USA","originCode":"USA","fav":false,"tags":["Lingerie","Sleep/Lounge","Clothes","Accessories","Corsets","Small cup","Large cup"]},{"title":"Kiss Me Deadly","link":"https://www.kissmedeadly.co.uk/","desc":"Retro lingerie, swim and style brand for femme fatales offering original 6 strap suspender belts, girdles, corselettes, corsets, and other pieces at affordable prices. ","img":"https://blog.scaredpanties.com/content/images/2019/12/Kiss-Me-Deadly-Lingerie.jpg","origin":"UK","originCode":"GBR","fav":false,"tags":["Lingerie","Sleep/Lounge","Accessories","Corsets"]},{"title":"La Lilouche","link":"http://lalilouche.bigcartel.com/","desc":"Luxury lingerie & bridal wear with an emphasis on seductive boudoir. All items are handmade using the finest quality fabrics such as silk satin, Chantilly laces, chiffon, etc.","img":"https://blog.scaredpanties.com/content/images/2019/12/La-Lilouche-Lingerie.jpg","origin":"Israel","originCode":"ISR","fav":false,"tags":["Lingerie","Sleep/Lounge","Hosiery","Small cup","Large cup"]},{"title":"Livy","link":"https://www.li-vy.com/en/accueil","desc":"Designs feature architectural silhouettes, laconic designs of contrasting transparency and bold lines, combinations of Calais lace with tech materials and finishes. Sizes range from 32A through 36F.","img":"https://blog.scaredpanties.com/content/images/2019/12/Livy-Lingerie-1.jpg","origin":"France","originCode":"FRA","fav":true,"tags":["Lingerie","Swimwear","Sleep/Lounge","Clothes","Accessories","Small cup","Large cup"]},{"title":"Lovechild Boudoir","link":"https://lovechildboudoir.com/","desc":"Luxurious and flashy cage and harness lingerie and clothes made of straps with plenty of embellishments featuring embroidery, beading, lace, sequins, rhinestones, and metal elements. Each piece is made by hand.","img":"https://blog.scaredpanties.com/content/images/2019/12/Lovechild-Boudoir-Lingerie-1.jpg","origin":"UK","originCode":"GBR","fav":true,"tags":["Lingerie","Accessories"]},{"title":"Loveday London","link":"https://lovedaylondon.com/","desc":"Luxury lingerie inspired by a \'Hardcore Romance\' aesthetic and combining fine Italian leather and luxurious laces and silk. The brand also developed a patented adjustable back strap system for their bras. ","img":"https://blog.scaredpanties.com/content/images/2019/12/Loveday-London-Lingerie-1.jpg","origin":"UK","originCode":"GBR","fav":false,"tags":["Lingerie","Sleep/Lounge","Accessories"]},{"title":"Marieyat","link":"https://www.marieyat.com/","desc":"The label focused on seamless knitwear made from natural materials, such as cotton and silk, and emphasizing comfort. Laconic designs feature signature straps and cutouts.","img":"https://blog.scaredpanties.com/content/images/2019/12/Marieyat-Lingerie-1.jpg","origin":"UK","originCode":"GBR","fav":true,"tags":["Lingerie","Clothes","Sleep/Lounge","Hosiery","Small cup"]},{"title":"Mary Young","link":"https://maryyoung.ca/","desc":"Lifestyle lingerie - every garment is designed with comfort in mind with the use of rayon from bamboo material, soft mesh and custom elastics to encourage appreciation of the natural shape.","img":"https://blog.scaredpanties.com/content/images/2019/12/Mary-Young-Lingerie.jpg","origin":"Canada","originCode":"CAN","fav":false,"tags":["Lingerie","Sleep/Lounge","Accessories","Small cup","Large cup"]},{"title":"Maude Nibelungen","link":"https://maudenibelungen.com/","desc":"The brand combines modern designs with traditional knitting techniques. All items are made by hand and therefore have slight variations which make every piece unique.","img":"https://blog.scaredpanties.com/content/images/2019/12/Maude-Nibelungen-Lingerie-1.jpg","origin":"Canada","originCode":"CAN","fav":true,"tags":["Lingerie","Hosiery","Clothes","Accessories","Small cup","Large cup"]},{"title":"Mimi Holliday","link":"https://www.mimiholliday.com/","desc":"Mimi prides itself on its fun, girl-friendly ethos with a focus on exceptional fit. The brand helped to revolutionize the luxury lingerie landscape and took it outside the long accepted norm.","img":"https://blog.scaredpanties.com/content/images/2019/12/Mimi-Holliday-Lingerie.jpg","origin":"UK","originCode":"GBR","fav":false,"tags":["Lingerie","Hosiery","Swimwear","Large cup"]},{"title":"Verdian","link":"https://www.verdian.no/","desc":"Comfy bralettes, briefs, and bodysuits for everyday wear made of thin, breathable mesh and soft cotton. The brand offers custom sizing at no extra cost. ","img":"https://blog.scaredpanties.com/content/images/2019/12/Verdian-Lingerie-2.jpg","origin":"Norway","originCode":"NOR","fav":true,"tags":["Lingerie","Tailored"]},{"title":"Morgan Lane","link":"https://www.morgan-lane.com/","desc":"Playful luxury lifestyle pieces of silk, lace, and cashmere with hand drawn prints and embroideries doubling as lingerie/sleepwear and outerwear. ","img":"https://blog.scaredpanties.com/content/images/2019/12/Morgan-Lane-Lingerie.jpg","origin":"USA","originCode":"USA","fav":false,"tags":["Lingerie","Sleep/Lounge","Swimwear","Clothes","Small cup","Large cup"]},{"title":"Myla London","link":"https://www.myla.com/","desc":"Feminine timeless designs for everyday wear crafted of luxurious fabrics, such as French Leavers lace, stretch silk and soft, fine tulles with subtle detailing, delicate embroideries and appliques.","img":"https://blog.scaredpanties.com/content/images/2019/12/Myla-London-Lingerie-1.jpg","origin":"UK","originCode":"GBR","fav":true,"tags":["Lingerie","Sleep/Lounge","Clothes","Hosiery","Large cup"]},{"title":"Naja","link":"https://www.naja.co/","desc":"Lingerie brand seeking to empower women instead of objectifying them produces handmade pieces with great attention to detail and helps women in need.","img":"https://blog.scaredpanties.com/content/images/2019/12/Naja-Lingerie.jpg","origin":"USA","originCode":"USA","fav":false,"tags":["Lingerie","Clothes","Swimwear","Small cup","Large cup"]},{"title":"Nina and The Wolf","link":"http://www.ninaandthewolf.com/","desc":"The brand offers both romantic Nina and provocative Wolf styles of lingerie and loungewear made of silk, lace and velvet, decorated with straps. ","img":"https://blog.scaredpanties.com/content/images/2019/12/Nina-and-The-Wolf-Lingerie-1.jpg","origin":"Switzerland","originCode":"CHE","fav":true,"tags":["Lingerie","Sleep/Lounge"]},{"title":"Nymphea Lingerie Couture","link":"https://www.nymphealingerie.com/","desc":"Haute couture lingerie decorated with embroidery and beading where manual work plays a role of primary importance with vintage vibe of aristocracy and romantic atmosphere.","img":"https://blog.scaredpanties.com/content/images/2019/12/Nymphea-Lingerie-2.jpg","origin":"Italy","originCode":"ITA","fav":true,"tags":["Lingerie"]},{"title":"Only Hearts","link":"https://www.onlyhearts.com/","desc":"Sensuous lingerie from sexy sweet undies and bralettes to sleepwear, lounge and wear-anywhere wardrobe staples made in NY of local, deadstock and certified made in green textiles.","img":"https://blog.scaredpanties.com/content/images/2019/12/Only-Hearts-Lingerie.jpg","origin":"USA","originCode":"USA","fav":false,"tags":["Lingerie","Sleep/Lounge","Clothes","Small cup"]},{"title":"Pattricia A.Garde","link":"https://www.pattriciaagarde.com/","desc":"The brand features feminine lingerie and loungewear with lace inserts, with lots of hand-dyed eyelash lace, and a variety of lingerie-as-outerwear pieces.","img":"https://blog.scaredpanties.com/content/images/2019/12/Pattricia-A-Garde-Lingerie-1.jpg","origin":"Thailand","originCode":"THA","fav":true,"tags":["Lingerie","Sleep/Lounge","Clothes","Small cup"]},{"title":"Pillowbook","link":"http://www.love-pillowbook.com/","desc":"Silk lingerie featuring modernized interpretations of traditional Chinese styles and offering bralettes for petite busts as well as luxurious loungewear. Offers made-to-measure pieces at no extra cost.","img":"https://blog.scaredpanties.com/content/images/2019/12/Pillowbook-Lingerie-1.jpg","origin":"China","originCode":"CHN","fav":true,"tags":["Lingerie","Sleep/Lounge","Clothes","Small cup","Tailored"]},{"title":"Playful Promises","link":"https://www.playfulpromises.com/","desc":"The brand mixes quirky, directional design with all things playful, flirty and even a little bit dirty for a wide range of sizes split between core, curve and fuller bust. ","img":"https://blog.scaredpanties.com/content/images/2019/12/Playful-Promises-Lingerie.jpg","origin":"UK","originCode":"GBR","fav":false,"tags":["Lingerie","Sleep/Lounge","Accessories","Hosiery","Swimwear","Small cup","Large cup"]},{"title":"Shur Shur","link":"https://shurshur.com/","desc":"Brand aims to bring belt stockings back to everyday life. Upper rims of signature styles have bright color hidden from curious eyes, while the main color matches the dress code. ","img":"https://blog.scaredpanties.com/content/images/2019/12/Shur-Shur-Stockings-3.jpg","origin":"Ukraine","originCode":"UKR","fav":true,"tags":["Hosiery"]},{"title":"Sofia Luzon","link":"https://www.sofia-luzon.com/","desc":"Lingerie handmade to order using carefully selected fabrics and couture techniques, designs feature intricate combinations of laces and silk. Sizes start at 32A. Custom modifications and bespoke orders are available upon request.","img":"https://blog.scaredpanties.com/content/images/2019/12/Sofia-Luzon-Lingerie-1.jpg","origin":"Sweden","originCode":"SWE","fav":true,"tags":["Lingerie","Sleep/Lounge","Small cup"]},{"title":"Sonata London","link":"https://www.sonatalondon.com/","desc":"The brand offers lingerie, nightwear, and clothes made of luxurious silk chiffons, satins and lace. The brand\'s signature pieces are lace bodysuits. Sizing is flexible with adjustments made by request at no extra cost.","img":"https://blog.scaredpanties.com/content/images/2019/12/Sonata-London-Lingerie-1.jpg","origin":"UK","originCode":"GBR","fav":false,"tags":["Lingerie","Sleep/Lounge","Clothes","Accessories","Tailored"]},{"title":"Studio Pia","link":"https://www.studiopia.co.uk/","desc":"Brand with a focus on fashion-led, creative design where rich colours and textures meet striking shapes. Garments are crafted from cruelty-free silk and tulle with original embroideries.","img":"https://blog.scaredpanties.com/content/images/2019/12/Studio-Pia-Lingerie-1.jpg","origin":"UK","originCode":"GBR","fav":true,"tags":["Lingerie","Accessories","Large cup"]},{"title":"Taryn Winters","link":"https://tarynwinters.com/","desc":"See-through lingerie of delicate mesh and lace, featuring exquisite embroidery with beading and sequins on its most luxury pieces, and laconic sheer loungewear. ","img":"https://blog.scaredpanties.com/content/images/2019/12/Taryn-Winters-Lingerie-1.jpg","origin":"USA","originCode":"USA","fav":true,"tags":["Lingerie","Sleep/Lounge"]},{"title":"The End Lingerie","link":"https://theendlabel.com/","desc":"Bold and insolent lingerie made of organic cotton and decorated with faux piercing and cutouts. Used to produce also swimwear in the same style, some styles are still available on the website.","img":"https://blog.scaredpanties.com/content/images/2019/12/The-End-Lingerie-1.jpg","origin":"USA","originCode":"USA","fav":true,"tags":["Lingerie","Swimwear","Accessories","Small cup"]},{"title":"Thistle and Spire","link":"https://www.thistleandspire.com/","desc":"\\"Show-stopping pieces at a price & quality you can\'t beat\\" with signature v-wire, cutouts, strappy designs, lace, and embroidered see-through fabrics.","img":"https://blog.scaredpanties.com/content/images/2019/12/Thistle-and_spire-Lingerie.jpg","origin":"USA","originCode":"USA","fav":false,"tags":["Lingerie","Sleep/Lounge","Hosiery","Accessories","Small cup","Large cup"]},{"title":"Tisja Damen","link":"https://tisjadamen.com/home/","desc":"Refined luxury lingerie with non-conventional designs made of Italian Leavers lace, Swiss embroidered tulle, french Chantilly lace, silk straps and golden trims. Sizes start from 32A to 36DD.","img":"https://blog.scaredpanties.com/content/images/2019/12/Tisja-Damen-Lingerie-1.jpg","origin":"Netherlands","originCode":"NLD","fav":true,"tags":["Lingerie","Sleep/Lounge","Accessories","Small cup","Large cup"]},{"title":"To be woman","link":"http://www.tobewoman.shop/","desc":"Elegant (and sometimes funny) loungewear by the brand with big deal of humour and self-irony alongside with beautiful art directing. Great accessories collaborations too.","img":"https://blog.scaredpanties.com/content/images/2019/12/To-be-woman-Loungewear.jpg","origin":"Russia","originCode":"RUS","fav":true,"tags":["Sleep/Lounge","Clothes","Accessories"]},{"title":"Trashy Diva","link":"https://trashydivalingerie.com/","desc":"Designed in New Orleans and based on original vintage loungewear pieces, the brand evokes the golden age of Hollywood glamour for both boudoir and cocktail occasions.","img":"https://blog.scaredpanties.com/content/images/2019/12/Trashy-Diva-Lingerie.jpg","origin":"USA","originCode":"USA","fav":false,"tags":["Sleep/Lounge"]},{"title":"Uye Surana","link":"https://www.uyesurana.com/","desc":"Comfy wireless lingerie with a wide size range from 28A through 42H. Features styles made of bamboo jersey, lace, silk, and mesh, and well-known for its photorealistic hand-printed designs.","img":"https://blog.scaredpanties.com/content/images/2019/12/Uye-Surana-Lingerie-1.jpg","origin":"USA","originCode":"USA","fav":false,"tags":["Lingerie","Hosiery","Sleep/Lounge","Small cup","Large cup"]},{"title":"What Katie Did","link":"https://www.whatkatiedid.com/","desc":"Vintage-styled lingerie with vibe of 1950s for everyday wear. The brand\'s line features a wide variety of hosiery, especially seamed and colourful stockings, lingerie, shapewear, and loungewear.","img":"https://blog.scaredpanties.com/content/images/2019/12/What-Katie-Did-Stockings-1.jpg","origin":"USA","originCode":"USA","fav":true,"tags":["Lingerie","Sleep/Lounge","Corsets","Hosiery","Accessories","Small cup","Large cup"]}]')}},[[165,1,2]]]);
//# sourceMappingURL=main.776831cf.chunk.js.map