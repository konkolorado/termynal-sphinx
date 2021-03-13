***************
termynal-sphinx 
***************

Welcome! This is a demo project showing some features that can be pulled into
ReadTheDocs site. 

What gets shown off:

* The Furo sphinx theme
* Dark mode and light mode
* Termynal text animations

  * Animations can be restarted
  * Animations only start when the user can see them

* Supports hidable content

  * Useful for displaying JSON data

* Displays tabbed content
* Displays different types of admonitions aka notes
* Hidden toctree
* External link to GitHub
* Renders an OpenAPI spec
* Adds copy button to code samples
* Adds custom site logo + html title

Content
=======

The highlighting on this code snippet will change depending on if the
browser has night mode active. Also, you can click to copy the code:

.. code:: python
   
   for i in range(100):
      print(i)

   print("All done")

This animation will begin immediately, and when complete, will allow the user to
restart the animation:

.. raw:: html
   :file: _static/html/example.html

|

.. tab:: Bash

   .. code:: bash
   
        date --UTC

.. tab:: ZSH
   
   .. code:: bash

      date -U

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


This animation only starts once the user scrolls down far enough in the browser
window to see it. It will also display a restart option once it completes.

.. raw:: html
    :file: _static/html/installation.html

.. toctree::
   :maxdepth: 2
   :caption: Contents:
   :hidden:

   api
   GitHub Repository <https://github.com/pradyunsg/furo>