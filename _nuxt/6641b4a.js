(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2],{221:function(t,e,o){var content=o(228);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(53).default)("1e09b0de",content,!0,{sourceMap:!1})},227:function(t,e,o){"use strict";o(221)},228:function(t,e,o){var r=o(52)(!1);r.push([t.i,'.favourites[data-v-744e90ee]{display:flex;width:80%;height:100%;flex-direction:column;overflow-y:scroll;overflow-x:hidden}.favourites h3[data-v-744e90ee]{font-family:"Orbitron",sans-serif;color:#dddcc6;margin-bottom:10px}.favourites .favourites__empty[data-v-744e90ee]{margin:28px 0}.favourites .favourites__item[data-v-744e90ee]{display:flex;flex-direction:row;justify-content:space-between;margin:15px 0}.favourites .favourites__item img[data-v-744e90ee]{width:30%;-o-object-fit:contain;object-fit:contain}.favourites .favourites__item i[data-v-744e90ee]{color:#dddcc6;margin-right:20px}.favourites .favourites__item .favourites__description[data-v-744e90ee]{margin:0 20px;padding:0 10px;width:65%}.favourites .favourites__item .favourites__description .favourites__description_text p[data-v-744e90ee]{font-family:"Lato",sans-serif;color:#c0bca8;line-height:1.5;font-weight:400}',""]),t.exports=r},235:function(t,e,o){"use strict";o.r(e);o(119);var r=o(88),n={data:function(){return{favourites:[],empty:""}},mounted:function(){this.favourites=Object(r.getFavourites)(),this.favourites.length||(this.empty="Nothing here")},methods:{removeFromFavourites:function(t){var e=t.target.closest(".favourites__item").dataset.id;this.favourites.splice(e,1),localStorage.favourites=JSON.stringify(this.favourites)}}},f=(o(227),o(29)),component=Object(f.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"favourites"},[t.empty?o("div",{staticClass:"favourites__empty"},[o("h3",[t._v(t._s(t.empty))])]):t._e(),t._v(" "),t._l(t.favourites,(function(e,r){return o("div",{key:r,staticClass:"favourites__item",attrs:{"data-id":r}},[o("img",{attrs:{src:e.links[0].href}}),t._v(" "),o("div",{staticClass:"favourites__description"},[o("h3",[t._v(t._s(e.data[0].title))]),t._v(" "),o("div",{staticClass:"favourites__description_text"},[o("p",{domProps:{innerHTML:t._s(e.data[0].description)}})])]),t._v(" "),o("i",{staticClass:"fas fa-trash",on:{click:t.removeFromFavourites}})])}))],2)}),[],!1,null,"744e90ee",null);e.default=component.exports},239:function(t,e,o){"use strict";o.r(e);var r={},n=o(29),component=Object(n.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("Favourites")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Favourites:o(235).default})}}]);