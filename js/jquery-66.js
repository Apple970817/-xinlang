function fnTab(obj,even){
		var oTab=document.getElementsByClassName(obj);
		var aLi=oTab.getElementsByClassName('.lia');
		var aUl=oTab.getElementsByClassName('item');
		
		for(var i=0;i<aLi.length;i++){
			
			aLi[i].index=i;
			
			aLi[i][even]=function(){
				
				for(var i=0;i<aLi.length;i++){
					aLi[i].className='';
					aUl[i].className='';
				}
				
				this.className='active';
				//alert(this.index);
				aUl[this.index].className='show';	
			};	
		}
	}	