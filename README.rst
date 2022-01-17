termynal-sphinx
---------------

A collection of Sphinx related utilities to build modern code documentation.

Installation
^^^^^^^^^^^^

To run these examples locally, first install the project dependencies:

``poetry install``

Then build the documentation using the make target:

``make docs``

The documentation will be built in ``docs/built/html/``. You can open the
``index.html`` for for a rendering of what the site's landing page will look like. 

Examples
^^^^^^^^

What gets shown off:

* The Furo sphinx theme
* Adds custom site logo + html title
* Dark mode and light mode
* Adds copy button to code snippets
* Termynal text animations
  
  * Animations can be restarted
  * Animations only start when the user can see them

* Displays collapsible content
  
  * Useful for displaying JSON data

* Displays tabbed content
* Displays different types of admonitions (notes)
* Renders an OpenAPI spec
* Renders automatically documented classes, methods, properties
* Hidden toctree
* External link to GitHub