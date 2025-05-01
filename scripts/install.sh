#!/bin/bash

set -e
OS=$(uname -s)

REPO_URL="https://github.com/midassystems/midas-gui.git"
BUILD_DIR="$(mktemp -d)"
INSTALL_PATH="$HOME/.config/midas/bin"

# Clone repo
git clone --depth 1 --branch updating_install "$REPO_URL" "$BUILD_DIR"

# Build
cd "$BUILD_DIR"
yarn install && yarn tauri build

# Install
mkdir -p "$INSTALL_PATH"

# Copy configuration files conditionally
files=("gui-config.toml")

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

cd "src-tauri/target/release"

# MacOS installation
if [[ "$OS" == "Darwin" ]]; then
	TAURI_APP_BUNDLE="bundle/macos/Midas.app"
	if [ -d "$TAURI_APP_BUNDLE" ]; then
		rm -r /Applications/Midas.app
		cp -r "$TAURI_APP_BUNDLE" /Applications/Midas.app
		echo "Installed to /Applications on macOS."
	else
		echo "Error finding build artifact $TAURI_APP_BUNDLE."
		exit 1
	fi
# Linux installation
elif [[ "$OS" == "Linux" ]]; then
	APPDIR_DIR="bundle/appimage/Midas.AppDir"
	APPIMAGE=$(find "bundle/appimage" -name "*.AppImage" -print -quit)

	if [ -d "$APPDIR_DIR" ]; then
		OPT_DIR="/opt/midas"
		sudo mkdir -p "$OPT_DIR"

		# Copy the entire Midas.AppDir directory
		sudo cp -r "$APPDIR_DIR" "$OPT_DIR/"

		# Copy the AppImage to /opt/midas
		sudo cp "$APPIMAGE" "$OPT_DIR/Midas.AppImage"
		sudo chmod +x "$OPT_DIR/Midas.AppImage"

		# Create .desktop file for the application
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

		# echo "Dashboard installed to $OPT_DIR."
		# echo "You can run it using the application menu or directly from $OPT_DIR/Midas.AppImage."
	else
		echo "Required files (Midas.AppDir or AppImage) not found in $APPDIR_DIR."
		exit 1
	fi
else
	echo "Unsupported OS: $OS"
	exit 1
fi

# Cleanup
rm -rf "$BUILD_DIR"

echo "Installation complete!"
