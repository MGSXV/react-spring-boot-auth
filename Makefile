CLIENT_SERVICE=auth-client-dev
SERVER_SERVICE=auth-server-dev
CLIENT_IMAGE=auth-client-dev-image
SERVER_IMAGE=auth-server-dev-image
CLIENT_CONTAINER=auth-client-dev-container
SERVER_CONTAINER=auth-server-dev-container

all:
	docker-compose up --build

client:
	docker-compose up --build $(CLIENT_SERVICE)

server:
	docker-compose up --build $(SERVER_SERVICE)

exec-client:
	docker-compose exec $(CLIENT_SERVICE) sh

exec-server:
	docker-compose exec $(SERVER_SERVICE) sh

stop-client:
	docker-compose stop $(CLIENT_SERVICE)

stop-server:
	docker-compose stop $(SERVER_SERVICE)

stop: stop-client stop-server

clean:
	docker-compose down

.PHONY: all client server exec-client exec-server stop-client stop-server stop clean