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

## Rodadas fora do padrão

- **Montar times na mão:** na Lista, além de Sortear, dá para montar os times tocando no número do time ao lado de cada nome. Serve quando o sorteio foi feito fora do app. Quem ficar sem time não joga a rodada.
- **Editar os times:** enquanto nenhum placar da rodada foi marcado, dá para mexer nos times.
- **Encerrar a rodada agora:** quando o número de times muda no meio (alguém foi embora ou chegou gente). Os jogos já marcados contam 1 ponto por vitória, sem bônus. Depois é só sortear ou montar a rodada nova; a montagem já começa com os times da rodada encerrada.

## Pontuação

- Cada vitória vale 1 ponto, para quem estava em quadra naquele jogo.
- 4 times: quem é do time campeão sorteado e ganhou os dois jogos leva +1 de bônus. Para quem joga a rodada inteira isso dá 1º = 3, 2º = 1, 3º = 1, 4º = 0.
- 3 times: 1 por vitória, sem bônus.
- 2 times: 1 pela vitória.
- A classificação (aba Pontos) é pela média de pontos por jogo, a mesma que o sorteio usa. Só entra quem tem pelo menos 6 jogos; quem tem menos aparece em "Ainda entrando no ranking". Quem fica mais de 2 meses sem ir sai da classificação, mas os pontos ficam guardados e voltam quando a pessoa jogar de novo.

### Trocas durante a rodada

Em cada jogo, "Alguém saiu ou entrou neste jogo?" permite riscar quem saiu e adicionar quem entrou (substituto, quem completou o time ou alguém de fora da lista). Os times sorteados não mudam. Quem jogou ganha o ponto se o time vencer e o jogo conta para ela.

Cada time tem no máximo 4 em quadra por jogo. Com dupla de revezamento, ao marcar o placar o app pede para riscar quem não jogou. Com 3 ou 4 times, todo time joga com exatamente 4: se um time estiver com menos, ao marcar o placar o app pede para adicionar quem completou. Com 4 em quadra não dá para adicionar ninguém sem antes riscar alguém.

## Lista de presença do WhatsApp

Cole a lista inteira no campo de nomes. O app pega só as linhas numeradas ("1 - Ana"), ignora cabeçalho, emojis e números vazios, separa os suplentes e confere cada nome com a galera e com o ranking (sem ligar para acento ou maiúscula), inclusive quem já saiu da galera. Se vier só o primeiro nome e ele bater com alguém da galera, o app pergunta se é a mesma pessoa ou um novato. Você escolhe entre usar todos ou só a lista principal. Quem você tirar da lista vai para o topo da galera.

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
