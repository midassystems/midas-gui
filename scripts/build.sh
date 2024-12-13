#!/bin/bash

dev() {
	yarn install
	RUST_ENV=dev yarn tauri dev
}

prod() {
	echo "Building in production mode..."
	make -f build/Makefile
}

options() {
	echo "Which would you like to run?"
	echo "1 - Development"
	echo "2 - Production"

}

# Main
while true; do
	options
	read -r option

	case $option in
	1)
		dev
		break
		;;
	2)
		prod
		break
		;;
	*) echo "Please choose a different one." ;;
	esac
done
