/*
                    <tips.js of Dr.com Extension.>
    Copyright (C) <2011> <Dr.com Extension Authors :zghaia@gmail.com>
                          All rights reserved.
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details 
                      <./GNU GENERAL PUBLIC LICENSE>
*/


function setTips(icon,title,tip)
{
		var notification = webkitNotifications.createNotification(
			icon,             
			title, 					
			tip    
		);
		return notification;
}

function showTips(flag)
{
	var notification=null;
	var icon='./images/logo.png'
	var title='Proxy Tips';
	var tip='';
	var time=6000;
	switch(flag)
	{
	case -1 :tip='initialize localStorage';break;
	case -2 :tip='input text is empty';break;
	case 0  :tip='Stop Sixxs.org Proxy';break;           
	case 1  :tip='Start Sixxs.org proxy';break;
	case 5  :tip='Done';break;
	case 9  :tip='only support http or https';break;
	default :tip='Unknown Error,Please Update';
	}
    notification=setTips(icon,title,tip);
	notification.show();
	setTimeout(
		function()
		{
			notification.cancel();
		}, time);
	
}