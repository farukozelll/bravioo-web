const fs = require('fs').promises;
const path = require('path');

// Brand adını dosya adına uygun formata dönüştüren fonksiyon
function sanitizeBrandName(brandName) {
  return brandName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Özel karakterleri kaldır
    .replace(/\s+/g, '-') // Boşlukları tire ile değiştir
    .replace(/-+/g, '-') // Birden fazla tireyi tek tire yap
    .trim()
    .replace(/^-|-$/g, ''); // Başta ve sonda tire varsa kaldır
}

// Dosya uzantısını koruyarak yeni dosya adı oluştur
function createNewFileName(brandName, extension) {
  const sanitized = sanitizeBrandName(brandName);
  return `${sanitized}${extension}`;
}

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

// Brands.json dosyasını güncelle
async function updateBrandsJson(brands) {
  try {
    await fs.writeFile('data/brands.json', JSON.stringify(brands, null, 2), 'utf8');
    console.log('✅ brands.json updated successfully');
  } catch (error) {
    console.error('❌ Error updating brands.json:', error);
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

// Dosya uzantısını al
function getFileExtension(filename) {
  return path.extname(filename);
}

// Ana işlem fonksiyonu
async function renameBrandLogos() {
  console.log('🚀 Starting brand logo renaming process...\n');

  const brands = await loadBrandsData();
  const existingFiles = await getBrandFiles();
  
  const renamedFiles = new Map();
  const updatedBrands = [];

  console.log('📋 Current files in brands directory:');
  existingFiles.forEach(file => console.log(`  - ${file}`));
  console.log('');

  // Her brand için en uygun logo dosyasını bul ve yeniden adlandır
  for (const brand of brands) {
    const targetName = sanitizeBrandName(brand.name);
    
    // Mevcut logo yolundan dosya adını al
    const currentLogoPath = brand.logo;
    const currentFileName = path.basename(currentLogoPath);
    
    if (currentFileName === 'placeholder.png') {
      // Placeholder olan brandler için uygun dosya ara
      const possibleMatches = existingFiles.filter(file => {
        const fileName = path.parse(file).name.toLowerCase();
        const brandNameLower = brand.name.toLowerCase();
        
        // Brand adının bir kısmını içeren dosyaları bul
        return fileName.includes(brandNameLower.split(' ')[0]) ||
               brandNameLower.split(' ')[0].includes(fileName) ||
               fileName.includes(sanitizeBrandName(brand.name));
      });
      
      if (possibleMatches.length > 0) {
        console.log(`🔍 Found potential matches for "${brand.name}":`, possibleMatches);
        
        // En iyi eşleşmeyi seç (en uzun ortak substring)
        const bestMatch = possibleMatches.reduce((best, current) => {
          const currentScore = getLongestCommonSubstring(
            sanitizeBrandName(brand.name), 
            path.parse(current).name.toLowerCase()
          ).length;
          const bestScore = getLongestCommonSubstring(
            sanitizeBrandName(brand.name), 
            path.parse(best).name.toLowerCase()
          ).length;
          
          return currentScore > bestScore ? current : best;
        });
        
        const extension = getFileExtension(bestMatch);
        const newFileName = createNewFileName(brand.name, extension);
        
        try {
          const oldPath = `public/images/brands/${bestMatch}`;
          const newPath = `public/images/brands/${newFileName}`;
          
          // Dosyayı yeniden adlandır
          await fs.rename(oldPath, newPath);
          
          renamedFiles.set(bestMatch, newFileName);
          brand.logo = `/images/brands/${newFileName}`;
          
          console.log(`✅ Renamed: ${bestMatch} → ${newFileName}`);
        } catch (error) {
          console.error(`❌ Error renaming ${bestMatch}:`, error);
        }
      } else {
        console.log(`⚠️  No matching file found for "${brand.name}"`);
      }
    } else if (existingFiles.includes(currentFileName)) {
      // Mevcut dosya varsa yeniden adlandır
      const extension = getFileExtension(currentFileName);
      const newFileName = createNewFileName(brand.name, extension);
      
      if (currentFileName !== newFileName) {
        try {
          const oldPath = `public/images/brands/${currentFileName}`;
          const newPath = `public/images/brands/${newFileName}`;
          
          await fs.rename(oldPath, newPath);
          
          renamedFiles.set(currentFileName, newFileName);
          brand.logo = `/images/brands/${newFileName}`;
          
          console.log(`✅ Renamed: ${currentFileName} → ${newFileName}`);
        } catch (error) {
          console.error(`❌ Error renaming ${currentFileName}:`, error);
        }
      }
    }
    
    updatedBrands.push(brand);
  }

  // Brands.json dosyasını güncelle
  await updateBrandsJson(updatedBrands);

  console.log('\n📊 Summary:');
  console.log(`  - Total brands: ${brands.length}`);
  console.log(`  - Files renamed: ${renamedFiles.size}`);
  console.log(`  - Placeholder brands: ${brands.filter(b => b.logo.includes('placeholder')).length}`);

  console.log('\n🎉 Brand logo renaming process completed!');
}

// En uzun ortak substring bulan yardımcı fonksiyon
function getLongestCommonSubstring(str1, str2) {
  let longest = '';
  for (let i = 0; i < str1.length; i++) {
    for (let j = i + 1; j <= str1.length; j++) {
      const substring = str1.slice(i, j);
      if (str2.includes(substring) && substring.length > longest.length) {
        longest = substring;
      }
    }
  }
  return longest;
}

// Script'i çalıştır
if (require.main === module) {
  renameBrandLogos().catch(console.error);
}

module.exports = { renameBrandLogos, sanitizeBrandName };
