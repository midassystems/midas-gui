.PHONY: all clean build package

all: clean build package

clean:
	# Clean up previous release directory
	rm -rf midas-gui-release

	# Clean up previous tar.gz
	rm -f midas-gui-1.0.0.tar.gz

build:
	# Build frontend assets with Yarn
	yarn install && yarn tauri build

package:
	# Create release directory structure
	mkdir -p midas-gui-release
	mkdir -p midas-gui-release/config
	mkdir -p midas-gui-release/bundle

	# Copy the Tauri app bundle (for macOS)
	cp -r src-tauri/target/release/bundle/* midas-gui-release/bundle/

	# Copy additional required files
	cp -r config/* midas-gui-release/config/
	
	# Installation script
	cp ./scripts/install.sh midas-gui-release/
	chmod +x midas-gui-release/install.sh

	# Create a tar.gz archive of the release
	tar -czvf release/midas-1.0.0.tar.gz midas-gui-release/
