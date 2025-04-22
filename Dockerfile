FROM nginx:alpine

COPY .web /usr/share/nginx/html

EXPOSE 80







# # Use official Python image
# FROM python:3.11-slim

# # Set working directory
# WORKDIR /app

# # Install system dependencies
# RUN apt-get update && apt-get install -y build-essential libpq-dev

# RUN apt-get update && \
#     apt-get install -y build-essential libpq-dev unzip curl && \
#     rm -rf /var/lib/apt/lists/*


# # Copy files
# COPY . .

# # Install Python dependencies
# RUN pip install --upgrade pip && pip install -r requirements.txt

# # Run build (optional: or use during container run)
# # RUN reflex build

# # Start the app
# # CMD ["reflex", "run", "--env", "production", "--port", "3000", "--backend", "disabled"]

# # for development
# # CMD ["reflex", "run", "--dev", "--backend", "disabled"]
# # CMD ["reflex", "run", "--env", "production", "--frontend-port", "3000", "--backend", "disabled"]
# # CMD ["reflex", "run"]


# # Export the frontend during the build (this will create a static site in .web)
# RUN reflex export --env prod

# EXPOSE 3000





# # CMD ["reflex", "run", "--env", "production", "--frontend-port", "3000", "--backend", "disabled", "--host", "0.0.0.0"]
# # CMD ["reflex", "run", "--env", "production", "--frontend-port", "3000", "--frontend-only", "--host", "0.0.0.0"]

# CMD ["reflex", "run", "--env", "prod", "--frontend-port", "3000", "--frontend-only"]
# # CMD ["reflex", "run", "--env", "prod", "--frontend-port", "3000", "--frontend-only"]

