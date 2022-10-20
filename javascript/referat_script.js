
function openNav() {
	document.getElementById("myNav").style.width = "40%";
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}

function main()
{
	var i = document.getElementById('svginfo');
	var d = document.getElementById('desc');
	i.elem = d;
	i.addEventListener('click', function(event)
	{
		var style = event.target.elem.style;
		if(style.display == 'block')
			style.display = 'none';
		else
			style.display = 'block';
	});

	var gr = document.getElementById('graphic');
	var divgr = document.getElementById('typeGraphic');
	//divgr.style.display = 'none'
	gr.elem = divgr;
	gr.addEventListener('click', function(event)
	{
		var style = event.target.elem.style;
		if(style.display == 'block')
			style.display = 'none';
		else
			style.display = 'block';
	});

	var whyuse = document.getElementById('whyuseit');
	var u = document.getElementById('usage');
	whyuse.elem = u;
	whyuse.addEventListener('click', function(event)
	{
		var style = event.target.elem.style;
		if(style.display == 'block')
			style.display = 'none';
		else
			style.display = 'block';
	});

	var usefor = document.getElementById('utilizefor');
	var du = document.getElementById('duse');
	usefor.elem = du;
	usefor.addEventListener('click', function(event)
	{
		var style = event.target.elem.style;
		if(style.display == 'block')
			style.display = 'none';
		else
			style.display = 'block';
	});

	var inc = document.getElementById('include');
	var ins = document.getElementById('inserts');
	inc.elem = ins;
	inc.addEventListener('click', function(event)
	{
		var style = event.target.elem.style;
		if(style.display == 'block')
			style.display = 'none';
		else
			style.display = 'block';
	});

	var f = document.getElementById('fig');
	var form = document.getElementById('formes');
	f.elem = form;
	f.addEventListener('click', function(event)
	{
		var style = event.target.elem.style;
		if(style.display == 'block')
			style.display = 'none';
		else
			style.display = 'block';
	});

	var ot = document.getElementById('others');
	var lch = document.getElementById('listch');
	//lch.style.display = 'none'
	ot.elem = lch;
	ot.addEventListener('click', function(event)
	{
		var style = event.target.elem.style;
		if(style.display == 'block')
			style.display = 'none';
		else
			style.display = 'block';
	});

	var ex = document.getElementById('tryexample');
	var con = document.getElementById('console');
	//con.style.display = 'none'
	ex.elem = con;
	ex.addEventListener('click', function(event)
	{
		var style = event.target.elem.style;
		if(style.display == 'block')
			style.display = 'none';
		else
			style.display = 'block';
	});

	var s = document.getElementById('sources');
	var sd = document.getElementById('sourcediv');
	//sd.style.display = 'none'
	s.elem = sd;
	s.addEventListener('click', function(event)
	{
		var style = event.target.elem.style;
		if(style.display == 'block')
			style.display = 'none';
		else
			style.display = 'block';
	});
}