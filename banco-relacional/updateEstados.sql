--select * from estados

update estados
set nome = 'Maranhão'
where sigla = 'MA'

update estados
set nome = 'Paraná',
    populacao = 11.32
where id = 17

select nome, sigla, populacao from estados est 
where id = 17