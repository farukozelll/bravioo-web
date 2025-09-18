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

// Ana audit fonksiyonu
async function auditBrands() {
  console.log('🔍 Starting brand audit...\n');

  const brands = await loadBrandsData();
  const existingFiles = await getBrandFiles();
  
  // Logo yollarından kullanılan dosyaları topla
  const usedFiles = new Set();
  const placeholderBrands = [];
  const validLogoBrands = [];
  
  for (const brand of brands) {
    const logoPath = brand.logo;
    const fileName = path.basename(logoPath);
    
    if (fileName === 'placeholder.png') {
      placeholderBrands.push(brand);
    } else if (existingFiles.includes(fileName)) {
      usedFiles.add(fileName);
      validLogoBrands.push(brand);
    } else {
      console.log(`❌ Missing file for ${brand.name}: ${fileName}`);
    }
  }
  
  // Kullanılmayan dosyaları bul
  const unusedFiles = existingFiles.filter(file => !usedFiles.has(file));
  
  console.log('📊 AUDIT RESULTS:\n');
  
  console.log(`📈 SUMMARY:`);
  console.log(`  • Total brands: ${brands.length}`);
  console.log(`  • Brands with valid logos: ${validLogoBrands.length}`);
  console.log(`  • Brands with placeholder: ${placeholderBrands.length}`);
  console.log(`  • Total files in folder: ${existingFiles.length}`);
  console.log(`  • Used files: ${usedFiles.size}`);
  console.log(`  • Unused files: ${unusedFiles.length}\n`);
  
  if (placeholderBrands.length > 0) {
    console.log(`⚠️  BRANDS STILL USING PLACEHOLDER (${placeholderBrands.length}):`);
    placeholderBrands.forEach(brand => {
      console.log(`  • ${brand.name} (${brand.category})`);
    });
    console.log('');
  }
  
  if (unusedFiles.length > 0) {
    console.log(`🗑️  UNUSED FILES (${unusedFiles.length}):`);
    unusedFiles.forEach(file => {
      console.log(`  • ${file}`);
    });
    console.log('');
  }
  
  // Kategori analizi
  const categoryStats = {};
  brands.forEach(brand => {
    const category = brand.category;
    if (!categoryStats[category]) {
      categoryStats[category] = { total: 0, withLogo: 0, placeholder: 0 };
    }
    categoryStats[category].total++;
    if (brand.logo.includes('placeholder')) {
      categoryStats[category].placeholder++;
    } else {
      categoryStats[category].withLogo++;
    }
  });
  
  console.log('📋 CATEGORY BREAKDOWN:');
  Object.entries(categoryStats)
    .sort((a, b) => b[1].total - a[1].total)
    .forEach(([category, stats]) => {
      const percentage = Math.round((stats.withLogo / stats.total) * 100);
      console.log(`  • ${category}: ${stats.withLogo}/${stats.total} logos (${percentage}%)`);
    });
  
  console.log('\n✅ Brand audit completed!');
}

// Script'i çalıştır
if (require.main === module) {
  auditBrands().catch(console.error);
}

module.exports = { auditBrands };
