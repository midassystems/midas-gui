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

create_desktop_file() {
	DESKTOP_FILE="$HOME/.local/share/applications/Midas.desktop"
	mkdir -p "$(dirname "$DESKTOP_FILE")"

	cat <<EOF >"$DESKTOP_FILE"
[Desktop Entry]
Name=Midas
Comment=Midas Trading Dashboard
Exec=/opt/midas/Midas.AppImage
Icon=/opt/midas/Midas.AppDir/Midas.png
Terminal=false
Type=Application
Categories=Finance;Trading;Utility;
EOF

	echo "Desktop entry created at $DESKTOP_FILE."
}

echo "Installing Midas GUI..."

# Determine the OS
OS=$(uname -s)

echo "Installing Midas gui on $OS..."

# Ensure ~/.config/midas directory exists
mkdir -p ~/.config/midas

# Copy configuration files
copy_config

# Installation paths and logic
if [[ "$OS" == "Darwin" ]]; then
	# macOS installation
	TAURI_APP_BUNDLE="bundle/macos/Midas.app"
	if [ -d "$TAURI_APP_BUNDLE" ]; then
		echo "Installing the Midas GUI app for macOS..."
		rm -r /Applications/Midas.app
		cp -r "$TAURI_APP_BUNDLE" /Applications/Midas.app
		echo "Dashboard installed to /Applications on macOS."
	else
		echo "Tauri app bundle not found in $TAURI_APP_BUNDLE. Please build the Tauri app first."
		exit 1
	fi
elif [[ "$OS" == "Linux" ]]; then
	# Linux installation
	APPDIR_DIR="bundle/appimage/Midas.AppDir"
	APPIMAGE=$(find "bundle/appimage" -name "*.AppImage" -print -quit)
	# APPIMAGE="bundle/appimage/Midas_*.AppImage"
	# Debugging paths
	echo "Checking for APPDIR_DIR: $APPDIR_DIR"
	ls -ld "$APPDIR_DIR"
	echo "Checking for APPIMAGE: $APPIMAGE"

	if [ -d "$APPDIR_DIR" ]; then
		echo "Installing the Midas GUI app for Linux..."
		# Create /opt/midas if it doesn't exist
		OPT_DIR="/opt/midas"
		sudo mkdir -p "$OPT_DIR"

		# Copy the entire Midas.AppDir directory to /opt/midas
		sudo cp -r "$APPDIR_DIR" "$OPT_DIR/"

		# Copy the AppImage to /opt/midas
		sudo cp "$APPIMAGE" "$OPT_DIR/Midas.AppImage"
		sudo chmod +x "$OPT_DIR/Midas.AppImage"

		# Create .desktop file for the application
		create_desktop_file

		echo "Dashboard installed to $OPT_DIR."
		echo "You can run it using the application menu or directly from $OPT_DIR/Midas.AppImage."
	else
		echo "Required files (Midas.AppDir or AppImage) not found in $APPDIR_DIR. Please build them first."
		exit 1
	fi
else
	echo "Unsupported OS: $OS"
	exit 1
fi

echo "Installation complete!"

# # Check if the Tauri app bundle exists
# TAURI_APP_BUNDLE="bundle/macos/Midas.app"
#
# if [ -d "$TAURI_APP_BUNDLE" ]; then
# 	echo "Installing the Midas GUI app..."
# 	rm -r /Applications/Midas.app
# 	cp -r "$TAURI_APP_BUNDLE" /Applications/Midas.app
# 	echo "Dashboard installed to /Applications on macOS."
# else
# 	echo "Tauri app bundle not found in $TAURI_APP_BUNDLE. Please build the Tauri app first."
# 	exit 1
# fi

# echo "Installation complete!"
