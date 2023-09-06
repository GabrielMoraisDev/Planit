<?php
// Inicia o buffer de saída
ob_start();
// Define o tipo de documento como HTML
header( 'Content-Type: text/html; charset=UTF-8' );
// Inclui os arquivos CSS
echo '<link rel="stylesheet" href="morais.css" />';
echo '<link rel="stylesheet" href="responsive.css">';
// Define o título da página
echo '<title>TABELA</title>';
// Inicia o corpo da página
echo '<body>';
// Cria uma div com classe w-80 e auto
echo '<div class="w-80 auto">';
// Cria uma tabela com classe table
echo '<table class="table">';
// Cria uma linha com classe tr
echo '<tr class="tr">';
// Cria três células de cabeçalho com classe txt-center pd-05 th
echo '<th class="txt-center pd-05 th">Coluna 1</th>';
echo '<th class="txt-center pd-05 th">Coluna 2</th>';
echo '<th class="txt-center pd-05 th">Coluna 3</th>';
// Fecha a linha
echo '</tr>';
// Cria um array bidimensional com os dados da tabela
$dados = array(
    array( 'Dado 1', 'Dado 2', 'Dado 3' ),
    array( 'Dado 4', 'Dado 5', 'Dado 6' ),
    array( 'Dado 7', 'Dado 8', 'Dado 9' ),
    array( 'Dado 1', 'Dado 2', 'Dado 3' ),
    array( 'Dado 4', 'Dado 5', 'Dado 6' ),
    array( 'Dado 7', 'Dado 8', 'Dado 9' )
);
// Percorre o array com um laço foreach
foreach ( $dados as $linha ) {
    // Cria uma linha com classe tr
    echo '<tr class="tr">';
    // Percorre cada elemento da linha com outro laço foreach
    foreach ( $linha as $celula ) {
        // Cria uma célula com classe txt-center pd-05 td e imprime o valor do elemento
        echo '<td class="txt-center pd-05 td">' . $celula . '</td>';
    }
    // Fecha a linha
    echo '</tr>';
}
// Fecha a tabela
echo '</table>';
// Fecha a div
echo '</div>';
// Inclui o arquivo script.js
echo '<script src="script.js"></script>';
// Finaliza o corpo da página
echo '</body>';
// Finaliza o documento HTML
echo '</html>';
// Envia o buffer de saída para o navegador
ob_end_flush();
?>