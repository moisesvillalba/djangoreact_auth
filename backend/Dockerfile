# Usa una imagen base de Python
FROM python:3.8

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo requirements.txt al directorio de trabajo
COPY requirements.txt /app/

# Instala las dependencias de la aplicación
RUN pip install -r requirements.txt

# Copia el código de la aplicación al directorio de trabajo
COPY . /app/

# Expone el puerto 8000 en el contenedor
EXPOSE 8000

# Ejecuta 'migrate' durante la construcción de la imagen
RUN python manage.py makemigrations
RUN python manage.py migrate

# Comando para ejecutar automáticamente el servidor de desarrollo de Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
