#!/bin/bash

echo "Installing Midas gui..."

# Make binaries executable
chmod +x /usr/local/bin/midas-shell

# Ensure ~/.config/midas directory exists
mkdir -p ~/.config/midas

# Copy configuration files
cp config/* ~/.config/midas

# Check if the Tauri app bundle exists
TAURI_APP_BUNDLE="bundle/macos/midas-gui.app"

if [ -d "$TAURI_APP_BUNDLE" ]; then
	echo "Installing the Midas GUI app..."

	# Copy the .app bundle to /Applications on macOS
	cp -r "$TAURI_APP_BUNDLE" /Applications/midas-gui.app
	echo "Dashboard installed to /Applications on macOS."
else
	echo "Tauri app bundle not found in $TAURI_APP_BUNDLE. Please build the Tauri app first."
	exit 1
fi

echo "Installation complete!"
