function roger_rabbit(n) {
    if (n < 1) return [];
    
    const result = [];
    
    // Représenter chaque nombre binaire comme un tableau de bits (0 et 1)
    // pour éviter les manipulations coûteuses de chaînes
    let currentBits = [1]; // Commence avec "1" (nombre 1)
    result.push("1");
    
    for (let i = 2; i <= n; i++) {
        // Simuler l'incrémentation binaire
        // Trouver la position du premier 0 en partant de la droite
        let pos = 0;
        
        // Tant qu'on a un 1, le changer en 0 et continuer
        while (pos < currentBits.length && currentBits[currentBits.length - 1 - pos] === 1) {
            currentBits[currentBits.length - 1 - pos] = 0;
            pos++;
        }
        
        // Si on a dépassé la longueur, ajouter un nouveau bit à gauche
        if (pos === currentBits.length) {
            currentBits.unshift(1); // Ajouter 1 au début
        } else {
            // Sinon, changer le 0 en 1
            currentBits[currentBits.length - 1 - pos] = 1;
        }
        
        // Convertir le tableau de bits en chaîne
        result.push(currentBits.join(''));
    }
    
    return result;
}

// Tests
console.log("=== Tests de correction ===");
console.log("n=2:", roger_rabbit(2)); // ["1", "10"]
console.log("n=3:", roger_rabbit(3)); // ["1", "10", "11"]
console.log("n=4:", roger_rabbit(4)); // ["1", "10", "11", "100"]
console.log("n=8:", roger_rabbit(8));

console.log("\n=== Analyse de complexité ===");
console.log("Cette approche est encore O(n log n) à cause de join()...");

module.exports = roger_rabbit;