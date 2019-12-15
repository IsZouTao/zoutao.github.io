//妯″潡鍖? 姣忎釜鍔熻兘鍑芥暟鍘诲仛鑷繁鐩稿簲鐨勪簨鎯? 浠ｇ爜鍙淮鎶ゆ€? 鍙墿灞曟€?
//鍒濆鍖栧嚱鏁?
var aShowList = document.querySelectorAll('.s_show div');//鑾峰彇鍏冪礌 H5
var oShow = document.querySelector('.s_show');
var oSend = document.querySelector('.send');
var oBtn = document.querySelector('.btn');
var oText = document.querySelector('.text');
var time = 0;//涓婁竴娆′綘鍙戦€佺殑鏃堕棿
var time1 = 0;
//鐐瑰嚮鍙戦€佸脊骞?

	oBtn.onclick = function(){//榧犳爣鐐瑰嚮浜嬩欢
	//oBtn.style.backgroundColor = randomColor();//鎸夐挳鑳屾櫙棰滆壊鍙樻崲
	time1 = new Date();
	oBtn.style.color = randomColor();//鎸夐挳瀛椾綋棰滆壊鍙樻崲
	if(time1 - time > 3000){//2娆″彂閫佺殑鏃堕棿蹇呴』澶т簬2绉?
	var oDiv = document.createElement('div');//鍒涘缓div
	oDiv.innerHTML = oText.value;//娣诲姞寮瑰箷鍐呭
	oDiv.className = 'magictime twisterInUp';//寮瑰箷鐗规晥
	oShow.appendChild(oDiv);//娣诲姞涓€涓瓙鑺傜偣 
	init(oDiv);//鍒濆鍖?
	oText.value = '';
	time = time1;
	//console.log(time);
	   }else{
		   alert("留言不能为空~");

	   }
}

for(var i = 0;i < aShowList.length;i++){
	init(aShowList[i]);//鎵ц鍒濆鍖栧嚱鏁?
}

function init(obj){//鎺ュ彈寮瑰箷瀵硅薄
//纭畾top鍊肩殑闅忔満鍖洪棿
	var screenHeight = document.documentElement.clientHeight;//鑾峰彇灞忓箷鍙楂樺害
	var maxTop = screenHeight - oSend.offsetHeight - obj.offsetHeight;//楂樺害宸寖鍥?
	obj.style.top = maxTop * Math.random() + 'px';    
//鎺у埗left鍊?
	var screenWidth = document.documentElement.clientWidth;//鑾峰彇鍙瀹藉害
	var maxLeft = screenWidth - obj.offsetWidth/* - Math.random() * 800 */;//闅忔満瀹藉害宸?
	obj.style.left = maxLeft + 'px';
//寮瑰箷鐨勯殢鏈洪鑹?
	obj.style.color = randomColor();
	/*setInterval(function(){
		move(obj,maxLeft);
	},1000);*///鏅€氬畾鏃跺櫒
	move(Math.random()*5+1,obj,maxLeft);
}
//寮瑰箷绉诲姩鍑芥暟
function move(k,obj,maxLeft){
	var speed = k;//鎺у埗閫熷害鐨勫彉閲?
	maxLeft -= speed;//寰€宸︾Щ鍔?
	if(maxLeft > -obj.offsetWidth){
		obj.style.left = maxLeft + 'px';
		requestAnimationFrame(function(){
		move(k,obj,maxLeft);
	});//H5鏂板鐨勫姩鐢诲嚱鏁?
	}else{
		init(obj);//閲嶆柊鍒濆鍖? 钀ラ€犲惊鐜脊骞曟晥鏋?
	  /*  oShow.removeChild(obj);//DOM鍒犻櫎瀛愯妭鐐? */
	}
}
//闅忔満棰滆壊鍑芥暟
function randomColor(){
	return '#' + Math.random().toString(16).slice(-6);//涓€琛岀畝鍖栫増鎴彇鍚庡叚浣?
	/*var str = '#';
	for(var i = 0;i < 6;i++){
		str += Math.floor(Math.random() * 16).toString(16);
	}
	return str;*///鏅€氶€昏緫鐗?
}