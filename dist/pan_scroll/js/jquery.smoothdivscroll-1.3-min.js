!function(t){t.widget("thomaskahn.smoothDivScroll",{options:{scrollingHotSpotLeftClass:"scrollingHotSpotLeft",scrollingHotSpotRightClass:"scrollingHotSpotRight",scrollableAreaClass:"scrollableArea",scrollWrapperClass:"scrollWrapper",hiddenOnStart:!1,getContentOnLoad:{},countOnlyClass:"",startAtElementId:"",hotSpotScrolling:!0,hotSpotScrollingStep:15,hotSpotScrollingInterval:10,hotSpotMouseDownSpeedBooster:3,visibleHotSpotBackgrounds:"hover",hotSpotsVisibleTime:5e3,easingAfterHotSpotScrolling:!0,easingAfterHotSpotScrollingDistance:10,easingAfterHotSpotScrollingDuration:300,easingAfterHotSpotScrollingFunction:"easeOutQuart",mousewheelScrolling:"",mousewheelScrollingStep:70,easingAfterMouseWheelScrolling:!0,easingAfterMouseWheelScrollingDuration:300,easingAfterMouseWheelScrollingFunction:"easeOutQuart",manualContinuousScrolling:!1,autoScrollingMode:"",autoScrollingDirection:"endlessLoopRight",autoScrollingStep:1,autoScrollingInterval:10,touchScrolling:!1,scrollToAnimationDuration:1e3,scrollToEasingFunction:"easeOutQuart"},_create:function(){var l=this,a=this.options,e=this.element;e.data("scrollWrapper",e.find("."+a.scrollWrapperClass)),e.data("scrollingHotSpotRight",e.find("."+a.scrollingHotSpotRightClass)),e.data("scrollingHotSpotLeft",e.find("."+a.scrollingHotSpotLeftClass)),e.data("scrollableArea",e.find("."+a.scrollableAreaClass)),e.data("scrollingHotSpotRight").length>0&&e.data("scrollingHotSpotRight").detach(),e.data("scrollingHotSpotLeft").length>0&&e.data("scrollingHotSpotLeft").detach(),0===e.data("scrollableArea").length&&0===e.data("scrollWrapper").length?(e.wrapInner("<div class='"+a.scrollableAreaClass+"'>").wrapInner("<div class='"+a.scrollWrapperClass+"'>"),e.data("scrollWrapper",e.find("."+a.scrollWrapperClass)),e.data("scrollableArea",e.find("."+a.scrollableAreaClass))):0===e.data("scrollWrapper").length?(e.wrapInner("<div class='"+a.scrollWrapperClass+"'>"),e.data("scrollWrapper",e.find("."+a.scrollWrapperClass))):0===e.data("scrollableArea").length&&(e.data("scrollWrapper").wrapInner("<div class='"+a.scrollableAreaClass+"'>"),e.data("scrollableArea",e.find("."+a.scrollableAreaClass))),0===e.data("scrollingHotSpotRight").length?(e.prepend("<div class='"+a.scrollingHotSpotRightClass+"'></div>"),e.data("scrollingHotSpotRight",e.find("."+a.scrollingHotSpotRightClass))):e.prepend(e.data("scrollingHotSpotRight")),0===e.data("scrollingHotSpotLeft").length?(e.prepend("<div class='"+a.scrollingHotSpotLeftClass+"'></div>"),e.data("scrollingHotSpotLeft",e.find("."+a.scrollingHotSpotLeftClass))):e.prepend(e.data("scrollingHotSpotLeft")),e.data("speedBooster",1),e.data("scrollXPos",0),e.data("hotSpotWidth",e.data("scrollingHotSpotLeft").innerWidth()),e.data("scrollableAreaWidth",0),e.data("startingPosition",0),e.data("rightScrollingInterval",null),e.data("leftScrollingInterval",null),e.data("autoScrollingInterval",null),e.data("hideHotSpotBackgroundsInterval",null),e.data("previousScrollLeft",0),e.data("pingPongDirection","right"),e.data("getNextElementWidth",!0),e.data("swapAt",null),e.data("startAtElementHasNotPassed",!0),e.data("swappedElement",null),e.data("originalElements",e.data("scrollableArea").children(a.countOnlyClass)),e.data("visible",!0),e.data("enabled",!0),e.data("scrollableAreaHeight",e.data("scrollableArea").height()),e.data("scrollerOffset",e.offset()),a.touchScrolling&&e.data("enabled")&&e.data("scrollWrapper").kinetic({y:!1,moved:function(t){a.manualContinuousScrolling&&(e.data("scrollWrapper").scrollLeft()<=0?l._checkContinuousSwapLeft():l._checkContinuousSwapRight())},stopped:function(t){e.data("scrollWrapper").stop(!0,!1),l.stopAutoScrolling()}}),e.data("scrollingHotSpotRight").bind("mousemove",function(t){if(a.hotSpotScrolling){var l=t.pageX-(this.offsetLeft+e.data("scrollerOffset").left);e.data("scrollXPos",Math.round(l/e.data("hotSpotWidth")*a.hotSpotScrollingStep)),(e.data("scrollXPos")===1/0||e.data("scrollXPos")<1)&&e.data("scrollXPos",1)}}),e.data("scrollingHotSpotRight").bind("mouseover",function(){a.hotSpotScrolling&&(e.data("scrollWrapper").stop(!0,!1),l.stopAutoScrolling(),e.data("rightScrollingInterval",setInterval(function(){e.data("scrollXPos")>0&&e.data("enabled")&&(e.data("scrollWrapper").scrollLeft(e.data("scrollWrapper").scrollLeft()+e.data("scrollXPos")*e.data("speedBooster")),a.manualContinuousScrolling&&l._checkContinuousSwapRight(),l._showHideHotSpots())},a.hotSpotScrollingInterval)),l._trigger("mouseOverRightHotSpot"))}),e.data("scrollingHotSpotRight").bind("mouseout",function(){a.hotSpotScrolling&&(clearInterval(e.data("rightScrollingInterval")),e.data("scrollXPos",0),a.easingAfterHotSpotScrolling&&e.data("enabled")&&e.data("scrollWrapper").animate({scrollLeft:e.data("scrollWrapper").scrollLeft()+a.easingAfterHotSpotScrollingDistance},{duration:a.easingAfterHotSpotScrollingDuration,easing:a.easingAfterHotSpotScrollingFunction}))}),e.data("scrollingHotSpotRight").bind("mousedown",function(){e.data("speedBooster",a.hotSpotMouseDownSpeedBooster)}),t("body").bind("mouseup",function(){e.data("speedBooster",1)}),e.data("scrollingHotSpotLeft").bind("mousemove",function(t){if(a.hotSpotScrolling){var l=this.offsetLeft+e.data("scrollerOffset").left+e.data("hotSpotWidth")-t.pageX;e.data("scrollXPos",Math.round(l/e.data("hotSpotWidth")*a.hotSpotScrollingStep)),(e.data("scrollXPos")===1/0||e.data("scrollXPos")<1)&&e.data("scrollXPos",1)}}),e.data("scrollingHotSpotLeft").bind("mouseover",function(){a.hotSpotScrolling&&(e.data("scrollWrapper").stop(!0,!1),l.stopAutoScrolling(),e.data("leftScrollingInterval",setInterval(function(){e.data("scrollXPos")>0&&e.data("enabled")&&(e.data("scrollWrapper").scrollLeft(e.data("scrollWrapper").scrollLeft()-e.data("scrollXPos")*e.data("speedBooster")),a.manualContinuousScrolling&&l._checkContinuousSwapLeft(),l._showHideHotSpots())},a.hotSpotScrollingInterval)),l._trigger("mouseOverLeftHotSpot"))}),e.data("scrollingHotSpotLeft").bind("mouseout",function(){a.hotSpotScrolling&&(clearInterval(e.data("leftScrollingInterval")),e.data("scrollXPos",0),a.easingAfterHotSpotScrolling&&e.data("enabled")&&e.data("scrollWrapper").animate({scrollLeft:e.data("scrollWrapper").scrollLeft()-a.easingAfterHotSpotScrollingDistance},{duration:a.easingAfterHotSpotScrollingDuration,easing:a.easingAfterHotSpotScrollingFunction}))}),e.data("scrollingHotSpotLeft").bind("mousedown",function(){e.data("speedBooster",a.hotSpotMouseDownSpeedBooster)}),e.data("scrollableArea").mousewheel(function(t,o,r,s){var n;e.data("enabled")&&a.mousewheelScrolling.length>0&&("vertical"===a.mousewheelScrolling&&0!==s?(l.stopAutoScrolling(),t.preventDefault(),n=Math.round(a.mousewheelScrollingStep*s*-1),l.move(n)):"horizontal"===a.mousewheelScrolling&&0!==r?(l.stopAutoScrolling(),t.preventDefault(),n=Math.round(a.mousewheelScrollingStep*r*-1),l.move(n)):"allDirections"===a.mousewheelScrolling&&(l.stopAutoScrolling(),t.preventDefault(),n=Math.round(a.mousewheelScrollingStep*o*-1),l.move(n)))}),a.mousewheelScrolling&&e.data("scrollingHotSpotLeft").add(e.data("scrollingHotSpotRight")).mousewheel(function(t){t.preventDefault()}),t(window).bind("resize",function(){l._showHideHotSpots(),l._trigger("windowResized")}),jQuery.isEmptyObject(a.getContentOnLoad)||l[a.getContentOnLoad.method](a.getContentOnLoad.content,a.getContentOnLoad.manipulationMethod,a.getContentOnLoad.addWhere,a.getContentOnLoad.filterTag),a.hiddenOnStart&&l.hide(),t(window).load(function(){if(a.hiddenOnStart||l.recalculateScrollableArea(),a.autoScrollingMode.length>0&&!a.hiddenOnStart&&l.startAutoScrolling(),"always"!==a.autoScrollingMode)switch(a.visibleHotSpotBackgrounds){case"always":l.showHotSpotBackgrounds();break;case"onStart":l.showHotSpotBackgrounds(),e.data("hideHotSpotBackgroundsInterval",setTimeout(function(){l.hideHotSpotBackgrounds(250)},a.hotSpotsVisibleTime));break;case"hover":e.mouseenter(function(t){a.hotSpotScrolling&&(t.stopPropagation(),l.showHotSpotBackgrounds(250))}).mouseleave(function(t){a.hotSpotScrolling&&(t.stopPropagation(),l.hideHotSpotBackgrounds(250))})}l._showHideHotSpots(),l._trigger("setupComplete")})},_setOption:function(t,l){var a=this.options,e=this.element;a[t]=l,"hotSpotScrolling"===t?!0===l?this._showHideHotSpots():(e.data("scrollingHotSpotLeft").hide(),e.data("scrollingHotSpotRight").hide()):"autoScrollingStep"===t||"easingAfterHotSpotScrollingDistance"===t||"easingAfterHotSpotScrollingDuration"===t||"easingAfterMouseWheelScrollingDuration"===t?a[t]=parseInt(l,10):"autoScrollingInterval"===t&&(a[t]=parseInt(l,10),this.startAutoScrolling())},showHotSpotBackgrounds:function(t){var l=this.element;this.option;void 0!==t?(l.data("scrollingHotSpotLeft").addClass("scrollingHotSpotLeftVisible"),l.data("scrollingHotSpotRight").addClass("scrollingHotSpotRightVisible"),l.data("scrollingHotSpotLeft").add(l.data("scrollingHotSpotRight")).fadeTo(t,.35)):(l.data("scrollingHotSpotLeft").addClass("scrollingHotSpotLeftVisible"),l.data("scrollingHotSpotLeft").removeAttr("style"),l.data("scrollingHotSpotRight").addClass("scrollingHotSpotRightVisible"),l.data("scrollingHotSpotRight").removeAttr("style")),this._showHideHotSpots()},hideHotSpotBackgrounds:function(t){var l=this.element;this.option;void 0!==t?(l.data("scrollingHotSpotLeft").fadeTo(t,0,function(){l.data("scrollingHotSpotLeft").removeClass("scrollingHotSpotLeftVisible")}),l.data("scrollingHotSpotRight").fadeTo(t,0,function(){l.data("scrollingHotSpotRight").removeClass("scrollingHotSpotRightVisible")})):(l.data("scrollingHotSpotLeft").removeClass("scrollingHotSpotLeftVisible").removeAttr("style"),l.data("scrollingHotSpotRight").removeClass("scrollingHotSpotRightVisible").removeAttr("style"))},_showHideHotSpots:function(){var t=this.element,l=this.options;l.hotSpotScrolling?l.manualContinuousScrolling&&l.hotSpotScrolling&&"always"!==l.autoScrollingMode?(t.data("scrollingHotSpotLeft").show(),t.data("scrollingHotSpotRight").show()):"always"!==l.autoScrollingMode&&l.hotSpotScrolling?t.data("scrollableAreaWidth")<=t.data("scrollWrapper").innerWidth()?(t.data("scrollingHotSpotLeft").hide(),t.data("scrollingHotSpotRight").hide()):0===t.data("scrollWrapper").scrollLeft()?(t.data("scrollingHotSpotLeft").hide(),t.data("scrollingHotSpotRight").show(),this._trigger("scrollerLeftLimitReached"),clearInterval(t.data("leftScrollingInterval")),t.data("leftScrollingInterval",null)):t.data("scrollableAreaWidth")<=t.data("scrollWrapper").innerWidth()+t.data("scrollWrapper").scrollLeft()?(t.data("scrollingHotSpotLeft").show(),t.data("scrollingHotSpotRight").hide(),this._trigger("scrollerRightLimitReached"),clearInterval(t.data("rightScrollingInterval")),t.data("rightScrollingInterval",null)):(t.data("scrollingHotSpotLeft").show(),t.data("scrollingHotSpotRight").show()):(t.data("scrollingHotSpotLeft").hide(),t.data("scrollingHotSpotRight").hide()):(t.data("scrollingHotSpotLeft").hide(),t.data("scrollingHotSpotRight").hide())},_setElementScrollPosition:function(l,a){var e=this.element,o=this.options,r=0;switch(l){case"first":return e.data("scrollXPos",0),!0;case"start":return!(""===o.startAtElementId||!e.data("scrollableArea").has("#"+o.startAtElementId))&&(r=t("#"+o.startAtElementId).position().left,e.data("scrollXPos",r),!0);case"last":return e.data("scrollXPos",e.data("scrollableAreaWidth")-e.data("scrollWrapper").innerWidth()),!0;case"number":return!isNaN(a)&&(r=e.data("scrollableArea").children(o.countOnlyClass).eq(a-1).position().left,e.data("scrollXPos",r),!0);case"id":return!!(a.length>0&&e.data("scrollableArea").has("#"+a))&&(r=t("#"+a).position().left,e.data("scrollXPos",r),!0);default:return!1}},jumpToElement:function(t,l){var a=this,e=this.element;if(e.data("enabled")&&a._setElementScrollPosition(t,l))switch(e.data("scrollWrapper").scrollLeft(e.data("scrollXPos")),a._showHideHotSpots(),t){case"first":a._trigger("jumpedToFirstElement");break;case"start":a._trigger("jumpedToStartElement");break;case"last":a._trigger("jumpedToLastElement");break;case"number":a._trigger("jumpedToElementNumber",null,{elementNumber:l});break;case"id":a._trigger("jumpedToElementId",null,{elementId:l})}},scrollToElement:function(t,l){var a=this,e=this.element,o=this.options,r=!1;e.data("enabled")&&a._setElementScrollPosition(t,l)&&(null!==e.data("autoScrollingInterval")&&(a.stopAutoScrolling(),r=!0),e.data("scrollWrapper").stop(!0,!1),e.data("scrollWrapper").animate({scrollLeft:e.data("scrollXPos")},{duration:o.scrollToAnimationDuration,easing:o.scrollToEasingFunction,complete:function(){switch(r&&a.startAutoScrolling(),a._showHideHotSpots(),t){case"first":a._trigger("scrolledToFirstElement");break;case"start":a._trigger("scrolledToStartElement");break;case"last":a._trigger("scrolledToLastElement");break;case"number":a._trigger("scrolledToElementNumber",null,{elementNumber:l});break;case"id":a._trigger("scrolledToElementId",null,{elementId:l})}}}))},move:function(t){var l=this,a=this.element,e=this.options;a.data("scrollWrapper").stop(!0,!0),(t<0&&a.data("scrollWrapper").scrollLeft()>0||t>0&&a.data("scrollableAreaWidth")>a.data("scrollWrapper").innerWidth()+a.data("scrollWrapper").scrollLeft())&&(e.easingAfterMouseWheelScrolling?a.data("scrollWrapper").animate({scrollLeft:a.data("scrollWrapper").scrollLeft()+t},{duration:e.easingAfterMouseWheelScrollingDuration,easing:e.easingAfterMouseWheelFunction,complete:function(){l._showHideHotSpots(),e.manualContinuousScrolling&&(t>0?l._checkContinuousSwapRight():l._checkContinuousSwapLeft())}}):(a.data("scrollWrapper").scrollLeft(a.data("scrollWrapper").scrollLeft()+t),l._showHideHotSpots(),e.manualContinuousScrolling&&(t>0?l._checkContinuousSwapRight():l._checkContinuousSwapLeft())))},getFlickrContent:function(l,a){var e=this,o=this.element;t.getJSON(l,function(l){var r,s=[{size:"small square",pixels:75,letter:"_s"},{size:"thumbnail",pixels:100,letter:"_t"},{size:"small",pixels:240,letter:"_m"},{size:"medium",pixels:500,letter:""},{size:"medium 640",pixels:640,letter:"_z"},{size:"large",pixels:1024,letter:"_b"}],n=[],i=[],c=l.items.length,d=0;function p(l){var a=o.data("scrollableAreaHeight")/l.height,e=Math.round(l.width*a),r=t(l).attr("src").split("/");r=r[r.length-1].split("."),t(l).attr("id",r[0]),t(l).css({height:o.data("scrollableAreaHeight"),width:e}),i.push(r[0]),n.push(l),d++}r=o.data("scrollableAreaHeight")<=75?0:o.data("scrollableAreaHeight")<=100?1:o.data("scrollableAreaHeight")<=240?2:o.data("scrollableAreaHeight")<=500?3:o.data("scrollableAreaHeight")<=640?4:5,t.each(l.items,function(l,g){!function l(r,g){var h=r.media.m;var u=h.replace("_m",s[g].letter);var S=t("<img />").attr("src",u);S.load(function(){if(this.height<o.data("scrollableAreaHeight")&&g+1<s.length?l(r,g+1):p(this),d===c){switch(a){case"addFirst":o.data("scrollableArea").children(":first").before(n);break;case"addLast":o.data("scrollableArea").children(":last").after(n);break;default:o.data("scrollableArea").html(n)}e.recalculateScrollableArea(),e._showHideHotSpots(),e._trigger("addedFlickrContent",null,{addedElementIds:i})}})}(g,r)})})},getAjaxContent:function(l,a,e){var o=this,r=this.element;t.ajaxSetup({cache:!1}),t.get(l,function(s){var n;switch(n=void 0!==e?e.length>0?t("<div>").html(s).find(e):l:s,a){case"addFirst":r.data("scrollableArea").children(":first").before(n);break;case"addLast":r.data("scrollableArea").children(":last").after(n);break;default:r.data("scrollableArea").html(n)}o.recalculateScrollableArea(),o._showHideHotSpots(),o._trigger("addedAjaxContent")})},getHtmlContent:function(l,a,e){var o,r=this.element;switch(o=void 0!==e&&e.length>0?t("<div>").html(l).find(e):l,a){case"addFirst":r.data("scrollableArea").children(":first").before(o);break;case"addLast":r.data("scrollableArea").children(":last").after(o);break;default:r.data("scrollableArea").html(o)}this.recalculateScrollableArea(),this._showHideHotSpots(),this._trigger("addedHtmlContent")},recalculateScrollableArea:function(){var l=0,a=!1,e=this.options,o=this.element;o.data("scrollableArea").children(e.countOnlyClass).each(function(){e.startAtElementId.length>0&&t(this).attr("id")===e.startAtElementId&&(o.data("startingPosition",l),a=!0),l+=t(this).outerWidth(!0)}),a||o.data("startAtElementId",""),o.data("scrollableAreaWidth",l),o.data("scrollableArea").width(o.data("scrollableAreaWidth")),o.data("scrollWrapper").scrollLeft(o.data("startingPosition")),o.data("scrollXPos",o.data("startingPosition"))},getScrollerOffset:function(){return this.element.data("scrollWrapper").scrollLeft()},stopAutoScrolling:function(){var t=this.element;null!==t.data("autoScrollingInterval")&&(clearInterval(t.data("autoScrollingInterval")),t.data("autoScrollingInterval",null),this._showHideHotSpots(),this._trigger("autoScrollingStopped"))},startAutoScrolling:function(){var t=this,l=this.element,a=this.options;l.data("enabled")&&(t._showHideHotSpots(),clearInterval(l.data("autoScrollingInterval")),l.data("autoScrollingInterval",null),t._trigger("autoScrollingStarted"),l.data("autoScrollingInterval",setInterval(function(){if(!l.data("visible")||l.data("scrollableAreaWidth")<=l.data("scrollWrapper").innerWidth())clearInterval(l.data("autoScrollingInterval")),l.data("autoScrollingInterval",null);else switch(l.data("previousScrollLeft",l.data("scrollWrapper").scrollLeft()),a.autoScrollingDirection){case"right":l.data("scrollWrapper").scrollLeft(l.data("scrollWrapper").scrollLeft()+a.autoScrollingStep),l.data("previousScrollLeft")===l.data("scrollWrapper").scrollLeft()&&(t._trigger("autoScrollingRightLimitReached"),clearInterval(l.data("autoScrollingInterval")),l.data("autoScrollingInterval",null),t._trigger("autoScrollingIntervalStopped"));break;case"left":l.data("scrollWrapper").scrollLeft(l.data("scrollWrapper").scrollLeft()-a.autoScrollingStep),l.data("previousScrollLeft")===l.data("scrollWrapper").scrollLeft()&&(t._trigger("autoScrollingLeftLimitReached"),clearInterval(l.data("autoScrollingInterval")),l.data("autoScrollingInterval",null),t._trigger("autoScrollingIntervalStopped"));break;case"backAndForth":"right"===l.data("pingPongDirection")?l.data("scrollWrapper").scrollLeft(l.data("scrollWrapper").scrollLeft()+a.autoScrollingStep):l.data("scrollWrapper").scrollLeft(l.data("scrollWrapper").scrollLeft()-a.autoScrollingStep),l.data("previousScrollLeft")===l.data("scrollWrapper").scrollLeft()&&("right"===l.data("pingPongDirection")?(l.data("pingPongDirection","left"),t._trigger("autoScrollingRightLimitReached")):(l.data("pingPongDirection","right"),t._trigger("autoScrollingLeftLimitReached")));break;case"endlessLoopRight":l.data("scrollWrapper").scrollLeft(l.data("scrollWrapper").scrollLeft()+a.autoScrollingStep),t._checkContinuousSwapRight();break;case"endlessLoopLeft":l.data("scrollWrapper").scrollLeft(l.data("scrollWrapper").scrollLeft()-a.autoScrollingStep),t._checkContinuousSwapLeft()}},a.autoScrollingInterval)))},_checkContinuousSwapRight:function(){var l=this.element,a=this.options;if(l.data("getNextElementWidth")&&(a.startAtElementId.length>0&&l.data("startAtElementHasNotPassed")?(l.data("swapAt",t("#"+a.startAtElementId).outerWidth(!0)),l.data("startAtElementHasNotPassed",!1)):l.data("swapAt",l.data("scrollableArea").children(":first").outerWidth(!0)),l.data("getNextElementWidth",!1)),l.data("swapAt")<=l.data("scrollWrapper").scrollLeft()){l.data("swappedElement",l.data("scrollableArea").children(":first").detach()),l.data("scrollableArea").append(l.data("swappedElement"));var e=l.data("scrollWrapper").scrollLeft();l.data("scrollWrapper").scrollLeft(e-l.data("swappedElement").outerWidth(!0)),l.data("getNextElementWidth",!0)}},_checkContinuousSwapLeft:function(){var l=this.element,a=this.options;l.data("getNextElementWidth")&&(a.startAtElementId.length>0&&l.data("startAtElementHasNotPassed")?(l.data("swapAt",t("#"+a.startAtElementId).outerWidth(!0)),l.data("startAtElementHasNotPassed",!1)):l.data("swapAt",l.data("scrollableArea").children(":first").outerWidth(!0)),l.data("getNextElementWidth",!1)),0===l.data("scrollWrapper").scrollLeft()&&(l.data("swappedElement",l.data("scrollableArea").children(":last").detach()),l.data("scrollableArea").prepend(l.data("swappedElement")),l.data("scrollWrapper").scrollLeft(l.data("scrollWrapper").scrollLeft()+l.data("swappedElement").outerWidth(!0)),l.data("getNextElementWidth",!0))},restoreOriginalElements:function(){var t=this.element;t.data("scrollableArea").html(t.data("originalElements")),this.recalculateScrollableArea(),this.jumpToElement("first")},show:function(){var t=this.element;t.data("visible",!0),t.show()},hide:function(){var t=this.element;t.data("visible",!1),t.hide()},enable:function(){var t=this.element;this.options.touchScrolling&&t.data("scrollWrapper").kinetic("attach"),t.data("enabled",!0)},disable:function(){var t=this.element;this.stopAutoScrolling(),clearInterval(t.data("rightScrollingInterval")),clearInterval(t.data("leftScrollingInterval")),clearInterval(t.data("hideHotSpotBackgroundsInterval")),this.options.touchScrolling&&t.data("scrollWrapper").kinetic("detach"),t.data("enabled",!1)},destroy:function(){var l=this.element;this.stopAutoScrolling(),clearInterval(l.data("rightScrollingInterval")),clearInterval(l.data("leftScrollingInterval")),clearInterval(l.data("hideHotSpotBackgroundsInterval")),l.data("scrollingHotSpotRight").unbind("mouseover"),l.data("scrollingHotSpotRight").unbind("mouseout"),l.data("scrollingHotSpotRight").unbind("mousedown"),l.data("scrollingHotSpotLeft").unbind("mouseover"),l.data("scrollingHotSpotLeft").unbind("mouseout"),l.data("scrollingHotSpotLeft").unbind("mousedown"),l.unbind("mousenter"),l.unbind("mouseleave"),l.data("scrollingHotSpotRight").remove(),l.data("scrollingHotSpotLeft").remove(),l.data("scrollableArea").remove(),l.data("scrollWrapper").remove(),l.html(l.data("originalElements")),t.Widget.prototype.destroy.apply(this,arguments)}})}(jQuery);