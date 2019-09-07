.PHONY: build run
build:
	.venv/bin/python manage.py collectstatic --noinput
	cd filamentcolors/preact; preact build --dest ../static/build

run:
	cd filamentcolors/preact; preact watch
