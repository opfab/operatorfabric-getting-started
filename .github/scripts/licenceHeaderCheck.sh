#!/bin/bash

incorrect_files=()

check_pattern() {
    file="$1"
    pattern="$2"
    if ! grep -q -i -w "$pattern" "$file"; then
        incorrect_files+=("$file")
    fi
}

for file in "$@"; do
    case "$file" in
        *.ts | *.js | *.java | *.html | *.css | *.scss | *.handlebars | *.sh)
            check_pattern "$file" "copy"
            ;;

        *.adoc | *.svg)
            check_pattern "$file" "right"
            ;;
    esac
done

if [ "${#incorrect_files[@]}" -gt 0 ]; then
    echo "::error::Missing correct copyright header in :"
    for file in "   ${incorrect_files[@]}"; do
        echo "$file"
    done
    exit 1
fi