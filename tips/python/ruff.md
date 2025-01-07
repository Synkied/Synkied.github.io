# Ruff

Ruff is a Python linter that is faster than any others. Ruff is also 100% compatible with Flake8 configuration files.

Ruff is faster than other linters because it uses Rust as its core language, making it faster than Python-based linters like Flake8 and Black. It also uses a thread pool to run checks in parallel, and uses a single pass of the source code to find errors, instead of multiple passes like Flake8 and Black.

## Install
https://docs.astral.sh/ruff/installation/

## Linter
Can lint and fix code.

## Formater
Configured in a now standard `pyproject.toml`.