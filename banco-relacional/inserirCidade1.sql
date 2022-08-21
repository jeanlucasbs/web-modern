select * from cidades

insert into cidades(nome, area, estado_id)
values('X', 795, 24)

insert into cidades(nome, area, estado_id)
values('Niteroi', 133.9, 25)

insert into cidades (nome, area, estado_id)
values('Caruaru', 920.6, (select id from estados where sigla = 'PE'))

update cidades
set nome = 'Campinas'
where id = 1