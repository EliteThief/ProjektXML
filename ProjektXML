<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
                xmlns:exsl="http://exslt.org/common"
                extension-element-prefixes="exsl"
                version="1.0">
<xsl:output method="html"/>

	<xsl:template match="/">
		<html>
			<body>
			<section>
				<h2>Nasi Pracownicy</h2>	
				
				<xsl:for-each select="Kino/Pracownicy/Pracownik">
				
						<div class="pracownik">
							<div class="pracownikImie">Imie: <xsl:value-of select="Imie"/></div>
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
			</section>
			
			<section>
			
				<h2>Najnowsze Filmy</h2>
				
				<xsl:for-each select="Kino/Filmy/Film">
					<div class ="filmy">
						<div class ="filmyTytul"><xsl:value-of select="Tytul"/></div>
						<div class="filmyWytwornia"><xsl:value-of select="Wytwornia"/></div>
						<div class="filmyRezyserImie"><xsl:value-of select="Rezyser/Imie"/> </div>
						<div class="filmyRezyserNazwisko"><xsl:value-of select="Rezyser/Nazwisko"/></div>
					</div>
				</xsl:for-each>		
				
			</section>
			<section>	
				<h2>Znani Aktorzy</h2>
				
					<xsl:for-each select="Kino/Filmy/Film/Obsada/Aktor">
					<div class="aktor">
						<div class="aktorImie"><xsl:value-of select="Imie"/></div>
						<div class="aktorNazwisko"><xsl:value-of select="Nazwisko"/></div>
					</div>
					</xsl:for-each>	
			</section>
			<section>
				<h2> Nasz Bar </h2>
					<div class="napoje">
						<xsl:for-each select="Kino/Bar/Napoje/Napoj">
							<div class="napoj"><xsl:value-of select="."/></div>
						</xsl:for-each>	
					</div>
				<h2>Przekaski</h2>
					<div class="przekaski">
						<xsl:for-each select="Kino/Bar/Przekaski/Przekaska">
							<div class="przekaska"><xsl:value-of select="."/></div>
						</xsl:for-each>	
					</div>
			</section>
				
			<section>
				<h2>Zaufali Nam</h2>
					
						<xsl:for-each select="Kino/Klienci/Klient">
						<div class="czlek">
							<div class="czlekImie"><xsl:value-of select="Imie"/></div>
							<div class="czlekNazwisko"><xsl:value-of select="Nazwisko"/></div>
							<div class="czlekEmail"><xsl:value-of select="Email"/></div>
							</div>
						</xsl:for-each>	
					
			</section>
			<script src="script.js"></script>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
