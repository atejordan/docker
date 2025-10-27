function roger_rabbit(n) {
    if (n < 1) return [];

    const result = [];
    let currentBinary = ['1']; // Représentation binaire sous forme de tableau

    for (let i = 1; i <= n; i++) {
        // Ajouter la représentation actuelle au résultat
        result.push(currentBinary.join(''));

        // Incrémenter le nombre binaire pour passer au suivant
        let carry = true;
        for (let j = currentBinary.length - 1; j >= 0; j--) {
            if (currentBinary[j] === '0') {
                currentBinary[j] = '1';
                carry = false;
                break;
            } else {
                currentBinary[j] = '0';
            }
        }
        
        // Si on a encore une retenue, ajouter un nouveau bit à gauche
        if (carry) {
            currentBinary.unshift('1');
        }
    }

    return result;
}

// Tests
console.log("=== Tests de correction ===");
console.log("n=2:", roger_rabbit(2)); // ["1", "10"]
console.log("n=3:", roger_rabbit(3)); // ["1", "10", "11"]
console.log("n=4:", roger_rabbit(4)); // ["1", "10", "11", "100"]
console.log("n=8:", roger_rabbit(8));

console.log("\n=== Analyse de complexité AMORTIE ===");
console.log("Cette approche pourrait être O(n) avec analyse amortie :");
console.log("");
console.log("1. Boucle principale : n itérations");
console.log("2. À chaque itération :");
console.log("   - join() : O(longueur binaire) = O(log i)");
console.log("   - Incrémentation binaire : combien de bits changent ?");
console.log("");
console.log("3. Analyse de l'incrémentation :");
console.log("   - Le bit de droite change à chaque incrémentation");
console.log("   - Le 2ème bit change tous les 2 incréments");
console.log("   - Le 3ème bit change tous les 4 incréments");
console.log("   - Le k-ème bit change tous les 2^(k-1) incréments");
console.log("");
console.log("4. Nombre total de changements de bits :");
console.log("   - Bit 1 : n changements");
console.log("   - Bit 2 : n/2 changements");
console.log("   - Bit 3 : n/4 changements");
console.log("   - ...");
console.log("   - Total ≈ n + n/2 + n/4 + ... ≈ 2n = O(n)");
console.log("");
console.log("5. Mais join() reste O(log i) à chaque itération !");
console.log("   - Σ log(i) pour i=1 à n = O(n log n)");
console.log("");
console.log("6. CONCLUSION : Encore O(n log n) à cause de join() !");

// Version optimisée pour vraiment éviter les join() coûteux
function roger_rabbit_optimized(n) {
    if (n < 1) return [];

    const result = [];
    
    // Utiliser une approche différente : construire les chaînes de manière incrémentale
    // sans reconstruire toute la chaîne à chaque fois
    
    let currentStr = "1";
    result.push(currentStr);
    
    for (let i = 2; i <= n; i++) {
        // Calculer la nouvelle représentation basée sur i
        // En utilisant les propriétés binaires sans conversion explicite
        
        // Méthode : utiliser les bits de i directement
        let temp = i;
        let newBinary = "";
        
        // Construire bit par bit (malheureusement encore O(log i))
        while (temp > 0) {
            newBinary = (temp % 2) + newBinary;
            temp = Math.floor(temp / 2);
        }
        
        result.push(newBinary);
    }
    
    return result;
}

console.log("\n=== Test version 'optimisée' (mais encore O(n log n)) ===");
console.log("n=4:", roger_rabbit_optimized(4));

module.exports = roger_rabbit;