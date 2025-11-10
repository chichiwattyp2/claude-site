#!/bin/bash

# Script to download face-api.js models
# Run this after npm install to set up the mood detection feature

echo "📦 Downloading face-api.js models..."

# Create models directory if it doesn't exist
mkdir -p public/models

cd public/models

# Base URL for face-api.js models
BASE_URL="https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights"

echo "⬇️  Downloading Tiny Face Detector model..."
curl -O "${BASE_URL}/tiny_face_detector_model-weights_manifest.json"
curl -O "${BASE_URL}/tiny_face_detector_model-shard1"

echo "⬇️  Downloading Face Expression model..."
curl -O "${BASE_URL}/face_expression_model-weights_manifest.json"
curl -O "${BASE_URL}/face_expression_model-shard1"

echo "✅ Models downloaded successfully!"
echo "You can now run: npm run dev"
