virtualenv = /home/akash/virtual-python-envs/djwebenv
projectdir = .

run:
	bash -c 'source $(virtualenv)/bin/activate && python $(projectdir)/djwebpack/manage.py runserver'

shell:
	bash -c 'source $(virtualenv)/bin/activate && python $(projectdir)/djwebpack/manage.py shell'

makemigrations:
	bash -c 'source $(virtualenv)/bin/activate && python $(projectdir)/djwebpack/manage.py makemigrations'

migrate:
	bash -c 'source $(virtualenv)/bin/activate && python $(projectdir)/djwebpack/manage.py migrate'


virtual_env:
	virtualenv -p python3 $(virtualenv)

install_requirements:
	bash -c 'source $(virtualenv)/bin/activate && pip install -r $(projectdir)/djwebpack/requirements.txt'