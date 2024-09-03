const fs = require('fs');
const http = require('http');
const https = require('https');
const url = require('url');

if (process.argv.length < 3) {
  console.error('Usage: node urls.js FILENAME');
  process.exit(1);
}

const filename = process.argv[2];

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    process.exit(1);
  }

    const urls = data.split('\n').filter(line => line.trim() !== '');

    urls.forEach(urlString => {
        const parsedUrl = url.parse(urlString.trim());
        const protocol = parsedUrl.protocol === 'https:' ? https : http;

        protocol.get(urlString, res => {
        let html = '';

        res.on('data', chunk => {
            html += chunk;
        });

        res.on('end', () => {
            const outputFilename = parsedUrl.hostname;

           fs.writeFile(outputFilename, html, err => {
            if (err) {
                console.error('Error writing file:', err.message);
            } else {
                console.log(`Wrote to ${outputFilename}`);
            }
            });
        });
    }).on('error', err => {
      console.error(`Couldn't download ${urlString}`);
    });
  });
});