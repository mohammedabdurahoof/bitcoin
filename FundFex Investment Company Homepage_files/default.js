(function(global){
	global.$_Tawk_AccountKey='5f2a21d55c885a1b7fb667b9';
	global.$_Tawk_WidgetId='default';
	global.$_Tawk_Unstable=false;
	global.$_Tawk = global.$_Tawk || {};
	(function (w){
	function l() {
		if (window.$_Tawk.init !== undefined) {
			return;
		}

		window.$_Tawk.init = true;

		var files = [
			'https://embed.tawk.to/_s/v4/app/60b739727c0/js/twk-main.js',
			'https://embed.tawk.to/_s/v4/app/60b739727c0/js/twk-vendor.js',
			'https://embed.tawk.to/_s/v4/app/60b739727c0/js/twk-chunk-vendors.js',
			'https://embed.tawk.to/_s/v4/app/60b739727c0/js/twk-chunk-common.js',
			'https://embed.tawk.to/_s/v4/app/60b739727c0/js/twk-runtime.js',
			'https://embed.tawk.to/_s/v4/app/60b739727c0/js/twk-app.js'
		];
		var s0=document.getElementsByTagName('script')[0];

		for (var i = 0; i < files.length; i++) {
			var s1 = document.createElement('script');
			s1.src= files[i];
			s1.charset='UTF-8';
			s1.setAttribute('crossorigin','*');
			s0.parentNode.insertBefore(s1,s0);
		}
	}
	if (document.readyState === 'complete') {
		l();
	} else if (w.attachEvent) {
		w.attachEvent('onload', l);
	} else {
		w.addEventListener('load', l, false);
	}
})(window);

})(window);