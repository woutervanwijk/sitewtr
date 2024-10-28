<?xml version = "1.0" ?>

<ControlsData-list>
  <ControlsData>
  <Align>Top</Align>
  <ContentType>All</ContentType>
  <ControlType>TextBox</ControlType>
  <Height>4&#x25;</Height>
  <Left>0&#x25;</Left>
  <Location>http://search.lonelyplanet.com/query.html?col=full&ht=0&qp=&qs=&qc=&pw=100%25&ws=0&la=en&qm=0&st=1&nh=10&lk=1&rf=0&rq=0&si=0&qt=</Location>
  <Action>HttpGet</Action>
  <Name>TxtKeyWords</Name>
  <NoContentType></NoContentType>
  <Parent>Panel1</Parent>
  <Top>1</Top>
  <Width>100&#x25;</Width>
  </ControlsData>

  <ControlsData>
  <Align>Top</Align>
  <MouseOverColor>dddddd</MouseOverColor>
  <Color>aabb99</Color>
  <ControlType>Label</ControlType>
  <Height>15</Height>
  <Left>0</Left>
  <Location>http://www.babylon.com/</Location>
  <Name>Lbvrt</Name>
  <Parent>Panel1</Parent>
  <Caption>Vertaal:</Caption>
  <Top>30</Top>
  <Width>100&#x25;</Width>
  </ControlsData>

  <ControlsData>
  <Align>Top</Align>
  <Caption>Translate with Babylon</Caption>
  <Action>HttpGet</Action>
  <ControlType>TextBox</ControlType>
  <Parent>Panel1</Parent>
  <Height>20</Height>
  <Left>0</Left>
  <Location>http://online.babylon.com/combo/index.html?word="</Location>
  <Name>TextTranslate</Name>
  <Top>50</Top>
  <Width>80</Width>
  </ControlsData>


  <ControlsData>
  <Align>Top</Align>
  <MouseOverColor>aaffaa</MouseOverColor>
  <Color>99cc99</Color>
  <ControlType>Label</ControlType>
  <Height>15</Height>
  <Left>0</Left>
  <Location>http://search.lonelyplanet.com/</Location>
  <Name>LblPlanet</Name>
  <Parent>Panel1</Parent>
  <Caption>Doorzoek Lonely Planet:</Caption>
  <Top>0</Top>
  <Width>100&#x25;</Width>
  </ControlsData>

  <ControlsData>
  <Align>Top</Align>
  <ContentType>All</ContentType>
  <ControlType>TextBox</ControlType>
  <DependsOn>Viewer1 List1</DependsOn>
  <Height>4&#x25;</Height>
  <Left>0&#x25;</Left>
  <Location>TNieuws&#x2E;xdpxdp</Location>
  <Name>Text1</Name>
  <NoContentType></NoContentType>
  <Top>33&#x2E;3&#x25;</Top>
  <Width>100&#x25;</Width>
  </ControlsData>

  <ControlsData>
  <Align>Client</Align>
  <ItemSquared>Yes</ItemSquared>
  <ContentType>All</ContentType>
  <Action>Go</Action>
  <Color>eeeeee</Color>
  <ControlType>IconList</ControlType>
  <DependsOn>Viewer1 Text1</DependsOn>
  <Height>66&#x25;</Height>
  <Picture>reiszijback.jpg</Picture>
  <ItemHeight>100%</ItemHeight>
  <ItemWidth>100%</ItemWidth>
  <Left>0</Left>
  <Location>LNieuws&#x2E;xdpxdp</Location>
  <Name>List1</Name>
  <NoContentType>XDAProjectControls</NoContentType>
  <Parent>Panel1</Parent>
  <Top>200</Top>
  <Width>20&#x25;</Width>
  </ControlsData>

  <ControlsData>
  <Align>Left</Align>
  <BackColor>aaaaaa</BackColor>
  <Color>666666</Color>
  <ControlType>Panel</ControlType>
  <Height>100</Height>
  <Left>5</Left>
  <Location>Nieuws&#x2E;xdpxdp</Location>
  <Name>Panel1</Name>
  <Picture>reiszijback.jpg</Picture>
  <LayOut>pictureleft</LayOut>
  <Top>10</Top>
  <Width>155</Width>
  </ControlsData>

  <ControlsData>
  <Align>Left</Align>
  <Color>339933</Color>
  <ControlType>Splitter</ControlType>
  <DependsOn>Viewer1 Text1</DependsOn>
  <Height>100&#x25;</Height>
  <Left>50</Left>
  <Location>Nieuws&#x2E;xdpxdp</Location>
  <Name>Splitter1</Name>
  <NoContentType></NoContentType>
  <Top>10</Top>
  <Width>5</Width>
  </ControlsData>

  <ControlsData>
  <Align>Client</Align>
  <ControlType>Viewer</ControlType>
  <DependsOn>All LblPlanet TxtKeyWords Text1 List1</DependsOn>
  <Height>64&#x25;</Height>
  <Left>0&#x25;</Left>
  <Location>http://www.travelplanet.nl/</Location>
  <Name>Viewer1</Name>
  <NoContentType></NoContentType>
  <Top>37&#x2E;3&#x25;</Top>
  <Width>100&#x25;</Width>
  </ControlsData>


</ControlsData-list>
