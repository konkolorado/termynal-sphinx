.PHONY: help docs

define HELPTEXT
Please use "make <target>" where <target> is one of
 docs:   to build the project's documentation
endef
export HELPTEXT

help:
	@echo "$$HELPTEXT"

docs:
	poetry run make --directory=docs html
