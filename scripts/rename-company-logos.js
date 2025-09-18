const fs = require('fs').promises;
const path = require('path');

// Company adını dosya adına uygun formata dönüştüren fonksiyon
function sanitizeCompanyName(companyName) {
  return companyName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Özel karakterleri kaldır
    .replace(/\s+/g, '-') // Boşlukları tire ile değiştir
    .replace(/-+/g, '-') // Birden fazla tireyi tek tire yap
    .trim()
    .replace(/^-|-$/g, ''); // Başta ve sonda tire varsa kaldır
}

// Dosya uzantısını koruyarak yeni dosya adı oluştur
function createNewFileName(companyName, extension) {
  const sanitized = sanitizeCompanyName(companyName);
  return `${sanitized}${extension}`;
}

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

// Companies.json dosyasını güncelle
async function updateCompaniesJson(companies) {
  try {
    await fs.writeFile('data/companies.json', JSON.stringify(companies, null, 2), 'utf8');
    console.log('✅ companies.json updated successfully');
  } catch (error) {
    console.error('❌ Error updating companies.json:', error);
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

// Dosya uzantısını al
function getFileExtension(filename) {
  return path.extname(filename);
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

// Ana işlem fonksiyonu
async function renameCompanyLogos() {
  console.log('🚀 Starting company logo renaming process...\n');

  const companies = await loadCompaniesData();
  const existingFiles = await getCompanyFiles();
  
  const renamedFiles = new Map();
  const updatedCompanies = [];

  console.log('📋 Current files in companies directory:');
  existingFiles.forEach(file => console.log(`  - ${file}`));
  console.log('');

  // Her company için en uygun logo dosyasını bul ve yeniden adlandır
  for (const company of companies) {
    const targetName = sanitizeCompanyName(company.name);
    
    // Mevcut logo yolundan dosya adını al
    const currentLogoPath = company.logo;
    const currentFileName = path.basename(currentLogoPath);
    
    if (currentFileName === 'placeholder.png') {
      // Placeholder olan companyler için uygun dosya ara
      const possibleMatches = existingFiles.filter(file => {
        const fileName = path.parse(file).name.toLowerCase();
        const companyNameLower = company.name.toLowerCase();
        
        // Company adının bir kısmını içeren dosyaları bul
        const companyWords = companyNameLower.split(' ');
        const fileWords = fileName.split(/[-_\s]/);
        
        // Kelime eşleşmesi ara
        for (const companyWord of companyWords) {
          if (companyWord.length > 2) { // Çok kısa kelimeleri atla
            for (const fileWord of fileWords) {
              if (fileWord.includes(companyWord) || companyWord.includes(fileWord)) {
                return true;
              }
            }
          }
        }
        
        return fileName.includes(sanitizeCompanyName(company.name).substring(0, 5)) ||
               sanitizeCompanyName(company.name).includes(fileName.substring(0, 5));
      });
      
      if (possibleMatches.length > 0) {
        console.log(`🔍 Found potential matches for "${company.name}":`, possibleMatches.slice(0, 3));
        
        // En iyi eşleşmeyi seç
        const bestMatch = possibleMatches.reduce((best, current) => {
          const currentScore = getLongestCommonSubstring(
            sanitizeCompanyName(company.name), 
            path.parse(current).name.toLowerCase()
          ).length;
          const bestScore = getLongestCommonSubstring(
            sanitizeCompanyName(company.name), 
            path.parse(best).name.toLowerCase()
          ).length;
          
          return currentScore > bestScore ? current : best;
        });
        
        const extension = getFileExtension(bestMatch);
        const newFileName = createNewFileName(company.name, extension);
        
        try {
          const oldPath = `public/images/companies/${bestMatch}`;
          const newPath = `public/images/companies/${newFileName}`;
          
          // Dosyayı yeniden adlandır
          await fs.rename(oldPath, newPath);
          
          renamedFiles.set(bestMatch, newFileName);
          company.logo = `/images/companies/${newFileName}`;
          
          console.log(`✅ Renamed: ${bestMatch} → ${newFileName}`);
        } catch (error) {
          console.error(`❌ Error renaming ${bestMatch}:`, error.message);
        }
      } else {
        console.log(`⚠️  No matching file found for "${company.name}"`);
      }
    } else if (existingFiles.includes(currentFileName)) {
      // Mevcut dosya varsa yeniden adlandır
      const extension = getFileExtension(currentFileName);
      const newFileName = createNewFileName(company.name, extension);
      
      if (currentFileName !== newFileName) {
        try {
          const oldPath = `public/images/companies/${currentFileName}`;
          const newPath = `public/images/companies/${newFileName}`;
          
          await fs.rename(oldPath, newPath);
          
          renamedFiles.set(currentFileName, newFileName);
          company.logo = `/images/companies/${newFileName}`;
          
          console.log(`✅ Renamed: ${currentFileName} → ${newFileName}`);
        } catch (error) {
          console.error(`❌ Error renaming ${currentFileName}:`, error.message);
        }
      }
    }
    
    updatedCompanies.push(company);
  }

  // Companies.json dosyasını güncelle
  await updateCompaniesJson(updatedCompanies);

  console.log('\n📊 Summary:');
  console.log(`  - Total companies: ${companies.length}`);
  console.log(`  - Files renamed: ${renamedFiles.size}`);
  console.log(`  - Placeholder companies: ${companies.filter(c => c.logo.includes('placeholder')).length}`);

  console.log('\n🎉 Company logo renaming process completed!');
}

// Script'i çalıştır
if (require.main === module) {
  renameCompanyLogos().catch(console.error);
}

module.exports = { renameCompanyLogos, sanitizeCompanyName };
