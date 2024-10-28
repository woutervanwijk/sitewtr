<?xml version = "1.0" ?>
<ControlsData-list>
  <ControlsData>
  <Align>Top</Align>
  <Caption>Search with Google</Caption>
  <ControlType>TextBox</ControlType>
  <Description>Jaa!!</Description>
  <Height>4&#x25;</Height>
  <Left>0&#x25;</Left>
  <Location>http&#x3A;&#x2F;&#x2F;www&#x2E;google&#x2E;com&#x2F;search&#x3F;q&#x3D;</Location>
  <Action>HttpGet</Action>
  <Name>TxtKeyWords</Name>
  <Parent>Panel1</Parent>
  <Top>0</Top>
  <Color>222222</Color>
  <Width>100&#x25;</Width>
  </ControlsData>

  <ControlsData>
  <Align>Right</Align>
  <ControlType>Image</ControlType>
  <Description>Huh?!!</Description>
  <DependsOn>Text Tabs2</DependsOn>
  <Height>0</Height>
  <Left>0</Left>
  <Location>http://www.google.com</Location>
  <Picture>test.bmp</Picture>
  <MouseOverPicture>mouseover.bmp</MouseOverPicture>
  <DownPicture>down.bmp</DownPicture>
  <Name>Image1</Name>
  <Top>0</Top>
  <Width>3&#x25;</Width>
  </ControlsData>

  <ControlsData>
  <Align>Top</Align>
  <ContentType>All</ContentType>
  <ControlType>TextBox</ControlType>
  <DependsOn>Viewer1</DependsOn>
  <Description>Text!</Description>
  <BackColor>ffffff</BackColor>
  <Height>4&#x25;</Height>
  <Left>0&#x25;</Left>
  <Location>c</Location>
  <Name>Text1</Name>
  <Color>ffffff</Color>
  <BackColor>000000</BackColor>
  <NoContentType></NoContentType>
  <Top>33&#x2E;3&#x25;</Top>
  <Width>100&#x25;</Width>
  </ControlsData>

  <ControlsData>
  <ControlType>Panel</ControlType>
  <Align>Left</Align>
  <Color>ffffff</Color>
  <BackColor>333333</BackColor>
  <Height>100&#x25;</Height>
  <Left>10</Left>
  <Location>panel</Location>
  <Name>Panel1</Name>
  <NoContentType></NoContentType>
  <Top>10</Top>
  <Width>20&#x25;</Width>
  </ControlsData>

  <ControlsData>
  <ControlType>Splitter</ControlType>
  <Align>Left</Align>
  <DependsOn>Viewer1 Text1</DependsOn>
  <Height>100&#x25;</Height>
  <Left>50</Left>
  <Color>ffffff</Color>
  <Name>Splitter1</Name>
  <NoContentType></NoContentType>
  <Top>50</Top>
  <Width>5</Width>
  <Description>Sleep!!</Description>
  </ControlsData>

  <ControlsData>
  <ControlType>IconList</ControlType>
  <Align>Client</Align>
  <Action>Go</Action>
  <ContentType>All</ContentType>
  <Color>ffffff</Color>
  <BackColor>1199FF</BackColor>
  <DependsOn>Viewer1 Text1</DependsOn>
  <Description>LijsT!</Description>
  <Height>100&#x25;</Height>
  <ItemSquared>Yes</ItemSquared>
  <Description>Click Here!!</Description>
  <ItemHeight>10&#x25;</ItemHeight>
  <ItemWidth>50&#x25;</ItemWidth>
  <Left>0</Left>
  <Location>Nieuws&#x2E;xdpxdp</Location>
  <Name>List1</Name>
  <NoContentType>XDAProjectControls</NoContentType>
  <Parent>Panel1</Parent>
  <Top>0</Top>
  <Width>100&#x25;</Width>
  </ControlsData>

  <ControlsData>
  <ControlType>Viewer</ControlType>
  <Align>Client</Align>
  <DependsOn>Image1 TxtKeyWords Text1 List1</DependsOn>
  <Description>Click Here!!</Description>
  <Height>64&#x25;</Height>
  <Left>0&#x25;</Left>
  <Location>http://www.google.com/</Location>
  <Name>Viewer1</Name>
  <NoContentType></NoContentType>
  <BackColor>#ffffff</BackColor>
  <Top>37&#x2E;3&#x25;</Top>
  <Width>100&#x25;</Width>
  </ControlsData>

</ControlsData-list>
