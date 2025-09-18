const fs = require('fs').promises;
const path = require('path');

// Companies.json dosyasından company bilgilerini oku
async function loadCompaniesData() {
  try {
    const data = await fs.readFile('data/companies.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading companies.json:', error);
    return [];
  }
}

// Company klasöründeki dosyaları listele
async function getCompanyFiles() {
  try {
    const files = await fs.readdir('public/images/companies');
    return files.filter(file => !file.startsWith('.') && file !== 'placeholder.png');
  } catch (error) {
    console.error('Error reading companies directory:', error);
    return [];
  }
}

// Ana audit fonksiyonu
async function auditCompanies() {
  console.log('🔍 Starting company audit...\n');

  const companies = await loadCompaniesData();
  const existingFiles = await getCompanyFiles();
  
  // Logo yollarından kullanılan dosyaları topla
  const usedFiles = new Set();
  const placeholderCompanies = [];
  const validLogoCompanies = [];
  
  for (const company of companies) {
    const logoPath = company.logo;
    const fileName = path.basename(logoPath);
    
    if (fileName === 'placeholder.png') {
      placeholderCompanies.push(company);
    } else if (existingFiles.includes(fileName)) {
      usedFiles.add(fileName);
      validLogoCompanies.push(company);
    } else {
      console.log(`❌ Missing file for ${company.name}: ${fileName}`);
    }
  }
  
  // Kullanılmayan dosyaları bul
  const unusedFiles = existingFiles.filter(file => !usedFiles.has(file));
  
  console.log('📊 AUDIT RESULTS:\n');
  
  console.log(`📈 SUMMARY:`);
  console.log(`  • Total companies: ${companies.length}`);
  console.log(`  • Companies with valid logos: ${validLogoCompanies.length}`);
  console.log(`  • Companies with placeholder: ${placeholderCompanies.length}`);
  console.log(`  • Total files in folder: ${existingFiles.length}`);
  console.log(`  • Used files: ${usedFiles.size}`);
  console.log(`  • Unused files: ${unusedFiles.length}\n`);
  
  if (placeholderCompanies.length > 0) {
    console.log(`⚠️  COMPANIES STILL USING PLACEHOLDER (${placeholderCompanies.length}):`);
    placeholderCompanies.forEach(company => {
      console.log(`  • ${company.name} (${company.category})`);
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
  companies.forEach(company => {
    const category = company.category;
    if (!categoryStats[category]) {
      categoryStats[category] = { total: 0, withLogo: 0, placeholder: 0 };
    }
    categoryStats[category].total++;
    if (company.logo.includes('placeholder')) {
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
  
  console.log('\n✅ Company audit completed!');
}

// Script'i çalıştır
if (require.main === module) {
  auditCompanies().catch(console.error);
}

module.exports = { auditCompanies };
