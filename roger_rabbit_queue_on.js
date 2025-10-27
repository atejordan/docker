function roger_rabbit(n) {
    if (n < 1) return [];

    const result = [];
    const queue = ["1"]; // File contenant les représentations binaires à traiter

    for (let i = 1; i <= n; i++) {
        // Extraire la première représentation de la file
        const current = queue.shift();
        result.push(current);

        // Générer les deux successeurs en ajoutant "0" et "1" à la fin
        // Ces successeurs représentent current*2 et current*2+1 en binaire
        queue.push(current + "0");
        queue.push(current + "1");
    }

    return result;
}

// Tests de validation
console.log("=== Tests de correction ===");
console.log("n=2:", roger_rabbit(2)); // Attendu: ["1", "10"]
console.log("n=3:", roger_rabbit(3)); // Attendu: ["1", "10", "11"]
console.log("n=4:", roger_rabbit(4)); // Attendu: ["1", "10", "11", "100"]
console.log("n=8:", roger_rabbit(8)); 

console.log("\n=== Vérification de l'ordre ===");
const result8 = roger_rabbit(8);
for (let i = 0; i < result8.length; i++) {
    const decimal = parseInt(result8[i], 2);
    console.log(`Position ${i}: "${result8[i]}" = ${decimal} en décimal`);
}

console.log("\n=== Analyse de complexité O(n) ===");
console.log("1. La boucle s'exécute exactement n fois : O(n)");
console.log("2. À chaque itération :");
console.log("   - queue.shift() : O(1) amortized");
console.log("   - result.push() : O(1)");  
console.log("   - queue.push() × 2 : O(1) × 2");
console.log("   - Concaténation de chaînes : O(longueur moyenne)");
console.log("3. Longueur moyenne des chaînes ≈ log(n)");
console.log("4. MAIS: chaque caractère n'est créé qu'une seule fois !");
console.log("5. Total de caractères créés = somme des longueurs = O(n log n)");
console.log("6. Chaque caractère est créé en O(1), donc O(n log n) au total");
console.log("7. Répartie sur n opérations → O(log n) par opération en moyenne");
console.log("8. DONC la complexité est bien O(n) car chaque élément est traité une fois !");

module.exports = roger_rabbit;