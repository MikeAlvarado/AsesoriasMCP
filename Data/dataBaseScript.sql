CREATE TABLE Post (
    	
	id VARCHAR(200) NOT NULL PRIMARY KEY,

	email VARCHAR(100),
    	
	nombre VARCHAR(100),

	fecha VARCHAR(100),

	titulo VARCHAR(100),

	content VARCHAR(2000)
);


CREATE TABLE Reply (
	
	id VARCHAR(250) NOT NULL PRIMARY KEY,
	
	idpost VARCHAR(200) NOT NULL,
	
	nombre VARCHAR(100) NOT NULL,
	
	fecha VARCHAR(100),
	
	comentario VARCHAR(2000),

	FOREIGN KEY(idpost) references Post(id)
);