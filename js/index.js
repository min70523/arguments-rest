    //arguments
	//在数组的后面添加任意个数组元素
	function push(arr){
		for(var i=1;i<arguments.length;i++){  
		//i为arguments的下标，遍历arguments的元素，依次存入指定数组的最后面	
			arr[arr.length]=arguments[i];
		}
		console.log(arr);
	}
	//排序   升序
	// var arr1=[20,6,5,7,98,2,23,770];
	function arrpai(arr,type='>'){  
	     //带有默认值的形参，写到最后面   第四种方法，ES6里面直接写到形参后，会有兼容性问题，但是可以用bable将ES6转化为ES5
		// if(type==undefined){     //如果输入的值为空值，则给他一个默认值
		// 	type='>'
		// }
		// type=type==undefined?'>':type=type;   //  默认值第二种方法
		// type=type||'>';              //默认值第三种方法

		if(type=='<'){  
			arrpaiMin(arr)
		}else if(type=='>'){
			arrpaiMax(arr)
		}
		// console.log(arr);
	}
	function arrpaiMin(arr){				
	for(var i=0;i<arr.length;i++){
		for(var j=i+1;j<arr.length;j++){
			if(arr[i]>arr[j]){
			var k=arr[i];
			arr[i]=arr[j];
			arr[j]=k;
		    }
		}

	}
	console.log(arr);
   }
	// // //排序   降序
	function arrpaiMax(arr){
	for(var i=0;i<arr.length;i++){
		for(var j=i+1;j<arr.length;j++){
			if(arr[i]<arr[j]){
			var k=arr[i];
			arr[i]=arr[j];
			arr[j]=k;
		    }
		}			
	}
	console.log(arr);
	}
	//rest剩余参数  没有值的时候，是个空数组   因为是剩余参数，必须要放在最后面
	//第一个作用：函数调用的地方，给一个返回值
	//返回值可以是任意数据类型
	//第二个作用：不管return有没有值，终止函数，return后面的代码不再执行
	//
	//判断数组存在 某一个特定的值，存在true,不存在false
	//数组是一个object,但是object不一定是数组
	//
	//参数不是一个数组，或者数量小于1。 终止函数 return'输入错误'
	
	function fn(arr,value){
		if(!(typeof arr=='object'&&arguments.length>1)){  //代码更加完善
			return '输入错误';
		}
		for(i=0;i<=arr.length;i++){
			if(arr[i]==value){
				return true;
			}			
		}
		return false;
	}		
	//数组=>字符串
	//arr:数组
	//str:连接符
	function join(arr,str){
		var result='';     //存放字符串   前面不会有undefined
		for(var 
			i=0;i<arr.length;i++){

			if(i<arr.length-1){
				result+=arr[i]+str;
			}else{
				result+=arr[i];
			}				
		}
		return result;
	}