// JavaScript Document
var index=1;

function hideAll(){
	var sliders=document.getElementsByClassName("slider");
	for (var i=0; i<sliders.length;i++){
		sliders[i].style.display="none";
		}
	}
	
function changeActive(n){
	var allDots=document.getElementsByClassName("dots");
	for (var i=0; i<allDots.length;i++){
		allDots[i].className=allDots[i].className.replace("active","");
		}
	allDots[n-1].className=allDots[n-1].className+" active";
	}
	
function go(n){
	var sliders=document.getElementsByClassName("slider");
	hideAll();
	sliders[n-1].style.display="block";
	changeActive(n);
	index=n;
	}
	
function page(num){
	if(num==-1){
		index--;
		if(index<1){
			index=3;
			}
		}
		if(num==1){
			index++;
			if(index>3){
				index=1;
				}
			}
		go(index);
	}