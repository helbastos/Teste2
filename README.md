# Sorteio do Vôlei

App para sortear times de vôlei em quartetos. Funciona no iPhone como app de tela inicial (sem App Store) e offline.

## Regras do sorteio

- Até 16 nomes. Times de 4, o último fica com quem sobrar.
  - 13 a 16 nomes: 4 times
  - 9 a 12 nomes: 3 times
  - 8 nomes: 2 times de 4
  - 4 a 7 nomes: 2 times equilibrados (ex.: 7 vira 4 e 3)
- Mais de 16: o app pede `nomes - 16` duplas de revezamento. Cada dupla ocupa uma vaga e aparece como `nome1 / nome2`.
- O sorteio evita repetir parceiros das rodadas recentes e usa o ranking para não juntar sempre os mesmos que ganham.
- Antes de cada sorteio o app confirma a lista. Antes de um novo sorteio, pede o ranking da rodada.

## Ordem dos jogos

- 4 times: T1 x T2, T3 x T4, vencedor J1 x vencedor J2, perdedor J1 x perdedor J2
- 3 times: T1 x T2, T3 x perdedor J1, T3 x vencedor J1
- 2 times: T1 x T2

## Como instalar no iPhone

1. Abra o link do app no **Safari**.
2. Toque em Compartilhar e depois em **Adicionar à Tela de Início**.
3. Use sempre pelo ícone. Assim a lista e o histórico ficam salvos.

## Publicar (GitHub Pages)

Settings > Pages > Deploy from a branch > `main` / root. GitHub Pages em repositório privado exige plano pago; em repositório público é grátis.
