.DEFAULT_GOAL := help
help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":[^#]*?## "}; {printf "\033[36m%-50s\033[0m %s\n", $$1, $$2}'

.PHONY: build
build: ## Build static HTML source
	npm run build

.PHONY: convert
convert: ## Convert certificate from webp to png
	@./bin/convert-webp2png.py $(i) $(o)

# vim: noexpandtab