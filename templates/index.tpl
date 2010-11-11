<OL id=forums class=floatcontainer>
	<LI id=cat1 class="forumbit_nopost L1">
		<DIV class="forumhead foruminfo L1 collapse">
			<H2>
				<SPAN class=forumtitle>Forum Name</SPAN>
				<SPAN class=forumlastpost>Last Post</SPAN>
				<A id=collapse_c_cat1 class=collapse   href="#top"><IMG title="Collapse this Category" alt="" src="/files/images/collapse_40b.png"></A>
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
									<H2 class=forumtitle><A href="#Thread"><%=forums[i].getTitle()%></A></H2>
								</DIV>
								<P class=forumdescription><%=forums[i].getDescription()%></P>
							</DIV>
						</DIV>
					</DIV>
					<H4 class=nocss_label>Forum Actions:</H4>
					<H4 class=nocss_label>Forum Statistics:</H4>
					<UL class="forumstats td">
						<LI>Threads: 19</LI>
						<LI>Posts: 274</LI>
					</UL>
					<DIV class="forumlastpost td">
						<H4 class=lastpostlabel>Last Post:</H4>
						<DIV>Private </DIV>
					</DIV>
				</DIV>
			</LI>
		<% } %>
		</OL>\
	</LI>
</OL>
<div class="center">
	<div class="center-container">
		<ul id="products_paginator"></ul>
	</div>
</div> 
<script type="text/javascript">
var forumsCount = <%=forumsCount%>;
var currentPage = <%=currentPage%>;
</script>