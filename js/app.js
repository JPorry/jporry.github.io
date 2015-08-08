$(document).ready(function(){
	var menuButton = $('body>nav>button'),
		sideMenu = $('.side-menu ul');

	menuButton.on('click', function(){
		sideMenu.toggleClass("open");
	});

	var tabbedViews = $('.tabbed-view .tabs li');

	$('.tabbed-view').each(function(){
		console.log(this);
		$tv = $(this);
		$tv.find('.tabs li').first().addClass('active');
		$tv.find('pre').first().addClass('active');
	});

	tabbedViews.on('click', function(){
		var $this = $(this),
			$tv = $this.parent().parent();
		$tv.find('.active').removeClass('active');
		$this.addClass('active');

		$tv.find('pre').eq($this.index()).addClass('active');
	});
});

	

