(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c2a2019"],{"0094":function(e,t,a){},3584:function(e,t,a){"use strict";a("7dd2")},"3bb4":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-container"},[a("div",[e._v("添加实体")]),1==e.step?a("el-form",{ref:"form",staticClass:"form",attrs:{model:e.form,rules:e.formRules,"label-width":"200px"}},[a("el-form-item",{attrs:{prop:"labels",label:"选择知识图谱项目："}},[a("el-select",{ref:"name",staticStyle:{width:"400px"},attrs:{placeholder:"请选择知识图谱项目"},on:{change:e.selectChange},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}},e._l(this.$root.projects,(function(e,t){return a("el-option",{key:"ops1"+t,attrs:{label:e.name,value:e.name}})})),1),a("el-button",{staticStyle:{width:"50px"},attrs:{type:"text",icon:"el-icon-plus"},on:{click:function(t){e.showEx=!0}}})],1),a("el-form-item",{attrs:{prop:"labels",label:"请选择知识图谱子任务："}},[a("el-select",{ref:"rw_name",staticStyle:{width:"400px"},attrs:{placeholder:"请选择知识图谱项目子任务"},model:{value:e.form.rw_name,callback:function(t){e.$set(e.form,"rw_name",t)},expression:"form.rw_name"}},e._l(e.task,(function(e,t){return a("el-option",{key:"ops2"+t,attrs:{label:e,value:e}})})),1),a("el-button",{staticStyle:{width:"50px"},attrs:{type:"text"}})],1),e._l(e.exArr,(function(t,n){return a("el-form-item",{key:"shiti"+n,attrs:{prop:t.key,label:t.key}},e._l(t.value,(function(n,i){return a("div",{key:"indexx"+i},[a("el-input",{ref:"item.value[indexx]",refInFor:!0,staticStyle:{width:"400px","margin-top":"5px"},attrs:{placeholder:"请输入"+t.key},model:{value:t.value[i],callback:function(a){e.$set(t.value,i,a)},expression:"item.value[indexx]"}}),a("el-button",0==i?{staticStyle:{width:"50px"},attrs:{type:"text",icon:"el-icon-plus"},on:{click:function(e){return t.value.push("")}}}:{staticStyle:{width:"50px"},attrs:{type:"text"}})],1)})),0)})),a("el-form-item",{attrs:{prop:e.attObj.key,label:e.attObj.key}},e._l(e.attObj.value,(function(t,n){return a("div",{key:"indexx"+n},[a("el-select",{ref:"attObj.value[indexx].select",refInFor:!0,staticStyle:{width:"400px","margin-top":"5px"},attrs:{placeholder:"请选择"},model:{value:e.attObj.value[n].select,callback:function(t){e.$set(e.attObj.value[n],"select",t)},expression:"attObj.value[indexx].select"}},e._l(e.arr_arr,(function(e,t){return a("el-option",{key:"ops2"+t,attrs:{label:e,value:e}})})),1),a("el-button",0==n?{staticStyle:{width:"50px"},attrs:{type:"text",icon:"el-icon-plus"},on:{click:function(t){return e.attObj.value.push({select:"",input:""})}}}:{staticStyle:{width:"50px"},attrs:{type:"text"}}),a("el-input",{ref:"attObj.value[indexx].input",refInFor:!0,staticStyle:{width:"400px","margin-top":"5px"},attrs:{placeholder:"请输入"+e.attObj.key},model:{value:e.attObj.value[n].input,callback:function(t){e.$set(e.attObj.value[n],"input",t)},expression:"attObj.value[indexx].input"}}),a("el-button",{staticStyle:{width:"50px"},attrs:{type:"text"}})],1)})),0),e._l(e.fileArr,(function(t,n){return a("el-form-item",{key:"file"+n,attrs:{prop:t.key,label:t.key}},[a("el-input",{ref:"item.value",refInFor:!0,staticStyle:{width:"400px","margin-top":"5px"},attrs:{placeholder:"请输入"+t.key},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}})],1)})),a("el-form-item",[a("el-upload",{ref:"upload",staticClass:"upload-demo",staticStyle:{"text-align":"left"},attrs:{action:"","on-change":e.handleChange,"on-exceed":e.handleExceed,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,"file-list":e.fileListUpload,limit:1,accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel","auto-upload":!1}},[a("el-button",{attrs:{type:"primary"}},[e._v(" 导入数据 ")])],1),a("el-button",{staticClass:"inline-block",on:{click:e.onPreview}},[e._v("保存数据")])],1)],2):e._e(),2==e.step?a("el-form",{ref:"form",staticClass:"form",staticStyle:{width:"400px"},attrs:{model:e.form,rules:e.formRules}},[e._l(e.fileArr,(function(t,n){return a("el-tag",{key:"item"+n,staticClass:"tag"},[e._v(" "+e._s(t.value)+" ")])})),e.addNewType?a("el-input",{staticStyle:{width:"250px",margin:"4px","margin-left":"20px"},attrs:{placeholder:"请输入名称 回车完成"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitType(t)}},model:{value:e.newType,callback:function(t){e.newType=t},expression:"newType"}}):e._e(),a("el-tag",{staticStyle:{margin:"4px","margin-left":"20px",width:"250px","text-align":"center"},on:{click:function(t){return e.addTypeClick()}}},[e._v(" + 添加 ")]),a("el-form-item",[a("el-button",{staticStyle:{width:"250px",margin:"4px","margin-left":"20px"},attrs:{type:"primary"},on:{click:e.onPreview}},[e._v("完成")])],1)],2):e._e()],1)},i=[],r=(a("d3b7"),a("159b"),a("99af"),a("b0c0"),a("498a"),a("e9c4"),a("ace4"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("caf6")),l=a("5c96"),s=a("ed81"),o={data:function(){var e=function(e,t,a){t.length<1?a(new Error("请选择属性/节点")):a()};return{step:1,form:{name:"",labels:"",zlabels:"",des:"",media:"",keywords:"",exclude_words:""},data_list:[],sIndex:0,canShow:!1,ops1:["人工智能","信息技术","知识管理","互联网"],ops2:["人物","文艺工作者","运动员"],task:[],fileListUpload:[],fileTemp:null,fileArr:[],showEx:!1,exArr:[{key:"子项目名称",value:[""]},{key:"添加实体标签",value:[""]}],attObj:{key:"属性概念",value:[{select:"",input:""}]},arr_arr:[],formRules:{labels:[{required:!0,trigger:"blur",validator:e}]},dialogTableVisible:!1,briefing_report:[],addNewType:!1,newType:""}},computed:{},mounted:function(){this.data_list=s.entity;var e=[];this.data_list=this.$root.entity.forEach((function(t){e=e.concat(t.items)})),this.arr_arr=e},methods:{selectChange:function(e){var t=this;this.$root.projects.forEach((function(a){a.name==e&&(t.task=a.task)}))},selectChanged:function(e){this.sIndex=e,this.canShow=!0;var t=[];this.data_list[e].items.forEach((function(e){t.push(e)})),this.fileArr=t},addTypeClick:function(){this.addNewType?this.submitType():this.addNewType=!0},submitType:function(){this.newType.trim().length>0&&(this.fileArr.push({key:this.newType,value:""}),this.newType="",this.addNewType=!1)},getTimeStr:function(e){var t=new Date(Date.parse(e));return t.toLocaleString("zh",{hour12:!1})},addclick:function(){this.$router.push("/custom/bs")},onPreview:function(){alert("完成")},onSubmit:function(){var e=this;Object(r["briefingMeta"])(this.form).then((function(t){0===t.code?(Object(l["Message"])({message:"定制成功",type:"success",duration:5e3}),e.dialogTableVisible=!1):Object(l["Message"])({message:t.error,type:"error",duration:5e3})})).catch((function(e){console.log("error=="+JSON.stringify(e))}))},handleRemove:function(e,t){this.fileTemp=null},beforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))},handleExceed:function(e,t){this.$message.warning("当前限制选择 1 个文件，本次选择了 ".concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))},handleChange:function(e,t){this.fileTemp=e.raw,this.fileTemp?"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"==this.fileTemp.type||"application/vnd.ms-excel"==this.fileTemp.type?this.importfile(this.fileTemp):this.$message({type:"warning",message:"附件格式错误，请删除后重新上传！"}):this.$message({type:"warning",message:"请上传附件！"})},importfile:function(e){var t=this;this.file=event.currentTarget.files[0];var n=!1,i=this.file,r=new FileReader;FileReader.prototype.readAsBinaryString=function(e){var n,i,r="",l=!1,s=new FileReader;s.onload=function(e){for(var o=new Uint8Array(s.result),c=o.byteLength,u=0;u<c;u++)r+=String.fromCharCode(o[u]);var p=a("25ca");return n=l?p.read(btoa(fixdata(r)),{type:"base64"}):p.read(r,{type:"binary"}),i=p.utils.sheet_to_json(n.Sheets[n.SheetNames[0]]),t.fileArr=i,i},s.readAsArrayBuffer(e)},n?r.readAsArrayBuffer(i):r.readAsBinaryString(i)}}},c=o,u=(a("d72e"),a("3584"),a("2877")),p=Object(u["a"])(c,n,i,!1,null,"088ffc05",null);t["default"]=p.exports},"7dd2":function(e,t,a){},caf6:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"e",(function(){return r})),a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return s}));var n=a("b775");function i(e){return Object(n["a"])({url:"/api/users/login",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/api/users/verify_invitation",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/api/users/send_reg_code",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/api/users/register",method:"post",data:e})}},d72e:function(e,t,a){"use strict";a("0094")},ed81:function(e){e.exports=JSON.parse('{"entity":[{"name":"人物","items":["女艺人","男艺人","男歌手","女歌手","男子组合成员","女子组合成员","企业家","创业者","文艺工作者","运动员","商人","老师","医生","政治人物","律师","记者","虚拟人物","网红达人"]},{"name":"政治实体","items":["国籍","宗教团体","政府","政治团体","NGO组织"]},{"name":"组织","items":["公司企业组织","政府机构","教育机构","科研团体","乐队"]},{"name":"地理位置","items":["地标建筑","自然景观","旅游景点","天体","机场","高速","桥梁","行政区划"]},{"name":"作品","items":["综艺","电视剧","电影","动漫","MTV","报刊杂志","论文","软件程序","音乐作品","书籍","小说","诗歌","漫画","歌戏剧","歌舞剧","论文","杂志","报刊专栏","文章","软件程序","APP","游戏"]},{"name":"产品","items":["食品","菜谱","商品"]},{"name":"事件","items":["战争","地震","体育赛事","大型活动","音乐节","直播","飓风","灾害","灾难","马拉松","奥运会"]},{"name":"概念","items":["法律","政策","股票","专有名词","学术概念","技术概念","心理学","经济学","社会学"]}]}')}}]);