select 
    regiao as 'Regiões',
    SUM(populacao) as Total
from estados
group by regiao
order by Total desc