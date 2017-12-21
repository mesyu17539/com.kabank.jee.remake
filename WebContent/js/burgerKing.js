/**
 * 
 */
function goBurgerking() {
	location.href = "../burgerking/main.jsp";
}
function goKakao() {
	location.href = "../kabank/main.jsp";
}
function goBitcamp() {
	location.href = "../bitcamp/main.jsp";
}
function goLotto() {
	location.href = "../lotto/main.jsp";
}
function goSkelecom() {
	location.href = "../sktelecom/main.jsp";
}

function order() {
	document.querySelector('#order_form').submit();
}

	
function clickMe() {
	document.querySelector('#burgerking') 
	.onclick = goBurgerking;
	
	document.querySelector('#kakao') 
	.onclick = goKakao;
	
	document.querySelector('#lotto') 
	.onclick = goBitcamp;
	
	document.querySelector('#sktelecom') 
	.onclick = goLotto;
	
	document.querySelector('#bitcamp') 
	.onclick = goSkelecom;
	
	document.querySelector('#order_btn').onclick = order;
}

window.onload=clickMe; //로딩이 될 때 실행을 하라는 뜻