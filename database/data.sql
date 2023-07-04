INSERT INTO public.estado (id, nombre) VALUES
(1, 'Habilitado'),
(2, 'Deshabilitado');

INSERT INTO public.categoria (id, nombre) VALUES
(1, 'Electrónica'),
(2, 'Ropa'),
(3, 'Alimentación'),
(4, 'Hogar'),
(5, 'Deportes');


INSERT INTO public.producto (id, sku, id_categoria, nombre_producto, descripcion, precio, id_estado, "estadoId") VALUES
(1, 12345, 1, 'Teléfono móvil', 'Teléfono móvil de última generación', 999.99, 1, 1),
(2, 67890, 1, 'Camiseta', 'Camiseta de algodón de color azul', 19.99, 1, 1);
