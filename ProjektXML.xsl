<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
                xmlns:exsl="http://exslt.org/common"
                extension-element-prefixes="exsl"
                version="1.0">
<xsl:output method="html"/>

	<xsl:template match="/">
<html>
<head>
	  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
	<link rel="stylesheet" type="text/css" href="style.css"/>
	
</head>
			<body>
			<section>
				<h2>Nasi Pracownicy</h2>	
				<div class='pracownicy' id='pracownicy'>
				<xsl:for-each select="Kino/Pracownicy/Pracownik">
				
						<div class="pracownik">
							<div class="pracownikImie">Imie: <span><xsl:value-of select="Imie"/></span> <input type="text" name="noweImie" class="hidden"/></div><i class="material-icons edytuj">edit</i><i class="material-icons potwierdz hidden">check</i>
							<div class="pracownikNazwisko">Nazwisko: <xsl:value-of select="Nazwisko"/></div>
							<div class="pracownikEmail">Email: <xsl:value-of select="Email"/></div>
							
							<xsl:if test="@Plec='M'">	
								<div class="pracownikPlec">Mezczyzna</div>
							</xsl:if>
							
							<xsl:if test="@Plec='K'">
								<div class="pracownikPlec">Kobieta</div>
							</xsl:if>
						</div>
				</xsl:for-each>
				</div>
			</section>
			
			<section>
			
				<h2>Najnowsze Filmy</h2>
				<div class="filmy">
				<xsl:for-each select="Kino/Filmy/Film">
					<div class ="film">
						<div class ="filmTytul">Tytuł: <xsl:value-of select="Tytul"/></div>
						<div class="filmWytwornia">Wytwornia: <xsl:value-of select="Wytwornia"/></div>
						<div class="filmRezyser">Rezyser: <xsl:value-of select="Rezyser/Imie"/><xsl:text> </xsl:text><xsl:value-of select="Rezyser/Nazwisko"/></div>
					</div>
				</xsl:for-each>		
				</div>
			</section>
			<section>	
				<h2>Znani Aktorzy</h2>
				   <div class="aktorzy" id="aktorzy">
					<xsl:for-each select="Kino/Filmy/Film/Obsada/Aktor">
						<div class="aktor">Aktor :<span class="persona"><xsl:value-of select="Imie"/><xsl:text> </xsl:text><xsl:value-of select="Nazwisko"/></span></div>
					</xsl:for-each>	
				</div>
				<div class="sortowanie">
					<span class="sort" id="sortujPoImieniu">Sortuj po imieniu</span><span class="sort" id="sortujPoNazwisku">Sortuj po nazwisku</span>
				</div>
			</section>
			<section>
				<h2> Nasz Bar </h2>
					<div class="napoje" id="napoje">
					<h2>Napoje</h2>
						<xsl:for-each select="Kino/Bar/Napoje/Napoj">
						<div class="napojKontener">
							<div class="napoj">Nazwa Napoju: <xsl:value-of select="."/></div>
							<span class="licznik">0</span>
							<span class="dodaj">+</span>
						</div>
						</xsl:for-each>	
					</div>
				
					<div class="przekaski" id="przekaski">
					<h2>Przekaski</h2>
						<div class="przekaskiKontener">
						<xsl:for-each select="Kino/Bar/Przekaski/Przekaska">
							<div class="przekaska">Nazwa: <xsl:value-of select="."/></div>
							<span class="licznik">0</span>
							<span class="dodaj">+</span>
						</xsl:for-each>	
						</div>
					</div>
				</section>
				
			<section>
				<h2>Zaufali Nam</h2>
					<div class="czleki" id="czleki">
						<xsl:for-each select="Kino/Klienci/Klient">
						<div class="czlek">
							<div class="czlekImie">Imie:<xsl:value-of select="Imie"/></div>
							<div class="czlekNazwisko">Nazwisko<xsl:value-of select="Nazwisko"/></div>
							<div class="czlekEmail">Email:<xsl:value-of select="Email"/></div>
							</div>
						</xsl:for-each>	
					</div>
					<form id="nowyCzlek">
						  Imie: <input type="text" id="czlekImieInput" name="czlekName"/><br/>
						  Nazwisko: <input type="text" id="czlekNazwiskoInput" name="czlekNazwisko"/><br/>
						  Email: <input type="text" id="czlekEmailInput" name="czlekMail"/><br/>
					</form>
				<button id="dodanieKlienta">Dodaj klienta</button>
			</section>
			<script src="script.js"></script>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>