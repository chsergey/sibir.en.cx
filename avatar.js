/**
 * Created with JetBrains PhpStorm.
 * User: chunizhekov_s
 * Date: 15.10.13
 * Time: 16:00
 */

if ( jQuery && $('a[href="/UserDetails.aspx"]' , '#boxUser').length )
	$(function() {
		$.get(
			'/UserDetails.aspx' ,
			{} ,
			function(o) {
				$('a[href="/UserDetails.aspx"]','#boxUser ')
					.eq(0)
					.before(
						$('<a/>')
							.attr({href : '/UserDetails.aspx'})
							.append(
								$('<img/>')
									.css({
										display : 'none' ,
										margin : '3px 0 10px 0' ,
										border : '1px solid lime' ,
										'border-radius' : '5px' ,
										padding : '0.1em'})
									.attr({
										src : $(o)
											.find('#enUserDetailsPanel_lnkAvatarEdit img')
											.attr('src')
											.replace('personal/' , 'personal/s')})
									.fadeIn(100)
							)
					);
			});
	});