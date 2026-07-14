/**
 * Build script for Feniks CMS
 * Merges individual apartment/review files from data/apartments/*.json
 * and data/reviews/*.json into single JSON files for the frontend.
 * 
 * Run: node scripts/build.js
 */

const fs = require('fs');
const path = require('path');

function loadJsonDir(dirPath) {
    const files = fs.readdirSync(dirPath)
        .filter(f => f.endsWith('.json'))
        .sort();
    return files.map(f => {
        const content = fs.readFileSync(path.join(dirPath, f), 'utf8');
        return JSON.parse(content);
    });
}

// Build apartments.json
const apartments = loadJsonDir(path.join(__dirname, '..', 'data', 'apartments'));
const aptOutput = path.join(__dirname, '..', 'data', 'apartments.json');
fs.writeFileSync(aptOutput, JSON.stringify(apartments, null, 2));
console.log(`✓ apartments.json — ${apartments.length} apartmentów`);

// Build reviews.json
const reviews = loadJsonDir(path.join(__dirname, '..', 'data', 'reviews'));
const revOutput = path.join(__dirname, '..', 'data', 'reviews.json');
fs.writeFileSync(revOutput, JSON.stringify(reviews, null, 2));
console.log(`✓ reviews.json — ${reviews.length} opinii`);

console.log('\n✅ Build complete!');
