#!/bin/bash

for file in "$@"; do
    case $file in
        *.ts | *.js | *.java | *.html | *.css | *.scss | *.handlebars | *.sh)
            echo $file Licence MPL
            ;;

        *.adoc | *.svg)
            echo $file Licence Creative Commons
            ;;
    esac
done