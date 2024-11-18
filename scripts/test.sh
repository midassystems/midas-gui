#!/bin/bash

test_backend() {
	echo "Building in development mode..."
	if cd src-tauri; then
		cargo test -- --nocapture
	fi
}

test_frontend() {
	yarn test # using vitetest, tests need to be updated
}

options() {
	echo "Which would you like to run?"
	echo "1 - Frontend"
	echo "2 - Backend"
}

# Main
while true; do
	options
	read -r option

	case $option in
	1)
		test_frontend
		break
		;;
	2)
		test_backend
		break
		;;
	*) echo "Please choose a different one." ;;
	esac
done
