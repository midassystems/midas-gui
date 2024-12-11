#!/bin/bash

copy_config() {
	# List of configuration files
	files=("gui-config.toml")

	# Copy configuration files conditionally
	for file in "${files[@]}"; do
		src_file="config/$file"
		dest_file="$HOME/.config/midas/$file"

		if [ -e "$dest_file" ]; then
			echo "Skipped $file as it already exists"
		else
			cp "$src_file" "$dest_file"
			echo "Copied $file to $dest_file"
		fi
	done
}

echo "Installing Midas gui..."

# Ensure ~/.config/midas directory exists
mkdir -p ~/.config/midas

# Copy configuration files
copy_config

# Check if the Tauri app bundle exists
TAURI_APP_BUNDLE="bundle/macos/Midas.app"

if [ -d "$TAURI_APP_BUNDLE" ]; then
	echo "Installing the Midas GUI app..."
	rm -r /Applications/Midas.app
	cp -r "$TAURI_APP_BUNDLE" /Applications/Midas.app
	echo "Dashboard installed to /Applications on macOS."
else
	echo "Tauri app bundle not found in $TAURI_APP_BUNDLE. Please build the Tauri app first."
	exit 1
fi

echo "Installation complete!"
