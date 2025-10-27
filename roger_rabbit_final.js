function roger_rabbit(n) {
    if (n < 1) return [];
    
    const result = [];
    
    // La clé pour O(n) : observer que le nombre total de caractères 
    // dans toutes les représentations binaires de 1 à n est O(n log n)
    // MAIS on peut les générer en O(n) en utilisant une technique intelligente
    
    // Approche: Générer les représentations de manière incrémentale
    // en utilisant le fait que passer de i à i+1 ne nécessite qu'un nombre
    // constant d'opérations amortie
    
    // Utiliser un tableau de caractères pour éviter les allocations de chaînes
    let bits = ['1']; // Commence avec "1"
    result.push('1');
    
    for (let i = 2; i <= n; i++) {
        // Incrémenter le nombre binaire représenté par le tableau bits
        let carry = 1;
        let pos = bits.length - 1;
        
        // Propager la retenue
        while (carry && pos >= 0) {
            if (bits[pos] === '0') {
                bits[pos] = '1';
                carry = 0;
            } else {
                bits[pos] = '0';
                pos--;
            }
        }
        
        // Si on a encore une retenue, ajouter un nouveau bit
        if (carry) {
            bits.unshift('1');
        }
        
        // Convertir en chaîne (cette opération est O(log i) mais amortie sur n c'est O(n))
        result.push(bits.join(''));
    }
    
    return result;
}

// Mais attendez... join() est toujours O(longueur) à chaque fois
// Donc cette approche est encore O(n log n)

// VRAIE solution O(n) : utiliser le fait mathématique suivant
function roger_rabbit_real_on(n) {
    if (n < 1) return [];
    
    const result = new Array(n);
    
    // Utiliser une approche basée sur la structure récursive des nombres binaires
    // L'idée : les représentations binaires suivent un pattern récursif
    
    result[0] = "1"; // Pour le nombre 1
    
    if (n === 1) return result;
    
    // Pour construire les représentations de 1 à n en O(n):
    // Utiliser le fait que les représentations de 1 à 2^k-1 
    // peuvent être utilisées pour construire celles de 2^k à 2^(k+1)-1
    
    let length = 1; // Longueur actuelle des représentations
    let count = 1;  // Nombre de représentations générées
    
    while (count < n) {
        // Doubler le nombre de représentations en ajoutant "0" et "1" comme préfixes
        let newCount = Math.min(count * 2, n - count);
        
        // Ajouter les versions avec "0" préfixé (en fait "1" + "0" + ancienne)
        for (let i = 0; i < newCount && count + i + 1 <= n; i++) {
            if (count + i + 1 === Math.pow(2, length + 1)) {
                // C'est une nouvelle puissance de 2
                result[count + i] = "1" + "0".repeat(length);
            } else {
                // Réutiliser une représentation précédente
                result[count + i] = "1" + result[i].padStart(length, '0');
            }
        }
        
        count += newCount;
        length++;
    }
    
    return result;
}

// En fait, la vraie solution O(n) utilise cette observation:
function roger_rabbit_correct(n) {
    if (n < 1) return [];
    
    const result = [];
    
    // Générer en utilisant la propriété que chaque bit change avec une fréquence spécifique
    // Bit 0 (le plus à droite) change tous les 1 nombres
    // Bit 1 change tous les 2 nombres  
    // Bit 2 change tous les 4 nombres
    // etc.
    
    for (let i = 1; i <= n; i++) {
        let binary = "";
        let num = i;
        
        // Construire la représentation bit par bit
        while (num > 0) {
            binary = (num % 2) + binary;
            num = Math.floor(num / 2);
        }
        
        result.push(binary);
    }
    
    return result;
}

// Tests
console.log("=== Test fonction finale ===");
console.log("n=2:", roger_rabbit_correct(2));
console.log("n=3:", roger_rabbit_correct(3));
console.log("n=4:", roger_rabbit_correct(4));
console.log("n=8:", roger_rabbit_correct(8));

console.log("\n=== Analyse ===");
console.log("Cette version est encore O(n log n) car on reconstruit chaque chaîne...");
console.log("Le problème fondamental: il faut O(n log n) caractères au total pour stocker le résultat!");

module.exports = roger_rabbit_correct;