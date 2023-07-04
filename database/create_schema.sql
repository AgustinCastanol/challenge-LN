-- Create sequence for producto table
CREATE SEQUENCE IF NOT EXISTS producto_id_seq;
CREATE SEQUENCE IF NOT EXISTS categoria_id_seq;
CREATE SEQUENCE IF NOT EXISTS estado_id_seq;


-- Table: public.categoria

-- DROP TABLE IF EXISTS public.categoria;

CREATE TABLE IF NOT EXISTS public.categoria
(
    id integer NOT NULL DEFAULT nextval('categoria_id_seq'::regclass),
    nombre character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.categoria
    OWNER to postgres;

-- Table: public.estado

-- DROP TABLE IF EXISTS public.estado;

CREATE TABLE IF NOT EXISTS public.estado
(
    id integer NOT NULL DEFAULT nextval('estado_id_seq'::regclass),
    nombre character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_be2ef64a21d36522aa1ecb24886" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.estado
    OWNER to postgres;



-- Table: public.producto

-- DROP TABLE IF EXISTS public.producto;

CREATE TABLE IF NOT EXISTS public.producto
(
    id integer NOT NULL DEFAULT nextval('producto_id_seq'::regclass),
    sku integer NOT NULL,
    id_categoria integer NOT NULL,
    nombre_producto character varying COLLATE pg_catalog."default" NOT NULL,
    descripcion text COLLATE pg_catalog."default" NOT NULL,
    precio numeric(10,2) NOT NULL,
    id_estado integer NOT NULL,
    "estadoId" integer,
    CONSTRAINT "PK_5be023b11909fe103e24c740c7d" PRIMARY KEY (id),
    CONSTRAINT "FK_d47c7de13b6fce79db3c30506ad" FOREIGN KEY ("estadoId")
        REFERENCES public.estado (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_e87a319f3da1b6da5fedd1988be" FOREIGN KEY (id_categoria)
        REFERENCES public.categoria (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.producto
    OWNER to postgres;