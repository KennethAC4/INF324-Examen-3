CREATE TABLE alumno (
    ci varchar(10) PRIMARY KEY NOT null,
    nombre varchar(25),
    paterno varchar(25),
    materno varchar(25),
    promedioAprobadas int,
    promedioGeneral int
);

insert into alumno values ('1','nom1','pp1','mm1',76,60);

delete from alumno Where ci = 4;

update alumno set nombre='yyy', paterno='rrr', materno='ggg', promedioAprobadas=5, promedioGeneral=3  where ci=4;

select * from alumno