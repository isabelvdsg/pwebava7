-
-Banco de dados: `chart`
- --------------------------------------------------------- -
-Estrutura da tabela para a tabela `tbl_animais`
- CRIAR TABELA `tbl_animais` ( `id` int (10) NÃO ASSINADO NOT NULL `raca` varchar (35) NOT NULL, `NOME` varchar (35) PADRÃO 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8; -
-Dumping de dados para a tabela `tbl_animais`
- INSERT INTO `tbl_animais` (`id`, `raca`,`nome`) VALUES
(1,'Husky Siberiano', 'Theo'),
(2,'Golden Retriever','Hannah'),
(3,'Vira-lata','Merlin'),
(4,'Samoieda','Nemo'),
(5,'Pastor Alemao','Love'); -
-Índices para tabelas despejadas
- -
-Índices para a tabela `tbl_animais`
-
ALTER TABLE `tbl_animais` ADD PRIMARY KEY (`id`); -
-AUTO_INCREMENT para tabelas despejadas
-
 -
-AUTO_INCREMENT para a tabela `tbl_animais`
-
ALTER TABLE `tbl_animais` UPDATE `id` int (10) NÃO ASSINADO NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
 
