SNACK1
- creo un array che ha come oggetti gli invitati che a loro volta hanno come parametri:
    - nome del tavolo
    - nome invitato

- apro un metodo forEach che ha come argomenti elemets e index
    -stampo in console per ogni invitato 
        - nome tavolo
        - nove invitato 
        - indice +1

---------------------------------------------------------------------

SNACK2
- creo un array di oggetti che contiene gli studenti con i loro parametri

- per stampare le targhe: 
    - uso il metodo Map a cui passo l argomento element
    - ritorno element.nome.uppercase per avere i nomi in maiuscolo

- per stampare gli studenti che hanno un voto superiore a 70
    - uso il metodo filter passando l elemento come nel forEach
      - inserisco la condizione element.voti > 70 ===> return true
    
    - stampo in console l array ottenuto dal filter

- per stampare gli studenti che hann un voto > 70 e un id > 120
    - utilizzo l array ottenuto dal filter e inserisco la condizione 
        id > 120 
    
    - stampo l array ottenuto

---------------------------------------------------------------------

SNACK3
- Creo un array di oggetti
- inizzializzo un oggetto in cui inseriro i dati della bici piu leggera
- utilizzando il metodo foreach confronto il peso delle bici nell array con il peso della bici piu leggera

- una volta ciclati tutti i dati destrutturo i parametri salvati nell oggetto 

- stampo in console i dati

---------------------------------------------------------------------

SNACK4
- Creo un array di oggetti di squadre di calcio.
    -Ogni squadra ha come parametri: nome, punti fatti = 0, falli subiti = 0.

- con il metodo map creo un altro array di squadre ma con valori random assegnati a falli e punti


- creo un nuovo array dall array precedente con map
    - destruttuo gli oggetti contenuti nell aray
    - ritorno solo i valori che mi interessano

- console log