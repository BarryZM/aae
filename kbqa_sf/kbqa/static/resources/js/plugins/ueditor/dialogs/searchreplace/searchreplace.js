function clickHandler(e,t,a){for(var r=0,c=e.length;r<c;r++)e[r].className="";a.className="focus";for(var n=a.getAttribute("tabSrc"),s=0,i=t.length;s<i;s++){var o=t[s],l=o.getAttribute("id");o.style.zIndex=l!=n?1:200}}function switchTab(e){for(var t=$G(e).children,a=t[0].children,r=t[1].children,c=0,n=a.length;c<n;c++){var s=a[c];"focus"===s.className&&clickHandler(a,r,s),s.onclick=function(){clickHandler(a,r,this)}}}function getMatchCase(e){return!!$G(e).checked}editor.firstForSR=0,editor.currentRangeForSR=null,$G("searchtab").onmousedown=function(){$G("search-msg").innerHTML="",$G("replace-msg").innerHTML=""},$G("nextFindBtn").onclick=function(e,t,a){var r,c=$G("findtxt").value;if(!c)return!1;if(r={searchStr:c,dir:1,casesensitive:getMatchCase("matchCase")},!frCommond(r)){var n=editor.selection.getRange().createBookmark();$G("search-msg").innerHTML=lang.getEnd,editor.selection.getRange().moveToBookmark(n).select()}},$G("nextReplaceBtn").onclick=function(e,t,a){var r,c=$G("findtxt1").value;if(!c)return!1;r={searchStr:c,dir:1,casesensitive:getMatchCase("matchCase1")},frCommond(r)},$G("preFindBtn").onclick=function(e,t,a){var r,c=$G("findtxt").value;if(!c)return!1;r={searchStr:c,dir:-1,casesensitive:getMatchCase("matchCase")},frCommond(r)||($G("search-msg").innerHTML=lang.getStart)},$G("preReplaceBtn").onclick=function(e,t,a){var r,c=$G("findtxt1").value;if(!c)return!1;r={searchStr:c,dir:-1,casesensitive:getMatchCase("matchCase1")},frCommond(r)},$G("repalceBtn").onclick=function(){editor.trigger("clearLastSearchResult");var e,t=$G("findtxt1").value.replace(/^\s|\s$/g,""),a=$G("replacetxt").value.replace(/^\s|\s$/g,"");return!!t&&(!(t==a||!getMatchCase("matchCase1")&&t.toLowerCase()==a.toLowerCase())&&(e={searchStr:t,dir:1,casesensitive:getMatchCase("matchCase1"),replaceStr:a},void frCommond(e)))},$G("repalceAllBtn").onclick=function(){var e,t=$G("findtxt1").value.replace(/^\s|\s$/g,""),a=$G("replacetxt").value.replace(/^\s|\s$/g,"");if(!t)return!1;if(t==a||!getMatchCase("matchCase1")&&t.toLowerCase()==a.toLowerCase())return!1;e={searchStr:t,casesensitive:getMatchCase("matchCase1"),replaceStr:a,all:!0};var r=frCommond(e);r&&($G("replace-msg").innerHTML=lang.countMsg.replace("{#count}",r))};var frCommond=function(e){return editor.execCommand("searchreplace",e)};switchTab("searchtab"),dialog.onclose=function(){editor.trigger("clearLastSearchResult")};