const fs = require('fs').promises;
const path = require('path');

// Brands.json dosyasından brand bilgilerini oku
async function loadBrandsData() {
  try {
    const data = await fs.readFile('data/brands.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading brands.json:', error);
    return [];
  }
}

// Brand klasöründeki dosyaları listele
async function getBrandFiles() {
  try {
    const files = await fs.readdir('public/images/brands');
    return files.filter(file => !file.startsWith('.') && file !== 'placeholder.png');
  } catch (error) {
    console.error('Error reading brands directory:', error);
    return [];
  }
}

async function main() {
  console.log('🧹 Starting cleanup analysis...\n');

  const brands = await loadBrandsData();
  const existingFiles = await getBrandFiles();
  
  // Logo yollarından kullanılan dosyaları topla
  const usedFiles = new Set();
  const placeholderBrands = [];
  
  for (const brand of brands) {
    const logoPath = brand.logo;
    const fileName = path.basename(logoPath);
    
    if (fileName === 'placeholder.png') {
      placeholderBrands.push(brand.name);
    } else {
      usedFiles.add(fileName);
    }
  }
  
  // Kullanılmayan dosyaları bul
  const unusedFiles = existingFiles.filter(file => !usedFiles.has(file));
  
  console.log(`📊 CURRENT STATUS:`);
  console.log(`• Total brands: ${brands.length}`);
  console.log(`• Brands with logos: ${brands.length - placeholderBrands.length}`);
  console.log(`• Brands with placeholder: ${placeholderBrands.length}`);
  console.log(`• Total files: ${existingFiles.length}`);
  console.log(`• Used files: ${usedFiles.size}`);
  console.log(`• Unused files: ${unusedFiles.length}\n`);
  
  if (unusedFiles.length > 0) {
    console.log(`🗑️ UNUSED FILES (${unusedFiles.length}):`);
    unusedFiles.forEach((file, index) => {
      console.log(`${(index + 1).toString().padStart(3, ' ')}. ${file}`);
    });
    console.log('\n');
  }
  
  if (placeholderBrands.length > 0) {
    console.log(`⚠️ BRANDS WITH PLACEHOLDER (${placeholderBrands.length}):`);
    placeholderBrands.slice(0, 20).forEach((brand, index) => {
      console.log(`${(index + 1).toString().padStart(3, ' ')}. ${brand}`);
    });
    if (placeholderBrands.length > 20) {
      console.log(`     ... and ${placeholderBrands.length - 20} more`);
    }
  }
}

main().catch(console.error);
