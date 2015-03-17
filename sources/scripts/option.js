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

function showOption()
{
	var lFilters = localStorage["Filters"];
	var iFilters = document.getElementById("Filters");
	if(!lFilters){lFilters= "";}
	
	iFilters.value = lFilters;
	
    if(getState()==1)
	{
	   switchState();
	}
	showState();
}
	
function saveOption()
{
	var vFilters = document.getElementById("Filters").value;
	
    if((vFilters==""))
  	{
        showTips(-2);
  	}
  	else
  	{
		localStorage["Filters"] = vFilters;
		if(getState()==0)
		{
			switchState();
		}
		showTips(5);
		showState();
	}
}

function cleanOption()
{
	var iFilters = document.getElementById("Filters");
	
	iFilters.value = "";

	localStorage["Filters"] = "";
	if(getState()==0)
	{
	   switchState();
	}
	showTips(5);
	showState();
}
 


