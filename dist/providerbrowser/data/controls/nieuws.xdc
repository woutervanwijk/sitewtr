<?xml version = "1.0" ?>

<ControlsData-list>

  <ControlsData>
  <ControlType>Label</ControlType>
  <Caption>Teletekst Tekstversie (snel):</Caption>
  <Height>20</Height>
  <Left>0</Left>
  <Location>http://teletekst.nos.nl/cgi-bin/tt/nos/page/t/100</Location>
  <Name>LBL1</Name>
  <Parent>Panel1</Parent>
  <Top>0</Top>
  <Width>100</Width>
  </ControlsData>  

  <ControlsData>
  <ControlType>TextBox</ControlType>
  <Caption>101</Caption>
  <Description>Zoek in teletekst</Description>
  <Height>20</Height>
  <Left>0</Left>
  <Location>http://teletekst.nos.nl/cgi-bin/tt/nos/page/t/</Location>
  <Action>HttpGet</Action>
  <Name>TxtKeyWords</Name>
  <NoContentType></NoContentType>
  <Parent>Panel1</Parent>
  <Protocol></Protocol>
  <Top>15</Top>
  <Width>100</Width>
  </ControlsData>

  <ControlsData>
  <ControlType>Label</ControlType>
  <Caption>Teletekst Kleur:</Caption>
  <Height>20</Height>
  <Left>110</Left>
  <Location>http://teletekst.nos.nl/</Location>
  <Name>LBL1</Name>
  <Parent>Panel1</Parent>
  <Top>0</Top>
  <Width>100</Width>
  </ControlsData>  

  <ControlsData>
  <ControlType>TextBox</ControlType>
  <Caption>101</Caption>
  <Description>Zoek in teletekst</Description>
  <Height>20</Height>
  <Left>110</Left>
  <Location>http://teletekst.nos.nl/cgi-bin/tt/nos/page/m/</Location>
  <Action>HttpGet</Action>
  <Name>TxtKeyWords</Name>
  <NoContentType></NoContentType>
  <Parent>Panel1</Parent>
  <Protocol></Protocol>
  <Top>15</Top>
  <Width>100</Width>
  </ControlsData>

  <ControlsData>
  <ContentType>All</ContentType>
  <ControlType>Label</ControlType>
  <Caption>Parool Archief:</Caption>
  <Height>20</Height>
  <Left>220</Left>
  <Location>http://archief.parool.nl/</Location>
  <Name>LBL1</Name>
  <Parent>Panel1</Parent>
  <Top>0</Top>
  <Width>100</Width>
  </ControlsData>  

  <ControlsData>
  <ContentType>All</ContentType>
  <ControlType>TextBox</ControlType>
  <Height>20</Height>
  <Left>220</Left>
  <Location>http&#x3A;&#x2F;&#x2F;archief&#x2E;parool&#x2E;nl&#x2F;?sort=date&text=</Location>
  <Action>HttpGet</Action>
  <Name>TxtKeyWords</Name>
  <Parent>Panel1</Parent>
  <Top>15</Top>
  <Width>100</Width>
  </ControlsData>

  <ControlsData>
  <BackColor>FFFFFF</BackColor>
  <Align>Right</Align>
  <ControlType>Splitter</ControlType>
  <DependsOn>Viewer1 Text1</DependsOn>
  <Height>100&#x25;</Height>
  <Left>50&#x25;</Left>
  <Location>Nieuws&#x2E;xdpxdp</Location>
  <Name>Splitter1</Name>
  <Top>0</Top>
  <Width>5</Width>
  </ControlsData>

  <ControlsData>
  <Align>Bottom</Align>
  <ControlType>Panel</ControlType>
  <Picture>textures\abrasivepaper.bmp</Picture>
  <Height>40</Height>
  <Left>0</Left>
  <Location>Nieuws&#x2E;xdpxdp</Location>
  <Name>Panel1</Name>
  <Parent>Panel2</Parent>
  <Top>0</Top>
  <Width>100&#x25;</Width>
  </ControlsData>

  <ControlsData>
  <Align>Top</Align>
  <ContentType>All</ContentType>
  <ControlType>TabBar</ControlType>
  <Picture>textures\abrasivepaper.bmp</Picture>
  <DependsOn>Viewer1 Text1</DependsOn>
  <Height>25</Height>
  <ItemSquared>Yes</ItemSquared>
  <ItemHeight>25%</ItemHeight>
  <ItemWidth>25%</ItemWidth>
  <Left>0&#x25;</Left>
  <Location>LNieuws&#x2E;xdpxdp</Location>
  <Action>Go</Action>
  <Name>List1</Name>
  <NoContentType>XDAProjectControls</NoContentType>
  <Top>0&#x25;</Top>
  <Width>100&#x25;</Width>
  </ControlsData>

  <ControlsData>
  <Align>Client</Align>
  <ControlType>Viewer</ControlType>
  <DependsOn>LBL1 TxtKeyWords Text1 List1</DependsOn>
  <Height>64&#x25;</Height>
  <Left>0&#x25;</Left>
  <Location>http://www.omroep.nl/</Location>
  <Name>Viewer1</Name>
  <Protocol></Protocol>
  <Top>37&#x2E;3&#x25;</Top>
  <Width>100&#x25;</Width>
  </ControlsData>

</ControlsData-list>
