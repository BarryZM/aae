!function(){"use strict";function e(n,t,e,o){var i=this;i.title="NoticeListController",i.mediaList=[],i.init=function(){$("#displayQuestionPanel").height($(window).height()-$("#questionPanel").height()-30),angular.element(e).on("resize",function(){$("#displayQuestionPanel").height($(window).height()-$("#questionPanel").height()-30)}),o.one("/qac/all_classify").get().then(function(e){i.categoryList=e})},i.init(),i.replaceHtmlCode=function(e){return e.replace(/\r\n/g,"<br/>").replace(/\n/g,"<br/>").replace(/<script>/g,"").replace(/<\/script>/g,"")},i.submitQuestion=function(){if(i.question){i.mediaList.push({type:"Q",content:i.replaceHtmlCode(i.question)}),t(function(){$("#displayQuestionPanel").animate({scrollTop:$("#displayQuestionPanel")[0].scrollHeight},500)},10);var e={q:i.replaceHtmlCode(i.question)},n=[];o.all("/replier/ask").post(e).then(function(e){e.q_a_guess?_.forEach(e.q_a_guess,function(e){n.push({title:e[0],content:e[1],tagged:!1})}):e.a&&n.push({content:e.a}),i.mediaList.push({type:"A",category:e.c,items:n,question:i.replaceHtmlCode(i.question)}),i.question="",t(function(){$("#displayQuestionPanel").animate({scrollTop:$("#displayQuestionPanel")[0].scrollHeight},500)},10)})}else $.notifyWarning("请输入您的问题哦。")},$("#askQuestion").keydown(function(e){e.ctrlKey&&13==e.keyCode?(i.question=i.question+"\n",n.$apply()):13==e.keyCode&&i.submitQuestion()}),i.taggingAnswer=function(n,t){var e=[{q:n.question,a:t.content,c:n.category}];o.all("/qac/record").post(e).then(function(e){"success"==e?(_.forEach(n.items,function(e){e.tagged=!1}),t.tagged=!0):$.notifyError("标注问题的正确答案 操作失败。")})},i.reviseAnswer=function(e,n){i.answer={title:n.title,content:n.content,category:e.category},$("#reviseAnswerModal").modal("show")},i.doReviseAnswer=function(){var e=[{q:i.answer.title,a:i.replaceHtmlCode(i.answer.content),c:i.answer.category}];o.all("/qac/record").post(e).then(function(e){"success"==e?($("#reviseAnswerModal").modal("hide"),i.startStudyOnLine()):$.notifyError("修订问题答案 操作失败。")})},i.addNewAnswer=function(e){i.newAnswer={title:e.question,content:"",category:"QA_talk"},$("#addNewAnswerModal").modal("show")},i.doAddNewAnswer=function(){if(i.newAnswer.content)if(i.newAnswer.category){var e=[{q:i.replaceHtmlCode(i.newAnswer.title),a:i.replaceHtmlCode(i.newAnswer.content),c:i.newAnswer.category}];o.all("/qac/record").post(e).then(function(e){"success"==e?($("#addNewAnswerModal").modal("hide"),i.startStudyOnLine()):$.notifyError("添加新答案 操作失败。")})}else $.notifyWarning("请选择类别");else $.notifyWarning("请输入问题的答案")},i.doStudying=!1,i.startStudyOnLine=function(){i.doStudying=!0,o.one("/qac/learn/batch").get().then(function(e){"success"==e?$.notifySuccess("在线学习已完成。"):$.notifyError("没有需要学习的内容。"),i.doStudying=!1})}}angular.module("app.dashboard").controller("DashboardController",e),e.$inject=["$scope","$timeout","$window","Restangular"]}();