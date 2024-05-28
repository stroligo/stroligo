<?php

// Caminho do arquivo ZIP
$arquivo = 'wordpress-6.5.3.zip';

// Destino dos arquivos descompactados
$destino = './wordpress';

// Instanciar a Classe Zip
$zip = new ZipArchive();

// Abrir o arquivo
$zip->open($arquivo);

// Extrair os arquivos e verificar se executou corretamente
if($zip->extractTo($destino) == true) {
    echo "<p style='color: green;'>Arquivo descompactado com sucesso.</p>";
} else {
    echo "<p style='color: #f00;'>Erro: Arquivo não descompactado com sucesso.</p>";
}

// Fechar o arquivo zip após descompactar
$zip->close();