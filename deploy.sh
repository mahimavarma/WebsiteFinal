# deploy.sh
#!/bin/bash

echo "📥 Pulling latest code..."
git pull origin main

echo "📦 Installing dependencies..."
npm install

echo "⚙️ Building project..."
npm run build

echo "📂 Deploying build files..."
cp -r build/* $HOME/public_html/
