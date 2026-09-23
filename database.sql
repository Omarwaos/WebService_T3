-- 1. Crear la base de datos si no existe
CREATE DATABASE db_audifonos

USE db_audifonos;

-- 2. Crear la tabla de audífonos
CREATE TABLE IF NOT EXISTS audifonos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    marca VARCHAR(60) NOT NULL,
    precio DECIMAL(8, 2) NOT NULL,
    tipo ENUM('In-Ear', 'Over-Ear', 'On-Ear') NOT NULL,
    cancelacion_ruido BOOLEAN DEFAULT FALSE,
    create_at 	DATETIME 	NOT NULL DEFAULT NOW(),
    update_at	DATETIME 	NULL
);ENGINE =INNODB;

-- 3. Insertar datos de prueba
INSERT INTO audifonos (nombre, marca, precio, tipo, cancelacion_ruido) VALUES
('WH-1000XM5', 'Sony', 1399.00, 'Over-Ear', TRUE),
('AirPods Pro 2', 'Apple', 999.00, 'In-Ear', TRUE),
('Tune 510BT', 'JBL', 149.00, 'On-Ear', FALSE),
('QuietComfort Ultra', 'Bose', 1450.50, 'Over-Ear', TRUE),
('Major IV', 'Marshall', 520.00, 'On-Ear', FALSE);

SELECT * FROM audifonos;