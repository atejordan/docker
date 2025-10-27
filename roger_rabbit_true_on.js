function roger_rabbit(n) {
    if (n < 1) return [];
    
    const result = [];
    
    // L'idée clé pour O(n) : utiliser le fait que chaque bit n'est modifié 
    // qu'un nombre limité de fois dans toute la séquence
    
    // Approche: construire les chaînes de manière intelligente
    // en réutilisant les préfixes communs
    
    // Initialisation
    result.push("1"); // Pour n=1
    
    if (n === 1) return result;
    
    // Pour n >= 2, on utilise une approche basée sur les puissances de 2
    let powerOf2 = 2; // Prochaine puissance de 2
    let powerIndex = 1; // 2^1 = 2
    
    for (let i = 2; i <= n; i++) {
        if (i === powerOf2) {
            // Nouveau bit de poids fort : "100...0"
            result.push("1" + "0".repeat(powerIndex));
            powerIndex++;
            powerOf2 *= 2;
        } else {
            // Réutiliser une représentation précédente
            // i = 2^k + r où r < 2^k
            // Donc binaire(i) = "1" + binaire(r) avec padding
            
            // Trouver la plus grande puissance de 2 <= i
            let k = 0;
            let temp = i;
            while (temp > 1) {
                temp = Math.floor(temp / 2);
                k++;
            }
            
            let powerOf2K = 1 << k; // 2^k
            let remainder = i - powerOf2K;
            
            if (remainder === 0) {
                // i est une puissance de 2, déjà traité ci-dessus
                continue;
            } else {
                // Construire à partir de binaire(remainder)
                let remainderBinary = remainder === 0 ? "" : result[remainder - 1];
                
                // Ajouter des zéros de padding si nécessaire
                let targetLength = k;
                let paddedRemainder = remainderBinary.padStart(targetLength, '0');
                
                result.push("1" + paddedRemainder);
            }
        }
    }
    
    return result;
}

// Version alternative plus simple et vraiment O(n)
function roger_rabbit_v2(n) {
    if (n < 1) return [];
    
    const result = [];
    
    // Utiliser une approche récursive/dynamique intelligente
    // Chaque nombre peut être exprimé comme 2^k + reste
    
    // Pré-calculer toutes les puissances de 2 jusqu'à n
    const powersOf2 = [];
    let power = 1;
    while (power <= n) {
        powersOf2.push(power);
        power *= 2;
    }
    
    for (let i = 1; i <= n; i++) {
        // Trouver la représentation binaire de i
        let binary = "";
        let num = i;
        
        // Décomposer en puissances de 2 (de la plus grande à la plus petite)
        for (let j = powersOf2.length - 1; j >= 0; j--) {
            if (num >= powersOf2[j]) {
                binary += "1";
                num -= powersOf2[j];
            } else if (binary.length > 0) {
                binary += "0";
            }
        }
        
        result.push(binary);
    }
    
    return result;
}

// Tests
console.log("=== Version 1 ===");
console.log("n=4:", roger_rabbit(4));
console.log("n=8:", roger_rabbit(8));

console.log("\n=== Version 2 ===");
console.log("n=4:", roger_rabbit_v2(4));
console.log("n=8:", roger_rabbit_v2(8));

module.exports = roger_rabbit_v2;