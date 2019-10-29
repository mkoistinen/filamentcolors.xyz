.PHONY: build run
build:
	.venv/bin/python manage.py collectstatic --noinput
	cp -a .venv/lib/python3.7/site-packages/rest_framework/static/rest_framework/ filamentcolors/static/rest_framework
	cd filamentcolors/preact; preact build --dest ../static/build

run:
	cd filamentcolors/preact; preact watch
