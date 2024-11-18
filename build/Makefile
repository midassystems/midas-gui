.PHONY: all clean build package

all: clean build package

clean:
	# Clean up previous release directory
	rm -rf midas-release

	# Clean up previous tar.gz
	rm -f midas-1.0.0.tar.gz

build:
	# Build frontend assets with Yarn
	yarn install && yarn tauri build

package:
	# Create release directory structure
	mkdir -p midas-release
	mkdir -p midas-release/config
	mkdir -p midas-release/bundle

	# Copy the Tauri app bundle (for macOS)
	cp -r src-tauri/target/release/bundle/* midas-release/bundle/

	# Copy additional required files
	cp -r config/* midas-release/config/
	
	# Installation script
	cp ./scripts/install.sh midas-release/
	cp README.md midas-release/

	# Create a tar.gz archive of the release
	tar -czvf midas-1.0.0.tar.gz midas-release/
