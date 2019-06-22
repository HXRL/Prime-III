/* Zoom Functions */

var zoomBy = 1.0;
function zoomIn()
{
  	var zoomData = document.getElementById('myDocument');
  	zoomBy = zoomBy + 0.1;

	if (navigator.userAgent.indexOf('Firefox') > -1)
	{
		zoomData.style.MozTransform = "scale(" + zoomBy + ")";
		zoomData.style.MozTransformOrigin = "0 0";
	}
	else
	{
  		zoomData.style.zoom = zoomBy;
  		zoomData.style.webkitTransform = "scale(zoomBy)";
	}		
}

function zoomOut()
{
	var zoomData = document.getElementById('myDocument');
	zoomBy = zoomBy - 0.1;

	if (navigator.userAgent.indexOf('Firefox') > -1)
	{
		zoomData.style.MozTransform = "scale(" + zoomBy + ")";
		zoomData.style.MozTransformOrigin = "0 0";
	}
	else
	{
		zoomData.style.zoom = zoomBy;
		zoomData.style.webkitTransform = "scale(zoomBy)";
	}	
}
