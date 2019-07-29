# GrabilityFrontEndTest #
___________________________________________
Prueba de frontEnd para www.grability.com, dentro del repositorio encontraras los siguientes directorios:

**api:** Este directorio contiene los archivos correspondientes al api consumida por la aplicacion (news_mock.json).

**app:** Este directorio contiene la aplicacion angular que se va a mostrar de cara al cliente.
Una vez instalado y configurado correctamente al entrar**(localhost(o de acuerdo al server ejecutado)/nombre_repo/app/)** podra ver el feed de noticias funcional.


### Requerimientos ###
_______________________

*  apache, SimpleHTTPServer,http-server,Nginx  o gulp...


### Instalación ###
____________________
1. Descargar el Repositorio o Clonalo en tu equipo.

2.Si todo ha funcionado correctamente ahora puedes abrir el navegador de tu preferencia y navegar hasta el directorio app dentro del repo **(localhost(o de acuerdo al server ejecutado)/nombre_del_repo/app/)**.

**NOTA:** en el directorio  app/config/ esta el archivo config.js el cual puede editar para agregar configuracion custom en el dominio y carpeta accedida al mismo.

**Ejemp Default:** var domain = $location.host()+ '/GrabilityFrontEndTest';

**Ejemp Custom:** var domain = $location.host()+ '/nombre_directorio_custom';
