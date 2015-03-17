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

function urlFilter(url)
{
	var flag =!(url.indexOf('sixxs.')>-1);
	if(flag)
	{
		var lFilters = localStorage["Filters"];
		var aFilters = lFilters.split(';');

		for (i = 0; i < aFilters.length; i++) 
		{
			if(!flag)
			{
					break ;
			}
			if (aFilters[i] != null) 
			{
			
				flag = flag && (!(url.indexOf(aFilters[i]+'.')>-1));
			}
		}
	}
    return flag;
}

function urlMatch(tabUrl,infoUrl)
{
	var url="";
	if(tabUrl.indexOf('google')>-1)
	{
		url=infoUrl.match(/url=.*?(?=&|$)/);
		if(url!=null)
		{		    
			url=url.toString().substr(4);
		}
		else 
		{
			url=infoUrl
	    }
	}
	else
	{
		url=infoUrl;
	}
    return unescape(url);
	
}

function urlForm(url)
{
	if(url.match(/.*?:\/\/.*?/))
	{
		return url;
	}
	else 
	{
		if(url.match(/.*?\..*?/))
		{
			return "http://"+url+"/";
		}
		else
		{
			return "http://"+url+".com/";
		}
	}
	
} 

function urlSixxs(url)
{
	var mid=url.match(/:\/\/.*?(?=\/|$)/);
    return url.replace(mid,mid+'.sixxs.org');
} 


function flagSixxs(e,r,s)
{
	this.enabled=e;
	this.remove=r;
	this.selected=s;
	return this;
}

function callSixxs(id,index,url,flag)
{
	if(flag.enabled)
	{
		if(url.match(/^(http|https)/))
		{
			if(urlFilter(url))
			{	
				url=urlSixxs(url);
			}
			if(flag.remove)
			{
				chrome.tabs.remove(id);
			}
			
			chrome.tabs.create({index:index,selected:flag.selected,url:url});

		}
	}
}
