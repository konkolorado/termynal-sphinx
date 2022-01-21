***************
termynal-sphinx 
***************

Welcome! This is a demo project showing some features that can be pulled into
a ReadTheDocs site using the `furo` theme. Notice that the link to the porject's
GitHub repository is explicitly added in the toctree.

Copy-able code
==============

All code snippets in the examples below will have a copy button on the top right
corner which lets reader click to copy the entire contents in the block. The
functionality is provided by `sphinx-copybutton`. 

Code highlighting
=================

Furo supports day and night mode which carries onto the highlighting for code
snippets. The syntax highlighting on the code snippet below will change
depending on if the browser has night mode active.

.. code:: python
   
   for i in range(100):
      print(i)

   print("All done")

Terminal animations
===================

This animation will begin immediately, and when complete, will allow the user to
restart the animation. This uses an implementation of the termynal JS library
which gets loaded in the project's `conf.py` file.

.. raw:: html
   :file: _static/html/example.html


Collapsible content
===================

Example input and output can be too long to comfortably display on a webpage.
This technique allows long content to render using HTML's `details` tag. There's
custom JS that get's loaded and replaces the HTML content by it's data-name
attribute with content stored in a variable of the same name.

.. raw:: html
   :file: _static/html/collapsible.html


Tabbed content
==============

Display alternate content in tabs using the `sphinx-inline-tabs` extension.

.. tab:: Bash

   .. code:: bash
   
        date --UTC

.. tab:: ZSH
   
   .. code:: bash

      date -U

Admonitions
===========

Sphinx supports many different types of admonitions:

.. admonition:: Many types of admonitions
   :class: note

   note

.. admonition:: Many types of admonitions
   :class: admonition

   admonition

.. admonition:: Many types of admonitions
   :class: warning

   warning

.. admonition:: Many types of admonitions
   :class: danger

   danger

.. admonition:: Many types of admonitions
   :class: important

   important

.. admonition:: Many types of admonitions
   :class: hint

   hint

.. admonition:: Many types of admonitions
   :class: tip

   tip

.. admonition:: Many types of admonitions
   :class: seealso

   seealso

Delayed animations
==================

This animation only starts once the user scrolls down far enough in the browser
window to see it. It will also display a restart option once it completes.

.. raw:: html
    :file: _static/html/installation.html

Rendered OpenAPI
================

Render an OpenAPI document using the `sphinxcontrib-openapi` extension. 

.. openapi:: _static/specs/openapi.yml

Autodoc classes
===============

Create automatic documentation of classes based on docstrings and type hints. 

.. autoclass:: termynal_sphinx.Person
    :members:
    :member-order: bysource

Custom directives
=================

This section uses a custom directive to render an OpenAPI spec.

.. simpleopenapi:: _static/specs/openapi.yml

.. toctree::
   :maxdepth: 2
   :caption: Contents:
   :hidden:

   GitHub Repository <https://github.com/konkolorado/termynal-sphinx>