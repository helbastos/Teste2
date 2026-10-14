# Vôlei dax Gayx

App para sortear times de vôlei em quartetos. Funciona no iPhone como app de tela inicial (sem App Store) e offline.

## Regras do sorteio

- Até 16 nomes. Times de 4, o último fica com quem sobrar.
  - 13 a 16 nomes: 4 times
  - 9 a 12 nomes: 3 times
  - 8 nomes: 2 times de 4
  - 4 a 7 nomes: 2 times equilibrados (ex.: 7 vira 4 e 3)
- Mais de 16: o app pede `nomes - 16` duplas de revezamento. Cada dupla ocupa uma vaga e aparece como `nome1 / nome2`.
- Dois modos: **aleatório** (padrão) ou **pelos pontos** (espalha quem tem média alta).
- Nos dois modos o sorteio evita repetir parceiros das rodadas recentes (nunca 3 do mesmo time anterior juntos) e, como critério secundário, evita que quem estava descansando no último jogo fique parado também no primeiro jogo da rodada seguinte.
- Antes de cada sorteio o app confirma a lista. Antes de um novo sorteio, pede o resultado da rodada.

## Pontuação

- 4 times: 1º = 3, 2º = 1, 3º = 1, 4º = 0 (1 por vitória + 1 de bônus para quem ganha a final)
- 3 times: cada vitória vale 1
- 2 times: não pontua
- Quem está em dupla de revezamento ganha os pontos do time.

## Lista de presença do WhatsApp

Cole a lista inteira no campo de nomes. O app pega só as linhas numeradas ("1 - Ana"), ignora cabeçalho, emojis e números vazios, separa os suplentes e confere cada nome com a galera (sem ligar para acento ou maiúscula). Se vier só o primeiro nome e ele bater com alguém da galera, o app pergunta se é a mesma pessoa ou um novato. Você escolhe entre usar todos ou só a lista principal. Quem você tirar da lista vai para o topo da galera.

## Nomes

Quem é adicionado fica salvo na **Galera**: na próxima vez é só tocar no nome (ou em "Adicionar todos"). Quem fica 30 dias sem jogar sai da galera sozinho.

Toque num nome (na lista ou em Galera > Editar) para mudar o nome. Pontos e histórico vão junto, útil quando chega um novato com o mesmo nome de alguém.


Nome repetido não entra. Se dois têm o mesmo primeiro nome, os dois precisam de sobrenome (ex.: João Silva e João Lima).

## Ordem dos jogos

- 4 times: T1 x T2, T3 x T4, vencedor J1 x vencedor J2, perdedor J1 x perdedor J2
- 3 times: T1 x T2, vencedor J1 x T3, perdedor J1 x T3
- 2 times: T1 x T2

## Como instalar no iPhone

1. Abra o link do app no **Safari**.
2. Toque em Compartilhar e depois em **Adicionar à Tela de Início**.
3. Use sempre pelo ícone. Assim a lista e o histórico ficam salvos.

## Publicar (GitHub Pages)

Settings > Pages > Deploy from a branch > `main` / root. GitHub Pages em repositório privado exige plano pago; em repositório público é grátis.

## Backup

Aba Pontos > Backup > Enviar backup gera um texto com lista, galera, pontos e histórico. Mande para você mesmo no WhatsApp. Para restaurar (outro celular ou depois de perder os dados), cole o texto no mesmo lugar e toque em Restaurar backup.
