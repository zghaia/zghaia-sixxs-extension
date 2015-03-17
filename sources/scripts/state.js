/*
     <background.html for runing in background of SIXXS Extension.>
    Copyright (C) <2011> <SIXXS  Extension Authors :zghaia@gmail.com>
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
  

function switchState()
{
	var ls=localStorage["State"];
	if(ls==0)
	{
	localStorage["State"] =1;
	}
	else if(ls==1)
	{
	localStorage["State"] =0;
	}
	else if(!ls)
	{
	localStorage["State"] =0;
	} 
	else
	{
	localStorage["State"] =0;
	} 

}


function getState()
{
	var ls=localStorage["State"];
	if(!ls)
	{
		return -1 ;
	}
    else
    {
		return parseInt(ls);
	}
}

function setState(color,text,icon)
{
	chrome.browserAction.setBadgeBackgroundColor({color:color});
	chrome.browserAction.setBadgeText({text:text});
	chrome.browserAction.setIcon({path:icon});
}

function showState()
{
	switch(getState())
	{
		case 0 :setState([0, 200, 0, 100],"0","./images/logo_black.png");break;
		case 1 :setState([255, 0, 0, 100],"1","./images/logo.png");break;
		case -1:setState([0, 0, 200, 100],"?","./images/logo_black.png");break;
		default:setState([255, 255, 255, 255],"X","./logo.png");break;
	}
}