/*! For license information please see components-ListItem-ListItem-stories.ea141bef.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_storybook=self.webpackChunkreact_storybook||[]).push([[827],{"./src/components/ListItem/ListItem.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ListItem_stories});var Heart=__webpack_require__("./src/components/Heart/Heart.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ListItem_ListItem(_ref){let{isFavorite=!1,item,onAddItem,onRemoveItem}=_ref;const{name,sprites}=item,sprite=sprites.other["official-artwork"].front_default;return(0,jsx_runtime.jsxs)("li",{className:"list-item","data-testid":"list-item-".concat(item.id),children:[(0,jsx_runtime.jsx)("div",{className:"list-item-image-wrapper",children:(0,jsx_runtime.jsx)("img",{alt:name,className:"list-item-image",src:sprite})}),(0,jsx_runtime.jsx)("p",{children:name}),(0,jsx_runtime.jsx)("div",{className:"list-item-heart-wrapper",children:(0,jsx_runtime.jsx)(Heart.A,{onClick:()=>{isFavorite?onRemoveItem&&onRemoveItem(item):onAddItem&&onAddItem(item)},selected:isFavorite,testId:"heart-".concat(item.id)})})]})}const components_ListItem_ListItem=ListItem_ListItem;ListItem_ListItem.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{isFavorite:{defaultValue:{value:"false",computed:!1},required:!1}}};const ListItem_stories={title:"Components/ListItem",component:components_ListItem_ListItem,argTypes:{isFavorite:{control:"boolean",defaultValue:!1},item:{control:"object",defaultValue:{id:1,name:"bulbasaur",sprites:{other:{"official-artwork":{front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"}}}}},onAddItem:{action:"onAddItem"},onRemoveItem:{action:"onRemoveItem"}}},Default=(args=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(components_ListItem_ListItem,{...args})})).bind({}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <div>\r\n    <ListItem {...args} />\r\n  </div>",...Default.parameters?.docs?.source}}}},"./src/components/Heart/Heart.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Heart_Heart});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Heart_Heart(_ref){let{onClick,selected=!1,testId="heart"}=_ref;const handleClick=(0,react.useCallback)((()=>{onClick&&onClick()}),[onClick]);return(0,jsx_runtime.jsx)("svg",{className:"heart".concat(selected?" heart-selected":""),"data-testid":testId,onClick:handleClick,version:"1.1",viewBox:"0 0 472.7 472.7",children:(0,jsx_runtime.jsx)("g",{children:(0,jsx_runtime.jsx)("path",{d:"M433.5,67c-25.3-25.3-59-39.3-94.8-39.3s-69.6,14-94.9,39.4l-7.3,7.3l-7.5-7.5\r c-25.4-25.4-59.1-39.4-95-39.4c-35.8,0-69.4,13.9-94.7,39.3C13.9,92.2,0,125.9,0,161.7s14,69.5,39.4,94.8l182.7,182.7\r c3.8,3.8,9,6,14.5,6c5.4,0,10.6-2.2,14.5-6l182.2-182.4c25.4-25.4,39.3-59.1,39.4-94.9S458.8,92.4,433.5,67z M132.5,117.2\r c-23.9,0-43.4,19.5-43.4,43.4c0,11-8.9,19.9-19.9,19.9s-19.9-8.9-19.9-19.9c0-45.8,37.3-83.1,83.1-83.1c11,0,19.9,8.9,19.9,19.9\r C152.4,108.4,143.5,117.2,132.5,117.2z"})})})}const components_Heart_Heart=Heart_Heart;Heart_Heart.__docgenInfo={description:"",methods:[],displayName:"Heart",props:{selected:{defaultValue:{value:"false",computed:!1},required:!1},testId:{defaultValue:{value:"'heart'",computed:!1},required:!1}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);