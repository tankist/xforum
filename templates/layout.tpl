<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<HTML dir=ltr id=vbulletin_html lang=en 
xmlns="http://www.w3.org/1999/xhtml"><HEAD><TITLE>Web Templates | vBulletin Skins - TalkTemplate</TITLE>
<META content="text/html; charset=UTF-8" http-equiv=Content-Type>
<LINK rel=stylesheet type="text/css" href="/css/css.css">
<LINK rel=stylesheet type="text/css" href="/css/css(1).css">
<LINK rel=stylesheet type="text/css" href="/css/sellcast.css">
</HEAD>
<BODY>
<DIV class=above_body><!-- closing tag is in template navbar -->
<DIV id=navbar class=navbar>
<UL id=navtabs class="navtabs floatcontainer"></UL>
<DIV id=globalsearch class=globalsearch>
<FORM id=navbar_search class=navbar_search method=post action=search.php?s=262245d99bcb780b93057651970aa681&amp;do=process>
  <INPUT value=guest type=hidden name=securitytoken>
  <INPUT value=process type=hidden name=do> 
  <SPAN class=textboxcontainer>
    <SPAN>
      <INPUT class=textbox tabIndex=99 type=text name=query>
    </SPAN>
  </SPAN>
  <SPAN class=buttoncontainer>
    <SPAN>
      <INPUT class=searchbutton tabIndex=100 onclick="document.getElementById('navbar_search').submit();" src="/files/images/search.png" type=image name=submit>
    </SPAN>
  </SPAN>
</FORM>
</DIV></DIV></DIV><!-- closing div for above_body -->
<DIV class=body_wrapper>
<!-- main -->

<div id="content">&nbsp;</div>
<div class="center">
	<div class="center-container">
		<ul id="products_paginator"></ul>
	</div>
</div> 

<!-- /main -->


<DIV id=footer class="floatcontainer footer">
<FORM id=footer_select class=footer_select method=get action=forum.php><SELECT 
name=styleid> <OPTGROUP 
  label="Quick Style Chooser"> <OPTION value=9>-- DarkVision</OPTION> <OPTION 
    selected value=45>-- Inspiration[Fixed]</OPTION> <OPTION value=46>-- 
    testeststatsd</OPTION> <OPTION value=44>-- Inspiration[Fluid]</OPTION> 
    <OPTION value=47>-- testeststatsd1</OPTION> <OPTION value=32>-- 
    DarkVision[Fixed]</OPTION> <OPTION value=30>-- DarkVision White</OPTION> 
    <OPTION value=33>-- DarkVision White[Fixed]</OPTION> <OPTION value=31>-- 
    DarkVision Yellow</OPTION> <OPTION value=34>-- DarkVision 
    Yellow[Fixed]</OPTION> <OPTION value=22>-- Breeze</OPTION> <OPTION 
    value=28>-- Breeze[Fixed]</OPTION> <OPTION value=25>-- Semblance</OPTION> 
    <OPTION value=24>-- Semblance [Fixed]</OPTION> <OPTION value=7>-- 
    DarkChrome</OPTION> <OPTION value=29>-- DarkChrome[Fixed]</OPTION> <OPTION 
    value=3>-- BlueHaze</OPTION> <OPTION value=6>-- BlueHaze [Fixed]</OPTION> 
  </OPTGROUP></SELECT> </FORM>

</DIV></DIV><!-- closing div for body_wrapper -->
<DIV class=below_body>
<DIV id=footer_time class="shade footer_time">All times are GMT -5. The time now 
is <SPAN class=time>11:50 AM</SPAN>.</DIV>
<DIV id=footer_copyright class="shade footer_copyright"><!-- Skin Created by TalkTemplate.com, Please purchase branding before removing link below--><A 
title="vBulletin skins, Free vBulletin Styles, Free Web Templates - TalkTemplate.com" 
href="http://www.talktemplate.com/" target=_blank>vBulletin skins</A> by <A 
title="vBulletin Styles, Web templates, Web Design Forums - TalkTemplate.com" 
href="http://www.talktemplate.com/" target=_blank><B>TalkTemplate</B></A><BR><!-- Skin Created by TalkTemplate.com, Please purchase branding before removing link above--><!-- Do not remove this copyright notice -->Powered 
by <A id=vbulletinlink href="http://www.vbulletin.com/">vBulletin ©</A> Version 
4.0.5 <BR>Copyright © 2010 vBulletin Solutions, Inc. All rights reserved. <!-- Do not remove this copyright notice --></DIV>
<DIV id=footer_morecopyright class="shade footer_morecopyright"><!-- Do not remove cronimage or your scheduled tasks will cease to function --><!-- Do not remove cronimage or your scheduled tasks will cease to function --></DIV></DIV>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript" src="/files/js/tmpl.js"></script>
<script type="text/javascript" src="/files/js/paginator.js"></script>
<script type="text/javascript" src="/files/js/forum.js"></script>
<script type="text/html" id="forumsTpl">
<OL id="forums" class=floatcontainer>
	<LI id=cat1 class="forumbit_nopost L1">
		<DIV class="forumhead foruminfo L1 collapse">
			<H2>
				<SPAN class=forumtitle>Forum Name</SPAN>
				<SPAN class=forumlastpost>Last Post</SPAN>
				<A id=collapse_c_cat1 class=collapse href="#top"><IMG title="Collapse this Category" alt="" src="/files/images/collapse_40b.png"></A>
			</H2>
		</DIV>
		<OL id=c_cat1 class=childforum>
		<% for (var i=0;i<forums.length;i++) { %>
			<LI id=forum2 class="forumbit_post L2">
				<DIV class="forumrow table">
					<DIV class="foruminfo td">
						<IMG id=forum_statusicon_2 class=forumicon alt="" src="/files/images/forum_old-48.png"> 
						<DIV class=forumdata>
							<DIV class=datacontainer>
								<DIV class=titleline>
									<H2 class=forumtitle><A href="#Thread"><%=forums[i]._data.title%></A></H2>
								</DIV>
								<P class=forumdescription><%=forums[i]._data.description%></P>
							</DIV>
						</DIV>
					</DIV>
					<UL class="forumstats td">
						<LI>Threads: 19</LI>
						<LI>Posts: 274</LI>
					</UL>
					<DIV class="forumlastpost td">
						<H4>Last Post:</H4>
						<DIV>Private </DIV>
					</DIV>
				</DIV>
			</LI>
		<% } %>
		</OL>\
	</LI>
</OL>
</script>

</BODY></HTML>