
	
/*		var EventUtil={
			addEvent:function(ele,type,handler){
				try{
					ele.addEventListener(type,handler,false);
				
				}catch(e){
					try{
						ele.attachEvent("on"+type,handler);
					}catch(e){
						ele.["on"+type]=handler;
					}

				}
			},
			removeEvent:function(ele,type,handler){
				try{
					ele.addEventListener(type,handler,false);
				
				}catch(e){
					try{
						ele.attachEvent("on"+type,handler);
					}catch(e){
						ele.["on"+type]=handler;
					}

				}
			}
		};*/
		var EventUtil={
			//绑定事件
			addEvent:function(ele,type,handler){
				if(ele.addEventListener){
					ele.addEventListener(type,handler,false);
				}else if(ele.attachEvent){					
						ele.attachEvent("on"+type,handler);
					}else{
						ele["on" + type]=handler;
					}
			},
			//移除事件
			removeEvent:function(ele,type,handler){
				if(ele.addEventListener){
					ele.addEventListener(type,handler,false);			
				}else if(ele.addEvent){					
						ele.attachEvent("on"+type,handler);
					}else{
						ele["on"+ type]=handler;				
					}
			}
			//获取事件对象的引用
			getEvent : function(event){
				return event ? event : windoe.event;
			},
			//获取事件目标
			getTarget: function(event){
				return event.target || event.srcElement;
			},
			//阻止事件冒泡
			stopProgation:  function(event){
				if(event.stopProgation){
					event.stopProgation();
				}else{
					event.cancelBubble = true;
				}
			},
			//取消事件的默认行为
			preventDefault: function(event){
				if(event.preventDefault){
					event.preventDefault();
				}else{
					event.returnValue = false;
				}
			}
		};
      var obj=document.getElementById("demo");
      var handler=function(){
      	alert("haha");
      };
      EventUtil.addEvent(obj,"click",handler);
