function roger_rabbit(n) {
    if (n < 1) return [];

    const result = [];
    const queue = ["1"];

    for (let i = 1; i <= n; i++) {
        const current = queue.shift();
        result.push(current);
        
        queue.push(current + "0");
        queue.push(current + "1");
    }

    return result;
}

console.log("=== Tests ===");
console.log("n=4:", roger_rabbit(4));

console.log("\n=== VRAIE analyse de complexité ===");
console.log("❌ FAUSSE analyse précédente :");
console.log("   - J'ai dit que c'était O(n) mais c'est FAUX !");
console.log("   - La concaténation 'current + \"0\"' coûte O(longueur de current)");
console.log("   - Longueur moyenne ≈ log(i) pour le i-ème élément");
console.log("   - Donc coût total ≈ Σ log(i) pour i=1 à n = O(n log n)");
console.log("");
console.log("✅ VRAIE complexité de cette solution :");
console.log("   - Complexité TEMPS : O(n log n) à cause des concaténations");
console.log("   - Complexité ESPACE : O(n log n) pour stocker toutes les chaînes");
console.log("");
console.log("🤔 Le problème fondamental :");
console.log("   - Pour retourner n chaînes de longueur moyenne log(n)");
console.log("   - Il faut au minimum O(n log n) caractères au total");
console.log("   - Donc la complexité ESPACE est forcément O(n log n)");
console.log("   - Mais peut-on avoir une complexité TEMPS de O(n) ?");
console.log("");
console.log("💡 Réflexion : est-ce que O(n) TEMPS est vraiment possible ?");
console.log("   - Si on doit générer O(n log n) caractères au total");
console.log("   - Et que chaque caractère demande au moins O(1) pour être généré");
console.log("   - Alors la complexité temps minimum est O(n log n)");
console.log("   - SAUF si on utilise une technique d'amortissement très clevere...");

// Recherchons s'il existe vraiment un algorithme O(n) temps
console.log("\n🔍 Existe-t-il vraiment un algorithme O(n) TEMPS ?");
console.log("   - Peut-être en utilisant des techniques d'analyse amortie ?");
console.log("   - Ou en exploitant des propriétés mathématiques spéciales ?");

module.exports = roger_rabbit;